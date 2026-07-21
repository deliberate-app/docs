---
slug: stakeholders
title: Stakeholders
sidebar_label: Stakeholders
---

Three parties interact with a debate.

## 🧝 Creator

The **creator** opens the debate: they write the thesis — the statement being decided — and choose the schedule's three durations (locking window, editing, rating). They may attach an ERC-20 [bounty](bounty) for the debate's net winners, and they sweep whatever of it goes unclaimed after the claim window. The thesis forms the root of the argument tree and is final from the start.

## 🙋 Participants

**Participants** are personhood-verified accounts (via the deployment's identity registry) that have joined the debate. Every participant receives the same budget of [vote tokens](tokens) and can do everything the debate offers:

- add, revise, and move their own draft arguments during the [Editing phase](editing),
- stake on [rating markets](rating-markets) during the [Rating phase](rating),
- redeem their shares and claim their authored arguments' fees after the debate ends, and
- claim their [bounty](bounty) share if they ended a net winner.

There is deliberately no distinction between "debaters" and "voters" — anyone who joins can both argue and rate.

## 📡 Outcome consumers

**Consumers** are the contracts and organisations that act on a finished debate's [outcome](tallying) — a DAO spending funds on a confirmed thesis, a bot executing a decision. The outcome is a deliberation signal, not a manipulation-proof oracle, so consumers bring their own guardrails: bind to the exact thesis content, require a quorum and margin, timelock past the claim window, keep a veto path.
