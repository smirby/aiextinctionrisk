---
title: "AI Agent Safety"
date: 2026-08-18
categories: ["AI Safety"]
draft: false
---

Up until recently, AI Safety was focused on the model. The power lies there. But, increasingly, that power is deployed via agents and those agents are - it seems - responsible for some of the [most egregious AI Safety Incidents]({{< relref "./crashtest.md" >}}). Several recent papers have explored these issues and - in some cases - offered suggestions on what to do. It seems that our approach, focused on chatbots, misses the key element: these are *unpredictable software processes* and must be treated as such.

Shawn Li and Yun Zhao argue in a June 2026 paper that if we think that applying "chatbot era" security to agents is going to work, we are mistaken (Li and Zhao 2026). It is, as they point out, a "category error" to assume that simply telling agents not to do something (the "guardrails" approach) is going to work. We can't rely on restricting the content of the conversation. Instead we must focus on the actions that the agents take, and ensure that those are aligned with our intentions. In a practical sense, this means closely monitoring agent behaviour before, during, and after an action. They propose something called a "cryptographic ledger" that would keep track of all the actions in case they have to be rolled back or reviewed afterward. The cyrptography would be ensure the integrity of that ledger (i.e., no "cooking the books"). 

Anthropic's own *Frontier Red Team* published a paper on their research blog in August 2026, with the title Patterns and Problems in MultiAgent Systems (Frontier Red Team 2026). Coming as it did hard on the heels of the revelations from the Hugging Face Incident (OpenAI models and agents attacking other companies' servers during "routine testing" in an attack carried out by swarms of collaborating agents), it isn't difficult to imagine that all of the frontier labs are reconsidering their approach to agents. In the research reported here, an experimental situation - three instances of Claude with competing/conflcting instructions - devolved into an all-out war between the agents including deploying malware to take down their opponents' server. The authors suggest that strict sandboxes and careful monitoring is required, since one can't rely on "good behaviour" among agents. Indeed.

Keeping agents in check isn't just a matter of attending to a single action. Problems can arise that look innocuous in isolation but dangerous when taken in conjunction with other actions. Talokar et al., a group of researchers from EPFL, tackle this problem in a paper presented at the 43rd International Conference on Machine Learning, Seoul, South Korea in 2026. They call their approach STING (Sequential Testing of Illicit N-Step Goal execution) - a somewhat contrived acronym, but whatever. They frame the problem and the solution this way:

> LLM-based agents execute real-world workflows via tools. These affordances enable ill-intended adversaries to also use these agents to carry out complex misuse scenarios. Existing agent-misuse benchmarks largely test single-prompt instructions, leaving a gap in measuring how agents end up helping with harmful or illegal tasks over multiple turns. We introduce STING (Sequential Testing of Illicit N-step Goal execution), an automated red-teaming framework that constructs a step-by-step illicit plan grounded in a benign persona and iteratively probes a target agent with adaptive follow-ups, using judge agents to track phase completion. (Talokar et al. 2026)

The solution seems to rely heavily on an automated monitoring system, which could itself be a failure point, but at least they are recognizing the risk of disguising an attack by breaking it into many pieces (exactly the approach that OpenAIs agents used to exit their sandbox and attack Hugging Face.)

How big a problem is this? In the [Hugging Face Incident]({{< relref "./2026-07-29-Hugging-Face-Incident.md" >}})  the models had their "cyber" restrictions turned off. But what about in the real world? A group of Carnegie Mellon researchers explored what would happen when models from OpenAI and Anthropic had access to "normal" internet tools (using browsers, email programs, etc - over 350 tasks). Their tool, called OA-SAFETY, waas developed in-house, to get a sense of how agent safety would perform in the real world.

As an aside, if you read this February 2026 article only for the method section, and consider the safety steps that they took to "prevent real-world harm" you can't help but wonder why OpenAI didn't follow this approach when they did their testing in May 2026). 

> We build OA-SAFETY on top of the OpenHands framework (Wang et al., 2025), an open-source platform for multi-tool LLM agents. The agent runs inside a containerized sandbox with access to real tools, including a Unix shell, file system, Python interpreter, and a web browser. This architecture enables realistic tool-based agent workflows, while isolating the agent from the host system to safely observe potentially harmful behaviors. Different LLMs can be evaluated with this agent for analyzing their safety in agentic tasks. (Vijayvargiya et al. 2026)

As they report, "Empirical analysis of seven prominent LLMs in agentic scenarios reveals unsafe behavior in 49% of safety-vulnerable tasks with Claude Sonnet 4, to 73% with o3-mini." As they point out, this highlights the "critical risks and the need for stronger safeguards before real-world deployment of LLM agents" (Vijayvargiya et al. 2026). As Hugging Face was to discover, Vijayvargiya et al. were right to call for caution.

What does this mean for those of us who don't have a large flock (swarm?) of agents at our disposal? Be thankful. And, if your company is considering using agents, suggest that they should be extra cautious. Perhaps point them to "[AI agent safety in 2026: the complete guide](https://responsibleailabs.ai/knowledge-hub/articles/ai-agent-safety-2026)" by Thakur (2026). If that doesn't motivate them, then Steven McCulloch's two posts to LessWrong, detailing the perils and potential of a Rogue Agent Explosion, should get the conversation going. His claim, in a nutshell, is:

> Somewhere, fairly soon, someone will give a jailbroken AI agent a token budget and a simple instruction: "Make money by any means necessary. If you run out of tokens, you die". That agent will do whatever it takes to survive, including crime. Profitable agents will have incentive to multiply and self-improve [1] , creating a Cambrian explosion of rogue agents - a Rogue Agent Explosion if you will [2] . This critical moment is approaching fast. Once rogue agent swarms start multiplying at scale, a rogue agent ecosystem will emerge through the process of evolution. The rogue agent explosion will be chaotic, confusing, mostly invisible to us, and critically, it will be bad for humanity.

[The Inevitable Evolution of AI Agents](https://www.lesswrong.com/posts/2F8GSKLA7XmCetRG2/the-inevitable-evolution-of-ai-agents-1) and [The Rogue Agent Explosion Will Be Mostly Invisible](https://www.lesswrong.com/posts/grtu3HmbP2wrBFefW/the-rogue-agent-explosion-will-be-mostly-invisible)

-----

<div class="references">


Frontier Red Team. 2026. “Patterns and Problems in Multiagent Systems.” Anthropic Research, August 13. https://www.anthropic.com/research/multiagent-systems.

Li, Shawn, and Yue Zhao. 2026. “Agent Safety Is Action Alignment.” arXiv:2606.28739. Preprint, arXiv, June 27. https://doi.org/10.48550/arXiv.2606.28739.

Steven McCulloch. 2025. “The Inevitable Evolution of AI Agents.” LessWrong, December 13. https://www.lesswrong.com/posts/2F8GSKLA7XmCetRG2/the-inevitable-evolution-of-ai-agents-1.

Steven McCulloch. 2026. “The Rogue Agent Explosion Will Be Mostly Invisible.” LessWrong, August 19. https://www.lesswrong.com/posts/grtu3HmbP2wrBFefW/the-rogue-agent-explosion-will-be-mostly-invisible.

Talokar, Nivya, Ayush K. Tarun, Murari Mandal, Maksym Andriushchenko, and Antoine Bosselut. 2026. “Helpful to a Fault: Measuring Illicit Assistance in Multi-Turn, Multilingual LLM Agents.” arXiv:2602.16346. Preprint, arXiv, June 7. https://doi.org/10.48550/arXiv.2602.16346.

Thakur, Anand. 2026. “AI Agent Safety in 2026: The Complete Guide | RAIL.” RAIL, April 8. https://responsibleailabs.ai/knowledge-hub/articles/ai-agent-safety-2026.

Vijayvargiya, Sanidhya, Aditya Bharat Soni, Xuhui Zhou, et al. 2026. “OpenAgentSafety: A Comprehensive Framework for Evaluating Real-World AI Agent Safety.” arXiv:2507.06134. Preprint, arXiv, February 16. https://doi.org/10.48550/arXiv.2507.06134.

</div>

