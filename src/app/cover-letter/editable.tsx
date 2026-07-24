"use client";

import { useState, type CSSProperties, type FormEvent, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

const editableClassName =
  "hover:bg-sky-50 focus:bg-sky-50 print:bg-transparent outline-none rounded-xs empty:before:content-[attr(data-placeholder)] empty:before:text-zinc-400";

type EditableLineProps = {
  value: string;
  onCommit: (value: string) => void;
  ariaLabel: string;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
};

// Uncontrolled by design: the initial value is captured once via useState's
// lazy initializer so React never re-renders this node while the user is
// typing in it, which would otherwise reset the caret to the start on every
// keystroke. Programmatic value changes (switching drafts) arrive via a
// `key` remount higher up.
export function EditableLine({
  value,
  onCommit,
  ariaLabel,
  placeholder,
  className,
  style,
}: EditableLineProps) {
  const [initial] = useState(value);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") event.preventDefault();
  };

  const handleInput = (event: FormEvent<HTMLDivElement>) => {
    onCommit(event.currentTarget.textContent ?? "");
  };

  return (
    <div
      contentEditable="plaintext-only"
      suppressContentEditableWarning
      role="textbox"
      aria-label={ariaLabel}
      spellCheck
      data-placeholder={placeholder}
      onKeyDown={handleKeyDown}
      onInput={handleInput}
      className={cn(editableClassName, className)}
      style={style}
    >
      {initial}
    </div>
  );
}

type EditableBodyProps = {
  value: string;
  onCommit: (value: string) => void;
  ariaLabel: string;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
};

export function EditableBody({
  value,
  onCommit,
  ariaLabel,
  placeholder,
  className,
  style,
}: EditableBodyProps) {
  const [initial] = useState(value);

  const handleInput = (event: FormEvent<HTMLDivElement>) => {
    // innerText (not textContent) preserves Chrome's <br>/block line breaks
    // as \n, which is what lets stored paragraph breaks survive a reload.
    onCommit(event.currentTarget.innerText ?? "");
  };

  return (
    <div
      contentEditable="plaintext-only"
      suppressContentEditableWarning
      role="textbox"
      aria-label={ariaLabel}
      aria-multiline="true"
      spellCheck
      data-placeholder={placeholder}
      onInput={handleInput}
      className={cn(editableClassName, "whitespace-pre-wrap", className)}
      style={style}
    >
      {initial}
    </div>
  );
}
