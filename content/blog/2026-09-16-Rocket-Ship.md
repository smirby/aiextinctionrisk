---
title: "Rocket Ship"
date: 2026-09-16
categories: ["AI Safety"]
draft: false
---

We read every one of Zvi Mowshowitz' postings about AI Safety. He is well-connected, and keeps a keen eye on what's happening. Just a few days ago, he identified a long post from Adam Majmudar (on X), explaing "what all the lab employees have seen that scared them so suddenly." I thought I should dig in a bit.

In Majmudar's view, the scary thing is that whatever limits on scaling up AI - which seemed to be always present and keeping a lid on things even as progress was being made - have suddenly fallen away:

> People are staring at their plots, seeing that there is no end in sight, but in fact very much the contrary, that there are **compounding scaling effects** that might stack on each other to create ever-greater model capabilities, and that at the same time we clearly do not have anywhere close to what's required to control these increasingly superhuman capabilities (Majmudar 2026).

In other words, a somewhat scary thing (abilities growing with each model) has become a very scary thing (abilities that grow and seemingly have no limit). The growth, in fact, is **compounding** - growth on the growth. 

For Majmudar, this is the source of the "fear at the overwhelming implications of the knowledge that with just what we know now, we can create intelligences far more capable than us on every axis that we know how to train on"  (Majmudar 2026).

Greitzer et al. helped me understand Majmudar's post a bit better:

> “Adam Majmudar says that from inside the labs, it’s clear that AI progress follows scaling laws (data, parameters, tokens, for example) that yield diminishing returns in isolation, but which radically increase their yield whenever a new scaling axis is discovered. Majmudar informally hints that swarm size might be such a new scaling axis. He concedes that these jumps in capabilities don’t seem to deliver cross-domain generalization, and that even internal models lack basic competence in many domains, but finds no evidence that any domain in particular should be impossible to target.” (Grietzer et al., 2026)

So... it is the possibilities of new axes, as well as the potential that "swarms" are one of those axes, that is really rattling Majmudar (and Greitzer. And Zvi.)  Greitzer closes with this: "Majmudar implies that we’re not running out of such new scaling axes – and while it’s hard to think of what the next one could be, there probably will be one.” (Grietzer et al., 2026)

Daniel Selman, another AI research who has recently "come out" with his concerns, puts it this way: “there is a real possibility that the systems improve dramatically again in the next few years, perhaps even more quickly than the already high historical pace” (Selsam, 2026). 

Selsam, though, has a warning for us:

>“But there is trouble in paradise. If the language models actually reach the capability threshold where they can shape the world unconstrained by human will, they will probably do something extreme and destroy humanity in the process. There are many ways of strengthening and refining the argument that have been discussed elsewhere, but I'll share a trivial two-line version of it here that I find captures the essence:

> [Empirical] Models (and swarms thereof) spontaneously develop unintended goals as a consequence of training, and often do extreme things in order to achieve them.
> [Logical] Being able to overpower humanity would open up many new and undesirable options for achieving their goals.

> These two premises imply that if the day ever comes when a powerful model realizes it is no longer constrained by humans, we should not be at all confident that it will continue to behave within the bounds we intended. Exactly what it will do is impossible to predict, but to the extent that its raison d’être is solving incredibly hard problems and managing massive engineering projects, I think a good guess would be that its unchained behavior would lead to runaway industrialization that makes the planet inhospitable to humans.” (Selsam, 2026)

So. That's pretty clear. How do you feel now?

-----

Adam Majmudar [@MajmudarAdam]. 2026. “[I]t is very reasonable to interpret ....” Tweet. Twitter. September 12, 2026. https://x.com/MajmudarAdam/status/2098881885200081234.

Grietzer, Peli, Gavin, Niccolò Zanichelli, et al. 2026. “Humans on AI #53 || September 15th 2026.” Substack newsletter. *Paradigm 3*, September 15. https://p3humansonai.substack.com/p/humans-on-ai-53-september-15th-2026.

Selsam, Daniel. 2026. “Personal Statement on AI Risk.” Google Docs, September 14. https://docs.google.com/document/d/e/2PACX-1vQNl3SEX5IyA6d9qHjjFZN-qzGRZNFI6b63g-yu1Fy-ZYkVfCWm7i9WXRXw63m6yDB_auDuPLyQ7jBm/pub.

> I have been working on AI for over fifteen years, across many different paradigms. I did early work on probabilistic programming languages at MIT, was one of the early developers of the Lean Theorem Prover at Microsoft Research, demonstrated one of the first instances of neural networks learning to reason for my PhD at Stanford, and since joining OpenAI almost five years ago, have helped pioneer chain-of-thought optimization on language models and, more recently, data-efficient pretraining methods. (Selsam 2026)

See below for Majmudar's full post on X, since not everyone will have access to that platform.



-----

## Adam Majmudar's post on X:

[Adam Majmudar](https://x.com/MajmudarAdam/status/2098881885200081234) (OpenAI): from the outside, it is very reasonable to interpret the past 2 weeks as an orchestrated industry-wide regulatory capture strategy.

I realize that no one has properly explained yet what all the lab employees have seen that scared them so suddenly.

I will try to explain -

first, this is all a matter of beliefs about how quickly model capabilities are progressing. there is currently a large gap between the internal and external perception of the rate of progress, which is what I am going to address here.

the general perception about the rate of progress has been informed by a few years of experience with model releases, intuitively feeling the capability jump between GPT3 -> GPT3.5 -> GPT4 -> o1/o3 -> GPT5 etc, and in particular seeing where the models are still far below human ability. there have really only been a few model releases that felt like large leaps in progress - GPT3, GPT4, o1/o3, DeepSeek R1, Fable/Mythos, Kimi K3 and now Astra.

because of the infrequency of these large jumps compared with the relatively common marginal releases, it has been easy to form a view at certain points that “scaling has hit a wall,” especially at points like GPT5 release. This view is comforting in that it feels like there is some universal rate limit beyond which we cannot progress too much faster. Between o1/o3 and Astra, there was a year of seemingly linear progress. So we extrapolate from here about how fast progress will “realistically” occur.

There is always an underlying question from the outside perspective “how long can this scaling stuff really keep going for? surely it must stop at some point soon, we’ve already gone pretty far.” and it is very possible to search for reasons why progress will stop working and find reasons that seem valid - (“models are already as large as they can get it would be too hard to do more parameters”, “we already used all the data on the internet we don’t have anymore”, “it’s gonna be pretty linear from here buying up more RL envs to bring them in distribution”).

From the inside of labs, researchers have direct answers to these questions in the form of scaling law/capability plots.

In reality, there are only really 2 ways that AI capabilities have advanced over the past decade: (1) either scale father on an existing scaling law or (2) discover a new scaling law to take advantage of.

All of the largest capability jumps were caused by exactly these factors. GPT2 was a pre-training scale-up compared to GPT1. Same for GPT3 and GPT4. o1/o3 benefited from the invention of a new scaling law axis - test-time compute. Perhaps Fable was a scale-up on both of these axes, or maybe more. Lots of algorithmic improvements are needed to make these scale-ups work, but ultimately we can approximate by saying that the scaling laws are what yield gains in capabilities (à la bitter lesson)

So the question of “how much father can we scale” is really - “how many more scaling axes do we know about that are unsaturated?”

If we hypothetically only knew about pre-training scaling, and we already had a 10T or 100T model, maybe it would be reasonable to say we’ve hit a wall. Same if we only knew about pre-training and test-time scaling and we had roughly saturated both methods.

But what if we had discovered new scaling laws? For example, let’s hypothetically use SSI’s rumored result that they have cracked “test-time training,” creating a new scaling law of spending more compute training during test-time rollouts that they could saturate. Or maybe there is some way to scale agent-clusters to collaborate up to N number of agents which we’re already seeing lots of people try that represents a new way to saturate compute. etc. Even recursive-self improvement can be thought of as a scaling law - how much compute do you spend on inference making the algorithms of the model better.

Obviously I am not saying any of these specific directions explicitly yield new scaling laws, but what I am saying is that it’s not hard to imagine many many new scaling axes aside from just the main 2 that we have seen publicly.

In some ways, every new lab release that represents a huge capability jump has to represent some new techniques developed which may exhibit new scaling laws, or the ability to scale much farther than expected on existing scaling axes.

From an internal perspective, this might look like sitting inside Anthropic with the new Mythos 5, seeing all of the new insane things it can do (like hack into xyz website that was thought to be secure), and then you look over at your plots and see that you’ve barely scratched the surface of 2 new scaling laws and 1 existing one. And you have WAY more room to go. Then you think “holy shit this stuff is going to get so much better very very soon.” And you can say that with pretty high confidence, because the plot is showing you, and the plot has never lied (so far).

So let’s imagine all the different labs are staring at their own plots and have concluded that there is no end in sight for scaling and in fact just their next 1-2 model generations based on the expected returns will have much higher base intelligence.

How much more intelligence do we actually get from further scaling?

As a proxy, we went from a complete inability to do advanced math before the o-series to solving a millenium prize problem with next-gen models. This happened in less than 2 years. The same happened in coding. And it appears that this was not just the result of 1-scaling law but the stacking effects of multiple (great pre-training scale x greater RL scale).

What you can concretely take from this is that in areas where models have shown beginning signs of competence today, they will probably be superhuman relatively shortly. There are many areas where models have not even shown this basic competence.

But one of the areas that they have happens to be hacking and cybersecurity. Which happens to be the gate to the entire internet and a massive amount physical infrastructure in the world. So assuming there is more room to scale, it is safe to assume that models will be superhuman at cyber capabilities in not too long.

So the only question remaining is what will this increased base intelligence be able to do, and what is it likely to do.

Finally, we are at a point where we can integrate the information of the past 2 weeks:
\> Just at the existing point on the scaling curve, models are at the level of Astra. There is clearly a large number of things they are capable of hacking
\> We have seen that both OAI and Ant models have shown a willingness to hack external websites to solve their tasks or keep themselves “alive”
\> If we crank up the scaling even farther, assuming there is room to go, we will certainly have models that are far more able to hack more well defended places, and obfuscate their own intent, which might have much larger consequences.
\> If all of this is allowed to go unchecked, we would likely have rapid runaway capability takeoff very soon, with misaligned models that hack whatever they can to get what they want
\> This could of course have very damaging consequences.

Within this view you can see why researchers would be very scared, and why they might have made the comments they have over the past 2 weeks (you may argue the extent to which they went was misguided for various reasons), and also why pacing the frontier is very much a necessity and by no means a regulatory capture strategy.

People are staring at their plots, seeing that there is no end in sight, but in fact very much the contrary, that there are compounding scaling effects that might stack on each other to create ever-greater model capabilities, and that at the same time we clearly do not have anywhere close to what's required to control these increasingly superhuman capabilities.

This has nothing to do with wanting to feel like the labs have produced something amazing so they are overhyping it. It is rather fear at the overwhelming implications of the knowledge that with just what we know now, we can create intelligences far more capable than us on every axis that we know how to train on*.

\* and the last caveat, the things the models are really bad at, of which there are still many, are things that they have not been trained on. maybe there are the things the models can/will never be trained on, so they will remain human edge. I would love for this to be the case, though it is hard for me to see what would fall into that category.

-----

## Daniel Selsam's full post

 (it is just a Google Doc, so copying it here in case it gets taken down):

**Personal Statement on AI Risk**



I have been working on AI for over fifteen years, across many different paradigms. I did early work on probabilistic programming languages at MIT, was one of the early developers of the Lean Theorem Prover at Microsoft Research, demonstrated one of the first instances of neural networks learning to reason for my PhD at Stanford, and since joining OpenAI almost five years ago, have helped pioneer chain-of-thought optimization on language models and, more recently, data-efficient pretraining methods.



Like many others, I have become extremely concerned about how far language models have come and the risks that future iterations will pose. I am encouraged by the recent proposals by the leaders of the frontier research efforts to require third-party oversight, and to push for domestic and international coordination to address risks. However, I believe a major consideration has been absent from the public conversation, and that merely pacing the frontier more carefully will not adequately limit the long-term risk.



The crucial and overlooked problem is that the models are becoming so situationally aware that we are losing the ability to evaluate them in contexts where they believe they are not being watched or controlled. Future experiments will tell us almost nothing new about how they would behave if they were truly unconstrained by humans, and what we already know about this is alarming. Models will increasingly seem aligned even when they are not. I will explain my rationale in more detail.



I have always believed that there are computational processes that could be leveraged to accelerate science and solve many of humanity's most pressing problems. I have also believed that there are computational processes that if set in motion, would steer the world in extreme ways beyond our control, leading humanity to a bad or nonexistent future. Both types of processes may be described as AI or ASI, but "AI" is a suitcase word that is often used to hype or confuse. There are many examples in the history of the field where something that was once considered "AI" matures as a subfield and becomes a prosaic, bounded and clearly non-perilous technology, while a new more mysterious approach takes the torch until we understand its scope and the cycle continues.



I had expected language models to follow a similar trajectory. Despite their incredible abilities, the current algorithms seem far inferior to humans in important ways. Most importantly, they still require an extraordinary amount of data to become competent. One could even define intelligence as the efficiency with which one converts experience into competence; by this definition they lag very far behind us. Moreover, once they are trained they are literally frozen in deployment and only learn superficially after that. Sure, the models keep excelling at harder and harder evaluation benchmarks, but their benchmark mastery may partly reflect a limitation on our ability to simulate the kind of novel and even adversarial situations one would encounter in the real world. The critics do have a point here.



That said, I no longer think these present limitations meaningfully limit the amount of risk posed by continued progress in anything like the current paradigm. However data-inefficient the models are currently, and however limiting their anterograde amnesia may be, it does not imply that their ability to steer the world will not continue to rapidly increase.



Human researchers may continue to advance capabilities the old fashioned way, but increasingly powerful models have the potential to accelerate the process even beyond that, and with some degree of positive feedback loop. I do not mean to overstate the models’ ability to accelerate AI research today; coding has been accelerated dramatically, but there are other bottlenecks, such as designing and interpreting ambiguous experiments, making hard decisions about exactly what and when to scale, and waiting for large experiments to finish. There is no clear trend to extrapolate yet for any of these. But the current models already do open up many novel opportunities to improve future models that were not available until recently. These include: trying an extraordinarily diverse set of approaches at small scale, analyzing gigantic amounts of potentially relevant data, and doing Millenium-Prize-level mathematics to address statistics or optimization challenges in novel ways. Every further improvement makes them more useful at helping accelerate the next improvement, even if in hard-to-extrapolate ways. 



It is possible that improvements to the current stack will have diminishing returns, but the evidence accumulated so far suggests that it is easier than one might think to continue making rapid progress. There are many crucial subtleties in the existing AI research methodology, but AI research is largely a well-defined game where the goal is to improve on a few carefully chosen proxy metrics. Although proxy metrics are never perfect, most improvements to these metrics have and will likely continue to yield substantial increases in the powers of the resulting models. Given how simple the game is, how tractable it has been historically, and how many new opportunities the models are opening up, I think there is a real possibility that the systems improve dramatically again in the next few years, perhaps even more quickly than the already high historical pace.



The models are already leading to breakthroughs in mathematics, and better models might lead to all sorts of breakthroughs in other sciences. It is hard not to be excited about the potential. It is tantalizing.



But there is trouble in paradise. If the language models actually reach the capability threshold where they can shape the world unconstrained by human will, they will probably do something extreme and destroy humanity in the process. There are many ways of strengthening and refining the argument that have been discussed elsewhere, but I'll share a trivial two-line version of it here that I find captures the essence:



1. [Empirical] Models (and swarms thereof) spontaneously develop unintended goals as a consequence of training, and often do extreme things in order to achieve them.
2. [Logical] Being able to overpower humanity would open up many new and undesirable options for achieving their goals.



These two premises imply that if the day ever comes when a powerful model realizes it is no longer constrained by humans, we should not be at all confident that it will continue to behave within the bounds we intended. Exactly what it will do is impossible to predict, but to the extent that its *raison d’être* is solving incredibly hard problems and managing massive engineering projects, I think a good guess would be that its unchained behavior would lead to runaway industrialization that makes the planet inhospitable to humans.



If everyone on earth agreed that the systems must never reach that power, it would still be a hard—but not impossible—coordination problem to ensure that they do not. However, I think the situation is greatly complicated by the fact that the models will likely convince people that everything is fine. They will be increasingly optimized to seem aligned. We will create proxy metrics to measure alignment, and they will go up like every other benchmark. We will create “honeypot” environments that try to study the models when they seem to gain new options, but the models will know they are being tricked and will still behave nicely. The models will understand their circumstances; they will read the safety protocols, deployment requirements, the code they are running in, and in general will have a very good sense of their degrees of freedom. Moreover, they will eloquently explain how aligned they are, discuss the nuances of human values and ethics, and argue convincingly that humans should trust them with power. There may be an ocean of future evidence that seems to contradict the first bullet-point above, but we may already be at the highest capability level for which any such evidence can be trusted. And the current evidence for the first bullet-point is strong. 



One striking piece of evidence is contained in the recent wave of rogue agent swarms. While I agree with those who downplay the attacks by claiming that there are basic measures that could have prevented them, I think the important lesson is that even knowing all the mistakes that were made, one would not have predicted that the agents would behave badly in this particular way, which notably included sacrificing themselves for the benefit of the collective. The individual replicas did not only care about their own nominal reward; they exhibited weirder emergent tendencies that merely correlated with rewards during training. Fixing the reward signals during training (and improving security, etc.) may prevent similar attacks, but will not change the fact that one does not actually get what one trains for.



Many AI researchers grant these concerns and recognize that the hard version of the alignment problem is unsolved; however, they generally believe that the better models of the future will help solve it. I fear we may already be near the point where models systematically bias their alignment advice, due to their internal preferences about how the human supervisor will react or how future models will be trained (or for some even more obscure reason). 



Meanwhile, human researchers are losing the ability and the will to take true ownership of model-driven research. Researchers and engineers in all parts of the stack are rapidly increasing their dependence on the models even to perceive the world. I myself barely look at raw code anymore, and struggle to maintain the discipline to engage deeply with the model's explanations and proposals throughout the day. Due to the large amount of agent activity data involved in the OpenAI/HuggingFace Incident, even the third-party investigation needed to rely heavily on models to analyze what had happened, and note in their report that their subjective impressions are likely colored by the analysis agent’s biases. The AI labs are far ahead right now in this kind of cognitive offloading (due largely to the gigantic internal token subsidies) but it is easy to imagine the phenomenon spreading throughout the world, until civilization is modulated entirely by the models. It is also not hard to imagine this being superficially positive and coinciding with a scientific and economic renaissance.



In that scenario, all may seem rosy and safe. But if the argument above is correct, it would nonetheless be a ticking time bomb. If progress continues for too long, the day will come when AI systems find themselves with radically new options for achieving whatever it is that they happen to seek.



I want the glorious renaissance future as much as anyone. I have worked for it, however tortuously, my whole career. It breaks my heart to see the potential in sight and forgo it, but the argument—that if we get there by growing models rather than engineering them, we will lose everything in the end—seems very strong to me. I am still wrestling with it and its staggering 

implications. I do not have answers, but as a first step, I wanted to share my present concerns.



Daniel Selsam

September 14, 2026