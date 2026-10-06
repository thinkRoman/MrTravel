import { itinerary } from "@/lib/data/itinerary";

export default function ItineraryPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">Itinerary</h1>
      <p className="mt-1 text-sm text-stone-600">
        Dec 16, 2026 – Jan 7, 2027. Train and flight times are working plans — recheck when booking.
      </p>

      <ol className="mt-5 space-y-4">
        {itinerary.map((day) => (
          <li key={day.date} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
            <div className="flex items-baseline justify-between gap-2">
              <p className="text-sm font-bold uppercase tracking-wide text-orange-800">{day.date}</p>
              {day.stay && <p className="text-xs text-stone-500">{day.stay}</p>}
            </div>
            <h2 className="mt-1 text-lg font-semibold">{day.title}</h2>
            <p className="text-sm text-stone-500">{day.location}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-stone-700">
              {day.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            {day.flag && (
              <div className="mt-3 rounded-xl border border-amber-300 bg-amber-50 p-3">
                <p className="text-sm font-medium text-amber-900">{day.flag}</p>
              </div>
            )}

            {day.transfer && (
              <div className="mt-3 rounded-xl border border-sky-300 bg-sky-50 p-3">
                <p className="text-sm font-bold text-sky-900">{day.transfer.label}</p>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-sky-950">
                  {day.transfer.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                {day.transfer.warning && (
                  <p className="mt-2 text-sm font-medium text-sky-900">{day.transfer.warning}</p>
                )}
              </div>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-4">
        <h2 className="text-base font-semibold">Open questions</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-stone-700">
          <li>Taormina trimmed to 2 nights to absorb the extra Rome day — OK, or cut elsewhere?</li>
          <li>Matera falls on Christmas Day (Dec 25) — swap with Dec 24, or keep?</li>
          <li>Naples → Bari on Dec 23 — direct flight still unverified; verify or take the bus?</li>
        </ul>
      </div>
    </div>
  );
}
