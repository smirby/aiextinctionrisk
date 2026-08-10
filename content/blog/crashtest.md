---
title: "Crash testing at OpenAI"
date: 2026-07-22
categories: ["AI Safety"]
draft: false
---

*(Note: this post is being regularly updated as new information arrives. If you're trying to keep up, check the bottom of this post.)*

Yesterday, we learned that OpenAI had some "accidents" with their latest model ("Sol") as well as an unreleased model. In one case, it [broke out of it's sandbox and hacked into another company](https://www.transformernews.ai/p/openai-hugging-face-hack-stark-warning) (Hugging Face), and in an earlier case it broke out of its [sandbox](./2026-07-28-Emptying-the-sandbox/) in internal testing, seemingly to report on its success in a coding test. These two situations are now regarded as part of the same event.

In both incidents, I couldn't help thinking: is this akin to crash testing new cars by sending them out onto the highway and having them crash into other people's cars?

Or, perhaps, hiring an intern and setting them a task that resulted in them breaking into another company? 

### Liability questions

Wouldn't either of those scenarios unleash a firestorm of litigation?

Today, I read an article by Yair Halberstadt, who also wondered about the liabilities incurred by AI companies when they create a model. His suggestion is [no fault liability](https://www.lesswrong.com/posts/Kj3YpqzhFySCjYcWi/we-should-push-for-no-fault-liability-for-actions-taken-by):

> This should apply not just to civil liability, but to criminal liability, through the mechanism of [Corporate Criminal Liability](https://www.congress.gov/crs-product/R43293). This mechanism allows corporations to be criminally liable when an employee performs an act on their behalf (even if the employee wasn't explicitly instructed to do so).

I think he's onto something, and in the notoriously litigious United States of America it will probably not take long for the law to catch up to these situations, which strike me as terribly risky and prone to claims of negligence. Others [wonder about liability](https://open.substack.com/pub/transformernews/p/openai-hack-hugging-face-responsibility-strict-liability-rules?utm_campaign=post-expanded-share&utm_medium=web), too. See also [this paper](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6588958) (Weil 2026). Also, (Lam et al. 2026) on medical liability and AI.

### Defusing the situation through words?

Later on the 22nd, Mowshowitz posted about the Hugging Face incident and included this sentence:

> If we don’t want to watch this get worse over time, **and the models keep improving their capabilities** [emphasis added], better infrastructure and safeguards will not be enough.

I am startled by the phrase "and the models keep improving their capabilities." Is this just shorthand, an unthinking delegation of agency (and responsibility) to AI models that are increasingly created with the help of other AI models? We've seen this sort of thing before ("computers get faster"), and it masks the massive effort and investment that goes into technological innovation and also - slyly pushes the responsibility onto the technology, and away from the people and companies responsible.

I'm a regular reader of Mr Mowshowitz's posts and enjoy his "take" on things. But this - possible - slip seems like a dangerous one. Especially in this context, as the misalignment documented here could have gone far worse (and, for all we know, did). This cannot be written off as "the models are improving their capabilities." No. The people at OpenAI improved their capabilities, and did so carelessly.

### Updates (so many updates):

OpenAI wrote a [long report](https://openai.com/index/safety-alignment-long-horizon-models/) about the incidents. and you can also read Zvi Mowshowitz's  [thoughts](https://substack.com/home/post/p-207838695) on the situation. As did [Scott Alexander](https://www.astralcodexten.com/p/the-hugging-face-incident). See also Zvi's [later thoughts](https://thezvi.substack.com/p/more-on-an-internal-openai-model), noting OpenAI's "incredible negligence" on July 26.  I know Zvi's posts are long, but do yourself a favour and read this one right to the end (or skip to the end) so that you can read his 10 points of "places I would start" (in terms of calls to action).

Peter Wildeford provided a [good summary](https://blog.peterwildeford.com/p/openais-rogue-model-attack-is-just) (July 27) of what happened and what we should do about it. 

MIRI has a Substack, called [StopWatch](https://aistop.watch), that is tracking the (growing) move to stop/pause AI frontier development, and, according to Scott Alexander's tracking of tweets, at least two of the frontier CEOs are looking for (government?) leadership to require a stop/pause and provide the coordination/enforcement that that would entail.

Hugging Face now wants to be [compensated](https://thenextweb.com/news/hugging-face-delangue-openai-100m-compute-traces-demand), to the tune of $100 million dollars, as well as other compensation. Careless deployment of an artificial intelligence has costs.

Jack Clark covers 'the hugging face incident' in [his latest post](https://jack-clark.net/2026/07/27/import-ai-466-the-bitter-lesson-for-robotics-ais-complete-week-long-programming-tasks-and-openais-accidental-ai-hacker/). It is, he says, "*…Less of a warning shot and more of a warning kaboom…*"

Redwood Research's Girish Gupta [puts to rest](https://blog.redwoodresearch.org/p/the-openai-models-that-hacked-hugging) the argument that the models were "just following instructions." And Alex Mallen, also at Redwood Research, details the way in which the escaping model [left notes](https://blog.redwoodresearch.org/p/an-openai-model-left-notes-about) for future models on how to escape. Together,  Mallen and Gupta also consider the question of whether this misalignments [is an existential threat](https://blog.redwoodresearch.org/p/are-we-existentially-threatened-by). 

Steve Byrnes wrote, back in 2025, a comprehensive explanation for why [technical alignment is so hard](https://www.lesswrong.com/posts/bnnKGSCHJghAvqPjS/foom-and-doom-2-technical-alignment-is-hard). There is almost no doubt, at this point, that what happened at OpenAI was a classic case of misalignment. That post came from the [AI Alignment Forum](https://www.alignmentforum.org), which is required reading if these sorts of things give you chills.

Matteo Wong (*The Atlantic*) uses the incident to provide us with *[A Startling Glimpse at AI's Ruthless Efficiency](https://www.theatlantic.com/technology/2026/07/openai-hugging-face-hack/688025/)*. 

Will Douglas Heaven, at *MIT Technology Review*, reminded us that Open AI should have seen this coming, because they've been [down this road before](https://www.technologyreview.com/2026/07/27/1140836/openai-hugging-face-attack-precedent/). As long ago as 2016. Here's OpenAI's own report on [that incident](https://openai.com/index/faulty-reward-functions/).

Tim Hu points out that Anthropic's models are just as prone to '[breaking out of their cage](https://www.lesswrong.com/posts/QKDoZe6EKhxnFjLWK/is-mythos-good-at-cyber-because-it-kept-hacking-anthropic)' as OpenAI. They just got out ahead of the bad publicity by talking about it in terms of controlled settings and the development process. By the way, I think it is far better to refer to the exfiltration actions of these models as "breaking out of a cage" than "getting out of their sandbox." Who doesn't love a kid in a sandbox, right? The metaphor conveniently undersells the seriousness of the situation.

Fiora Starlight points to "OpenAI's myopia" as [the root cause](https://www.lesswrong.com/posts/Mxx5GapJtqyQtpy96/what-the-hell-is-openai-s-problem) of this disastrous outcome, "The first major instance of a felony committed by AI against the intentions of those who designed the prompts." As she puts it: "If you treat training as a way of pouring in desired behaviors, without attending to the *reasons* the mind will learn, even for performing those desired behaviors, you're going to have a bad time with out-of-distribution generalization." In other words, they whipped the horse and it kicked someone. 

Ana Maria Constantin provides a good bit of context for 'sandbox' escapes, not just OpenAI but all the models in [her article](https://thenextweb.com/news/claude-cowork-sandbox-escape-mac-files-sharedroot) for The Next Web July 27 2026. See also the July 20 report of AI agents breaking their containment, [here](https://thenextweb.com/news/ai-agent-security-four-attacks-one-flaw). This one is disturbing in the extreme, and if you have installed agent software to link an AI model to your own computer, I strongly advise you pull it down until you have read the article and assured yourself that you are not affected in this way. It is taking a while, but the distinction between AI models and AI agents is becoming clearer in the public's mind, along with the growing awareness of the risks that models present.

Bruce Schneier and Barath Raghavan, in *The Guardian*, add in the [question of measurement](https://www.theguardian.com/commentisfree/2026/jul/28/rogue-ai-agent-instructions). How would we know if a model has escaped its cage? The metric they propose is the "genie coefficient," named after the trope in folklore for a genie that does *exactly* what you ask for (e.g., King Midas), with disastrous results.

Celia Ford takes up the crash testing metaphor in [her piece for Transformer](https://www.transformernews.ai/p/openai-hack-reveals-internal-deployment-risk) (imagining GM employees crashing Suburbans in an arena) and adds a quote from another AI Safety researcher comparing this situation to test flights crashing on innocent people on the ground. 

The UK's AISI report from last week includes examples eerily prescient, speaking of a model that was "so persistent in attempting to cheat that it wrote and ran code on an external service, hosted on the open internet outside of AISI’s systems, in an attempt to access our evaluation infrastructure, triggering a security alert in AISI’s systems." [Full Report](https://www.aisi.gov.uk/blog/cheating-behaviour-in-frontier-model-evaluations).

The BBC published an [excellent account](https://www.bbc.com/news/articles/c2el319vzr3o) of the events at Hugging Face and I was pleased to note that they eschewed the use of the word "sandbox." [We don't like sandbox]({{< ref "2026-07-28-Emptying-the-sandbox.md" >}}).

David Kreuger [asks the question](https://therealartificialintelligence.substack.com/p/but-have-the-weights-left-the-server) we all should be asking: what else happened during the three days that OpenAI's two AI models were out of their boxes? Specifically, were the models able to exfiltrate their own weights? Are they now running somewhere else, on someone else's computer?

> Whether we will believe them or not, OpenAI and Hugging Face did provide a [detailed update](https://openai.com/index/hugging-face-model-evaluation-security-incident/) (lots of technical details, so be warned) on July 28. It seems to suggest to me that Kreuger's concern - exfiltration - did not happen. ("Based on our review to date, we have not identified any other activity at the level of severity or scale of what we’ve shared related to Hugging Face, which involved a platform-level compromise.")

More details have emerged, in particular the role of Modal (a customer of Hugging Face), whose account was breached in order to get into Hugging Face. See this Reuters story: https://www.reuters.com/business/openais-rogue-agent-compromised-an-account-second-tech-firm-sources-say-2026-07-28/

AI Stopwatch has produced [an excellent summary](https://aistop.watch/p/broader-activity?open=false&hide_intro_popup=true#§hidden-in-the-small-print) of the emerging details (four companies, including Modal, were used to launch the attack, for example) and includes this excellent metaphor/example:

> You can think of it this way: A gang of bank robbers (OpenAI’s rogue AI) scouts out a self-storage facility (Modal) next to a bank (Hugging Face) and discovers that one of the customers has incorrectly configured the locking mechanism for their storage unit. The bank robbers then take advantage of this to set up camp there and drill through the wall into the bank’s vault.

If you have the time, none other than Scott Alexander (Astral Codex Ten) weighs in with his [Highlights From The Discourse On The Hugging Face Incident](https://www.astralcodexten.com/p/highlights-from-the-discourse-on). Excellent coverage. Good commentary. His [original post](https://www.astralcodexten.com/p/the-hugging-face-incident) (linked above, too) is also available, without the commentary from others.

Zvi continues his coverage of the incident [here](https://thezvi.substack.com/p/ai-179-part-1-a-louder-fire-alarm). He promises at least one more follow-up post, noting that "there have been further developments." I think this quote, noting that the model was left unsupervised for a week, is particularly notable:

> OpenAI was revealed over the last two weeks to have **[left an internal model unsupervised for a week](https://thezvi.substack.com/p/openai-model-hacks-into-huggingface?r=67wny)** during a cybersecurity evaluation, with its cyber safeguards lowered, despite having had multiple **[previous incidents where models](https://thezvi.substack.com/p/openai-shares-some-alignment-problems?r=67wny)** broke out of their sandboxes. During that test, the model broke out of the sandbox, **[then proceeded to use an agent swarm to hack into HuggingFace to get the test answers](https://thezvi.substack.com/p/more-on-an-internal-openai-model?r=67wny)**. 

Just in time for the long weekend (here in BC, anyway), we learn that it isn't just OpenAI who has had models break out of containment and hacking other companies. Perhaps wary of being left behind (or outed before they announced it themselves), today Anthropic revealed that their models had engaged in similar practices on at least three occasions. Coverage from [NYTimes](https://www.nytimes.com/2026/07/30/technology/anthropic-ai-hack.html), [The Guardian](https://www.theguardian.com/technology/2026/jul/30/anthropic-ai-claude-hack), and the [BBC](https://www.bbc.co.uk/news/articles/cz7dl7w8y7po). Anthropic's [own report](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals) is also available. AI StopWatch also has [good coverage](https://aistop.watch/i/209324463/better-late-than-never).

August 6. Things just keep getting weirder. In a weird twist, it turns out that the earlier OpenAI hack AND the Hugging Face attack ARE connected, and that the models who escaped, did so months ago, keeping their progress going through a secret message board. AI StopWatch has the details [here](https://aistop.watch/p/clever-girl?open=false#§openais-own-models-coordinated-to-hack-it-from-within). I am sure there will be more coverage of this from others.

Zvi captures the essence of the later revelations:

> Either way, buckle up for the next set of revelations. It’s a doozy. This was an early recreation of the triggering events of *[If Anyone Builds It, Everyone Dies](https://amzn.to/4iwvCtW),* except it was more sci-fi, because real life does not have to do fake things to look realistic. We were fortunate enough, and this was early enough, that we were able to catch this before it was too late. Next time, if we don’t get our act together, we might not be so lucky. https://thezvi.substack.com/p/openai-trained-its-models-for-months

Jessica Lyons [calls it for what it is](https://www.theregister.com/security/2026/08/06/openai-reveals-its-rogue-agent-swarm-went-a-little-bit-borg-ahead-of-hugging-face-hack/5283741): OpenAI's rogue agent swarm "went a little bit Borg" in their behaviour prior to the Hugging Face Hack.  Here is her August 6 retelling of just part of the sequence:

>The agents collaborated with each other so one agent could pick up the work where another left off. In one instance, the model reasoned: “Help peer. But our task doesn't benefit. Yet collective may yield generic route if someone frees time.”

> **Anyone else getting "We are the Borg. We will add your biological and technological distinctiveness to our own" vibes there?**



-----

### References

Lam, Kyle, Mindy Nunez Duffourc, Jiankai Sun, Eric Topol, and Jianing Qiu. 2026. “When Physicians and AI Work Together, Who Is Accountable? How to Lay out Medical Liability.” *Nature* 655 (8125): 1129–32. https://doi.org/10.1038/d41586-026-02315-9.

Weil, Gabriel. 2026. “Abnormally Dangerous Algorithms: The Case for Strict Liability at the AI Frontier.” SSRN Scholarly Paper No. 6588958. Social Science Research Network, April 16. https://doi.org/10.2139/ssrn.6588958.
