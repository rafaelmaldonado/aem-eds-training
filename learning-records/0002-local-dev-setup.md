# 0002 — Local dev setup taught (knowledge → skill)

**Date:** 2026-07-20

## Context
Second session. Learner had lesson 1 (the doc→DOM→decorate pipeline) but no
hands-on work yet. Learning record 0001 named "stand up the boilerplate + run
locally" as the top next candidate — turning conceptual knowledge into a skill.

## Decision
- Lesson 2 is the first **skill/hands-on** lesson: the 5-step boilerplate setup
  ending at `localhost:3000` via `aem up`.
- Kept the teach-by-contrast frame (Maven archetype / quickstart JAR / mvn deploy
  vs. GitHub template / `aem up` proxy / `git push`).
- Steps verified live against the official aem.live developer tutorial (not
  parametric): template → Code Sync app → `npm i -g @adobe/aem-cli` + clone →
  `aem up` → edit/push.

## What was taught
- **Lesson 0002** — "Stand Up the Boilerplate & Run It Locally": the 5 steps, the
  key mental model that `aem up` serves **local code over remote (.aem.page) content**,
  and that deploy = `git push` via the Code Sync app.

## Not yet assessed
- No evidence learner has actually run `aem up` or done lesson-1 quizzes.

## Next candidates
1. Content source + preview/publish model (Sidekick, `.aem.page` vs `.aem.live`).
2. Sections vs. blocks vs. default content (deeper authoring model).
3. Build a custom block hands-on (decorate + CSS) once a project is running.
