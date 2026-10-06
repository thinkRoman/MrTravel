"use client";

import dynamic from "next/dynamic";

const ReactionButtons = dynamic(() => import("./ReactionButtons"), {
  ssr: false,
  loading: () => <p className="mt-3 text-xs text-stone-400">Loading reactions…</p>,
});

export default function ClientReactionButtons({
  itemType,
  itemId,
}: {
  itemType: "stay" | "flight";
  itemId: string;
}) {
  return <ReactionButtons itemType={itemType} itemId={itemId} />;
}
