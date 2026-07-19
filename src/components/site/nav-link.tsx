import { cn } from "@/lib/utils";

export function NavLink({
  href,
  label,
  lineSide = "left",
  active = false,
}: {
  href: string;
  label: string;
  lineSide?: "left" | "right";
  active?: boolean;
}) {
  const labelSpan = (
    <span
      className={cn(
        "text-xs font-semibold uppercase tracking-widest transition-colors",
        active ? "text-white" : "text-slate-300 group-hover:text-slate-200",
      )}
    >
      {label}
    </span>
  );

  if (lineSide === "right") {
    return (
      <a href={href} className="group flex items-center justify-end py-2">
        {labelSpan}
        <span className="ml-4 h-px w-7 bg-slate-600 transition-all duration-200 group-hover:w-14 group-hover:bg-slate-300" />
      </a>
    );
  }

  return (
    <a href={href} className="group flex items-center py-2">
      <span
        className={cn(
          "mr-4 h-px transition-all duration-200",
          active
            ? "w-14 bg-brand-on-dark"
            : "w-7 bg-slate-600 group-hover:w-14 group-hover:bg-slate-300",
        )}
      />
      {labelSpan}
    </a>
  );
}
