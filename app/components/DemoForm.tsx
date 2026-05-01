"use client";

import { useActionState } from "react";
import { submitDemoRequest, FormState } from "../actions";

export default function DemoForm() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    submitDemoRequest,
    null
  );

  if (state?.success) {
    return (
      <div className="text-center py-8">
        <div
          className="text-5xl mb-4"
          style={{ color: "#3AAA35" }}
        >
          ✓
        </div>
        <p className="text-xl font-semibold text-white">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      {state && !state.success && (
        <p className="text-red-300 text-sm text-center">{state.message}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
            Your Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition"
          />
        </div>
        <div>
          <label htmlFor="courseName" className="block text-sm font-medium text-white/80 mb-1">
            Course / Club Name <span className="text-red-400">*</span>
          </label>
          <input
            id="courseName"
            name="courseName"
            type="text"
            required
            placeholder="Arrowhead Golf Club"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@course.com"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
            Phone <span className="text-white/40 font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 000-0000"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full py-4 rounded-lg font-bold text-lg transition-all disabled:opacity-60"
        style={{ backgroundColor: "#3AAA35", color: "#fff" }}
      >
        {pending ? "Sending…" : "Request a Free Demo"}
      </button>

      <p className="text-center text-white/40 text-xs">
        No commitment. We&apos;ll reach out within 24 hours.
      </p>
    </form>
  );
}
