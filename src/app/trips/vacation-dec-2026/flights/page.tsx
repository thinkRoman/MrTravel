import { flightRoutes } from "@/lib/data/flights";
import ClientReactionButtons from "@/components/ClientReactionButtons";

export default function FlightsPage() {
  return (
    <div>
      <p className="eyebrow text-terracotta-700">Getting there &amp; back</p>
      <h1 className="mt-1 font-display text-[32px] font-semibold tracking-tight text-ink">
        Flights
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">
        Researched Oct 4–5, 2026 via Duffel. Nothing is booked — all prices in USD, live at time
        of search, will change. The recommended pick on each route is highlighted.
      </p>

      {flightRoutes.map((route) => (
        <section key={route.id} className="mt-9">
          <h2 className="font-display text-[22px] font-semibold text-ink">{route.title}</h2>
          <p className="mt-0.5 text-[13px] text-stone-500">{route.detail}</p>

          <div className="mt-4 space-y-4">
            {route.options.map((opt) => (
              <article
                key={opt.id}
                className={`card overflow-hidden ${
                  opt.recommended ? "border-terracotta-600/40" : ""
                }`}
              >
                {opt.recommended && (
                  <div className="bg-terracotta-700 px-5 py-2">
                    <p className="eyebrow text-[10px] text-white">Recommended pick</p>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-[18px] font-semibold text-ink">
                      {opt.airline}
                    </h3>
                    <p className="shrink-0 whitespace-nowrap font-display text-[19px] font-bold text-terracotta-700">
                      {opt.price}
                    </p>
                  </div>
                  {opt.perPerson && (
                    <p className="mt-0.5 text-[13px] text-stone-500">{opt.perPerson}</p>
                  )}
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-stone-700">
                    {opt.segments.map((s) => (
                      <li key={s} className="flex gap-2.5">
                        <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-300" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-[13px] font-medium text-stone-500">
                    {opt.duration} · {opt.stops} · {opt.fare}
                  </p>
                  <p className="text-[13px] text-stone-500">Baggage: {opt.baggage}</p>
                  {opt.note && (
                    <p className="mt-2 text-sm font-medium leading-relaxed text-stone-700">
                      {opt.note}
                    </p>
                  )}
                  <div className="mt-1 border-t border-stone-100 pt-1">
                    <ClientReactionButtons itemType="flight" itemId={opt.id} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <div className="card mt-8 border-l-4 border-l-gold-400 p-5">
        <p className="text-sm leading-relaxed text-[#7a5c14]">
          Note: Rohith&apos;s Catania → Rome feeder flight on Jan 2 is not priced yet.
        </p>
      </div>
    </div>
  );
}
