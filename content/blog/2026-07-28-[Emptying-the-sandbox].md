---
title: ["Emptying the sandbox"]
date: ["2026-07-28"]
categories: ["AI Safety"]
draft: ["false"]
---



In my post about "crash testing" AI models I became more and more uncomfortable with the idea that the model had escaped its 'sandbox.' The term just seemed too cute - and linked to children playing harmlessly - to fit the use. By linking to something harmless it deliberately or accidentally made the situation less alarming than it was. 

(If you want to learn more about the practice of 'sandboxing' in software engineering as well as the way in which it tries to frame harms in childish ways, Menlo Security has a [useful writeup](https://www.menlosecurity.com/blog/what-is-sandboxing-the-types-benefits-challenges#:~:text=This%20method%20is%20analogous%20to%20a%20child's,private%20data%2C%20and%20maintaining%20overall%20system%20integrity.) that explicitly references a child's sandbox.) 

Sanboxing in the sense that Menlo describes it might work to contain a simplistic software program that glitches and threatens to crash the computer when it fails. It doesn't capture the situation where an intelligent and misaligned AI is actively trying to escape its bounds.

I am not alone in my concerns, it seems. A quick online search revealed that others have similar worries. Elizer Yudkowsky likes to shorten the term to "box" and "**boxing**" - and used that term in his well-known [AI Box Experiment](https://rationalwiki.org/wiki/AI-box_experiment), that showed how an AI could trick human guards into letting it 'out of the box' with simple text messages. 

Other AI safety commentators, including Nick Bostrom, author of *Superintelligence,* prefer to call the whole exercise "**containment**." Bostrom included a whole section in the book on Capability Control Methods, breaking things down into Physical Confinement (how and if it is connected to outside networks, does it have an off switch/kill switch) and Informational Confinement (limiting what the AI can read and write).

My preference, for a stronger term, like "**cage**," is reflected in some of the open source projects that aim to create an impenetrable isolation system called an [Agent Cage](https://github.com/pnnl/agent-cage) (agents are [particularly dangerous](https://thenextweb.com/news/ai-agent-security-four-attacks-one-flaw) in this regard and deserve much more attention than they have had up to now). 

Taking things even one step further, some writers have used the metaphor of '**hazardous materials**' and 'biocontainment.' This can be found explicitly in the Responsible Scaling Policy adopted by Anthropic in 2023. According to Anthropic, their AI Safetly Levels (ASL) were "modeled loosely after the US government's biosafety (BSL) standards for handling of dangerous biological materials." Note that the reference to BSL has been removed from the [Responsible Scaling Policy](https://www.anthropic.com/responsible-scaling-policy) and no longer exists in the version as of  July 8, 2026. The original version is available in a [linkpost from Effective Altruism](https://forum.effectivealtruism.org/posts/bGzwWYfXgKqdurdmb/anthropic-s-responsible-scaling-policy-and-long-term-benefit). Here is the full quote from the original:

> Our RSP defines a framework called AI Safety Levels (ASL) for addressing catastrophic risks, modeled loosely after the US government’s biosafety level (BSL) standards for handling of dangerous biological materials. The basic idea is to require safety, security, and operational standards appropriate to a model’s potential for catastrophic risk, with higher ASL levels requiring increasingly strict demonstrations of safety.

Bostrom laid the foundation for this kind of thinking in his notion of physical and informational layers (see above). Similarly, Yampolsky, in *Taxonomy of Pathways to Dangerous AI* (2015), speaks of Hazardous Intelligent Software, and Aschenbrenner (2024), though focused on people (especially "the Chinese") stealing secrets, calls **physical security** in Frontier AI labs "laughable" and calls for facilities that would copy the Manhattan Project or simlar defense industry standards. 

It seems to me that it is time to retire the sandbox metaphor, especially given recent news of escapes from within the lab, pre-deployment (Ford 2026).  Let's use serious language for serious problems.

-----

Aschenbrenner, Leopold. 2024. “Situational Awareness The Decade Ahead.” Situational Awareness, June. https://situational-awareness.ai/.

Ford, Celia. 2026. “Internal AI Deployments Have People Worried. OpenAI’s Escaping Models Show Why.” July 28. https://www.transformernews.ai/p/openai-hack-reveals-internal-deployment-risk.

Yampolskiy, Roman V. 2015. “Taxonomy of Pathways to Dangerous AI.” arXiv:1511.03246. Preprint, arXiv, November 11. https://doi.org/10.48550/arXiv.1511.03246.