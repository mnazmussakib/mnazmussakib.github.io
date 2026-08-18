# Content portal (Decap CMS) setup

Your site now has an admin editing portal at **`/admin`** (e.g. `https://mnazmussakib.github.io/admin/`). It's powered by [Decap CMS](https://decapcms.org/) — a free, open-source editor that reads/writes directly to this GitHub repo. When you save something in the portal, it commits to `master`, which triggers the existing GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) to rebuild and redeploy the site automatically.

What's editable through the portal (see [public/admin/config.yml](public/admin/config.yml)):
- **Home Page** — hero bio/photo, contact links, about text, skills, news items
- **Publications** — grouped by year
- **Research Projects** — one entry per project, with a rich-text description and related publications
- **Blog Posts** — title, date, cover photo, tags, and a rich-text body
- **Life Photos** — the gallery on `/life`

Uploaded images land in `public/photos/` and are referenced by their public URL (`/photos/...`).

## 1. Try it locally first (no setup required)

```bash
npm run dev          # terminal 1 — starts the Astro site
npx decap-server      # terminal 2 — local git proxy, no OAuth needed
```

Visit `http://localhost:4321/admin/` — it'll use your local working copy so you can try editing before touching production auth.

## 2. Production login — pick one

GitHub Pages can't run server code, so logging into `/admin` on the live site needs a small external OAuth helper that Decap talks to. Two options, easiest first:

### Option A — DecapBridge (hosted, no deploy, free tier)

[decapbridge.com](https://decapbridge.com) is a hosted auth service built specifically for Decap/Netlify CMS sites like this one. Free tier covers up to 3 sites / 10 collaborators.

1. Sign up and create a site, linking it to `mnazmussakib/mnazmussakib.github.io`.
2. It gives you a `base_url` (and possibly other config) to paste into [public/admin/config.yml](public/admin/config.yml)'s `backend:` block, replacing the `REPLACE-WITH-YOUR-OAUTH-PROXY-URL` placeholder.
3. Commit and push — done. Log in at `/admin` with the method DecapBridge sets up (GitHub, Google, email, etc.).

### Option B — Self-host the OAuth proxy on Vercel (free, no third party)

Deploy [bericp1/netlify-cms-oauth-provider-node](https://github.com/bericp1/netlify-cms-oauth-provider-node) (or any provider from Decap's [external OAuth clients list](https://decapcms.org/docs/external-oauth-clients/)) as a tiny Vercel serverless function you control:

1. Create a GitHub OAuth App: GitHub → Settings → Developer settings → OAuth Apps → New OAuth App.
   - Homepage URL: `https://mnazmussakib.github.io`
   - Authorization callback URL: the proxy's callback route (the repo's README/examples show the exact route — it's normally something like `https://<your-vercel-app>.vercel.app/api/auth/complete`).
2. Deploy that repo to Vercel (free tier), following its own README/examples for the exact API route files.
3. In Vercel's project settings, set environment variables: `OAUTH_CLIENT_ID` and `OAUTH_CLIENT_SECRET` (from the GitHub OAuth App you just made).
4. In [public/admin/config.yml](public/admin/config.yml), set `base_url` to your deployed proxy's base URL.
5. Commit and push.

Either way, only the `base_url` line in `config.yml` needs to change — nothing else about the site or its GitHub Pages hosting changes.

## Notes

- `local_backend: true` in `config.yml` only activates when the CMS is loaded from `localhost` with `decap-server` running — it's safe to leave in for production.
- Anyone who logs in via GitHub OAuth needs push access to this repo (or the identity your chosen auth provider grants) to actually save changes.
