# MrTravel — Dharz Travel Portal

The Dhar family's live travel portal for the **December 2026 Italy vacation**
("Dharz Family Vacation": Rome → Naples → Puglia → Sicily, Dec 16, 2026 – Jan 7, 2027).

Unlike the earlier static hub, suggestions and reactions are stored in **MongoDB**,
so what Billy posts on her laptop is visible to everyone on their own phones —
nothing is lost on refresh.

## Stack

- Next.js 16 (App Router), React 19, Tailwind CSS 4
- MongoDB via Mongoose (API routes touching the DB run on the Node.js runtime — Mongoose does not run on Edge)
- Vercel Pro for hosting

## Getting started (local)

```bash
npm install
# put your connection string in .env.local (never commit it)
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Name          | Where to set                                                        |
| ------------- | ------------------------------------------------------------------- |
| `MONGODB_URI` | `.env.local` for local dev; Vercel project env vars for production  |

See `.env.example` for the format. `.gitignore` excludes `.env*`, so real URIs never get committed.

## Deploying to Vercel

1. Push this repo to GitHub (GitHub Desktop).
2. Import it in Vercel, deploy.
3. Add `MONGODB_URI` under Project Settings → Environment Variables, then redeploy.
4. Without `MONGODB_URI` the pages still render — the suggestion board and reaction buttons
   show a friendly "database not connected" state instead of breaking.

## Project layout

- `src/app/` — pages: `/` (home), `/itinerary`, `/stays`, `/flights`, `/suggest`
- `src/app/api/suggestions/` — GET (newest first) + POST suggestions
- `src/app/api/reactions/` — GET counts + POST upsert (one reaction per person per item)
- `src/app/api/users/` — GET the family users list (auto-seeds on first use)
- `src/lib/mongoose.ts` — cached MongoDB connection helper
- `src/models/` — `Suggestion`, `Reaction`, `User` Mongoose models
- `src/lib/data/` — static seed content (itinerary, 27 stays, 4 flight routes) — research snapshots, not user content
- `src/components/` — `Nav`, `ReactionButtons`, `SuggestionForm`, `SuggestionBoard`, `useFamilyName`

## Notes

- Nothing is booked — all flights and stays are researched proposals (Oct 4–5, 2026); prices will change.
- Train/flight transfer times on the itinerary are indicative working plans.
- The Dec 23 Naples → Bari direct flight's Wednesday schedule is unverified — check ryanair.com / neosair.it before locking the day.

## Users & future auth

- The `users` collection holds the four family members — Ash (`admin`), Billy, Ria, Rohith
  (`member`) — and is seeded automatically the first time `GET /api/users` runs against an
  empty collection. The suggestion form's name picker and the reaction buttons both read from
  this list instead of free text.
- There are no passwords and no login yet — identity is just "pick your name." Adding NextAuth
  (email/password, role-based) is a planned future step; the `role` field on the user model is
  already in place for it.
