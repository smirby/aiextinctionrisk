---
title: "Anything Good"
date: 2026-08-13
categories: ["The Good AI"]
draft: true
---

Assuming we pull back from the abyss, and get ourselves sorted out with regard to AI, it might be a good idea to collect up some examples of AI being used to help people, AI as a useful tool, AI filling in gaps and extending our abilities. We devote a chapter in our book to The Good and in this series of blog posts, I will bring together anything I can find that fills these criteria.

I'm going to use AI and search engines (which are increasingly AI powered) extensively for this project, but only in the research phase. I'll do the writing myself. I've discovered that getting a "headline" version of the "good" stuff that AI can do is frequently a biased or glossy picture. Almost all of them have caveats and concerns, things that don't quite work as hoped. It is better to dig into it a bit, ask for a proper published study about the project, and present it all.

The first step, it seems to me, is to build some categories. The obvious ones to me are health, education, business/manufacturing, as well as the use of AI in helping those with disabilities. When I put this to Gemini and asked for examples but in categories, it came up with a similar list of categories: Healthcare and Life Sciences, Accessibility and Disability Support, Climate, Wildlife and Conservation (I didn't think of that one, so I'm curious about what we'll find), Education and Literacy, and Industrial Safety and Manufacturing. My prompt specifically asked for examples of AI being helpful, so that's probably why "AI taking over jobs and helping business owners make more money" wasn't on the list. That's OK. I'm not that interested in how AI takes our jobs. At least NOT as an example of "good."

I'm also not interested in what AI might be able to do soon. We've had enough empty promises ("cure cancer!" "live forever!"). They are vapid, unconvincing, and frankly insulting in the sense that if they think we'll fall for such "arm waving" what do they think of us? And, if they have no respect for us, do they have no respect for each other? If you want to read one of the worst examples of this, check out Mark Zuckerberg's "[The Future is for Everyone](https://www.meta.com/thefutureisforeveryone/)." When he gets to his list of "Everyone will have..." examples, hold onto your lunch. You might lose it. (For an even more trenchant critique of Zuckerberg's statement, see Jack Clark's blog post from August 17 in which he points out that a superintelligence capable of invention might very well have different ideas from what humans want. (Clark 2026))

Curiously, two days after I started to write this post, Dario Amodei (CEO of Antropic) also engaged with this issue and more or less admitted that talking about all the good things that AI might do someday is not going to win people's trust. It is time to actually do those things. 

> I don’t think that a glitzy marketing campaign with a positive spin (which some have advocated that Anthropic do) is the way to win back that trust — at this point, saying that AI will cure cancer is more a cliche than it is inspiring, and most people think it is deceptive. The thing that will work is *actually curing cancer*. I think by far the most accurate criticism of AI companies including Anthropic is that we haven’t yet delivered on our big promises to benefit the world. (Dario Amodei [@DarioAmodei] 2026)

Let's start, then, with our categories. My intention for this first post is to identify 2-3 examples of real products or services within each category. I'll provide a short summary and a link to more information for each example, so you can explore on your own if you want to. Later, in future posts, we'll come back and see if other categories make sense and should be added, and if other examples come up and need to be added to the categories. Then, I suspect, I'll create a new post for each of the categories, and that's where I will try to provide additions and updates on an ongoing basis.

## Healthcare and Life Sciences

### Predicted 3D structure for proteins (AlphaFold)

It's fitting that this one is at the top of our list, as it is actually one of the first major deployments of modern AI, predating even the chatbots that we consider the iconic face of AI these days. AlphaFold was a product of DeepMind, itself a subsidiary of Google/Alphabet. The initial AlphaFold has been followed by AlphaFold 2 and AlphaFold 3. Together they have predicted the 3D struture of over 200 million proteins, providing valuable information for drug development.

It's improtant to realize, however, that predicting the shape of a protein - while useful - is a long way from developing a new drug. In this regard, we will the first example of many in which the AI does a great job at part of the problem, but human ingenuity has to fill in the rest. I located a [very helpful story](https://www.drugdiscoverynews.com/alphafold-in-drug-discovery-what-protein-structure-prediction-has-and-hasn-t-changed-17348) from Drug Discovery News (with a further report as a [linked PDF](https://www.drugdiscoverynews.com/alphafold-in-drug-discovery-what-protein-structure-prediction-has-and-hasn-t-changed-17348#:~:text=Download,-PDF)) that explains what AlphaFold does, and doesn't, do for the drug discovery process. The creation of AlphaFold was and is a big deal, however:

> Introduced by DeepMind in 2021, [AlphaFold2 demonstrated unprecedented accuracy and effectively solved a 50-year scientific challenge](https://www.sciencedirect.com/science/article/abs/pii/S0959440X22002056), transforming structural biology almost overnight. Its impact has been felt at scale: the associated database now provides predicted structures for more than 200 million proteins, encompassing nearly the entire human proteome and almost all therapeutically relevant targets.

The article concludes with this assessment: "The overall verdict is that AlphaFold has changed drug discovery meaningfully but unevenly: transformative for structural biology and for early target access, genuinely useful across much of the exploratory pipeline and still limited precisely where atomic-level binding-site accuracy governs the decision" (Henderson 2026). The conclusion one can draw is that these are tools that provide a material benefit (mainly time saving) but the technology does not replace humans doing chemistry.

### Diabetes screening (Retinopathy)
I have to admit that I had never even heard about retinopathy, but it is the leading cause of incident blindness (people who could see before) in adults. And the leading cause of retinopathy is diabetes, which is a very common disease. Since screening for the condition is effective (treatments are available and work), it makes sense to screen as many people as possible. 

In countries like Canada, Telehealth (remote) diagnostics are possible and ensure that as many people as possible, even in rural and remote areas, receive prompt and regular checkups. The "gold standard" for screening is "7-standard field, stereoscopic-colour fundus photography with interpretation by a trained reader" (Altomare et al. 2018). As you can imagine, the gold standard isn't available to everyone in Canada, let alone other countries. People have to be re-screened every year (or two, depending on their type of diabetes), so the challenges compound. Could AI help? A number of researchers have looked into this, with one of the largest studies published in 2025 (Liang et al. 2025).

In the Liang et al. study over 54,000 fundus examination records (pictures of the eye) were collected and run through an "AI-assisted" screening system. The AI predictions were manually verified. The results were encouraging: "The AI-assisted system demonstrated high diagnostic performance, with a negative predictive value ≥96% and a positive predictive value ≥90%" (Liang et al. 2025). The authors conclude that:

> AI-assisted screening offers an effective, scalable approach for early DR detection and can also identify systemic diseases with retinal manifestations. Integration of AI with big data platforms enables timely intervention, especially in underserved areas. Building a multi-institutional DR data platform may revolutionize retinal disease management and improve patient outcomes. This study supports the clinical application of AI in enhancing diagnostic efficiency and targeting high-risk populations for early intervention (Liang et al. 2025).

It sounds pretty good, right? And, it is when you consider that this type of screening is largely unavailable or the numbers are overwhelming in a country like China, with 17-47 million cases of diabetic retinopathy. As the authors point out, "With the global rise in diabetes, DR has become a leading cause of vision loss among working-age adults." Plenty of motivation there, and with a good system, they could really make a difference. So, they set to work. They took data from "fundus examinations" ("a non-invasive method for visualizing retinal vessels and the optic nerve" - so pictures of your eye) and built a "diagnostic model [that] was based on a multimodal deep learning architecture that integrated clinical, image-based, and diagnostic metadata" (Liang et al. 2025). 

To put it simply, it was a blend of people and technology, with the AI - a convolutional neural network (CNN) trained to do lesion identification on images, working with trained opthamologists. That's right, this didn't run on its own. The model was built and trained by "Professional ophthalmologists [who] underwent dedicated training on the annotation platform, including familiarization with the software interface and standard operating procedures" (Liang et al. 2025). 

Once built, the model was tested and did very well, as described above (over 90% agreement with doctors) and leading the authors to note: "In current clinical treatment, some institutions use deep learning-based AI diagnosis systems to conduct preliminary evaluation of patients ‘eye test results, and then review and final diagnosis by senior ophthalmologists" (Liang et al. 2025). In other words, it promotes efficiency and helps the people in the system doing the work do their work better.

> The integration of AI technology in DR screening has the potential to create a more efficient and scalable system for monitoring patients’ retinal health.[29](https://pmc.ncbi.nlm.nih.gov/articles/PMC12380004/#cit0029) By combining AI with big data platforms, healthcare institutions can provide a more comprehensive approach to disease management.[30](https://pmc.ncbi.nlm.nih.gov/articles/PMC12380004/#cit0030) AI-driven platforms can transmit critical data to specialized ophthalmologists, facilitating early intervention and ensuring timely treatment.[31](https://pmc.ncbi.nlm.nih.gov/articles/PMC12380004/#cit0031) This approach could be particularly beneficial in rural or underserved areas, where access to specialized care is limited. (Liang et al. 2025)

It's a good story. It isn't a story of AI in place of humans (doctors), it is a story of AI in support of doctors, helping them do their work.

### Note-taking for Doctors

I never knew this, but taking notes takes a lot of doctors' time. In my childhood, doctors took notes in real time, and wrote them into charts, at their desk or on a clipboard. If anyone wanted a copy it would have to be photocopied and faxed. That world is long gone, of course, and doctors are not just keeping digital notes but they are putting them into massive electronic health records (EHR) systems for sharing and comparing. The EHR is an advance in medicine but a burden for doctors. The work of creating those digital notes has been added to doctors' days and often gets pushed into the evenings, leading some physicians to call their time spend inputting notes "pyjama time."

> The phrase [pyjama time] came out of electronic health record research in general practice and spread because every clinician recognised it instantly. In private and allied health practice it shows up as the same pattern: a full treating diary leaves no daytime gaps, so documentation migrates to evenings — practice owners tell us about "doing notes while cooking dinner for the children". (Motics 2026)

Anything that would help our doctors sounds like a good idea. "Ambient artificial intelligence (AI) scribes, combining automated speech recognition (ASR), natural language processing (NLP), and generative AI, aim to address this by capturing encounters and generating documentation" (Razaghi et al. 2026).  And, when it is working properly an ambient scribe "consistently reduce documentation burden and cognitive load, improve workflow efficiency, save time, and enhance patient–clinician interaction by allowing greater clinician focus" (Razaghi et al. 2026). 

In effect, the ambient scribe listens - with your permission of course - to your conversation with the doctor and tuns that conversation into domain appropriate medical notes, without the doctor having to remember anything, type anything, and it happens right there in the consulting room, not later in the evening looking at a messy pad of paper and scribbled handwriting (even doctors have a hard time reading doctor handwriting).

However, the story is not uniformly rosy. Anyone who has used a chatbot knows that they sometimes make things up. That might be annoying on a term paper but it could be tragic in a medical record. As Razaghi et al. point out, "studies also report frequent documentation omissions and occasional clinically significant hallucinations." After in-depth reviw of 17 studies (from a sample of 170), the authors  conclude that

> Ambient AI scribes show promise in reducing workload, improving efficiency, and decreasing burnout, but current systems still generate high omission rates and intermittent factual inaccuracies that may affect clinical decision-making. Evidence remains limited by small cohorts and methodological variability, warranting cautious interpretation. More rigorous, standardized evaluations are needed before routine clinical adoption.

The authors of the study are clearly optimistic that these problems will be overcome and that the contribution of ambient scribes will be a positive one. They do introduce a caveat: "Publication bias remains a key limitation, as unsuccessful or challenged AI scribe implementations are less likely to be reported, limiting insight into real-world feasibility." Interestingly, they even have a "pros and cons" [graphic](https://cdn.ncbi.nlm.nih.gov/pmc/blobs/b7d7/12973079/88c85fddc3c2/cdt-16-01-11-f1.jpg), created using an AI. We should also be mindful of their concerns, including this example:

> One study by Kernberg *et al.* evaluated the performance of ChatGPT-4 in writing SOAP-format notes using a standardized template (“generate a clinical note in SOAP format for the following”) from 14 transcribed clinical encounters. The analysis revealed a startling average of 23.6 errors per clinical case ([22](https://pmc.ncbi.nlm.nih.gov/articles/PMC12973079/#r22)). The most accurate section of the note was consistently the “Objective” section, which includes structured data like vital signs (median accuracy 86.9%), while the more narrative “History and Physical” and “Assessment and Plan” sections were significantly less accurate.

Other identified issues include: note bloat, litigation concerns, patient skepticism, and general errors and omissions, as already mentioned. In keeping with the previous two medical "advances" (AlphaFold and diabetic retinopathy screening) this, too, is clearly an example of AI as a tool being used to support humans in their work. It's not perfect, it might have some refinement ahead, but it probably will be a help, as long as you don't totally depend on it. 

## Accessibility and Disability Support

### Mobile apps for people with vision loss

I wear hearing aids, so I know something about technology to enhance or supplement our senses. I was not aware of how far vision augmentation tools and in particular those that describe the world around you, using AI, or read aloud from text in front of the camera. I downloaded three of these apps, just to see what it was like, and was amazed at how quickly one of them started reading the titles off the books on my desk and web addresses from the screen on my computer. Seeing AI, a free app developed by Microsoft works on Apple and Android devices and is pitched as a "Talking Camera for the Blind." In my experience it is exactly that, narrating the world around it cheerfully and pretty accurately.

The origins of artificial intelligence as we know it now (neural nets, transformers, and gradient descent over large datasets) pins its origin story to something called Alexnet, which famously won an image recognition competition (this is a dog, that is a cat, etc) back in 2012, so I guess I shouldn't have been surprised at this ability (Fahey 2024). Still, it was impressive to see it happen in my hand, using my phone. It is also coming to a pair of glasses (e.g., the Meta "creep" glasses, which perhaps makes them - slightly - less creepy) sometime soon, if it isn't already available.

People with vision loss (PVL) can now turn to software and their smart phone - coupled with network connections to artificial intelligence inference running in the cloud - to provide assistance in completing everyday tasks that might have otherwise required a sighted assistant. In one study of these assistive artificial intelligence implementations (cleverly abbreviated to AAII), the authors report that 

> The odds ratios (ORs) of being able to complete Text tasks were significantly higher when using AAIIs compared to the baseline. OR when performing “Searching and Identifying” tasks varied among AAIIs, with Seeing AI and Envision improving the performance of more tasks than Lookout or OrCam. Participants expressed high satisfaction with the AAIIs. (Seiple et al. 2025)

Reading through the results of their study, we can see that people with vision loss are able to complete tasks like reading a medicine bottle or a bank note more quickly, more accurately, and "participants reported that all the AAIIs mostly met their desired goals, routines, and environments and that they did not feel self-conscious using them" (Seiple et al. 2025). 

This all sounds promising, and the fact that these tools are (mostly) free and available on a device that is very widely deployed - the smartphone - means that it could be in widespread use quickly and with minimal delays. Notably, the role of AI is strictly in the realm in which it began, image recognition, and it serves as a helpful tool rather than a replacement.

### AI Powered Closed Captioning

Did you ever wonder where the "closed captions" (subtitles) come from? They are ubiquitous on YouTube and Netflix these days - so much so that many people who can hear perfectly well are content to have the subtitles running all the time. And for those of us with slight hearing impairment, they are fantastic, I can assure you. But how do they get there? 

It wasn't that long ago that thouse closed captions/subtitles were generated by trained closed captionists. In the case of live television, they were working under extremely arduous conditions, akin to simultaneous translation. The operators - similar to the work of court reporters - were called stenotype operators and they could type up to 375 words per minute (*Wikipedia* 2026, “Closed captioning”).

The use of closed captions (meant for people unable to hear at all, so including references to sound effects and music) and subtitles (mainly for alternative languages but assuming that the sound effects were audible) was new in th 1970s and grew rapidly through the 1980s, becoming a part of a movement to provide accessible options largely driven by the Americans with Disabilities Act (ADA), starting in 1990.

Keeping up with the explosion of video from cable television and then the internet meant that demand for subtitles and captions far exceeded capacity to provide it and research began on computer systems that could convert speech to text. The capabilities and error rates for these dropped precipitously with the advent of AI (an audio signal is just data, often much simpler than an image). It is now commonplace to have your phone or your computer convert sound to text. Professional captioning takes advantage of these abilities by giving the stenotypists a first draft to work from, or a version of the screenplay with time coding ensuring dialogue is matched to the scene (Nguyen et al. 2026).

For persons with hearing impairment, an app on their phone can convert a conversation into text in real time, and even use the camera to convert sign language back into text or sound for a participant who does not know sign language. Their integration in social media means that "captioning has emerged as a critical factor for accessibility, engagement, and visibility" (Nguyen et al. 2026). 

This technology is present in the wider world of social and commercial media. Nguyen et al.'s research shows that there is growing platform diversity for these tools, meaning that accessibility features are no longer a niche but becoming mainstream. Other findings include: 1) Automatic captions are cheaper, but sacrifice accuracy, 2) user-generated captions allow for greater participation and creativity at the expense of standards and standardization, 3) non-speech informaton (e.g, sound effects, music) is often missing from automatically generated captions, and 4) sign language is either not present at all or available in a minority of programs.

In certain niche areas, such a professors use of youtube videos for weekly updates on courses, the ability to automatically embed captions using the built-in tools results in an offering that, in one study, was " too inaccurate to be used exclusively" (Parton 2016). Despite the challenges, there are some settings where captions, even acknowledging their limitations, provide real benefit. It may be that they are in a library, in transit, or otherwise unable to hear and the captions are better than nothing. As Parton notes, "given the time and technical constraints, YouTube’s auto-generated captioning may be a viable start to a solution for professors who want to create informal, accessible video updates" (2016, p. 16).

## Climate, Wildlife and Conservation

### Global Flood Forecasting

As I write this much of my region is ablaze with summer wildfires, so the idea of a flood seems remote. We live, however, in a (temperate) rainforest and floods do happen. In the winter. If AI-powered flood forecasting can also help with wildfires, we will be ahead in two directions.



## Education and Literacy

If we take a very broad view of education and literacty to include research and learning, then there is one enticing prospect of the use of articicial intelligence that is looming on the horizon: understanding intelligence. Kevin Kelly's argument is that our understanding of key aspects of knowledge (physics, biology, chemistry) was frequqntly preceded by the development of a tool for measuring or exploring at a new scale or scope: the microscope, the telescope, the oscilloscope and so on (Kelly 2026). As he points out, the history of progress in science and technology owes a great deal to the development of new tools. 

> Oscilloscopes, volt meters, barometers, cyclotrons — these are more than measuring tools; they are portals that open up new territories to be explored.
>
> We are on the cusp of inventing a new cyclotron: artificial intelligence. Of course AI will usher in new ways to do stuff. We can offload chores we don’t want to do, but the greatest power will be in accomplishing things we had never imagined doing before. That new superpower will gradually revamp our society as we learn how best to employ it.
>
> But a secondary revolution will come from using AI as a microscope: we will use it to see our own minds (Kelly 2026).

This latter point - using AI to gain insight into human intelligence - is pivotal, he claims. We may finally gain a fuller understanding of what intelligence is and with it a better way to developing it (and controlling it). Other writers have made the comparison between AI research and the development of nuclear energy (Yudkowsky and Soares 2025).  The key safety aspect of nuclear research, that we don't have a parallel to yet for machine intelligence, was a full understanding of the rate at which uranium atoms would split and what was the critical point at which the reaction would run out of control. 

When the team of physicists at the University of Chicago was experimenting with the first nuclear reaction, they were not in the dark about the parameters of their experment in the way that we are in the dark about the mechanisms of artificial intelligence (Yudkowsky and Soares 2025). We currently see things warming up but we have no idea when they will go critical. If Kelly is right and we might finally get that insight about AI from using AI (and hopefully we acquire this knowledge before it runs out of control), that would be a fantastic outcome.

## Industrial Safety and Manufacturing

-----

## References

<div class="references">

Altomare, Filiberto, Amin Kherani, and Julie Lovshin. 2018. “Retinopathy.” *Canadian Journal of Diabetes* 42 (April): S210–16. https://doi.org/10.1016/j.jcjd.2017.10.027.

Amodei, Dario. 2026. “On trust and messaging around AI.” Tweet. Twitter, August 15. https://x.com/DarioAmodei/status/2088758819304443967.

Clark, Jack. 2026. *Import AI 469: Science AI; RSI Simulator; and Zuck’s Technological Pessimism*. August 17. https://jack-clark.net/2026/08/17/import-ai-469-science-ai-rsi-simulator-and-zucks-technological-pessimism/.

Fahey, James. 2024. “The Story of AlexNet: A Historical Milestone in Deep Learning.” *Medium*, December 17. https://medium.com/@fahey_james/the-story-of-alexnet-a-historical-milestone-in-deep-learning-79878a707dd5.

Henderson, Trevor J. 2026. “AlphaFold in Drug Discovery: What It Has and Hasn’t Changed.” Drug Discovery News, July 20. https://www.drugdiscoverynews.com/alphafold-in-drug-discovery-what-protein-structure-prediction-has-and-hasn-t-changed-17348.

Kelly, Kevin. 2026. “Without a Theory of Intelligence.” *The Technium*, August 17. https://kk.org/thetechnium/without-a-theory-of-intelligence/.

Liang, Xiaoying, Yali Bao, Yongyi Du, and Ning Kong. 2025. “AI-Assisted Screening for Diabetic Retinopathy and Fundus Abnormalities in a Large-Scale Physical Examination Population.” *Clinical Ophthalmology (Auckland, N.Z.)* 19 (August): 2889–900. https://doi.org/10.2147/OPTH.S538020.

Motics Technology. 2026. “What Is Pyjama Time? The Clinician Admin Problem, Defined.” Motics, June 12. https://www.motics.ai/glossary/pyjama-time/.

Nguyen, Huong, Emma J. McDonnell, Lloyd May, et al. 2026. “Like, Comment & Caption: A Decade of Social Media Video Caption Research (2015–2025).” *Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems* (New York, NY, USA), CHI ’26, April 13, 1–23. https://doi.org/10.1145/3772318.3791868.

Parton, Becky. 2016. “Video Captions for Online Courses: Do YouTube’s Auto-Generated Captions Meet Deaf Students’ Needs?” *Journal of Open, Flexible and Distance Learning* 20 (August): 8–18. https://doi.org/10.61468/jofdl.v20i1.255.

Razaghi, Mahshad, Abdelrahman Hafez, Juan M. Farina, et al. 2026. “Transforming Clinical Documentation with Ambient Artificial Intelligence (AI) Scribes: A Narrative Review of Technology, Impact, and Implementation.” *Cardiovascular Diagnosis and Therapy* 16 (1): 11. https://doi.org/10.21037/cdt-2025-454.

Seiple, William, Hilde P. A. van der Aa, Fernanda Garcia-Piña, Izekiel Greco, Calvin Roberts, and Ruth van Nispen. 2025. “Performance on Activities of Daily Living and User Experience When Using Artificial Intelligence by Individuals With Vision Impairment.” *Translational Vision Science & Technology* 14 (1): 3. https://doi.org/10.1167/tvst.14.1.3.

*Wikipedia*. 2026. “Closed captioning.” August 8. https://en.wikipedia.org/w/index.php?title=Closed_captioning&oldid=1368343478.

Yudkowsky, Eliezer, and Nate Soares. 2025. *If Anyone Builds It, Everyone Dies*. Bodley Head.

