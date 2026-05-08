/* ODL — Official logo lockups
   Single mark: outlined circle "O" containing a Psi (Ψ),
   followed by outlined "D" and outlined "L".
   Built as one parametric SVG so it scales cleanly across:
   - Header (horizontal, compact, on dark)
   - Footer (small, single-color, with company name)
   - Icon / Favicon (just the O+Ψ)
   - Banner (large, hero, generous padding)
   - Regular (standalone mark, default usage) */

/* ─────────────────── Core mark — parametric ─────────────────── */
/* viewBox is 360 x 130 — close to source ratio (361x139).
   Stroke is unified for visual cohesion. */
function ODLMark({
  color = '#ffffff',
  stroke = 4,
  height = 120,
  withPsi = true,
  showDL = true,
  ariaLabel = 'ODL — OnDemand Leaders',
}) {
  const w = showDL ? 360 : 130;
  const h = 130;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      style={{ height, width: 'auto', display: 'block' }}
      role="img"
      aria-label={ariaLabel}
    >
      <g fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="square" strokeLinejoin="miter">
        {/* O — circle */}
        <circle cx="65" cy="65" r="58" />

        {/* Ψ — psi inside the O */}
        {withPsi && (
          <g>
            {/* center stem */}
            <line x1="65" y1="32" x2="65" y2="100" />
            {/* left arm */}
            <path d="M 42 48 L 42 72 Q 42 82 52 82" />
            {/* right arm */}
            <path d="M 88 48 L 88 72 Q 88 82 78 82" />
            {/* baseline serif under stem */}
            <line x1="55" y1="100" x2="75" y2="100" />
          </g>
        )}

        {showDL && (
          <g>
            {/* D — outlined */}
            <path d="M 150 12 L 150 118 L 198 118 Q 252 118 252 65 Q 252 12 198 12 Z" />
            {/* inner stroke for D depth (echoes the source) */}
            <path d="M 162 24 L 162 106 L 196 106 Q 240 106 240 65 Q 240 24 196 24 Z" />

            {/* L — outlined */}
            <path d="M 274 12 L 274 118 L 348 118 L 348 100 L 292 100 L 292 12 Z" />
            <path d="M 286 24 L 286 88 L 336 88" opacity="0" />
          </g>
        )}
      </g>
    </svg>
  );
}

/* ─────────────────── 1. Header ─────────────────── */
const HeaderUsage = () => (
  <div style={{
    width: '100%', height: '100%', background: '#0e0e10',
    display: 'flex', flexDirection: 'column',
  }}>
    <header style={{
      flex: '0 0 auto',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '22px 40px',
      borderBottom: '1px solid rgba(245,243,238,0.08)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <ODLMark color="#f5f3ee" stroke={3.5} height={42} />
        <div style={{
          paddingLeft: 14,
          marginLeft: 4,
          borderLeft: '1px solid rgba(245,243,238,0.18)',
          fontFamily: 'Inter, sans-serif',
          fontSize: 11,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(245,243,238,0.6)',
          lineHeight: 1.4,
        }}>
          OnDemand<br/>Leaders
        </div>
      </div>
      <nav style={{
        display: 'flex', gap: 28,
        fontFamily: 'Inter, sans-serif',
        fontSize: 13, fontWeight: 500,
        color: '#f5f3ee',
      }}>
        <span>The Problem</span>
        <span>Track Record</span>
        <span>H.E.L.P.</span>
        <span>Services</span>
        <span style={{
          padding: '8px 16px',
          border: '1px solid #f5f3ee',
          borderRadius: 999,
        }}>Book a Call</span>
      </nav>
    </header>
    <div style={{
      flex: 1,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'rgba(245,243,238,0.25)',
      fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
      letterSpacing: '0.16em',
    }}>
      ↑ HEADER USAGE — site nav, dark
    </div>
  </div>
);

/* ─────────────────── 2. Footer ─────────────────── */
const FooterUsage = () => (
  <div style={{
    width: '100%', height: '100%', background: '#0e0e10',
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{
      flex: 1,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'rgba(245,243,238,0.25)',
      fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
      letterSpacing: '0.16em',
    }}>
      ↓ FOOTER USAGE — small, single color
    </div>
    <footer style={{
      flex: '0 0 auto',
      padding: '28px 40px 24px',
      borderTop: '1px solid rgba(245,243,238,0.08)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      gap: 24,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <ODLMark color="rgba(245,243,238,0.9)" stroke={3} height={28} />
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 11,
          color: 'rgba(245,243,238,0.55)',
          letterSpacing: '0.04em',
        }}>
          OnDemand Leaders<br/>
          <span style={{ opacity: 0.7 }}>© 2025 · Toronto, ON</span>
        </div>
      </div>
      <div style={{
        display: 'flex', gap: 22,
        fontFamily: 'Inter, sans-serif',
        fontSize: 11,
        color: 'rgba(245,243,238,0.55)',
        letterSpacing: '0.04em',
      }}>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Contact</span>
      </div>
    </footer>
  </div>
);

/* ─────────────────── 3. Icon / Favicon ─────────────────── */
const IconUsage = () => (
  <div style={{
    width: '100%', height: '100%', background: '#0e0e10',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 36,
  }}>
    {/* large */}
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: 160, height: 160,
        background: '#0e0e10',
        border: '1px solid rgba(245,243,238,0.12)',
        borderRadius: 24,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <ODLMark color="#f5f3ee" stroke={5} height={104} showDL={false} />
      </div>
      <div style={{
        marginTop: 10,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 9, letterSpacing: '0.18em',
        color: 'rgba(245,243,238,0.45)',
      }}>
        APP · 160
      </div>
    </div>
    {/* medium */}
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: 80, height: 80,
        background: '#0e0e10',
        border: '1px solid rgba(245,243,238,0.12)',
        borderRadius: 14,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <ODLMark color="#f5f3ee" stroke={5.5} height={52} showDL={false} />
      </div>
      <div style={{
        marginTop: 10,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 9, letterSpacing: '0.18em',
        color: 'rgba(245,243,238,0.45)',
      }}>
        TILE · 80
      </div>
    </div>
    {/* favicon */}
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: 40, height: 40,
        background: '#0e0e10',
        border: '1px solid rgba(245,243,238,0.12)',
        borderRadius: 8,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <ODLMark color="#f5f3ee" stroke={7} height={28} showDL={false} />
      </div>
      <div style={{
        marginTop: 10,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 9, letterSpacing: '0.18em',
        color: 'rgba(245,243,238,0.45)',
      }}>
        FAV · 40
      </div>
    </div>
    {/* tiny */}
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: 24, height: 24,
        background: '#0e0e10',
        border: '1px solid rgba(245,243,238,0.12)',
        borderRadius: 5,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <ODLMark color="#f5f3ee" stroke={9} height={17} showDL={false} />
      </div>
      <div style={{
        marginTop: 10,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 9, letterSpacing: '0.18em',
        color: 'rgba(245,243,238,0.45)',
      }}>
        16 · TAB
      </div>
    </div>
  </div>
);

/* ─────────────────── 4. Banner / Hero ─────────────────── */
const BannerUsage = () => (
  <div style={{
    width: '100%', height: '100%',
    background: '#0e0e10',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: 60, boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* faint grid behind */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: `linear-gradient(rgba(245,243,238,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(245,243,238,0.04) 1px, transparent 1px)`,
      backgroundSize: '40px 40px',
      maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
      WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
    }} />
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <ODLMark color="#f5f3ee" stroke={3} height={180} />
      <div style={{
        marginTop: 32,
        fontFamily: 'Inter, sans-serif',
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.5em',
        textTransform: 'uppercase',
        color: 'rgba(245,243,238,0.6)',
        paddingLeft: '0.5em',
      }}>
        OnDemand · Leaders
      </div>
    </div>
    <div style={{
      position: 'absolute', bottom: 14, right: 18,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 9, letterSpacing: '0.18em',
      color: 'rgba(245,243,238,0.35)',
    }}>
      BANNER · HERO
    </div>
  </div>
);

/* ─────────────────── 5. Regular / Standalone ─────────────────── */
const RegularDark = () => (
  <div style={{
    width: '100%', height: '100%', background: '#0e0e10',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <ODLMark color="#f5f3ee" stroke={3.5} height={130} />
    <div style={{
      position: 'absolute', bottom: 12, left: 16,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10, letterSpacing: '0.16em',
      color: 'rgba(245,243,238,0.45)',
    }}>
      REGULAR · ON DARK
    </div>
  </div>
);

const RegularLight = () => (
  <div style={{
    width: '100%', height: '100%', background: '#f5f3ee',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative',
  }}>
    <ODLMark color="#0e0e10" stroke={3.5} height={130} />
    <div style={{
      position: 'absolute', bottom: 12, left: 16,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10, letterSpacing: '0.16em',
      color: 'rgba(14,14,16,0.5)',
    }}>
      REGULAR · ON LIGHT (INVERTED)
    </div>
  </div>
);

/* ─────────────────── App / Canvas layout ─────────────────── */
const { DesignCanvas, DCSection, DCArtboard } = window;

function App() {
  return (
    <DesignCanvas
      title="ODL — Logo Usage"
      subtitle="The original mark, built out in its required usage forms."
      background="#1a1a1a"
    >
      <DCSection id="primary" title="Regular / Standalone" subtitle="Default mark on dark and inverted on light">
        <DCArtboard id="reg-dark" label="Regular · on dark" width={620} height={300}>
          <RegularDark />
        </DCArtboard>
        <DCArtboard id="reg-light" label="Regular · inverted" width={620} height={300}>
          <RegularLight />
        </DCArtboard>
      </DCSection>

      <DCSection id="web" title="Header & Footer" subtitle="In-context site usage">
        <DCArtboard id="header" label="Site header" width={1200} height={420}>
          <HeaderUsage />
        </DCArtboard>
        <DCArtboard id="footer" label="Site footer" width={1200} height={300}>
          <FooterUsage />
        </DCArtboard>
      </DCSection>

      <DCSection id="icon" title="Icon" subtitle="App icons, favicons — mark only (Ψ inside O)">
        <DCArtboard id="icon-row" label="Icon scale set" width={920} height={300}>
          <IconUsage />
        </DCArtboard>
      </DCSection>

      <DCSection id="banner" title="Banner" subtitle="Hero / large-format usage with generous padding">
        <DCArtboard id="banner" label="Banner · hero" width={1200} height={520}>
          <BannerUsage />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

window.App = App;
