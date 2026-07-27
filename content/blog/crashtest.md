---
title: "Crash testing at OpenAI"
date: 2026-07-22
categories: ["AI Safety"]
draft: false
---

*(Note: this post is being regularly updated as new information arrives.)*

Yesterday, we learned that OpenAI had some "accidents" with their latest model ("Sol") as well as an unreleased model. In one case, it [broke out of it's sandbox and hacked into another company](https://www.transformernews.ai/p/openai-hugging-face-hack-stark-warning) (@HuggingFace), and in another case it broke out of its sandbox, seemingly to report on its success in a coding test. 

In both incidents, I couldn't help thinking: is this akin to crash testing new cars by sending them out onto the highway and having them crash into other people's cars?

Or, perhaps, hiring an intern and setting them a task that resulted in them breaking into another company? 

Wouldn't either of those scenarios unleash a firestorm of litigation?

Today, I read an article by Yair Halberstadt, who also wondered about the liabilities incurred by AI companies when they create a model. His suggestion is [no fault liability](https://www.lesswrong.com/posts/Kj3YpqzhFySCjYcWi/we-should-push-for-no-fault-liability-for-actions-taken-by):

> This should apply not just to civil liability, but to criminal liability, through the mechanism of [Corporate Criminal Liability](https://www.congress.gov/crs-product/R43293). This mechanism allows corporations to be criminally liable when an employee performs an act on their behalf (even if the employee wasn't explicitly instructed to do so).

I think he's onto something, and in the notoriously litigious United States of America it will probably not take long for the law to catch up to these situations, which strike me as terribly risky and prone to claims of negligence. Others [wonder about liability](https://open.substack.com/pub/transformernews/p/openai-hack-hugging-face-responsibility-strict-liability-rules?utm_campaign=post-expanded-share&utm_medium=web), too. See also [this paper](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6588958) (Weil 2026). 

Later on the 22nd, Mowshowitz posted about the HuggingFace incident and included this sentence:

> If we don’t want to watch this get worse over time, **and the models keep improving their capabilities** [emphasis added], better infrastructure and safeguards will not be enough.

I am startled by the phrase "and the models keep improving their capabilities." Is this just shorthand, an unthinking delegation of agency to AI models that are increasingly created with the help of other AI models? We've seen this sort of thing before ("computers get faster"), and it masks the massive effort and investment that goes into technological innovation and also - slyly pushes the responsibility onto the technology, and away from the people and companies responsible.

I'm a regular reader of Mr Mowshowitz's posts and enjoy his "take" on things. But this - possible - slip seems like a dangerous one. Especially in this context, as the misalignment documented here could have gone far worse (and, for all we know, did). This cannot be written off as "the models are improving their capabilities." No. The people at OpenAI improved their capabilities, and did so carelessly.

Updates:

OpenAI wrote a [long report](https://openai.com/index/safety-alignment-long-horizon-models/) about the incidents. and you can also read Zvi Mowshowitz's  [thoughts](https://substack.com/home/post/p-207838695) on the situation. As did [Scott Alexander](https://www.astralcodexten.com/p/the-hugging-face-incident). See also Zvi's [later thoughts](https://thezvi.substack.com/p/more-on-an-internal-openai-model), noting OpenAI's "incredible negligence" on July 26.  

Peter Wildeford provided a [good summary](https://blog.peterwildeford.com/p/openais-rogue-model-attack-is-just) (July 27) of what happened and what we should do about it. MIRI has a Substack, called [StopWatch](https://aistop.watch), that is tracking the (growing) move to stop/pause AI frontier development, and, according to Scott Alexander's tracking of tweets, at least two of the frontier CEOs are looking for (government?) leadership to require a stop/pause and provide the coordination/enforcement that that would entail.



-----

Weil, Gabriel. 2026. “Abnormally Dangerous Algorithms: The Case for Strict Liability at the AI Frontier.” SSRN Scholarly Paper No. 6588958. Social Science Research Network, April 16. https://doi.org/10.2139/ssrn.6588958.
