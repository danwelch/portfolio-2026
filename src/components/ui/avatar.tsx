import Image from "next/image";
import { cn } from "@/lib/utils";

export function Avatar({
  src,
  alt,
  initials,
  className,
}: {
  src?: string;
  alt: string;
  initials: string;
  className?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={80}
        height={80}
        className={cn(
          "size-10 shrink-0 rounded-full object-cover ring-1 ring-border",
          className,
        )}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-foreground ring-1 ring-border",
        className,
      )}
    >
      {initials}
    </span>
  );
}

export function Identity({
  name,
  title,
  avatar,
  initials,
  as: Tag = "div",
  className,
  titleClassName,
}: {
  name: string;
  title: string;
  avatar?: string;
  initials: string;
  as?: "div" | "figcaption";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <Tag className={cn("flex items-center gap-3.5", className)}>
      <Avatar src={avatar} alt={name} initials={initials} />
      <span className="flex flex-col">
        <span className="font-display font-medium text-foreground">{name}</span>
        <span className={cn("text-sm text-muted-foreground", titleClassName)}>
          {title}
        </span>
      </span>
    </Tag>
  );
}
