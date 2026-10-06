import { stayGroups } from "@/lib/data/stays";
import ClientReactionButtons from "@/components/ClientReactionButtons";

export default function StaysPage() {
  return (
    <div>
      <p className="eyebrow text-terracotta-700">Where we sleep</p>
      <h1 className="mt-1 font-display text-[32px] font-semibold tracking-tight text-ink">
        Stays
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">
        27 Airbnb options, checked live Oct 5, 2026 for the exact dates. All entire homes, 2+
        bedrooms, verified Superhosts. Prices include Airbnb fees (city taxes may be separate).
        React to any card — your reaction is saved and visible to the family.
      </p>

      {stayGroups.map((group) => (
        <section key={group.id} className="mt-9">
          <div className="flex items-baseline justify-between gap-2">
            <h2 className="font-display text-[22px] font-semibold text-ink">
              {group.destination}
            </h2>
            <p className="shrink-0 text-[13px] font-medium text-stone-500">{group.guests}</p>
          </div>
          <p className="eyebrow mt-1 text-stone-400">{group.dates}</p>

          <div className="mt-4 space-y-4">
            {group.stays.map((stay) => (
              <article key={stay.id} className="card overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-terracotta-600 via-terracotta-300 to-gold-400" />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-[18px] font-semibold leading-snug text-ink">
                      {stay.name}
                    </h3>
                    <p className="shrink-0 whitespace-nowrap font-display text-[19px] font-bold text-terracotta-700">
                      {stay.total}
                    </p>
                  </div>
                  <p className="mt-1 text-[13px] font-medium text-stone-500">
                    {stay.perNight} · {stay.rating}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {stay.specs} · {stay.host}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-700">{stay.note}</p>
                  <a
                    href={stay.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-[44px] items-center rounded-full border border-terracotta-700 px-4 text-sm font-semibold text-terracotta-700 transition-colors active:bg-terracotta-50"
                  >
                    Open on Airbnb →
                  </a>
                  <div className="mt-1 border-t border-stone-100 pt-1">
                    <ClientReactionButtons itemType="stay" itemId={stay.id} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
