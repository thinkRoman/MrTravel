"use client";

import { Suspense } from "react";
import { useUsers } from "./useUsers";

interface Props {
  value: string;
  onChange: (name: string) => void;
}

/**
 * Name picker fed by the users collection (Ash admin; Billy, Ria, Rohith members).
 * Falls back to free text when the database is offline.
 */
export default function NamePicker({ value, onChange }: Props) {
  return (
    <Suspense
      fallback={
        <div className="min-h-[48px] w-full animate-pulse rounded-lg border border-stone-200 bg-stone-100" />
      }
    >
      <NamePickerInner value={value} onChange={onChange} />
    </Suspense>
  );
}

function NamePickerInner({ value, onChange }: Props) {
  const users = useUsers();
  const inputCls = "field";

  if (users.length === 0) {
    return (
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Your name"
        className={inputCls}
      />
    );
  }

  return (
    <select
      value={users.some((u) => u.name === value) ? value : ""}
      onChange={(e) => onChange(e.target.value)}
      className={inputCls}
    >
      <option value="" disabled>
        Who is this?
      </option>
      {users.map((u) => (
        <option key={u._id} value={u.name}>
          {u.name}
          {u.role === "admin" ? " (admin)" : ""}
        </option>
      ))}
    </select>
  );
}
