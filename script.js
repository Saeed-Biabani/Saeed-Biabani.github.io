(() => {
  'use strict';
  // Supports the user's window.PROFILE schema and the older window.siteContent schema.
  const raw = window.PROFILE;
  const data = raw ? {
    profile: {
      name: raw.name,
      role: raw.title,
      headline: raw.affiliation ? `${raw.title || 'AI Researcher'} · ${raw.affiliation}` : raw.title,
      intro: raw.shortBio,
      about: raw.longBio,
      email: raw.email,
      github: raw.githubUrl,
      scholar: raw.scholarUrl,
      linkedin: raw.linkedinUrl,
      cv: raw.cvUrl,
    },
    research: raw.researchInterests,
    publications: raw.publications,
    projects: raw.projects,
    experience: raw.experience,
    teaching: raw.teaching,
    news: raw.news,
  } : window.siteContent;
  if (!data) { console.error('content.js must load before script.js'); return; }
  const $ = (id) => document.getElementById(id);
  const el = (tag, className, value) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = String(value);
    return node;
  };
  const safeHref = (href) => {
    if (typeof href !== 'string') return null;
    if (href.startsWith('mailto:')) return /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/.test(href) ? href : null;
    try { const url = new URL(href, location.href); return ['https:', 'http:'].includes(url.protocol) ? href : null; } catch { return null; }
  };
  function link(label, href, className = '') {
    const safe = safeHref(href);
    if (!safe) return null;
    const a = el('a', className, label);
    a.href = safe;
    if (!safe.startsWith('mailto:')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    return a;
  }
  const appendLink = (parent, label, href, cls) => { const a = link(label, href, cls); if (a) parent.append(a); };
  const profile = data.profile || {};
  document.title = (profile.name || 'Research') + ' — Research';
  $('brand').replaceChildren(document.createTextNode(profile.name || 'Research'), el('span', '', '.'));
  $('footerName').textContent = profile.name || '';
  $('heroEyebrow').textContent = profile.role || 'AI RESEARCH';
  const words = (profile.name || 'Research').trim().split(/\s+/);
  const last = words.pop();
  $('heroTitle').replaceChildren(document.createTextNode(words.join(' ') + (words.length ? ' ' : '')), el('em', '', last + '.'));
  $('headline').textContent = profile.headline || '';
  $('intro').textContent = profile.intro || '';
  $('year').textContent = new Date().getFullYear();
  const explore = el('a', 'action-link', 'Explore research ↗'); explore.href = '#research'; $('heroActions').append(explore);
  appendLink($('heroActions'), 'GitHub ↗', profile.github, 'plain-link');
  (profile.about || []).forEach((para) => $('aboutText').append(el('p', 'about-copy', para)));
  [['GitHub', profile.github], ['Google Scholar', profile.scholar], ['LinkedIn', profile.linkedin], ['CV', profile.cv]].forEach(([title, url]) => appendLink($('socialLinks'), title + ' ↗', url));
  (data.research || []).forEach((item, i) => {
    const article = el('article', 'research-item');
    const n = el('span', 'item-no', String(i + 1).padStart(2, '0'));
    const body = el('div'); body.append(el('h3', '', item.title), el('p', '', item.description));
    if (Array.isArray(item.keywords) && item.keywords.length) {
      const tags = el('div', 'tags'); item.keywords.forEach((keyword) => tags.append(el('span', '', keyword))); body.append(tags);
    }
    article.append(n, body); $('researchList').append(article);
  });
  function renderItems(key, listId, makeItem) {
    const records = data[key]; if (!Array.isArray(records) || !records.length) return;
    const section = $(key); section.hidden = false;
    for (const record of records) {
      const row = el('article', 'entry');
      row.append(el('div', 'entry-aside', record.year || record.period || record.date || ''), makeItem(record));
      $(listId).append(row);
    }
    const a = el('a', '', key[0].toUpperCase() + key.slice(1)); a.href = '#' + key;
    $('navigation').insertBefore(a, $('navigation').lastElementChild);
  }
  function richItem(record, mainKey, secondaryKey) {
    const box = el('div'); box.append(el('h3', '', record[mainKey] || ''));
    if (record[secondaryKey]) box.append(el('p', '', record[secondaryKey]));
    if (
      record.venue && secondaryKey !== 'venue' ||
      record.organization && secondaryKey !== 'organization' && !record.venue
    ) {
      box.append(el('p', '', record.venue || record.organization));
    }
    if (record.description && secondaryKey !== 'description') box.append(el('p', '', record.description));
    if (Array.isArray(record.links) && record.links.length) {
      const links = el('div', 'entry-links'); record.links.forEach(({label, url}) => appendLink(links, label + ' ↗', url)); if (links.children.length) box.append(links);
    }
    return box;
  }
  renderItems('publications', 'publicationsList', (x) => richItem(x, 'title', 'authors'));
  function projectItem(record) {
    const box = el('div', 'project-content');
    box.append(el('h3', '', record.name || 'Untitled project'));
    if (record.tagline) box.append(el('p', 'project-tagline', record.tagline));
    if (record.description) box.append(el('p', 'project-description', record.description));
    const meta = el('div', 'project-meta');
    if (Array.isArray(record.tags) && record.tags.length) {
      const tags = el('div', 'tags');
      record.tags.forEach((tag) => tags.append(el('span', '', tag)));
      meta.append(tags);
    }
    const actions = el('div', 'entry-links');
    appendLink(actions, 'GitHub ↗', record.url);
    if (Array.isArray(record.links)) {
      record.links.forEach(({label, url}) => appendLink(actions, `${label} ↗`, url));
    }
    if (record.stars !== undefined && record.stars !== null && String(record.stars).trim()) {
      actions.append(el('span', 'project-stars', `★ ${record.stars}`));
    }
    if (actions.children.length) meta.append(actions);
    if (meta.children.length) box.append(meta);
    return box;
  }
  renderItems('projects', 'projectsList', projectItem);
  renderItems('experience', 'experienceList', (x) => richItem(x, 'role', 'organization'));
  renderItems('teaching', 'teachingList', (x) => richItem(x, 'name', 'institution'));
  renderItems('news', 'newsList', (x) => { const body = el('div'); body.append(el('p', '', x.text || '')); return body; });
  const email = profile.email ? `mailto:${profile.email}` : '';
  appendLink($('contactLinks'), 'Email ↗', email);
  appendLink($('contactLinks'), 'GitHub ↗', profile.github);
  appendLink($('contactLinks'), 'LinkedIn ↗', profile.linkedin);
  appendLink($('contactLinks'), 'Google Scholar ↗', profile.scholar);
  const toggle = $('themeToggle');
  const moon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.4A8.5 8.5 0 0 1 9.6 4 8.5 8.5 0 1 0 20 14.4Z"/></svg>';
  const sun = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>';
  let theme = 'light';
  try { theme = localStorage.getItem('saeed-site-theme') === 'dark' ? 'dark' : 'light'; } catch {}
  function setTheme(next) {
    theme = next; document.documentElement.dataset.theme = theme;
    toggle.innerHTML = theme === 'dark' ? sun : moon;
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    try { localStorage.setItem('saeed-site-theme', theme); } catch {}
  }
  toggle.addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark'));
  setTheme(theme);
})();
