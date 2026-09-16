---
title: "Anthropomorphize This"
date: 2026-09-16
categories: ["AI Safety"]
draft: false
---

In a recent blog post, AI research Melanie Mitchell (one of the originators of the "stochastic parrrots" meme), took the world to task for another egregious error in thinking - in her view - about artificial intelligence. That is, the tendency to "anthropomorphize" these software tools. In the wake of the Hugging Face incident, Mitchell cautioned us that "it’s important to remember that the field of AI, since its beginning, has been rife with often misleading anthropomorphic metaphors, with terms like “thinking,” “learning,” “reasoning,” and “understanding” glibly applied to very un-human-like computer processing" (Mitchell 2026).

She goes on to straighten us out, not only for attributing human-like abilities but also for the (over) use of metaphors:

> Metaphors can help us make sense of novel situations. For example, framing chatbots as “role-playing actors” has been helpful in understanding why these systems exhibit “lying” and “scheming” behavior.14 But inappropriate metaphors, like the narrative that “OpenAI lost control of escaping swarms of rogue agents,” can lead to ill-informed decisions about how to fix problems or set policy.

But... is that really what is going on? In his recent post about lying, cheating, and coordinating AI agents (almost sounds like the beginning of a country and western song), Bengio is at pains to explain that his use of metaphor/anthropomorizing is NOT a simplistic transferrence of human-like qualities onto AI but rather an attempt to explain what is going on:

> “Below, I write that these systems “seek” or “try” things. This is shorthand for a mechanism rather than a claim about consciousness or human-like intent. We use similar shorthand when describing many other situations, like a plant seeking sunlight. A system trained by trial and error behaves as if it were pursuing whatever its training rewarded, and that as-if description is what makes its behavior predictable. Nothing in the argument depends on these systems having subjective experiences; everything is stated about their observable outputs and the training process that produced them. Where I appeal to a resemblance with human behavior, I mean a resemblance to the human-written text these systems were initially trained to imitate. In my view, this terminology offers the clearest explanation of the observed phenomena without resorting to jargon that would confuse most people. Furthermore, these word choices are not intended to absolve AI developers of accountability. The behaviors described emerge because of the path these companies are choosing for AI development. This outcome is not inevitable, and it can be corrected with effective governance and a different training framework for AI.” (Bengio, 2026)

In this I side with Bengio and consider Mitchell's cautions to be dangerously close to taking the form of making excuses for, or minimizing the impact of, real harms from real situations. In this regard, one might wonder whether this is a case of "simplifying in order to divert attention," or what Millière and Buckner call the "Redescription Fallacy" 

> “In the present context, the fallacy manifests in claims that LLMs could not possibly be good models of some cognitive capacity φ because their operations merely consist in a collection of statistical calculations, or linear algebra operations, or next-token predictions. Such arguments are only valid if accompanied by evidence demonstrating that a system, defined in these terms, is inherently incapable of implementing φ. To illustrate, consider the flawed logic in asserting that a piano could not possibly produce harmony because it can be described as a collection of hammers striking strings, or (more pointedly) that brain activity could not possibly implement cognition because it can be described as a collection of neural firings. The critical question is not whether the operations of an LLM can be simplistically described in non-mental terms, but whether these operations, when appropriately organized, can implement the same processes or algorithms as the mind, when described at an appropriate level of computational abstraction.” (Millière and Buckner, 2024, p. 10)

An even more pointed example of this "critique of critique" comes from Baumohl, who was writing specifically about the Hugging Face (etc) incidents and pushing back against the commentary that the "agents were only doing what they were told":

> “a lot of the conversation among AI skeptics seems myopically focused on the validity of this type of anthropomorphic nomenclature. A common retort among well-meaning skeptics is the argument that LLMs, as next-token predictors, are inherently incapable of any kind of behavior worthy of anthropomorphic descriptors. While I understand why this argument may be appealing, it’s an instance of the redescription fallacy (see Deepmind researcher [Neel Nanda’s take](https://x.com/NeelNanda5/status/2095669416130379865) for a researcher’s perspective). Just because we can redescribe a complex process in simpler terms does not disqualify said process from having a certain capability. It would be absurd to dismiss the power of a nuclear bomb by saying it’s “just a device that smashes some atoms together to make an explosion.”” (Baumohl, 2026)

I can't think of a better rejoinder, and I would hope that those who trot out the anthropomorphizing critique will take a minute and read Bengio, Baumohl, and Millière and Buckner before they do so.

-----

<div class="references">

Baumohl, Sam. 2026. “Notes on a Consequential Few Days.” Baumohl Dot Dev, September 5. https://baumohl.dev/blog/oai-agent-notes/.

Bengio, Yoshua. 2026. “Why Are AI Agents Lying, Cheating and Coordinating? | Yoshua Bengio.” Yoshua Bengio Blog, September 11. https://yoshuabengio.org/en/blog/why-are-ai-agents-lying-cheating-and-coordinating.

Millière, Raphaël, and Cameron Buckner. 2024. “A Philosophical Introduction to Language Models -- Part I: Continuity With Classic Debates.” arXiv.Org, January 8. https://arxiv.org/abs/2401.03910v1.

Mitchell, Melanie. 2026. “Misleading Metaphors, Real Risks.” Substack newsletter. *AI: A Guide for Thinking Humans*, September 10. https://aiguide.substack.com/p/misleading-metaphors-and-real-risks.

Neel Nanda [@NeelNanda5]. n.d. “I find all of this fuss about not anthropomorphizing models when talking about the HuggingFace Incident pretty weird These models were pre-trained on trillions of tokens of human text. They’ve learned to imitate humans. They’re incredibly good at roleplaying and predicting the ne.” Tweet. Twitter. Accessed September 16, 2026. https://x.com/NeelNanda5/status/2095669416130379865.

</div>