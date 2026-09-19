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
