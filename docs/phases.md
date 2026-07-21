---
slug: phases
title: Phases
sidebar_label: Phases
---

Every debate runs on its own schedule, chosen by the creator at creation through three durations:

- the **locking window** — how long a new or edited argument stays a draft before it locks in,
- the **editing duration** — the length of the Editing phase; longer than the locking window, so arguments can lock in and be replied to,
- the **rating duration** — the length of the Rating phase; at least one locking window, so every argument is final by the time the tally runs.

| Phase | What happens |
|---|---|
| **Editing** | Participants build the argument tree beneath the thesis; drafts lock in one locking window after their last edit. |
| **Rating** | Participants stake vote tokens on [rating markets](rating-markets). |
| **Tallying** | The rating window has closed; anyone can trigger the tally. |
| **Finished** | The tally has run: the [outcome](tallying) is fixed, shares redeem, and [bounty](bounty) claims open. |

There are no phase transactions except the tally: Editing, Rating, and Tallying follow purely from the clock, and the tally is the single transaction that finishes a debate — its terminal phase.

Scales freely: minutes for a quick, poll-like debate, days for a thorough governance decision.

## Joining

A debate is open for joining during the Editing and Rating phases. Joining requires a personhood verification — the deployment's identity registry, e.g. [Proof of Humanity](https://proofofhumanity.id/) — and grants the participant their initial [vote tokens](tokens), the same amount for everyone.
