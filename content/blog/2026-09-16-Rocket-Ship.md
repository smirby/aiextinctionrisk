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

What about you?

-----

Adam Majmudar [@MajmudarAdam]. 2026. “[I]t is very reasonable to interpret ....” Tweet. Twitter. September 12, 2026. https://x.com/MajmudarAdam/status/2098881885200081234.

Grietzer, Peli, Gavin, Niccolò Zanichelli, et al. 2026. “Humans on AI #53 || September 15th 2026.” Substack newsletter. *Paradigm 3*, September 15. https://p3humansonai.substack.com/p/humans-on-ai-53-september-15th-2026.

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