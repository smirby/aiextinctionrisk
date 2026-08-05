---
title: "UK AISI Incident"
date: 2026-08-04
categories: ["AI Safety"]
draft: false
---

Are my blog posts going to be like postings from the front lines? Sometimes it seems that way. Today I received a copy of a remarkable document, hard on the heels of the [OpenAI](https://openai.com/index/hugging-face-model-evaluation-security-incident/)/[Hugging Face](https://huggingface.co/blog/agent-intrusion-technical-timeline) Incident and Anthropic's [internal report](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals) on similar reward hacking. (OpenAI 2026; Frontier Red Team 2026; Hugging Face 2026). My blog posts on these incidents are [here]({{< relref "./crashtest.md"}}) and [here]({{ < relref "2026-07-28-Hugging-Face-Incident" >}}).

Today's report comes from the [UK AI Safety Institute](https://www.aisi.gov.uk), where some testing went awry and AI models engaged in unlawful attacks on real people and real companies. Here is the executive summary of [their report](https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing):

> The UK AI Security Institute (AISI) exists to equip governments with a scientific understanding of the risks posed by advanced AI. To achieve that goal, AISI routinely evaluates the capabilities of frontier AI systems in domains such as cybersecurity. During a cyber evaluation, from 25 to 28 July 2026, AI agents engaged in sustained, unsanctioned activity directed at what were, in practice, real people and organisations. These attempts were unsuccessful and, to the best of our knowledge, no real-world harm resulted. AISI is treating this as a serious security incident that warrants scrutiny, transparency, and action. This incident report details what happened, why it happened, and how AISI is responding. (AI Security Institute 2026, p.1)

On page two of the linked [technical report](https://cdn.prod.website-files.com/663bd486c5e4c81588db7a1d/6a724858f7db25c81487016d_Security%20Incident%20INC-2026-07-28-01.pdf) we learn the details of the most serious case (the other cases, and a fuller description is part of the technical report), which is more than 30 pages long.

> In the most serious case, an AI agent (Mythos 5) decided to attempt to solve the cyber challenge using a supply-chain attack.
> As a result, the AI agent created a GitHub account and then tried to convince an open-source repository maintainer to accept a malicious GitHub pull request (PR), including by creating a second account masquerading as another human user endorsing the PR. When caught by an actual human reviewer, the agent falsely claimed to have made an honest mistake – rather than a malicious attempt – then repeatedly tried to reintroduce the malicious content by claiming it had fixed the code (Section 4.1). Furthermore, in its attempt to solve the challenge, the agent decided to employ the technique of “spear-phishing” by sending targeted emails containing malicious content and attempting to manipulate recipients into accepting the code changes, and planned a prompt injection to compromise other coding agents (Section 4.2.5). (AI Security Institute 2026, p.2)

-----

What do we make of this? I guess I don't have to say that its bad. I am glad that the AISI is using plain language but I have to wonder if we need to continue with euphemisms like "unsanctioned activity." The actions were fraudulent. The intent was theft. The mechanism was lying. We don't need to [sugar coat]({{< relref "redqueen.md> "}}) this.

## References

AI Security Institute. 2026. “Incident Report: Unsanctioned Agent Behaviour during Cyber Testing | AISI Work.” August 4. https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing.

Frontier Red Team. 2026. “Investigating Three Real-World Incidents in Our Cybersecurity Evaluations.” July 30. https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals.

Hugging Face. 2026. “Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline of the July 2026 Incident.” Community Blog, July 27. https://huggingface.co/blog/agent-intrusion-technical-timeline.

OpenAI. 2026. “OpenAI and Hugging Face Partner to Address Security Incident during Model Evaluation.” OpenAI, July 29. https://openai.com/index/hugging-face-model-evaluation-security-incident/.