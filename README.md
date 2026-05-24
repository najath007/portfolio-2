# Muhammed Najath — Developer Portfolio

> Premium full-stack developer portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

**Live demo:** [muhammednajath.dev](https://muhammednajath.dev) *(update after deploying)*

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Routing | React Router v6 |
| Icons | Lucide React |
| Build Tool | Vite |

---

## Local Development

```bash
# 1. Clone the repo
git clone https://github.com/najath007/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Build

```bash
npm run build
```

The production build will be in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## Deploy to Vercel

### Option 1 — GitHub (Recommended)

1. Push this repo to your GitHub account
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Vercel auto-detects Vite — click **Deploy**

### Option 2 — Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

---

## Resume / CV

> **Important:** Drop your actual PDF file at `public/resume.pdf` before deploying.

The **Download CV** button in the Navbar and Hero section is already wired to `/resume.pdf` with the HTML `download` attribute — no code changes needed.

---

## SEO & Meta

- Open Graph tags are pre-configured in `index.html` for LinkedIn and WhatsApp rich previews
- `public/sitemap.xml` is ready — update the domain once deployed
- `public/robots.txt` references the sitemap

> **Update the domain** `muhammednajath.dev` in `index.html`, `public/sitemap.xml`, and `public/robots.txt` to match your real domain before deploying.

---

## Project Structure

```
src/
├── components/
│   ├── CustomCursor.tsx
│   ├── ParticleBackground.tsx
│   ├── SplashScreen.tsx
│   ├── BackToTop.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── pages/
│   ├── NotFound.tsx
│   └── CaseStudy.tsx
├── hooks/
│   ├── useTypewriter.ts
│   └── useScrollAnimation.ts
├── context/
│   └── ThemeContext.tsx
├── App.tsx
├── main.tsx
└── index.css
public/
├── resume.pdf          ← Drop your CV here
├── og-image.png        ← OG preview image
├── sitemap.xml
└── robots.txt
```

---

Built with ☕ and way too many late nights.
