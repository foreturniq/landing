import { Metadata } from "next";
import AvailabilityForm from "./AvailabilityForm";

export const metadata: Metadata = {
  title: "Cheyenne Mountain Trip",
  robots: { index: false, follow: false },
};

const included = [
  {
    label: "Golfers",
    items: ["1 night at Cheyenne Mountain Resort", "18 holes included with passport"],
  },
  {
    label: "Families",
    items: ["Resort pool access", "Cheyenne Mountain Zoo nearby", "Colorado Springs to explore"],
  },
];

export default function CheyennePage() {
  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      {/* Header */}
      <div className="bg-navy px-6 py-10 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green/15 border border-green/30 text-[10px] font-semibold uppercase tracking-[0.18em] text-green mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-green" />
          Avid Golfer Passport
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
          Cheyenne Mountain Trip
        </h1>
        <p className="text-white/50 text-sm">
          Colorado Springs, CO &nbsp;·&nbsp; Summer 2026 &nbsp;·&nbsp; 4 couples
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-10 space-y-8">
        {/* What's included */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {included.map(({ label, items }) => (
            <div
              key={label}
              className="p-1.5 rounded-2xl bg-white border border-slate-200/80"
            >
              <div className="rounded-[calc(1rem-0.375rem)] bg-white p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-green mb-3">
                  {label}
                </p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-green mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="rounded-2xl bg-white border border-slate-200/80 p-6">
          <h2 className="font-bold text-navy text-lg tracking-tight mb-1">
            How to use this
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Enter your name and email, then click every date that works for you and your family.
            Select as many as possible so we have options. Once everyone submits, Dominick
            will find the overlap and lock in the date.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-slate-100/80 border border-slate-200/70 p-1.5">
          <div className="rounded-[calc(1rem-0.375rem)] bg-white p-6">
            <AvailabilityForm />
          </div>
        </div>

        <p className="text-center text-xs text-gray-400">
          Need to update your picks? Just submit again with the same email.
        </p>
      </div>
    </div>
  );
}
