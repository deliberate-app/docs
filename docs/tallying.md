---
slug: tallying
title: Tallying & Outcome
sidebar_label: Tallying & Outcome
---

After the [Rating phase](rating) has ended, anyone can trigger the tally. It aggregates the final state of all [rating markets](rating-markets) into a single decision on the thesis, and it is the one transaction that finishes a debate.

## From the leaves to the thesis

Tallying starts at the leaves of the tree and moves upward; a parent can only be tallied once all of its children have been. Each argument $j$ carries a **rating** that blends its own market with its sub-debate, weighted by the stake behind each:

$$
B_j = \frac{v_j \, a_j \;+\; V_j \, D_j}{v_j + V_j}
\qquad
D_j = \frac{\sum_{k \in \text{children}(j)} \sigma_k \, B_k \, W_k}{\sum_{k \in \text{children}(j)} W_k}
$$

built from three ingredients:

- **Own approval $a_j$** — the argument's standing in its own market: the pro-share price derived from the final balance of its pro and con reserves. It is weighted by $v_j$, the vote tokens staked on that market.
- **The sub-debate's correction $D_j$** — the already-tallied ratings of the child arguments, each signed by its polarity ($\sigma_k = -1$ for an attacking child) and weighted by $W_k = v_k + V_k$, its **whole subtree's stake**. It is weighted by $V_j = \sum_k W_k$, the stake of everything beneath.
- **Stake decides the mix** — a childless argument keeps its full own approval; a heavily debated one is corrected in proportion to the stake that debate attracted. At its parent, an argument counts with its whole subtree's stake among its siblings — one token, one voice, at every level of the tree.

## The outcome

Ratings fold upward until the thesis — which has no market of its own — has absorbed the stake-weighted judgement of the entire tree. The debate **confirms** the thesis if that aggregate is positive, and **objects** otherwise. Once finished, shares [redeem](rating-markets), authors claim their fees, and [bounty](bounty) claims open.

## A signal, not an oracle

The outcome is a **credible deliberation signal**, not a manipulation-proof oracle: an egalitarian game in which every verified human holds the same non-purchasable budget cannot out-secure an attacker whose external budget exceeds the internal stakes. Automation that consumes the outcome (e.g. a DAO spending funds on a confirmed thesis) must bring its own guardrails — bind to the exact thesis content, require a participation quorum and margin, timelock past the claim window, and keep a veto path.
