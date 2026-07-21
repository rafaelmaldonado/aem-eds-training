# 0003 — Content source + preview/publish model taught

**Date:** 2026-07-21

## Context
Third session. Lessons 1 (doc→DOM→decorate) and 2 (boilerplate + `aem up`) done.
Learning record 0002 named "content source + preview/publish (Sidekick, .aem.page
vs .aem.live)" as the #1 next candidate — it's the missing half of Lesson 2's
"code is local, content is remote": *where* the content is and *how* it goes live.

## Decision
- Lesson 3 covers the content/authoring pipeline, kept parallel to the classic
  author→activate→dispatcher shape via the teach-by-contrast frame.
- Introduced three concrete artifacts: the two hosts (`.aem.page` / `.aem.live`),
  `fstab.yaml` mountpoints, and Sidekick's Preview/Publish buttons.
- Stressed that code and content are two independent pipelines meeting at render.
- Also added prev/next nav links across all lessons and a Lesson 03 card to index.

## What was taught
- **Lesson 0003** — "Content, Preview & Publish with Sidekick": content = a document;
  `fstab.yaml` maps path→source; Preview → `.aem.page`, Publish → `.aem.live`.

## Not yet assessed
- No evidence learner has run `aem up`, done any quizzes, or installed Sidekick.

## Next candidates
1. Sections vs. blocks vs. default content (deeper authoring model).
2. Build a custom block hands-on (decorate + CSS) once a project is running.
3. Metadata / bulk metadata + the query index (`query-index.json`).
