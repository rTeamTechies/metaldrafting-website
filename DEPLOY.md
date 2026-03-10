# Deploy to GitHub Pages (Metal Drafting website)

The **built** app (from `dist/pic-website`) is pushed to the `gh-pages` branch. GitHub Pages must serve **that branch**, not `master`.

## If you see the README or a directory listing instead of your website

- **Cause:** Pages is set to deploy from **master/main** (source code) instead of **gh-pages** (built site).
- **Fix:** Run the deploy script below, then in **Settings → Pages** set **Branch** to **gh-pages** (not master/main).

---

## One-time: Enable Pages correctly

1. Open `https://github.com/rTeamTechies/metaldrafting-website`
2. Go to **Settings → Pages**
3. **Source:** **Deploy from a branch**
4. **Branch:** choose **gh-pages** (not master/main) → **/ (root)** → **Save**

---

## Deploy (every time you want to update the site)

From the repo root (where `angular.json` is):

```bash
./deploy-gh-pages.sh
```

This builds the app and pushes **only the build output** to `gh-pages`. The live site is that output, not the source on `master`.

---

## Live URL

Once Pages is configured to deploy from `gh-pages`, the site will be available at:

`https://rteamtechies.github.io/metaldrafting-website/`

