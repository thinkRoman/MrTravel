import Link from "next/link";

const STOPS = [
  { place: "Rome", detail: "Dec 17–21 · 4 nights" },
  { place: "Naples", detail: "Dec 21–23 · 2 nights" },
  { place: "Valle d'Itria", detail: "Dec 23–26 · 3 nights" },
  { place: "Lecce", detail: "Dec 26–28 · 2 nights" },
  { place: "Palermo", detail: "Dec 28–31 · 3 nights" },
  { place: "Taormina", detail: "Dec 31–Jan 2 · 2 nights · NYE" },
  { place: "Ortigia", detail: "Jan 2–6 · 4 nights" },
];

const SECTIONS = [
  { href: "/itinerary", title: "Itinerary", text: "Day by day, with train and flight transfer cards." },
  { href: "/stays", title: "Stays", text: "27 researched Airbnb options — react to each one." },
  { href: "/flights", title: "Flights", text: "The 4 flight routes with recommended picks." },
  { href: "/suggest", title: "Suggest a change", text: "Post ideas — the whole family sees them live." },
];

export default function HomePage() {
  return (
    <div>
      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4">
        <p className="text-sm font-semibold text-amber-900">Nothing is booked yet</p>
        <p className="mt-1 text-sm text-amber-800">
          Every flight and stay here is a researched proposal, not a reservation. Prices were checked
          live Oct 4–5, 2026 and will change.
        </p>
      </div>

      <h1 className="mt-6 text-2xl font-bold tracking-tight">The journey at a glance</h1>
      <ol className="mt-3 space-y-2">
        {STOPS.map((s) => (
          <li
            key={s.place}
            className="flex items-baseline justify-between rounded-xl border border-stone-200 bg-white px-4 py-3"
          >
            <span className="text-base font-semibold">{s.place}</span>
            <span className="text-sm text-stone-500">{s.detail}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-sm text-stone-600">
        Jan 6: everyone flies out of Catania — Ria &amp; Billy → SFO, Ash → Delhi. Rohith leaves Jan 2
        via Rome.
      </p>

      <h2 className="mt-8 text-2xl font-bold tracking-tight">Who&apos;s going</h2>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          { name: "Ash", note: "Whole trip" },
          { name: "Billy", note: "Whole trip" },
          { name: "Ria", note: "Whole trip" },
          { name: "Rohith", note: "Dec 19 – Jan 2" },
        ].map((p) => (
          <div key={p.name} className="rounded-xl border border-stone-200 bg-white px-4 py-3">
            <p className="text-base font-semibold">{p.name}</p>
            <p className="text-sm text-stone-500">{p.note}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-2xl font-bold tracking-tight">Explore</h2>
      <div className="mt-3 grid gap-2">
        {SECTIONS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="block min-h-[64px] rounded-xl border border-stone-200 bg-white px-4 py-3 active:bg-stone-100"
          >
            <p className="text-base font-semibold text-orange-800">{s.title}</p>
            <p className="text-sm text-stone-600">{s.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
