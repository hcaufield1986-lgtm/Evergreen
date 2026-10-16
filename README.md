# Evergreen Painting, LLC — Website

One-page static website for **Evergreen Painting, LLC** (Manheim, PA). No build step, no dependencies — just open `index.html` in a browser or host it free on GitHub Pages.

## What's inside

| File | Purpose |
|---|---|
| `index.html` | Page content: hero, services, quality process, gallery, reviews, service area, quote form, footer |
| `styles.css` | Forest green palette, responsive layout (mobile-friendly) |
| `script.js` | Mobile menu, quote form → email, footer year |
| `images/hero.jpg` | Hero image (forest green accent wall) |
| `images/craft.jpg` | "Our Standard" section image (crisp brush line) |

## Customize before publishing

Search-and-replace these placeholders with the real details:

1. **Phone number** — `(717) 555-0148` appears in the header, hero, quote section, and footer. Replace with his real number (update both the visible text and the `tel:+17175550148` links).
2. **Email** — `info@evergreenpaintingpa.com` in the footer and in `script.js` (the `mailto:` line). Replace with his real email.
3. **Slogan** — currently *"The Difference Is in the Details."* It appears in the hero `<h1>` and the footer tagline. Swap if he picks a different one.
4. **Gallery** — the three "Your project here" tiles are placeholders. Drop real before/after photos in `images/` and point the tiles at them.
5. **Reviews** — the review section is honest placeholder copy. Replace with real quotes once he has them.
6. **Hours** — footer hours are a guess; confirm with him.

## The quote form

Right now the form opens the visitor's email app with the request pre-filled (works everywhere, zero setup). If you want true online submission later, sign up free at [Formspree](https://formspree.io), create a form, and swap the `submit` handler in `script.js` to POST to your Formspree endpoint instead of `mailto:`.

## Put it on GitHub (free hosting)

```bash
cd evergreen-painting-website
git init
git add .
git commit -m "Evergreen Painting website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/evergreen-painting.git
git push -u origin main
```

Then on github.com: **Settings → Pages → Source: Deploy from a branch → Branch: main → Save.** The site goes live at `https://YOUR-USERNAME.github.io/evergreen-painting/` within a minute or two.

Note: the site works perfectly fine pushed to a repo under *his* account too — if he wants to own it, have him create the repo and you can push to it or hand him the zip.

## Slogan options

The site currently uses **"The Difference Is in the Details."** Other contenders:

- *"Sharp Lines. Lasting Finishes."*
- *"Quality You Can See."* (his original)
- *"Paint Done Properly."*

## License / images

The two images were AI-generated for this site — free to use commercially as part of the project. Replace with real job photos when available; real photos convert better.
