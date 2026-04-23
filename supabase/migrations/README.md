# Supabase Migrations

This directory holds SQL migrations for the ConstruBay Supabase project (`mlidhhprnxqajfsaqamu`).

## Why dashboard-applied, not CLI-pushed

This project is not linked to the Supabase CLI for schema management. Migrations live here for version control and peer review, but they are **applied manually by pasting each block into the Supabase SQL Editor** (Dashboard → SQL Editor → New query).

Rationale:

- One-person review loop. Running a block, testing the affected feature, and rolling back if it breaks is simpler in the dashboard than wiring up a CLI + migrations table.
- Block-by-block application is the right pace for security-sensitive changes. `supabase db push` would try to apply everything in one transaction; we want the opposite — small, reversible steps with a user-facing sanity check between each.
- The edge functions (`supabase/functions/*`) are deployed separately via `supabase functions deploy` and are unrelated to this migration flow.

If the project later adopts CLI-managed migrations, these files are already in the right place and the standard `0001_*.sql` naming will be picked up.

## Running `0001_enable_rls.sql`

This migration enables RLS on seven public tables exposed via the anon key. Applying it wrong will either (a) leave you still vulnerable, or (b) break the portal / lead-capture forms. Run it block-by-block, in order.

### Pre-flight — once, before touching anything

1. Before starting, verify the `client_id` column type on `public.projects`:
   - Supabase Dashboard → Table Editor → `projects` → click the `client_id` column header.
   - Expected: type `uuid`, foreign key to `auth.users(id)`.
   - If it's anything else (text, int, different FK), **stop** and tell Claude. The `USING (client_id = auth.uid())` clause in BLOCK 2 will need to change.
2. Paste into the SQL Editor and run — confirms which public tables currently have RLS off:
   ```sql
   select tablename, rowsecurity
   from pg_tables
   where schemaname = 'public'
   order by tablename;
   ```
   Every table listed in the migration's scope comment should show `rowsecurity = false`. If any of them show `true`, skip that table's block below. If any table shows `false` that is **not** in the migration, stop and investigate — there's a table in the DB we didn't spot in code.

### BLOCK 1 — Lead-capture (`leads`, `inquiry_leads`)

1. Paste BLOCK 1 from `0001_enable_rls.sql` into the SQL Editor. Run.
2. **Test**: open https://www.construbay.com/request-a-bid in an incognito window and submit the form end-to-end. Expect: success thank-you state, no console errors.
3. Also test the inquiry modal on any page that surfaces it (e.g., homepage). Expect: submission succeeds.
4. Confirm in the Table Editor that the new rows landed in `public.leads` / `public.inquiry_leads`.

**If a form submission fails**, immediately run BLOCK 1 rollback (also in the migration file, commented out near the bottom of the block) and tell Claude what error the browser or the Supabase logs showed.

### BLOCK 2 — `projects`

1. Only proceed after BLOCK 1 tests pass.
2. Paste BLOCK 2. Run.
3. **Test**: log into https://www.construbay.com/portal/login as a real client account. Expect `/portal/dashboard` to render that client's active project. If the dashboard shows "no projects found" for a client who should have one, the policy is wrong (most likely `client_id` type mismatch).

**If the dashboard breaks**, run BLOCK 2 rollback and double-check the `client_id` column type before trying again.

### BLOCK 3 — Portal project-scoped tables

1. Only proceed after BLOCK 2 tests pass.
2. Paste BLOCK 3. Run (all four `alter/create policy` pairs in one go is fine — they're independent of each other and the tables are disjoint).
3. **Test**, in order, while logged in as the same client:
   - `/portal/dashboard` — milestones still render.
   - `/portal/dashboard/documents` — document list renders.
   - `/portal/dashboard/invoices` — invoice list renders.
   - `/portal/dashboard/schedule` — schedule renders.
   - `/portal/dashboard/photos` — photos render.

**If any page breaks**, roll back only the table(s) it depends on (rollbacks are per-table in BLOCK 3) and report which page failed.

### Post-flight verification — once, after all blocks pass

1. Re-run the `pg_tables` query from the pre-flight step. Expect `rowsecurity = true` for every table in the migration.
2. Open the browser devtools console on any page of construbay.com (logged out), and run:
   ```js
   const r = await fetch('https://mlidhhprnxqajfsaqamu.supabase.co/rest/v1/projects?select=*', {
     headers: { apikey: '<paste the anon key from the page source>' }
   });
   console.log(await r.json());
   ```
   Expect an empty array `[]`. If you get rows back, RLS is not actually blocking anonymous reads on `projects` — policy is misconfigured.

### Rollback (entire migration)

If you need to revert the whole thing in one shot (e.g., portal went fully down after BLOCK 3), run each block's rollback SQL in reverse order: BLOCK 3 → BLOCK 2 → BLOCK 1. Rollback is safe — it returns the tables to their current (vulnerable) state, not a worse one. Tell Claude what broke and we'll fix the policy.

## Future migrations

- Name them `000N_short_description.sql` (zero-padded sequence, snake_case).
- Include the same header block: date, project ref, target, purpose, rollout order, rollback SQL.
- Update this README's "Running" section so the next person knows how to apply them.
- Commit both the migration and the README update together.
