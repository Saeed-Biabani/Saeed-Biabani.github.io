/* =============================================================================
   script.js — renders the site from content.js and powers interactivity.
   Vanilla JS, no dependencies. Safe to serve statically (e.g. GitHub Pages).
   ============================================================================= */
(function () {
  "use strict";

  const P = window.PROFILE;
  if (!P) {
    console.error("[site] content.js missing — cannot render.");
    return;
  }
  const first = P.name.split(" ")[0];

  /* ---------------------------------------------------------------------------
     Icon library (inline SVG; stroke-based, currentColor)
     ------------------------------------------------------------------------- */
  const ICON = {
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    cap: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.41-.46-2.78-1.5-3.8.27-1.4.27-2.85 0-4.2 0 0-1-.3-3.5 1.3a12.3 12.3 0 0 0-6 0C7 0 6 .5 6 .5c-.27 1.35-.27 2.8 0 4.2A5.4 5.4 0 0 0 4.5 8.5c0 3.4 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 22v-2.5"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    rss: '<path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5"/>',
    arrowDown: '<path d="M12 5v14M19 12l-7 7-7-7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    quote: '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2-2-2H4c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h2"/><path d="M14 21c3 0 7-1 7-8V5c0-1.25-.756-2-2-2h-4c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h2"/>',
    star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" stroke="none"/>',
    arrowUR: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    send: '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.106 1.106z"/><path d="m21.5 2.5-9.5 9.5"/>',
    sparkles: '<path d="M9.937 15.539A4 4 0 0 0 7.072 12.7L2 11.072 7.072 9.445A4 4 0 0 0 9.937 6.58L11.565 1.508 13.192 6.58A4 4 0 0 0 16.057 9.445L21.13 11.072 16.057 12.7a4 4 0 0 0-2.865 2.865L11.565 20.637z"/>',
    bot: '<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><circle cx="9" cy="16" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="16" r="1" fill="currentColor" stroke="none"/>',
  };

  function svg(name) {
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${ICON[name] || ""}</svg>`;
  }

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function $$(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }
  function el(tag, attrs, html) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const k in attrs) {
        if (k === "class") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else if (k.indexOf("on") === 0 && typeof attrs[k] === "function")
          node.addEventListener(k.slice(2), attrs[k]);
        else if (attrs[k] != null) node.setAttribute(k, attrs[k]);
      }
    }
    if (html != null) node.innerHTML = html;
    return node;
  }

  /* ---------------------------------------------------------------------------
     Theme
     ------------------------------------------------------------------------- */
  const THEME_KEY = "ac-theme";
  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const btn = $("#themeToggle");
    if (btn) btn.innerHTML = svg(theme === "dark" ? "sun" : "moon");
  }
  function initTheme() {
    applyTheme(getPreferredTheme());
    $("#themeToggle").addEventListener("click", function () {
      const cur = document.documentElement.getAttribute("data-theme");
      const next = cur === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  /* ---------------------------------------------------------------------------
     Brand + nav
     ------------------------------------------------------------------------- */
  function renderBrand() {
    $("#brandMark").textContent = P.initials;
    $("#brandName").textContent = P.name;
    $("#footerMark").textContent = P.initials;
    $("#footerName").textContent = P.name;
    $("#footerCopy").textContent =
      "© " + new Date().getFullYear() + " · Built with vanilla HTML/CSS/JS";
    $("#footerMeta").innerHTML =
      P.affiliation + " · " + P.location + "<br />" +
      "Last updated " + new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });
  }

  function renderNav() {
    const main = $("#mainNav");
    const mobile = $("#mobileNavInner");
    P.navItems.forEach((item) => {
      const a = el("button", {
        class: "nav__link",
        "data-target": item.id,
        type: "button",
        onclick: function () { scrollToId(item.id); },
      }, item.label);
      main.appendChild(a);

      const b = el("button", {
        class: "mobile-nav__link",
        "data-target": item.id,
        type: "button",
        onclick: function () {
          closeMobileNav();
          scrollToId(item.id);
        },
      }, item.label);
      mobile.appendChild(b);
    });
  }

  function scrollToId(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------------------------------------------------------------------------
     Mobile nav
     ------------------------------------------------------------------------- */
  function initMobileNav() {
    const btn = $("#menuToggle");
    const drawer = $("#mobileNav");
    btn.innerHTML = svg("menu");
    btn.addEventListener("click", function () {
      const open = drawer.classList.toggle("is-open");
      btn.innerHTML = svg(open ? "x" : "menu");
      drawer.setAttribute("aria-hidden", open ? "false" : "true");
    });
    // close on resize to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) closeMobileNav();
    });
  }
  function closeMobileNav() {
    const drawer = $("#mobileNav");
    const btn = $("#menuToggle");
    if (drawer.classList.contains("is-open")) {
      drawer.classList.remove("is-open");
      btn.innerHTML = svg("menu");
      drawer.setAttribute("aria-hidden", "true");
    }
  }

  /* ---------------------------------------------------------------------------
     Hero
     ------------------------------------------------------------------------- */
  function renderHero() {
    $("#heroTitle").innerHTML = P.honorific + " " + escapeHtml(P.name);
    $("#heroSubtitle").textContent = P.title + " · " + P.affiliation;
    $("#heroLede").textContent = P.shortBio;
    $("#avatarInitials").textContent = P.initials;
    $("#avatarAffil").textContent = P.affiliationShort;
    $("#avatarLoc").textContent = P.location;

    const actions = $("#heroActions");
    actions.appendChild(
      el("a", {
        class: "btn btn--primary",
        href: P.cvUrl,
      }, svg("file") + "<span>Download CV</span>")
    );
    const socials = [
      { label: "Email", href: "mailto:" + P.email, icon: "mail" },
      { label: "Scholar", href: P.scholarUrl, icon: "cap" },
      { label: "GitHub", href: P.githubUrl, icon: "github" },
    ];
    socials.forEach(function (s) {
      actions.appendChild(
        el("a", {
          class: "btn btn--outline",
          href: s.href,
          target: s.href.indexOf("http") === 0 ? "_blank" : null,
          rel: "noreferrer",
          "aria-label": s.label,
        }, svg(s.icon) + "<span>" + s.label + "</span>")
      );
    });

    const stats = $("#heroStats");
    P.stats.forEach(function (s) {
      stats.appendChild(
        el("div", {}, '<p class="stat__value">' + escapeHtml(s.value) + "</p>" +
          '<p class="stat__label">' + escapeHtml(s.label) + "</p>")
      );
    });

    $("#scrollCue").addEventListener("click", function () { scrollToId("about"); });
  }

  /* ---------------------------------------------------------------------------
     About
     ------------------------------------------------------------------------- */
  function renderAbout() {
    const bio = $("#bioParagraphs");
    P.longBio.forEach(function (para) {
      bio.appendChild(el("p", { text: para }));
    });

    const meta = $("#aboutMeta");
    meta.appendChild(
      el("div", { class: "about__meta-item" },
        svg("pin") + '<span class="text-muted">Location</span>' +
        '<span class="footer-name" style="font-weight:500">' + escapeHtml(P.location) + "</span>")
    );
    meta.appendChild(
      el("div", { class: "about__meta-item" },
        svg("mail") + '<span class="text-muted">Pronouns</span>' +
        '<span style="font-weight:500">' + escapeHtml(P.pronouns) + "</span>")
    );

    const news = $("#newsList");
    P.news.forEach(function (n) {
      news.appendChild(
        el("li", { class: "news-item" },
          '<span class="news-item__date">' + escapeHtml(n.date) + "</span>" +
          '<span class="news-item__text">' + escapeHtml(n.text) + "</span>")
      );
    });
  }

  /* ---------------------------------------------------------------------------
     Research
     ------------------------------------------------------------------------- */
  function renderResearch() {
    const grid = $("#researchGrid");
    P.researchInterests.forEach(function (r, i) {
      const card = el("article", { class: "research-card reveal" });
      card.innerHTML =
        '<span class="research-card__num">0' + (i + 1) + "</span>" +
        '<h3 class="research-card__title">' + escapeHtml(r.title) + "</h3>" +
        '<p class="research-card__desc">' + escapeHtml(r.description) + "</p>";
      const chips = el("ul", { class: "chips" });
      r.keywords.forEach(function (k) {
        chips.appendChild(el("li", { class: "chip", text: k }));
      });
      card.appendChild(chips);
      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------------------
     Publications (filter + search + abstract toggle)
     ------------------------------------------------------------------------- */
  let pubState = { filter: "All", query: "" };

  function renderPublications() {
    const filtersWrap = $("#pubFilters");
    const types = ["All", "Journal", "Conference", "Workshop", "Preprint", "Thesis"];
    types.forEach(function (t) {
      const b = el("button", {
        class: "filter" + (t === "All" ? " is-active" : ""),
        "data-filter": t,
        type: "button",
        onclick: function () {
          pubState.filter = t;
          $$(".filter", filtersWrap).forEach(function (x) {
            x.classList.toggle("is-active", x.getAttribute("data-filter") === t);
          });
          renderPubList();
        },
      }, t);
      filtersWrap.appendChild(b);
    });

    const search = $("#pubSearch");
    search.addEventListener("input", function () {
      pubState.query = search.value.trim().toLowerCase();
      renderPubList();
    });

    renderPubList();
  }

  function renderPubList() {
    const list = $("#pubList");
    list.innerHTML = "";
    const q = pubState.query;
    const items = P.publications.filter(function (p) {
      if (pubState.filter !== "All" && p.type !== pubState.filter) return false;
      if (q) {
        const hay = (p.title + " " + p.authors + " " + p.venue + " " + p.abstract).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });

    if (items.length === 0) {
      list.appendChild(el("p", { class: "pub-empty", text: "No publications match your search." }));
      return;
    }

    items.forEach(function (p) {
      const openByDefault = !!p.highlighted;
      const li = el("li", {
        class: "pub" + (p.highlighted ? " pub--featured" : "") + " reveal",
      });
      const body = el("div", { class: "pub__body" });

      const meta = el("div", { class: "pub__meta" });
      meta.appendChild(el("span", { class: "pub__type", text: p.type }));
      meta.appendChild(el("span", { class: "pub__venue", text: p.venue }));
      meta.appendChild(el("span", { text: "·" }));
      meta.appendChild(el("span", { class: "pub__year", text: String(p.year) }));
      if (p.highlighted)
        meta.appendChild(el("span", { class: "pub__featured-tag", text: "Featured" }));
      body.appendChild(meta);

      body.appendChild(el("h3", { class: "pub__title", text: p.title }));
      body.appendChild(el("p", { class: "pub__authors", text: p.authors }));

      const toggleId = "pub-abstract-" + p.id;
      const toggle = el("button", {
        class: "pub__toggle" + (openByDefault ? " is-open" : ""),
        type: "button",
        "aria-expanded": openByDefault ? "true" : "false",
        onclick: function () {
          const open = toggle.classList.toggle("is-open");
          wrap.classList.toggle("is-open", open);
          toggle.setAttribute("aria-expanded", open ? "true" : "false");
          toggle.lastChild.textContent = open ? "Hide abstract" : "Show abstract";
        },
      }, svg("chevron") + '<span>' + (openByDefault ? "Hide abstract" : "Show abstract") + "</span>");

      const wrap = el("div", { class: "pub__abstract-wrap" + (openByDefault ? " is-open" : "") });
      wrap.appendChild(el("div", { class: "pub__abstract" },
        '<div class="pub__abstract-inner">' + svg("quote") + "<span>" + escapeHtml(p.abstract) + "</span></div>"));
      body.appendChild(toggle);
      body.appendChild(wrap);

      const links = el("div", { class: "pub__links" });
      p.links.forEach(function (l) {
        links.appendChild(
          el("a", {
            class: "pub-link",
            href: l.url,
            target: l.url.indexOf("http") === 0 ? "_blank" : null,
            rel: "noreferrer",
          }, "<span>" + escapeHtml(l.label) + "</span>" + svg("external"))
        );
      });
      body.appendChild(links);

      li.appendChild(body);
      list.appendChild(li);
    });
  }

  /* ---------------------------------------------------------------------------
     Timeline
     ------------------------------------------------------------------------- */
  function renderTimeline() {
    const tl = $("#timeline");
    P.experience.forEach(function (item) {
      const isEd = item.kind === "education";
      const li = el("li", { class: "timeline__item reveal" });
      li.innerHTML =
        '<span class="timeline__node">' + svg(isEd ? "cap" : "briefcase") + "</span>" +
        '<span class="timeline__period">' + escapeHtml(item.period) + "</span>" +
        '<h3 class="timeline__role">' + escapeHtml(item.role) + "</h3>" +
        '<p class="timeline__org">' + escapeHtml(item.organization) + "</p>" +
        '<p class="timeline__desc">' + escapeHtml(item.description) + "</p>";
      tl.appendChild(li);
    });
  }

  /* ---------------------------------------------------------------------------
     Projects
     ------------------------------------------------------------------------- */
  function renderProjects() {
    const grid = $("#projectsGrid");
    P.projects.forEach(function (p) {
      const a = el("a", {
        class: "project reveal",
        href: p.url,
        target: p.url.indexOf("http") === 0 ? "_blank" : null,
        rel: "noreferrer",
      });
      let chips = "";
      p.tags.forEach(function (t) {
        chips += '<li class="chip">' + escapeHtml(t) + "</li>";
      });
      a.innerHTML =
        '<div class="project__top">' +
          '<div><h3 class="project__name">' + escapeHtml(p.name) + "</h3>" +
          '<p class="project__tagline">' + escapeHtml(p.tagline) + "</p></div>" +
          '<span class="project__arrow">' + svg("external") + "</span>" +
        "</div>" +
        '<p class="project__desc">' + escapeHtml(p.description) + "</p>" +
        '<div class="project__bottom">' +
          '<ul class="chips">' + chips + "</ul>" +
          (p.stars ? '<span class="project__stars">' + svg("star") + escapeHtml(p.stars) + "</span>" : "") +
        "</div>";
      grid.appendChild(a);
    });
  }

  /* ---------------------------------------------------------------------------
     Teaching & service
     ------------------------------------------------------------------------- */
  function renderTeaching() {
    const list = $("#coursesList");
    P.teaching.forEach(function (c) {
      const li = el("li", { class: "course reveal" });
      li.innerHTML =
        '<div class="course__top">' +
          '<div><span class="course__code">' + escapeHtml(c.code) + "</span> " +
          '<span class="course__name">' + escapeHtml(c.name) + "</span></div>" +
          '<span class="course__year">' + escapeHtml(c.year) + "</span>" +
        "</div>" +
        '<p class="course__role">' + escapeHtml(c.role) + " · " + escapeHtml(c.institution) + "</p>" +
        '<p class="course__desc">' + escapeHtml(c.description) + "</p>";
      list.appendChild(li);
    });

    const svc = $("#serviceList");
    P.service.forEach(function (s) {
      svc.appendChild(el("li", { class: "service-item", text: s }));
    });
  }

  /* ---------------------------------------------------------------------------
     Contact
     ------------------------------------------------------------------------- */
  function renderContact() {
    const emailLink = $("#contactEmail");
    emailLink.setAttribute("href", "mailto:" + P.email);
    $("#contactEmailText").textContent = P.email;

    const links = $("#contactLinks");
    const items = [
      { label: "Email", value: P.email, href: "mailto:" + P.email, icon: "mail" },
      { label: "Scholar", value: "Google Scholar Profile", href: P.scholarUrl, icon: "cap" },
      { label: "GitHub", value: "@adriancole", href: P.githubUrl, icon: "github" },
      { label: "LinkedIn", value: "in/adriancole", href: P.linkedinUrl, icon: "linkedin" },
      { label: "Mastodon", value: "@" + first.toLowerCase() + "@mas.to", href: P.mastodonUrl, icon: "rss" },
    ];
    items.forEach(function (it) {
      const li = el("li", {});
      const a = el("a", {
        class: "contact-link",
        href: it.href,
        target: it.href.indexOf("http") === 0 ? "_blank" : null,
        rel: "noreferrer",
      });
      a.innerHTML =
        '<span class="contact-link__left">' + svg(it.icon) +
        '<span class="contact-link__label">' + escapeHtml(it.label) + "</span></span>" +
        '<span class="contact-link__value">' + escapeHtml(it.value) +
        '<span class="contact-link__arrow">' + svg("arrowUR") + "</span></span>";
      li.appendChild(a);
      links.appendChild(li);
    });
  }

  /* ---------------------------------------------------------------------------
     Scroll-spy + sticky-header shadow + reveal-on-scroll
     ------------------------------------------------------------------------- */
  function initScroll() {
    const header = $("#siteHeader");
    const sections = P.navItems.map(function (n) {
      return document.getElementById(n.id);
    }).filter(Boolean);

    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      // find active section
      let active = null;
      const probe = window.innerHeight * 0.42;
      for (var i = 0; i < sections.length; i++) {
        const r = sections[i].getBoundingClientRect();
        if (r.top <= probe && r.bottom >= probe) { active = sections[i].id; break; }
      }
      if (!active && sections.length) active = sections[0].id;
      $$(".nav__link, .mobile-nav__link").forEach(function (x) {
        x.classList.toggle("is-active", x.getAttribute("data-target") === active);
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Reveal on scroll
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      }, { rootMargin: "-60px 0px" });
      $$(".reveal").forEach(function (n) { io.observe(n); });
    } else {
      $$(".reveal").forEach(function (n) { n.classList.add("is-visible"); });
    }
  }

  /* ---------------------------------------------------------------------------
     AI research assistant
     ------------------------------------------------------------------------- */
  function initAssistant() {
    const cfg = P.assistant || {};
    if (!cfg.enabled) return;

    const launch = $("#assistantLaunch");
    const panel = $("#assistantPanel");
    const body = $("#assistantBody");
    const form = $("#assistantForm");
    const input = $("#assistantInput");
    const send = $("#assistantSend");
    const launchLabel = $("#assistantLaunchLabel");

    launch.hidden = false;
    launchLabel.textContent = "Ask " + (cfg.name || "ARIA") + " about my research";
    $("#assistantName").textContent = cfg.name || "ARIA";

    const greeting = (cfg.greeting || "").replace(/{{first}}/g, first);
    const messages = [{ role: "assistant", content: greeting }];
    let loading = false;

    function render() {
      body.innerHTML = "";
      messages.forEach(function (m) {
        const wrap = el("div", { class: "msg msg--" + m.role });
        wrap.appendChild(el("div", { class: "msg__bubble", text: m.content }));
        body.appendChild(wrap);
      });
      if (loading) {
        const t = el("div", { class: "assistant-typing", "aria-hidden": "true" });
        t.innerHTML = "<span></span><span></span><span></span>";
        body.appendChild(t);
      }
      // suggestions until first user message
      if (messages.filter(function (m) { return m.role === "user"; }).length === 0 && !loading) {
        const box = el("div", { class: "assistant-suggestions" });
        box.appendChild(el("p", { class: "assistant-suggestions__label", text: "Try asking" }));
        (cfg.suggestions || []).forEach(function (s) {
          box.appendChild(
            el("button", {
              class: "assistant-suggestion",
              type: "button",
              onclick: function () { submit(s); },
            }, s)
          );
        });
        body.appendChild(box);
      }
      body.scrollTop = body.scrollHeight;
    }

    function open() {
      panel.classList.remove("is-hidden");
      requestAnimationFrame(function () {
        panel.classList.add("is-shown");
      });
      launch.setAttribute("aria-expanded", "true");
      setTimeout(function () { input.focus(); }, 200);
    }
    function close() {
      panel.classList.add("is-hidden");
      panel.classList.remove("is-shown");
      launch.setAttribute("aria-expanded", "false");
    }

    launch.addEventListener("click", function () {
      if (panel.classList.contains("is-hidden")) open();
      else close();
    });
    $("#assistantClose").addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.classList.contains("is-hidden")) close();
    });

    input.addEventListener("input", function () {
      send.disabled = loading || !input.value.trim();
      // auto-grow
      input.style.height = "auto";
      input.style.height = Math.min(input.scrollHeight, 96) + "px";
    });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        submit(input.value);
      }
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      submit(input.value);
    });

    async function submit(text) {
      const content = (text || "").trim();
      if (!content || loading) return;
      const history = messages.filter(function (m) {
        return !(m.role === "assistant" && m.content === greeting);
      });
      messages.push({ role: "user", content: content });
      input.value = "";
      input.style.height = "auto";
      send.disabled = true;
      loading = true;
      render();

      let reply;
      if (cfg.apiUrl) {
        try {
          const res = await fetch(cfg.apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: content, history: history }),
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error || "Request failed");
          reply = data.reply;
        } catch (err) {
          reply = (cfg.fallbackReply || "").replace(/{{first}}/g, first);
        }
      } else {
        // static demo mode — small delay to feel responsive
        await new Promise(function (r) { setTimeout(r, 450); });
        reply = (cfg.fallbackReply || "").replace(/{{first}}/g, first);
      }

      messages.push({ role: "assistant", content: reply });
      loading = false;
      render();
    }

    render();
  }

  /* ---------------------------------------------------------------------------
     Utilities
     ------------------------------------------------------------------------- */
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------------- */
  function init() {
    initTheme();
    renderBrand();
    renderNav();
    initMobileNav();
    renderHero();
    renderAbout();
    renderResearch();
    renderPublications();
    renderTimeline();
    renderProjects();
    renderTeaching();
    renderContact();
    initScroll();
    initAssistant();
    // brand click → back to top
    $("#brandBtn").addEventListener("click", function () { scrollToId("top"); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
