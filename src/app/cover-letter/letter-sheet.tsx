import type { RefObject } from "react";
import { Mail, Link } from "lucide-react";
import { site } from "@/lib/content";
import { EditableLine, EditableBody } from "./editable";
import type { CoverLetterDraft } from "./drafts";

const CONTACT_ITEMS = [
  { icon: <Link className="size-2.5" />, text: "danwelch.net", link: site.currentSite },
  { icon: <Mail className="size-2.5" />, text: site.email, link: `mailto:${site.email}` },
];

type LetterSheetProps = {
  draft: CoverLetterDraft;
  onChange: (field: keyof CoverLetterDraft, value: string) => void;
  paperRef: RefObject<HTMLDivElement | null>;
  fontClassName: string;
};

export function LetterSheet({ draft, onChange, paperRef, fontClassName }: LetterSheetProps) {
  return (
    <div ref={paperRef} className="mx-auto bg-white text-muted-foreground print-page relative">
      <header className="bg-dark text-white font-normal" style={{ padding: "0.25in 0.375in" }}>
        {/* globals.css forces h1/h2/h3 to font-heading (Bitter); override
            back to the letter's static Inter, matching the resume's h1. */}
        <h1 className={`${fontClassName} font-bold text-white leading-none`} style={{ fontSize: "24pt" }}>
          {site.name}
        </h1>
        <EditableLine
          value={draft.title}
          onCommit={(value) => onChange("title", value)}
          ariaLabel="Job title"
          placeholder="Job title"
          className="text-brand-on-dark font-semibold"
          style={{ fontSize: "10.5pt" }}
        />

        <div className="flex flex-wrap items-center gap-4 mt-4 tabular-nums" style={{ fontSize: "9pt" }}>
          {CONTACT_ITEMS.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <span className="flex items-center justify-center shrink-0 size-4 bg-slate-400 text-dark rounded-xs transition-colors group-hover:bg-white">
                {item.icon}
              </span>
              {item.text}
            </a>
          ))}
        </div>
      </header>

      <div style={{ margin: "0.3in 0.375in 0" }}>
        <EditableLine
          value={draft.date}
          onCommit={(value) => onChange("date", value)}
          ariaLabel="Date"
          className="tabular-nums"
          style={{ fontSize: "9.5pt" }}
        />

        <div className="mt-4">
          <EditableLine
            value={draft.recipient}
            onCommit={(value) => onChange("recipient", value)}
            ariaLabel="Recipient"
            placeholder="Hiring Team"
            className="text-foreground font-semibold"
            style={{ fontSize: "10pt" }}
          />
          <EditableLine
            value={draft.company}
            onCommit={(value) => onChange("company", value)}
            ariaLabel="Company name"
            placeholder="Company name"
            style={{ fontSize: "10pt" }}
          />
          <EditableLine
            value={draft.reference ?? ""}
            onCommit={(value) => onChange("reference", value)}
            ariaLabel="Reference line"
            placeholder="Re: [Role], [Company] (Job ID)"
            className="italic mt-2"
            style={{ fontSize: "9.5pt" }}
          />
        </div>

        <EditableLine
          value={draft.greeting}
          onCommit={(value) => onChange("greeting", value)}
          ariaLabel="Greeting"
          placeholder="Dear Hiring Team,"
          className="text-foreground mt-4"
          style={{ fontSize: "10pt" }}
        />

        <EditableBody
          value={draft.body}
          onCommit={(value) => onChange("body", value)}
          ariaLabel="Letter body"
          placeholder="Write your letter..."
          className="mt-4"
          style={{ fontSize: "10pt", lineHeight: 1.5 }}
        />

        <div className="mt-4">
          <EditableLine
            value={draft.closing}
            onCommit={(value) => onChange("closing", value)}
            ariaLabel="Closing"
            placeholder="Sincerely,"
            style={{ fontSize: "10pt" }}
          />
          <div className="text-foreground font-semibold mt-6" style={{ fontSize: "10pt" }}>
            {site.name}
          </div>
        </div>
      </div>
    </div>
  );
}
