# Design: A shift at Georgetown

## Direction
An architectural tabletop model with a restrained operational dashboard. Quiet paper, navy ink, desaturated greens, and a small terracotta accent; generous editorial typography frames one substantial interactive exhibit. No game mechanics, scroll hijacking, or decorative animation.

## Palette and typography
- Paper #f5f6f3; ink #172e3c; muted text #53636a; border #d9e0df.
- Blue #214f68; accent #b75430.
- Status markers: ready #307b67, pending #9b701c, attention #ac493e; always paired with readable labels.
- Bricolage Grotesque with system sans-serif fallback; large balanced headings and compact dashboard typography.

## Layout
A two-column introduction leads to three chapter buttons and a model/dashboard split. The model uses inline SVG with a fixed isometric perspective, schematic rooms, miniature people, a keyroom, and landscape. The dashboard sits beside it above 760px and below it on smaller screens. The written case study, personal context, and contact invitation follow.

## Interaction
Selecting a room synchronizes the outline, native selector, status, inspector, arrival, and note. Status filters dim other rooms and remove them from keyboard navigation. The inspection chapter starts with reported issues; the handoff chapter highlights the keyroom and replaces the sample dashboard with an illustrative investigation sequence. Focus states and live announcements support keyboard and assistive-technology use. Reduced-motion disables transitions.

## Representation
This is a new reconstruction with synthetic data, not original production footage or a campus floorplan. Keep the reconstruction labels beside the exhibit and the factual work narrative below. The page uses no 3D library or build step; SVG and small ES modules keep it lightweight.


## September 2026 thematic revision
User requested the return of distinct visual themes while retaining the architectural model. Housing remains pale green. The factual work section uses #183c48 with #c7d8d7 body text and #f1f5ed headings. The personal reading section uses #dea884 with #302c2b body text. Matching isometric illustrations depict an operations desk and reading table, made as standalone SVGs by Luna Max agents, then reviewed by a stronger model for visual quality. The approved personal essay appears intact with a Brodie sign-off. Keep UI labels brief while surrounding prose is more conversational.


## Purposeful SVG replacement
Supporting images now explain the adjoining content. The work illustration connects arrivals, assignments, room checks and key handoffs on a schematic shift board. The personal illustration connects asking, trying and revising an idea. Preserve the isometric solid style and each section palette, but prioritize readable relationships over literal furniture. Short HTML captions and descriptive alt text accompany both. Content-derived generation briefs are in docs/svg-purpose-briefs.md.
