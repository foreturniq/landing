import DemoForm from "./DemoForm";
import { FounderCard } from "./Proof";

// Demo request block reused on secondary pages.
export default function DemoSection({
  title = "Run a Pilot at Your Course",
  body = "We set up a pilot around a few tee times so you can see the exact impact on your F&B numbers before committing to anything.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section id="demo" className="px-8 py-32 bg-navy">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-green bg-white/8 border border-white/15">
            Request a Pilot
          </span>
        </div>
        <h2 className="text-4xl font-bold tracking-tighter text-white text-center mb-3">
          {title}
        </h2>
        <p className="text-white/45 text-center mb-10 text-sm leading-relaxed">{body}</p>
        <div className="p-1.5 rounded-[2rem] bg-white/5 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="rounded-[calc(2rem-0.375rem)] px-6 py-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
            <DemoForm />
          </div>
        </div>
        <FounderCard />
      </div>
    </section>
  );
}
