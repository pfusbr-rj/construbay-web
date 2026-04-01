# ConstruBay Session Restart — April 2, 2026

## CC COMMAND
cd C:\Users\paulo\construbay-web && claude --dangerously-skip-permissions

## GIT STATUS
- Last commit: 09c81cb — instagram page rebuild (may be reverted)
- Branch: main
- Auto-deploys to Vercel ~35 sec after push

## COMPLETED TODAY
- [x] Kitchen/Bath landing page built → /kitchen-bathroom-remodel-mill-valley
- [x] Week 3 blog posts live
- [x] Instagram page rebuilt (focused conversion, no nav, form above fold)
- [x] 10 social posts synthesized from LLM army (all platforms)
- [x] Social media strategy decided: Meta (IG+FB) primary, Nextdoor organic, Pinterest passive
- [x] Instagram ad strategy: $30/day, 3 campaigns rotating

## PENDING — DO IN THIS ORDER TOMORROW

### TASK 1 — Verify Instagram page
Check construbay.com/instagram on mobile
If reverted, re-run the instagram rebuild prompt below

### TASK 2 — Fix Facebook Ads payment (#1815010)
- Go to facebook.com/business/help/support
- Find open case → add comment escalating to senior agent
- Try PayPal as alternative payment method
- Ad account ID: 26749411391349494

### TASK 3 — Marin County Google Ads Campaign
Account ID: 680-766-7762
Clone Sonoma County campaign exactly
Swap:
- Location: Marin County cities (Mill Valley, Tiburon, Sausalito, San Rafael, Corte Madera, Novato)
- Landing page: construbay.com/adu-marin-county
- Campaign name: ADU - Marin County - Search
- Budget: $30/day
- Same keywords, same ad copy, swap Sonoma → Marin

### TASK 4 — Instagram Page Rebuild (if needed)
Run this full CC prompt:

Read the current file at app/instagram/page.tsx

Rebuild the /instagram page completely. ONE goal: get visitor to book a site visit.

CRITICAL BUILD RULES:
- Escape ALL apostrophes as &apos; in JSX
- NO next/font/google — inline fontFamily only
- NO unused imports
- NO @typescript-eslint/no-explicit-any
- NEVER "Free Estimate" or "Get a Quote"
- Background #000000, gold #cbb26a, gradient #bb8b4a → #f7eb9e
- Mobile-first

REMOVE COMPLETELY:
- Full top navigation menu
- Paulo Fernandes initials/photo hero
- All CTA buttons except form submit
- Service chips/buttons row
- Full footer navigation

PAGE STRUCTURE TOP TO BOTTOM:

SECTION 1 — TRUST BAR (fixed top, 44px, no nav)
ConstruBay logo centered
"CSLB #1106798 • 4.9★ Google Rated • Mill Valley, CA"
Gold #cbb26a text on black

SECTION 2 — HERO
Headline: "Mill Valley Remodels, Beautifully Managed"
Subheadline: "Kitchen, bathroom, and ADU remodeling for Marin County homeowners — permits handled, timelines kept, zero change orders."

SECTION 3 — FORM (above fold on mobile)
Label: "Book a Site Visit"
Gold label, black inputs, 48px touch targets, full width

Fields in order:
1. "What are you considering?" — Dropdown: Kitchen Remodel / Bathroom Remodel / ADU / Guest House / Full Home Remodel / Not sure yet
2. "Where is your property?" — Dropdown: Mill Valley / Tiburon / Sausalito / San Rafael / Corte Madera / Other Marin City
3. "Your Name" — text required
4. "Phone Number" — tel required

Submit button:
- Text: "Book a Site Visit"
- Background: #cbb26a
- Color: #000000
- Height: 56px
- Full width

On submit:
- Save to Supabase (clone ADU page logic)
- Fire WhatsApp via CallMeBot (message: "New Instagram Lead: [Name] [Phone] [Project] [Location]")
- Replace form with thank you (no redirect):
"Thank you [Name]. Paulo or his team will call you within 24 hours to schedule your site visit. If you prefer to reach us now: (415) 968-9494 CSLB #1106798"

SECTION 4 — TRUST STATS (horizontal row)
150+ Projects • 4.9★ Google • 10-Year Warranty
Gold text, Montserrat

SECTION 5 — TESTIMONIAL
"Paulo was very professional, personable, and communicative — difficult to find with a general contractor. Completed on budget and with very high quality."
— Brian M., Mill Valley

SECTION 6 — PAULO BLOCK (small, secondary)
80px circular photo placeholder
"Paulo Fernandes personally oversees every project from permit to final walkthrough."
Montserrat 14px gray

SECTION 7 — FINAL CTA
Repeat Book a Site Visit button
Below: "Or call Paulo directly: (415) 968-9494" — clickable tel: link

SECTION 8 — MINIMAL FOOTER
© 2026 ConstruBay. CSLB #1106798. Mill Valley, CA
NO navigation, NO services, NO social icons

METADATA:
title: "Book a Site Visit | ConstruBay Mill Valley"
description: "Luxury kitchen, bathroom and ADU remodeling in Marin County. CSLB #1106798. 4.9★ Google. Book a site visit with Mill Valley&apos;s top general contractor."

VERIFICATION:
1. npm run build — 0 errors
2. grep -r "Free Estimate\|Get a Quote" app/instagram/ — 0 results
3. grep -r "next/font/google" app/instagram/ — 0 results

git add -A && git commit -m "rebuild: instagram landing page — conversion focused, no nav, form above fold" && git push origin main

### TASK 5 — Load 10 Social Posts into Meta Business Suite
Go to business.facebook.com
Create posts scheduled per the 5-week calendar
Use Canva Pro for visuals (brand kit already set up)
Schedule order:
Week 1 Tue 9am: ADU Construction
Week 1 Thu 6pm: Kitchen Before/After
Week 2 Mon 10am: Licensed GC Education
Week 2 Wed 7pm: Bathroom Spa
Week 3 Fri 11am: Paulo Founder Story
Week 3 Wed 9:30am: Permit/PlanPass.ai
Week 4 Sat 10am: Outdoor Living
Week 4 Thu 8am: Home Addition
Week 5 Sat 5pm: Testimonials
Week 5 Sun 6pm: Brand Story

### TASK 6 — Instagram Ad Campaign ($30/day)
Once Facebook payment (#1815010) is resolved:
Go to business.facebook.com/adsmanager
Create 3 campaigns at $10/day each:

Campaign 1 — ADU
Objective: Traffic
Destination: construbay.com/adu-marin-county
Headline: "Mill Valley ADU Builders — Schedule a Private Consultation"
Audience: Marin County, 35-65, homeowners, HHI top 25%

Campaign 2 — Kitchen + Bath
Objective: Traffic
Destination: construbay.com/kitchen-bathroom-remodel-mill-valley
Headline: "Luxury Kitchen & Bath Remodeling in Mill Valley"
Audience: Same + interior design interests

Campaign 3 — Consultation
Objective: Leads
Destination: calendly.com/construbay/initial-consultation-construbay
Headline: "Marin County&apos;s Most Trusted GC — Book Your Private Consultation"
Audience: Retargeting — website visitors last 30 days + IG profile visitors

### TASK 7 — Week 4 Blog Posts
Run in CC after Tasks 1-3 complete
4 posts targeting:
- ADU garage conversion Marin County
- Luxury kitchen remodel ROI Marin
- Bathroom remodel timeline what to expect
- Home addition vs moving Marin County 2026

### TASK 8 — Conversion Tracking ADU Form Step 4
Add Google Ads conversion tag AW-6807667762
Fire on Step 4 form submission on both ADU landing pages
Clone existing WhatsApp notification logic
Track: booked consultations not form views

## KEY ACCOUNTS & IDs
- Google Ads: 680-766-7762
- Google Ads Tag: AW-6807667762
- Meta Ad Account: 26749411391349494
- GA4: G-E5R2DP0WG0
- GTM: GTM-CONSTRUBAY
- Clarity: w2xbo5ao6o
- Calendly: https://calendly.com/construbay/initial-consultation-construbay
- WhatsApp API key: 7905514
- Phone: 14159689494
- GitHub: pfusbr-rj/construbay-web
- Supabase: Pro plan
- Sanity: cnkiklp4

## BRAND RULES (NEVER BREAK THESE)
- Background: #000000
- Gold: #cbb26a
- Gradient: #bb8b4a → #f7eb9e
- Headlines: Cormorant Garamond (inline fontFamily only)
- Body: Montserrat (inline fontFamily only)
- NEVER: "Free Estimate" or "Get a Quote"
- ALWAYS: "Schedule a Private Consultation" or "Request a Bid" or "Book a Site Visit"
- Escape apostrophes as &apos; in JSX
- No next/font/google
- No unused imports
- No @typescript-eslint/no-explicit-any
- staticPageGenerationTimeout: 180 in next.config.mjs

## LLM ARMY WORKFLOW
Before major decisions:
1. Write prompt
2. Run through GPT, Z.ai, Kimi, Gemini simultaneously
3. Paste all 4 responses back to Claude
4. Claude synthesizes master CC prompt
5. Run in CC → auto-deploys to Vercel

git add -A && git commit -m "docs: add April 2 restart file with full task queue" && git push origin main

Get some rest Paulo. Big day tomorrow. 🔥
