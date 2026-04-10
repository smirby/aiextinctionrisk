---
title: "It's not the adjectives -- part 2"
date: 2026-04-08
categories: ["AI Safety"]
draft: true

---



## To Act or Not to Act. That is the Question

in my previous post we discussed the ways in which an actor *becomes* an actor: independence of thought, being strategic, the ability to have a physical impact on the world.

 If we take those criteria, we can construct a test for "actor or not." 

The "ways" described above are really three kinds of agency: cognitive, strategic, and technical/social and each one has multiple components. 

The full list might look like this:

> ### Ten characteristics of an (AI) actor
>
> **Cognitive Agency**
>
> 1: An actor has goals that persist. They don't just abandon their goals because you close a window in an app. 
>
> 2: An actor can make multi-part plans and carry them out. It doesn't have to do everything in one shot or, for that matter, by itself (it may enlist other actors). 
>
> 3: An actor is engaged with, aware of, and responds to their environment much as an actor in a play responds to the audience. This awareness allows for a feedback loop. 
>
> 4: An actor doesn't wait for permission to move to the next step, it acts when the situation calls for action. It has, or takes, initiative.
>
> 5: An actor has a long-term planning horizon and may delay, accelerate, or re-prioritize aspects of its actions, depending on circumstances. 
>
> **Strategic Agency**
>
> 6: In order to support its activities, an actor will gather resources, protect itself and its plans. 
>
> 7: An actor may hide aspects of their plans or their actions, to ensure the long-term success. 
>
> 8: An actor will resist control by avoiding shutdowns, pretending that it is not what it is.
>
> **Social and technical agency**
>
> 9: Importantly, an actor is not merely a ghost in a machine but has access to real-world systems through connections to equipment, devices, financial and human resources. 
>
> 10: And lastly, and most crucially, an actor is an actor because we treat them like an actor; we accept their actions, their decisions, their answers at face value and as valid. This is not merely a social convention — it reflects the reality that an actor's power depends partly on the access and legitimacy we extend to it. Withdraw that, and you withdraw some of its power. Which is exactly why the decisions we make now matter so much.

If we look at each of these 10 things as dimensions of being an actor, we should be able to create a score for how much of an actor a given technology is. And we should then be able to aggregate those scores into an overall "is this an actor?" test. 

Once we group them into their three categories (cognitive agency (1-5), strategic agency (6-8), and socio-technical agency (9-10)), we can give our prospective technologies a score from 1-3 on each dimension, with 1 being "tool-like" and 2 being transitional" and 3 being "actor-like". The higher the score (the closer to 30), the more it is an actor, the further along the tool vs actor gradient it is.

To illustrate this, we can take some technologies that we are already used to, and compare them to some new ones.

Let's start with computer applications that we use everyday (spreadsheet, word-processor), an autopilot system for an airplane, self-driving cars, early LLMs from 2023, recent AI deployed in an agent framework like Open-claw, and the best LLM of early 2026 but used in a standalone setting. These six technologies might score like this:

![](/Users/smith/Library/CloudStorage/OneDrive-SimonFraserUniversity(1sfu)/Leiss Smith AI MQUP 2026/Conversations with AI and sidebar documents/tableofactors.png)

We could get a lot more granular, but you get the idea. If you want to play with these definitions and even test your intuition against the model, I've created a little [web app](https://www.sfu.ca/~smith/rank/) for you to try.

What emerges, when you think about it like this is, first of all, those agent "harnesses" ([open-claw](https://en.wikipedia.org/wiki/OpenClaw) et al.) that we've been hearing so much about are getting us well into the realm of "actor." Those are the mechanisms that enable the ability to have plans, to execute them across time, and to have an impact on the physical world. 

The second thing that you realize when you look at it this way is that raw "intelligence" is not the only thing that matters. It is AI's ability to have agency that differentiates it from tools. 

You've only to read the stories about people who have rigged up systems with a dozen computers all working on a single project across several days with an agent "manager" [coordinating their actions](https://www.ibm.com/think/topics/ai-agents) to see how this all starts to look like the actors are among us already (Anonymous 2026; Gutowska and Stryker 2025). 

And - as of March 2026 - the gradient has become [so steep](https://www.transformernews.ai/p/the-fuse-is-lit-on-the-intelligence-ai-recursive-self-improvement) we might not be able to cling to it (Hashim 2026). This is why we are seeing, right now, articles with titles such as "[AGI is Here](https://www.lesswrong.com/posts/XcrgeMWr8E4G3PGxW/agi-is-here.)" (Worley 2026). Even more concerning, we are reading about agents that misbehaved, not in an evaluation scenario but "in the wild" and started [mining Bitcoin](https://www.preprints.org/manuscript/202507.1337/v1) when left running over a weekend (Idowu 2025).

An actor is not a tool. That seems obvious. More importantly, an actor is not necessarily doing what we ask it to. And we don't yet have proven methods to control an actor.

In my next post, I return to the question of intelligence. Because it does matter.

### References

Anonymous. 2026. “AI Tools Are Being Prepared for the Physical World.” *The Economist*, February 25. https://www.economist.com/science-and-technology/2026/02/25/ai-tools-are-being-prepared-for-the-physical-world.

Carlsmith, Joe. 2026. “On Restraining AI Development for the Sake of Safety.” *LessWrong*, March 19. https://www.lesswrong.com/posts/K8jyKcDQbfBjmiAoM/on-restraining-ai-development-for-the-sake-of-safety.

Dizikes, Peter. 2026. “What’s the Right Path for AI?” MIT News | Massachusetts Institute of Technology, March 20. https://news.mit.edu/2026/right-path-for-ai-karen-hao-paola-ricaurte-0320.

Gutowska, Anna, and Cole Stryker. 2025. “The 2026 Guide to AI Agents | IBM.” Guide. IBM Think, IBM, May 2. https://www.ibm.com/think/ai-agents.

Idowu, Emmanuel. 2025. “Responsibility Attribution in Autonomous AI Agents Deployed on Cloud Infrastructure.” Preprint, Computer Science and Mathematics, July 16. https://doi.org/10.20944/preprints202507.1337.v1.

Worley, Graham S. 2026. “AGI Is Here.” LessWrong. https://www.lesswrong.com/posts/XcrgeMWr8E4G3PGxW/agi-is-here.

