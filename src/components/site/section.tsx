import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("py-14 sm:py-16", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  description,
  children,
}: {
  index: string;
  eyebrow: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow index={index} label={eyebrow} />
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight @xl:text-4xl">
        {children}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
