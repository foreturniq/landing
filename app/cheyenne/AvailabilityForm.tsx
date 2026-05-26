"use client";

import { useState, useActionState } from "react";
import { submitAvailability, FormState } from "../actions";

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAY_ABBRS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function getCalendarDays(year: number, month: number): (Date | null)[] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDow = firstDay.getDay();
  const days: (Date | null)[] = [];
  for (let i = 0; i < startDow; i++) days.push(null);
  for (let d = 1; d <= lastDay.getDate(); d++) days.push(new Date(year, month, d));
  return days;
}

function toKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function MonthCalendar({
  year,
  month,
  selected,
  onToggle,
  todayKey,
}: {
  year: number;
  month: number;
  selected: Set<string>;
  onToggle: (date: Date) => void;
  todayKey: string;
}) {
  const days = getCalendarDays(year, month);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5">
      <p className="text-sm font-bold text-navy text-center mb-4 tracking-tight">
        {MONTH_NAMES[month]} {year}
      </p>
      <div className="grid grid-cols-7 mb-1">
        {DAY_ABBRS.map((d) => (
          <div
            key={d}
            className="text-center text-[10px] font-semibold text-gray-400 uppercase tracking-wide py-1"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-0.5">
        {days.map((date, i) => {
          if (!date) return <div key={`e-${i}`} />;
          const key = toKey(date);
          const isSelected = selected.has(key);
          const isToday = key === todayKey;
          const isWeekend = date.getDay() === 0 || date.getDay() === 6;

          return (
            <button
              key={key}
              type="button"
              onClick={() => onToggle(date)}
              className={[
                "aspect-square rounded-lg text-[13px] font-medium transition-all duration-100 flex items-center justify-center relative",
                isSelected
                  ? "bg-green text-white shadow-sm"
                  : isWeekend
                  ? "text-navy font-semibold hover:bg-green/10"
                  : "text-gray-600 hover:bg-slate-100",
              ].join(" ")}
            >
              {date.getDate()}
              {isToday && !isSelected && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-green" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SuccessState({ name, count }: { name: string; count: number }) {
  return (
    <div className="text-center py-12">
      <div className="flex justify-center mb-5">
        <div className="animate-scale-in inline-flex items-center justify-center w-16 h-16 rounded-full bg-green/10 border border-green/25">
          <svg className="w-8 h-8 text-green" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="28"
              strokeDashoffset="28"
              className="animate-draw-check"
            />
          </svg>
        </div>
      </div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-green mb-2">
        Submitted
      </p>
      <h3 className="text-2xl font-bold text-navy tracking-tight mb-3">
        Got it, {name.split(" ")[0]}!
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
        Your {count} date{count !== 1 ? "s" : ""} have been sent to Dominick. Check your email for a confirmation.
      </p>
      <p className="text-gray-400 text-sm mt-4">
        Need to change something?{" "}
        <button
          onClick={() => window.location.reload()}
          className="text-green underline underline-offset-2"
        >
          Submit again.
        </button>
      </p>
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green/50 transition-input";

const labelClass =
  "block text-[11px] font-semibold text-gray-500 mb-1.5 uppercase tracking-[0.12em]";

export default function AvailabilityForm() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [submittedName, setSubmittedName] = useState("");
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    submitAvailability,
    null
  );

  const todayKey = toKey(new Date());

  const now = new Date();
  const MONTHS = Array.from({ length: 3 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() + 1 + i, 1);
    return { year: d.getFullYear(), month: d.getMonth() };
  });

  function toggleDate(date: Date) {
    const key = toKey(date);
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  if (state?.success) {
    return <SuccessState name={submittedName} count={selected.size} />;
  }

  return (
    <form
      action={(formData) => {
        setSubmittedName(formData.get("name")?.toString().trim() ?? "");
        return formAction(formData);
      }}
      className="space-y-6"
    >
      <input type="hidden" name="dates" value={JSON.stringify([...selected].sort())} />

      {/* Name + email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your Name <span className="text-red-400 normal-case font-normal">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Niko & Sarah"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-red-400 normal-case font-normal">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Calendar */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
            Select every date that works
          </p>
          {selected.size > 0 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green/10 border border-green/20 text-xs font-semibold text-green">
              <span className="w-1.5 h-1.5 rounded-full bg-green" />
              {selected.size} date{selected.size !== 1 ? "s" : ""} selected
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {MONTHS.map(({ year, month }) => (
            <MonthCalendar
              key={`${year}-${month}`}
              year={year}
              month={month}
              selected={selected}
              onToggle={toggleDate}
              todayKey={todayKey}
            />
          ))}
        </div>
        <p className="text-[11px] text-gray-400 mt-2">
          Weekend dates are bold. Click any date to toggle. Click again to deselect.
        </p>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className={labelClass}>
          Notes{" "}
          <span className="text-gray-400 font-normal normal-case">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={2}
          placeholder="Any dates that are hard no's, travel conflicts, whatever..."
          className={inputClass + " resize-none"}
        />
      </div>

      {/* Error */}
      {state && !state.success && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3">
          <p className="text-red-600 text-sm">{state.message}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={pending || selected.size === 0}
        className="w-full py-4 rounded-xl bg-navy text-white font-bold text-[15px] transition-btn hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {pending ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </span>
        ) : selected.size === 0 ? (
          "Select at least one date to continue"
        ) : (
          `Submit ${selected.size} date${selected.size !== 1 ? "s" : ""}`
        )}
      </button>
    </form>
  );
}
