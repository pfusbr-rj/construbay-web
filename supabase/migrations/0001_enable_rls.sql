-- =============================================================================
-- Migration: 0001_enable_rls.sql
-- Date:      2026-04-22
-- Project:   construbay (ref: mlidhhprnxqajfsaqamu)
-- Target:    PRODUCTION
--
-- Purpose
-- -------
-- Enable Row-Level Security (RLS) on all public-schema tables that are reachable
-- from the browser via NEXT_PUBLIC_SUPABASE_ANON_KEY. The anon key ships inside
-- the deployed Next.js bundle, so with RLS disabled any visitor can run
-- arbitrary SELECT/INSERT/UPDATE/DELETE against these tables — flagged by the
-- Supabase Security Advisor on 2026-04-19.
--
-- Scope
-- -----
-- Lead-capture tables (anon INSERT only, never read from client):
--   - public.leads
--   - public.inquiry_leads
--
-- Portal tables (authenticated SELECT only, scoped to the caller's own projects):
--   - public.projects
--   - public.project_documents
--   - public.project_invoices
--   - public.project_milestones
--   - public.project_photos
--
-- Edge functions (sync-documents, sync-invoices, sync-photos) use the service
-- role key and bypass RLS regardless, so their writes continue to work.
--
-- Pre-run verification
-- --------------------
-- Before running any block below, paste this into the Supabase SQL Editor to
-- confirm which tables currently have RLS disabled. Cross-reference the result
-- against the block list above — if a public table appears here that is NOT in
-- this migration, STOP and investigate before proceeding.
--
--   select tablename, rowsecurity
--   from pg_tables
--   where schemaname = 'public'
--   order by tablename;
--
-- Rollout order
-- -------------
-- Run each BLOCK separately (not the whole file at once). After each block,
-- exercise the user-facing feature that touches those tables to confirm
-- nothing broke. See supabase/migrations/README.md for the full test checklist.
--
--   BLOCK 1 - leads + inquiry_leads      → test forms on /request-a-bid and the
--                                          inquiry modal
--   BLOCK 2 - projects                   → log into portal as a real client,
--                                          confirm /portal/dashboard loads
--   BLOCK 3 - project_documents + _invoices + _milestones + _photos
--                                        → click through each portal page
--
-- Rollback
-- --------
-- If a block breaks the app, run the matching rollback immediately. Rollback
-- returns the table to its current (vulnerable) state — it does not make
-- things worse. Rollback SQL is included at the bottom of each block, commented
-- out, for easy copy-paste.
-- =============================================================================


-- -----------------------------------------------------------------------------
-- BLOCK 1: Lead-capture tables
-- Intent: public visitors submit forms (anon INSERT), nobody reads from client.
-- -----------------------------------------------------------------------------

alter table public.leads enable row level security;
create policy "anon can insert leads"
  on public.leads for insert
  to anon, authenticated
  with check (true);

alter table public.inquiry_leads enable row level security;
create policy "anon can insert inquiry_leads"
  on public.inquiry_leads for insert
  to anon, authenticated
  with check (true);

-- Rollback for BLOCK 1:
--   drop policy "anon can insert leads" on public.leads;
--   alter table public.leads disable row level security;
--   drop policy "anon can insert inquiry_leads" on public.inquiry_leads;
--   alter table public.inquiry_leads disable row level security;


-- -----------------------------------------------------------------------------
-- BLOCK 2: Projects table
-- Intent: authenticated client reads ONLY rows where client_id = auth.uid().
-- Assumption: public.projects.client_id is uuid and FKs to auth.users(id).
-- If Paulo's Table Editor check shows client_id is something else (text,
-- separate FK), the USING clause below needs to change before running this block.
-- -----------------------------------------------------------------------------

alter table public.projects enable row level security;
create policy "clients read own projects"
  on public.projects for select
  to authenticated
  using (client_id = auth.uid());

-- Rollback for BLOCK 2:
--   drop policy "clients read own projects" on public.projects;
--   alter table public.projects disable row level security;


-- -----------------------------------------------------------------------------
-- BLOCK 3: Portal project-scoped tables
-- Intent: authenticated client reads rows only for projects they own.
-- The subquery relies on BLOCK 2 already being applied (so projects is also
-- RLS-protected). Running BLOCK 3 before BLOCK 2 is safe but unordered.
-- -----------------------------------------------------------------------------

alter table public.project_documents enable row level security;
create policy "clients read own project documents"
  on public.project_documents for select
  to authenticated
  using (project_id in (select id from public.projects where client_id = auth.uid()));

alter table public.project_invoices enable row level security;
create policy "clients read own project invoices"
  on public.project_invoices for select
  to authenticated
  using (project_id in (select id from public.projects where client_id = auth.uid()));

alter table public.project_milestones enable row level security;
create policy "clients read own project milestones"
  on public.project_milestones for select
  to authenticated
  using (project_id in (select id from public.projects where client_id = auth.uid()));

alter table public.project_photos enable row level security;
create policy "clients read own project photos"
  on public.project_photos for select
  to authenticated
  using (project_id in (select id from public.projects where client_id = auth.uid()));

-- Rollback for BLOCK 3 (per table — run only the ones that broke):
--   drop policy "clients read own project documents" on public.project_documents;
--   alter table public.project_documents disable row level security;
--
--   drop policy "clients read own project invoices" on public.project_invoices;
--   alter table public.project_invoices disable row level security;
--
--   drop policy "clients read own project milestones" on public.project_milestones;
--   alter table public.project_milestones disable row level security;
--
--   drop policy "clients read own project photos" on public.project_photos;
--   alter table public.project_photos disable row level security;


-- -----------------------------------------------------------------------------
-- Post-run verification
-- After completing all three blocks, re-run the pg_tables query above. Every
-- table listed in this migration should now show rowsecurity = true. Then
-- confirm end-to-end in the browser:
--   1. Submit /request-a-bid form — expect success, row lands in public.leads.
--   2. Log into /portal/login as a real client — expect dashboard to render
--      their project.
--   3. Open /portal/dashboard/documents, /invoices, /schedule, /photos — expect
--      each to render the client's own rows.
--   4. Log out. Try hitting supabase.from('projects').select('*') from the
--      browser console with only the anon key — expect an empty array (RLS
--      working).
-- -----------------------------------------------------------------------------
