"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ResumePrintButton } from "@/components/site/resume-print-button";
import { createDefaultDraft, pdfFileName } from "./content";
import {
  getDraftsSnapshot,
  getServerDraftsSnapshot,
  setDraftsStore,
  subscribeDrafts,
  type CoverLetterDraft,
} from "./drafts";
import { LetterSheet } from "./letter-sheet";

export function CoverLetterApp({ fontClassName }: { fontClassName: string }) {
  const store = useSyncExternalStore(subscribeDrafts, getDraftsSnapshot, getServerDraftsSnapshot);
  const [overflowing, setOverflowing] = useState(false);
  const paperRef = useRef<HTMLDivElement>(null);

  const activeDraft = store ? store.drafts[store.activeId] : null;

  useEffect(() => {
    if (!activeDraft) return;

    const paper = paperRef.current;
    if (!paper) return;

    setOverflowing(paper.scrollHeight > paper.clientHeight + 1);
  }, [activeDraft]);

  useEffect(() => {
    const company = activeDraft?.company ?? "";
    let previous = document.title;

    const before = () => {
      previous = document.title;
      (document.activeElement as HTMLElement | null)?.blur?.();
      document.title = pdfFileName(company);
    };
    const after = () => {
      document.title = previous;
    };

    window.addEventListener("beforeprint", before);
    window.addEventListener("afterprint", after);
    return () => {
      window.removeEventListener("beforeprint", before);
      window.removeEventListener("afterprint", after);
    };
  }, [activeDraft?.company]);

  function updateField(field: keyof CoverLetterDraft, value: string) {
    if (!store) return;
    const draft = store.drafts[store.activeId];
    if (!draft) return;

    setDraftsStore({
      ...store,
      drafts: {
        ...store.drafts,
        [store.activeId]: { ...draft, [field]: value, updatedAt: Date.now() },
      },
    });
  }

  function handleNewDraft() {
    if (!store) return;
    const draft = createDefaultDraft(crypto.randomUUID());
    setDraftsStore({
      ...store,
      activeId: draft.id,
      drafts: { ...store.drafts, [draft.id]: draft },
    });
  }

  function handleSwitchDraft(id: string) {
    if (!store) return;
    setDraftsStore({ ...store, activeId: id });
  }

  function handleDeleteDraft() {
    if (!store) return;
    if (!window.confirm("Delete this draft? This can't be undone.")) return;

    const remainingIds = Object.keys(store.drafts).filter((id) => id !== store.activeId);

    if (remainingIds.length === 0) {
      const draft = createDefaultDraft(crypto.randomUUID());
      setDraftsStore({ version: 1, activeId: draft.id, drafts: { [draft.id]: draft } });
      return;
    }

    const drafts = { ...store.drafts };
    delete drafts[store.activeId];
    setDraftsStore({ ...store, activeId: remainingIds[0], drafts });
  }

  return (
    <div className={`${fontClassName} min-h-screen bg-slate-100 print:bg-white`}>
      <div className="resume-screen-only flex justify-center items-center gap-4 py-6 print:hidden">
        {store && activeDraft ? (
          <>
            <select
              value={store.activeId}
              onChange={(event) => handleSwitchDraft(event.target.value)}
              className="border border-border bg-white rounded-xs px-3 py-2 text-sm"
              aria-label="Select draft"
            >
              {Object.values(store.drafts).map((draft) => (
                <option key={draft.id} value={draft.id}>
                  {draft.company || "Untitled"}
                </option>
              ))}
            </select>
            <button
              onClick={handleNewDraft}
              className="bg-dark text-white font-body text-sm font-medium px-5 py-2 rounded-xs cursor-pointer hover:opacity-80 transition-opacity"
            >
              New draft
            </button>
            <button
              onClick={handleDeleteDraft}
              className="bg-dark text-white font-body text-sm font-medium px-5 py-2 rounded-xs cursor-pointer hover:opacity-80 transition-opacity"
            >
              Delete
            </button>
            <ResumePrintButton />
          </>
        ) : null}
      </div>

      {overflowing && (
        <div className="resume-screen-only mx-auto max-w-[8.5in] mb-4 px-4 print:hidden">
          <p className="bg-amber-100 text-amber-900 text-sm rounded-xs px-4 py-2">
            Letter is longer than one page and will be cut off in the PDF.
          </p>
        </div>
      )}

      {activeDraft ? (
        <LetterSheet
          key={activeDraft.id}
          draft={activeDraft}
          onChange={updateField}
          paperRef={paperRef}
          fontClassName={fontClassName}
        />
      ) : (
        <div className="mx-auto bg-white print-page" />
      )}
    </div>
  );
}
