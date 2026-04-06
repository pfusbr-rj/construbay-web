# ConstruBay Edge Functions Setup Guide

This guide walks through setting up the Supabase Edge Functions that auto-sync photos, documents, and invoices into the client portal.

---

## Overview

| Function | Source | Destination Table | Schedule |
|---|---|---|---|
| `sync-photos` | Google Drive `/Photos` folder | `project_photos` | Sundays 8pm UTC |
| `sync-documents` | Google Drive `/Documents` folder | `project_documents` | Sundays 8pm UTC |
| `sync-invoices` | Gmail inbox (`paulo@construbay.com`) | `project_invoices` | Sundays 8pm UTC |

---

## Step 1: Create a Google Cloud Project & Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (e.g., `construbay-portal-sync`) or use an existing one
3. Navigate to **IAM & Admin > Service Accounts**
4. Click **Create Service Account**
   - Name: `construbay-sync`
   - Description: `ConstruBay portal sync service account`
5. Click **Create and Continue**, skip role assignment, click **Done**
6. Click on the new service account, go to **Keys** tab
7. Click **Add Key > Create new key > JSON**
8. Save the downloaded JSON file — you'll need it in Step 4

Note the service account email address (e.g., `construbay-sync@your-project.iam.gserviceaccount.com`)

---

## Step 2: Enable Required APIs

In Google Cloud Console, go to **APIs & Services > Library** and enable:

1. **Google Drive API** — for syncing photos and documents
2. **Gmail API** — for syncing invoices from email

---

## Step 3: Configure Domain-Wide Delegation (for Gmail)

Gmail access via a service account requires domain-wide delegation through Google Workspace Admin.

1. In Google Cloud Console, go to your service account
2. Click **Edit**, scroll to **Advanced settings**
3. Under **Domain-wide delegation**, click **Enable G Suite Domain-wide Delegation**
4. Note the **Client ID** shown

5. Go to [Google Workspace Admin Console](https://admin.google.com/)
6. Navigate to **Security > Access and data control > API controls**
7. Click **Manage Domain Wide Delegation**
8. Click **Add new**
   - Client ID: (paste the Client ID from step 4)
   - OAuth scopes: `https://www.googleapis.com/auth/gmail.readonly`
9. Click **Authorize**

> **Note:** Domain-wide delegation requires Google Workspace (not a personal Gmail account). If using Gmail personal, you'll need OAuth instead of a service account for Gmail.

---

## Step 4: Share Google Drive Folders with the Service Account

1. Open Google Drive and navigate to `ConstruBay/Projects/Fernandes-Residence/`
2. For each subfolder (Photos, Documents, Invoices):
   - Right-click > **Share**
   - Add the service account email (e.g., `construbay-sync@your-project.iam.gserviceaccount.com`)
   - Set permission to **Viewer**
   - Uncheck "Notify people", click **Share**

3. Get the folder IDs for each subfolder:
   - Open each folder in Drive
   - The URL will look like: `https://drive.google.com/drive/folders/FOLDER_ID_HERE`
   - Copy the `FOLDER_ID_HERE` portion for each folder

---

## Step 5: Add Supabase Secrets

### Using Supabase Dashboard

1. Go to [Supabase Dashboard](https://app.supabase.com/) > your project > **Edge Functions > Secrets**
2. Add each secret:

| Secret Name | Value |
|---|---|
| `GOOGLE_SERVICE_ACCOUNT_JSON` | Full contents of the service account JSON key file |
| `GOOGLE_DRIVE_PHOTOS_FOLDER_ID` | Drive folder ID for Photos |
| `GOOGLE_DRIVE_DOCUMENTS_FOLDER_ID` | Drive folder ID for Documents |
| `GOOGLE_DRIVE_INVOICES_FOLDER_ID` | Drive folder ID for Invoices (if used) |

### Using Supabase CLI

```bash
# Install Supabase CLI if needed
npm install -g supabase

# Login
supabase login

# Link to your project
supabase link --project-ref mlidhhprnxqajfsaqamu

# Set secrets
supabase secrets set GOOGLE_SERVICE_ACCOUNT_JSON="$(cat path/to/service-account-key.json)"
supabase secrets set GOOGLE_DRIVE_PHOTOS_FOLDER_ID="your_photos_folder_id"
supabase secrets set GOOGLE_DRIVE_DOCUMENTS_FOLDER_ID="your_documents_folder_id"
supabase secrets set GOOGLE_DRIVE_INVOICES_FOLDER_ID="your_invoices_folder_id"
```

> **Important:** The `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` secrets are automatically available in all Edge Functions — you do not need to set them manually.

---

## Step 6: Add `message_id` Column to `project_invoices`

The `sync-invoices` function stores the Gmail message ID to prevent duplicates. Add the column if it doesn't exist:

```sql
ALTER TABLE project_invoices ADD COLUMN IF NOT EXISTS message_id TEXT UNIQUE;
```

Run this in the Supabase SQL editor.

---

## Step 7: Deploy the Edge Functions

```bash
# Deploy all three functions
supabase functions deploy sync-photos
supabase functions deploy sync-documents
supabase functions deploy sync-invoices
```

The `--no-verify-jwt` flag is not needed — these functions use HTTP POST for manual triggers and cron for scheduled runs.

---

## Step 8: Test Manually

Invoke each function via HTTP POST to verify it works before the scheduled run:

```bash
# Test sync-photos
supabase functions invoke sync-photos

# Test sync-documents
supabase functions invoke sync-documents

# Test sync-invoices
supabase functions invoke sync-invoices
```

You can also use curl with your Supabase anon key:

```bash
curl -X POST \
  https://mlidhhprnxqajfsaqamu.supabase.co/functions/v1/sync-photos \
  -H "Authorization: Bearer YOUR_SUPABASE_ANON_KEY" \
  -H "Content-Type: application/json"
```

---

## Step 9: Verify Cron Schedules

The cron schedule (`0 20 * * 0` = every Sunday at 8pm UTC) is defined in `supabase/config.toml`.

To confirm schedules are registered:
1. Go to Supabase Dashboard > **Edge Functions**
2. Click on each function — the schedule should appear in the settings

---

## Troubleshooting

### "GOOGLE_SERVICE_ACCOUNT_JSON environment variable is not set"
- Verify the secret was added via Dashboard or CLI
- Check for JSON formatting issues (the value must be the full JSON object as a string)

### "Failed to exchange JWT for token: 400"
- Verify the service account JSON is valid and complete (contains `client_email`, `private_key`, `token_uri`)
- Check that the private key includes full `-----BEGIN PRIVATE KEY-----` header/footer

### "Drive API error: 403"
- The service account doesn't have access to the folder
- Go back to Step 4 and re-share the folder with the service account email

### "Gmail API error: 400 / Precondition check failed"
- Domain-wide delegation is not configured (see Step 3)
- The service account email's domain doesn't match the Gmail account domain

### "Gmail API error: 403 / Request had insufficient authentication scopes"
- The Gmail scope wasn't added to domain-wide delegation (see Step 3)
- Scope needed: `https://www.googleapis.com/auth/gmail.readonly`

### Functions not running on schedule
- Cron schedules require Supabase Pro plan or higher
- On the free plan, invoke functions manually or set up an external cron (e.g., GitHub Actions, Render cron jobs)

### Duplicate entries appearing
- Ensure the `message_id` column has a `UNIQUE` constraint (see Step 6)
- The photo/document dedup is based on the Drive `webViewLink` URL — if a file is moved, it may re-sync

---

## External Cron Alternative (Free Plan)

If on the Supabase free plan, use GitHub Actions to trigger the functions weekly:

```yaml
# .github/workflows/sync-portal.yml
name: Sync Portal Data
on:
  schedule:
    - cron: '0 20 * * 0'  # Every Sunday at 8pm UTC
  workflow_dispatch:       # Allow manual trigger

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Sync Photos
        run: |
          curl -X POST \
            https://mlidhhprnxqajfsaqamu.supabase.co/functions/v1/sync-photos \
            -H "Authorization: Bearer ${{ secrets.SUPABASE_ANON_KEY }}"

      - name: Sync Documents
        run: |
          curl -X POST \
            https://mlidhhprnxqajfsaqamu.supabase.co/functions/v1/sync-documents \
            -H "Authorization: Bearer ${{ secrets.SUPABASE_ANON_KEY }}"

      - name: Sync Invoices
        run: |
          curl -X POST \
            https://mlidhhprnxqajfsaqamu.supabase.co/functions/v1/sync-invoices \
            -H "Authorization: Bearer ${{ secrets.SUPABASE_ANON_KEY }}"
```

Add `SUPABASE_ANON_KEY` as a GitHub Actions secret in your repo settings.
