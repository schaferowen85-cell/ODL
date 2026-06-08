// Sitewide newsletter pop-up — self-injecting. Just add:
//   <script src="/site-newsletter.js" defer></script>
// Own CSS prefix (nl-) so it never collides with page styles.
// Shows once per visitor: after a delay OR once they scroll past the midpoint,
// whichever comes first. Dismissible. Remembers the choice in localStorage.
(function() {
  const SEEN_KEY = 'odl_nl_seen';   // dismissed or subscribed — don't show again
  const DELAY_MS = 16000;           // time before it appears on its own
  const SCROLL_AT = 0.5;            // or once half the page is read

  // Respect a prior decision, and never interrupt the booking flow.
  try { if (localStorage.getItem(SEEN_KEY)) return; } catch (e) {}
  if (/\/apply|\/thank-you|\/strategic-session/.test(location.pathname)) return;

  const HTML = `
  <div class="nl-overlay" id="nl-overlay" role="dialog" aria-modal="true" aria-labelledby="nl-title" hidden>
    <div class="nl-card" role="document">
      <button class="nl-close" id="nl-close" aria-label="Close">×</button>
      <div class="nl-eyebrow">The OnDemand Leaders newsletter</div>
      <h2 class="nl-title" id="nl-title">Good thinking, <em>early.</em></h2>
      <p class="nl-body">We spend 2026 getting real operating frameworks into the hands of great companies as fast as we can. Subscribe and they land in your inbox first. One email a week at most.</p>
      <form class="nl-form" id="nl-form" novalidate>
        <label class="nl-sr" for="nl-email">Email address</label>
        <input id="nl-email" name="email" type="email" placeholder="you@company.com" autocomplete="email" required />
        <label class="nl-sr" for="nl-company">Company (optional)</label>
        <input id="nl-company" name="company" type="text" placeholder="Company (optional)" autocomplete="organization" />
        <button type="submit" id="nl-submit">Subscribe <span aria-hidden="true">↗</span></button>
      </form>
      <p class="nl-note">No funnels. No trapped data. We never sell or share your address, and you can unsubscribe anytime.</p>
    </div>
  </div>`;

  const CSS = `
  .nl-overlay {
    position: fixed; inset: 0; z-index: 1000;
    display: flex; align-items: center; justify-content: center;
    padding: 24px;
    background: rgba(5,15,34,0.55);
    backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
    opacity: 0; transition: opacity .28s ease;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  }
  .nl-overlay.nl-show { opacity: 1; }
  .nl-card {
    position: relative; width: 100%; max-width: 460px;
    background:
      radial-gradient(ellipse at 50% 0%, rgba(29,70,150,0.07), transparent 70%),
      #FFFFFF;
    border: 1px solid #E2E8F0; border-radius: 18px;
    padding: 44px 40px 36px;
    box-shadow: 0 40px 90px -30px rgba(5,15,34,0.55);
    transform: translateY(14px) scale(.98); transition: transform .28s ease;
    text-align: center;
  }
  .nl-overlay.nl-show .nl-card { transform: none; }
  .nl-close {
    position: absolute; top: 14px; right: 14px;
    width: 34px; height: 34px; border-radius: 50%;
    display: inline-flex; align-items: center; justify-content: center;
    font-size: 22px; line-height: 1; color: #8A9BB8;
    background: none; border: none; cursor: pointer;
    transition: color .15s ease, background .15s ease;
  }
  .nl-close:hover { color: #0B1E3B; background: #F8FAFC; }
  .nl-eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px; letter-spacing: 0.16em; text-transform: uppercase;
    color: #1D4696; margin-bottom: 14px;
  }
  .nl-title {
    font-size: 30px; font-weight: 800; letter-spacing: -0.026em;
    color: #0B1E3B; line-height: 1.1; margin: 0 0 14px;
  }
  .nl-title em { font-family: 'Fraunces', serif; font-style: italic; font-weight: 400; color: #1D4696; }
  .nl-body {
    font-size: 15.5px; line-height: 1.65; color: #4B5E77;
    margin: 0 auto 22px; max-width: 360px;
  }
  .nl-form { display: flex; flex-direction: column; gap: 10px; }
  .nl-form input {
    width: 100%; padding: 14px 16px;
    font: inherit; font-size: 15px; color: #0B1E3B;
    border: 1px solid #CBD5E8; border-radius: 100px;
    background: #FFFFFF; outline: none; text-align: center;
    transition: border-color .15s ease;
  }
  .nl-form input:focus { border-color: #1D4696; }
  .nl-form input::placeholder { color: #8A9BB8; }
  .nl-form button {
    margin-top: 4px;
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    background: #1D4696; color: #FFFFFF;
    font: inherit; font-size: 15px; font-weight: 600;
    padding: 14px 26px; border: none; border-radius: 100px; cursor: pointer;
    box-shadow: 0 8px 20px -10px rgba(29,70,150,0.6);
    transition: background .16s ease, transform .12s ease;
  }
  .nl-form button:hover { background: #163680; transform: translateY(-1px); }
  .nl-form button:disabled { background: #2E8B6A; transform: none; box-shadow: none; cursor: default; }
  .nl-note {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px; letter-spacing: 0.03em; line-height: 1.6;
    color: #8A9BB8; margin: 18px auto 0; max-width: 340px;
  }
  .nl-sr {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
  }
  @media (max-width: 480px) {
    .nl-card { padding: 40px 26px 30px; }
    .nl-title { font-size: 26px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .nl-overlay, .nl-card { transition: none; }
  }`;

  function remember() { try { localStorage.setItem(SEEN_KEY, '1'); } catch (e) {} }

  function build() {
    const style = document.createElement('style');
    style.id = 'site-newsletter-css';
    style.textContent = CSS;
    document.head.appendChild(style);

    const wrap = document.createElement('div');
    wrap.innerHTML = HTML;
    const overlay = wrap.firstElementChild;
    document.body.appendChild(overlay);

    let shown = false, fired = false;

    function open() {
      if (fired) return;
      fired = true;
      overlay.hidden = false;
      // next frame so the transition runs
      requestAnimationFrame(() => { overlay.classList.add('nl-show'); shown = true; });
      document.getElementById('nl-email').focus({ preventScroll: true });
    }
    function close() {
      remember();
      overlay.classList.remove('nl-show');
      setTimeout(() => overlay.remove(), 300);
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    }

    document.getElementById('nl-close').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && shown) close(); });

    document.getElementById('nl-form').addEventListener('submit', e => {
      e.preventDefault();
      const btn = document.getElementById('nl-submit');
      const data = new FormData(e.currentTarget);
      data.append('access_key', '860abb01-77f4-4325-92c0-b7182ea89636');
      data.append('subject', 'New newsletter subscriber — site popup');
      data.append('from_name', 'OnDemand Leaders · Newsletter');
      btn.disabled = true;
      const done = () => {
        btn.textContent = 'You’re in. Thank you ✓';
        overlay.querySelectorAll('input').forEach(i => i.disabled = true);
        remember();
        setTimeout(close, 1400);
      };
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      }).then(r => r.json()).then(done).catch(done);
    });

    const timer = setTimeout(open, DELAY_MS);
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && (window.scrollY / max) >= SCROLL_AT) open();
    }
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
