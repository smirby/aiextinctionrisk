---
title: "Three Things Thursday"
date: 2026-07-30
categories: ["AI Safety"]
draft: false
---

Having a book finished and waiting for production (copy editing, layout and design, index) should a moment to relax and take a breather, right? Not if you're writing about artificial intelligence. Just in the last few days three things have come across my desk (via the internet, of course) that have implications for our book. Luckily, they are supportive, rather than contradictory.

## Prompt injection

The first one is prompt injection. When Bill and I first started working on the book, way back in late 2025, I remember reading some of the concerning work coming out about how it was possible to sneak malicious prompts into a chatbot, prompts it was supposed to reject because they were about bioweapons or self-harm, by encoding the prompt then asking the AI to decode it and execute it.

It turns out that while that does work, and it is a concern to this day, there is a simpler solution and almost every large language model is susceptible to this: you can exploit its built-in reliance on roles. Every LLM has to distinguish from the <user> and the <system> and even itself, the <assistant>. It does this in order to make sense of the undifferentiated wall of text that appears within its context window in the form of tokens. Sneaky hackers have figured out that you can simply prepend your request by tags that indicated authority to ask things. In a recent paper, Ye et al., tell us that "all an attacker needs to do to hack an LLM is write text that spoofs a certain role. And because roles are a fundamental part of how LLMs work, no amount of training will fully solve the problem” (Ye et al. 2026).

## Continual learning

The second thing that appeared this week: continual learning. Early on in the writing process, Bill expressed the concern that the AIs (LLMs) could get smarter and smarter, learning from their conversations with humans. I was just learning about AI myself, and had come to understand that once a large language model is trained it is effectively "frozen" and doesn't really evolve after that. 

We did discover that "continual learning" was an area of research (UK AISI 2026) but it foundered on a problem of "catastrophic forgetting." It seemed like if you started tinkering with the weights (the outcome of the gradient descent and reinforcement learning), you risked upending the whole applecart. Some very preliminary research by some Google Research interns pointed in the direction of how progress might be made, but it was very early days.

That might no longer be the case and not because of some great breakthrough but by the gradual accrection of capabilities as models gain in context window, as well as agent harnesses. As the authors of a new study state, 

> Large Language Models (LLMs) [105, 72] alter their response based on previous turns of a persistent session [17] and increasingly benefit from massive context windows that allow them to incorporate a larger number of turns [96]. Moreover, production LLMs [105, 72] are wrapped in “systems” that equip them with “memory” persisting across sessions [78, 5] and can write and retrieve external stores [4, 60]. (Pacchiardi et al. 2026)

The systems they refer to are the growing number of agents, who provide both memory and instructions, especially the "looping" instructions, that keep a model on task for extended periods of time.

## China's focus

When we surveyed the world for AI regulations (Chapter 10 in the book), we observed the China's approach was somewhat different than the others. With some exceptions - such as careful attention to whether the Chinese Communist Party is presented in the best possible light in any AI chats - the authorities there have promoted open weight models and open source solutions while also targeting real-life, productivity-oriented deployments. Things that can be put into use now, not sometime in the future, and with less of a focus on the "frontier." 

This diffference has been noticed in several places and we cited several reports as well as primary documents (the new Five Year Plan, for example) to support this. In today's Globe and Mail, Jacob Cooke shares a similar analysis, stating that “Chinese firms are not necessarily focused on creating AGI, but instead on developing capable models that can be diffused across the economy through applications” (Cooke 2026). 

-----

Cooke, Jacob. 2026. “Opinion: China Is AI-Maxxing, and It Has a Lot to Teach Us.” *The Globe and Mail*, July 30. https://www.theglobeandmail.com/business/commentary/article-china-has-a-lot-to-teach-us-about-ai/.

Google Research. 2025. “Introducing Nested Learning: A New ML Paradigm for Continual Learning.” *Google Research Blog*. https://research.google/blog/introducing-nested-learning-a-new-ml-paradigm-for-continual-learning/.

Pacchiardi, Lorenzo, Patricia Paskov, Seán Ó hÉigeartaigh, et al. 2026. “Continual Learning Requires Evaluating Trajectories.” Preprint, May 19. https://doi.org/10.5281/ZENODO.20344324.

Ye, Charles, Jasmine Cui, and Dylan Hadfield-Menell. 2026. “Prompt Injection as Role Confusion.” *International Conference on Machine Learning (ICML)*. https://arxiv.org/abs/2603.12277.

