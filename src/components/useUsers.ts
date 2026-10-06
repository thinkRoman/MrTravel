"use client";

import { use } from "react";

export interface UserItem {
  _id: string;
  name: string;
  email?: string;
  role: "admin" | "member";
}

let usersPromise: Promise<UserItem[]> | null = null;

function getUsersPromise(): Promise<UserItem[]> {
  if (!usersPromise) {
    usersPromise = fetch("/api/users", { cache: "no-store" })
      .then(async (res) => {
        if (!res.ok) return [];
        const data = await res.json();
        return (data.users ?? []) as UserItem[];
      })
      .catch(() => []);
  }
  return usersPromise;
}

/** Family members from the users collection (seeded on first use). Empty list = DB offline. */
export function useUsers(): UserItem[] {
  return use(getUsersPromise());
}
