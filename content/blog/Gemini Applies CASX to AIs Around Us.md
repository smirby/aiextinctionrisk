---
title: "Gemini Applies CASX to AIs Around Us"
date: 2026-04-04
categories: ["CASX research"]
draft: true
---

# Gemini Applies CASX to AIs Around Us

I asked Gemini, Google's AI tool, to take the CASX elements (Capability, Autonomy, Scale, and Access) and create an operational definition for each of them that would allow us to apply them to products, product announcements, and related material. The purpose was to provide context and examples for the categories described in the book.

Based on the 2026 research landscape and the **CASX** framework, here are the criteria for each level and representative examples. Note that Gemini was using its built-in weights and data, so the "2026" date on this is more like mid-2025, when the model was frozen. It should be straightforward to re-do this table with web search enabled and get more up-to-date examples. I kept this version as a "baseline" that we can run a comparison on, perhaps every six months or so.

------

## **C: Capability**

*The demonstrable ability to solve novel problems across diverse domains without specific training.*

| **Rank** | **Operational Definition**                                   | **Benchmark Examples (2026)**           |
| -------- | ------------------------------------------------------------ | --------------------------------------- |
| ⭐        | **Rule-Follower:** Solves routine tasks with clear instructions; fails on ambiguity. | Basic GPT-3.5, RPA bots.                |
| ⭐⭐       | **Specialist:** Strong in one domain (e.g., coding) but struggles with cross-domain logic. | GitHub Copilot (Basic), Med-PaLM 2.     |
| ⭐⭐⭐      | **Generalist:** Solves undergraduate-level problems across most text-based fields. | GPT-4o, Claude 3.5 Sonnet.              |
| ⭐⭐⭐⭐     | **Expert-Level:** Solves "frontier" problems (Ph.D. level science/math) using internal reasoning. | Gemini 2.5 Pro, Llama 4.                |
| ⭐⭐⭐⭐⭐    | **Super-Reasoning:** Synthesizes new knowledge; solves problems humans haven't solved yet. | **OpenAI o3-High**, DeepSeek-R1 (Full). |

------

## **A: Autonomy**

*The degree to which a system initiates and pursues multi-step plans without human-in-the-loop (HITL).*



| **Rank** | **Operational Definition**                                   | **Behavior**                                   |
| -------- | ------------------------------------------------------------ | ---------------------------------------------- |
| ⭐        | **Tool:** Executes a single command and stops. Requires "Next Step" prompts. | Standard Chatbots.                             |
| ⭐⭐       | **Assistant:** Completes 2–3 related sub-tasks but asks for confirmation before "doing." | Microsoft Copilot (Standard).                  |
| ⭐⭐⭐      | **Conditional Agent:** Executes 5–10 steps; stops only for critical errors or ambiguity. | GPT-5.2 (Basic Agent mode).                    |
| ⭐⭐⭐⭐     | **High Autonomy:** Operates for 1+ hours; self-corrects and loops until the goal is met. | **Claude 4.5**, SWE-agent.                     |
| ⭐⭐⭐⭐⭐    | **Full Autonomy:** "Set and Forget." Defines its own sub-goals and executes indefinitely. | **The AI Scientist**, Palantir (Unrestricted). |

------

## **S: Scale**

*The breadth of deployment (users/instances) and the computational resources utilized.*

| **Rank** | **Operational Definition**                                   | **Deployment Reach**                  |
| -------- | ------------------------------------------------------------ | ------------------------------------- |
| ⭐        | **Local/Siloed:** Runs on a single private server or device; no wider reach. | Research prototypes, Local Ollama.    |
| ⭐⭐       | **Niche/Enterprise:** Thousands of users; restricted to specific corporate or research orgs. | Palantir AIP, Specialized Medical AI. |
| ⭐⭐⭐      | **Mass Market:** Millions of users; requires significant Tier-1 data center support. | Claude (Anthropic), Gemini (Google).  |
| ⭐⭐⭐⭐     | **Ubiquitous:** Hundreds of millions of users; integrated into OS or global search. | **OpenAI (via Apple/Microsoft)**.     |
| ⭐⭐⭐⭐⭐    | **Infinite Scale:** Open-weight or ultra-efficient; millions of *parallel*instances globally. | **DeepSeek-V3**, Meta Llama 4.        |

------

## **X: Access**

*Connectivity to external infrastructure, financial systems, or physical robotic actuators.*

| **Rank** | **Operational Definition**                                   | **Connection Type**                            |
| -------- | ------------------------------------------------------------ | ---------------------------------------------- |
| ⭐        | **Sandboxed:** No external access; can only generate text/images. | On-device models (Air-gapped).                 |
| ⭐⭐       | **Read-Only:** Can search the web or read files, but cannot *change*the world. | Perplexity, basic ChatGPT Search.              |
| ⭐⭐⭐      | **API-Connected:** Can write to specific apps (email, calendar, Slack) via APIs. | Zapier-enabled agents.                         |
| ⭐⭐⭐⭐     | **Systemic/Financial:** Direct access to banking (swiping cards), databases, or OS guts. | **Claude (Computer Use)**, Finance-tuned GPTs. |
| ⭐⭐⭐⭐⭐    | **Physical/Kinetic:** Controls robotic actuators, drones, or critical infrastructure (power grid). | **Physical AI (HPE/Huawei)**, Tesla FSD.       |

------

### **How to defend a "High Rank" (Example)**

> *"I ranked **Claude 4.5** as a 5-star for **Access** because it uses 'Computer Use' technology. Unlike other models that need an API to talk to your bank, Claude can literally 'see' the banking website on a screen and 'click' the buttons like a human. It bypasses the need for permission from the software developer, giving it universal access to any digital interface."*

