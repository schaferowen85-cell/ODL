// Sitewide nav. Injects into any element with id="site-nav".
// Self-contained: own CSS prefix (sn-) so it doesn't collide with page styles.
// 4 top-level items + Knowledge dropdown (Insights, Think Tank, Resources) + Book a Call CTA.
(function() {
  const NAV_HTML = `
  <nav class="sn-nav" id="sn-nav" aria-label="Primary">
    <div class="sn-container">
      <div class="sn-inner">
        <a href="/" class="sn-logo" aria-label="OnDemand Leaders Home">
          <svg class="sn-mark" viewBox="0 0 360 130" role="img" aria-label="ODL">
            <g fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter">
              <circle cx="65" cy="65" r="58"></circle>
              <circle cx="65" cy="65" r="46"></circle>
              <line x1="65" y1="32" x2="65" y2="100"></line>
              <path d="M 42 48 L 42 72 Q 42 82 52 82"></path>
              <path d="M 88 48 L 88 72 Q 88 82 78 82"></path>
              <line x1="55" y1="100" x2="75" y2="100"></line>
              <path d="M 150 12 L 150 118 L 198 118 Q 252 118 252 65 Q 252 12 198 12 Z"></path>
              <path d="M 162 24 L 162 106 L 196 106 Q 240 106 240 65 Q 240 24 196 24 Z"></path>
              <path d="M 274 12 L 274 118 L 348 118 L 348 106 L 286 106 L 286 12 Z"></path>
            </g>
          </svg>
          <span class="sn-wordmark">OnDemand Leaders</span>
        </a>
        <ul class="sn-links" role="list">
          <li><a href="/about">About</a></li>
          <li><a href="/how-i-work">How I Work</a></li>
          <li><a href="/help">HELP</a></li>
          <li><a href="/training">Training</a></li>
          <li class="sn-dd" id="sn-dd">
            <button type="button" class="sn-dd-trigger" id="sn-dd-trigger" aria-expanded="false" aria-haspopup="true" aria-controls="sn-dd-menu">Knowledge <span class="sn-dd-caret" aria-hidden="true">&#9662;</span></button>
            <ul class="sn-dd-menu" id="sn-dd-menu" role="list">
              <li><a href="/insights">Insights</a></li>
              <li><a href="/think-tank">Think Tank</a></li>
              <li><a href="/resources">Resources</a></li>
            </ul>
          </li>
        </ul>
        <div class="sn-right">
          <a href="https://calendly.com/christopherschafer/go-to-market-office-hours" target="_blank" rel="noopener" class="sn-cta">Book a call <span class="sn-arrow" aria-hidden="true">↗</span></a>
          <button class="sn-burger" id="sn-burger" aria-label="Open navigation" aria-expanded="false" aria-controls="sn-drawer">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <div class="sn-drawer" id="sn-drawer" aria-hidden="true">
    <a href="/about">About</a>
    <a href="/how-i-work">How I Work</a>
    <a href="/help">HELP</a>
    <a href="/training">Training</a>
    <div class="sn-drawer-group">
      <div class="sn-drawer-label" aria-hidden="true">Knowledge</div>
      <a href="/insights">Insights</a>
      <a href="/think-tank">Think Tank</a>
      <a href="/resources">Resources</a>
    </div>
    <a href="https://calendly.com/christopherschafer/go-to-market-office-hours" target="_blank" rel="noopener" class="sn-drawer-cta">Book a call</a>
  </div>
  `;

  const NAV_CSS = `
  :root { --sn-h: 72px; }

  .sn-nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 200;
    height: var(--sn-h);
    display: flex; align-items: center;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    transition: background .25s ease, border-color .25s ease, box-shadow .25s ease;
    border-bottom: 1px solid transparent;
  }
  .sn-nav.sn-solid {
    background: rgba(11,30,59,0.92);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-color: rgba(255,255,255,0.07);
  }

  .sn-container { width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 40px; }
  .sn-inner { display: flex; align-items: center; justify-content: space-between; width: 100%; gap: 24px; }

  .sn-logo { display: flex; align-items: center; gap: 14px; flex-shrink: 0; text-decoration: none; }
  .sn-mark { display: block; height: 30px; width: auto; }
  .sn-wordmark {
    color: #fff; font-size: 13px; font-weight: 600; letter-spacing: -0.005em;
    padding-left: 14px; border-left: 1px solid rgba(255,255,255,0.18);
    white-space: nowrap;
  }

  .sn-links {
    display: flex;
    gap: 26px;
    list-style: none;
    margin: 0; padding: 0;
    align-items: center;
  }
  .sn-links a {
    font-size: 13px;
    color: rgba(255,255,255,0.65);
    text-decoration: none;
    transition: color .16s ease;
    white-space: nowrap;
  }
  .sn-links a:hover { color: #fff; }
  .sn-links a.sn-active { color: #fff; }

  .sn-dd { position: relative; }
  .sn-dd-trigger {
    display: inline-flex; align-items: center; gap: 6px;
    background: none; border: none; padding: 0; margin: 0;
    cursor: pointer;
    font-family: inherit; font-size: 13px;
    color: rgba(255,255,255,0.65);
    transition: color .16s ease;
    white-space: nowrap;
  }
  .sn-dd-trigger:hover, .sn-dd.sn-open .sn-dd-trigger { color: #fff; }
  .sn-dd-trigger.sn-active { color: #fff; }
  .sn-dd-caret { font-size: 11px; opacity: 0.8; transition: transform .16s ease; }
  .sn-dd.sn-open .sn-dd-caret { transform: rotate(180deg); }

  .sn-dd-menu {
    position: absolute; top: calc(100% + 14px); right: -14px;
    min-width: 190px; max-width: calc(100vw - 48px);
    margin: 0; padding: 8px;
    list-style: none;
    background: rgba(11,30,59,0.92);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 14px;
    box-shadow: 0 24px 48px -20px rgba(0,0,0,0.55);
    opacity: 0; visibility: hidden; transform: translateY(-6px);
    transition: opacity .18s ease, transform .18s ease, visibility .18s;
    z-index: 210;
  }
  .sn-dd-menu::before {
    content: ''; position: absolute; top: -16px; left: 0; right: 0; height: 16px;
  }
  .sn-dd.sn-open .sn-dd-menu { opacity: 1; visibility: visible; transform: translateY(0); }
  .sn-dd-menu a {
    display: block;
    padding: 11px 14px;
    border-radius: 9px;
    font-size: 13px;
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    white-space: nowrap;
    transition: background .14s ease, color .14s ease;
  }
  .sn-dd-menu a:hover { color: #fff; background: rgba(255,255,255,0.08); }
  .sn-dd-menu a.sn-active { color: #fff; background: rgba(255,255,255,0.1); }

  .sn-right { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }

  .sn-cta {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 11px 18px;
    border-radius: 100px;
    background: #fff; color: #0B1E3B;
    font-size: 13px; font-weight: 600;
    text-decoration: none;
    transition: background .16s ease, transform .12s ease;
    white-space: nowrap;
  }
  .sn-cta:hover { background: #F8FAFC; }
  .sn-cta .sn-arrow { transition: transform .16s ease; font-size: 13px; }
  .sn-cta:hover .sn-arrow { transform: translate(2px, -2px); }

  .sn-burger {
    display: none;
    flex-direction: column; gap: 4px;
    padding: 8px;
    background: none; border: none; cursor: pointer;
  }
  .sn-burger span {
    width: 22px; height: 1.5px; background: #fff;
    transition: transform .2s ease, opacity .2s ease;
  }
  .sn-burger[aria-expanded="true"] span:nth-child(1) { transform: translateY(5.5px) rotate(45deg); }
  .sn-burger[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
  .sn-burger[aria-expanded="true"] span:nth-child(3) { transform: translateY(-5.5px) rotate(-45deg); }

  .sn-drawer {
    display: none;
    position: fixed; top: var(--sn-h); left: 0; right: 0;
    background: rgba(5,15,34,0.98);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    padding: 12px 28px 28px;
    flex-direction: column;
    z-index: 199;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  }
  .sn-drawer.sn-open { display: flex; }
  .sn-drawer a {
    padding: 16px 0;
    color: rgba(255,255,255,0.75);
    font-size: 16px; font-weight: 500;
    text-decoration: none;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .sn-drawer a:last-child { border: none; }
  .sn-drawer a.sn-active { color: #fff; }
  .sn-drawer-group {
    display: flex; flex-direction: column;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .sn-drawer-label {
    padding: 18px 0 4px;
    font-size: 11px; font-weight: 600;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: rgba(255,255,255,0.4);
  }
  .sn-drawer-group a { padding-left: 14px; }
  .sn-drawer-cta {
    margin-top: 18px;
    padding: 14px 20px !important;
    background: #fff; color: #0B1E3B !important;
    border-radius: 100px;
    text-align: center;
    font-weight: 600 !important;
  }

  @media (max-width: 1080px) {
    .sn-links { gap: 20px; }
    .sn-links a { font-size: 12.5px; }
    .sn-wordmark { display: none; }
  }
  @media (max-width: 960px) {
    .sn-links { display: none; }
    .sn-burger { display: flex; }
    .sn-cta { display: none; }
    .sn-wordmark { display: inline; }
  }
  @media (max-width: 600px) {
    .sn-container { padding: 0 24px; }
    .sn-wordmark { display: none; }
  }
  `;

  function inject() {
    const slot = document.getElementById('site-nav');
    if (!slot) return;

    if (!document.getElementById('site-nav-css')) {
      const style = document.createElement('style');
      style.id = 'site-nav-css';
      style.textContent = NAV_CSS;
      document.head.appendChild(style);
    }

    const wrapper = document.createElement('div');
    wrapper.innerHTML = NAV_HTML;
    const nodes = Array.from(wrapper.children);
    slot.replaceWith(...nodes);

    const navEl = document.getElementById('sn-nav');
    const burger = document.getElementById('sn-burger');
    const drawer = document.getElementById('sn-drawer');

    // Scroll-solid behaviour
    const setSolid = () => {
      if (window.scrollY > 8) navEl.classList.add('sn-solid');
      else navEl.classList.remove('sn-solid');
    };
    setSolid();
    window.addEventListener('scroll', setSolid, { passive: true });

    // Mobile drawer
    if (burger && drawer) {
      burger.addEventListener('click', () => {
        const open = drawer.classList.toggle('sn-open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      });
      drawer.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          drawer.classList.remove('sn-open');
          burger.setAttribute('aria-expanded', 'false');
          drawer.setAttribute('aria-hidden', 'true');
        });
      });
    }

    // Knowledge dropdown (desktop): hover, click/tap, keyboard
    const dd = document.getElementById('sn-dd');
    const ddTrigger = document.getElementById('sn-dd-trigger');
    if (dd && ddTrigger) {
      let hoverOpened = false;
      const setDD = open => {
        dd.classList.toggle('sn-open', open);
        ddTrigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      };
      ddTrigger.addEventListener('click', e => {
        e.stopPropagation();
        // A click on a hover-opened menu pins it open instead of closing it.
        if (dd.classList.contains('sn-open') && !hoverOpened) {
          setDD(false);
        } else {
          setDD(true);
          hoverOpened = false;
        }
      });
      dd.addEventListener('pointerenter', e => {
        if (e.pointerType === 'mouse' && !dd.classList.contains('sn-open')) {
          setDD(true);
          hoverOpened = true;
        }
      });
      dd.addEventListener('pointerleave', e => {
        if (e.pointerType === 'mouse' && hoverOpened) {
          setDD(false);
          hoverOpened = false;
        }
      });
      dd.addEventListener('focusout', () => {
        setTimeout(() => { if (!dd.contains(document.activeElement)) setDD(false); }, 0);
      });
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && dd.classList.contains('sn-open')) {
          setDD(false);
          ddTrigger.focus();
        }
      });
      document.addEventListener('click', e => {
        if (!dd.contains(e.target)) setDD(false);
      });
    }

    // Active link highlighting based on pathname
    const path = window.location.pathname.replace(/\/index\.html?$/, '/').toLowerCase();
    const hit = (p, href) => p === href || p.startsWith(href + '/') || p.startsWith(href + '.');
    document.querySelectorAll('.sn-links a, .sn-drawer a').forEach(a => {
      const href = a.getAttribute('href').toLowerCase();
      if (href === '/' || href.indexOf('http') === 0) return;
      if (hit(path, href)) a.classList.add('sn-active');
    });

    // Knowledge section: light the trigger and the matching item,
    // including deep sections that live under the three hubs.
    const knowledgeMap = [
      ['/insights', '/insights'],
      ['/think-tank', '/think-tank'],
      ['/resources', '/resources'],
      ['/blog', '/insights'],
      ['/conversation-intelligence', '/think-tank']
    ];
    let knowledgeHit = '';
    knowledgeMap.forEach(pair => { if (hit(path, pair[0])) knowledgeHit = pair[1]; });
    if (knowledgeHit) {
      if (ddTrigger) ddTrigger.classList.add('sn-active');
      document.querySelectorAll('.sn-dd-menu a, .sn-drawer-group a').forEach(a => {
        if (a.getAttribute('href').toLowerCase() === knowledgeHit) a.classList.add('sn-active');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
