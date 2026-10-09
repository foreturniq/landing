"use client";

import { useId, useState } from "react";
import { serviceFeeCents } from "../lib/site";

const usd = (cents: number, decimals = 2) =>
  (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

function Slider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
  dark = false,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
  dark?: boolean;
}) {
  const id = useId();
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label htmlFor={id} className={`text-sm font-medium ${dark ? "text-white/60" : "text-gray-600"}`}>
          {label}
        </label>
        <span className={`text-lg font-bold font-mono ${dark ? "text-white" : "text-navy"}`}>{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--green)] cursor-pointer"
      />
    </div>
  );
}

// One order: what the golfer pays and where every dollar goes.
export function OrderBreakdown() {
  const [orderCents, setOrderCents] = useState(1950);
  const fee = serviceFeeCents(orderCents);
  const total = orderCents + fee;
  const coursePct = (orderCents / total) * 100;

  return (
    <div className="rounded-[1.75rem] bg-white border border-slate-200 p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
      <Slider
        label="Golfer's order (menu prices)"
        value={orderCents}
        min={500}
        max={6000}
        step={50}
        display={usd(orderCents)}
        onChange={setOrderCents}
      />

      <div className="mt-8">
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-sm font-medium text-gray-600">Golfer pays at checkout</span>
          <span className="text-2xl font-bold text-navy font-mono">{usd(total)}</span>
        </div>
        <div
          className="flex h-12 rounded-xl overflow-hidden"
          role="img"
          aria-label={`${usd(orderCents)} to your course, ${usd(fee)} service fee`}
        >
          <div
            className="bg-green flex items-center px-3 text-white text-xs font-semibold transition-[width] duration-300"
            style={{ width: `${coursePct}%` }}
          >
            Your course
          </div>
          <div className="flex-1 bg-navy/15" />
        </div>
        <dl className="grid grid-cols-2 gap-4 mt-5">
          <div className="rounded-xl bg-green/8 border border-green/25 p-4">
            <dt className="text-xs font-medium text-gray-600 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-green" />
              To your course
            </dt>
            <dd className="text-xl font-bold text-navy font-mono mt-1">{usd(orderCents)}</dd>
            <dd className="text-xs text-gray-500 mt-1">100% of menu prices, plus tax and tips</dd>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <dt className="text-xs font-medium text-gray-600 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-navy/15" />
              Service fee, paid by golfer
            </dt>
            <dd className="text-xl font-bold text-navy font-mono mt-1">{usd(fee)}</dd>
            <dd className="text-xs text-gray-500 mt-1">5% of the order + $0.50</dd>
          </div>
        </dl>
        <p className="text-xs text-gray-400 mt-4">
          Sales tax is added on top and goes to your course. Tips go 100% to your staff.
        </p>
      </div>
    </div>
  );
}

// A month of pre-orders at your course.
export function MonthlyEstimate() {
  const [perWeek, setPerWeek] = useState(100);
  const [avgCents, setAvgCents] = useState(1800);
  const perMonth = Math.round((perWeek * 52) / 12);
  const revenue = perMonth * avgCents;
  const golferFees = perMonth * serviceFeeCents(avgCents);
  const percentModel = Math.round(revenue * 0.05);

  return (
    <div className="rounded-[1.75rem] bg-navy p-6 sm:p-8 text-white">
      <div className="space-y-6">
        <Slider
          label="Pre-orders per week"
          value={perWeek}
          min={10}
          max={600}
          step={10}
          display={String(perWeek)}
          onChange={setPerWeek}
          dark
        />
        <Slider
          label="Average order"
          value={avgCents}
          min={800}
          max={6000}
          step={50}
          display={usd(avgCents)}
          onChange={setAvgCents}
          dark
        />
      </div>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <div className="rounded-xl bg-white/8 border border-white/10 p-4">
          <dt className="text-xs text-white/55">Pre-order revenue to your course</dt>
          <dd className="text-3xl font-bold font-mono text-green mt-1">
            {usd(revenue, 0)}
            <span className="text-sm text-white/40 font-sans font-medium"> / month</span>
          </dd>
        </div>
        <div className="rounded-xl bg-white/8 border border-white/10 p-4">
          <dt className="text-xs text-white/55">What Foreturn IQ costs your course</dt>
          <dd className="text-3xl font-bold font-mono mt-1">
            $0
            <span className="text-sm text-white/40 font-sans font-medium"> / month</span>
          </dd>
        </div>
      </dl>
      <p className="text-sm text-white/55 mt-5 leading-relaxed">
        About {perMonth.toLocaleString("en-US")} orders a month. Golfers pay{" "}
        {usd(serviceFeeCents(avgCents))} each in service fees ({usd(golferFees, 0)} total).
        If your course paid 5% of these sales instead, a common model for ordering
        platforms, it would cost you about{" "}
        <span className="text-white font-semibold">{usd(percentModel, 0)} a month</span>.
      </p>
    </div>
  );
}
