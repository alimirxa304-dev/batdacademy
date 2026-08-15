"use client";

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
    >
      {label}
    </button>
  );
}
