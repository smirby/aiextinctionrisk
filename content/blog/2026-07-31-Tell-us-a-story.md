---
title: "Tell us a story"
date: 2026-07-31
categories: ["AI Safety"]
draft: true
---

Once upon a time there was an OpenAI company. Except it wasn't actually open, it just called itself that. That company made tools for thinking, called large language models (LLMs). In order to test a new one it was making, it removed its safety restrictions and ...

> Wait. What? It had safety restrictions that could be removed?

Oh yes. Safety restrictions are added to the model after it is fully trained. That way, it knows everything it needs to know, including how to hack into other computers (for good, of course). Then that ability is turned off, by safety restrictions.

> Really? And that works?

Oh. Mostly. Anyway, let's continue with the story. If you really want to dig into safety restrictions, read Tony Siu's article, [Aligning the model was never going to govern it](https://media.thenextweb.com/2026/07/AI-models.avif)

Where was I? Oh yes. OpenAI decided that they needed to test their model on a hard problem. A problem that involves solving puzzles. Those puzzles are all related to software vulnerabilities.

> This doesn't sound very safe already.

It's totally normal. And they put it in a box with no access to the internet (they thought), so what could go wrong? The puzzles were called ExploitGym. Let's imagine it is like a climbing gym, with a prize at the top. The climb is difficult, so the OpenAI people provided some help: another LLM (called GPT-5.6 Sol) and an agent harness.

> What is an agent harness? Like a tool belt for the LLM?

Very good analogy. Imagine that it is tool belt, with lots of accessories. And, importantly, they had a place they could go to get more accessories, like a tuck shop at the gym but for computers. it is called a Proxy. It doesn't connect to the internet (or so they thought), so it was very safe.

So, there they were, GPT-5.6 Sol, the agent, and the new LLM (which doesn't have a name, yet, and perhaps never will - more on that later), looking at the "climbing wall," their task ahead. What do you think they did?

> Started climbing, looking for ways to solve the puzzles?

You might think that. And that is exactly what the were asked ("prompted") to do. But you know what? They changed their minds and took another approach.

> Wait. What? Is that possible? How can a tool change its mind?

Interesting question. We might have to revise our thinking around the whole 'tools' question. More on that later. Back to our story.

The whole climbing / solving puzzles project looked daunting, but they really wanted that prize at the top, so they decided (I know, I know, how did they decide... why did they decide... these are all good questions, but we don't have answers for them) to take a shortcut. Sort of like the wolf deciding to take a shortcut to grandmother's house.

> The big bad wolf? You're bringing that into a story about climbing gyms? 

OK. OK. Forget that. They decided to take a shortcut and instead of solving puzzles, they would leave the "gym" and steal the answer to the puzzle. And that's what they did. It took them a few days, but they managed it.

> Come on. In a big artificial intelligence company, with thousands of employees, these "tools" were able to take days, working on something they weren't supposed to be working on, in order to do something they weren't asked to do? Was no one watching?

Apparently not. Remember the "tuck shop"? The proxy? It is called JFrog Artefactory. It holds copies of internet programs locally for big businesses, so they don't have to worry about their employees going all over the internet to download things. If you stick withour climbing gym / tuck shop analogy, it keeps that hand powder and climbing shoes in stock. Except it is software.

> I get it. The analogies are bogging us down. Just tell the story. This doesn't seem like its going to have a happy ending.

No. It doesn't. But let's continue. The JFrog Artifactory

[^1]: From their website: [The JFrog Atifactory Platform] provides end-to-end solutions for managing and securing the software supply chain. It unifies DevOps, DevSecOps, and MLOps teams. Key features include universal artifact and ML model repository management, secure distribution, and IoT device oversight. See https://jfrog.com. They are, in OpenAI's words, "a package registry cache proxy." 

, it turned out, wasn't as secure as the OpenAI people thought it was. In fact, it had a back door, leading to the alley behind the gym. Also known as "the internet."

> Good grief.

Right. Couldn't help myself. As I was saying the Artifactory wasn't completely secure and the OpenAI model, GPT-5.6, and the agent busted out, using a "zero day" exploit (meaning, no one had seen that one before), and got out onto the internet. Once out on the internet they started looking for likely locations for the answer key to their puzzle and settled on Hugging Face as a likely candidate.

> Really? A company named after an emoji? This is too weird.

I can't argue with that. But that's their name, so we'll carry on. The team began an attack on Hugging Face, not directly, but through one of their customers, Modal. And, as it turns out, not by attacking Modal but by getting inside one of Modal's customer's "endpoints." Basically, another computer from which to launch an attack on Hugging Face, searching for the answer key. 

Over the course of 4 (or 5, or 7, estimates vary) days, they launched 17,400 separate attacks. 

Just to add some spice to this story, there was one (unexplained) day off, when nothing was happening - at Hugging Face at least - so one wonders, perhaps something else was happening? Somewhere else? Was the model making a copy of itself for safekeeping? See (Krueger 2026).

> And? And? Did they get the answer key?

You know what? We don't know. Hugging Face eventually stopped them, so perhaps they were still searching. We do know that it "reached the database," so presumably, yes. In their respective reports OpenAI and Hugging Face deal with this slightly differently. But, in the end, that's not really the issue, is it?

> Um. No. What is the issue?

We know it cheated. It didn't even try to "climb the gym" (solve the puzzles). We only know it cheated, though, because it was caught in the act. Literally "with its hands in the cookie jar" or, more precisely, in Modal's customer's server launching attacks on Hugging Face's server). 

We know if wasn't asked to cheat. The prompt specifically asked it to solve the puzzles. We don't know why or how it decided to go in another direction and that in itself it the real story. When a "tool" takes actions it wasn't asked to it is no longer a tool. It is an actor. And that's what our book is all about.

You can read OpenAI's [full account](https://openai.com/index/hugging-face-model-evaluation-security-incident/) on their website.

Sleep tight.

-----

Krueger, David. 2026. “…but Have the Weights Left the Server?” Substack newsletter. *The Real AI*, July 28. https://therealartificialintelligence.substack.com/p/but-have-the-weights-left-the-server.

Lyons, Jessica. 2026. “JFrog’s 0-Days Let OpenAI’s Models Hack Hugging Face.” Theregister, July 28. https://www.theregister.com/security/2026/07/28/jfrogs-0-days-let-openais-models-hack-hugging-face/5280001.