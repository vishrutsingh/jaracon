# Quotation Page Updates

## Context
The user wants to update the web quotation page (`app/quotation/page.tsx`) with revised page structure, updated pricing conditions, and new contact details for JARACON EPC Projects.

## Changes

### 1. Update the 8-page architecture grid → now 7 pages

**File:** `app/quotation/page.tsx` — `pages` array (lines 3-12)

- **Remove:** `05 HSE — Safety Benchmarks & Compliance`
- **Remove:** `07 Clients — Supply Chain & Partner Network`
- **Add:** `Certifications — Industry Standards & Compliance` (replaces both removed pages conceptually)
- **Renumber** remaining pages sequentially (01–07)
- Update `SectionBar` text from `8-PAGE` → `7-PAGE`
- Update `packageChecks[0]` from "8-page" → "7-page"
- The dark-styled card (currently `08 Contact`) becomes `07` — update the condition check accordingly

New pages array:
```
01 Home — High-Impact Hero & Cinematic Visuals
02 About — Legacy, Vision & Qatar Mission
03 Services — Full EPC Technical Spectrum
04 Projects — Interactive Industrial Portfolio
05 Quality — QA/QC Standards & ISO Listing
06 Certifications — Industry Standards & Compliance (NEW)
07 Contact — Enterprise Inquiry Gateway (dark card)
```

### 2. Additional project pages — 2 free additions in next 6 months

**File:** `app/quotation/page.tsx` — Section 4: Future Project Pages (lines 133-160)

- Add a prominent note/condition: **"First 2 project page additions are complimentary within 6 months of launch."**
- Update the description text to mention this benefit
- Add a `CheckItem` for the free additions condition
- Update the investment summary table (Section 7) to reflect this condition with a note

### 3. Update contact details everywhere

**File:** `app/quotation/page.tsx` — multiple locations

Replace all instances of:
- `info@jaraconprojects.com` → `info@jaraconepc.com`
- `ARUN JARACON` → `JARACON EPC PROJECTS TRADING CONTRACTING & SERVICES`
- Add phone: `+974 5589 0643`
- Location: `DOHA, QATAR`

Locations to update:
- **Cover page** (line 76-80): "PREPARED FOR" name and "CONTACT ALIAS" email
- **Enterprise Inquiry Gateway** (line 172): email in the direct connect box
- **Investment Summary footer** (line 252): email
- **Terms footer** (line 347): email
- Add phone number alongside email where appropriate (cover, inquiry gateway, footer)

### 4. Consistency updates (ripple effects)

- Section 3 package description: "8-page" → "7-page" in both `packageChecks` and body text
- Section 7 investment table: "8-Page Site" → "7-Page Site"
- Section 8 Terms 1.3: reference to project pages pricing should note the 2-free condition

## Files to modify
- `app/quotation/page.tsx` (single file — all changes are here)

## Verification
1. Run `bun dev` and navigate to `/quotation`
2. Confirm 7 page cards in the architecture grid (no HSE, no Clients/Supply Chain, new Certifications card)
3. Confirm "2 free additions within 6 months" condition appears in Section 4 and is referenced in the investment table
4. Confirm all contact details show `+974 5589 0643`, `info@jaraconepc.com`, and updated company name
5. Confirm no stale references to "8-page" remain
