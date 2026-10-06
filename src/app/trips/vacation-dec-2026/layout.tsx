import Link from "next/link";
import Nav from "@/components/Nav";

const BASE = "/trips/vacation-dec-2026";

export default function TripLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-espresso-900 text-parchment">
        <div className="mx-auto max-w-2xl px-5 pb-3 pt-3">
          <Link
            href="/"
            className="inline-flex min-h-[40px] items-center text-[13px] font-semibold text-gold-300 active:text-gold-400"
          >
            ← All trips
          </Link>
          <p className="font-display text-[20px] font-semibold tracking-tight">
            Vacation Dec 2026
          </p>
          <p className="text-xs text-white/55">
            Italy · Rome → Naples → Puglia → Sicily
          </p>
        </div>
        <div className="h-[2px] bg-gradient-to-r from-terracotta-600 via-gold-400 to-olive-600" />
      </div>
      <main className="mx-auto w-full max-w-2xl flex-1 px-5 pb-12 pt-6">{children}</main>
      <Nav basePath={BASE} />
    </div>
  );
}
