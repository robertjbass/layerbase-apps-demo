# layerbase-apps-demo

A minimal Next.js app (App Router, TypeScript) for testing Layerbase Apps.

- `/` renders a page with the server time.
- `/api/env` returns `{ "greeting": <GREETING> }`. Set `GREETING` as a config var in the app's settings, redeploy, and it shows here.
- `/api/cron` runs every 10 minutes (`vercel.json`). It only answers a request carrying `Authorization: Bearer <CRON_SECRET>`, which Layerbase generates per app.

No secrets live in this repository.

```sh
pnpm install
pnpm dev
```
