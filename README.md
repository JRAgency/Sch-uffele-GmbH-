# Schäuffele GmbH — Website

Demo-/Unternehmenswebsite für die **Schäuffele GmbH** (Werkzeug- und Formenbau, Brackenheim).
Präzisions-Spritzgießwerkzeuge für Thermo- und Duroplaste.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4**
- Lokale Fonts via `next/font` (DSGVO-konform), Animationen via CSS + IntersectionObserver
- SEO: Metadata-API, `sitemap.ts`, `robots.ts`, JSON-LD `LocalBusiness`
- Cookie-Consent + consent-gated Google Maps

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production-Build
npm run start    # Production-Server lokal
```

## Struktur

- `app/` — Routen (Start, Leistungen + Detailseiten, Unternehmen, Kontakt, Impressum, Datenschutz)
- `components/` — wiederverwendbare UI-Bausteine (Header, Footer, Hero, Formular, …)
- `lib/site.ts` — zentrale Inhalte (Firmendaten, Leistungen, Branchen)
- `public/img/` — Bildmaterial

## Offene Punkte (vor Go-Live mit Kunde abstimmen)

- Echte Firmenfotos / Maschinendaten ergänzen (aktuell lizenzfreie Platzhalter)
- Impressum & Datenschutz rechtlich prüfen lassen
- Kennzahlen (Stats) durch reale Werte ersetzen
- Finale Domain in `app/layout.tsx`, `sitemap.ts`, `robots.ts` eintragen

---

Erstellt von **JR Agency Services**.
