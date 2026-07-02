// Sitewide footer. Injects into any element with id="site-footer".
// 4-column layout per change-request spec §2.8.
(function() {
  const YEAR = new Date().getFullYear();

  const FOOTER_HTML = `
  <footer class="sf-footer">
    <div class="sf-container">
      <div class="sf-grid">

        <div class="sf-brand">
          <div class="sf-brand-row">
            <svg viewBox="0 0 360 130" role="img" aria-label="ODL" style="display:block;height:28px;width:auto;">
              <g fill="none" stroke="rgba(245,243,238,0.9)" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter">
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
            <div class="sf-brand-name">OnDemand Leaders</div>
          </div>
          <p class="sf-tag">Fractional CRO. GTM turnaround operator.</p>
          <address class="sf-addr">
            283 Plains Road West<br/>
            L7T 1G1, Burlington, Ontario
          </address>
        </div>

        <div class="sf-col">
          <div class="sf-col-label">Site</div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/how-i-work">How I Work</a></li>
            <li><a href="/fractional-cro">Fractional &amp; Interim CRO</a></li>
            <li><a href="/fractional-cro-toronto">Fractional CRO in Toronto</a></li>
            <li><a href="/help">HELP</a></li>
            <li><a href="/training">Training</a></li>
            <li><a href="/public-speaking">Public Speaking Coaching</a></li>
            <li><a href="/speaking">Speaking &amp; Workshops</a></li>
            <li><a href="/insights">Insights</a></li>
            <li><a href="/think-tank">Think Tank</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/elisha">Meet Elisha</a></li>
            <li><a href="https://calendly.com/christopherschafer/go-to-market-office-hours" target="_blank" rel="noopener">Book a Call</a></li>
          </ul>
        </div>

        <div class="sf-col sf-col--news">
          <div class="sf-col-label">Newsletter</div>
          <p class="sf-news-copy">Weekly insights on GTM turnarounds and HELP.</p>
          <form class="sf-news-form" action="#" method="post" novalidate>
            <label class="sf-sr-only" for="sf-news-email">Email address</label>
            <input id="sf-news-email" name="email" type="email" placeholder="you@company.com" autocomplete="email" required />
            <button type="submit" aria-label="Subscribe">
              Subscribe <span class="sf-arrow" aria-hidden="true">↗</span>
            </button>
          </form>
          <p class="sf-news-note">No spam. Unsubscribe anytime.</p>
        </div>

        <div class="sf-col">
          <div class="sf-col-label">Follow</div>
          <ul class="sf-social">
            <li><a href="https://www.linkedin.com/in/christopher-schafer-9116905/" target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href="https://www.youtube.com/@ondemandleaders3178" target="_blank" rel="noopener">YouTube</a></li>
            <li><a href="mailto:chris@ondemandleaders.com">chris@ondemandleaders.com</a></li>
          </ul>
        </div>

      </div>

      <div class="sf-bottom">
        <div>© ${YEAR} OnDemand Leaders Inc.</div>
        <div>Fractional CRO · GTM Turnaround Operator</div>
      </div>
    </div>
  </footer>
  `;

  const FOOTER_CSS = `
  .sf-footer {
    background: #050F22;
    border-top: 1px solid rgba(255,255,255,0.06);
    color: rgba(255,255,255,0.45);
    padding: 0;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  }
  .sf-container { width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 40px; }

  .sf-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1.3fr 0.8fr;
    gap: 56px;
    padding: 64px 0 40px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  .sf-brand { display: flex; flex-direction: column; gap: 16px; }
  .sf-brand-row { display: flex; align-items: center; gap: 12px; }
  .sf-brand-name { color: #fff; font-size: 14px; font-weight: 600; }
  .sf-tag { font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.55; max-width: 320px; margin: 0; font-weight: 500; }
  .sf-addr {
    font-style: normal;
    font-size: 13px; color: rgba(255,255,255,0.45);
    line-height: 1.65;
  }

  .sf-col-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    margin-bottom: 16px;
  }
  .sf-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; padding: 0; margin: 0; }
  .sf-col a {
    font-size: 13.5px;
    color: rgba(255,255,255,0.6);
    text-decoration: none;
    transition: color .16s ease;
  }
  .sf-col a:hover { color: #fff; }

  .sf-news-copy {
    font-size: 13px; color: rgba(255,255,255,0.6);
    line-height: 1.6; margin: 0 0 14px;
  }
  .sf-news-form {
    display: flex; gap: 8px; align-items: center;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 100px;
    padding: 4px 4px 4px 16px;
    transition: border-color .16s ease;
  }
  .sf-news-form:focus-within { border-color: rgba(255,255,255,0.28); }
  .sf-news-form input {
    flex: 1; min-width: 0;
    background: transparent;
    border: none; outline: none;
    color: #fff;
    font-family: inherit; font-size: 13px;
    padding: 8px 0;
  }
  .sf-news-form input::placeholder { color: rgba(255,255,255,0.35); }
  .sf-news-form button {
    display: inline-flex; align-items: center; gap: 6px;
    background: #fff; color: #0B1E3B;
    border: none; border-radius: 100px;
    padding: 9px 16px;
    font: inherit; font-size: 12.5px; font-weight: 600;
    cursor: pointer;
    transition: background .16s ease;
    white-space: nowrap;
  }
  .sf-news-form button:hover { background: #F8FAFC; }
  .sf-news-form .sf-arrow { transition: transform .16s ease; }
  .sf-news-form button:hover .sf-arrow { transform: translate(2px, -2px); }
  .sf-news-note {
    font-size: 11px; color: rgba(255,255,255,0.32);
    margin: 12px 0 0;
    font-family: 'JetBrains Mono', monospace;
    letter-spacing: 0.04em;
  }

  .sf-social a { font-size: 13.5px; }

  .sf-bottom {
    display: flex; justify-content: space-between; align-items: center;
    padding: 26px 0 40px; flex-wrap: wrap; gap: 12px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase;
    color: rgba(255,255,255,0.3);
  }

  .sf-sr-only {
    position: absolute; width: 1px; height: 1px;
    padding: 0; margin: -1px; overflow: hidden;
    clip: rect(0,0,0,0); white-space: nowrap; border: 0;
  }

  @media (max-width: 1080px) {
    .sf-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
  }
  @media (max-width: 640px) {
    .sf-container { padding: 0 24px; }
    .sf-grid { grid-template-columns: 1fr; gap: 36px; padding: 48px 0 32px; }
    .sf-bottom { padding: 20px 0 28px; }
  }
  `;

  function inject() {
    const slot = document.getElementById('site-footer');
    if (!slot) return;
    if (!document.getElementById('site-footer-css')) {
      const style = document.createElement('style');
      style.id = 'site-footer-css';
      style.textContent = FOOTER_CSS;
      document.head.appendChild(style);
    }
    slot.outerHTML = FOOTER_HTML;

    const form = document.querySelector('.sf-news-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const data = new FormData(form);
        data.append('access_key', '860abb01-77f4-4325-92c0-b7182ea89636');
        data.append('subject', 'New newsletter subscriber from the site footer');
        data.append('from_name', 'OnDemand Leaders · Footer');
        btn.disabled = true;
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: data
        }).then(r => r.json()).then(res => {
          btn.textContent = res.success ? 'Thanks ✓' : 'Try again';
          if (!res.success) btn.disabled = false;
        }).catch(() => { btn.textContent = 'Try again'; btn.disabled = false; });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();

/* ── Sitewide message widget: an on-brand "chat" bubble that captures a message
   and routes it to Chris's Web3Forms inbox. Async by design (replies come by
   email/phone, same-day), so the copy never implies a live human is waiting. ── */
(function() {
  const KEY = '860abb01-77f4-4325-92c0-b7182ea89636';

  const CSS = `
  .odlc-launch {
    position: fixed; right: 22px; bottom: 22px; z-index: 9998;
    display: inline-flex; align-items: center; gap: 9px;
    background: #0B1E3B; color: #fff; border: none; border-radius: 100px;
    padding: 13px 19px;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    font-size: 14px; font-weight: 600;
    box-shadow: 0 10px 30px rgba(5,15,34,0.28); cursor: pointer;
    transition: transform .16s ease, box-shadow .16s ease, background .16s ease;
  }
  .odlc-launch:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(5,15,34,0.34); background: #0d2547; }
  .odlc-launch svg { width: 18px; height: 18px; }
  .odlc-launch.odlc-hidden { display: none; }

  .odlc-panel {
    position: fixed; right: 22px; bottom: 22px; z-index: 9999;
    width: 360px; max-width: calc(100vw - 32px);
    background: #fff; border-radius: 18px;
    box-shadow: 0 24px 60px rgba(5,15,34,0.30); overflow: hidden;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    transform: translateY(12px) scale(0.98); opacity: 0; pointer-events: none;
    transition: transform .18s ease, opacity .18s ease;
  }
  .odlc-panel.odlc-open { transform: none; opacity: 1; pointer-events: auto; }

  .odlc-head { background: #0B1E3B; color: #fff; padding: 20px 22px; position: relative; }
  .odlc-head h3 { margin: 0 0 6px; font-size: 16px; font-weight: 700; letter-spacing: -0.01em; }
  .odlc-head p { margin: 0; font-size: 12.5px; line-height: 1.55; color: rgba(255,255,255,0.72); }
  .odlc-close {
    position: absolute; top: 14px; right: 14px;
    background: rgba(255,255,255,0.1); border: none; color: #fff;
    width: 30px; height: 30px; border-radius: 50%; font-size: 19px; line-height: 1;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: background .16s ease;
  }
  .odlc-close:hover { background: rgba(255,255,255,0.2); }

  .odlc-body { padding: 18px 22px 22px; }
  .odlc-field { margin-bottom: 12px; }
  .odlc-field label {
    display: block; font-family: 'JetBrains Mono', monospace;
    font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
    color: #5b6573; margin-bottom: 5px;
  }
  .odlc-field input, .odlc-field textarea {
    width: 100%; box-sizing: border-box; border: 1px solid #d9dee6; border-radius: 10px;
    padding: 11px 13px; font: inherit; font-size: 14px; color: #0B1E3B;
    outline: none; transition: border-color .16s ease; resize: vertical;
  }
  .odlc-field input:focus, .odlc-field textarea:focus { border-color: #1f4e8c; }
  .odlc-field textarea { min-height: 84px; }

  .odlc-send {
    width: 100%; display: inline-flex; align-items: center; justify-content: center; gap: 7px;
    background: #0B1E3B; color: #fff; border: none; border-radius: 100px;
    padding: 13px 18px; font: inherit; font-size: 14px; font-weight: 600;
    cursor: pointer; transition: background .16s ease;
  }
  .odlc-send:hover { background: #0d2547; }
  .odlc-send:disabled { opacity: 0.6; cursor: default; }

  .odlc-alt { margin: 13px 0 0; text-align: center; font-size: 12.5px; color: #5b6573; }
  .odlc-alt a { color: #1f4e8c; font-weight: 600; text-decoration: none; }
  .odlc-alt a:hover { text-decoration: underline; }

  .odlc-done { text-align: center; padding: 10px 6px 6px; }
  .odlc-done h4 { margin: 0 0 8px; font-size: 17px; color: #0B1E3B; }
  .odlc-done p { margin: 0; font-size: 14px; line-height: 1.6; color: #4a5462; }
  .odlc-done a { color: #1f4e8c; font-weight: 600; }
  .odlc-hp { position: absolute; left: -9999px; opacity: 0; height: 0; width: 0; }

  @media (prefers-reduced-motion: reduce) { .odlc-launch, .odlc-panel { transition: none; } }
  @media (max-width: 480px) {
    .odlc-launch { right: 16px; bottom: 16px; padding: 0; width: 52px; height: 52px; justify-content: center; gap: 0; }
    .odlc-launch .odlc-launch__lbl { display: none; }
    .odlc-panel { right: 12px; left: 12px; bottom: 12px; width: auto; }
  }
  `;

  const PANEL = `
  <div class="odlc-panel" id="odlc-panel" role="dialog" aria-label="Send Chris a message" aria-hidden="true">
    <div class="odlc-head">
      <button class="odlc-close" id="odlc-close" aria-label="Close message panel">&times;</button>
      <h3>Send me a message</h3>
      <p>Tell me what is going on and I will get back to you the same day. I am usually with a client, so this and a LinkedIn message are the fastest ways to reach me. I often reply within a few hours, sometimes by phone.</p>
    </div>
    <div class="odlc-body" id="odlc-body">
      <form id="odlc-form" novalidate>
        <div class="odlc-field">
          <label for="odlc-name">Your name</label>
          <input id="odlc-name" name="name" type="text" autocomplete="name" required />
        </div>
        <div class="odlc-field">
          <label for="odlc-email">Email</label>
          <input id="odlc-email" name="email" type="email" autocomplete="email" placeholder="you@company.com" required />
        </div>
        <div class="odlc-field">
          <label for="odlc-msg">How can I help?</label>
          <textarea id="odlc-msg" name="message" required></textarea>
        </div>
        <input type="checkbox" name="botcheck" class="odlc-hp" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <button type="submit" class="odlc-send" id="odlc-send">Send message</button>
        <p class="odlc-alt">Prefer LinkedIn? <a href="https://www.linkedin.com/in/christopher-schafer-9116905/" target="_blank" rel="noopener">Message me there</a></p>
      </form>
    </div>
  </div>
  <button class="odlc-launch" id="odlc-launch" aria-label="Send a message" aria-expanded="false" aria-controls="odlc-panel">
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 0 1-.9-3.8A8.38 8.38 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
    <span class="odlc-launch__lbl">Message me</span>
  </button>
  `;

  function init() {
    if (document.getElementById('odlc-launch')) return;
    const style = document.createElement('style');
    style.id = 'odlc-css'; style.textContent = CSS;
    document.head.appendChild(style);
    const wrap = document.createElement('div');
    wrap.innerHTML = PANEL;
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);

    const launch = document.getElementById('odlc-launch');
    const panel = document.getElementById('odlc-panel');
    const closeBtn = document.getElementById('odlc-close');
    const form = document.getElementById('odlc-form');

    function open() {
      panel.classList.add('odlc-open'); panel.setAttribute('aria-hidden', 'false');
      launch.classList.add('odlc-hidden'); launch.setAttribute('aria-expanded', 'true');
      const f = document.getElementById('odlc-name'); if (f) f.focus();
    }
    function close() {
      panel.classList.remove('odlc-open'); panel.setAttribute('aria-hidden', 'true');
      launch.classList.remove('odlc-hidden'); launch.setAttribute('aria-expanded', 'false');
      launch.focus();
    }
    launch.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && panel.classList.contains('odlc-open')) close();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('odlc-send');
      const data = new FormData(form);
      data.append('access_key', KEY);
      data.append('subject', 'New website message · chat widget');
      data.append('from_name', 'OnDemand Leaders · Website chat');
      btn.disabled = true; btn.textContent = 'Sending...';
      fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Accept': 'application/json' }, body: data
      }).then(r => r.json()).then(res => {
        if (res.success) {
          document.getElementById('odlc-body').innerHTML =
            '<div class="odlc-done"><h4>Got it.</h4><p>Thanks for reaching out. I will be in touch shortly. Need me faster? <a href="https://www.linkedin.com/in/christopher-schafer-9116905/" target="_blank" rel="noopener">message me on LinkedIn</a>.</p></div>';
        } else { btn.disabled = false; btn.textContent = 'Try again'; }
      }).catch(() => { btn.disabled = false; btn.textContent = 'Try again'; });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
