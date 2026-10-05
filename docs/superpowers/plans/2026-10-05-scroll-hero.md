# Scroll hero implementation plan

Goal: replace the existing exhibit with the approved overhead shift board and loop the supporting diagrams.
Architecture: static SVG and semantic stage descriptions in index.html, scroll progress in app.mjs, native CSS transforms and diagram loops in styles.css. No dependencies.

- [x] Add tests for bounded progress and stage selection in tests/scroll.test.mjs; implement scroll.mjs. Verify beginning/end and reverse progress without NaN on short exhibits.
- [x] Replace the old exhibit with an overhead floor plan: twelve room tiles, assignments, exception reports, and key desk. Keep fictional labels, visible static text and direct case-study link.
- [x] Replace app.mjs with scroll rendering and offscreen/persistent pause controls. Use one scheduled animation frame; preserve readable fallback below 650px viewport height and reduced motion.
- [x] Replace lower replay controls with pause controls and six-second looping station/path sequences. Pause offscreen and on hidden tabs.
- [x] Verify syntax, meaningful progress tests, desktop/mobile browser scroll forward/back, pause/resume, static fallback styles and overflow. Push existing branch and provide preview; production blocked by Vercel security notice.
