import Link from "next/link";

export default function HubLandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-espresso-900 text-parchment">
        <div className="mx-auto max-w-2xl px-5 pb-8 pt-10">
          <p className="eyebrow text-gold-300">The Dhar family travel hub</p>
          <h1 className="mt-2 font-display text-[40px] font-semibold leading-[1.05] tracking-tight">
            Dharz Travel Hub
          </h1>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/65">
            Every trip, one hub — itineraries, stays, flights, and a suggestion board the whole
            family shares live.
          </p>
        </div>
        <div className="h-[3px] bg-gradient-to-r from-terracotta-600 via-gold-400 to-olive-600" />
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-5 pb-12 pt-8">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-[24px] font-semibold tracking-tight text-ink">
            Your trips
          </h2>
          <p className="text-[13px] text-stone-500">1 trip planning</p>
        </div>

        <div className="mt-4 grid gap-4">
          <Link
            href="/trips/vacation-dec-2026"
            className="card group overflow-hidden transition-transform active:scale-[0.99]"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src="/trip-italy.jpg"
                alt="Italian coastline at golden hour"
                className="h-full w-full object-cover transition-transform duration-500 group-active:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-gold-400 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-espresso-900">
                Planning
              </span>
              <div className="absolute bottom-3 left-4 right-4">
                <p className="font-display text-[24px] font-semibold text-white">
                  Vacation Dec 2026
                </p>
                <p className="text-[13px] text-white/80">Italy · Dec 16, 2026 – Jan 7, 2027</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 p-5">
              <div>
                <p className="text-sm font-medium text-stone-600">
                  Rome → Naples → Puglia → Sicily
                </p>
                <p className="mt-0.5 text-[13px] text-stone-500">
                  Ash · Billy · Ria · Rohith · 27 stays · 4 flight routes
                </p>
              </div>
              <span
                aria-hidden
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta-700 text-lg font-bold text-white transition-transform group-active:translate-x-0.5"
              >
                →
              </span>
            </div>
          </Link>

          <div className="rounded-2xl border-2 border-dashed border-stone-300 p-6 text-center">
            <p className="font-display text-[18px] font-semibold text-stone-400">
              Your next adventure lives here
            </p>
            <p className="mt-1 text-sm text-stone-400">
              Future trips will appear as cards on this page.
            </p>
          </div>
        </div>

        <div className="card mt-8 border-l-4 border-l-terracotta-600 p-5">
          <p className="font-display text-[18px] font-semibold text-ink">
            Why a hub, not a link?
          </p>
          <p className="mt-1 text-sm leading-relaxed text-stone-600">
            Suggestions and reactions save to the family database — Billy&apos;s ideas won&apos;t
            vanish between devices ever again. Everyone sees everything, live.
          </p>
        </div>
      </main>
    </div>
  );
}
