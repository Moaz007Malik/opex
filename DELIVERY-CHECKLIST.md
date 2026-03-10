# OpEx6 — Developer Delivery Checklist (Section 4)

Use this checklist before marking the project complete. All items have been implemented; verify in browser and build before handover.

---

## Pages

| Item | Status |
|------|--------|
| Homepage — all sections built and responsive | ✓ |
| Exec App page — complete | ✓ |
| KPIs & Dashboards — interactive tabs with all 15 categories and all KPIs | ✓ |
| How It Works — complete | ✓ |
| Pricing — 3 cards, pre-launch framing, FAQ strip | ✓ |
| Resources — 6 article cards | ✓ |
| Use Cases — 4 illustrative scenario cards (NOT case studies/customer stories) | ✓ |
| Register Interest — form with GDPR consent, success state, no pre-ticked boxes | ✓ |
| Support — categories and contact form | ✓ |
| FAQ — 4 groups, all questions, accordion pattern | ✓ |
| About — complete | ✓ |
| Contact — form complete | ✓ |
| Privacy Notice — full content including last updated placeholder | ✓ |
| Cookie Notice — full content (dev note: if analytics added, update notice + CMP) | ✓ |
| Terms of Use — full content including last updated placeholder | ✓ |

---

## Global

| Item | Status |
|------|--------|
| Header navigation: dropdowns working, all links correct | ✓ |
| Footer: all four columns with correct links | ✓ |
| Cookie banner: essential-only, 'OK' dismiss, link to /cookie-notice | ✓ |
| All CTA buttons link to /register-interest (not modals) | ✓ |
| All routes return correct page — no 404s | ✓ |
| SPA fallback .htaccess in public/ (copied to dist/) | ✓ |
| Mobile responsive (test at 375px and 768px) | Verify in browser |
| No broken links | Verify in browser |
| SEO meta tags (title + description) on every page | ✓ |
| Build completes: `npm run build` | ✓ |
| README.md with setup, run, deployment, .htaccess note | ✓ |

---

## Legal and Compliance

| Item | Status |
|------|--------|
| Privacy Notice and Cookie Notice linked in footer | ✓ |
| Privacy Notice and Cookie Notice linked in Register Interest form | ✓ |
| No pre-ticked checkboxes anywhere | ✓ |
| Required consent and optional marketing checkboxes separate and independent | ✓ |
| Cookie banner does not use deceptive patterns | ✓ |
| Use Cases page does not say 'Case Studies' or 'Customer Stories' | ✓ |
| Use Cases scenarios do not claim real customer outcomes | ✓ |
| Sectors block uses generic categories — no named enterprise logos | ✓ |
| Launch offer framed as pre-launch, subject to terms | ✓ |
| No fictional testimonials with invented names/companies | ✓ |
| No language implying product is already live/deployed/proven | ✓ |

---

## Outstanding for Client Before Go-Live

- [ ] **Logo** — Supply logo file; placeholder is 'OpEx6' wordmark (Inter Bold).
- [ ] **Form endpoint** — Set Formspree (or Netlify) form ID in `src/config/formspree.js`.
- [ ] **Contact email** — Confirm sales@opex6.com.
- [ ] **Legal dates** — Insert "Last updated" in Privacy Notice, Cookie Notice, Terms of Use (replace `[TO BE INSERTED BY CLIENT BEFORE LAUNCH]`).
- [ ] **Analytics/marketing** — If added later: update Cookie Notice and implement CMP before scripts run (brief Section 2.7).
