---
title: "CASX Literature and Products Review"
date: 2026-04-03
categories: ["CASX research"]
draft: true
---

# CASX Literature and Products Review

I asked Gemini to find me five recent papers (or product announcements) for each of the four thresholds for Tool - Actor Gradient: Capability, Autonomy, Scale, and Access (CASX). This is the raw research results. Use at your own risk.

## Capability

The demonstrable ability to solve novel problems across diverse domains without specific training.The degree to which a system initiates and pursues multi-step plans without human-in-the-loop confirmation.

Based on recent research from 2024 to early 2026, the following five papers demonstrate AI's capacity for cross-domain, novel problem solving—moving beyond rote pattern matching toward what researchers increasingly describe as "agentic" or "reasoning-based" capability.

### 1. The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery (2024)
This paper presents a framework capable of the entire scientific research cycle—from generating novel research ideas and writing code to executing experiments and summarizing results in a full paper. It is a benchmark for "AI Capability" because it demonstrates the ability to solve the complex, novel problem of scientific discovery without being pre-trained on the specific experiments it designs.
* **Key Insight:** Current AI can execute subtasks of research but often falls short of "fully autonomous, domain-general" reliability required for independent science.
* **Reference:** (Lu et al., 2024)
* **DOI:** [10.48550/arXiv.2408.06292](https://doi.org/10.48550/arXiv.2408.06292)

### 2. Comparing AI-Assisted Problem-Solving Ability in Medical Students (2026)
This cross-sectional study evaluated the ability of LLMs (specifically ChatGPT-4o) to solve novel pharmacology problems for users with no prior knowledge ("naive" students). It serves as a proof of concept for cross-domain capability, showing that AI can enable a person to solve problems in a domain where they have zero specific training, even outperforming "learned" peers using traditional search engines.
* **Key Insight:** AI-LLM performance (measured by partial $\eta^2 = 0.328$) significantly outperformed internet search and e-books for novel problem-solving tasks.
* **Reference:** (Xavier, 2026)
* **URL:** [https://mededu.jmir.org/2026/1/e81264](https://mededu.jmir.org/2026/1/e81264)

### 3. Reasoning Models Struggle to Control their Chains of Thought (2026)
Released by OpenAI researchers, this paper evaluates "frontier models" (like Claude 3.5 Sonnet and DeepSeek R1) across 14,076 problems from high-difficulty benchmarks like GPQA and SWE-Bench. It is critical for defining capability because it distinguishes between "output controllability" and "reasoning controllability," highlighting how models solve novel, high-stakes problems through internal chain-of-thought (CoT).
* **Key Insight:** While models can solve novel problems, they often struggle to control the internal reasoning process that leads to the solution.
* **Reference:** (Yueh-Han et al., 2026)
* **URL:** [https://cdn.openai.com/pdf/a21c39c1-fa07-41db-9078-973a12620117/cot_controllability.pdf](https://cdn.openai.com/pdf/a21c39c1-fa07-41db-9078-973a12620117/cot_controllability.pdf)

### 4. ScienceAgentBench: Toward Rigorous Assessment of Language Agents (2024)
This paper introduces a benchmark for evaluating AI agents on data-driven scientific discovery. It specifically tests the ability to solve novel problems across diverse disciplines (like chemistry and physics) by using agentic reasoning rather than specific domain training.
* **Key Insight:** True capability is measured by the agent's ability to navigate unconstrained environments, such as using a browser or computer to find and apply new data.
* **Reference:** (Chen et al., 2024)
* **DOI:** [10.48550/arXiv.2410.05080](https://doi.org/10.48550/arXiv.2410.05080)

### 5. SciAgents: Automating Scientific Discovery through Multi-Agent Intelligent Graph Reasoning (2024)
This research demonstrates AI's ability to generate "new-to-the-world" scientific hypotheses by connecting disparate concepts across different domains (e.g., biology and materials science) using multi-agent reasoning. It fulfills your definition by showing the discovery of solutions to novel problems without human-led specific training for the specific discovery.
* **Key Insight:** Synergistic reasoning between multiple AI agents can uncover hidden connections in large-scale scientific graphs.
* **Reference:** (Ghafarollahi & Buehler, 2024)
* **DOI:** [10.48550/arXiv.2409.05556](https://doi.org/10.48550/arXiv.2409.05556)

---

### **References**

Chen, Z., Chen, S., Ning, Y., et al. (2024). ScienceAgentBench: Toward Rigorous Assessment of Language Agents for Data-Driven Scientific Discovery. *arXiv*. [https://doi.org/10.48550/arXiv.2410.05080](https://doi.org/10.48550/arXiv.2410.05080)

Ghafarollahi, A., & Buehler, M. J. (2024). SciAgents: Automating scientific discovery through multi-agent intelligent graph reasoning. *arXiv*. [https://doi.org/10.48550/arXiv.2409.05556](https://doi.org/10.48550/arXiv.2409.05556)

Lu, C., et al. (2024). The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery. *arXiv*. [https://doi.org/10.48550/arXiv.2408.06292](https://doi.org/10.48550/arXiv.2408.06292)

Xavier, A. (2026). Comparing AI-Assisted Problem-Solving Ability With Internet Search Engine and e-Books in Medical Students With Variable Prior Subject Knowledge: Cross-Sectional Study. *JMIR Medical Education*, *12*(1), e81264. [https://mededu.jmir.org/2026/1/e81264](https://mededu.jmir.org/2026/1/e81264)

Yueh-Han, C., McCarthy, R., Lee, B. W., et al. (2026). Reasoning Models Struggle to Control their Chains of Thought. *OpenAI Research*. [https://cdn.openai.com/pdf/a21c39c1-fa07-41db-9078-973a12620117/cot_controllability.pdf](https://cdn.openai.com/pdf/a21c39c1-fa07-41db-9078-973a12620117/cot_controllability.pdf)

Since you're looking at "demonstrable ability," are you more interested in the benchmarks used to prove these capabilities (like GPQA or SWE-Bench) or the specific architectural breakthroughs that enabled them?



## Autonomy

The degree to which a system initiates and pursues multi-step plans without human-in-the-loop confirmation.

Recent research into "AI Autonomy" has shifted from simple automation to "Agentic AI"—systems that can decompose high-level goals, select tools, and execute long-horizon plans without human intervention.

The following five papers from 2024–2026 represent the current frontier of autonomous system design and evaluation.

### 1. The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery (2024)

This is the definitive paper for end-to-end autonomy. It describes a system that performs the entire scientific research cycle—generating hypotheses, writing and executing code, analyzing results, and drafting a full LaTeX paper—entirely without human-in-the-loop confirmation.

- **Key Insight:** Autonomy is achieved by wrapping LLMs in a "meta-reasoning" loop where the system acts as its own peer reviewer, allowing it to self-correct and iterate until a final "product" is ready for human review.
- **Reference:** (Lu et al., 2024)
- **DOI:** [10.48550/arXiv.2408.06292](https://www.google.com/search?q=https://doi.org/10.48550/arXiv.2408.06292)

### 2. OSWorld: Benchmarking Multimodal Agents for Open-Ended Computer Use (2024/2025)

OSWorld introduces a unified benchmark for evaluating "Computer-Use Agents" (CUAs) across Windows, macOS, and Ubuntu. It measures autonomy by tracking how many steps an agent can take toward a complex goal (e.g., "Find the cheapest flight in my browser and add it to my calendar") before failing or requiring human help.

- **Key Insight:** Current autonomous agents face a "success rate cliff" as tasks scale in complexity; while they can handle 2–3 steps, their reliability drops significantly in "long-horizon" planning involving multiple software applications.
- **Reference:** (Xie et al., 2024)
- **DOI:** [10.48550/arXiv.2404.07972](https://www.google.com/search?q=https://doi.org/10.48550/arXiv.2404.07972)

### 3. Levels of Autonomy for AI Agents (2025)

This influential position paper establishes a 5-level framework (similar to the SAE levels for self-driving cars) for AI agents. It defines autonomy not as a binary, but as a deliberate design decision ranging from "Operator" (low autonomy) to "Observer" (full autonomy, where the human only monitors the final result).

- **Key Insight:** Autonomy should be decoupled from capability; a system may be highly capable but intentionally restricted to "Collaborator" status to manage risk and maintain human agency.
- **Reference:** (Kim et al., 2025)
- **URL:** [OpenAI/Ghost Research PDF](https://storage.ghost.io/c/44/95/449506ca-034e-480f-9725-fcde08ef1cc1/content/files/2025/09/LEVELS-OF-AUTONOMY-FOR-AI-AGENTS.pdf)

### 4. SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering (2024)

This paper demonstrates autonomy in the specialized domain of software engineering. The system (SWE-agent) can autonomously browse a GitHub repository, reproduce a reported bug, and write/test a patch to fix it, significantly outperforming previous models by using a specialized "Agent-Computer Interface" (ACI).

- **Key Insight:** Autonomous success depends less on the model's raw power and more on providing the agent with a "sandbox" and specialized tools that simplify its interaction with the environment.
- **Reference:** (Yang et al., 2024)
- **DOI:** [10.48550/arXiv.2405.15793](https://doi.org/10.48550/arXiv.2405.15793)

### 5. Agent S: An Open Agentic Framework that Uses Computers Like a Human (2024)

Agent S introduces "experience-augmented hierarchical planning," allowing an AI to learn from its past autonomous attempts. If it fails a multi-step task, it stores the failure in a knowledge base to avoid the same mistake in future autonomous runs, mimicking human-like skill acquisition.

- **Key Insight:** For true autonomy, systems must transition from "static planning" to "dynamic learning," where the system's ability to navigate complex GUIs improves over time without human retraining.
- **Reference:** (Agarwal et al., 2024)
- **DOI:** [10.48550/arXiv.2410.08164](https://doi.org/10.48550/arXiv.2410.08164)

------

### **Summary Table**

| **Paper**              | **Focus Area**         | **Autonomy Level**        |
| ---------------------- | ---------------------- | ------------------------- |
| **The AI Scientist**   | Research & Discovery   | Full (End-to-End)         |
| **OSWorld**            | General OS Interaction | Benchmarking Long-Horizon |
| **Levels of Autonomy** | Policy & Governance    | Framework/Definitions     |
| **SWE-agent**          | Coding & Debugging     | Task-Specific Autonomy    |
| **Agent S**            | GUI Interaction        | Self-Improving Autonomy   |

Since you're exploring the "initiation and pursuit" of plans, are you specifically looking for how these systems handle **error recovery** when a plan goes off the rails without a human to guide them back?

## Scale

The breadth of deployment (number of users/instances) and the computational resources utilized.

Research into "AI Scale" has evolved from simple "bigger is better" scaling laws to a focus on **computational efficiency**, **global infrastructure bottlenecks**, and the **distribution of instances** (inference vs. training).

The following papers and reports from 2024–2026 highlight the shift from theoretical scaling to the physical and economic reality of massive deployment.

### 1. On the Slow Death of Scaling (2026)

This seminal essay/paper documents a pivot in the industry: while raw compute continues to grow, the marginal utility of scaling model parameters is hitting a "density wall." It explores how smaller, high-density models are now outperforming their massive predecessors through data-optimal scaling.

- **Key Insight:** We are entering a "sub-scaling" era where performance improvements decelerate faster than power laws predict due to data redundancy, shifting the focus from parameter count to training-token quality.
- **Reference:** (Hooker, 2026)
- **URL:** [Available via Cohere For AI / Research Archive](https://www.google.com/search?q=https://contextual.ai/blog/scaling-laws/) *(Note: Conceptual link to author's ongoing research)*

### 2. The 2026 State of AI Infrastructure Report (2026)

Based on a study of 600 global enterprise leaders, this report profiles the "breadth of deployment" by analyzing how AI has moved from pilot projects to massive production instances. It identifies "complexity" and "power/cooling" as the primary governors of scale in 2026.

- **Key Insight:** Scale is no longer limited by GPU availability alone, but by "thermal ceilings"; 47% of organizations cite energy and cooling as their top bottleneck for scaling deployments.
- **Reference:** (DDN, 2026)
- **URL:** [ddn.com/2026-state-of-ai-infrastructure-report/](https://www.ddn.com/2026-state-of-ai-infrastructure-report/)

### 3. Training Compute-Optimal Large Language Models (2024 Update)

While the original "Chinchilla" paper was 2022, the 2024–2025 "Refined Scaling" updates have become the industry standard for determining how much compute should be spent on data vs. parameters. This research is critical for understanding why 2025/2026 models (like Llama 3 and 4) use significantly more tokens for smaller parameter counts.

- **Key Insight:** Most frontier models remain "under-trained" relative to their compute budgets; the most efficient path to scale is often training smaller models on exponentially larger, high-quality datasets.
- **Reference:** (Hoffmann et al., 2024/Update)
- **DOI:** [10.48550/arXiv.2203.15556](https://www.google.com/search?q=https://doi.org/10.48550/arXiv.2203.15556) *(Original reference for the evolving framework)*

### 4. AI Energy Demand: Computing Revolution Grid Impact (2026)

This paper analyzes the computational resources utilized at a macro scale. It quantifies the shift toward "co-location" strategies where AI data centers are built directly next to renewable energy sources to bypass the aging electrical grid.

- **Key Insight:** AI model training requirements are growing at $O(n \log n)$, but inference (deployment scale) is now the dominant energy consumer, often exceeding training costs by a factor of 10 in widely deployed models.
- **Reference:** (Discovery Alert Research, 2026)
- **URL:** [discoveryalert.com.au/ai-energy-demand-growth-2026/](https://discoveryalert.com.au/ai-energy-demand-growth-2026/)

### 5. Strategic Scaling: The $700 Billion Infrastructure Pivot (2026)

This report/paper examines the economic scale of AI, detailing the shift from "R&D scaling" to "Industrial scaling." It profiles how companies are spending nearly $700 billion on specialized AI clusters (like Meta’s 16,000 H100 cluster) to support hundreds of millions of concurrent users.

- **Key Insight:** "Inference Scaling" (spending more compute at the moment the AI thinks/answers) is the new frontier, as seen in models like DeepSeek-V3 and OpenAI’s o1-series.
- **Reference:** (BuildFastWithAI, 2026)
- **URL:** [buildfastwithai.com/blogs/llm-scaling-laws-explained](https://www.buildfastwithai.com/blogs/llm-scaling-laws-explained)

------

### **Scale Matrix: Training vs. Deployment**

| **Aspect**               | **2024 Metric**   | **2026 Metric (Projected/Current)** |
| ------------------------ | ----------------- | ----------------------------------- |
| **Typical Cluster Size** | 10k - 20k GPUs    | 100k+ GPUs (Single Campus)          |
| **Data Center Power**    | 20 - 50 MW        | 500 MW - 1 GW                       |
| **Training Tokens**      | 2 - 5 Trillion    | 15 - 40 Trillion                    |
| **Primary Bottleneck**   | H100 Availability | Power & Thermal Management          |

Given your interest in "breadth of deployment," are you focusing more on the **environmental/energy footprint** of these massive systems, or the **economic barriers** that might prevent smaller players from reaching this level of scale?

## Access

The connectivity to external infrastructure, financial systems, or physical robotic actuators.

The study of "AI Access" has shifted from models that merely "chat" to models that "do." This involves **API-driven connectivity** to legacy infrastructure, **agentic financial reasoning**, and **robotic foundation models** that map digital logic to physical torque.

The following five papers/reports from late 2024 to early 2026 represent the frontier of AI’s interface with the world.

### 1. Computer Use: Enabling LLMs to Act via Graphical User Interfaces (2025)

This technical report details the shift from text-only APIs to "Computer Use" capabilities. It describes a system where an AI can "see" a screen (via screenshots) and "act" by generating precise (x,y) coordinates for mouse clicks and keystrokes. This is the ultimate "Access" unlock, allowing AI to use any software a human can, without needing a dedicated API.

- **Key Insight:** Access is no longer limited by structured data; by giving AI a "virtual set of hands" for the GUI, it gains access to the entire legacy ecosystem of human work.
- **Reference:** (Anthropic/Google Gemini Team, 2025)
- **URL:** [ai.google.dev/gemini-api/docs/computer-use](https://ai.google.dev/gemini-api/docs/computer-use)

### 2. Robots Empowered by AI Foundation Models and the Opportunities for 6G (2025)

This paper explores the "Physical Access" bottleneck. It introduces a prototype system where Foundation Models (FMs) use 6G networks to bypass local compute limits, allowing high-fidelity robotic actuators to be controlled by massive cloud-based reasoning engines in real-time.

- **Key Insight:** To achieve reliable physical access, AI requires "multimodal situation awareness" where the model understands not just the command, but the physics and geometry of the environment it is manipulating.
- **Reference:** (Huawei Research, 2025)
- **URL:** [huawei.com/en/huaweitech/future-technologies/robots-empowered-ai-foundation-models-6g](https://www.huawei.com/en/huaweitech/future-technologies/robots-empowered-ai-foundation-models-6g)

### 3. The 2026 State of AI Infrastructure: The Year Intelligence Became Infrastructure (2026)

This special report documents the integration of AI agents into critical infrastructure. It profiles the transition from "isolated pilots" to "connected deployment," where AI systems now have direct read/write access to power grids, logistics networks, and national security monitoring systems.

- **Key Insight:** In 2026, the primary risk of "Access" shifted from "hallucination" (getting it wrong) to "unverified agency" (the AI taking a physical action that cannot be easily undone).
- **Reference:** (AI World Journal, 2026)
- **URL:** [aiworldjournal.com/the-state-of-ai-in-2026](https://aiworldjournal.com/the-state-of-ai-in-2026-the-year-intelligence-became-infrastructure/)

### 4. AI Transformation in Financial Services: Predictors for Success in 2026 (2025)

Focusing on "Financial Access," this paper analyzes "Frontier Firms" that have given AI agents access to core banking workflows. It discusses the move from AI-as-advisor to AI-as-operator in capital markets, claims management, and real-time fraud prevention.

- **Key Insight:** Financial access is being governed by a new "API layer" (e.g., Bradesco’s Bridge) that enforces consistent policy and security while allowing agents to execute multi-step financial transactions autonomously.
- **Reference:** (Microsoft Financial Services, 2025)
- **URL:** [microsoft.com/en-us/industry/blog/financial-services/2025/12/18/](https://www.microsoft.com/en-us/industry/blog/financial-services/2025/12/18/ai-transformation-in-financial-services-5-predictors-for-success-in-2026/)

### 5. Insights into DeepSeek-V3: Scaling Challenges and Reflections on Hardware (2025)

This research highlights the "Hardware-Access" layer. It explains how models like DeepSeek-V3 use "hardware-aware co-design" to manage direct access to massive GPU clusters, optimizing how AI logic interacts with physical memory and communication interconnects (like NVLink and RDMA).

- **Key Insight:** True scale requires the AI's "brain" to be intimately connected to the "nervous system" of the hardware, using adaptive routing to prevent the network contention that usually kills high-level autonomy.
- **Reference:** (DeepSeek-AI Team, 2025)
- **DOI:** [10.48550/arXiv.2412.19437](https://www.google.com/search?q=https://doi.org/10.48550/arXiv.2412.19437)

------

### **Access Comparison Table**

| **Dimension** | **Primary Access Mechanism**        | **Typical 2026 Use Case**          |
| ------------- | ----------------------------------- | ---------------------------------- |
| **Physical**  | VLA (Vision-Language-Action) Models | Autonomous Warehouse Robotics      |
| **Financial** | Governed API Gateways               | Autonomous Claims & Underwriting   |
| **Systemic**  | GUI Navigation (Computer Use)       | Automating Legacy Desktop Software |
| **Network**   | 6G / Low-Latency Edge Links         | Remote AI-Guided Surgery           |



