import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Mail, Phone, Link, MapPin } from "lucide-react";
import {
  site,
  resumeMeta,
  resumeExperience,
  resumeEducation,
  resumeSkills,
  type ResumeEntry,
} from "@/lib/content";
import { ResumePrintButton } from "@/components/site/resume-print-button";
import { GitHubIcon, LinkedInMarkIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Resume",
  robots: { index: false },
};

// Single sans-serif for the whole resume. ATS parsers re-tokenize the PDF from
// glyph positions, so the resume avoids letter-spacing entirely and uses Inter,
// whose kerning survives Chromium's print pipeline without inserting phantom
// word breaks (Noto Sans split "T?" pairs: "T ypeScript", "T he").
const resumeFont = Inter({ subsets: ["latin"], style: ["normal", "italic"] });

export default function ResumePage() {
  return (
    <div className={`${resumeFont.className} min-h-screen bg-slate-100 print:bg-white`}>

      {/* Screen-only print button */}
      <div className="resume-screen-only flex justify-center gap-4 py-6 print:hidden">
        <ResumePrintButton />
      </div>

      {/* Paper */}
      <div className="mx-auto bg-white text-muted-foreground print-page print-page-break relative">

        {/* ── Header ── */}
        <header
          className="bg-dark text-white grid grid-cols-[1fr_auto] grid-rows-2 gap-y-3 justify-between items-start font-normal grid-rows-[auto_auto]"
          style={{ padding: "0.25in 0.375in", columnGap: "0.375in" }}
        >
          <div>
            <h1
              className={`${resumeFont.className} font-bold text-white leading-none`}
              style={{ fontSize: "24pt" }}
            >
              {site.name}
            </h1>
            <p className="text-brand-on-dark font-semibold" style={{ fontSize: "10.5pt" }}>
              {site.role}
            </p>
            </div>

          <div
            className="grid gap-2 row-span-2 col-2 tabular-nums"
            style={{ fontSize: "9pt" }}
          >
            {[
              { icon: <Link className="size-2.5" />, text: "danwelch.net", link: site.currentSite },
              { icon: <Mail className="size-2.5" />, text: site.email, link: `mailto:${site.email}` },
              { icon: <Phone className="size-2.5" />, text: site.phone, link: `tel:${site.phone}` },
              { icon: <GitHubIcon className="size-2.5" />, text: "github.com/danwelch", link: site.socials.github },
              { icon: <LinkedInMarkIcon className="size-2.5" />, text: "linkedin.com/in/danieldwelch", link: site.socials.linkedin },
              { icon: <MapPin className="size-2.5" />, text: "Hampden, ME | Remote", link: "https://www.google.com/maps/place/Hampden,+ME" },
            ].map((item, i) => (
              <a key={i} 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer" className="group flex items-center justify-end gap-2 text-slate-300 hover:text-white transition-colors">
                {item.text}
                <span
                  className="flex items-center justify-center shrink-0 size-4 bg-slate-400 text-dark rounded-xs transition-colors group-hover:bg-white"
                >
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
            <div>
            <p className="font-semibold uppercase text-white" style={{ fontSize: "9pt" }}>Summary</p>
            <p className="text-slate-300 mt-1 font-normal text-pretty" style={{ fontSize: "9.5pt" }}>
              {resumeMeta.summary}
            </p>
          </div>
        </header>

        {/* Leadership Highlights */}
        <Section title="Highlights">
          <ul className="list-disc text-foreground" style={{ paddingLeft: "0.25in", marginBottom: 0 }}>
            {resumeMeta.leadershipHighlights.map((item) => (
              <li key={item} style={{ fontSize: "10pt" }}>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          {resumeExperience.slice(0, 2).map((entry) => (
            <ExperienceEntry key={entry.role + entry.company} entry={entry} />
          ))}
        </Section>
        <Footer page={1} totalPages={2} />
      </div>

      {/* Page 2 */}
      <div className="mx-auto bg-white text-muted-foreground print-page relative" style={{ paddingTop: "0.25in" }}>

        <Section title="Experience (continued)">
          {resumeExperience.slice(2).map((entry) => (
            <ExperienceEntry key={entry.role + entry.company} entry={entry} />
          ))}
        </Section>

        {/* Skills */}
        <Section title="Skills">
          {/* Two explicit flex columns instead of CSS multi-column, which
              Chrome's print engine collapses into a single column in the PDF. */}
          <div style={{ display: "flex", gap: "0.25in", alignItems: "flex-start" }}>
            {[
              resumeSkills.slice(0, Math.ceil(resumeSkills.length / 2)),
              resumeSkills.slice(Math.ceil(resumeSkills.length / 2)),
            ].map((column, i) => (
              <div key={i} style={{ flex: 1 }}>
                {column.map((group) => (
                  <div key={group.label} style={{ marginBottom: "0.125in" }}>
                    <SectionSubtitle>{group.label}:</SectionSubtitle>
                    <div className="text-muted-foreground" style={{ fontSize: "9pt" }}>
                      {group.items.join(", ")}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          {resumeEducation.map((entry) => (
            <SectionGrid key={entry.school + entry.degree}>
              <div>
                <SectionSubtitle>{entry.school}</SectionSubtitle>
                <SectionEyebrow>{entry.degree}</SectionEyebrow> 
                {entry.award ? (<span className="text-muted-foreground font-normal italic" style={{ fontSize: "9pt" }}>{entry.award}</span>) : ''}
              </div>
              <SectionRight date={entry.period} location={entry.location} />
            </SectionGrid>
          ))}
        </Section>

        <Footer page={2} totalPages={2} />
      </div>
    </div>
  );
}

function ExperienceEntry({ entry }: { entry: ResumeEntry }) {
  return (  
    <SectionGrid marginBottom="0.125in">
      <div>
        <SectionSubtitle>
          {entry.company}
          {entry.companyNote ? (
            <em className="font-normal text-muted-foreground"> ({entry.companyNote})</em>
          ) : null}
        </SectionSubtitle>
        <SectionEyebrow>{entry.role}</SectionEyebrow>
      </div>
      <SectionRight date={entry.period} location={entry.location} />
      <ul className="list-disc col-span-2" style={{ paddingLeft: "0.25in", marginBottom: 0, fontSize: "9.5pt" }}>
        {entry.bullets.map((bullet) => (
          <li key={bullet.bold} className="mb-1 text-pretty marker:text-foreground">
            <strong className="text-foreground font-semibold">{bullet.bold}</strong>
            {bullet.rest}
          </li>
        ))} 
      </ul>
    </SectionGrid>
  );
}

function SectionGrid({
  children,
  marginBottom = "0.1875in",
}: {
  marginBottom?: string | number;
  children?: React.ReactNode;
}) {
  return (
    <div className="grid" style={{ gridTemplateColumns: "1fr max-content", columnGap: "0.375in", marginBottom }}>
      {children}
    </div>
  );
}

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-semibold text-muted-foreground border-b border-border uppercase pb-1 mb-3">{children}</div>
  );
}

function SectionSubtitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-foreground font-bold" style={{ fontSize: "10.5pt" }}>{children}</div>
  );
}

function SectionEyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-semibold text-brand mb-2" style={{ fontSize: "9.5pt" }}>{children}</div>
  );
}

function SectionRight({
  date,
  location,
}: {
  date: string;
  location: string;
}) {
  return (
    <div className="text-right">
      {/* Tabular figures on dates and contact only: Inter's tnum also widens
          hyphens to digit width, which gaps hyphenated words in body prose. */}
      <div className="text-foreground font-semibold tabular-nums" style={{ fontSize: "9pt" }}>{date}</div>
      <div className="text-muted-foreground" style={{ fontSize: "9pt" }}>{location}</div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ margin: "0.25in 0.375in 0" }}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
}

function Footer({
  page = 1,
  totalPages = 2,
}: {
  page: number;
  totalPages: number;
}) {
  return (
    <footer className="text-muted-foreground flex justify-between absolute bottom-0 left-0 right-0" style={{ fontSize: "7.5pt", padding: "0 0.375in 0.25in" }}>
      <span className="inline-flex items-center gap-2"><span>© {new Date().getFullYear()}</span> · <span>{site.name}</span> · <a className="hover:text-foreground transition-colors" href={`mailto:${site.email}`}>{site.email}</a></span>
      <span>Page {page} of {totalPages}</span>
    </footer>
  );
} 