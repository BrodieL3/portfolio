# Scroll-driven portfolio opening

Replace the existing room model, dashboard and chapter controls with one scroll-driven exhibit. Preserve the approved personal essay and factual case study.

## Recommended direction: overhead shift board

A large flat architectural plan uses twelve schematic room tiles, four inspector tokens, an arrivals strip and a separate key desk. This is a new illustration, not the current isometric diagram. The exhibit occupies a sticky viewport while natural page scrolling moves through three stages:

1. Arrivals become assignments. Arrival cards slide toward room groups; inspector tokens move to their assigned rooms.
2. Inspections become visible. Room status marks appear, two sample maintenance exceptions stay highlighted, and their report cards move into a work-order queue.
3. A missing key reveals a handoff problem. A log trail connects an inspector to the key desk. The last state describes the lock change and clearer shift instructions, without suggesting the key was recovered.

The opening headline and short introduction frame the board. One concise explanation accompanies each stage. A visible progress line indicates the three stages; links to the case study and résumé remain directly available. The scene moves forward and backward with scrolling, rather than playing a timed entrance. All labels and values are explicitly fictional examples.

## Alternatives considered

- A camera moving through a 3D residence hall would feel cinematic, but would obscure operational relationships and add asset/performance costs.
- A large dashboard assembled by scrolling would emphasize software, but would lose the physical context that makes this work distinctive.

The overhead board keeps the physical work legible and makes assignments and handoffs the subject of the motion.

## Layout and motion

Use the established navy, mint and clay palette and Bricolage typography. Desktop places concise narrative alongside a large board. Mobile puts narrative above a simplified board, with a shorter scroll distance. Sticky behavior is enabled only when the viewport is tall enough to fit the exhibit. No wheel interception, forced scrolling or cursor-dependent interactions.

Use inline SVG and native scroll progress with one requestAnimationFrame update per frame. Animate transforms, opacity and connecting paths. Clamp progress and use three continuous stage intervals. With JavaScript unavailable, all three explanations and a static final illustration remain readable. With reduced motion enabled, present the stages as ordinary static content without sticky choreography.

## Lower sequences

Loop both existing diagram sequences while their illustrations are visible. Leave a short rest between cycles. Pause offscreen and when the document is hidden. Provide a Pause animation / Resume animation button for each. A user's pause survives leaving and returning to the section. Reduced-motion disables looping and hides motion controls. Preserve the current captions and essay.

## Verification

Check stage progress forward and backward, direct anchor navigation, a 390px mobile viewport, short viewports, pause/resume and offscreen behavior. Confirm reduced-motion rules, static fallback, no horizontal overflow, legible labels, no invented outcome metrics, and no infinite animation without a pause control.

## Delivery

Implement on the existing codex/operations-diorama branch and publish a verified preview. Production promotion remains blocked until the user resolves or authorizes dismissal of Vercel's security-setup notice.
