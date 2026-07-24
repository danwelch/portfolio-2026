import { createDefaultDraft } from "./content";

export type CoverLetterDraft = {
  id: string;
  company: string;
  title: string;
  date: string;
  recipient: string;
  reference: string;
  greeting: string;
  body: string;
  closing: string;
  updatedAt: number;
};

export type CoverLetterStore = {
  version: 1;
  activeId: string;
  drafts: Record<string, CoverLetterDraft>;
};

const STORAGE_KEY = "cover-letter-drafts";

function freshStore(): CoverLetterStore {
  const draft = createDefaultDraft(crypto.randomUUID());
  return {
    version: 1,
    activeId: draft.id,
    drafts: { [draft.id]: draft },
  };
}

function readFromLocalStorage(): CoverLetterStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return freshStore();

    const parsed = JSON.parse(raw) as CoverLetterStore;
    if (
      parsed.version !== 1 ||
      !parsed.activeId ||
      !parsed.drafts ||
      !parsed.drafts[parsed.activeId]
    ) {
      return freshStore();
    }

    return parsed;
  } catch {
    return freshStore();
  }
}

// Module-level store for useSyncExternalStore: localStorage is a mutable
// external system, and this is React's sanctioned way to read one without
// tripping the "no setState in effects" rule. `snapshot` is populated lazily
// (client-only) and only ever reassigned by setDraftsStore, so repeated
// getDraftsSnapshot() calls return a stable reference until something
// actually changes.
let snapshot: CoverLetterStore | null = null;
let listeners: Array<() => void> = [];

export function subscribeDrafts(listener: () => void): () => void {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

export function getDraftsSnapshot(): CoverLetterStore | null {
  if (snapshot === null) {
    snapshot = readFromLocalStorage();
  }
  return snapshot;
}

// Server has no localStorage; this also covers the initial client hydration
// pass, rendering the empty shell so hydration output matches the server.
export function getServerDraftsSnapshot(): CoverLetterStore | null {
  return null;
}

export function setDraftsStore(next: CoverLetterStore): void {
  snapshot = next;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  listeners.forEach((listener) => listener());
}
