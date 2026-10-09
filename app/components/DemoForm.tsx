"use client";

import { useState, useEffect, useRef } from "react";
import { useActionState } from "react";
import { submitDemoRequest, FormState } from "../actions";
import {
  LEAD_VALUE_USD,
  contentGroupFor,
  getAttribution,
  setUserData,
  sourceLabel,
  track,
} from "../lib/analytics";

const FORM_NAME = "demo_request";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-white/8 border border-white/15 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-green/40 focus:border-green/50 transition-input";

const labelClass =
  "block text-[11px] font-semibold text-white/50 mb-2 uppercase tracking-[0.14em]";

export default function DemoForm() {
  const contactRef = useRef<{ email: string; phone: string }>({ email: "", phone: "" });
  const formStarted = useRef(false);

  // Wrap the server action so first/last touch attribution (UTMs, gclid)
  // travels with every submission, and keep email/phone for enhanced
  // conversions on success.
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    async (prev, formData) => {
      formData.set("attribution", JSON.stringify(getAttribution()));
      contactRef.current = {
        email: formData.get("email")?.toString() ?? "",
        phone: formData.get("phone")?.toString() ?? "",
      };
      return submitDemoRequest(prev, formData);
    },
    null
  );
  const [courseName, setCourseName] = useState("");

  useEffect(() => {
    if (!state) return;
    const path = window.location.pathname;

    if (state.success) {
      const { email, phone } = contactRef.current;
      if (email) setUserData(email, phone);

      const { last_touch } = getAttribution();
      track("generate_lead", {
        form_name: FORM_NAME,
        value: LEAD_VALUE_USD,
        currency: "USD",
        lead_source_page: path,
        lead_content_group: contentGroupFor(path),
        lead_traffic_source: sourceLabel(last_touch),
      });
    } else {
      track("form_error", {
        form_name: FORM_NAME,
        error_message: state.message.slice(0, 100),
      });
    }
  }, [state]);

  const handleFocus = () => {
    if (formStarted.current) return;
    formStarted.current = true;
    track("form_start", {
      form_name: FORM_NAME,
      lead_source_page: window.location.pathname,
    });
  };

  if (state?.success) {
    return (
      <div className="py-8">
        {/* Animated confirmation circle */}
        <div className="flex justify-center mb-6">
          <div className="animate-scale-in inline-flex items-center justify-center w-16 h-16 rounded-full bg-green/15 border border-green/30">
            <svg
              className="w-8 h-8 text-green"
              viewBox="0 0 24 24"
              fill="none"
            >
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

        {/* Receipt-style confirmation */}
        <div className="text-center mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-green mb-3">
            Request Confirmed
          </p>
          <p className="text-xl font-bold text-white tracking-tight">
            {courseName ? `${courseName} is on the list.` : "You're on the list."}
          </p>
        </div>

        <div className="border-t border-white/10 pt-6 space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green/60 mt-1.5 flex-shrink-0" />
            <p className="text-white/55 text-sm leading-relaxed">
              Check your email — we just sent you a link to book a time that works for you.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green/60 mt-1.5 flex-shrink-0" />
            <p className="text-white/55 text-sm leading-relaxed">
              Expect a short call to review your menu and schedule the pilot around a few tee times.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green/60 mt-1.5 flex-shrink-0" />
            <p className="text-white/55 text-sm leading-relaxed">
              No commitment required until you see results.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      onFocus={handleFocus}
      className="space-y-4"
    >
      {state && !state.success && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3">
          <p className="text-red-300 text-sm">{state.message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your Name <span className="text-red-400 normal-case">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Marc Rodriguez"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="courseName" className={labelClass}>
            Course / Club Name <span className="text-red-400 normal-case">*</span>
          </label>
          <input
            id="courseName"
            name="courseName"
            type="text"
            required
            placeholder="Arrowhead Golf Club"
            className={inputClass}
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-red-400 normal-case">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@course.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone{" "}
            <span className="text-white/25 font-normal normal-case">
              (optional)
            </span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(312) 847-1928"
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full py-4 rounded-lg bg-green text-white font-bold text-base transition-btn hover:opacity-90 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        {pending ? (
          <span className="flex items-center justify-center gap-2.5">
            <svg
              className="animate-spin w-4 h-4 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending your request…
          </span>
        ) : (
          "Request a Free Demo"
        )}
      </button>

      <p className="text-center text-white/30 text-xs">
        No commitment. You&apos;ll get a booking link by email.
      </p>
    </form>
  );
}
