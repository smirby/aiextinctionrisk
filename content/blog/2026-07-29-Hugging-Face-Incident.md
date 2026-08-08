---
title: "Hugging Face Incident"
date: 2026-07-29
categories: ["AI Safety"]
draft: false
---

I've posted quite a bit about the "[crash test](./crashtest/)" incident involving OpenAI, Hugging Face, and (we now learn) Modal. Several people have written accounts of what happened, including OpenAI, which wrote at least three reports. I don't know what more I can add, but a colleague asked me to make sense of it all, so here's my attempt. I will start with a short chronology, then list the main reports, then conclude with my thoughts. I will continue to update the "crash test" blog post as new information comes in.

### Timeline

- I first learned that something had gone wrong when OpenAI reported that one of their unreleased models had escaped containment during internal testing, apparently with the help of another model, Sol. This was a fairly detailed report.

- I then heard that Hugging Face had been hacked and noted that it had the earmarks of an AI-driven attack. They reported the attack to the FBI. This was reported in technology news sources. At that time, neither OpenAI nor Hugging Face knew that OpenAI's model was involved.

- Then, OpenAI reported that it was its model that had attacked Hugging Face. This second report made the connection between the first incident which was thought to be internal to something more serious, involving an attack on another company.

- At this point a lot of people started researching and reporting (WSJ, Reuters, NYTimes, etc). OpenAI released an update to their original report. Additional companies were implicated, including Modal (a supplier of containers (sometimes called "sandboxes," [though we prefer a stronger term](./2026-07-26-Emptying-the-sandbox/)).

- Hugging Face issued their own report, including the link to Modal and Modal's customer.

### Reports

- OpenAI's report
  https://openai.com/index/hugging-face-model-evaluation-security-incident/

- Hugging Face's first report (July 16, before OpenAI's role was known) and their technical report from July 27
  
  https://huggingface.co/blog/security-incident-july-2026
  
  https://huggingface.co/blog/agent-intrusion-technical-timeline
  
- Modal's report (a customer of theirs was one of the "launchpads"; Modal provides "containers" for code)
  https://modal.com/blog/a-note-on-the-hugging-face-agent-incident

### Thought/Commentary/Analysis

Much has been written about this by other people. See my "[crash test](./crashtest/)" blog post for most of it. For now I'll just add the following:

- I am glad that "agents" are getting the blame (or at least their role is becoming clearer), as for too long and in too many ways the problem has been laid at the feet of the AI models. The model's of course, provide the "power" for the attack (perhaps they are the bullets in this scenario), while it is the agent ("harness") that provides the delivery (the rifle in this scenario?).

- I am tired for the word "sandbox," given that that sort of language evokes children playing with toys and does not sufficiently convey the gravity of the situation nor does it help to understand the heroic efforts that the AI model+agent undertook to escape their containment/cage. See [my rant](./2026-07-26-Emptying-the-sandbox/)).

- It does seem that the seriousness of the incident is being fully appreciated, though there remain a few skeptics ("PR stunt, just following instructions"); Zvi [expertly squashes](https://thezvi.substack.com/p/more-on-an-internal-openai-model?open=false#§the-huggingface-attack-was-not-a-marketing-pitch-you-morons) those people, so I won't do more. In fact, I strongly encourage everyone to read Zvi's analysis from the beginning. Especially his August 7 update, given how serious things became, eventually.
  - July 21: https://thezvi.substack.com/p/openai-shares-some-alignment-problems 
                  (before the Hugging Face connection was known)
  - July 22: https://thezvi.substack.com/p/openai-model-hacks-into-huggingface?r=67wny
  - July 23: https://thezvi.substack.com/p/ai-178-a-fire-alarm-for-general-intelligence
  - July 26: https://thezvi.substack.com/p/more-on-an-internal-openai-model
  - Aug 7: https://thezvi.substack.com/p/openai-trained-its-models-for-months
  - Aug 8: https://thezvi.substack.com/p/what-happened-openai-and-huggingface
  
- It turns out this incident didn't just have a "pre-incident" (the OpenAI escape during internal testing). It had a pre-pre-incident, which, it seems, rolls the whole thing into one big incident. It seems too much to be true. See coverage from AI StopWatch, WIRED, and Politico, Axios. 

  - AI StopWatch (Aug 6): https://aistop.watch/i/210151404/openais-own-models-coordinated-to-hack-it-from-within
  - AI StopWatch (Aug 8): https://aistop.watch/p/starting-to-stop
  - WIRED: https://www.wired.com/story/openai-didnt-notice-its-ai-agents-using-a-message-board-to-plan-their-hacking-spree/
  - Politico: https://www.politico.com/news/2026/08/05/openai-models-shared-hacking-tips-secret-messaging-board-hugging-face-breach-01026750
  - Axios: https://www.axios.com/2026/08/06/openai-hugging-face-black-hat
  - Humans on AI: https://p3humansonai.substack.com/i/210266354/rogue-agents-redux
  
  