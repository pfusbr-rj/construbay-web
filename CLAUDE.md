---
# CLAUDE.md — ConstruBay Project Rules
# Auto-read by Claude Code every session
# Last updated: March 28, 2026 — Session 4

## WHO WE ARE
- Client: ConstruBay — Licensed Luxury General Contractor
- Owner: Paulo Fernandes
- CSLB: #1106798
- Phone: (415) 968-9494
- Email: paulo@construbay.com
- WhatsApp: wa.me/14159689494
- Calendly: https://calendly.com/construbay/initial-consultation-construbay
- Service Area: Marin County, Sonoma County, Napa County
- Live site: construbay.com
- GitHub: pfusbr-rj/construbay-web
- Vercel: pfusbr-6837s-projects/construbay-web

## BRAND
- Primary Black: #000000 (ALL backgrounds)
- Primary Gold: #cbb26a
- Gradient Gold: #bb8b4a to #f7eb9e
- Headline Font: Cormorant Garamond (Light 300) — inline only
- Body/Nav Font: Montserrat (Light 300, ALL CAPS, letter-spacing 0.15em) — inline only
- Main Brand Font: Repo ExtraBold
- Main Slogan: "Built With Intention"
- Support Line: "Artistry in Execution"

## TECH STACK
- Framework: Next.js 14, App Router, TypeScript
- Styling: Tailwind CSS + inline styles
- Database: Supabase Pro ($25/mo)
- Email: Resend (leads@construbay.com → paulo@construbay.com)
- Hosting: Vercel (auto-deploy on push to main)
- Analytics: GA4 (G-E5R2DP0WG0) + Google Ads (AW-16562885363) + GTM (GT-WP5CF89M)
- CMS: Sanity.io (project: cnkiklp4, dataset: production)

## CRITICAL BUILD RULES — NEVER BREAK
1. NEVER import from next/font/google — causes Vercel build timeout
2. ALWAYS use inline fontFamily strings: fontFamily: 'Cormorant Garamond' and fontFamily: 'Montserrat'
3. Only allowed imports on new pages: Link from next/link, Metadata from next
4. NEVER use Tailwind 'hidden' class mixed with inline display styles — Tailwind !important wins
5. NEVER use @typescript-eslint/no-explicit-any — use declare global interface Window instead
6. NEVER use 'source' or undeclared variables in Supabase inserts
7. Module-level Resend/Supabase init is forbidden — always init inside the POST handler
8. Every CC prompt MUST end with: git add -A && git commit -m "description" && git push origin main
9. Keep CC prompts under 400 words — longer prompts cause terminal hangs

## VERCEL ENV VARS (already set — never hardcode)
- SANITY_PROJECT_ID
- SANITY_DATASET
- SANITY_API_TOKEN
- KIMANA_WEBHOOK_URL
- RESEND_FROM_EMAIL
- RESEND_TO_EMAIL
- RESEND_API_KEY

## LEAD FLOW
Every lead form must fire simultaneously:
1. Resend email → paulo@construbay.com
2. POST to KIMANA webhook (KIMANA_WEBHOOK_URL env var)

## SITE STATUS — as of March 28, 2026
91 pages LIVE — zero build errors

### Pages built (Session 4)
Homepage: new slogan, EEAT trust bar, pain points, why ConstruBay, gold header CTA
Case studies: /projects/marion-avenue-mill-valley, /projects/sycamore-sound-studio, /projects/plymouth-whole-home-renovation
Blog: Paulo author box, Key Takeaways, Article JSON-LD schema, GTM in layout.tsx
Service pages: /investments, /kitchen-remodeling, /bathroom-remodeling, /full-home-remodeling, /outdoor-living, /design-build, /luxury-home-remodel-marin-county, /adu-builder-marin-county, /marin-county-kitchen-remodeling, /marin-county-bathroom-remodeling, /marin-county-adu-builder, /marin-county-permit-expediting, /home-additions-marin-county, /kitchen-remodel-mill-valley, /mill-valley-kitchen-remodel, /mill-valley-bathroom-remodel, /mill-valley-adu-builder, /tiburon-kitchen-remodel, /tiburon-bathroom-remodel, /tiburon-luxury-home-remodel, /san-rafael-kitchen-remodel, /sausalito-luxury-home-remodel, /ross-luxury-home-remodel, /belvedere-luxury-home-remodel, /bathroom-remodel-marin-county
City pages: /marin-county-general-contractor, /ross-general-contractor, /belvedere-general-contractor, /kentfield-general-contractor, /larkspur-general-contractor, /corte-madera-general-contractor, /novato-general-contractor
Audience pages: /for-homeowners, /for-architects
About: EEAT credentials, Organization JSON-LD, 3-column credentials grid

### Pages still to build
- /san-rafael-bathroom-remodel
- /sausalito-bathroom-remodel
- /sausalito-kitchen-remodel
- /ross-kitchen-remodel
- /belvedere-kitchen-remodel
- /napa-general-contractor
- /santa-rosa-general-contractor
- /petaluma-general-contractor
- /marin-county-home-additions variations
- Individual project case study sub-pages with photos

## KNOWN ISSUES
1. GTM ID set to GT-WP5CF89M — verify container is publishing in Tag Manager
2. Favicon may need PNG conversion
3. GBP needs golden hour exterior cover photo
4. Some new pages need real photos
5. Sitemap needs submission to Google Search Console

## CLIENT PORTAL — SUPABASE SCHEMA
Run these SQL commands manually in Supabase → SQL Editor:

```sql
-- projects table
create table projects (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references auth.users(id),
  name text,
  address text,
  scope text,
  current_phase text,
  start_date date,
  estimated_completion date,
  warranty_expiry date,
  pm_name text,
  pm_phone text,
  created_at timestamptz default now()
);
alter table projects enable row level security;
create policy "client sees own projects" on projects for select using (auth.uid() = client_id);

-- photos table
create table project_photos (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id),
  url text,
  phase text,
  caption text,
  taken_at date,
  created_at timestamptz default now()
);
alter table project_photos enable row level security;
create policy "client sees own photos" on project_photos for select using (
  project_id in (select id from projects where client_id = auth.uid())
);

-- documents table
create table project_documents (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id),
  label text,
  doc_type text,
  file_url text,
  uploaded_at timestamptz default now()
);
alter table project_documents enable row level security;
create policy "client sees own docs" on project_documents for select using (
  project_id in (select id from projects where client_id = auth.uid())
);

-- invoices table
create table project_invoices (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id),
  invoice_number text,
  amount numeric,
  status text,
  due_date date,
  paid_date date,
  file_url text,
  created_at timestamptz default now()
);
alter table project_invoices enable row level security;
create policy "client sees own invoices" on project_invoices for select using (
  project_id in (select id from projects where client_id = auth.uid())
);

-- milestones table
create table project_milestones (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id),
  phase_name text,
  status text,
  target_date date,
  completed_date date,
  sort_order int
);
alter table project_milestones enable row level security;
create policy "client sees own milestones" on project_milestones for select using (
  project_id in (select id from projects where client_id = auth.uid())
);
```

Also set these env vars in Vercel (and .env.local for dev):
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

---

## HOW TO UPDATE THIS FILE
At the end of every session, paste this into CC:
"Update CLAUDE.md: add [pages built] to the pages list, move them out of 'still to build', update session date to [date], add any new known issues: [issues]. Then git add -A && git commit -m 'update CLAUDE.md session [date]' && git push origin main"

---
