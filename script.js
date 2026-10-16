(function () {
  'use strict';
  const d = document, data = window.PORTFOLIO;
  const $ = (id) => d.getElementById(id);
  const h = (tag, className, text) => { const e = d.createElement(tag); if (className) e.className = className; if (text !== undefined) e.textContent = String(text); return e; };
  const safeUrl = (value) => { try { const u = new URL(value, location.href); return ['https:', 'http:', 'mailto:'].includes(u.protocol) ? u.href : null; } catch { return null; } };
  function extLink(label, url, className = 'small-link') { const href = safeUrl(url); if (!href) return null; const a = h('a', className, label + ' ↗'); a.href = href; if (!href.startsWith('mailto:')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; } return a; }
  if (data) {
    $('hero-kicker').textContent = data.kicker;
    $('hero-description').textContent = data.description;
    $('about-paragraph-one').textContent = data.about[0]; $('about-paragraph-two').textContent = data.about[1];
    $('contact-message').textContent = data.contactMessage;
    const socials = $('social-links');
    [['github','GitHub'], ['scholar','Google Scholar'], ['linkedin','LinkedIn']].forEach(([key,label]) => { const link = extLink(label, data.links[key], 'social-link'); if (link) socials.append(link); });
    const cv = $('cv-link'); if (data.links.cv && safeUrl(data.links.cv)) { cv.href = safeUrl(data.links.cv); cv.textContent = 'Download my CV ↗'; } else { cv.href = '#contact'; cv.textContent = 'Get in touch ↗'; }
    const emailButton = $('email-cta'); if (data.links.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.links.email)) { emailButton.href = 'mailto:' + data.links.email; } else { emailButton.href = data.links.github || '#top'; emailButton.textContent = 'Connect on GitHub ↗'; emailButton.target = '_blank'; emailButton.rel = 'noopener noreferrer'; }
    const research = $('research-grid'); data.research.forEach(item => { const card = h('article','research-card'); const top = h('div','research-top'); top.append(h('span','research-icon',item.icon),h('span','research-index',item.id)); card.append(top,h('h3','',item.name),h('p','',item.description)); const tags=h('div','tag-list'); item.tags.forEach(t=>tags.append(h('span','chip',t))); card.append(tags); research.append(card); });
    const pubs = $('publication-list'); data.publications.forEach(item => { const el=h('article','publication'); const left=h('div','pub-date',item.year); const middle=h('div','pub-body'); middle.append(h('span','pub-type',item.type),h('h3','',item.title),h('p','pub-authors',item.authors),h('p','pub-venue',item.venue)); if (item.note) middle.append(h('p','pub-note',item.note)); const links=h('div','pub-links'); (item.links || []).forEach(link=>{const a=extLink(link.label,link.url);if(a)links.append(a);}); middle.append(links); el.append(left,middle,h('span','pub-arrow','↗')); pubs.append(el); });
    const projects=$('project-grid'); data.projects.forEach((item,i) => { const card=h('article','project-card'); const illustration=h('div','project-illustration project-art-'+(i%3+1)); illustration.setAttribute('aria-hidden','true'); if(item.icon==='nodes'){illustration.innerHTML='<svg viewBox="0 0 360 180" fill="none" aria-hidden="true"><path d="M50 100 123 43 193 110 275 45 310 127 193 110 123 43 90 147 193 110 310 127" stroke="currentColor" stroke-width="1.7" opacity=".6"/><g fill="currentColor"><circle cx="50" cy="100" r="9"/><circle cx="123" cy="43" r="11"/><circle cx="193" cy="110" r="17"/><circle cx="275" cy="45" r="10"/><circle cx="310" cy="127" r="12"/><circle cx="90" cy="147" r="8"/></g></svg>'; } else if(item.icon==='vision'){illustration.innerHTML='<svg viewBox="0 0 360 180" fill="none" aria-hidden="true"><rect x="100" y="35" width="160" height="110" rx="16" stroke="currentColor" opacity=".7"/><rect x="121" y="55" width="118" height="72" rx="9" stroke="currentColor" stroke-dasharray="4 8"/><circle cx="180" cy="90" r="36" stroke="currentColor"/><circle cx="180" cy="90" r="15" fill="currentColor"/><path d="M60 90h40m160 0h40M180 15v20m0 110v20" stroke="currentColor"/></svg>'; } else {illustration.innerHTML='<svg viewBox="0 0 360 180" fill="none" aria-hidden="true"><rect x="76" y="35" width="208" height="110" rx="12" stroke="currentColor"/><path d="M95 125 136 92 165 104 208 62 244 79 265 49" stroke="currentColor" stroke-width="3"/><path d="M95 55h85M95 69h52" stroke="currentColor" opacity=".45"/><circle cx="208" cy="62" r="5" fill="currentColor"/><circle cx="244" cy="79" r="5" fill="currentColor"/></svg>'; } card.append(illustration);const body=h('div','project-body');body.append(h('div','project-category',item.category),h('h3','',item.title),h('p','',item.description));const tags=h('div','tag-list');item.tags.forEach(t=>tags.append(h('span','chip',t)));body.append(tags);const links=h('div','project-links');(item.links || []).forEach(l=>{const a=extLink(l.label,l.url);if(a)links.append(a);});body.append(links);card.append(body);projects.append(card); });
  }
  $('copyright').textContent = '© '+new Date().getFullYear()+' Saeed Biabani';
  const root=d.documentElement, storageKey='portfolio-theme', saved=localStorage.getItem(storageKey);
  const prefersDark=window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = saved === 'dark'||saved === 'light' ? saved : (prefersDark?'dark':'light');
  d.querySelector('.theme-toggle').addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=next;localStorage.setItem(storageKey,next);});
  const menu=d.querySelector('.menu-toggle'), mobile=$('mobile-nav');
  function closeMenu(){mobile.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');}
  menu.addEventListener('click',()=>{const opening=mobile.hidden;mobile.hidden=!opening;menu.setAttribute('aria-expanded',String(opening));menu.setAttribute('aria-label',opening?'Close menu':'Open menu');});
  mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  d.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  const navLinks=[...d.querySelectorAll('.desktop-nav a')]; const sections=navLinks.map(a=>d.querySelector(a.getAttribute('href'))).filter(Boolean);
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}});},{rootMargin:'-22% 0px -68% 0px'});sections.forEach(s=>observer.observe(s));}
})();
