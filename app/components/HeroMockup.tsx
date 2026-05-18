const orderItems = [
  { name: "Pulled Pork Sandwich", price: "$11.00" },
  { name: "Onion Rings", price: "$5.50" },
  { name: "Diet Coke", price: "$3.00" },
];

export default function HeroMockup() {
  return (
    <div className="hidden lg:flex items-center justify-center relative py-10 px-6">
      {/* Decorative accents */}
      <div className="absolute top-2 right-2 w-20 h-20 rounded-2xl bg-green/10 border border-green/20" />
      <div className="absolute bottom-6 left-0 w-14 h-14 rounded-full bg-white/5 border border-white/10" />

      {/* Double-Bezel phone shell */}
      <div className="animate-float relative">
        {/* Outer shell */}
        <div className="p-[3px] rounded-[2.75rem] bg-zinc-700/60 border border-zinc-600/40 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.06)]">
          {/* Inner core */}
          <div className="w-[272px] rounded-[2.5rem] bg-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] overflow-hidden">
            {/* Screen */}
            <div>
              {/* Status bar */}
              <div className="flex items-center justify-end px-5 pt-3 pb-1 bg-navy">
                <span className="text-[9px] text-white/35 font-mono tracking-wider">
                  11:47
                </span>
              </div>

              {/* App header */}
              <div className="bg-navy px-5 pb-4">
                <p className="text-[9px] font-semibold text-white/35 uppercase tracking-[0.18em]">
                  Turn 9 &middot; Pre-Order
                </p>
                <p className="text-[13px] font-semibold text-white mt-1 tracking-tight">
                  Elm Creek Golf Club
                </p>
              </div>

              {/* Order content */}
              <div className="bg-white px-4 pt-4 pb-1">
                <p className="text-[9px] font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-3">
                  Your Order
                </p>
                {orderItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0"
                  >
                    <p className="text-[11px] font-medium text-zinc-700">
                      {item.name}
                    </p>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      {item.price}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-3 pb-1">
                  <span className="text-[11px] font-medium text-zinc-500">
                    Total
                  </span>
                  <span className="text-[14px] font-bold text-zinc-900 font-mono">
                    $19.50
                  </span>
                </div>
              </div>

              {/* Confirmed badge */}
              <div className="bg-white px-4 pb-5 pt-3">
                <div className="rounded-xl bg-green/10 border border-green/25 px-3 py-2.5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green flex-shrink-0" />
                  <p className="text-[10px] font-semibold text-green leading-snug">
                    Order confirmed — ready at the turn
                  </p>
                </div>
              </div>
            </div>

            {/* Home indicator */}
            <div className="bg-white flex justify-center py-2">
              <div className="w-14 h-[3px] rounded-full bg-zinc-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
