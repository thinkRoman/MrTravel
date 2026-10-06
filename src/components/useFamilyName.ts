"use client";

import { useState } from "react";

const KEY = "mrtravel-name";

function readStoredName(): string {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem(KEY) ?? "";
  } catch {
    return "";
  }
}

export function useFamilyName() {
  const [name, setNameState] = useState<string>(readStoredName);

  const setName = (value: string) => {
    setNameState(value);
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
  };

  return { name, setName };
}
