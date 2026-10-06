"use client";

import { Suspense, use, useMemo, useState } from "react";
import { useFamilyName } from "./useFamilyName";
import NamePicker from "./NamePicker";

export type ReactionValue = "like" | "too_pricey" | "find_alternative";

const LABELS: Record<ReactionValue, string> = {
  like: "Like",
  too_pricey: "Too pricey",
  find_alternative: "Find alternative",
};

interface ReactionState {
  dbDown: boolean;
  counts: Record<string, number>;
  mine: ReactionValue | null;
}

async function fetchReactions(itemId: string, name: string, cacheKey: string): Promise<ReactionState> {
  try {
    const params = new URLSearchParams({ itemIds: itemId, k: cacheKey });
    if (name.trim()) params.set("name", name.trim());
    const res = await fetch(`/api/reactions?${params.toString()}`);
    if (res.status === 503) return { dbDown: true, counts: {}, mine: null };
    const data = await res.json();
    return {
      dbDown: false,
      counts: data.counts?.[itemId] ?? {},
      mine: (data.mine?.[itemId] as ReactionValue) ?? null,
    };
  } catch {
    return { dbDown: false, counts: {}, mine: null };
  }
}

interface Props {
  itemType: "stay" | "flight";
  itemId: string;
}

export default function ReactionButtons({ itemType, itemId }: Props) {
  const { name, setName } = useFamilyName();
  const [nonce, setNonce] = useState(0);
  const [editingName, setEditingName] = useState(false);
  const promise = useMemo(
    () => fetchReactions(itemId, name, `${itemId}:${name}:${nonce}`),
    [itemId, name, nonce]
  );
  const showPicker = editingName || !name.trim();

  return (
    <div className="mt-3">
      {showPicker && (
        <div className="mb-2">
          <NamePicker
            value={name}
            onChange={(v) => {
              setName(v);
              setEditingName(false);
            }}
          />
        </div>
      )}
      <Suspense fallback={<p className="text-xs text-stone-400">Loading reactions…</p>}>
        <ButtonsInner
          promise={promise}
          itemType={itemType}
          itemId={itemId}
          name={name}
          onReacted={() => setNonce((n) => n + 1)}
        />
      </Suspense>
      {!showPicker && (
        <button
          type="button"
          onClick={() => setEditingName(true)}
          className="mt-2 min-h-[40px] text-xs text-stone-500 underline"
        >
          Reacting as {name} — change name
        </button>
      )}
    </div>
  );
}

function ButtonsInner({
  promise,
  itemType,
  itemId,
  name,
  onReacted,
}: {
  promise: Promise<ReactionState>;
  itemType: "stay" | "flight";
  itemId: string;
  name: string;
  onReacted: () => void;
}) {
  const state = use(promise);
  const [saving, setSaving] = useState(false);

  if (state.dbDown) {
    return (
      <p className="text-xs text-stone-500">Reactions go live once the database is connected.</p>
    );
  }

  const react = async (value: ReactionValue) => {
    if (!name.trim() || saving) return;
    setSaving(true);
    try {
      await fetch("/api/reactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), itemType, itemId, value }),
      });
      onReacted();
    } catch {
      /* silent — the refetch will show the true state */
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {(Object.keys(LABELS) as ReactionValue[]).map((value) => {
        const count = state.counts[value] ?? 0;
        const active = state.mine === value;
        return (
          <button
            key={value}
            type="button"
            disabled={saving || !name.trim()}
            onClick={() => react(value)}
            className={`min-h-[44px] rounded-full border px-4 text-sm font-medium transition-colors disabled:opacity-60 ${
              active
                ? "border-orange-800 bg-orange-800 text-white"
                : "border-stone-300 bg-white text-stone-700 active:bg-stone-100"
            }`}
          >
            {LABELS[value]}
            {count > 0 && <span className="ml-1 opacity-80">· {count}</span>}
          </button>
        );
      })}
    </div>
  );
}
