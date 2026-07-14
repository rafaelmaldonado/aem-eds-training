# 0001 — Mission set; starting point established

**Date:** 2026-07-13

## Context
First session. Workspace was empty. Learner is a **traditional AEM developer**
(Sites, components, Java/Sling, dialogs, HTL) doing **general upskilling** on
Edge Delivery Services — no fixed project or deadline.

## Decision
- Set the mission (see `MISSION.md`): fluency in what differs most from classic AEM.
- Teach **by contrast** — always frame EDS against the classic-AEM concept the
  learner already owns.
- Zone of proximal development for lesson 1: the doc→DOM→`decorate()` pipeline.
  This is the single biggest conceptual shift and everything else depends on it.

## What was taught
- **Lesson 0001** — "From a Doc Table to a Decorated Block": the 4-stage pipeline,
  block-name-does-three-jobs convention, block options, and where `decorate()` runs.

## Not yet assessed
- Learner has not yet done the quizzes or hands-on work. No evidence of retention.
- Practical setup (`aem up`, boilerplate, Sidekick) untouched — reserved for lesson 2.

## Next candidates
1. Stand up the boilerplate + run locally (`aem up`) — turn knowledge into a skill.
2. Sections vs. blocks vs. default content (deeper authoring model).
3. Content sources & the preview/publish model (Sidekick, `.aem.page` vs `.aem.live`).
