"use client";

import { useState } from "react";
import { useFamilyName } from "./useFamilyName";
import NamePicker from "./NamePicker";

const CHANGE_TYPES = ["Add a stop", "Change dates", "Swap a stay", "Swap a flight", "Food / restaurant", "Other"];

export default function SuggestionForm({ onPosted }: { onPosted: () => void }) {
  const { name, setName } = useFamilyName();
  const [dateAffected, setDateAffected] = useState("");
  const [place, setPlace] = useState("");
  const [changeType, setChangeType] = useState(CHANGE_TYPES[0]);
  const [details, setDetails] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setDone(false);
    if (!name.trim() || !dateAffected.trim() || !place.trim() || !details.trim()) {
      setError("Please fill in every field.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          dateAffected: dateAffected.trim(),
          place: place.trim(),
          changeType,
          details: details.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Could not save your suggestion.");
        return;
      }
      setDateAffected("");
      setPlace("");
      setDetails("");
      setDone(true);
      onPosted();
    } catch {
      setError("Network error — please try again.");
    } finally {
      setSaving(false);
    }
  };

  const inputCls =
    "min-h-[48px] w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-base";

  return (
    <form onSubmit={submit} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-stone-900">Suggest a change</h2>
      <p className="mt-1 text-sm text-stone-600">
        Saved to the family database — everyone sees it instantly.
      </p>

      <div className="mt-4 space-y-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-stone-700">Your name</label>
          <NamePicker value={name} onChange={setName} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-stone-700">Date affected</label>
          <input
            value={dateAffected}
            onChange={(e) => setDateAffected(e.target.value)}
            placeholder="e.g. Dec 25, or Dec 23–26"
            className={inputCls}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-stone-700">Place</label>
          <input
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="e.g. Matera, Taormina"
            className={inputCls}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-stone-700">Change type</label>
          <select
            value={changeType}
            onChange={(e) => setChangeType(e.target.value)}
            className={inputCls}
          >
            {CHANGE_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-stone-700">Details</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="What should change, and why?"
            rows={4}
            className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-base"
          />
        </div>
      </div>

      {error && <p className="mt-3 text-sm font-medium text-red-700">{error}</p>}
      {done && (
        <p className="mt-3 text-sm font-medium text-green-800">
          Saved — it is live on the board below for the whole family.
        </p>
      )}

      <button
        type="submit"
        disabled={saving}
        className="mt-4 min-h-[52px] w-full rounded-xl bg-orange-800 text-base font-semibold text-white disabled:opacity-50"
      >
        {saving ? "Saving…" : "Post suggestion"}
      </button>
    </form>
  );
}
