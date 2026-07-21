---
slug: tallying
title: Tallying & Outcome
sidebar_label: Tallying & Outcome
---

After the [Rating phase](rating) has ended, anyone can trigger the tally. It aggregates the final state of all [rating markets](rating-markets) into a single decision on the thesis, and it is the one transaction that finishes a debate.

## From the leaves to the thesis

Tallying starts at the leaves of the tree and moves upward; a parent can only be tallied once all of its children have been. Each argument $j$ contributes an **impact** to its parent:

$$
I_{j} = \sigma_j \, w_j \left( \tfrac{1}{2}\, a_j + \tfrac{1}{2} \sum_{k \in \text{children}(j)} I_k \right)
$$

built from three ingredients:

- **Own approval $a_j$** — the argument's standing in its own market: the pro-share price derived from the final balance of its pro and con reserves.
- **Children's impact** — the already-tallied impacts of its child arguments. An argument's own approval and its subtree's judgement are mixed in equal parts.
- **Weight and sign** — the result is scaled by $w_j$, the argument's share of the vote tokens staked across it and its siblings, and negated by $\sigma_j = -1$ if the argument attacks (con) rather than supports (pro) its parent.

## The outcome

Impacts accumulate upward until the thesis has absorbed the impact of the entire tree. The debate **confirms** the thesis if that accumulated impact is positive, and **objects** otherwise. Once finished, shares [redeem](rating-markets), authors claim their fees, and [bounty](bounty) claims open.

## A signal, not an oracle

The outcome is a **credible deliberation signal**, not a manipulation-proof oracle: an egalitarian game in which every verified human holds the same non-purchasable budget cannot out-secure an attacker whose external budget exceeds the internal stakes. Automation that consumes the outcome (e.g. a DAO spending funds on a confirmed thesis) must bring its own guardrails — bind to the exact thesis content, require a participation quorum and margin, timelock past the claim window, and keep a veto path.
