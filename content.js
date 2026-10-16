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
     "I am an undergraduate AI researcher at Mazandaran University of Science and Technology, interested in large language models, world models, representation learning, knowledge graphs, and multimodal AI.",
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
  projects: [
     {
        name: "Deep Learning-Based Document Scanner",
        tagline: "Document Detection and Extraction Using U-Net",
        description:
          "A deep learning-based document scanning system that uses a pretrained U-Net-like architecture for document segmentation in natural scene images. The system detects document boundaries, extracts the document region, and enhances the scanned output using image processing techniques.",
        tags: [
          "PyTorch",
          "Computer Vision",
          "U-Net",
          "Semantic Segmentation",
          "OpenCV"
        ],
        url: "https://github.com/Saeed-Biabani/Document-Scanner",
        stars: "20"
      },
     {
        name: "Persian Optical Character Recognition",
        tagline: "Autoregressive Transformer for Persian Text Recognition",
        description:
          "An end-to-end Transformer-based OCR system for recognizing printed and handwritten Persian text. The architecture combines a Vision Transformer (ViT) encoder with an autoregressive Transformer decoder to generate text from input images. Trained on the Persian-OCR-230K dataset.",
        tags: ["PyTorch", "Computer Vision", "Transformers", "OCR"],
        url: "https://github.com/Saeed-Biabani/Optical-Character-Recognition",
        stars: "4"
      },
     {
        name: "English-to-Persian Neural Machine Translation",
        tagline: "Transformer-Based English-to-Persian Translation",
        description:
          "An end-to-end neural machine translation system built with PyTorch, implementing a Transformer encoder-decoder architecture from scratch. The model incorporates multi-head attention and sinusoidal positional encoding to learn contextual representations and generate Persian translations from English text. Trained on an English-Persian daily dialogue dataset.",
        tags: [
          "PyTorch",
          "Transformers",
          "Natural Language Processing",
          "Machine Translation"
        ],
        url: "https://github.com/Saeed-Biabani/Machine-Translation",
        stars: "5"
      },
  ],

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
