# Operations diorama implementation plan

Goal: replace the project gallery with a clear, interactive account of Brodie's summer housing operations work, using the approved architectural-model direction.

Architecture: static HTML/CSS and native JavaScript modules; SVG isometric model instead of a WebGL dependency. The diagram and dashboard share a synthetic dataset. No institutional data, backend connection, or credentials. Existing Bricolage typography and navy/blue identity guide the redesign.

Files: index.html contains readable case study and controls; styles.css contains responsive architecture-model design; model.mjs defines synthetic records and filtering/counts; app.mjs draws the model and handles chapters, room selection and filtering; tests/model.test.mjs checks data behavior. Existing resume remains downloadable.

- [x] Test first: use node:test to check room inventory totals, filter isolation and selected-room lookup. Fail when model.mjs is missing; implement and rerun.
- [x] Replace index.html with introduction, three chapter buttons, model/dashboard region, actual scope and outcomes, and contact. Reconstruction and synthetic-data labels are visible without interaction. State that layout is schematic, not an exact Georgetown floorplan.
- [x] Render SVG room geometry from dataset. Expose keyboard-operable room targets, a native room selector, and clear status labels. Chapters change narrative and contextual dashboard; filtering dims nonmatching rooms and updates the selector. Use no automatic camera or scroll animations.
- [x] Style desktop and mobile. Preserve minimum readable body type, visible focus, reduced-motion, and text content when JavaScript is unavailable. No old gallery remains in the rendered page.
- [ ] Verify node tests, syntax, internal links, resume download, browser chapter/filter/room interaction and 390px layout. Review independently, address findings, push and deploy only the brodielee Vercel project.

Source limits: recovered Hotel-Dashboard components include mockData and ComingSoon; cite as interface references only. User account supports supervision, imported inspection records, dashboards, key tracking, and SOP change. No loss reduction, quantified time savings, continued adoption, or deployed assignment heuristic is claimed.
