/* One editable source of truth, modeled after the sections in profile.ts.
   No fictional publications, awards, positions or citation statistics are published. */
window.SITE = {
  profile: {
    name: 'Saeed Biabani',
    title: 'AI & Machine Learning Researcher',
    affiliation: '', location: '', email: '',
    shortBio: 'Exploring how intelligent systems learn, perceive, and reason across language, vision, and structured knowledge.',
    longBio: [
      'My research interests include large language models, computer vision, representation learning, and knowledge graphs.',
      'I am particularly interested in connecting foundational machine learning ideas with reliable, useful AI systems.'
    ],
    links: { GitHub: 'https://github.com/saeed-biabani', Scholar: '', LinkedIn: '', CV: '' }
  },
  researchInterests: [
    { title: 'Language Models & Reasoning', description: 'Language modeling, retrieval, reasoning, and AI agents.', keywords: ['LLMs', 'Reasoning', 'RAG'] },
    { title: 'Computer Vision', description: 'Visual understanding, recognition, and multimodal models.', keywords: ['Vision', 'Multimodal'] },
    { title: 'Representation Learning', description: 'Self-supervised learning and meaningful neural representations.', keywords: ['Self-supervision', 'Embeddings'] },
    { title: 'Knowledge Graphs', description: 'Structured knowledge, graph-based retrieval, and question answering.', keywords: ['Knowledge Graphs', 'Graph RAG'] }
  ],
  publications: [], // { title, authors, venue, year, type, abstract, links: [{label,url}] }
  experience: [],   // { period, role, organization, description, kind }
  projects: [],     // { name, tagline, description, tags, url }
  teaching: [],     // { name, role, institution, year, description }
  service: [],
  news: []
};
