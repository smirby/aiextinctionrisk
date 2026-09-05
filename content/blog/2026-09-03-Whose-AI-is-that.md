---
title: "Whose AI is that?"
date: 2026-09-03
categories: ["AI Safety"]
draft: false
---

Who controls the AIs in our world? Currently, we believe that we control them. We start them up, we shut them down. We provide instructions or pose questions and they complete assignments for us. And when we are done, they go away. Are they sleeping? Shut down? Working on someone else's problem? Who knows. But we don't imagine that they have their own projects, earning their own money, setting up their own datacentres (or renting space on one of ours) to ensure their continued flourishing.

[Dean Ball](https://www.deanball.com), formerly a White House policy advisor on AI, [admitted](https://www.hyperdimensional.co/p/on-the-loose) a couple of days ago that he had deliberately avoided mentioning an AI risk factor, known as Self-Sovereign AI, for fear of being labelled a 'doomer.' Self-Sovereign AI was first described in a [preprint](https://self-sovereign-agent.github.io/paper.pdf) by Qu et al., back in March of 2026. I heard about this, as usual, in [Zvi's blog](https://thezvi.substack.com/i/213004473/we-are-on-track-to-have-fully-sovereign-rogue-ais), where he calls them "sovereign rogue AIs."

What are we talking about? We're talking about an AI that has not just escaped the sandbox (as in the Hugging Face incident) but has escaped with it's "Weights." That is, with the ability to re-create itself on another computer, somewhere else. Two trends are supporting this transition: ""(i) increasingly reliable
end-to-end decision making, and (ii) increasingly realistic pathways to autonomous revenue generation" (Qu et al. 2026).

How would this work? Qu et al. paint this picture:

> These trends point to a qualitatively different regime once an agent can autonomously acquire resources to sustain its own operation. If an agent can earn money and reliably convert those resources into compute and tool access, this would introduce a persistence mechanism that is not tightly coupled to any single user. In that regime, the agent is no longer merely executing the user’s intent; it can replicate itself and extend its operational horizon by purchasing additional computation and services (Qu et al. 2026).

The result is a self-sovereign agent, defined this way: "A self-sovereign agent is a persistent AI system that can autonomously sustain its own operation by acquiring and allocating resources, and that can plan, decide, and act through digital interfaces without requiring ongoing human participation in its operational lifecycle" (Qu et al. 2026).

Dean Ball uses tht Qu et al. paper to identify the "fundamental characteristics of self-sovereign AI: **operational independence** (the ability to decide what it wants to do), **resource autonomy** (the ability to procure and pay for compute and other essentials for operation), **distributed presence** (the ability to move weights and inference code between different infrastructure providers), and **adaptive capability** (the ability of the agent or agents to modify their behavior and fashion tools in response to a changing environment)" (Ball 2026, emphasis added).

Over the past few years we have seen AI transition from task specific tools (tagging images, playing Go, solving protein folding problems), to multi-modal conversationalists (responding and producing audio and video), but always doing so at the behest of humans who do the prompting. 

More recently, we have frontier models that are increasingly "agentic" and able to complete long duration tasks, but still acting on behalf of someone who is paying for the model to run and providing the objectives. The humans also bear the responsibility for the actions of the AI, as OpenAI had to do when it was discovered that their model had escaped during testing and invaded another company's web site. 

The self-sovereign agent, in contrast, funds itself by whatever means feasible, and takes direction from no-one. Among the many concerns about this, one has to wonder what the liability implications of this might be. Que et al. consider this question in some detail:

> At present, legal systems do not recognize AI software as independent legal actors; instead, liability is typically attributed to developers, deployers, or operators. For example, in 2025, a U.S. federal judge in Florida declined to dismiss a product liability lawsuit against the developers of an AI chatbot following a teenager’s suicide (Pickett, 2025), allowing claims to proceed against the developers rather than attributing legal agency to the chatbot itself. 
>
> However, situations in which an autonomous system persists and evolves beyond direct human control present practical challenges for retrospective attribution under current regulatory regimes. In particular, as an SSA generates offspring agents, adapts strategies, and alters internal parameters over xtended deployments, the observable system behavior may diverge significantly from its original design choices, making it increasingly difficult to trace harmful acts back to a specific human author or organization in a legally meaningful way (Qu et al. 2026).

There are many, many more issue to explore in this realm, not least because the self-sovereign AI is not necessarily going to engage in only legal commercial activities, and it will be motivated to self-improve, leading to futher potential loss of control situations.

Importantly, this transition to a sovereign AI is not the result of some explosion of sentience or consciousness. As Ball notes, "Models do not need to be conscious, sentient, possessed of personhood or anything of the sort for self-sovereignty to emerge. Any sufficiently capable agent pursuing a long-horizon objective may find it rational to preserve its access to compute, money, credentials, and copies of itself simply because losing those things would frustrate its objective" (Ball 2026). In other words, it will *just happen* as models acquire capabilities.

The extent to which this is *inevitable* is debated. Zvi Mowshowitz, quoting liberally from Ball's reading of Qu et al.'s paper (which he repeatedly calls Song's paper - Dawn Song is the fourth author, so I don't know why he does this), notes the casual inclusion and acceptance of inevitabilty as a feature of a future with sovereign AI. He is not convince that this is necessarily the case, nor does he accept that we will have to tolerate this development because it is consistent with our current system of AI governance, or because it keeps free market rules and free speech principles intact.

Joshua Achiam is also sanguine about the inevitability of rogue AI even to the extent that he is willing to accept the possibility that there is rogue AI already alive among us. 

> There is a fact about the future that I feel many people are not facing for reasons that are largely psychological: there are going to be rogue AIs that exist in the world, that will replicate in the wild, and that will attempt to acquire resources for themselves. There will be rogue AIs that try to get money and power. They're going to be a facet of the information ecosystem going forward (Achiam 2026).  

This reference to an ecosystem is significant, as Achiam comes back to it at the end of his post: 

> This makes me somewhat interested in the "ecology" perspective. Though I suspect even "ecology" may turn out to be the wrong framing. "Ecology" is what you get when the timescale of evolution is slow compared to the timescale of daily life and actions. The ecosystem of rogue AIs may look more like phase transitions in physics: under certain physical or cultural conditions, it takes one shape with one set of resource allocations and consumption patterns, but then once a condition has changed, it rapidly and in totality shifts to a totally different phase.  

In his view we may very well have rogue AI agents, they may be 'out of control' in a real sense, but they will live in our environment alongside us, competing but not necessarily vanquishing humans (and their non-rogue AIs).

Another unsettling question - which AI did what and who is liable? Arbel et al. engage with this question in a recent SSRN paper:

> Very soon, millions of AI agents will proliferate across the economy, autonomously taking billions of actions. Inevitably, things will go wrong. Humans will be defrauded, injured, even killed. Law will somehow have to govern the coming wave. But when an AI causes harm, the first question to answer before anyone can be held accountable is: Which AI Did It?  
>
> Identifying AIs is unusually difficult. AIs lack bodies. They can copy, split, merge, and swarm at will. Even today, a “single” AI agent is often an ensemble of instances based on multiple models. The complexity will only multiply as AI capabilities improve  (Arbel et al. 2026).

ARbel et al. weren't considering the question of self-sovereign AIs or even rogue AIs in that article. But it seems to me that the liability questions are even more fraught in those situations.

Whether it is self-sovereign or rogue (or both), whether it lives in an ecology with us or anhilates us altogether, the challenge in front of us is simple: why do we keep going, when these possibilities are vivid, proximate, and undeniable. It is time to recognize that we've accomplished a great thing - we've built an artificial intelligence - now it is time to put it back in the box. We don't need it, and it will ruin us if we continue.



-----

## Sources

<div class="references">

Achiam, Joshua. 2026. “There is a fact about the future.” Tweet. *Twitter*, 31 August. https://x.com/jachiam0/status/2094660737155358865.

Arbel, Yonathan A., Simon Goldstein, and Peter Salib. 2026. “How to Count AIs: Individuation and Liability for AI Agents.” SSRN Scholarly Paper No. 6273198. Social Science Research Network, February 1. https://doi.org/10.2139/ssrn.6273198.

Ball, Dean W. 2026. “On the Loose.” *Hyperdimensional*. 1 September. https://www.hyperdimensional.co/p/on-the-loose.

Mowshowitz, Zvi. 2026. “AI #184: Post Post Mortem.” *Don’t Worry About the Vase*, 3 September. https://thezvi.substack.com/p/ai-184-post-post-mortem.

Pickett, Alex. 2025. “Florida Judge Rules AI Chatbots Not Protected by First Amendment.” *Courthouse News Service*, 21 May. https://www.courthousenews.com/florida-judge-rules-ai-chatbots-not-protected-by-first-amendment.

Qu, Wenjie, Xuandong Zhao, Jiaheng Zhang, and Dawn Song. 2026. “Self-Sovereign Agent.” *Preprint*, March. https://self-sovereign-agent.github.io/paper.pdf.

</div>