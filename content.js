/* =============================================================================
   content.js  —  Single source of truth for the whole site.
   Edit the values below to make this site your own. No other file needs to
   change for typical edits (bio, publications, projects, links, etc.).
   ============================================================================= */

window.PROFILE = {
  // -- Identity ---------------------------------------------------------------
  name: "Adrian Cole",
  honorific: "Dr.",
  initials: "AC",
  title: "AI Researcher",
  affiliation: "Institute for Machine Intelligence",
  affiliationShort: "IMI",
  location: "Zürich, Switzerland",
  pronouns: "he/him",
  email: "adrian.cole@example.edu",

  // -- Copy -------------------------------------------------------------------
  shortBio:
    "I research the alignment, interpretability, and capabilities of large language models — with a focus on making frontier systems reliably steerable and transparent.",
  longBio: [
    "I am a research scientist at the Institute for Machine Intelligence (IMI), where I lead the Reliable Foundations group. My work sits at the intersection of large language models, mechanistic interpretability, and AI alignment: I study why models behave the way they do, and how we can steer them toward intended outcomes under real-world deployment.",
    "Previously, I completed my Ph.D. in Computer Science at ETH Zürich, working on sparse autoencoders and feature circuit analysis for transformer language models. Before that, I spent two years as a research resident at a frontier AI lab, contributing to preference learning and red-teaming efforts for instruction-tuned models.",
    "I care deeply about reproducibility, open evaluation, and mentoring the next generation of researchers. When I am not writing papers, I am usually over-caffeinated, climbing, or rebuilding my static site generator for the third time.",
  ],

  // -- Links ------------------------------------------------------------------
  cvUrl: "#",
  scholarUrl: "https://scholar.google.com",
  githubUrl: "https://github.com",
  twitterUrl: "https://twitter.com",
  linkedinUrl: "https://www.linkedin.com",
  mastodonUrl: "https://mastodon.social",

  // -- Quick stats (hero) -----------------------------------------------------
  stats: [
    { label: "Publications", value: "27" },
    { label: "Citations", value: "4.1k" },
    { label: "h-index", value: "21" },
    { label: "Students mentored", value: "14" },
  ],

  // -- Recent news (About sidebar) -------------------------------------------
  news: [
    { date: "Jun 2025", text: "Invited talk at the ICML Workshop on Interpretability — \"What sparse autoencoders still can't see\"." },
    { date: "Apr 2025", text: "Our sparse-autoencoder scaling paper was accepted to TMLR. Code & SAE checkpoints released." },
    { date: "Jan 2025", text: "Two papers accepted to ICML 2025 — one on constitutional feedback, one on agent evaluations." },
    { date: "Oct 2024", text: "Started co-directing the OpenArena evaluation consortium." },
  ],

  // -- Research interests -----------------------------------------------------
  researchInterests: [
    {
      title: "Alignment & Steering",
      description:
        "Preference learning, constitutional methods, and online correction for instruction-tuned models deployed under distribution shift.",
      keywords: ["RLHF", "DPO", "Constitutional AI", "Scalable oversight"],
    },
    {
      title: "Mechanistic Interpretability",
      description:
        "Sparse autoencoders, feature circuits, and causal tracing to map what models compute — and why — inside transformer activations.",
      keywords: ["SAEs", "Circuit analysis", "Activation steering", "Probing"],
    },
    {
      title: "Evaluating Frontier Models",
      description:
        "Robust, open, and reproducible benchmarks for reasoning, agency, and safety — including adversarial and deceptive behaviors.",
      keywords: ["Evaluation", "Red-teaming", "Agent evals", "Reproducibility"],
    },
    {
      title: "Multimodal Reasoning",
      description:
        "Cross-modal grounding and tool-augmented reasoning, with an emphasis on when vision-language systems fail silently.",
      keywords: ["VLMs", "Tool use", "Grounding", "Faithfulness"],
    },
  ],

  // -- Publications -----------------------------------------------------------
  publications: [
    {
      id: "cole2025-sae",
      title: "Scaling Sparse Autoencoders to Production-Scale Language Models: Circuits, Features, and Failure Modes",
      authors: "Cole, A., Lindqvist, M., Okonkwo, T., & Yamashita, R.",
      venue: "Transactions on Machine Learning Research (TMLR)",
      year: 2025,
      type: "Journal",
      abstract:
        "We train sparse autoencoders across four model scales and show that feature granularity follows predictable power laws, while a small set of 'brittle' features explains most steering failures. We release the first open replication at 40B activated parameters.",
      links: [
        { label: "PDF", url: "#" },
        { label: "Code", url: "#" },
        { label: "BibTeX", url: "#" },
      ],
      highlighted: true,
    },
    {
      id: "cole2024-constitutional",
      title: "Constitutional Feedback Loops: Self-Correction Without Reward Hacking",
      authors: "Cole, A., Yamashita, R., & Mehta, P.",
      venue: "Proceedings of the 42nd International Conference on Machine Learning (ICML)",
      year: 2024,
      type: "Conference",
      abstract:
        "A feedback rule for constitutional methods that provably avoids reward-hacking under a finite-capacity adversary model, with empirical gains of 12% on truthfulness without detectable sycophancy regressions.",
      links: [
        { label: "PDF", url: "#" },
        { label: "Code", url: "#" },
        { label: "BibTeX", url: "#" },
      ],
      highlighted: true,
    },
    {
      id: "cole2024-evals",
      title: "OpenArena: A Reproducible Ecosystem for Evaluating Agentic Models",
      authors: "Okonkwo, T., Cole, A., & the OpenArena Consortium",
      venue: "Advances in Neural Information Processing Systems (NeurIPS), Datasets & Benchmarks",
      year: 2024,
      type: "Conference",
      abstract:
        "An open, version-pinned suite of 320 agentic tasks with sandboxed execution, designed so that capability claims can be independently reproduced. We document seven cases where headline numbers failed to replicate.",
      links: [
        { label: "PDF", url: "#" },
        { label: "Dataset", url: "#" },
        { label: "BibTeX", url: "#" },
      ],
    },
    {
      id: "cole2023-probing",
      title: "Probing the Geometry of Refusal in Instruction-Tuned Models",
      authors: "Cole, A. & Mehta, P.",
      venue: "Findings of EMNLP",
      year: 2023,
      type: "Conference",
      abstract:
        "We show that refusal directions are low-dimensional, compositional, and largely transferable across model families — with implications for both safety and jailbreak robustness.",
      links: [
        { label: "PDF", url: "#" },
        { label: "BibTeX", url: "#" },
      ],
    },
    {
      id: "cole2023-vlm",
      title: "When Vision-Language Models Hallucinate: A Taxonomy and a Detector",
      authors: "Lindqvist, M., Cole, A., & Yamashita, R.",
      venue: "Proceedings of the IEEE/CVF CVPR",
      year: 2023,
      type: "Conference",
      abstract:
        "A taxonomy of object-hallucination failure modes in VLMs, plus a lightweight, activation-based detector that runs in under 1ms per generation step.",
      links: [
        { label: "PDF", url: "#" },
        { label: "Code", url: "#" },
      ],
    },
    {
      id: "cole2022-redteam",
      title: "Red-Teaming at Scale: Crowd + Model Adversaries for RLHF",
      authors: "Cole, A., Mehta, P., & the Alignment Lab",
      venue: "NeurIPS Workshop on Socially Responsible Language Modelling (SoLaR)",
      year: 2022,
      type: "Workshop",
      abstract:
        "We combine crowd workers and automated adversaries to surface 11k unsafe prompts, and study how each source contributes to downstream preference-learning gains.",
      links: [{ label: "PDF", url: "#" }],
    },
    {
      id: "cole2021-thesis",
      title: "Toward Transparent Transformers: Feature Discovery in Large Language Models (Ph.D. Thesis)",
      authors: "Cole, A.",
      venue: "ETH Zürich, Department of Computer Science",
      year: 2021,
      type: "Thesis",
      abstract:
        "My doctoral dissertation on sparse feature discovery, covering theory, scaling laws, and three case studies of feature circuits that govern in-context learning.",
      links: [
        { label: "PDF", url: "#" },
        { label: "Slides", url: "#" },
      ],
    },
    {
      id: "cole2020-sparsify",
      title: "Sparsify Then Read: Efficient Top-k Routing for Mixture-of-Experts",
      authors: "Cole, A. & Lindqvist, M.",
      venue: "arXiv preprint arXiv:2010.00000",
      year: 2020,
      type: "Preprint",
      abstract:
        "A routing primitive that decouples expert selection from token embedding, reducing inference cost without quality loss on translation and summarization benchmarks.",
      links: [{ label: "arXiv", url: "#" }],
    },
  ],

  // -- Experience & Education timeline ---------------------------------------
  experience: [
    { period: "2022 — Present", role: "Research Scientist & Group Lead, Reliable Foundations", organization: "Institute for Machine Intelligence (IMI)", description: "Lead a team of 6 researchers and 4 students working on alignment, interpretability, and evaluation of frontier models. Co-director of the open OpenArena evaluation consortium.", kind: "position" },
    { period: "2021 — 2022", role: "Postdoctoral Researcher", organization: "ETH Zürich, AI Center", description: "Continued work on sparse autoencoders and feature circuits; co-taught the graduate course on Reliable Machine Learning.", kind: "position" },
    { period: "2019 — 2020", role: "Research Resident", organization: "Frontier Alignment Lab", description: "Contributed to preference learning and red-teaming pipelines for instruction-tuned models; co-authored two workshop papers.", kind: "position" },
    { period: "2017 — 2021", role: "Ph.D. in Computer Science", organization: "ETH Zürich", description: "Dissertation: Toward Transparent Transformers — feature discovery in large language models. Advisor: Prof. R. Yamashita.", kind: "education" },
    { period: "2015 — 2017", role: "M.Sc. in Computer Science (Machine Learning)", organization: "ETH Zürich", description: "Thesis on efficient routing for mixture-of-experts models. Graduated with distinction.", kind: "education" },
    { period: "2012 — 2015", role: "B.Sc. in Mathematics & Computer Science", organization: "University of Edinburgh", description: "First-class honours. President of the undergraduate ML reading group.", kind: "education" },
  ],

  // -- Open-source projects ---------------------------------------------------
  projects: [
    { name: "sae-kit", tagline: "Train & inspect sparse autoencoders at scale", description: "A batteries-included toolkit for training sparse autoencoders on production-scale transformer activations, with first-class support for feature circuit tracing and activation steering experiments.", tags: ["PyTorch", "Interpretability", "Open Source"], url: "#", stars: "3.4k" },
    { name: "OpenArena", tagline: "Reproducible evals for agentic models", description: "A version-pinned, sandboxed evaluation ecosystem of 320 agentic tasks. Designed so any capability claim can be independently reproduced with a single command.", tags: ["Evaluation", "Agents", "Reproducibility"], url: "#", stars: "2.1k" },
    { name: "refusal-probe", tagline: "Geometry of refusal in instruction-tuned models", description: "Reference implementation and notebooks for probing, steering, and ablating refusal directions across model families. Reproduces all figures from our EMNLP paper.", tags: ["Probing", "Safety", "Notebooks"], url: "#", stars: "980" },
    { name: "vh-detector", tagline: "Sub-1ms hallucination detector for VLMs", description: "An activation-based detector for object hallucinations in vision-language models, drop-in to most HF VLM generation loops.", tags: ["VLMs", "Tooling"], url: "#", stars: "640" },
  ],

  // -- Teaching ---------------------------------------------------------------
  teaching: [
    { code: "CS-780", name: "Reliable Machine Learning", role: "Instructor", institution: "ETH Zürich", year: "Spring 2025", description: "Graduate course on alignment, interpretability, evaluation, and deployment safety. 120 students, project-based final." },
    { code: "CS-780", name: "Reliable Machine Learning", role: "Co-instructor", institution: "ETH Zürich", year: "Spring 2023", description: "Designed and taught the interpretability and evaluation modules; restructured the project track." },
    { code: "CS-421", name: "Deep Learning", role: "Teaching Assistant", institution: "ETH Zürich", year: "Autumn 2020", description: "Led problem sessions and grading for 300 students; co-authored the transformer practical." },
  ],

  service: [
    "Program Committee / Reviewer: NeurIPS, ICML, ICLR (2020–present)",
    "Area Chair: NeurIPS Datasets & Benchmarks (2024)",
    "Co-organizer: Mechanistic Interpretability Workshop @ NeurIPS (2023, 2024)",
    "Advisor: Open Evaluation Foundation (2023–present)",
    "Editorial board: Machine Learning Evaluation Journal (2024–present)",
  ],

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
