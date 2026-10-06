"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const SuggestionForm = dynamic(() => import("@/components/SuggestionForm"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse rounded-2xl border border-stone-200 bg-white p-4">
      <p className="text-sm text-stone-400">Loading form…</p>
    </div>
  ),
});

const SuggestionBoard = dynamic(() => import("@/components/SuggestionBoard"), {
  ssr: false,
  loading: () => (
    <p className="py-6 text-center text-sm text-stone-500">Loading the family board…</p>
  ),
});

export default function SuggestPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">Suggest a change</h1>
      <p className="mt-1 text-sm text-stone-600">
        This board is live — what you post here is saved to the family database and everyone sees it
        on their own phone.
      </p>
      <div className="mt-4">
        <SuggestionForm onPosted={() => setRefreshKey((k) => k + 1)} />
      </div>
      <div className="mt-8">
        <SuggestionBoard refreshKey={refreshKey} />
      </div>
    </div>
  );
}
