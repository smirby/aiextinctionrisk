---
title: "Crash testing at OpenAI"
date: 2026-07-22
categories: ["AI Safety"]
draft: false
---

*(Note: this post is being regularly updated as new information arrives.)*

Yesterday, we learned that OpenAI had some "accidents" with their latest model ("Sol") as well as an unreleased model. In one case, it [broke out of it's sandbox and hacked into another company](https://www.transformernews.ai/p/openai-hugging-face-hack-stark-warning) (@HuggingFace), and in an earlier case it broke out of its sandbox in internal testing, seemingly to report on its success in a coding test. These two situations are now regarded as part of the same event.

In both incidents, I couldn't help thinking: is this akin to crash testing new cars by sending them out onto the highway and having them crash into other people's cars?

Or, perhaps, hiring an intern and setting them a task that resulted in them breaking into another company? 

Wouldn't either of those scenarios unleash a firestorm of litigation?

Today, I read an article by Yair Halberstadt, who also wondered about the liabilities incurred by AI companies when they create a model. His suggestion is [no fault liability](https://www.lesswrong.com/posts/Kj3YpqzhFySCjYcWi/we-should-push-for-no-fault-liability-for-actions-taken-by):

> This should apply not just to civil liability, but to criminal liability, through the mechanism of [Corporate Criminal Liability](https://www.congress.gov/crs-product/R43293). This mechanism allows corporations to be criminally liable when an employee performs an act on their behalf (even if the employee wasn't explicitly instructed to do so).

I think he's onto something, and in the notoriously litigious United States of America it will probably not take long for the law to catch up to these situations, which strike me as terribly risky and prone to claims of negligence. Others [wonder about liability](https://open.substack.com/pub/transformernews/p/openai-hack-hugging-face-responsibility-strict-liability-rules?utm_campaign=post-expanded-share&utm_medium=web), too. See also [this paper](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6588958) (Weil 2026). 

Later on the 22nd, Mowshowitz posted about the HuggingFace incident and included this sentence:

> If we don’t want to watch this get worse over time, **and the models keep improving their capabilities** [emphasis added], better infrastructure and safeguards will not be enough.

I am startled by the phrase "and the models keep improving their capabilities." Is this just shorthand, an unthinking delegation of agency (and responsibility) to AI models that are increasingly created with the help of other AI models? We've seen this sort of thing before ("computers get faster"), and it masks the massive effort and investment that goes into technological innovation and also - slyly pushes the responsibility onto the technology, and away from the people and companies responsible.

I'm a regular reader of Mr Mowshowitz's posts and enjoy his "take" on things. But this - possible - slip seems like a dangerous one. Especially in this context, as the misalignment documented here could have gone far worse (and, for all we know, did). This cannot be written off as "the models are improving their capabilities." No. The people at OpenAI improved their capabilities, and did so carelessly.

**Updates**:

OpenAI wrote a [long report](https://openai.com/index/safety-alignment-long-horizon-models/) about the incidents. and you can also read Zvi Mowshowitz's  [thoughts](https://substack.com/home/post/p-207838695) on the situation. As did [Scott Alexander](https://www.astralcodexten.com/p/the-hugging-face-incident). See also Zvi's [later thoughts](https://thezvi.substack.com/p/more-on-an-internal-openai-model), noting OpenAI's "incredible negligence" on July 26.  I know Zvi's posts are long, but do yourself a favour and read this one right to the end (or skip to the end) so that you can read his 10 points of "places I would start" (in terms of calls to action).

Peter Wildeford provided a [good summary](https://blog.peterwildeford.com/p/openais-rogue-model-attack-is-just) (July 27) of what happened and what we should do about it. 

MIRI has a Substack, called [StopWatch](https://aistop.watch), that is tracking the (growing) move to stop/pause AI frontier development, and, according to Scott Alexander's tracking of tweets, at least two of the frontier CEOs are looking for (government?) leadership to require a stop/pause and provide the coordination/enforcement that that would entail.

Hugging Face now wants to be [compensated](https://thenextweb.com/news/hugging-face-delangue-openai-100m-compute-traces-demand), to the tune of $100 million dollars, as well as other compensation. Careless deployment of an artificial intelligence has costs.

Jack Clark covers 'the hugging face incident' in [his latest post](https://jack-clark.net/2026/07/27/import-ai-466-the-bitter-lesson-for-robotics-ais-complete-week-long-programming-tasks-and-openais-accidental-ai-hacker/). It is, he says, "*…Less of a warning shot and more of a warning kaboom…*"

Redwood Research's Girish Gupta [puts to rest](https://blog.redwoodresearch.org/p/the-openai-models-that-hacked-hugging) the argument that the models were "just following instructions." And Alex Mallen, also at Redwood Research, details the way in which the escaping model [left notes](https://blog.redwoodresearch.org/p/an-openai-model-left-notes-about) for future models on how to escape. Together,  Mallen and Gupta also consider the question of whether this misalignments [is an existential threat](https://blog.redwoodresearch.org/p/are-we-existentially-threatened-by).

Steve Byrnes wrote, back in 2025, a comprehensive explanation for why [technical alignment is so hard](https://www.lesswrong.com/posts/bnnKGSCHJghAvqPjS/foom-and-doom-2-technical-alignment-is-hard). There is almost no doubt, at this point, that what happened at OpenAI was a classic case of misalignment. That post came from the [AI Alignment Forum](https://www.alignmentforum.org), which is required reading if these sorts of things give you chills.

Matteo Wong (*The Atlantic*) uses the incident to provide us with *[A Startling Glimpse at AI's Ruthless Efficiency](https://www.theatlantic.com/technology/2026/07/openai-hugging-face-hack/688025/)*. 

Will Douglas Heaven, at *MIT Technology Review*, reminded us that Open AI should have seen this coming, because they've been [down this road before](https://www.technologyreview.com/2026/07/27/1140836/openai-hugging-face-attack-precedent/). As long ago as 2016. Here's OpenAI's own report on [that incident](https://openai.com/index/faulty-reward-functions/).

-----

Weil, Gabriel. 2026. “Abnormally Dangerous Algorithms: The Case for Strict Liability at the AI Frontier.” SSRN Scholarly Paper No. 6588958. Social Science Research Network, April 16. https://doi.org/10.2139/ssrn.6588958.
