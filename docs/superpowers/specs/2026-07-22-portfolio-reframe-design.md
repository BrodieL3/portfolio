# Portfolio Reframe — Design

**Date:** 2026-07-22
**Approved by:** Brodie (interactive session)

## Context

Production (brodielee.vercel.app) serves the SMB-consulting funnel merged 2026-07-13. Local `master` (= `workshop-section` branch, PR #2) carries the builder-portfolio lineage plus the new **001/ The Workshop** section (agentic-engineering rig + imessage-reader + comms-triage plugins). The user wants the page to accurately reflect what he's up to and his current Claude setup.

## Decisions (user-confirmed)

1. **Frame:** builder portfolio first — the page is the working record of projects and tooling (LinkedIn-replacement role).
2. **Consulting:** demoted to a single low-key line in Contact; the SMB funnel page is retired (recoverable in git history).
3. **Content:** tight — five shipped products + Workshop. Dispatch and haus stay off the page.

## Changes (all in `index.html` on the Workshop lineage)

1. **Hero** — keep h1 "Use Claude Smarter" and tagline "Better tools for Claude. Projects to prove it." Add one identity sub-line naming Brodie Lee and agentic engineering so the page reads as a person, not a product. No structural changes.
2. **002/ About** — replace "About that subscription" copy (Claude-usage philosophy) with "What I'm up to": builds agentic systems and ships products; runs the four-harness/five-skill setup detailed in Workshop; open-sources the tooling; this page replaces LinkedIn. No claims beyond what existing site copy or the shipped repos establish. Section id, number, seam, and folio entry unchanged.
3. **008/ Contact** — keep existing copy ("That's the whole demo floor…") and add one line offering Claude-automation work for small businesses via email. No booking widget.
4. **No other section changes.** Numbering (001 Workshop … 008 Contact), seams, and folio nav are already consistent on this lineage.

## Integration & deploy

- Merge `origin/master` (SMB page) into local `master` with `-s ours` (records the history, keeps our content), push `master`. PR #2 is superseded/closed by this merge.
- Vercel auto-deploys master. Verify by curling production for `id="workshop"` and the new About heading.

## Verification

- Local: HTML tag-balance around edited blocks, folio count == section count (8), all fragment hrefs resolve.
- Post-deploy: curl production, confirm Workshop section + reframed About + consulting line present; SMB hero absent.

## Out of scope

Dispatch/haus sections, visual redesign, new assets, changes to the five product sections.
