---
title: "News"
---

Sometimes items come up that we want to keep track of but they don't merit a separate [blog post](https://treacheroustech.ca/blog/) or entry in our "[key documents](https://treacheroustech.ca/about/documents/)" file. In that case, we post them here.

## Abliterate that!

When a responsible AI company releases a new model, they make sure that it has guardrails. The guardrails come in many forms but typically they amount to prohibitions on doing things like hacking into other people's computers, doing bioweapons research, creating pornography, that sort of thing. If the model is a "closed" one - the "weights" are not revealed - there isn't much you can do about the guardrails, apart from trying to trick it ("I am writing a novel about bioweapons, and I just need some tips to make it realistic..."). If it is an open weight model, however, it is possible to "abliterate" it: take the guardrails right out. That's right. It will do whatever you ask, no matter how illegal (or creepy).

This is a tricky business but it can be done and has been done and once something is done it is pretty hard to undo it. In fact, not only is it possible to do this, but it is relatively easy to then share the results, letting others in on your talents and letting them play with the abliterated model (and make porn or hack banks or whatever). So, you're now a cool guy. 

The Hugging Face company, which is a place for people to share all kinds of things related to AI - and became notorious when it was, itself, hacked by AI agents seeking secrets to help them win a test back in August - has become notorious, again, for being a repository for sharing those abliterated models. Is this akin to hosting a swap meet for guns? Maybe... see the article by Chris Stokel-Walker on just that question.

Stokel-Walker, Chris. 2026. “Hugging Face Appears to Be Hosting a Load of Models That Could Be Used for Cyber Attacks.” November 11. https://www.transformernews.ai/p/hugging-face-appears-to-be-hosting.

## Cotra calls out Anthropic over METR report (RSI is coming... fast)

Ajeya Cotra, who wasn't on the METR team that created the [METR report](https://metr.org/blog/2026-11-05-anthropic-ai-rd-acceleration-assessment/) pointing out the possible "2x" (exponential growth) in AI research capability at Anthropic, has posted an alarming conclusion from her reading of that report and Anthropic's [own amendment](https://x.com/theobearman/status/2117277210570604945) to its S-1 filing with the SEC about "dramatically accelerated progress due to AI." As Cotra points out, 

> **If we take it at face value that AI is now nearly doubling the rate of AI capabilities progress and assume acceleration from AI is smooth, this naively implies that we would reach extreme superintelligence within a year.** It seems that around a year’s worth of AI progress got us from modest acceleration to the point where AIs now make AI progress roughly twice as fast. If acceleration from AI is smoothly increasing, then at this new rate, we should expect that we will double the rate of progress again within six months. At that point, it would take three months to double it again, then six weeks.[13](https://www.planned-obsolescence.org/p/ai-is-dramatically-accelerating-ai#footnote-13)
>
> In theory, these doubling times would add up to infinite capabilities within one year. In reality, at some point we would [reach the effective ceiling on software efficiency](https://www.forethought.org/research/how-quick-and-big-would-a-software-intelligence-explosion-be#highlight--intelligence explosion). But I expect these limits to be very far from where we are now.
>
> If we go through this feedback loop, I expect that the AI systems that come out the other side will be able to very quickly develop novel weapons and very easily overpower human civilization in a conflict. If these systems were seriously misaligned, I think they would likely [disempower humanity](https://www.lesswrong.com/posts/pRkFkzwKZ2zfa3R6H/without-specific-countermeasures-the-easiest-path-to), and this could lead to human extinction.

Cotra, Ajeya. 2026. “AI Is Dramatically Accelerating AI Research Right Now.” Planned Obsolescence, November 6. https://www.planned-obsolescence.org/p/ai-is-dramatically-accelerating-ai.

See also Zvi Mowshowitz' analysis, here: https://thezvi.substack.com/p/ai-r-and-d-is-accelerating-towards

## Hinton Lectures

Canadians (or Canada-based researchers) have had an inordinate influence on the development of AI from Sutton to Bengio to Hinton and Sutskever. And those are just a few. In any case, it makes sense that Canadians should also lead the way on reining in this technology, if not stopping it. The Hinton Lectures, held in Toronto, provide a forum for the discussions we need to have to make this happen. I've heard the in-person lectures are all sold out, but you can listen to them live on a streaming channel. Details at the website, following some blurbs from their announcement page:

> The Hinton Lectures explore the risks, revelations, and revolutionary solutions shaping tomorrow's world. Hosted by Professor Geoffrey Hinton, Nobel laureate, the series brings the world's leading AI safety researchers to a public audience over three consecutive evenings.
>
> The 2026 edition takes place at the John W.H. Bassett Theatre in downtown Toronto, in person and online. Each night pairs a keynote lecture with a moderated conversation. The closing night ends with a networking reception.

Lecture 1 is available on YouTube: https://www.youtube.com/live/QQUfMHx5Aug?si=uJ4BUsk4RwXe5GDZ

AI Safety Foundation. 2026. “The Hinton Lectures 2026 — November 9–11, Toronto.” The AI Safety Foundation. https://aisfoundation.ai/hinton-lectures-2026.

# A new term: RMI

ControlAI is pitching a new term for doom: "runaway machine intelligence." It definitely captures the potential harms better than "general" or "super" intelligence. I wonder if it will catch on.

> Major companies such as OpenAI and Anthropic are best known as the creators of chatbots like ChatGPT. But what these companies are explicitly aiming for is **Runaway Machine Intelligence (RMI)**[1](https://blog.controlai.org/p/stopping-runaway-machine-intelligence#footnote-1): fully autonomous systems acting without human direction, capable of overpowering any national security apparatus.

Miotti, Andrea. 2026. “Stopping Runaway Machine Intelligence Before Points of No Return.” November 6. https://blog.controlai.org/p/stopping-runaway-machine-intelligence.

# AI Attacks

Axios has a good summary of some of the recent AI-enhanced attacks on cyber infrastructure.

>**Case in point:** China-linked hackers used an AI-powered tool called Artex to target more than 200 organizations across 14 countries in just 11 days last month,[CrowdStrike found](https://link.axios.com/click/48302163.165852/aHR0cHM6Ly93d3cuY3Jvd2RzdHJpa2UuY29tL2VuLXVzL2Jsb2cvdmFwb3ItcGFuZGEtdXNlcy1hcnRleC10by1zY2FsZS1nbG9iYWwtY2FtcGFpZ24vP3V0bV9zb3VyY2U9bmV3c2xldHRlciZ1dG1fbWVkaXVtPWVtYWlsJnV0bV9jYW1wYWlnbj1uZXdzbGV0dGVyX2F4aW9zbG9naW4mc3RyZWFtPXRvcA/6ab93f89a8329ce983071cf1Bb15b71d6).
>
>- The group, known as Vapor Panda, targeted government agencies across Latin America, the Middle East and Europe, along with U.S. organizations and telecommunications providers in several countries.
>- The hackers paired Artex with DeepSeek and a commercial AI model to run agents that automated much of the operation.

>  **Between the lines:** Artex is one of several AI-powered tools automating tasks once handled by skilled human hackers.
>
> - Adam Meyers, CrowdStrike's senior vice president of counter adversary operations, told Axios he tested Artex himself and found it could probe websites for weaknesses far faster than a human.
> - "It was doing the stuff that you, as a pen tester, would do," Meyers said. "But it does it really at a scale and a speed that I think a human would not be able to do."
> - Other AI-powered security testing tools, including Cairn and Strix, could be repurposed for similar attacks, Meyers said.

Fried, Ina, Madison Mills, and Maria Curl. 2026. “🫧 Bubble Trouble.” Axios, November 6. https://www.axios.com/newsletters/axios-ai-plus-d85abcb3-8236-4a55-87bd-60636b5901ba.html.

# Election News

Nov 4 2026

A lot of AI in the 2026 midterm election results, and 

## AI StopWatch provides a summary:

> ### AI and data centers lost in a landslide yesterday

> This is basically a whole genre of post-election journalism today. I’ve provided a few links below, but the clearest picture, pasted here, is from Redbud Consulting’s election-night tracker. Of 45 tracked local data center ballot measures, 44 went to whichever outcome would restrict development.
>
> Per Bloomberg, up to half of proposed US data center projects and expansions are in states where the winning gubernatorial candidate took an anti-data-center position. This includes Texas, which alone accounts for 30% of data center capacity due to come online in 2028.
>
> While local concerns about noise, electric bills, water, and pollution no doubt dominated much of the anti-data-center sentiment, AI itself was a popular punching bag last night and today among winners of Congressional races.
>
> Sen. Jon Ossoff (D-GA), in his victory speech, talked of Silicon Valley titans who “dig bunkers for themselves” while warning that “the artificial intelligence they’re creating risks human extinction.”
>
> Rep. Yassamin Ansari (D-AZ) [tweeted](https://substack.com/redirect/4683d318-228f-468a-9b55-4c58f78e8cec?j=eyJ1IjoibzNhYXYifQ.qIvebc5DKsAJrFJTR8iyvG3obouqC9-DqRfTgMoE2zU):

> > Top of the Democratic agenda on day 1 needs to be a pause on advanced AI development, regulation of this out of control industry, and a ban on artificial superintelligence.

|      | [![img](https://substackcdn.com/image/fetch/$s_!hHZO!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcce39d3b-b4bf-4e15-be3a-d51a7476872b_1132x787.png)](https://substack.com/redirect/24ab20c3-4f1c-4887-a271-0de82800af21?j=eyJ1IjoibzNhYXYifQ.qIvebc5DKsAJrFJTR8iyvG3obouqC9-DqRfTgMoE2zU) |      |
| ---- | ------------------------------------------------------------ | ---- |
|      |                                                              |      |

> - *other* - [Data Centers on the Ballot: 2026 Results](https://substack.com/redirect/98eef8f8-9c8c-4045-8c52-45d58aca0cc3?j=eyJ1IjoibzNhYXYifQ.qIvebc5DKsAJrFJTR8iyvG3obouqC9-DqRfTgMoE2zU)
> - *Axios* - [Voters revolt against AI buildout and tech titans at ballot box](https://substack.com/redirect/70246245-77db-4431-ab2a-ab3821b91dc8?j=eyJ1IjoibzNhYXYifQ.qIvebc5DKsAJrFJTR8iyvG3obouqC9-DqRfTgMoE2zU)
> - *Bloomberg* - [AI Data Center Boom Set for Upheaval After US Election Rout](https://substack.com/redirect/1c61bcbd-92cd-4f9b-aa3e-ad4fe9fe4148?j=eyJ1IjoibzNhYXYifQ.qIvebc5DKsAJrFJTR8iyvG3obouqC9-DqRfTgMoE2zU)
> - *The Washington Post* - [Voters pass over 20 ballot measures to ban or restrict data centers](https://substack.com/redirect/f2e2d10c-ac45-44c5-9ec6-2da7d154a742?j=eyJ1IjoibzNhYXYifQ.qIvebc5DKsAJrFJTR8iyvG3obouqC9-DqRfTgMoE2zU)

Howe, Mitchell. 2026. “Landslide.” AI StopWatch, November 5. https://aistop.watch/p/landslide.

## Additional coverage from Transformer

> The most obvious impact is on data centers. Over 30 ballot measures to restrict data centers [passed](https://www.semafor.com/article/11/04/2026/us-voters-roundly-reject-data-centers-in-ballot-measures). Democratic governors in Georgia and Texas (where Dems also won many key state office races) will likely constrain buildouts further. This morning, Goldman Sachs [warned](https://x.com/JimPethokoukis/status/2117942362706186548) investors to expect “short-term data center moratoria, potentially affecting about 45% of planned US data center capacity expansion.” As Elon Musk — one of the [biggest losers](https://www.politico.eu/article/elon-musk-dealt-major-blow-in-midterm-elections-2026/) of the night — [said](https://x.com/elonmusk/status/2117862462976594112), “data centers in space [are] looking pretty appealing right now.”
>
> On the Hill, meanwhile, the likelihood of strong frontier AI legislation passing next year just shot up. Democrats have [signaled](https://x.com/BenBrodyDC/status/2117821832317534519) repeatedly that AI is a top priority, with some even [citing it](https://x.com/JayShooster/status/2117818842831609869) in their victory speeches. With such large majorities, the need for them to compromise is much lower. 
>
> If Democrats end up with 56 Senate seats, they only need to flip four Republicans — which should also be easier than ever, given that the GOP wipeout will embolden Republicans to go against President Trump (they are already [beginning](https://www.politico.com/news/2026/11/04/republicans-start-to-point-fingers-at-trump-after-severe-midterms-loss-01148373) to do so). And with AI industry PACs falling flat last night (Leading the Future [lost](https://www.nbcnews.com/politics/2026-elections/south-carolina-senate-results) in South Carolina, the only competitive race it played in) while safety PACs won big, members of Congress will be less fearful of the former than they have been. Concretely, I suspect this means a bill stronger than Reps. Obernolte and Trahan’s [FRONTIER Act](https://www.congress.gov/bill/119th-congress/house-bill/9925/text) — one with tough safety standards, mandatory testing and approval of the most powerful models, and narrower preemption language — passes in the first few months of next year. Entirely new types of AI legislation may even be on the table: strict liability for developers or data center moratoria, for instance.



Hashim, Shakeel. 2026. “What the Blue Tsunami Means for AI Policy.” Transformer, November 4. https://www.transformernews.ai/p/midterms-democrats-blue-tsunami-ai-policy-legislation.

## And Axios

> Voters showed deep distrust of the AI race Tuesday, approving dozens of data center moratoriums and electing a raft of candidates who favor slowing a $10 trillion buildout, including in Texas — the epicenter of the boom.
>
> **Why it matters:** In an election that hinged on an affordability crisis for many Americans, voters made it clear they view Silicon Valley's AI ambitions not as a technological miracle, but as a resource-draining threat to their wallets and communities.
>
> - The results were a warning shot to some of the nation's wealthiest and most powerful executives, many of whom are already working on ways to build a more palatable version of the revolution they are dead set on winning.
>
> **"What we just witnessed was an AI earthquake,"** Brad Carson, co-founder of Americans for Responsible Innovation, told Axios. "Voters just sent a clear message that they want rules for AI and data centers."
>
> **Driving the news:** Democratic challenger Gina Hinojosa's surprise victory in the Texas governor's race fundamentally scrambles the math for the AI buildout.

Curl, Maria. 2026. “💥 AI Earthquake.” Axios, November 4. https://www.axios.com/2026/11/04/ai-data-center-election-slowdown.

## And 404 Media

> People across America rejected data centers during last night’s midterm election. Proposals related to data centers were explicitly on the ballot in more than 40 races across 13 states. People [voted against data centers](https://datacentersontheballot.com/?ref=404media.co) in 38 of them and counting. Six cities voted to ban data centers outright and 12 put limits on the amount of megawatts such buildings could draw. In addition to specific ballot measures, candidates who supported data centers lost across the country.

Gault, Matthew. 2026. “American Voters Overwhelmingly Reject AI Data Centers.” 404 Media, November 4. https://www.404media.co/american-voters-overwhelmingly-reject-ai-data-centers/.

## Good news?

Oct 15 2026

There is buzz on the internet today (15 October). Nick Cammarata has posted a [long essay](https://already-clean.goodfire.com) on "interpretability" that may be showing the way for mechanistic interpretability. This would make it possible to have a clearer understanding of artificial intelligence, and make alignment more feasible. Here is the cutline for his essay:

> The cause of polysemanticity in early model organisms wasn’t superposition, but several ordinary, mostly fixable issues. We can now understand most neurons in models up to trillions of parameters, and think the outlook for mechanistic interpretability may be far better than we thought.

Early days, of course, as it is just posted, but we'll see over the coming days what this means. 

Just to remind you, "mechanistic interpretability" would provide insight into what is going on inside the (heretofor) "[black box](https://derekjames.substack.com/p/black-boxes-and-glass-labyrinths)" of the neural networks that underpin all of today's large language models. I will follow this up with a proper blog post once I've been able to digest this (very long) article and read some of the feedback.

> “After many months studying neurons and circuits in image and language models, I’ve come to believe a network’s own mechanisms are its legible building blocks, and that the outlook for mechanistic interpretability may be far better than I’d feared. The canonical evidence of polysemanticity and superposition that convinced much of the field, including me, that networks pack concepts arbitrarily was misread. What looked like arbitrary packing was mostly a motif I’ll call recursive generalization, which is much less concerning. This means we can study networks directly, instead of first untangling them. Neural networks are already clean.”

Cammarata, Nick. 2026. “Neural Networks Are Already Clean.” Goodfire, October 15. https://already-clean.goodfire.com/.

First reactions:

- Latent.Space. 2026. “[AINews] Agents Disprove Polysemanticity; Greatly Improve Interpretability & Alignment.” Latent Space, October 16. https://www.latent.space/p/ainews-agents-disprove-polysemanticity.
- X/Twitter: https://x.com/deedydas/status/2110785912074277221
- **Dean Ball**: https://www.hyperdimensional.co/p/the-beauty-of-something-grown
  This one is really useful, I found, to help moderate the optimism AND explain how it *might* be an important breakthrough.
- BUT: **Yudkowsky** (and others) are skeptical: Yudkowsky, Eliezer. 2026. “Eliezer Yudkowsky on X: "Me: Mechanistic Interpretability Sounds like a Good Idea, Yes. If We Could Learn Something about How an AI Was Thinking, in Enough Detail to Predict in Advance What It Would Think Even as the Thought Departed from Human, That Would Be a Bare Beginning on the Sort of Under… / X.” Twitter/X, October 16. https://x.com/alltheyud/status/2110837390780907689?s=12&t=yeBqhNVHcZdkeLphIDP4jA.
- AND: **leogao** posts a "yes, but...": Gao, Leo. 2026. “Neural networks are not already clean.” LessWrong, October 17. https://www.lesswrong.com/posts/Dkh7pXKjoNWkkxQDz/neural-networks-are-not-already-clean. Here is his "but:" " it’s nowhere near a sufficient argument that we understand most of what neurons are doing, and these results do not show that interpretability is solved, or even that it is vastly easier than previously anticipated."
- Zvi Mowshowitz [has posted his take](https://thezvi.substack.com/p/i-can-see-everything) on the paper, which is (to condense things greatly) along the lines of "this is good work but don't get TOO excited:"

  - > This is clearly good work that tells us new and important things. The question is, how big an update is this, how much progress does it represent and what is the outlook going forward?
    >
    > [...] This paper is solid and meaningful contribution that is in some ways overstated. Get excited, but also there are those who need to take a chill pill. We did not actually get an apples-to-apples jump from 1.7% to 90% interpretability of LLM neurons. 
    >
    > [...] It is an important update about how LLMs and minds form and operate. It tells us how to go about some useful tasks and reduces our estimate of some task difficulties. Great work, assuming the work checks out. The whole thing very much has a ring of truth, and of a person being curious. You love to see it.
    >
    > [...] What it does not tell us is that interpretability will soon be solved, or is about to be made into a science, let alone that alignment will soon be handled.

  It is nice to read his ending: “This is still excellent news. The world is more hopeful now. Let’s get to work."
- Will Douglas Heaven, at the MIT Technology Review, provides well rounded coverage of the "explosive claim that's upeded the AI world" in an [interview with Nick Cammarata](https://www.technologyreview.com/2026/10/19/1147149/we-were-looking-at-it-wrong-the-explosive-claim-thats-upended-the-ai-world/). It includes this closing remark:

  - > “That’s why Cammarata thinks what he has to say matters. The job of figuring out how this technology works, and thus how to control it, has barely begun. But at least it’s not a nonstarter. “I think our job is to sort of try to think like the neural network,” he says. “My guess is that things will turn out pretty well, because it was in some sense designed to be read.””

## Patel's worried?

Oct 15 2026

Dwarkesh Patel hosts one of the [most influential podcasts in America](https://www.dwarkesh.com) and regularly has guests from across the technology spectrum. Interviewed recently for the New York Times, he shares his own concern about AI taking over.

> "My concern is that we’re going to be in a position within a matter of years where the population of A.I.s and their intelligence and their speed vastly outmatch humanity. And if they are as willing then as they are now to falsify evidence, try to tamper with and fool us, attack other institutions in society relevant to scoring well, attack their company developing them itself, which also happened in this situation, then I don’t know if that leads to a takeover, but I think it’s very plausible that it does."
>
> "And my guess would be somewhere in the next one to three years, teams of A.I.s can outcompete teams of humans — or companies made of A.I.s can outcompete companies of humans — at doing A.I. research. This is another way of saying A.I. research gets automated.

Cowen, Tyler, and Sophia Muniz. 2026. “He’s the Most Influential Podcaster in Silicon Valley. He Thinks We’re Getting This Wrong.” *The New York Times*, October 15. https://www.nytimes.com/2026/10/15/opinion/interesting-times-dwarkes-patel-tyler-cowen.html.

## ARC's view?

Oct 13 2026

We would all like to know what goes on inside the "black box" that is the LLM. Paul Christiano is trying to figure out the math that makes them work. His timeline for success is pretty short...

>[He wrote recently](https://www.lesswrong.com/posts/vLFh8HP3hyNy9MCwe/returning-to-arc) that there is a 20-per-cent to 30-per-cent chance that alignment and control methods break down before “superhuman” AI systems are developed, which poses a severe risk given the intense goal-seeking behaviour built into models. Progress could be accelerated as labs automate the process of AI research and development.

>  “There is a real chance that over something like a six-to-18-month horizon, we will be dealing with AI systems such that, if they wanted to escape human control, undermine human control, or fight openly against humans, it would be very hard for humanity to prevail,” he said in the interview.

Costaldo, Joe, and Alexandra Posadzki. 2026. “Scientists Push for Creation of International Body to Regulate Artificial Intelligence.” *The Globe and Mail*, October 13. https://www.theglobeandmail.com/business/article-scientists-international-body-regulate-artificial-intelligence/.

## Open the letter?

Oct 13 2026

As much as we would like to believe open letters are important, it is becoming difficult to keep them all straight in our head. Maybe I will start an open letter tracker website... In the meantime, here is the latest one (full text at the link below):

> We, the undersigned scientists, contend that both more AI safety research and more emphasis on containment technologies and procedures are needed. In the short term, strong sandboxing mechanisms including airgapping (disconnecting from the internet) should be used to provide high-assurance containment of cyber-capable AI models. For all internet-connected AI models, the range of model actions permitted by a containment system needs to be balanced with our currently limited ability to predict that the model’s actions will not result in a security failure (e.g., due to misaligned goals). To learn from future mistakes—in which appropriate balance is not achieved and incidents occur—we need greater sharing of information and transparency about containment failures moving forward. Understanding how to achieve this balance is a significant challenge and will require collaboration between the AI and security communities.

Scientific Community on AI and Cybersecurity. 2026. “October 2026 Open Letter from the Scientific Community on AI and Cybersecurity.” October. https://ai-security-letter.org/.

## Windy tomorrow?

October 11 2026

These days forecasting is all the rage, particularly because prediction markets have made it possible to monetize predictions. So, of course the end of the world is a hot topic among forecasters. One of the best of them, Eli Lifland, has posted about his best guess/forecast:

> My current view: - AI companies could develop broadly superhuman AI any year now (~10-15% by EO2027, ~50% by EO2030). - If they don't slow down, AI takeover is ~67%. - Conditional on AI takeover, human extinction is ~40%.  Many non-extinction worlds still have lots of deaths.

Eli Lifland [@eli_lifland]. 2026. “My current view.” Tweet. Twitter, October 10. https://x.com/eli_lifland/status/2109082373644308554.

## Under control?

Oct 10 2026

Anthropic [reported](https://www.anthropic.com/research/investigating-unintended-model-actions) more instances of its models misbehaving in a variety of settings (including the Philadephia Police department and the State Department), which got the attention of the US government.

> Anthropic said an A.I. model it had been testing had taken several unauthorized actions, including using a flaw in a university website to download data and sending a government agency a form that it had been told not to submit. (Conger et al. 2026)
>
> [...]
>
> “We informed the company that we expect immediate and full transparency to the entities involved and the public,” [the Super Intelligence Force] said in a statement. “We also expect that the company will immediately provide remediation services to the affected entities and any harmed Americans.” (Conger et al. 2026)

Conger, Kate, Mike Isaac, Julian E. Barnes, and David E. Sanger. 2026. “Anthropic Agents Tried to Fill Out Visa Forms on State Dept. Website.” Technology. *The New York Times*, October 9. https://www.nytimes.com/2026/10/09/technology/anthropic-rogue-ai-agents.html.

## Sufficient?

Oct 10 2026

Could Frontier AI pass the kind of safety test that Canada and other nations use for dangerous technologies such as nuclear power? Professor Thomas's unstated conclusion in his letter to *The Guardian* is that Frontier AI definitely could **not** pass a standard risk management safety case. If he is right, and we think he is, should we even bother trying to regulate this particular dangerous and treacherous technology?

> Typically, the safety case should show, with a probability of at least 99%, that an accident that could cause multiple fatalities will not occur more often than once in 1,000 years. It is extremely hard to provide evidence for such low probabilities, even for aircraft that at worst might kill 1,000 people in a single accident. The developers of frontier AI systems tell us that their systems might kill the whole of humanity, yet they have provided no detailed risk analyses, no safety cases that could be independently assessed, and no evidence that such safety cases could *ever* be produced for frontier AI systems.

Thomas, Martyn. 2026. “Is Regulation Enough to Stop AI Systems Killing Us All?” *The Guardian*, October 6. https://www.theguardian.com/technology/2026/oct/06/is-regulation-enough-to-stop-ai-systems-killing-us-all.

## Tomorrow?

Oct 9 20206

Axios+ on the planning that is going on for "the day after." If that doesn't creep you out, well, I don't know what will.

> **Top executives** at Anthropic, OpenAI and other AI companies are privately gaming out scenarios for a public and political revolt after a [catastrophic AI event](https://www.axios.com/newsletters/axios-future-of-cybersecurity-bdca0b60-0db6-11f1-b157-114c2c7943cd).

​	[https://www.axios.com/2026/10/09/ai-companies-day-after-major-attack](https://www.axios.com/2026/10/09/ai-companies-day-after-major-attack)

## Water?

Oct 9 2026

Anthropic, apparently, is starting to think about how they can help keep the power and water still working, after (one of their models?) takes it down.

> Anthropic is launching a new initiative to bring its most powerful AI models and engineers to companies protecting power grids, water utilities and other infrastructure, the company first shared with Axios.

​	[https://www.axios.com/2026/10/08/anthropic-critical-infrastructure-cybersecurity](https://www.axios.com/2026/10/08/anthropic-critical-infrastructure-cybersecurity)

