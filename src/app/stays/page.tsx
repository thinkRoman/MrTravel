import { stayGroups } from "@/lib/data/stays";
import ClientReactionButtons from "@/components/ClientReactionButtons";

export default function StaysPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">Stays</h1>
      <p className="mt-1 text-sm text-stone-600">
        27 Airbnb options, checked live Oct 5, 2026 for the exact dates. All entire homes, 2+
        bedrooms, verified Superhosts. Prices include Airbnb fees (city taxes may be separate).
        React to any card — your reaction is saved and visible to the family.
      </p>

      {stayGroups.map((group) => (
        <section key={group.id} className="mt-8">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-bold">{group.destination}</h2>
            <p className="text-sm text-stone-500">{group.guests}</p>
          </div>
          <p className="text-sm text-stone-500">{group.dates}</p>

          <div className="mt-3 space-y-3">
            {group.stays.map((stay) => (
              <article
                key={stay.id}
                className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold">{stay.name}</h3>
                  <p className="whitespace-nowrap text-base font-bold text-orange-800">
                    {stay.total}
                  </p>
                </div>
                <p className="text-sm text-stone-500">
                  {stay.perNight} · {stay.rating}
                </p>
                <p className="mt-1 text-sm text-stone-600">
                  {stay.specs} · {stay.host}
                </p>
                <p className="mt-2 text-sm text-stone-700">{stay.note}</p>
                <a
                  href={stay.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block min-h-[44px] py-2 text-sm font-semibold text-orange-800 underline"
                >
                  Open on Airbnb
                </a>
                <ClientReactionButtons itemType="stay" itemId={stay.id} />
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
