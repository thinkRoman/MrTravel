export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { dbConnect, isDbConfigured } from "@/lib/mongoose";
import { Suggestion } from "@/models/Suggestion";

function dbDown() {
  return NextResponse.json(
    {
      error:
        "Database not connected. Set MONGODB_URI in .env.local (local) or the Vercel project env vars (production), then redeploy.",
    },
    { status: 503 }
  );
}

export async function GET() {
  if (!isDbConfigured()) return dbDown();
  try {
    await dbConnect();
    const suggestions = await Suggestion.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ suggestions });
  } catch (err) {
    console.error("GET /api/suggestions failed:", err);
    return NextResponse.json({ error: "Could not load suggestions." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isDbConfigured()) return dbDown();
  try {
    const body = await req.json();
    const { name, dateAffected, place, changeType, details } = body ?? {};
    if (!name?.trim() || !dateAffected?.trim() || !place?.trim() || !changeType?.trim() || !details?.trim()) {
      return NextResponse.json(
        { error: "All fields are required: name, date affected, place, change type, details." },
        { status: 400 }
      );
    }
    await dbConnect();
    const suggestion = await Suggestion.create({
      name: name.trim(),
      dateAffected: dateAffected.trim(),
      place: place.trim(),
      changeType: changeType.trim(),
      details: details.trim(),
    });
    return NextResponse.json({ suggestion }, { status: 201 });
  } catch (err) {
    console.error("POST /api/suggestions failed:", err);
    return NextResponse.json({ error: "Could not save your suggestion." }, { status: 500 });
  }
}
