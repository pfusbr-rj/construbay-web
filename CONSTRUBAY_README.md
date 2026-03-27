# ConstruBay Digital Marketing Stack — Master README
# Last updated: March 26, 2026
# Status: ADU landing page LIVE at construbay.com/adu

---

## 🏢 CLIENT PROFILE

| Field | Value |
|---|---|
| Business | ConstruBay — Licensed Luxury General Contractor |
| Location | Mill Valley, CA |
| License | CSLB #1106798 |
| Phone | (415) 968-9494 |
| WhatsApp | wa.me/14159689494 |
| Website | construbay.com |
| Email | paulo@construbay.com |
| Calendly | https://calendly.com/construbay/initial-contractor-consultation-construbay |
| GA4 | G-E5R2DP0WG0 |
| Service Area | Marin County, Sonoma County, Napa County |

---

## 🎨 BRAND GUIDE

| Element | Value |
|---|---|
| Primary Navy | #0a1628 |
| Primary Gold | #cbb26a |
| Gradient Start | #bb8b4a |
| Gradient End | #f7eb9e |
| Gradient CSS | linear-gradient(135deg, #bb8b4a 0%, #f7eb9e 100%) |
| Headline Font | Repo ExtraBold (Adobe Fonts) |
| Body Font | DM Sans (Google Fonts) |
| Color Rule | Navy + Gold ONLY — 2 colors maximum on landing pages |

**Logo path on live site:** `/images/logo.png` (in `public/images/`)

---

## 🖥️ TECH STACK

| Layer | Technology |
|---|---|
| Framework | Next.js 14, App Router, TypeScript |
| Styling | Inline styles (no Tailwind on landing pages) |
| Database | Supabase (`leads` table) |
| Email | Resend (sends from leads@construbay.com to paulo@construbay.com) |
| Hosting | Vercel (auto-deploy from GitHub on push to main) |
| Analytics | Google Analytics 4 (G-E5R2DP0WG0) — already in root layout.tsx |
| Booking | Calendly inline embed |
| GitHub Repo | pfusbr-rj/construbay-web |
| Vercel Project | pfusbr-6837s-projects/construbay-web |

**Supabase `leads` table fields:**
```
full_name, phone, email, project_type, budget_range,
timeline, message, property_city, property_zip, source
```

**Existing API endpoint:** `POST /api/lead`
- File: `src/app/api/lead/route.ts`
- Saves to Supabase + sends Resend email to paulo@construbay.com
- Required: `fullName`, `phone`, `projectType`
- Optional: `email`, `propertyCity`, `propertyZip`, `budgetRange`, `timeline`, `message`, `source`

---

## ✅ WHAT IS LIVE RIGHT NOW

### ADU Landing Page — construbay.com/adu ✅ LIVE
**Deployed:** March 26, 2026
**Files:** `src/app/adu/page.tsx` + `src/app/adu/layout.tsx`

**Page features:**
- Sticky header: logo (plain img, NOT a link) + phone only
- Split hero: headline left | lead form right (above fold)
- Form: First Name*, Phone*, Email*, Property City, ADU Type, Timeline
- Submits to `/api/lead` with `source: 'adu-landing'`
- On success: confirmation + auto-scroll to Calendly
- Call Now + WhatsApp buttons
- Stats strip, 4 ADU cards, 4-step process
- Calendly inline embed
- Mobile sticky bar (Call + WhatsApp)
- Exit intent banner on mouseleave

**LOCKED FUNNEL:** No nav, no site links, logo not clickable, footer URL plain text

**GA4 events:** `form_submit`, `call_click`, `whatsapp_click`

**SEO:** robots noindex (keeps landing page separate from SEO), canonical set

---

## 🚧 NEXT STEPS (in order)

1. **Verify page** — open construbay.com/adu on mobile, test form, test Calendly
2. **Share with AI Army** — screenshot + ask 4 LLMs for conversion feedback
3. **Run Google Ads** — destination: construbay.com/adu, budget $300/mo Search
4. **Deploy SEO pages** — /kitchen-remodeling, /bathroom-remodeling, /contact, /about
5. **Monthly AI Army automation** — cron job generates content 1st of each month
6. **Add WhatsApp logo image** — upload whatsapp.png to public/images/icons/

---
## 🔧 HOW TO DEPLOY CHANGES

### Option A: Claude Code (preferred)
```
cd construbay-web
git add .
git commit -m "description"
git push
# Vercel auto-deploys in ~35 seconds
```

### Option B: Claude in Chrome (no terminal needed)
- Claude navigates GitHub in browser
- Creates/edits files via GitHub web editor
- Commits directly to main
- Used this entire session

### Option C: GitHub Web Editor
1. github.com/pfusbr-rj/construbay-web
2. Navigate to file
3. Click pencil to edit
4. Commit directly to main

---

## ⚠️ TYPESCRIPT RULES THAT BREAK VERCEL BUILDS

These cause build FAILURES (ESLint errors = build errors on this project):

```tsx
// ❌ BREAKS BUILD:
(window as any).gtag(...)

// ✅ CORRECT:
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
window.gtag?.('event', ...)
```

```tsx
// ⚠️ WARNING (doesn't break build but needs comment):
<img src="..." />  // triggers @next/next/no-img-element

// ✅ CORRECT — add comment above:
{/* eslint-disable-next-line @next/next/no-img-element */}
<img src="..." />
```

```tsx
// ❌ BREAKS in JSX text:
<p>What's possible</p>   // apostrophe breaks
<p>Design & Build</p>    // ampersand breaks

// ✅ CORRECT:
<p>What&apos;s possible</p>
<p>Design &amp; Build</p>
```

---

## 📊 VERCEL DEPLOYMENT INFO

| Field | Value |
|---|---|
| Dashboard | vercel.com/pfusbr-6837s-projects/construbay-web |
| Deployments | vercel.com/pfusbr-6837s-projects/construbay-web/deployments |
| Production | construbay.com |
| Build time | ~35 seconds |
| Auto-deploy | Yes, on push to main branch |
| Last deploy | 58Rtxz32B — Ready — Mar 26, 2026 |

---

## 🤖 MONTHLY AI ARMY AUTOMATION (NOT BUILT YET)

Build a cron job that runs on the 1st of each month:

**What it does:**
1. Calls Anthropic API (claude-sonnet-4-20250514)
2. Generates fresh content for 4 topics:
   - ADU construction North Bay
   - Kitchen remodeling Marin County
   - Bathroom renovation Sonoma County
   - General contractor tips North Bay
3. For each topic generates:
   - 3 Google Ad headlines (max 30 chars)
   - 1 Instagram caption with 15 hashtags
   - 1 Facebook post
   - 1 blog post SEO outline
4. Saves to `/content/monthly-YYYY-MM.json`

**Cron schedule:** `0 8 1 * *` (8am on 1st of month)

**Where to build it:**
- Option A: Vercel Cron (`vercel.json` with cron config + API route)
- Option B: GitHub Actions (`.github/workflows/monthly-content.yml`)
- Option C: Node.js script + external cron service (EasyCron, cron-job.org)

**Env var needed:** `ANTHROPIC_API_KEY` (add to Vercel project settings)

---

## 🎯 AD CAMPAIGN SETUP

**Ad destination URL:** `https://construbay.com/adu`

**Google Ads campaigns (from playbook):**
| Campaign | Budget | Keywords |
|---|---|---|
| Kitchen/Bath | $600/mo | kitchen remodel marin, bathroom renovation sonoma |
| ADU | $450/mo | ADU contractor marin, garage conversion |
| General GC | $300/mo | general contractor north bay, home addition |
| Brand | $150/mo | construbay, construbay contractor |

**Instagram/Facebook targeting:**
- Location: Marin County, Sonoma County, Napa County
- Age: 35-65
- Interests: Home improvement, Real estate, Interior design
- Income: Top 25%
- Homeowners only

---

## 📋 QUICK REFERENCE — ALL KEY URLS

| URL | Purpose |
|---|---|
| construbay.com | Main website |
| construbay.com/adu | ✅ LIVE ADU landing page |
| construbay.com/request-a-bid | Multi-step consultation form |
| construbay.com/adu-builder | ADU cost calculator |
| github.com/pfusbr-rj/construbay-web | Source code |
| vercel.com/pfusbr-6837s-projects | Deployments |
| calendly.com/construbay/initial-contractor-consultation-construbay | Booking |
| wa.me/14159689494 | WhatsApp |

---

## 🚀 CLAUDE CODE QUICK START

Paste this to start a new CC session:

```
I'm continuing the ConstruBay project.
Site: construbay.com (Next.js 14 App Router, Vercel)
Repo: pfusbr-rj/construbay-web
Stack: TypeScript, Supabase, Resend, GA4

ADU landing page is LIVE at construbay.com/adu
Files: src/app/adu/page.tsx + src/app/adu/layout.tsx

Brand: navy #0a1628 + gold #cbb26a ONLY
API: POST /api/lead (Supabase + Resend to paulo@construbay.com)
Calendly: construbay/initial-contractor-consultation-construbay
WhatsApp: wa.me/14159689494
GA4: G-E5R2DP0WG0

TypeScript rules:
- No (window as any) — use declare global { interface Window { gtag? } }
- Add eslint-disable before <img> tags
- Use &apos; for apostrophes, &amp; for & in JSX

Task: [DESCRIBE WHAT YOU WANT TO BUILD]
```

---

*README last updated: March 26, 2026*
*ADU page deployed: March 26, 2026*
*Next: Verify live page, share with AI Army, run ads, build monthly automation*
