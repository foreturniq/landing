// CSS mockups of the actual Foreturn IQ app UI — dark theme, green accent

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="bg-zinc-900 border-b border-zinc-800 px-3 py-2 flex items-center gap-2 flex-shrink-0">
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-zinc-700" />
        <div className="w-2 h-2 rounded-full bg-zinc-700" />
        <div className="w-2 h-2 rounded-full bg-zinc-700" />
      </div>
      <div className="flex-1 bg-zinc-800 rounded text-[8px] text-zinc-500 px-2 py-0.5 font-mono truncate">
        {url}
      </div>
    </div>
  );
}

function AppHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="px-4 py-3 border-b border-zinc-800 flex-shrink-0">
      <p className="text-[9px] font-semibold text-green">Foreturn IQ</p>
      <p className="text-white text-[11px] font-semibold leading-tight">{title}</p>
      {sub && <p className="text-zinc-500 text-[8px] mt-0.5">{sub}</p>}
    </div>
  );
}

export function OrderQueueMockup() {
  return (
    <div className="flex flex-col h-full bg-zinc-950 rounded-xl overflow-hidden">
      <BrowserChrome url="app.foreturniq.com/courses/.../orders" />
      <AppHeader title="Order Queue" />
      <div className="flex-1 overflow-hidden px-3 py-3 space-y-3">
        {/* Prepare Now */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-orange-400">
              Prepare Now
            </span>
          </div>
          <div className="bg-zinc-900 border border-orange-500/30 rounded-lg p-2.5">
            <div className="flex items-start justify-between mb-1.5">
              <span className="text-[18px] font-bold font-mono text-white tracking-widest leading-none">
                X7K2
              </span>
              <span className="text-[8px] bg-green/20 text-green px-1.5 py-0.5 rounded font-semibold">
                At the Turn
              </span>
            </div>
            <p className="text-[9px] text-zinc-400 mb-1.5">
              Martinez · Pulled Pork Sandwich, Diet Coke
            </p>
            <div className="bg-zinc-800 rounded p-1.5 mb-2 space-y-0.5">
              <div className="flex justify-between">
                <span className="text-[8px] text-zinc-500">Predicted Arrival</span>
                <span className="text-[8px] text-zinc-300 font-mono">11:52 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[8px] text-zinc-500">Prep Starts</span>
                <span className="text-[8px] text-zinc-300 font-mono">11:37 AM</span>
              </div>
            </div>
            <div className="flex gap-1.5">
              <button className="flex-1 bg-green text-white text-[8px] font-bold rounded py-1">
                Fulfill
              </button>
              <button className="px-2 bg-zinc-800 text-zinc-400 text-[8px] rounded py-1">
                Refund
              </button>
            </div>
          </div>
        </div>

        {/* Coming Up Soon */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-yellow-400">
              Coming Up Soon
            </span>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2.5">
            <div className="flex items-start justify-between mb-1">
              <span className="text-[16px] font-bold font-mono text-white tracking-widest leading-none">
                R3PQ
              </span>
              <span className="text-[8px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">
                At the Turn
              </span>
            </div>
            <p className="text-[9px] text-zinc-400">
              Thompson · Onion Rings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OrderingWindowsMockup() {
  const options = [
    {
      label: "Before Round",
      hint: "Ready ~20 min before tee time",
      selected: false,
    },
    {
      label: "At the Turn",
      hint: "Ready ~1h 45min into your round",
      selected: true,
    },
    {
      label: "After Round",
      hint: "Ready ~4 hours after tee time",
      selected: false,
    },
  ];

  return (
    <div className="flex items-center justify-center h-full bg-zinc-950 rounded-xl overflow-hidden py-4">
      <div className="w-[200px] rounded-[1.75rem] overflow-hidden border-[2.5px] border-zinc-700 shadow-xl">
        {/* Status bar */}
        <div className="bg-zinc-950 h-5 flex items-center justify-end px-4">
          <span className="text-[7px] text-zinc-600 font-mono">9:41</span>
        </div>
        <AppHeader title="Elm Creek Golf Club" sub="Today at 9:00 AM" />
        <div className="bg-zinc-950 px-3 py-2.5">
          <p className="text-[10px] font-semibold text-white mb-2.5">
            When would you like it?
          </p>
          <div className="space-y-1.5">
            {options.map((o) => (
              <div
                key={o.label}
                className={`rounded-lg p-2.5 border ${
                  o.selected
                    ? "border-green bg-green/10"
                    : "border-zinc-800 bg-zinc-900"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p
                    className={`text-[9px] font-semibold ${
                      o.selected ? "text-white" : "text-zinc-300"
                    }`}
                  >
                    {o.label}
                  </p>
                  {o.selected && (
                    <div className="w-3 h-3 rounded-full bg-green flex items-center justify-center">
                      <svg
                        className="w-2 h-2 text-white"
                        viewBox="0 0 8 8"
                        fill="none"
                      >
                        <path
                          d="M1.5 4l2 2L6.5 2"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <p
                  className={`text-[8px] mt-0.5 ${
                    o.selected ? "text-green" : "text-zinc-500"
                  }`}
                >
                  {o.hint}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-zinc-950 flex justify-center pb-2 pt-1">
          <div className="w-10 h-0.5 rounded-full bg-zinc-700" />
        </div>
      </div>
    </div>
  );
}

export function PickupCodeMockup() {
  return (
    <div className="flex items-center justify-center h-full bg-zinc-950 rounded-xl overflow-hidden py-4">
      <div className="w-[200px] rounded-[1.75rem] overflow-hidden border-[2.5px] border-zinc-700 shadow-xl">
        {/* Status bar */}
        <div className="bg-zinc-950 h-5 flex items-center justify-end px-4">
          <span className="text-[7px] text-zinc-600 font-mono">9:41</span>
        </div>
        <div className="bg-zinc-950 px-3 py-2.5">
          <p className="text-[9px] font-bold text-green">Foreturn IQ</p>
          <p className="text-white text-[12px] font-bold leading-tight">
            Payment received
          </p>
          <p className="text-zinc-500 text-[8px] mt-0.5">
            Your order has been sent to the clubhouse.
          </p>
        </div>
        <div className="bg-zinc-950 px-3 pb-3 space-y-2">
          {/* Pickup code box */}
          <div className="bg-green rounded-lg p-3 text-center">
            <p className="text-[8px] font-semibold text-black/60 uppercase tracking-widest mb-1">
              Pickup Code
            </p>
            <p className="text-[2.25rem] font-bold font-mono text-black tracking-[0.2em] leading-none">
              X7K2
            </p>
            <p className="text-[7px] text-black/50 mt-1">
              Show this code at the clubhouse.
            </p>
          </div>
          {/* Items */}
          <div className="bg-zinc-900 rounded-lg p-2.5 space-y-1">
            {[
              ["Pulled Pork Sandwich", "$11.00"],
              ["Diet Coke", "$3.00"],
            ].map(([name, price]) => (
              <div key={name} className="flex justify-between">
                <span className="text-[8px] text-zinc-400">{name}</span>
                <span className="text-[8px] text-zinc-300 font-mono">{price}</span>
              </div>
            ))}
            <div className="border-t border-zinc-800 pt-1 flex justify-between">
              <span className="text-[8px] font-semibold text-white">Total</span>
              <span className="text-[8px] font-semibold text-white font-mono">
                $17.56
              </span>
            </div>
          </div>
        </div>
        <div className="bg-zinc-950 flex justify-center pb-2 pt-0.5">
          <div className="w-10 h-0.5 rounded-full bg-zinc-700" />
        </div>
      </div>
    </div>
  );
}

export function PaymentsMockup() {
  return (
    <div className="flex flex-col h-full bg-zinc-950 rounded-xl overflow-hidden">
      <BrowserChrome url="app.foreturniq.com/checkout" />
      <div className="flex-1 overflow-hidden bg-zinc-950 px-4 py-3 space-y-3">
        <p className="text-[9px] font-semibold text-zinc-400 uppercase tracking-widest">
          Order Summary
        </p>
        <div className="bg-zinc-900 rounded-lg divide-y divide-zinc-800 overflow-hidden">
          {[
            ["Pulled Pork Sandwich", "$11.00"],
            ["Onion Rings", "$5.50"],
            ["Diet Coke", "$3.00"],
          ].map(([name, price]) => (
            <div key={name} className="flex justify-between px-3 py-2">
              <span className="text-[9px] text-zinc-300">{name}</span>
              <span className="text-[9px] text-zinc-300 font-mono">{price}</span>
            </div>
          ))}
        </div>
        <div className="bg-zinc-900 rounded-lg divide-y divide-zinc-800 overflow-hidden">
          {[
            ["Subtotal", "$19.50"],
            ["Sales Tax (8%)", "$1.56"],
            ["Service Fee", "$3.00"],
          ].map(([label, amount]) => (
            <div key={label} className="flex justify-between px-3 py-2">
              <span className="text-[9px] text-zinc-400">{label}</span>
              <span className="text-[9px] text-zinc-400 font-mono">{amount}</span>
            </div>
          ))}
          <div className="flex justify-between px-3 py-2.5">
            <span className="text-[10px] font-bold text-white">Total</span>
            <span className="text-[10px] font-bold text-white font-mono">$24.06</span>
          </div>
        </div>
        <div className="bg-green/10 border border-green/25 rounded-lg px-3 py-2">
          <p className="text-[8px] font-semibold text-green mb-0.5">
            Settled to your Stripe account
          </p>
          <div className="flex justify-between">
            <span className="text-[8px] text-zinc-400">Elm Creek Golf Club</span>
            <span className="text-[8px] text-white font-mono font-semibold">$21.06</span>
          </div>
          <p className="text-[7px] text-zinc-600 mt-0.5">
            Subtotal + tax · service fee retained by Foreturn IQ
          </p>
        </div>
      </div>
    </div>
  );
}

export function MenuBuilderMockup() {
  const items = [
    { name: "Pulled Pork Sandwich", price: "$11.00", cat: "Food", active: true },
    { name: "Onion Rings", price: "$5.50", cat: "Food", active: true },
    { name: "Diet Coke", price: "$3.00", cat: "Drinks", active: true },
    { name: "Club Sandwich", price: "$12.00", cat: "Food", active: false },
  ];

  return (
    <div className="flex flex-col h-full bg-zinc-950 rounded-xl overflow-hidden">
      <BrowserChrome url="app.foreturniq.com/admin" />
      <div className="px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between flex-shrink-0">
        <div>
          <p className="text-[9px] font-semibold text-green">
            Foreturn IQ — Admin
          </p>
          <p className="text-white text-[10px] font-semibold">Manage offers</p>
        </div>
        <button className="bg-green text-white text-[8px] font-bold rounded px-2 py-1">
          + Add offer
        </button>
      </div>
      <div className="flex-1 overflow-hidden px-3 py-2.5">
        <p className="text-[9px] font-semibold text-zinc-400 uppercase tracking-widest mb-2">
          At the Turn ({items.length})
        </p>
        <div className="space-y-1.5">
          {items.map((item) => (
            <div
              key={item.name}
              className={`bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 flex items-center justify-between ${
                !item.active ? "opacity-50" : ""
              }`}
            >
              <div>
                <p className="text-[9px] font-semibold text-white">
                  {item.name}
                </p>
                <p className="text-[8px] text-zinc-500 mt-0.5">
                  {item.price} · {item.cat}
                </p>
              </div>
              <button
                className={`text-[8px] font-semibold rounded px-2 py-1 ${
                  item.active
                    ? "bg-zinc-800 text-zinc-300"
                    : "bg-green/20 text-green"
                }`}
              >
                {item.active ? "Deactivate" : "Activate"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function QuickReorderMockup() {
  return (
    <div className="flex items-center justify-center h-full bg-zinc-950 rounded-xl overflow-hidden py-4">
      <div className="w-[200px] rounded-[1.75rem] overflow-hidden border-[2.5px] border-zinc-700 shadow-xl">
        {/* Status bar */}
        <div className="bg-zinc-950 h-5 flex items-center justify-end px-4">
          <span className="text-[7px] text-zinc-600 font-mono">9:41</span>
        </div>
        <AppHeader title="Elm Creek Golf Club" sub="Today at 9:00 AM" />
        <div className="bg-zinc-950 px-3 py-3">
          {/* Last order section */}
          <div className="flex items-center justify-between mb-2">
            <p className="text-[9px] font-bold uppercase tracking-widest text-green">
              Last time you ordered
            </p>
            <p className="text-[8px] text-zinc-500">Oct 12</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 mb-2.5">
            <div className="space-y-1 mb-2.5">
              {[
                ["Pulled Pork Sandwich", "$11.00"],
                ["Onion Rings", "$5.50"],
                ["Diet Coke", "$3.00"],
              ].map(([name, price]) => (
                <div key={name} className="flex justify-between">
                  <span className="text-[8px] text-zinc-300">{name}</span>
                  <span className="text-[8px] text-zinc-400 font-mono">
                    {price}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full bg-green text-white text-[9px] font-bold rounded-lg py-1.5">
              Reorder — $19.50
            </button>
          </div>
          <p className="text-center text-[7px] text-zinc-600">
            Or browse the full menu below
          </p>
        </div>
        <div className="bg-zinc-950 flex justify-center pb-2 pt-0.5">
          <div className="w-10 h-0.5 rounded-full bg-zinc-700" />
        </div>
      </div>
    </div>
  );
}
