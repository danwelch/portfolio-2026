export function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-widest text-brand">
      <span className="tabular-nums">{index}</span>
      <span className="h-1 w-1 rounded-full bg-brand/50" />
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}
