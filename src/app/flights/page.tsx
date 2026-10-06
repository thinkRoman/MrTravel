import { flightRoutes } from "@/lib/data/flights";
import ClientReactionButtons from "@/components/ClientReactionButtons";

export default function FlightsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">Flights</h1>
      <p className="mt-1 text-sm text-stone-600">
        Researched Oct 4–5, 2026 via Duffel. Nothing is booked — all prices in USD, live at time of
        search, will change. The recommended pick on each route is highlighted.
      </p>

      {flightRoutes.map((route) => (
        <section key={route.id} className="mt-8">
          <h2 className="text-xl font-bold">{route.title}</h2>
          <p className="text-sm text-stone-500">{route.detail}</p>

          <div className="mt-3 space-y-3">
            {route.options.map((opt) => (
              <article
                key={opt.id}
                className={`rounded-2xl border p-4 shadow-sm ${
                  opt.recommended
                    ? "border-orange-800 bg-orange-50"
                    : "border-stone-200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold">
                    {opt.airline}
                    {opt.recommended && (
                      <span className="ml-2 rounded-full bg-orange-800 px-2 py-0.5 text-xs font-bold text-white">
                        RECOMMENDED
                      </span>
                    )}
                  </h3>
                  <p className="whitespace-nowrap text-base font-bold text-orange-800">
                    {opt.price}
                  </p>
                </div>
                {opt.perPerson && <p className="text-sm text-stone-500">{opt.perPerson}</p>}
                <ul className="mt-2 space-y-1 text-sm text-stone-700">
                  {opt.segments.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="mt-2 text-sm text-stone-600">
                  {opt.duration} · {opt.stops} · {opt.fare}
                </p>
                <p className="text-sm text-stone-600">Baggage: {opt.baggage}</p>
                {opt.note && <p className="mt-1 text-sm font-medium text-stone-700">{opt.note}</p>}
                <ClientReactionButtons itemType="flight" itemId={opt.id} />
              </article>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-4">
        <p className="text-sm text-amber-900">
          Note: Rohith&apos;s Catania → Rome feeder flight on Jan 2 is not priced yet.
        </p>
      </div>
    </div>
  );
}
