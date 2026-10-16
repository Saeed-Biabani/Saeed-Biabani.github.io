'use strict';
const data = window.SITE;
const $ = (selector) => document.querySelector(selector);
const el = (tag, className, value) => { const node = document.createElement(tag); if(className) node.className = className; if(value !== undefined) node.textContent = String(value); return node; };
const appendText = (root, tag, cls, value) => root.append(el(tag, cls, value));
function link(root,label,url){ if(!url || url==='#') return; const a=el('a','',label+' ↗'); a.href=url; if(/^https?:\/\//.test(url)){a.target='_blank';a.rel='noopener noreferrer';} root.append(a); }
$('#shortbio').textContent=data.profile.shortBio;
for(const paragraph of data.profile.longBio) appendText($('#bio'),'p','',paragraph);
const bits=[data.profile.title,data.profile.affiliation,data.profile.location].filter(Boolean); $('#meta').textContent=bits.join(' · ');
for(const [label,url] of Object.entries(data.profile.links)) link($('#primary-links'),label,url);
for(const [label,url] of Object.entries(data.profile.links)) link($('#contact-links'),label,url);
if(data.profile.email){const a=el('a','','Email ↗'); a.href='mailto:'+data.profile.email; $('#primary-links').append(a); const b=a.cloneNode(true); $('#contact-links').append(b);}
function entry(root,title,description,subtitle,tags,links){const box=el('article','entry');appendText(box,'h3','',title);if(subtitle)appendText(box,'div','subtitle',subtitle);if(description)appendText(box,'p','',description);if(tags?.length){const t=el('div','tags');tags.forEach(x=>appendText(t,'span','',x));box.append(t);}if(links?.length){const l=el('div','entry-links');links.forEach(x=>link(l,x.label,x.url));box.append(l);}root.append(box);}
data.researchInterests.forEach(i=>entry($('#interests'),i.title,i.description,'',i.keywords));
const specs=[
 ['publications','publication-list',data.publications,(x)=>[x.title,x.abstract,[x.authors,x.venue,x.year].filter(Boolean).join(' · '),[],x.links]],
 ['experience','experience-list',data.experience,(x)=>[x.role,x.description,[x.period,x.organization].filter(Boolean).join(' · ')]],
 ['projects','project-list',data.projects,(x)=>[x.name,x.description,x.tagline,x.tags,x.url?[{label:'Explore',url:x.url}]:[]]],
 ['teaching','teaching-list',data.teaching,(x)=>[x.name,x.description,[x.role,x.institution,x.year].filter(Boolean).join(' · ')]],
 ['news','news-list',data.news,(x)=>[x.text,'',x.date]]
];
for(const [id,target,items,transform] of specs){if(!items?.length){$('#'+id).hidden=true;document.querySelectorAll('[data-nav="'+id+'"]').forEach(a=>a.hidden=true);continue;}items.forEach(x=>entry($('#'+target),...transform(x)));}
$('#year').textContent=new Date().getFullYear();
const root=document.documentElement;let theme;try{theme=localStorage.getItem('saeed-theme');}catch{}if(theme==='dark'||(!theme&&matchMedia('(prefers-color-scheme: dark)').matches))root.classList.add('dark');
$('#theme').addEventListener('click',()=>{root.classList.toggle('dark');try{localStorage.setItem('saeed-theme',root.classList.contains('dark')?'dark':'light');}catch{}});
