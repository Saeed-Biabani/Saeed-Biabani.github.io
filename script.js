(() => {
 const d = window.PORTFOLIO || {};
 const byId = id => document.getElementById(id);
 const el = (tag,cls,txt) => { const n=document.createElement(tag); if(cls)n.className=cls;if(txt!==undefined)n.textContent=txt;return n; };
 const link = (label,url) => { const a=el('a','',label+' ↗');a.href=url;if(!url.startsWith('mailto:') && !url.startsWith('#')){a.target='_blank';a.rel='noopener noreferrer'}return a; };
 byId('intro').textContent=d.description||'';
 (d.about||[]).forEach(s=>byId('about-text').append(el('p','',s)));
 (d.research||[]).forEach(r=>{const item=el('article','research-item');item.append(el('h3','',r.name),el('p','',r.description));byId('research-list').append(item)});
 const addEntry=(item,parent,kind)=>{const row=el('article','entry');row.append(el('span','entry-year',kind==='paper'?(item.year||''):(item.category||'PROJECT').split(' ')[0]));const body=el('div');body.append(el('div','entry-title',item.title));if(kind==='paper'){body.append(el('p','',[item.authors,item.venue].filter(Boolean).join(' · ')))}else{body.append(el('p','',item.description))}const l=el('div','entry-links');(item.links||[]).forEach(x=>{if(x.url)l.append(link(x.label||'Link',x.url))});body.append(l);row.append(body);parent.append(row)};
 const papers=(d.publications||[]).filter(p=>p.year!=='EXAMPLE');const projects=(d.projects||[]).filter(p=>!String(p.description||'').toLowerCase().includes('example project slot'));
 if(papers.length)papers.forEach(x=>addEntry(x,byId('publication-list'),'paper'));else byId('publication-list').append(el('p','placeholder','Publications will be listed here.'));
 if(projects.length)projects.forEach(x=>addEntry(x,byId('project-list'),'project'));else byId('project-list').append(el('p','placeholder','Selected projects will be added soon.'));
 byId('contact-text').textContent=d.contactMessage||'Feel free to get in touch.';
 const labels={github:'GitHub',scholar:'Google Scholar',linkedin:'LinkedIn',email:'Email',cv:'CV'};
 Object.entries(d.links||{}).forEach(([key,url])=>{if(!url)return;const normalized=key==='email'&&!url.startsWith('mailto:')?'mailto:'+url:url;[byId('profile-links'),byId('contact-links')].forEach(container=>container.append(link(labels[key]||key,normalized)))});
 byId('year').textContent=new Date().getFullYear();
 const saved=localStorage.getItem('portfolio-theme');if(saved==='light'||saved==='dark')document.documentElement.dataset.theme=saved;
 document.querySelector('.theme-btn').addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem('portfolio-theme',next)});
})();
