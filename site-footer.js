// Sitewide footer — injects into any element with id="site-footer"
(function() {
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
          <p class="sf-tag">Interim President for mid-market companies whose leadership team has stopped agreeing on the problem.</p>
        </div>
        <div class="sf-col">
          <div class="sf-col-label">Site</div>
          <ul>
            <li><a href="/#problem">The Problem</a></li>
            <li><a href="/#service">Engagement</a></li>
            <li><a href="/#proof">Track Record</a></li>
            <li><a href="/#help">H.E.L.P.</a></li>
          </ul>
        </div>
        <div class="sf-col">
          <div class="sf-col-label">Contact</div>
          <ul>
            <li><a href="mailto:chris@ondemandleaders.com">chris@ondemandleaders.com</a></li>
            <li><a href="apply.html">Apply to work with Chris</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div class="sf-bottom">
        <div>© 2026 OnDemand Leaders · Chris Schafer</div>
        <div>GTA · NA · APAC</div>
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

  .sf-cta {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 40px;
    align-items: center;
    padding: 56px 0 56px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .sf-cta__eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    margin-bottom: 14px;
  }
  .sf-cta__title {
    font-size: clamp(28px, 3.4vw, 44px);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.032em;
    color: #fff;
    margin: 0 0 10px;
  }
  .sf-cta__title em {
    font-family: 'Fraunces', serif;
    font-style: italic; font-weight: 400;
    color: rgba(255,255,255,0.55);
  }
  .sf-cta__sub {
    font-size: 15px; line-height: 1.6;
    color: rgba(255,255,255,0.6);
    margin: 0;
    max-width: 520px;
  }
  .sf-cta__btn {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 16px 26px;
    border-radius: 100px;
    background: #fff;
    color: #0B1E3B;
    font-size: 14px; font-weight: 600; letter-spacing: -0.005em;
    text-decoration: none;
    white-space: nowrap;
    transition: background .16s ease, transform .12s ease;
  }
  .sf-cta__btn:hover { background: #F8FAFC; }
  .sf-cta__btn .sf-arrow { transition: transform .16s ease; }
  .sf-cta__btn:hover .sf-arrow { transform: translate(2px, -2px); }

  .sf-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: 48px;
    padding: 48px 0 36px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .sf-brand { display: flex; flex-direction: column; gap: 14px; }
  .sf-brand-row { display: flex; align-items: center; gap: 12px; }
  .sf-brand-name { color: #fff; font-size: 14px; font-weight: 600; }
  .sf-tag { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.65; max-width: 320px; margin: 0; }
  .sf-col-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    margin-bottom: 16px;
  }
  .sf-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; padding: 0; margin: 0; }
  .sf-col a { font-size: 14px; color: rgba(255,255,255,0.6); text-decoration: none; transition: color .16s ease; }
  .sf-col a:hover { color: #fff; }

  .sf-bottom {
    display: flex; justify-content: space-between; align-items: center;
    padding: 24px 0 36px; flex-wrap: wrap; gap: 12px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
    color: rgba(255,255,255,0.3);
  }

  @media (max-width: 900px) {
    .sf-cta { grid-template-columns: 1fr; gap: 24px; }
    .sf-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 600px) {
    .sf-container { padding: 0 24px; }
    .sf-grid { grid-template-columns: 1fr; gap: 32px; }
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
