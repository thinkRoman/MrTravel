export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { dbConnect, isDbConfigured } from "@/lib/mongoose";
import { User } from "@/models/User";

// Family members — seeded automatically the first time the users list is empty.
// No passwords yet; authentication (NextAuth) is a future step.
const SEED_USERS = [
  { name: "Ash", role: "admin" },
  { name: "Billy", role: "member" },
  { name: "Ria", role: "member" },
  { name: "Rohith", role: "member" },
] as const;

export async function GET() {
  if (!isDbConfigured()) {
    return NextResponse.json(
      {
        error:
          "Database not connected. Set MONGODB_URI in .env.local (local) or the Vercel project env vars (production), then redeploy.",
      },
      { status: 503 }
    );
  }
  try {
    await dbConnect();
    const count = await User.countDocuments();
    if (count === 0) {
      await User.insertMany(SEED_USERS.map((u) => ({ ...u })));
    }
    const users = await User.find({}).sort({ role: 1, name: 1 }).lean();
    return NextResponse.json({ users });
  } catch (err) {
    console.error("GET /api/users failed:", err);
    return NextResponse.json({ error: "Could not load users." }, { status: 500 });
  }
}
