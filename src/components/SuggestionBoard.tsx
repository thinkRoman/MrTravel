"use client";

import { Suspense, use, useMemo, useState } from "react";

export interface SuggestionItem {
  _id: string;
  name: string;
  dateAffected: string;
  place: string;
  changeType: string;
  details: string;
  createdAt: string;
}

interface BoardState {
  dbDown: boolean;
  failed: boolean;
  items: SuggestionItem[];
}

async function fetchSuggestions(cacheKey: string): Promise<BoardState> {
  try {
    const res = await fetch(`/api/suggestions?k=${encodeURIComponent(cacheKey)}`, {
      cache: "no-store",
    });
    if (res.status === 503) return { dbDown: true, failed: false, items: [] };
    if (!res.ok) return { dbDown: false, failed: true, items: [] };
    const data = await res.json();
    return { dbDown: false, failed: false, items: data.suggestions ?? [] };
  } catch {
    return { dbDown: false, failed: true, items: [] };
  }
}

export default function SuggestionBoard({ refreshKey }: { refreshKey: number }) {
  const [localKey, setLocalKey] = useState(0);
  const promise = useMemo(
    () => fetchSuggestions(`${refreshKey}:${localKey}`),
    [refreshKey, localKey]
  );

  return (
    <Suspense
      fallback={
        <p className="py-6 text-center text-sm text-stone-500">Loading the family board…</p>
      }
    >
      <BoardInner promise={promise} onRefresh={() => setLocalKey((k) => k + 1)} />
    </Suspense>
  );
}

function BoardInner({
  promise,
  onRefresh,
}: {
  promise: Promise<BoardState>;
  onRefresh: () => void;
}) {
  const state = use(promise);

  if (state.dbDown) {
    return (
      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4">
        <h2 className="text-base font-semibold text-amber-900">Live board is offline</h2>
        <p className="mt-1 text-sm text-amber-800">
          The database is not connected yet. Set <code>MONGODB_URI</code> in the Vercel project
          env vars and redeploy to turn the live board on.
        </p>
      </div>
    );
  }

  if (state.failed) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-6 text-center">
        <p className="text-sm text-stone-600">Couldn&apos;t load the board.</p>
        <button
          type="button"
          onClick={onRefresh}
          className="mt-2 min-h-[44px] rounded-full border border-stone-300 bg-white px-4 text-sm font-medium text-stone-700"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-stone-900">
          Family board{" "}
          {state.items.length > 0 && (
            <span className="text-stone-500">({state.items.length})</span>
          )}
        </h2>
        <button
          type="button"
          onClick={onRefresh}
          className="min-h-[40px] rounded-full border border-stone-300 bg-white px-4 text-sm font-medium text-stone-700"
        >
          Refresh
        </button>
      </div>

      {state.items.length === 0 ? (
        <p className="rounded-2xl border border-stone-200 bg-white p-6 text-center text-sm text-stone-500">
          No suggestions yet — be the first to post one above.
        </p>
      ) : (
        <ul className="space-y-3">
          {state.items.map((s) => (
            <li key={s._id} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-900">
                  {s.changeType}
                </span>
                <span className="text-xs text-stone-500">
                  {new Date(s.createdAt).toLocaleString(undefined, {
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <p className="mt-2 text-base font-semibold text-stone-900">{s.place}</p>
              <p className="text-sm text-stone-600">
                {s.dateAffected} · by {s.name}
              </p>
              <p className="mt-2 text-sm text-stone-800">{s.details}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
