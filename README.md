# AK Luxury Rides — Website

Single-page marketing site for AK Luxury Rides, a private chauffeur service in Los Angeles.
Black & gold luxury design. No build step, no dependencies — plain HTML/CSS/JS.

## Structure

```
ak-website/
├── index.html          # Page markup (hero, services, fleet, trust bar, about, contact, footer)
├── css/style.css       # All styles; design tokens are CSS variables in :root
├── js/main.js          # Scroll-reveal animation (IntersectionObserver)
└── assets/
    ├── logo-full.png   # Full logo (transparent bg) — hero
    └── logo-crest.png  # Laurel AK monogram (transparent bg) — nav + footer
```

## Run locally

Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Design tokens (css/style.css `:root`)

| Token | Value | Use |
|---|---|---|
| `--black` | `#0c0c0c` | Page background |
| `--panel` | `#141210` | Card backgrounds |
| `--panel-line` | `#2a2620` | Borders |
| `--gold` | `#c9a24b` | Brand accent |
| `--ivory` | `#f4efe4` | Primary text |
| `--ivory-dim` | `#a89f8c` | Secondary text |

Fonts: Cormorant Garamond (display), Jost (body) — loaded from Google Fonts.

## Business facts (do not change without checking)

- Fleet: Luxury Sedan (up to 3 pax) and Executive SUV (up to 6 pax) only. **No stretch limousines.**
- Licensed & insured; CPUC Class B TCP; LAX-certified.
- Contact phone/email in footer are placeholders — replace with real ones before launch.

## TODO / next steps

- [ ] Wire the contact form to the booking system (Moovs widget or API) — currently `onsubmit="return false"`
- [ ] Replace placeholder phone `(310) 555-0100` and email with real contact info
- [ ] Add real fleet photography (currently SVG line art)
- [ ] Add favicon (use `assets/logo-crest.png` as source)
- [ ] SEO: meta description, Open Graph tags, structured data (LocalBusiness schema)
- [ ] Deploy (Netlify/Vercel/Cloudflare Pages — static hosting, no config needed)
