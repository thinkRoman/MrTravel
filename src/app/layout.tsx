import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MrTravel — Dharz Family Vacation",
  description:
    "The Dhar family's live travel portal for the December 2026 Italy vacation: itinerary, stays, flights, and a shared suggestion board.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#faf7f1] font-sans text-stone-900">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-stone-200 bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-2xl px-4 py-3">
              <p className="text-xl font-bold tracking-tight text-stone-900">
                MrTravel <span className="font-medium text-stone-500">·</span>{" "}
                <span className="font-semibold text-orange-800">Dharz Family Vacation</span>
              </p>
              <p className="text-xs text-stone-500">
                Rome → Naples → Puglia → Sicily · Dec 16, 2026 – Jan 7, 2027
              </p>
            </div>
          </header>
          <main className="mx-auto w-full max-w-2xl flex-1 px-4 pb-10 pt-5">{children}</main>
          <Nav />
        </div>
      </body>
    </html>
  );
}
