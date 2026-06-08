// Sitewide footer — injects into any element with id="site-footer".
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
            <li><a href="/help">HELP</a></li>
            <li><a href="/training">Training</a></li>
            <li><a href="/speaking">Speaking, Podcasts &amp; Videos</a></li>
            <li><a href="/insights">Insights</a></li>
            <li><a href="/think-tank">Think Tank</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/elisha">Meet Elisha</a></li>
            <li><a href="/apply.html">Book a Call</a></li>
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
        data.append('subject', 'New newsletter subscriber — site footer');
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
