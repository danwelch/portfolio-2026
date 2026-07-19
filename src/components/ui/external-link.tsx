import type { ComponentProps } from "react";

export function ExternalLink({ href, children, ...props }: ComponentProps<"a">) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
