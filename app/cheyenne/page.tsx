import { Metadata } from "next";
import AvailabilityForm from "./AvailabilityForm";

export const metadata: Metadata = {
  title: "Cheyenne Mountain Trip",
  robots: { index: false, follow: false },
};

const itinerary = [
  {
    day: "Day 1",
    label: "Arrive",
    items: [
      "Drive to Colorado Springs",
      "Check in to Cheyenne Mountain Resort",
      "Families hit the pool or head to the Zoo",
      "Dinner together",
    ],
  },
  {
    day: "Day 2",
    label: "Golf + Head Home",
    items: [
      "18 holes (included with passport)",
      "Families explore or hang at the resort",
      "Check out, drive home",
    ],
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
          Colorado Springs, CO &nbsp;·&nbsp; Summer 2026 &nbsp;·&nbsp; 4 couples &nbsp;·&nbsp; 2 days
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-10 space-y-8">
        {/* 2-day itinerary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {itinerary.map(({ day, label, items }) => (
            <div key={day} className="bg-white rounded-2xl border border-slate-200/80 p-5">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[10px] font-bold">{day.replace("Day ", "")}</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-green">{day}</p>
                  <p className="text-sm font-semibold text-navy leading-tight">{label}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="rounded-2xl bg-white border border-slate-200/80 p-6">
          <h2 className="font-bold text-navy text-lg tracking-tight mb-1">
            How this works
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Since it&apos;s a 2-day trip, you&apos;re picking full weekends. Select every Sat–Sun that works
            for your whole family and submit. Select as many as possible — the more options we have,
            the easier it is to find overlap. Dominick will pick the date once everyone responds.
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
