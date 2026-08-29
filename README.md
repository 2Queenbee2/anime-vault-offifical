# The Anime Vault — Next.js rebuild

Four-page rebuild: Home, Shop, Games, Services. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Setup

```
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Design system

- **Base palette (every page) — "OWA" cosmic palette:** Soft Moonlight `#F4F1FA` background, Starlight `#E8E9F3` secondary bg, Frosted Blue `#DCEAF5` cards, Lavender Mist `#D8D1E8` borders, Twilight Gray `#7A7D91` muted text.
- **Body text:** Deep Space `#18213D` everywhere.
- **Per-page accent (header/footer background):**
  - Home — Royal Cosmic Blue `#2455A4`
  - Shop — Aurora Cyan `#4AAFE3`
  - Games — Mystic Violet `#7650B8`
  - Services — Moon Gold `#D9B765`
- **Header/footer text:** contrast-first — light (Soft Moonlight) on Royal Cosmic Blue/Mystic Violet, dark (Deep Space) on Aurora Cyan/Moon Gold.
- **Typography:** Manrope for everything except page titles, which use the purchased Monstera font (`public/fonts/Monstera.woff2`).
- **Logo assets:**
  - `public/banner.png` — the full illustrated "Anime Vault: Otherworlds Awakening" banner, used in the nav (scaled down) and as the Home page centerpiece.
  - `app/icon.png` / `app/apple-icon.png` — generated from the circular badge artwork; Next.js auto-serves these as the site favicon and Apple touch icon.
  - "Otherworlds Awakening" is treated as a tagline under the main site name, not a replacement for it.

## Still needs your input before this is launch-ready

1. **Logo asset** — the real logo image (not a web font) needs to be dropped into `public/logo.png` (or `.svg`). It's referenced but commented out in `components/NavBar.tsx` and `app/page.tsx` — uncomment the `<Image>` line and remove the text placeholder once the file's in place.
2. **Real product images** — `LedgerCard` currently renders a solid taupe placeholder block instead of a product photo. Add an `image` field to the data files and swap in `next/image`.
3. **Monstera font license** — confirm your license covers web embedding (`@font-face`) for a live site, not just design/print use.
4. **Product/service/game data** — everything in `data/*.ts` is placeholder content matching the earlier mockups. Replace with your real catalog.
5. **Cart/checkout/account logic** — not included yet; this is the visual/structural rebuild only.

## Structure

```
app/
  layout.tsx        — root layout, loads global styles
  globals.css        — Tailwind + Monstera font-face
  page.tsx            — Home
  shop/page.tsx
  games/page.tsx
  services/page.tsx
components/
  NavBar.tsx
  Footer.tsx
  PageHeader.tsx      — per-page colored header + Monstera title
  LedgerCard.tsx       — the "vault ledger" signature product card
data/
  pageThemes.ts        — per-page accent + contrast-correct text color
  products.ts
  gameItems.ts
  services.ts
public/
  fonts/Monstera.woff2
```
