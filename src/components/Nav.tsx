"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "", label: "Home" },
  { href: "/itinerary", label: "Itinerary" },
  { href: "/stays", label: "Stays" },
  { href: "/flights", label: "Flights" },
  { href: "/suggest", label: "Suggest" },
];

export default function Nav({ basePath }: { basePath: string }) {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Primary"
      className="sticky bottom-0 z-20 border-t border-stone-900/10 bg-white/95 shadow-[0_-4px_20px_rgba(34,26,18,0.08)] backdrop-blur"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto grid max-w-2xl grid-cols-5 gap-1 px-3 py-2">
        {LINKS.map((l) => {
          const href = `${basePath}${l.href}`;
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="flex min-h-[48px] items-center justify-center"
            >
              <span
                className={`rounded-full px-3.5 py-2 text-[13px] font-semibold transition-all ${
                  active
                    ? "bg-terracotta-700 text-white shadow-[0_4px_12px_-4px_rgba(160,70,31,0.7)]"
                    : "text-stone-500 active:bg-stone-100"
                }`}
              >
                {l.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
