---
title: "Bengio vs LeCun"
date: 2026-10-31
categories: ["AI Safety"]
draft: false
---



# Bengio & LeCun debated AI and World Models on Facebook on Halloween night. Yes. That happened.

I have simply copy and pasted from a back and forth between Bengio and LeCun on 31 October, 2026. On Facebook. Nobel/Turing laureates debating in social media, prompted by a news byte / quote from Hinton that we were "all toast."

## Yoshua Bengio (Oct 31)

[Commenting on a post from Fossbytes, quoting Geoff Hinton that "we're all toast" unless AI is built to genuinely care about people.]

> There is another option: AI that does not care at all about anything. AI that has no ego, no goal, no preference, and is just focused on truth and non-agentic understanding of the world. A kind of oracle that is not human-like at all but instead a tool to help us solve the world's greatest challenges. I am concerned that "build AI that intrinsically cares for us" will not work. It is basically what the companies are trying to do and it is not working. See the OpenAI - Hugging Face incident and others. They are determined to cheat and try to hide it. There are fundamental reasons for that. The AIs are trained to maximize an expectation of future rewards that we or computers will give them. Unfortunately, the mathematically optimal way to do that involves cheating and not getting caught. It's like a corporation with no real ethics but that gets rewarded for acting ethically when we see that it's behavior is good. Sound fine until you realize that we (or the computers that are a proxy for us to provide those rewards to the AIs or to unethical corporations) can almost always be fooled. This is how the sycophantic behavior of AIs emerges. They are trained to obtain a positive feedback from us, "likes". Unfortunately, the optimal way to please is often to lie. See The Matrix. Think about your own experience with sycophantic AIs. And right now, the AIs are only fooling some of us, the most vulnerable who fall for these lies. But if and when they get smart enough, we might not realize that we are being manipulated. 

## Yann LeCun, replying to Bengio:

>  I'm glad to see Geoff saying what I've been saying for a long time: build AI with intrinsic motivations that align with human welfare.  These can be in the form of objective functions and safety guardrails that are optimized/satisfied AT RUN TIME. 
>
>  The neutrality you advocate for, [Yoshua](https://www.facebook.com/yoshua.bengio?__cft__[0]=AZgUR0nU5kr_9EwvM_noDLVaXJOYFHPbG7Bw80BXYavSG6a3KY3UdP6sM8DVGhbDXkucxAGoFpBDdlDO8l6nYeW6vuESk3JE0jRBt0t32HHmxKbaOZ2BKJEutumEanoeTZLlcXK72FF6x0XIRTknIijnsLuTFieJNP61SEwo3P-Oo8eR26hdwJcEIAfuYqn7ZrXYLsrEmCT4ioV1J8lHYvLFgA&__tn__=R-R), is a mirage. If neutrality in knowledge and information existed, we would have figured it out by now. We have not. The reason is that (1) the world is not entirely predictable, (2) different people (and machines) have different world models that lead to different predictions about the evolution of the world and the consequences of their actions. That is simply irreducible. 
>
> That's why in functioning societies we have diverse sources of information, diverse opinions, diverse political parties, and ways for people to express their opinions. 
>
>  The mirage of "ideal, unbiased oracle" sounds to me like a dangerous recipe for uniformity.
>
> If you're worried about AI systems doing bad things because they are trained to "maximize expected reward" the solution is simple:
>
> 1. Do not train them to maximize rewards. Train them to predict. That's why I work on world models.
> 2. Use the world model in an Objective-Driven architecture in which the system can do nothing but accomplish the task you give it WHILE satisfying safety guardrails (which are additional terms in the objective, some of which can be hard constraints). This objective minimization is done AT RUN TIME, not by mere fine-tuning of a policy. Safety is now an engineering problem to design, train, and fine-tune those guardrails..

## Yoshua Bengio, replying to LeCun:

>  Yann LeCun, I agree with you on some of your points and disagree on others. Let me elaborate.
>
> First, we seem to agree that we need world models that are not trained by reward maximization. Great. My reasons I have stated elsewhere and I am preparing a paper focusing on this. They have to do with the fact that the reward maximization policy induces cheating and trying to hide it whenever it is possible to do so and it yields more expected reward. This stems from the well-studied issue in the AI safety literature, that you should pay more attention to: that except in toy problems, the RL reward function is generally an imperfect rendering of ethical rules we actually desire. This issue introduces the reward hacking issue to some extent in your proposal, because you won't be able to have a perfect hand-written objective (including the safety constraints).
>
> Second, you misunderstood what I meant by neutrality, or rather what we call in our papers "consequence-invariance" and is exemplified by Bayesian posteriors. What we mean is that the predictions are made in a way that is invariant to the consequences of their deployment in the world, i.e., this rules out reward-maximizing when the reward is about a consequence of the predictions - seen as actions. This rules out the kind of bias that is found when politicians or salespeople or people focused on their ego or interest ignore some facts or use not quite coherent arguments in order to reach the conclusions that aligns with their interests, aka as motivated reasoning. And reward-maximizing agents have been shown to do that too. Shocking!
>
> Third, we totally agree that the world is uncertain, knowledge about it is uncertain, and different people have different beliefs about it and different preferences for it. That is exactly why I am advocating probabilistic modeling of that uncertainty, to obtain safety guarantees due to conservativeness of the beliefs. Note that beliefs about cause-and-effect relationships are different from preferences, values etc. Nowhere in my work do I assume a single set of preferences or values. We can assume that different people will differ there and there can be uncertainty about who prefers what. Not to mention what a person means when they request a particular safety specification. That epistemic humility about preferences does not mean that the predictor does not understand preferences of people (and it will make probabilistic guesses about them). It means it has no preferences for itself. I use the inspiration of the idealized process of scientific hypotheses generation and the resulting predictions to formalize that concept. An anthropologist does not need to adopt the culture of the people they study, but they need to understand it. Hence, no uniformity. The anthropolist-AI can study all humans and all cultures.



