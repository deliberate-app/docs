---
slug: /
title: Introduction
sidebar_label: Introduction
---

**deliberate** is an on-chain voting module for deliberative decision-making that can be integrated into DApps and DAOs.

Decision-making based on arguments is unpopular because of the bureaucratic overhead connected to it.
The centralized platform [kialo.com](https://www.kialo.com/) overcame this issue and keeps debates rational,
presents them in a structured and transparent way, and, thus, allows for fast on-boarding of participants.
However, a centralized platform cannot be used as a governance tool because it lacks resilience against manipulation and Sybil attacks.

**deliberate** fills this gap on the Ethereum blockchain:

- **Argument trees.** A debate is a tree of pro and con arguments beneath a thesis — the statement being decided.
- **Sybil resistance.** Only personhood-verified accounts can join a debate — the join gate is a pluggable identity registry (Proof of Humanity is one provider) — and every participant receives the same budget of [vote tokens](tokens).
- **Rating markets.** Participants rate arguments by staking vote tokens on each argument's pro or con side, so an argument's rating reflects the crowd's priced-in judgement rather than a raw show of hands — and mispriced arguments are profitable to correct.
- **On-chain tallying.** Anyone can trigger the tally, which aggregates argument impact from the leaves up to the thesis and yields the debate's [outcome](tallying) — transparent and verifiable by everyone.
- **Bounties.** The creator can attach an ERC-20 [bounty](bounty) that pays the debate's net winners — the participants who ended with more vote tokens than they started with.

A debate passes through the [phases](phases) **Editing**, where the tree is built, and **Rating**, where the rating markets operate; the tally then finishes the debate and fixes its outcome.
