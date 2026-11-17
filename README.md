# AuthCode Services

Next.js 14 (Pages Router) + Tailwind CSS + lucide-react. Designed to be hosted at `authcode.vercel.app`.

## Run locally

```bash
npm install
npm run dev
```

## Routes

- `/` — landing page with a description, key info and a **Go to services** button
- `/home` — list of services (all link to `/notfound` except "Authentification code for cracked games")
- `/notfound` — "content no longer exists" page
- `/authcode` — 5-second circular timer, then a **Get Code** button
- `/getcode` — configuration/script view with `AuthCode <code>` in the middle
- `/api/code` — `{ "success": true, "code": 678765 }`

## How the code works

`/api/code` derives a 6-digit code from the current hour (UTC) using HMAC-SHA256.
Every request made during the same hour returns the same code; at the top of the next hour it changes.
CORS is open so other sites can fetch it from the browser.

Set `AUTH_SECRET` in Vercel (Settings → Environment Variables) so the codes can't be predicted. See `.env.example`.

## Deploy

Push to GitHub and import in Vercel, or run `npx vercel`.
