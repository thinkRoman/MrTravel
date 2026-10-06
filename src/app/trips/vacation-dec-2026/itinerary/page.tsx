import { itinerary } from "@/lib/data/itinerary";

export default function ItineraryPage() {
  return (
    <div>
      <p className="eyebrow text-terracotta-700">Dec 16, 2026 – Jan 7, 2027</p>
      <h1 className="mt-1 font-display text-[32px] font-semibold tracking-tight text-ink">
        Itinerary
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">
        Train and flight times are working plans — recheck when booking.
      </p>

      <ol className="mt-6 space-y-4">
        {itinerary.map((day) => (
          <li key={day.date} className="card p-5">
            <div className="flex items-baseline justify-between gap-2">
              <p className="eyebrow text-terracotta-700">{day.date}</p>
              {day.stay && <p className="text-xs text-stone-500">{day.stay}</p>}
            </div>
            <h2 className="mt-1.5 font-display text-[21px] font-semibold text-ink">
              {day.title}
            </h2>
            <p className="text-sm text-stone-500">{day.location}</p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-stone-700">
              {day.highlights.map((h) => (
                <li key={h} className="flex gap-2.5">
                  <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-300" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {day.flag && (
              <div className="mt-4 rounded-xl border-l-4 border-l-gold-400 bg-[#fdf8ec] p-3.5">
                <p className="text-sm font-medium leading-relaxed text-[#7a5c14]">{day.flag}</p>
              </div>
            )}

            {day.transfer && (
              <div className="mt-4 overflow-hidden rounded-xl border border-stone-900/10">
                <div className="bg-espresso-900 px-3.5 py-2.5">
                  <p className="text-sm font-bold text-parchment">{day.transfer.label}</p>
                </div>
                <div className="bg-[#f4efe4] px-3.5 py-3">
                  <ul className="space-y-1.5 text-sm leading-relaxed text-stone-700">
                    {day.transfer.details.map((d) => (
                      <li key={d} className="flex gap-2.5">
                        <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-espresso-800" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  {day.transfer.warning && (
                    <p className="mt-2.5 text-sm font-semibold text-terracotta-800">
                      {day.transfer.warning}
                    </p>
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ol>

      <div className="card mt-6 p-5">
        <h2 className="font-display text-[19px] font-semibold text-ink">Open questions</h2>
        <ul className="mt-2.5 space-y-1.5 text-sm leading-relaxed text-stone-700">
          <li className="flex gap-2.5">
            <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
            <span>Taormina trimmed to 2 nights to absorb the extra Rome day — OK, or cut elsewhere?</span>
          </li>
          <li className="flex gap-2.5">
            <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
            <span>Matera falls on Christmas Day (Dec 25) — swap with Dec 24, or keep?</span>
          </li>
          <li className="flex gap-2.5">
            <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
            <span>Naples → Bari on Dec 23 — direct flight still unverified; verify or take the bus?</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
