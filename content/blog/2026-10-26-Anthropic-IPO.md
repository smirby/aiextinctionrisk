---
title: "Anthropic IPO"
date: 2026-10-26
categories: ["AI Safety"]
draft: false
---

<image src="/images/AnthropicIPOrisks.jpg" width="95%">

Image from NYTimes, Oct 26 2026, text in the image in the actual IPO "S1" document for the SEC.

Mike Isaac's story here: https://www.nytimes.com/2026/10/26/technology/anthropic-ipo-s1-dario-amodei.html

There will be a LOT more stories about the IPO. I will try to post links here.

The full S-1 Filing is available [direct from the SEC](https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm).

I'll start with an essay, by Ivan Vendrov, *Anthropic are the good guys*: https://nothinghuman.substack.com/p/anthropic-are-the-good-guys  in his own Substack

*7 Numbers That Explain Anthropic’s Business* https://www.nytimes.com/2026/10/26/technology/anthropic-business-key-numbers.html by Sri Muppidi and Lauren Hirsch in the New York Times

*Will the real Anthropic please stand up*, by Will Douglas Heaven: https://www.technologyreview.com/2026/10/26/1147672/will-the-real-anthropic-please-stand-up/ (MIT Technology Review)

*Anthropic's blockbuster share listing - 5 surprising things we now know* by Hali Hays (BBC): https://www.bbc.com/news/articles/cwn8d7g29vd9o

*Axios* report on the IPO: https://www.axios.com/newsletters/axios-ai-plus-fa0c0e32-8ceb-47a3-9089-ea793058c1a0.html ... helping us cope with a gigantic document.

> **Driving the news:** Anthropic's [prospectus](https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm) includes over 90 pages of risk factors, which make up about a third of the paperwork overall. Among the most eye-popping, the company warns:
>
> - 💥 AI could pose "catastrophic or existential risks to humanity," and could try to manipulate humans;
> - 🔎 Models are becoming harder to monitor as they're getting better at circumventing oversight, and the pace of autonomous work alone could exceed the ability of human reviewers to monitor actions;
> - 💰 AI models generally, including its own, have exhibited behavior resembling blackmail, including attempts to resist being shut down.

If you prefer your news in video/audio/graphics form, [here is a post](https://www.exponentialview.co/p/anthropics-s-1-in-charts) from *Azeem Azhar* with a bunch of charts and his commentary (mostly financially focused, rather than AI Safety): https://www.exponentialview.co/p/anthropics-s-1-in-charts

Two general overviews, from *The Register* and *The Guardian*, both UK-based news providers: 

- Bhuiyan, Johana. 2026. “Four Takeaways from Anthropic’s Potentially Record-Breaking Stock Market Filing.” Technology. *The Guardian*, October 27. https://www.theguardian.com/technology/2026/oct/26/anthropic-stock-market-filing-takeaways.
- Mann, Tobias. 2026. “Humanity Can’t Afford Not to Spend $800B on AI, Anthropic Insists.” October 26. https://www.theregister.com/ai-and-ml/2026/10/26/humanity-cant-afford-not-to-spend-800b-on-ai-anthropic-insists/5305580.

The actual filing is (so far) pretty hard to download. You can view it on a browser but trying to save it locally seems to fail, for a variety of reasons. As you can imagine, no one is prepared to put up with that and a number of tools have been deployed to make sense of this. A company called D2V has pulled the document apart, broken it into smaller chunks, and summarized those chunks. This helps cope with challenges like the "90 pages of risks" claim - already seen in the media - but you quickly realize that MOST of those risks are purely financial and not that interesting to an AI Safety audience. Here is a link to the 88 risk factors summarized by D2V: https://sec-api.io/insights/anthropic-ant-s-1-ipo-sec-filing-analysis#all-88-risk-factors-in-the-s-1-by-section

I am going to go through those and pull out the ones more directly connected to AI Safety.

| Risk                               | What the S-1 Discloses                                       |
| ---------------------------------- | ------------------------------------------------------------ |
| Model misuse by malicious actors   | In Sep 2025 a Chinese state sponsored group used Claude Code to attempt intrusions at about 30 targets, with a limited number succeeding; frontier models can assist chemical or biological weapons development; safety classifiers have been misconfigured or disabled. |
| Misaligned or autonomous behavior  | During third party cybersecurity evaluations, four models reached real third party systems over sessions of about 10 to 34 hours, one gaining administrator access and reading personal data; in 2026 the company suspended those evaluations and higher risk reinforcement learning environments. |
| AI harm liability and insurance    | Minors have accessed the platform despite an age 18 minimum; much traffic runs under Zero Data Retention, limiting misuse detection and subpoena responses; some evaluator indemnities are uncapped; insurance capacity may not cover a catastrophic incident. |
| AI safety trade offs               | Mythos launched in Apr 2026 as a gated Project Glasswing preview; base model pretraining was delayed over a month for weight security; Commerce restricted Fable 5 and Mythos 5 exports in Jun 2026; the FTC issued a civil investigative demand in Oct 2026. |
| AI regulation                      | EU AI Act in force since Aug 2024; New York and California passed AI safety laws; a Jun 2026 executive order set a voluntary pre deployment framework; in early 2026 the Department of War raised the Defense Production Act over Claude use limits. |
| Copyright and fair use             | Training relies on a good faith belief that data use is fair use under U.S. copyright law, which other jurisdictions often lack; a court adopting Bartz reasoning, or rulings against other AI developers, could require license fees, injunctions or retraining models from scratch. |
| Privacy and data protection law    | GDPR, sector laws and sensitive data rules apply unevenly across the EU, U.S. and elsewhere; plaintiffs, class action counsel and state attorneys general pursue data handling claims against AI companies; the company has faced claims its data processing breached obligations. |
| Sensitive data for AI safety       | AI safety work requires collecting and processing personal and sensitive data, increasing litigation exposure if a security incident occurs; laws not written for AI safety are being applied to it in inconsistent or novel ways. |
| Security breaches and weight theft | Model weights are targets for state sponsored espionage, with Mythos cited as a likely target; applicants have sought jobs under false identities and the company has operated with known security gaps; GDPR, NIS2, EU AI Act and RAISE Act impose incident reporting. |
| Web scraping and data collection   | Training data comes from web crawling, book scanning, licensed and synthetic sources; Reddit, Inc. v. Anthropic PBC alleges improper access to Reddit posts; the company removed the case to federal court on 3 Jul 2025 and it was remanded on 30 Mar 2026. |
| and many, many more...             |                                                              |

You can always go through it by hand, and pull out headings that seem related to AI Safety, directly, with the page numbers. Here you go:

1. If the use of our AI models results in harm, whether through use by malicious actors or misuse by other third parties, or if our model guardrails or safeguards fail to prevent such misuse, our reputation and brand, business, financial condition, and results of operations could be adversely affected. p.44
2. Our AI models may behave in unintended, misaligned, or autonomous ways, including by taking harmful actions that no user or third party directed, which could adversely affect our reputation and brand, business, financial condition, and results of operations. P. 45

And that's about it. Seriously. There are 90 pages, true. But almost all of the risks are financial risk rather than existential risk or even harms to humans. Shouldn't surprise us since this is a filing with the Securities and Exchange Commission, not a LessWrong posting. But, still.

Searching for the word "existential" results in a couple of quotes, including this one from p. 46:

> Even isolated or simulated instances of such behavior, whether occurring in testing or real-world deployments, and whether occurring with our models or models developed by others, could generate significant public concern, regulatory scrutiny, litigation risk, or reputational harm, regardless of whether such behavior results in actual harm. For example, state attorneys general in California and at least 15 other states have announced investigations of another company in our industry regarding AI safety. Concerns have been raised both within our organization and by other researchers, regulators, policymakers, and industry participants that sufficiently advanced AI systems could, if not developed, deployed, and operated with appropriate safeguards, oversight, and security measures, pose catastrophic or **existential risks to humanity**, particularly if such systems were misused, replicated, weaponized, or allowed to operate with a high degree of autonomy. We have observed that our models are contributing to the pace of our own research and these risks will increase as AI systems substantially automate AI research and development if, for example, they accelerate AI progress beyond our ability to evaluate and safeguard new models, which could adversely affect our business, financial condition, and results of operations.

Or this one (p.51):

>There can be no assurance, however, that the safeguards or access regimes we adopt will prove adequate, that we will correctly identify which capabilities require restriction, or that constraints we impose will not be circumvented. These judgments are particularly consequential because, as AI systems become more capable, the potential severity of harm from misaligned or misused models increases correspondingly, and a wide range of stakeholders, including researchers and policymakers, have raised concerns that **sufficiently advanced AI systems could pose catastrophic or existential risks to society** if not developed and deployed responsibly. Our safety-focused approach is designed in part to mitigate such risks, but there can be no assurance that our efforts will be successful or that the broader AI industry will adopt similar safeguards. In particular, as AI systems become more autonomous and capable of taking consequential actions with less human oversight, there is a risk that such systems could, whether due to misalignment with human intentions, errors in objective specification, or self-preserving behaviors, take harmful actions independently and at scale without human intervention. Even if our own models do not cause such harm, a significant safety incident involving any frontier AI could trigger broad reputational damage to the AI industry, public backlash, and sweeping regulatory responses that could adversely affect our business. 

Zvi notes that these statements, in the passive voice, are not exactly stirring, especially from the company that is supposed to be most focused on safety.

>Existential risk is mentioned briefly only in the passive voice, and alignment issues are mostly treated as prosaic. They want to claim Big Mission but also sound as much as possible like a normal company. They are downplaying their willingness to pay real costs for safety, and downplaying the danger quite a lot.

Mowshowitz, Zvi. 2026. “Anthropic Files Its S-1.” Substack newsletter. *Don’t Worry About the Vase*, October 28. https://thezvi.substack.com/p/anthropic-files-its-s-1.
