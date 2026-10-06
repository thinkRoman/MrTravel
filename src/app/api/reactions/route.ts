export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { dbConnect, isDbConfigured } from "@/lib/mongoose";
import { Reaction } from "@/models/Reaction";

const VALUES = ["like", "too_pricey", "find_alternative"] as const;
const ITEM_TYPES = ["stay", "flight"] as const;

function dbDown() {
  return NextResponse.json(
    {
      error:
        "Database not connected. Set MONGODB_URI in .env.local (local) or the Vercel project env vars (production), then redeploy.",
    },
    { status: 503 }
  );
}

export async function GET(req: NextRequest) {
  if (!isDbConfigured()) return dbDown();
  try {
    const { searchParams } = new URL(req.url);
    const itemIds = searchParams.get("itemIds");
    const name = searchParams.get("name")?.trim();
    const filter = itemIds ? { itemId: { $in: itemIds.split(",") } } : {};
    await dbConnect();
    const reactions = await Reaction.find(filter).lean();

    const counts: Record<string, Record<string, number>> = {};
    const mine: Record<string, string> = {};
    for (const r of reactions) {
      counts[r.itemId] ??= {};
      counts[r.itemId][r.value] = (counts[r.itemId][r.value] ?? 0) + 1;
      if (name && r.name.toLowerCase() === name.toLowerCase()) {
        mine[r.itemId] = r.value;
      }
    }
    return NextResponse.json({ counts, mine });
  } catch (err) {
    console.error("GET /api/reactions failed:", err);
    return NextResponse.json({ error: "Could not load reactions." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isDbConfigured()) return dbDown();
  try {
    const body = await req.json();
    const { name, itemType, itemId, value } = body ?? {};
    if (!name?.trim() || !itemId?.trim()) {
      return NextResponse.json({ error: "Name and item are required." }, { status: 400 });
    }
    if (!ITEM_TYPES.includes(itemType)) {
      return NextResponse.json({ error: "Invalid item type." }, { status: 400 });
    }
    if (!VALUES.includes(value)) {
      return NextResponse.json({ error: "Invalid reaction value." }, { status: 400 });
    }
    await dbConnect();
    // One reaction per person per item — upsert replaces the previous one.
    await Reaction.findOneAndUpdate(
      { name: name.trim(), itemId: itemId.trim() },
      { name: name.trim(), itemType, itemId: itemId.trim(), value },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("POST /api/reactions failed:", err);
    return NextResponse.json({ error: "Could not save your reaction." }, { status: 500 });
  }
}
