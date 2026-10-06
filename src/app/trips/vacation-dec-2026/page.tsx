import Link from "next/link";

const BASE = "/trips/vacation-dec-2026";

const STOPS = [
  { place: "Rome", detail: "Dec 17–21 · 4 nights" },
  { place: "Naples", detail: "Dec 21–23 · 2 nights" },
  { place: "Valle d'Itria", detail: "Dec 23–26 · 3 nights" },
  { place: "Lecce", detail: "Dec 26–28 · 2 nights" },
  { place: "Palermo", detail: "Dec 28–31 · 3 nights" },
  { place: "Taormina", detail: "Dec 31–Jan 2 · 2 nights · NYE" },
  { place: "Ortigia", detail: "Jan 2–6 · 4 nights" },
];

const PEOPLE = [
  { name: "Ash", note: "Whole trip" },
  { name: "Billy", note: "Whole trip" },
  { name: "Ria", note: "Whole trip" },
  { name: "Rohith", note: "Dec 19 – Jan 2" },
];

const SECTIONS = [
  { href: `${BASE}/itinerary`, title: "Itinerary", text: "Day by day, with train and flight transfer cards." },
  { href: `${BASE}/stays`, title: "Stays", text: "27 researched Airbnb options — react to each one." },
  { href: `${BASE}/flights`, title: "Flights", text: "The 4 flight routes with recommended picks." },
  { href: `${BASE}/suggest`, title: "Suggest a change", text: "Post ideas — the whole family sees them live." },
];

export default function TripHomePage() {
  return (
    <div>
      <div className="card border-l-4 border-l-gold-400 p-5">
        <p className="font-display text-lg font-semibold text-ink">Nothing is booked yet</p>
        <p className="mt-1 text-sm leading-relaxed text-stone-600">
          Every flight and stay here is a researched proposal, not a reservation. Prices were
          checked live Oct 4–5, 2026 and will change.
        </p>
      </div>

      <h1 className="mt-9 font-display text-[28px] font-semibold tracking-tight text-ink">
        The journey at a glance
      </h1>
      <ol className="relative mt-4 space-y-0.5 before:absolute before:bottom-3 before:left-[8px] before:top-3 before:w-px before:bg-terracotta-200">
        {STOPS.map((s) => (
          <li key={s.place} className="relative flex items-center gap-4 py-2.5">
            <span
              aria-hidden
              className="relative z-10 h-[17px] w-[17px] shrink-0 rounded-full border-[3.5px] border-parchment bg-terracotta-600 shadow-[0_0_0_1.5px_var(--color-terracotta-200)]"
            />
            <div className="flex flex-1 items-baseline justify-between gap-3">
              <span className="font-display text-[19px] font-semibold text-ink">{s.place}</span>
              <span className="text-right text-[13px] text-stone-500">{s.detail}</span>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 rounded-xl bg-terracotta-50 px-4 py-3 text-[13px] leading-relaxed text-terracotta-900">
        Jan 6: everyone flies out of Catania — Ria &amp; Billy → SFO, Ash → Delhi. Rohith leaves
        Jan 2 via Rome.
      </p>

      <h2 className="mt-10 font-display text-[24px] font-semibold tracking-tight text-ink">
        Who&apos;s going
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {PEOPLE.map((p) => (
          <div key={p.name} className="card flex items-center gap-3 p-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-terracotta-700 font-display text-lg font-semibold text-white">
              {p.name.charAt(0)}
            </span>
            <div className="min-w-0">
              <p className="truncate text-[15px] font-semibold text-ink">{p.name}</p>
              <p className="text-xs text-stone-500">{p.note}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-10 font-display text-[24px] font-semibold tracking-tight text-ink">
        Explore
      </h2>
      <div className="mt-4 grid gap-3">
        {SECTIONS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="card group flex items-center justify-between gap-3 p-5 transition-transform active:scale-[0.99]"
          >
            <div>
              <p className="font-display text-[18px] font-semibold text-terracotta-800">
                {s.title}
              </p>
              <p className="mt-0.5 text-sm text-stone-600">{s.text}</p>
            </div>
            <span
              aria-hidden
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-terracotta-50 text-lg font-bold text-terracotta-700 transition-transform group-active:translate-x-0.5"
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
