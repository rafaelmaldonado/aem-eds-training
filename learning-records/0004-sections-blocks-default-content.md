# 0004 — Sections, blocks & default content taught

**Date:** 2026-07-23

## Context
Fourth session. Record 0003 named "sections vs. blocks vs. default content (deeper
authoring model)" as the #1 next candidate — the natural follow-on to Lesson 3's
authoring pipeline and Lesson 1's single doc→block example. Learner now knows *where*
content lives and *how* it publishes; this fills in *what the parts of a page are*.

## Decision
- Lesson 4 covers the three-layer page anatomy: section / default content / block.
- Kept the teach-by-contrast frame (parsys→section, core components→default content,
  custom component+dialog→block+decorate).
- Stressed the key unlearning: blocks are the exception, not the default. Most content
  is plain default content with no code — opposite instinct from classic AEM.
- Added Section Metadata and a forward pointer to auto-blocking, plus prev/next nav
  and a Lesson 04 index card.

## What was taught
- **Lesson 0004** — "Sections, Blocks & Default Content": `---` splits sections;
  non-table content = default content (semantic HTML, no block); a named table = block.

## Not yet assessed
- Still no evidence learner has run `aem up`, installed Sidekick, or done a quiz.

## Next candidates
1. Build a custom block hands-on (decorate + CSS) — the promised next lesson, now
   that the learner knows *when* a block is the right tool.
2. Auto-blocking (pipeline synthesizes blocks from default content).
3. Metadata / bulk metadata + the query index (`query-index.json`).
