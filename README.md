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

## Customisation checklist

### Personal info
- [ ] `src/layouts/Base.astro` — update email, GitHub, Twitter, LinkedIn links in the footer
- [ ] `src/pages/index.astro` — fill in your university, advisor, lab, bio, and news items
- [ ] Replace `NS` initials in the avatar with `<img src="/photos/profile.jpg" />` once you add your photo

### Research
- [ ] `src/pages/research.astro` — update project descriptions and paper titles
- [ ] `src/pages/publications.astro` — add your real papers to the `publications` array

### Photos (life page)
1. Drop images into `public/photos/` (any format: jpg, png, webp)
2. Open `src/pages/life.astro`
3. Add entries to the `photos` array at the top:
   ```js
   { src: "/photos/tokyo.jpg", caption: "Cherry blossom season", location: "Tokyo, Japan", category: "travel" },
   ```
4. Push to GitHub — the page auto-updates

Available categories: `travel`, `everyday`, `people` (or add your own in the `categories` array)

### CV
- Drop your CV PDF at `public/files/cv.pdf` — the nav link will work automatically

### Deployment
The GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `master`.

**One-time setup in your GitHub repo settings:**
1. Go to Settings → Pages
2. Set Source to **GitHub Actions**
3. Push — first deploy happens automatically

## Color palette (warm amber)

The site uses an amber accent throughout. To change it, update the CSS variables in `src/styles/global.css`:

```css
--amber-50:  #FAEEDA;   /* light backgrounds */
--amber-100: #FAC775;   /* borders, hover */
--amber-200: #EF9F27;   /* buttons, accents */
--amber-600: #854F0B;   /* text on light */
--amber-900: #412402;   /* dark text */
```
