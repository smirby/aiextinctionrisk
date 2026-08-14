---
title: "Anything Good"
date: 2026-08-13
categories: ["The Good AI"]
draft: true
---

Assuming we pull back from the abyss, and get ourselves sorted out with regard to AI, it might be a good idea to collect up some examples of AI being used to help people, AI as a useful tool, AI filling in gaps and extending our abilities. We devote a chapter in our book to The Good and in this series of blog posts, I will bring together anything I can find that fills these criteria.

I'm going to use AI and search engines (which are increasingly AI powered) extensively for this project, but only in the research phase. I'll do the writing myself.

The first step, it seems to me, is to build some categories. The obvious ones to me are health, education, business/manufacturing, as well as the use of AI in helping those with disabilities. When I put this to Gemini and asked for examples but in categories, it came up with a similar list of categories: Healthcare and Life Sciences, Accessibility and Disability Support, Climate, Wildlife and Conservation (I didn't think of that one, so I'm curious about what we'll find), Education and Literacy, and Industrial Safety and Manufacturing. My prompt specifically asked for examples of AI being helpful, so that's probably why "AI taking over jobs and helping business owners make more money" wasn't on the list. That's OK. I'm not that interested in how AI takes our jobs. At least NOT as an example of "good."

I'm also not interested in what AI might be able to do soon. We've had enough empty promises ("cure cancer!" "live forever!"). They are vapid, unconvincing, and frankly insulting in the sense that if they think we'll fall for such "arm waving" what do they think of us? And, if they have no respect for us, do they have no respect for each other? If you want to read one of the worst examples of this, check out Mark Zuckerberg's "[The Future is for Everyone](https://www.meta.com/thefutureisforeveryone/)." When he gets to his list of "Everyone will have..." examples, hold onto your lunch. You might lose it.

Let's start, then, with our categories. My intention for this first post is to identify 2-3 examples of real products or services within each category. I'll provide a short summary and a link to more information for each example, so you can explore on your own if you want to. Later, in future posts, we'll come back and see if other categories make sense and should be added, and if other examples come up and need to be added to the categories. Then, I suspect, I'll create a new post for each of the categories, and that's where I will try to provide additions and updates on an ongoing basis.

1. Healthcare and Life Sciences

   - Predicted 3D structure for proteins (AlphaFold)

     It's fitting that this one is at the top of our list, as it is actually one of the first major deployments of modern AI, predating even the chatbots that we consider the iconic face of AI these days. AlphaFold was a product of DeepMind, itself a subsidiary of Google/Alphabet. The initial AlphaFold has been followed by AlphaFold 2 and AlphaFold 3. Together they have predicted the 3D struture of over 200 million proteins, providing valuable information for drug development.

     It's improtant to realize, however, that predicting the shape of a protein - while useful - is a long way from developing a new drug. In this regard, we will the first example of many in which the AI does a great job at part of the problem, but human ingenuity has to fill in the rest. I located a [very helpful story](https://www.drugdiscoverynews.com/alphafold-in-drug-discovery-what-protein-structure-prediction-has-and-hasn-t-changed-17348) from Drug Discovery News (with a further report as a [linked PDF](https://www.drugdiscoverynews.com/alphafold-in-drug-discovery-what-protein-structure-prediction-has-and-hasn-t-changed-17348#:~:text=Download,-PDF)) that explains what AlphaFold does, and doesn't, do for the drug discovery process. The creation of AlphaFold was and is a big deal, however:

     > Introduced by DeepMind in 2021, [AlphaFold2 demonstrated unprecedented accuracy and effectively solved a 50-year scientific challenge](https://www.sciencedirect.com/science/article/abs/pii/S0959440X22002056), transforming structural biology almost overnight. Its impact has been felt at scale: the associated database now provides predicted structures for more than 200 million proteins, encompassing nearly the entire human proteome and almost all therapeutically relevant targets.

     The article concludes with this assessment: "The overall verdict is that AlphaFold has changed drug discovery meaningfully but unevenly: transformative for structural biology and for early target access, genuinely useful across much of the exploratory pipeline and still limited precisely where atomic-level binding-site accuracy governs the decision" (Henderson 2026). The net out is a material benefit and time saving but the technology does not replace humans doing chemistry.

   - Diabetes screening (Retinopathy)
     I have to admit that I had never even heard about retinopathy, but it is the leading cause of incident blindness (people who could see before) in adults. And the leading cause of retinopathy is diabetes, which is a very common disease. Since screening for the condition is effective (treatments are available and work), it makes sense to screen as many people as possible. 

     In countries like Canada, Telehealth (remote) diagnostics are possible and ensure that as many people as possible, even in rural and remote areas, receive prompt and regular checkups. The "gold standard" for screening is "7-standard field, stereoscopic-colour fundus photography with interpretation by a trained reader" (Altomare et al. 2018). As you can imagine, the gold standard isn't available to everyone in Canada, let alone other countries. People have to be re-screened every year (or two, depending on their type of diabetes), so the challenges compound. Could AI help? A number of researchers have looked into this, with one of the largest studies published in 2025 (Liang et al. 2025).

     In the Liang et al. study over 54,000 fundus examination records (pictures of the eye) were collected and run through an "AI-assisted" screening system. The AI predictions were manually verified. The results were encouraging: "The AI-assisted system demonstrated high diagnostic performance, with a negative predictive value ≥96% and a positive predictive value ≥90%" (Liang et al. 2025). The authors conclude that:

     > AI-assisted screening offers an effective, scalable approach for early DR detection and can also identify systemic diseases with retinal manifestations. Integration of AI with big data platforms enables timely intervention, especially in underserved areas. Building a multi-institutional DR data platform may revolutionize retinal disease management and improve patient outcomes. This study supports the clinical application of AI in enhancing diagnostic efficiency and targeting high-risk populations for early intervention (Liang et al. 2025).

     It sounds pretty good, right? And, it is when you consider that this type of screening is largely unavailable or the numbers are overwhelming in a country like China, with 17-47 million cases of diabetic retinopathy. As the authors point out, "With the global rise in diabetes, DR has become a leading cause of vision loss among working-age adults." Plenty of motivation there, and with a good system, they could really make a difference. So, they set to work. They took data from "fundus examinations" ("a non-invasive method for visualizing retinal vessels and the optic nerve" - so pictures of your eye) and built a "diagnostic model [that] was based on a multimodal deep learning architecture that integrated clinical, image-based, and diagnostic metadata" (Liang et al. 2025). 

     To put it simply, it was a blend of people and technology, with the AI - a convolutional neural network (CNN) trained to do lesion identification on images, working with trained opthamologists. That's right, this didn't run on its own. The model was built and trained by "Professional ophthalmologists [who] underwent dedicated training on the annotation platform, including familiarization with the software interface and standard operating procedures" (Liang et al. 2025). 

     Once built, the model was tested and did very well, as described above (over 90% agreement with doctors) and leading the authors to note: "In current clinical treatment, some institutions use deep learning-based AI diagnosis systems to conduct preliminary evaluation of patients ‘eye test results, and then review and final diagnosis by senior ophthalmologists" (Liang et al. 2025). In other words, it promotes efficiency and helps the people in the system doing the work do their work better.

     > The integration of AI technology in DR screening has the potential to create a more efficient and scalable system for monitoring patients’ retinal health.[29](https://pmc.ncbi.nlm.nih.gov/articles/PMC12380004/#cit0029) By combining AI with big data platforms, healthcare institutions can provide a more comprehensive approach to disease management.[30](https://pmc.ncbi.nlm.nih.gov/articles/PMC12380004/#cit0030) AI-driven platforms can transmit critical data to specialized ophthalmologists, facilitating early intervention and ensuring timely treatment.[31](https://pmc.ncbi.nlm.nih.gov/articles/PMC12380004/#cit0031) This approach could be particularly beneficial in rural or underserved areas, where access to specialized care is limited. (Liang et al. 2025)

     It's a good story. It isn't a story of AI in place of humans (doctors), it is a story of AI in support of doctors, helping them do their work.

   - Note-taking for Doctors

2. Accessibility and Disability Support

3. Climate, Wildlife and Conservation

4. Education and Literacy

5. Industrial Safety and Manufacturing

-----

## References

<div class="references">

Altomare, Filiberto, Amin Kherani, and Julie Lovshin. 2018. “Retinopathy.” *Canadian Journal of Diabetes* 42 (April): S210–16. https://doi.org/10.1016/j.jcjd.2017.10.027.

Henderson, Trevor J. 2026. “AlphaFold in Drug Discovery: What It Has and Hasn’t Changed.” Drug Discovery News, July 20. https://www.drugdiscoverynews.com/alphafold-in-drug-discovery-what-protein-structure-prediction-has-and-hasn-t-changed-17348.

Liang, Xiaoying, Yali Bao, Yongyi Du, and Ning Kong. 2025. “AI-Assisted Screening for Diabetic Retinopathy and Fundus Abnormalities in a Large-Scale Physical Examination Population.” *Clinical Ophthalmology (Auckland, N.Z.)* 19 (August): 2889–900. https://doi.org/10.2147/OPTH.S538020.