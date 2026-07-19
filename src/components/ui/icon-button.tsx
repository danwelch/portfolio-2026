import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function IconButton({
  className,
  type = "button",
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type={type}
      {...props}
      className={cn(
        "flex size-9 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground",
        className,
      )}
    />
  );
}
