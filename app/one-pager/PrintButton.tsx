"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B3068] text-white text-sm font-semibold shadow-lg hover:opacity-90 transition-opacity"
    >
      Save as PDF
    </button>
  );
}
