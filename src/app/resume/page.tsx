import type { Metadata } from "next";
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

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-100 print:bg-white">

      {/* Screen-only print button */}
      <div className="resume-screen-only flex justify-center gap-4 py-6 print:hidden">
        <ResumePrintButton />
      </div>

      {/* Paper */}
      <div className="mx-auto bg-white font-body text-muted-foreground print-page print-page-break relative">

        {/* ── Header ── */}
        <header
          className="bg-dark text-white grid grid-cols-[1fr_auto] grid-rows-2 gap-y-3 justify-between items-start font-normal grid-rows-[auto_auto]"
          style={{ padding: "0.25in 0.375in", columnGap: "0.375in" }}
        >
          <div>
            <h1
              className="font-display font-medium text-white leading-none"
              style={{ fontSize: "24pt" }}
            >
              {site.name}
            </h1>
            <p className="text-brand-on-dark uppercase tracking-wide" style={{ fontSize: "10pt" }}>
              {site.role}
            </p>
            </div>

          <div
            className="grid gap-2 row-span-2 col-2"
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
            <p className="font-body font-semibold uppercase tracking-wide text-white" style={{ fontSize: "9pt" }}>Summary</p>
            <p className="text-slate-300 mt-1 font-weight-400 text-pretty" style={{ fontSize: "9.5pt" }}>
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
      <div className="mx-auto bg-white font-body text-muted-foreground print-page relative" style={{ paddingTop: "0.25in" }}>

        <Section title="Experience (continued)">
          {resumeExperience.slice(2).map((entry) => (
            <ExperienceEntry key={entry.role + entry.company} entry={entry} />
          ))}
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div
            className="grid"
            style={{ gridTemplateColumns: "1fr 1fr", columnGap: "0.25in", rowGap: "0.125in" }}
          >
            {resumeSkills.map((group) => (
              <div key={group.label}>
                <SectionSubtitle>{group.label}:</SectionSubtitle>
                <div className="text-muted-foreground" style={{ fontSize: "9pt" }}>
                  {group.items.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          {resumeEducation.map((entry) => (
            <SectionGrid>
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
        <SectionSubtitle>{entry.company}</SectionSubtitle>
        <SectionEyebrow>{entry.role}</SectionEyebrow>
      </div>
      <SectionRight date={entry.period} location={entry.location} />
      <ul className="list-disc col-span-2" style={{ paddingLeft: "0.25in", marginBottom: 0, fontSize: "9.5pt" }}>
        {entry.bullets.map((bullet) => (
          <li key={bullet.bold} className="mb-1 text-pretty marker:text-foreground">
            <em className="text-foreground not-italic">{bullet.bold}</em>
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
    <div className="font-medium text-muted-foreground border-b border-border tracking-wider uppercase pb-1 mb-3">{children}</div>
  );
}

function SectionSubtitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-display text-foreground font-semibold tracking-tight" style={{ fontSize: "10.5pt" }}>{children}</div>
  );
}

function SectionEyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-body font-semibold uppercase tracking-wide text-brand  mb-2" style={{ fontSize: "9pt" }}>{children}</div>
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
      <div className="text-foreground tabular-nums font-semibold" style={{ fontSize: "9pt" }}>{date}</div>
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