---
slug: editing
title: Editing Phase
sidebar_label: Editing Phase
---

During the Editing phase, participants grow the argument tree beneath the thesis.

## Adding arguments

Any participant can add an argument below a **final** parent — the thesis itself, or any argument that has locked in. Each argument

- **supports (pro) or attacks (con) its parent** — this polarity determines the sign of its influence at [tallying](tallying),
- carries its **content** (the argument text lives off-chain; the tree stores a reference to it) — evidence and sources belong inside this content; there is no separate "fact" node type,
- stakes an author-chosen **deposit** in [vote tokens](tokens) (at least the minimum), which seeds the argument's [market](rating-markets) at the author's chosen initial approval and sets its starting weight.

## Locking window and finality

A newly added argument is a **draft** for one locking window: during this time, the author — and only the author — can revise its content or move it beneath a different parent (each of which re-arms the window). When the window elapses, the argument **locks in automatically** — no transaction, no poke — and becomes final: immutable, tradeable, and tallied.

This finality is what makes reacting safe: nobody has to fear that an argument they replied to changes under them, so child arguments can only be attached to final parents.
