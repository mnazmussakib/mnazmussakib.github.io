# mnazmussakib.github.io

Personal academic website for Md. Nazmus Sakib — built with [Astro](https://astro.build).

## Tech stack

- **Framework**: Astro 4 (static output — zero JS by default, fast)
- **Hosting**: GitHub Pages (free, same domain as before)
- **Fonts**: Lora (display) + DM Sans (body) via Google Fonts
- **Deployment**: Automatic via GitHub Actions on every push to `master`

## Local development

```bash
npm install
npm run dev       # runs at http://localhost:4321
npm run build     # builds to /dist
npm run preview   # preview the build locally
```

## Pages

| Page | File | Purpose |
|------|------|---------|
| `/` | `src/pages/index.astro` | Homepage — hero, research cards, news, about |
| `/research` | `src/pages/research.astro` | Full project descriptions |
| `/publications` | `src/pages/publications.astro` | Paper list |
| `/life` | `src/pages/life.astro` | Photo gallery — travel & interests |
| `/blog` | `src/pages/blog/index.astro` | Blog listing |
| `/blog/[slug]` | `src/pages/blog/[...slug].astro` | Individual post |
| `/admin` | `public/admin/` | Content editing portal (Decap CMS) |

## Editing content

Everything below can be edited either by hand-editing the file and pushing, **or** through the `/admin` portal (see [CMS_SETUP.md](CMS_SETUP.md) for the one-time login setup — try it locally first with `npx decap-server`, no setup needed).

| What | File(s) |
|------|---------|
| Hero, about, news, contact links | `src/data/home.json` |
| Publications | `src/data/publications.json` |
| Research projects | `src/content/research/*.md` (one file per project) |
| Blog posts | `src/content/blog/*.md` (one file per post) |
| Life photo gallery | `src/data/photos.json` |
| Photo/image files | `public/photos/` |
| CV | `public/files/cv.pdf` (nav link works automatically) |

Adding a new blog post or research project: create a new `.md` file in the relevant `src/content/` folder (copy an existing one for the frontmatter shape) and push — Astro picks it up automatically, no other file needs editing.

### Deployment
The GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `master` — including changes made through `/admin`, since the portal commits directly to this repo.

**One-time setup in your GitHub repo settings:**
1. Go to Settings → Pages
2. Set Source to **GitHub Actions**
3. Push — first deploy happens automatically

## Color palette (two-tone blue)

The site uses two light-blue families as its accent throughout — "sky" (primary: buttons, links, nav) and "periwinkle" (secondary: badges, status). To change them, update the CSS variables in `src/styles/global.css`:

```css
/* Blue A — "sky": primary accent */
--amber-50:  #E7F2FC;
--amber-100: #C3E1F7;
--amber-200: #6FB6E8;
--amber-600: #1D5C8A;
--amber-900: #0B2E45;

/* Blue B — "periwinkle": secondary accent */
--teal-50:  #EAEDFB;
--teal-400: #6B7FD1;
--teal-600: #3B4A9E;
```

(Variable names like `--amber-*`/`--teal-*` are kept from the original template to minimize churn — they now hold blue values, not amber/teal ones.)
