---
title: "Bitter Robots"
date: 2026-07-27
categories: ["AI Safety"]
draft: false
---

The robots aren't bitter. How could they be? They aren't conscious, so bitterness (or regret) doesn't enter into things. No, the bitterness I speak of is the "bitter lesson" (Sutton 2019) that AI researchers had to learn as clever programming faltered and bigger computers and more data (scale) won the day in the recipe for building a successful artificial intelligence. That lesson is coming true outside of the world of Chatbots and moving into the world of robots, according to Jack Clark, one of the founders of Anthropic and a frequent commentator on both robots and AI.

Robots have a vital role in modern manufacturing but have not yet had a significant footprint out of the factory, in part because of the challenges that an uncontrolled environment like the home presents, compared to the structure that is possible on the shop floor. So far, as far as home robots go, we've met with success only by tightly constraining the task and the form factor (e.g., robot vacuums). But getting them to do more general tasks (folding laundry, tidying up) is a struggle.

As recently as last year a group of researchers at Anthropic mostly failed to train a robot dog using AI (Project Red Team 2025). More recently, however, the same approach that worked for chatbots (bigger model, made up of bigger data and more computation) has proven to be successful for learning new tasks. In fact, the success rate from the first attempt in 2025 (9%) advanced to 99% in 2026 (Frontier Red Team 2026).

The approach taken by the research team at Anthropic - larger models - has been adopted by startup Sunday, who are trying to build household helper robots (you can [watch them in action](https://www.youtube.com/watch?v=a2HZyURUE_o) on YouTube, it is mesmerizing) that can fold clothes, for example. The approach is working, and as Jack Clark notes:

>  If Sunday is right, then the field of training robot foundation models might have matured enough that we’re starting to make smart enough systems to solve these generalization challenges. If this is the case, then we might soon get faster progress in (and diffusion of) robot systems. This is also the kind of thing you’d expect to happen en route to systems capable of recursive self-improvement.

According to the authors at Sunday Robotics:

> One of the most striking aspects of ACT-2 has been how often the model surprises us. [...] The same base model is already learning a broader set of household capabilities, including vacuuming, toy organization, fastening zippers, turning pants inside out, and coffee preparation.

Wow. More capable robots. That surprise you. What could go wrong? Oh, right. Misalignment. Are we the next [crash test dummies](crashtest/) ?

It's one thing to have a misaligned artificial intelligence that controls a keyboard. It's quite another to have a misaligned artificially intelligent robot. Misaligned robots has been - up to now - a scifi kind of thing, in part because the robot "brains" were deliberately narrow in function. They didn't have the ability to learn new things or generalize. But, of course, there's money to be made in a generalizable intelligence for robots, so someone is going to build it.

-----

Clark, Jack. 2026. “Import AI 466: The Bitter Lesson for Robotics, AIs Complete Week-Long Programming Tasks; and OpenAI’s Accidental AI Hacker.”  *Import AI*, July 27. https://jack-clark.net/2026/07/27/import-ai-466-the-bitter-lesson-for-robotics-ais-complete-week-long-programming-tasks-and-openais-accidental-ai-hacker/.

Sunday Robotics. 2026. “ACT-2 Preview: Generalizing Reliability.” Sunday, July 16. https://www.sunday.ai/blog/act-2-preview.

Sutton, Richard. 2019. “The Bitter Lesson.” In *Incomplete Ideas (Blog*. http://www.incompleteideas.net/IncIdeas/BitterLesson.html.

Project Red Team. 2025. “Project Fetch: Can Claude Train a Robot Dog?” Anthropic Research, November 12. https://www.anthropic.com/research/project-fetch-robot-dog.

Frontier Red Team. 2026. “Project Fetch: Phase Two.” Anthropic Research, June 18. https://www.anthropic.com/research/project-fetch-phase-two.

