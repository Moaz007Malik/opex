# OpEx6 — Exec App Marketing Website

Pre-launch marketing site for **OpEx6** (opex6.com). Built with **React**, **Vite**, **Tailwind CSS**, and **React Router v6**. Deployable as a static build to Hostinger.

## Stack

- **React** + **Vite**
- **Tailwind CSS** (dark theme, brand colours)
- **React Router v6** (client-side routing)
- **React Helmet Async** (per-page meta tags)
- **Formspree** (Register Interest form — endpoint to be supplied before go-live)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is in **`dist/`**. The `public/.htaccess` file is copied into `dist/` so that Hostinger (Apache) serves `index.html` for all unknown paths (SPA fallback). **Required:** after deployment, test direct URLs (e.g. `/pricing`, `/faq`, `/register-interest`) and refresh on nested routes; all must load without 404.

## Deploying to Hostinger

1. Run `npm run build`.
2. Upload the **contents** of the `dist/` folder to your Hostinger hosting root (e.g. `public_html`) via File Manager or FTP.
3. Ensure **.htaccess** is present in the same directory as `index.html` (it is included in `dist/` from `public/.htaccess`).
4. If the site is in a subdirectory, adjust `RewriteBase` in `.htaccess` or configure the Hostinger document root to point to the folder containing `index.html`.

## Form (Register Interest)

- Form lives at **/register-interest**.
- Submission is sent to **Formspree**. Before go-live, replace the placeholder endpoint in `src/config/formspree.js`:

  ```js
  export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
  ```

  Use your Formspree form ID or the endpoint supplied by the client. The same endpoint is used for Register Interest, Support contact, and Contact page forms (submissions can be distinguished by `source` and `_subject` fields).

- Required fields: Full Name, Work Email, Job Title, Company Name, and the consent checkbox for contact about the registration. Optional: consent for product updates. Success state shows: *"Thank you. You are on the list. We will be in touch ahead of launch with your early access details."*

## Project structure

```
src/
  components/       — shared components
    layout/         — Header, Footer, CookieBanner, BaseLayout
    ui/              — Button, Card, Badge, Input, Checkbox
  pages/            — one file per route
  data/             — pricing, FAQ, KPI data (JS)
  App.jsx            — routing
  main.jsx           — entry (HelmetProvider, BrowserRouter)
public/
  .htaccess         — SPA fallback for Apache/Hostinger
```

## Routes

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/exec-app` | Exec App product overview |
| `/kpis` | KPIs & Dashboards explorer |
| `/how-it-works` | How It Works |
| `/pricing` | Pricing |
| `/resources` | Resources / blog |
| `/use-cases` | Use cases |
| `/register-interest` | Register Interest form |
| `/support` | Support / help |
| `/faq` | FAQ |
| `/about` | About OpEx6 |
| `/contact` | Contact |
| `/privacy` | Privacy Notice |
| `/cookies` | Cookie Notice |
| `/terms` | Terms of Use |

## Cookie banner

V1 uses **essential cookies only** (e.g. to remember cookie banner dismissal). A minimal banner is shown with copy as per the brief; it links to `/cookies` and has an OK button that dismisses and sets a local flag so it does not show again.

## Brand / design

- **Dark theme only.** Background: `#0F172A`, cards/sections: `#1E293B`, accent: `#6366F1`, amber for “Early Access” badge: `#F59E0B`.
- **Typography:** Inter (400, 500, 600, 700) from Google Fonts.
- **Logo:** Placeholder wordmark “OpEx6” (Inter Bold) until client supplies asset.

## Outstanding items for client before go-live

- **Logo:** Logo file to be supplied. 'OpEx6' wordmark in Inter Bold is used as placeholder in the header.
- **Form endpoint:** Formspree (or Netlify Forms) form ID/endpoint to be set in `src/config/formspree.js`.
- **Contact email:** Confirm sales@opex6.com before launch.
- **Legal dates:** Insert actual "Last updated" dates in Privacy Notice, Cookie Notice, and Terms of Use (currently: `[TO BE INSERTED BY CLIENT BEFORE LAUNCH]`).
- **Analytics/marketing:** If analytics or marketing scripts are added after launch, update the Cookie Notice and implement a CMP before those scripts run (see brief Section 2.7).

## Licence

Proprietary. OpEx6 Ltd. All rights reserved.
