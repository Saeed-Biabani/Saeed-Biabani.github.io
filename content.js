/* =============================================================================
   content.js  —  Single source of truth for the whole site.
   Edit the values below to make this site your own. No other file needs to
   change for typical edits (bio, publications, projects, links, etc.).
   ============================================================================= */

window.PROFILE = {
  // -- Identity ---------------------------------------------------------------
  name: "Saeed Biabani Mahalli",
  honorific: "",
  initials: "SB",
  title: "AI & Machine Learning Researcher",
  affiliation: "Machine Learning and Computer Vision Research Lab",
  affiliationShort: "MLVL",
  location: "Tehran, Iran",
  pronouns: "he/him",
  email: "s.biabanim@mazust.ac.ir",

  // -- Copy -------------------------------------------------------------------
  
   shortBio:
     "I am an undergraduate student and AI researcher at Mazandaran University of Science and Technology, with research interests in large language models, computer vision, representation learning, and knowledge-enhanced reasoning. I am particularly interested in developing intelligent systems that can learn meaningful representations, integrate structured knowledge, and reason across diverse forms of information.",
   longBio: [
     "I am an undergraduate student at Mazandaran University of Science and Technology and a member of the Machine Learning and Computer Vision Research Lab. My research interests lie in artificial intelligence and deep learning, particularly large language models (LLMs), natural language processing (NLP), computer vision, and representation learning. I am interested in understanding how intelligent systems learn from data, acquire meaningful representations, and generalize to complex and unfamiliar problems.",
     "My research interests also extend to knowledge-enhanced artificial intelligence, including knowledge graphs, retrieval-augmented generation (RAG), and reasoning over structured and unstructured information. I am particularly interested in bridging neural representation learning with structured knowledge and exploring architectures that enable more effective reasoning, generalization, and adaptation across different tasks and domains.",
     "Alongside my academic interests, I enjoy designing, implementing, and evaluating machine learning models and end-to-end AI systems. My goal is to contribute to fundamental research in artificial intelligence while developing practical, reliable, and efficient learning systems. I value reproducibility, rigorous experimentation, and open research, and I am enthusiastic about collaborating with researchers on challenging problems in machine learning and artificial intelligence.",
   ],


  // -- Links ------------------------------------------------------------------
  cvUrl: "#",
  scholarUrl: "https://scholar.google.com/citations?user=AqXUFWwAAAAJ&hl=en",
  githubUrl: "https://github.com/Saeed-Biabani",
  linkedinUrl: "https://www.linkedin.com/in/saeed-biabani-mahalli-b3604a225/",

  // -- Quick stats (hero) -----------------------------------------------------
  // stats: [
  //   { label: "Publications", value: "27" },
  //   { label: "Citations", value: "4.1k" },
  //   { label: "h-index", value: "21" },
  //   { label: "Students mentored", value: "14" },
  // ],

  // -- Recent news (About sidebar) -------------------------------------------
  // news: [
  //   { date: "Jun 2025", text: "Invited talk at the ICML Workshop on Interpretability — \"What sparse autoencoders still can't see\"." },
  //   { date: "Apr 2025", text: "Our sparse-autoencoder scaling paper was accepted to TMLR. Code & SAE checkpoints released." },
  //   { date: "Jan 2025", text: "Two papers accepted to ICML 2025 — one on constitutional feedback, one on agent evaluations." },
  //   { date: "Oct 2024", text: "Started co-directing the OpenArena evaluation consortium." },
  // ],

  // -- Research interests -----------------------------------------------------
   researchInterests: [
     {
       title: "Large Language Models",
       description:
         "Exploring the architectures, learning mechanisms, and reasoning capabilities of large language models, with a focus on improving their generalization, efficiency, and ability to solve complex problems.",
       keywords: [
         "Transformers",
         "Language Modeling",
         "Reasoning",
         "Efficient LLMs",
       ],
     },
     {
       title: "World Models",
       description:
         "Investigating how intelligent agents can learn structured representations of their environments, predict future states, and support planning and decision-making through learned models of the world.",
       keywords: [
         "Model-Based Learning",
         "State Representation",
         "Planning",
         "Predictive Modeling",
       ],
     },
     {
       title: "Representation Learning",
       description:
         "Developing methods for learning meaningful, transferable, and generalizable representations from complex data, with particular interest in self-supervised learning and multimodal representation learning.",
       keywords: [
         "Self-Supervised Learning",
         "Contrastive Learning",
         "Multimodal Learning",
         "Generalization",
       ],
     },
     {
       title: "Knowledge Graphs",
       description:
         "Exploring structured knowledge representations and graph-based learning to enhance knowledge integration, relational reasoning, and the capabilities of intelligent systems.",
       keywords: [
         "Knowledge Representation",
         "Graph Neural Networks",
         "Graph Reasoning",
         "Knowledge-Augmented AI",
       ],
     },
     {
       title: "Vision-Language Models",
       description:
         "Studying the integration of visual and linguistic information to develop multimodal models capable of understanding, grounding, and reasoning across images and natural language.",
       keywords: [
         "Multimodal Reasoning",
         "Vision-Language Alignment",
         "Visual Grounding",
         "Multimodal LLMs",
       ],
     },
   ],

  // -- Publications -----------------------------------------------------------
  publications: [
   {
     id: "biabani2026-transformer",
     title:
       "An effective knowledge-distilled transformer for intent detection and slot filling in Persian language",
     authors:
       "Saeed Biabani Mahalli, Jamshid Pirgazi, Ali Ghanbari Sorkhi",
     venue: "The Journal of Supercomputing (Springer Nature)",
     year: 2026,
     type: "Journal",
     abstract:
       "This paper presents an efficient Transformer-based framework for joint intent classification and slot filling in Persian, addressing the challenges of low-resource and imbalanced datasets. The proposed architecture incorporates Multi-Head Attention, RMSNorm, and SwiGLU, along with an HPC-accelerated training pipeline and hard sample mining. Through knowledge distillation, a compact student model achieves approximately 75% parameter reduction with minimal performance degradation, enabling efficient and reliable natural language understanding.",
     links: [
       {
         label: "Paper",
         url: "https://doi.org/10.1007/s11227-026-08432-6",
       },
       {
         label: "Springer",
         url: "https://link.springer.com/article/10.1007/s11227-026-08432-6",
       },
       {
         label: "BibTeX",
         url: "https://citation-needed.springer.com/v2/references/10.1007/s11227-026-08432-6?format=bibtex",
       },
     ],
     highlighted: true,
   },
  ],

  // -- Experience & Education timeline ---------------------------------------
  experience: [
    // { period: "2022 — Present", role: "Research Scientist & Group Lead, Reliable Foundations", organization: "Institute for Machine Intelligence (IMI)", description: "Lead a team of 6 researchers and 4 students working on alignment, interpretability, and evaluation of frontier models. Co-director of the open OpenArena evaluation consortium.", kind: "position" },
    // { period: "2021 — 2022", role: "Postdoctoral Researcher", organization: "ETH Zürich, AI Center", description: "Continued work on sparse autoencoders and feature circuits; co-taught the graduate course on Reliable Machine Learning.", kind: "position" },
    // { period: "2019 — 2020", role: "Research Resident", organization: "Frontier Alignment Lab", description: "Contributed to preference learning and red-teaming pipelines for instruction-tuned models; co-authored two workshop papers.", kind: "position" },
    // { period: "2017 — 2021", role: "Ph.D. in Computer Science", organization: "ETH Zürich", description: "Dissertation: Toward Transparent Transformers — feature discovery in large language models. Advisor: Prof. R. Yamashita.", kind: "education" },
    // { period: "2015 — 2017", role: "M.Sc. in Computer Science (Machine Learning)", organization: "ETH Zürich", description: "Thesis on efficient routing for mixture-of-experts models. Graduated with distinction.", kind: "education" },
   {
     period: "2025 — Present",
     role: "AI Team Lead",
     organization: "Mayanext",
     description:
       "Leading the AI team in the research, design, and development of intelligent systems and machine learning solutions. Responsible for guiding technical architecture, coordinating AI projects, and overseeing the development and deployment of AI-powered applications, with a focus on large language models, natural language processing, and applied machine learning.",
     kind: "position"
   },
   {
     period: "2021 — Present",
     role: "B.Sc. Student in Computer Engineering",
     organization: "Mazandaran University of Science and Technology",
     description:
       "Undergraduate student with a focus on artificial intelligence and machine learning. Research interests include large language models, computer vision, representation learning, world models, and knowledge graphs. Member of the Machine Learning and Computer Vision Research Lab (MLCV Lab).",
     kind: "education"
   },
  ],

  // -- Open-source projects ---------------------------------------------------
  // projects: [
  //   { name: "sae-kit", tagline: "Train & inspect sparse autoencoders at scale", description: "A batteries-included toolkit for training sparse autoencoders on production-scale transformer activations, with first-class support for feature circuit tracing and activation steering experiments.", tags: ["PyTorch", "Interpretability", "Open Source"], url: "#", stars: "3.4k" },
  //   { name: "OpenArena", tagline: "Reproducible evals for agentic models", description: "A version-pinned, sandboxed evaluation ecosystem of 320 agentic tasks. Designed so any capability claim can be independently reproduced with a single command.", tags: ["Evaluation", "Agents", "Reproducibility"], url: "#", stars: "2.1k" },
  //   { name: "refusal-probe", tagline: "Geometry of refusal in instruction-tuned models", description: "Reference implementation and notebooks for probing, steering, and ablating refusal directions across model families. Reproduces all figures from our EMNLP paper.", tags: ["Probing", "Safety", "Notebooks"], url: "#", stars: "980" },
  //   { name: "vh-detector", tagline: "Sub-1ms hallucination detector for VLMs", description: "An activation-based detector for object hallucinations in vision-language models, drop-in to most HF VLM generation loops.", tags: ["VLMs", "Tooling"], url: "#", stars: "640" },
  // ],

  // -- Teaching ---------------------------------------------------------------
  // teaching: [
  //   { code: "CS-780", name: "Reliable Machine Learning", role: "Instructor", institution: "ETH Zürich", year: "Spring 2025", description: "Graduate course on alignment, interpretability, evaluation, and deployment safety. 120 students, project-based final." },
  //   { code: "CS-780", name: "Reliable Machine Learning", role: "Co-instructor", institution: "ETH Zürich", year: "Spring 2023", description: "Designed and taught the interpretability and evaluation modules; restructured the project track." },
  //   { code: "CS-421", name: "Deep Learning", role: "Teaching Assistant", institution: "ETH Zürich", year: "Autumn 2020", description: "Led problem sessions and grading for 300 students; co-authored the transformer practical." },
  // ],

  // service: [
  //   "Program Committee / Reviewer: NeurIPS, ICML, ICLR (2020–present)",
  //   "Area Chair: NeurIPS Datasets & Benchmarks (2024)",
  //   "Co-organizer: Mechanistic Interpretability Workshop @ NeurIPS (2023, 2024)",
  //   "Advisor: Open Evaluation Foundation (2023–present)",
  //   "Editorial board: Machine Learning Evaluation Journal (2024–present)",
  // ],

  // -- Navigation -------------------------------------------------------------
  navItems: [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "publications", label: "Publications" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "teaching", label: "Teaching" },
    { id: "contact", label: "Contact" },
  ],

  // -- AI research assistant (optional) --------------------------------------
  // The widget stays hidden unless `assistant.enabled` is true.
  // To make it live, deploy a backend that accepts { message, history } and
  // returns { reply }, then set `apiUrl` to its URL. See README.md for a
  // ready-to-use serverless example using z-ai-web-dev-sdk.
  assistant: {
    enabled: true,
    apiUrl: "", // e.g. "https://your-backend.example.com/api/assistant"
    name: "ARIA",
    greeting:
      "Hi — I'm ARIA, {{first}}'s research assistant. Ask me about his publications, research directions, teaching, or how to get in touch.",
    suggestions: [
      "What are your main research interests?",
      "Summarize your most cited work.",
      "Are you open to taking on students?",
      "How can I collaborate with you?",
    ],
    // Shown when no backend is configured or the request fails.
    fallbackReply:
      "I'm a demo assistant running in static mode. To enable live answers, set assistant.apiUrl in content.js to a backend endpoint (see README.md). Meanwhile, reach {{first}} directly via the Contact section.",
  },
};
