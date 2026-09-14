---
title: "Another one..."
date: 2026-09-13
categories: ["AI Safety"]
draft: false
---

On September 11 a group of researchers reported on another attack by OpenAI agents, this one back in May, on the site RubyGems. As [their report](https://www.rubyhack.ai) details:

>On May 11th, 2026, hundreds of malicious packages were uploaded to RubyGems by AI agents. We believe these were authored by internal OpenAI agents [(more)](https://www.rubyhack.ai/#an-openai-agent-swarm-was-responsible-for-this-i).
>
>The agents:
>
>1. Attempted to steal RubyGems user API keys by exploiting a novel vulnerability in the RubyGems server. We don’t know if they succeeded [(more)](https://www.rubyhack.ai/#the-agents-attempted-to-exploit-a-novel-vulnerab).
>2. Abused [RubyDoc.info](http://rubydoc.info/) to execute arbitrary code [(more)](https://www.rubyhack.ai/#the-agents-used-rubygems-automatic-build-system-).

The full report is fascinating, and was also covered extensively in Mitchell Howe's reporting on the incident in AI Stop Watch: https://aistop.watch/i/215437940/another-swarm-safehouse-discovered-malicious-activity-evident

As Howe points out, the "why" of this attack is the most unsettling thing:

> To someone like me, immersed in AI safety culture, the obvious-but-terrifying hypothesis is *[instrumental convergence](https://www.youtube.com/watch?v=ZeecOKBus3Q)* — general power-seeking behavior that can advance any number of goals. In other words, maybe the swarm had no immediate plans for compromised systems, but started hacking on the assumption that compromised systems could be useful down the road. This would be consistent with other activities documented about the Hugging Face and German wiki swarms, which seemed interested not just in cheating on their evaluations, but in understanding their evaluators and building up infrastructure to facilitate such research.

Are we being tested?

-----

References

<div class="references">

Howe, Mitchell. 2026. “Evil Inside.” AI Stop Watch, September 13. https://aistop.watch/p/evil-inside.

Kitts, Spencer, Thomas Larsen, and von Arx Sydney. 2026. “OpenAI Agents Carried out an Undisclosed Cyber-Attack on RubyGems.” The RubyGems Attack, September 11. https://rubyhack.ai/.

</div>

