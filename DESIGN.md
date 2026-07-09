---
name: Brodie Lee — Portfolio
description: Five shipped products, each presented as a full-bleed world in its own product palette, with a working demo inside every one.
colors:
  canvas: "#fafaf8"
  canvas-dark: "#111113"
  ink: "#1a1a1a"
  ink-dark: "#ededea"
  muted: "#62625d"
  hairline: "#e5e5e0"
  shell-blue: "#2456d6"
  wire-black: "#0e0a16"
  wire-violet: "#bf81fe"
  signal-red: "#ff5c4d"
  lastcall-black: "#0b0c0e"
  lastcall-lime: "#c8f169"
  hilltop-navy: "#0a2a4e"
  hilltop-blue: "#85b8f8"
  ledger-black: "#081009"
  ledger-green: "#4ee38a"
  darkroom-white: "#ffffff"
  darkroom-magenta: "#c21b74"
typography:
  display:
    fontFamily: "Bricolage Grotesque, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(3rem, 9vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2rem, 5vw, 2.9rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 750
    lineHeight: 1.4
  body:
    fontFamily: "Bricolage Grotesque, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Bricolage Grotesque, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 650
    lineHeight: 1.4
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.83rem"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  control: "10px"
  button: "12px"
  panel: "14px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2rem)"
  world-pad: "clamp(3rem, 8vh, 5rem)"
  world-gap: "clamp(2.5rem, 6vh, 4rem)"
  stack: "1.5rem"
components:
  pill-fieldbrief:
    backgroundColor: "{colors.wire-black}"
    textColor: "{colors.wire-violet}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 1rem"
  pill-rounds:
    backgroundColor: "{colors.lastcall-black}"
    textColor: "{colors.lastcall-lime}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 1rem"
  pill-healthyhoyas:
    backgroundColor: "{colors.hilltop-navy}"
    textColor: "{colors.hilltop-blue}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 1rem"
  pill-atlas:
    backgroundColor: "{colors.ledger-black}"
    textColor: "{colors.ledger-green}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 1rem"
  pill-photon:
    backgroundColor: "{colors.darkroom-white}"
    textColor: "{colors.darkroom-magenta}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 1rem"
  demo-button:
    backgroundColor: "color-mix(in srgb, currentColor 7%, transparent)"
    rounded: "{rounded.button}"
    padding: "0.8rem 0.9rem"
    height: "44px"
  tag:
    backgroundColor: "color-mix(in srgb, currentColor 9%, transparent)"
    rounded: "{rounded.pill}"
    padding: "0.18rem 0.65rem"
---

# Design System: Brodie Lee — Portfolio

## 1. Overview

**Creative North Star: "The Demo Floor"**

This portfolio is a trade-show floor where every booth is switched on and running. Visitors don't read about the five products — they touch them: live headlines stream in from a real API, a bar ranking re-sorts when you vote, a nutrition diary fills as you tap, a terminal types out an agent deliberation, a photo edit happens under your finger. The page is the sixth shipped product, and its craft is part of the pitch.

The system is playful, energetic, and memorable — but every playful choice must survive the question "does this make the work look better?" Energy is carried by color commitment, characterful type, and working demos, never by decoration. Each of the five projects lives in a full-bleed **world**: a section drenched in that product's own shipped palette. The neutral shell (near-white in light mode, near-black in dark) exists to make the worlds land harder. This system explicitly rejects template portfolios, resume-speak, and the AI-generated look (gradient text, glassmorphism, cream backgrounds, tracked-uppercase eyebrows).

**Key Characteristics:**
- Five full-bleed color worlds on a neutral shell — full-palette strategy at section scale
- One working, honest demo per world; proof over adjectives
- A single characterful typeface (Bricolage Grotesque) carrying the whole voice
- Hands-on, sturdy controls with visible borders and immediate feedback
- Motion as feedback and arrival, never as scroll decoration; reduced-motion always honored
- Progressive enhancement: every demo's content renders without JavaScript

## 2. Colors: The Five Worlds

Each world's palette is lifted from its shipped product; the shell stays neutral so the worlds carry all the color.

### Primary
- **Wire Black** (#0e0a16) with **Wire Violet** (#bf81fe): Field Brief's world — black, white, and purple, sampled from the shipped product's own wordmark. The background carries a faint violet cast so it never reads as the same black as the adjacent Rounds world. Wire Violet is the accent for category labels, links, and CTAs; **Signal Red** (#ff5c4d) is reserved exclusively for the pulsing live-data dot.
- **Last-Call Black** (#0b0c0e) with **Last-Call Lime** (#c8f169): Rounds' world — nightlife black with electric lime. Lime fills score pills (with Last-Call Black text) and highlights winning rows.
- **Hilltop Navy** (#0a2a4e) with **Hilltop Blue** (#85b8f8): HealthyHoyas' world — Georgetown navy. Hilltop Blue fills macro bars and marks selected menu items.
- **Ledger Green** (#4ee38a) on **Ledger Black** (#081009): ATLAS's world — a terminal. Green is system-line text and agent names; the terminal body sits on an even deeper black (#050a06).
- **Darkroom Magenta** (#c21b74) on **Darkroom White** (#ffffff): Photon's world — the only light world, closing the page with a pop. Magenta is links and labels only.

### Neutral
- **Canvas** (#fafaf8 light / #111113 dark): the shell background for hero and footer. True neutral, chroma ≈ 0 — never warm-tinted.
- **Ink** (#1a1a1a light / #ededea dark): shell text.
- **Muted** (#62625d light / #9a9a94 dark): shell secondary text; verified ≥4.5:1 on Canvas.
- **Hairline** (#e5e5e0 light / #2a2a2e dark): borders and the Photon world's block edges.
- **Shell Blue** (#2456d6 light / #7aa2ff dark): the shell's own link accent (GitHub, email); never used inside a world.

Every world also defines its own ink and muted (e.g. #f0edf7 / #a79fbd in Wire Black); all pairs are contrast-verified ≥4.5:1 — most exceed 7:1.

### Named Rules
**The World Integrity Rule.** A world's colors come from its shipped product, never from taste. Adding a sixth world requires a sixth shipped product with its own palette.

**The Neutral Shell Rule.** The shell never competes: chroma-zero neutrals plus one link accent. If the shell gets colorful, the worlds stop landing.

## 3. Typography

**Display Font:** Bricolage Grotesque (variable, opsz 12–96, wght 300–800; system sans fallback)
**Body Font:** Bricolage Grotesque — same family, lighter weights
**Mono Font:** ui-monospace system stack (SFMono-Regular, Menlo, Consolas)

**Character:** One quirky, warm-energetic grotesque carries the entire voice — playful without being a costume. The mono stack appears only where a terminal is literally being depicted.

### Hierarchy
- **Display** (800, clamp(3rem, 9vw, 5.5rem), lh 1, ls -0.03em): the name in the hero. One per page.
- **Headline** (800, clamp(2rem, 5vw, 2.9rem), lh 1.05, ls -0.02em): world titles, with the category label inline after them in the world accent (600, 1rem) — never as an eyebrow above.
- **Title** (750, 1.02rem): demo panel headings ("Which bar wins?").
- **Body** (400, 1rem, lh 1.6): descriptions, capped at 62ch measure.
- **Label** (650, 0.88–0.9rem): pills, CTAs (700), tags (550, 0.76rem).
- **Mono** (400, 0.83rem, lh 1.55): ATLAS terminal only.

### Named Rules
**The One Family Rule.** Bricolage Grotesque in weights 400–800 is the entire typographic system. Two scoped exceptions exist, both for depiction: the mono stack solely inside terminal chrome, and product-native type (the Georgia serif stack for Field Brief's masthead and HealthyHoyas' display) solely inside lifted product miniatures. Type as costume anywhere else is prohibited.

**The Inline Category Rule.** Project categories sit inline after the headline in the world accent color. Never stack a small tracked-uppercase label above a heading.

## 4. Elevation

The system is flat: depth is conveyed by color planes (the five worlds against the neutral shell) and 1px hairline borders, not shadows. Panels inside worlds are tonal — `color-mix(in srgb, world-ink 6%, transparent)` fills with 15%-ink borders — so they read as etched into the world, not floating above it.

### Shadow Vocabulary
- **Grab handle** (`box-shadow: 0 2px 10px rgba(0,0,0,0.35)` + `0 0 8px rgba(0,0,0,0.55)` on the divider line): only on the Photon slider handle, where something is physically graspable over a photo.

### Named Rules
**The Functional Shadow Rule.** Shadows exist only where the user can grab something. Decorative elevation is prohibited; if a surface needs separation, use a border or a tonal fill.

## 5. Components

Component character: **hands-on and sturdy**. Controls look pressable and honest — visible 1.5px borders, ≥44px hit areas, immediate feedback in ≤300ms. Machines, not decoration.

### World Pills (navigation)
- **Shape:** full pill (999px), padding 0.45rem 1rem
- **Style:** each pill is a miniature of its world — world background + world accent text (see frontmatter `pill-*` components), 1px hairline edge so dark pills hold on dark shells
- **Hover:** rises 2px (transform, 250ms ease-out-quint); **Entrance:** staggered 45ms roll-call on page load

### Demo Buttons (vote targets, menu items)
- **Shape:** 10–12px radius, min-height 44px
- **Style:** transparent tonal fill (7% ink), 1.5px border at 22–25% ink
- **Hover:** border snaps to the world accent; **Active:** scale(0.98); **Selected** (`aria-pressed="true"`): accent border + 16% accent fill + ✓ suffix
- **Focus:** 2px world-accent outline, 2px offset, `:focus-visible` only

### Tags
- **Style:** pill chips, 9% ink tonal fill, world-muted text (550, 0.76rem); mono variant inside the ATLAS world only

### Panels (demo containers, the wire)
- **Corner Style:** 14px
- **Background:** 6% world-ink tonal fill, 15% ink border
- **Shadow Strategy:** none — flat per Elevation
- **Internal Padding:** ~1.15–1.3rem

### CTAs
- **Style:** plain text links in the world accent, 700 weight, with a trailing ↗; underline on hover. Never buttons — the sturdy chrome is reserved for things that *do* something on the page.

### Lifted Product Miniatures (signature components)
Product UI is never shown as a raster screenshot — it is rebuilt as a small, crisp HTML/CSS recreation (`.lift-*`): Field Brief's front page (serif masthead, risk index with SVG sparklines), HealthyHoyas' landing (serif display + fanned nutrition-label cards), and Photon's editor chrome (toolbar, sliders, layers, real photo on canvas). Rounds has no miniature: its interactive head-to-head demo already depicts the app's core ranked list, and a second ranking card alongside it read as duplication. Miniatures are decorative depictions: `role="img"` with a descriptive `aria-label`, `pointer-events: none`, fixed product-true colors in both themes. **The Vector Chrome Rule.** If a product's UI appears on this page, it is lifted as markup, not pasted as pixels — the ATLAS terminal set the precedent.

### The Demos (signature components)
Each world contains exactly one working artifact: the live wire (Field Brief), the head-to-head ranker with FLIP reorder + decaying winner highlight (Rounds), the build-a-plate macro counter with 280ms count-up tweens (HealthyHoyas), the self-typing terminal (ATLAS), and the before/after filter slider with a one-time drag-hint nudge (Photon). Demos are honest: real data where possible, labeled "representative" or "toy of the real thing" where not. All content prerenders in HTML; JS only adds behavior. Motion timing: feedback ≤300ms, entrances 550–650ms, all on `cubic-bezier(0.22, 1, 0.36, 1)`, all with reduced-motion alternatives.

## 6. Do's and Don'ts

### Do:
- **Do** source every color from a shipped product's real palette; cite the product when adding one.
- **Do** verify every text/background pair at ≥4.5:1 — the current system's floor is 5.67:1; don't lower it.
- **Do** make demos honest: real data, or an explicit "representative" / "toy" label in the demo note.
- **Do** prerender all demo content in HTML and layer JS on top; the page must read fully with JS disabled.
- **Do** give every animation a `prefers-reduced-motion` alternative and every control a `:focus-visible` ring in the world accent.
- **Do** keep motion as feedback and arrival (vote highlights, data arriving, count-ups) on ease-out-quint, within the 100/300/500ms bands.

### Don't:
- **Don't** build "template portfolio" patterns — Linktree-style link piles, identical project-card grids, stock hero copy (PRODUCT.md anti-reference, verbatim).
- **Don't** write "corporate LinkedIn clone" copy — resume-speak, buzzwords, headshot-and-timeline layouts (PRODUCT.md anti-reference).
- **Don't** ship "the AI-generated look" — gradient text, glassmorphism, cream body backgrounds, uppercase tracked eyebrows above sections, hero-metric templates (PRODUCT.md anti-reference).
- **Don't** use side-stripe borders (`border-left` > 1px as accent), bounce/elastic easing, or scroll-fade reveals on every section.
- **Don't** use mono outside terminal chrome, or a second display family anywhere.
- **Don't** add decorative shadows; if it isn't graspable, it doesn't cast one.
- **Don't** let the shell take color or the worlds share a palette — if two adjacent sections read as the same world, one of them is wrong.
