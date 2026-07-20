"use client";

export function ResumePrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="bg-dark text-white font-body text-sm font-medium px-5 py-2 rounded-xs cursor-pointer hover:opacity-80 transition-opacity"
    >
      Save as PDF
    </button>
  );
}
