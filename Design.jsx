/* global React, ReactDOM */
const { useEffect } = React;

/* ------------------------------------------------------------------ */
/* Minimal nav — just brand + "back to portfolio"                      */
/* ------------------------------------------------------------------ */
function DesignNav() {
  return (
    <nav className="dy-nav">
      <a className="dy-nav__brand" href="index.html">
        <span className="dy-nav__bracket">[</span>
        <span className="dy-nav__brand-letter">D</span>
        <span className="dy-nav__bracket">]</span>
        <span className="dy-nav__brand-name">deyan lo</span>
        <span className="caret" aria-hidden="true"></span>
      </a>

      <ul className="dy-nav__list">
        <li>
          <a className="dy-nav__link is-active" href="design.html">
            DESIGN / SELECTED WORK
          </a>
        </li>
      </ul>

      <a className="dy-nav__cta" href="index.html" aria-label="Back to portfolio">
        <span>← PORTFOLIO</span>
      </a>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
function DesignHero() {
  return (
    <section className="dy-design-hero">
      <span className="dy-design-hero__chyron chyron">// PRODUCT DESIGN — SELECTED WORK</span>
      <h1 className="dy-design-hero__title">
        Things I&rsquo;ve <em>designed</em>
      </h1>
      <p className="dy-design-hero__sub">
        {/* PLACEHOLDER — replace with a 1–2 line intro about your design lens. */}
        Some product prototypes, pitches, motion graphic videos & social media content
      </p>
      <p className="dy-design-hero__meta mono">
        FIGMA · CANVA · AFTER EFFECTS · YOUTUBE · INSTAGRAM
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Reusable case-study card. `children` slot holds the media.          */
/* ------------------------------------------------------------------ */
function CaseStudy({ index, ctx, title, role, tools, blurb, children }) {
  return (
    <article className="dy-case card card--amber">
      <header className="dy-case__head">
        <span className="dy-case__index mono">CASE {String(index).padStart(2, '0')}</span>
        <span className="tag tag--amber">{ctx}</span>
      </header>

      <h2 className="dy-case__title">{title}</h2>
      <p className="dy-case__role mono">{role}</p>

      <div className="dy-case__media">
        {children}
      </div>

      <p className="dy-case__blurb">{blurb}</p>

      <p className="dy-case__tools mono">
        {tools.map(function(t, i) {
          return React.createElement(React.Fragment, { key: t },
            i > 0 && React.createElement('span', { className: 'dy-case__sep' }, ' · '),
            React.createElement('span', null, t)
          );
        })}
      </p>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Media building blocks                                               */
/* ------------------------------------------------------------------ */
function VideoFrame({ src, poster, aspect }) {
  // aspect: "16/9" (default) or "9/16" for vertical
  aspect = aspect || '16/9';
  return (
    <div className="dy-media dy-media--video" style={{ aspectRatio: aspect }}>
      <video controls preload="metadata" poster={poster} src={src} />
    </div>
  );
}

function IframeFrame({ src, title, aspect }) {
  aspect = aspect || '16/9';
  return (
    <div className="dy-media dy-media--iframe" style={{ aspectRatio: aspect }}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="fullscreen; autoplay"
        allowFullScreen
      />
    </div>
  );
}

function CanvaFrame({ src }) {
  // Canva embed uses 56.25% aspect (16:9) per their embed snippet
  return (
    <div className="dy-media dy-media--canva">
      <iframe
        src={src}
        title="Canva pitch deck"
        loading="lazy"
        allow="fullscreen"
        allowFullScreen
      />
    </div>
  );
}

function Placeholder({ label, hint, aspect }) {
  aspect = aspect || '16/9';
  return (
    <div className="dy-media dy-placeholder" style={{ aspectRatio: aspect }}>
      <span className="dy-placeholder__label mono">[ {label} ]</span>
      <span className="dy-placeholder__hint">{hint}</span>
    </div>
  );
}

function ImageGrid({ items }) {
  // items: [{ src, alt }, ...]
  return (
    <div className="dy-imagegrid">
      {items.map(function(it, i) {
        return (
          <div className="dy-imagegrid__cell" key={i}>
            {it.src
              ? <img src={it.src} alt={it.alt} loading="lazy" />
              : (
                <div className="dy-placeholder dy-placeholder--inline">
                  <span className="dy-placeholder__label mono">[ SCREENSHOT {i + 1} ]</span>
                  <span className="dy-placeholder__hint">drop {it.alt || 'image'} here</span>
                </div>
              )}
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */
function DesignFooter() {
  return (
    <footer className="dy-footer">
      <span className="mono">© DEYAN LO · DESIGN PORTFOLIO · MOCK PAGE</span>
      <a className="mono" href="index.html">← BACK TO PORTFOLIO</a>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
function Design() {
  useEffect(function() {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  });

  return (
    <div className="dy-app">
      <DesignNav />
      <main className="dy-design-main">
        <DesignHero />

        <section className="dy-cases">

          {/* ---------- CASE 01 — AI Bots / Agent Studio demo ---------- */}
          <CaseStudy
            index={1}
            ctx="GOVTECH / AGENT STUDIO"
            title="Spotlight Feature Demo Video"
            role="Figma prototype"
            tools={['Figma', 'Agent Studio', 'Prototyping', 'AI UX']}
            blurb="Developed a prototype showcasing new feature to be adopted into AIBots - GovTech"
          >
            <VideoFrame
              src="design-assets/LO%20DE%20EN%2C%20DEYAN%20-%20AGENT%20STUDIO%20DEMO%20VIDEO%20%28AI%20ASSISTANT%20GOVTECH%20APPLICATION%29.mp4"
              aspect="16/9"
            />
          </CaseStudy>

          {/* ---------- CASE 02 — Zalora: pitch deck + Figma demo ---------- */}
          <CaseStudy
            index={2}
            ctx="PRODUCT MANAGEMENT COURSE / ZALORA"
            title="Zalpals — Pitch Deck + Figma Walkthrough"
            role="Group Leader"
            tools={['Figma', 'Canva']}
            blurb="Developed & pitched a prototype for Zalora"
          >
            <div className="dy-case__media-stack">
              <div>
                <p className="dy-case__media-label mono">▸ PITCH DECK</p>
                <CanvaFrame src="https://www.canva.com/design/DAHKMaKOMyU/mjI93A0uy8RWicIbDUsdhA/view?embed" />
              </div>
              <div>
                <p className="dy-case__media-label mono">▸ FIGMA PROTOTYPE WALKTHROUGH</p>
                <IframeFrame
                  src="https://embed.figma.com/proto/vZ04SBZNsABxUZULlNkDwM/Zalora-PME?node-id=21-49&starting-point-node-id=21%3A49&embed-host=share"
                  title="Zalora PME — Figma prototype"
                  aspect="16/9"
                />
              </div>
            </div>
          </CaseStudy>

          {/* ---------- CASE 03 — Motion graphic 1 ---------- */}
          <CaseStudy
            index={3}
            ctx="MOTION / NTUC"
            title="NTUC Youth Taskforce — Wrap-up video"
            role="Writer / Motion Graphic Designer"
            tools={['Premiere Pro', 'After Effects']}
            blurb="Produced a wrap-up video for NTUC to deliver statistics about youths"
          >
            <VideoFrame
              src="design-assets/NTUC%20YTF%20WRAPUP%20updated.mp4"
              aspect="16/9"
            />
          </CaseStudy>

          {/* ---------- CASE 04 — Motion graphic 2 ---------- */}
          <CaseStudy
            index={4}
            ctx="MOTION / DOCUMENTARY"
            title="Group N Ship Singapore"
            role="Director / Motion Graphic Designer"
            tools={['Premiere Pro', 'After Effects']}
            blurb="Produced a marketing video for Group N Ship, advertising its services"
          >
            <VideoFrame
              src="design-assets/Group%20N%20Ship%20Singapore%20%5BdUtqlgC_Je4%5D.mp4"
              aspect="16/9"
            />
          </CaseStudy>

          {/* ---------- CASE 05 — NTUPC social media design ---------- */}
          <CaseStudy
            index={5}
            ctx="SOCIAL / NTUPC"
            title="NTU Product Club"
            role="Publicity Lead"
            tools={['Canva', 'Premiere Pro']}
            blurb="Managed a publicity subcommittee to ensure consistent adherence to branding kit"
          >
            <ImageGrid items={[
              { src: 'design-assets/photo_2_2026-05-22_16-40-31.jpg', alt: 'NTUPC social post 1' },
              { src: 'design-assets/photo_1_2026-05-22_16-40-31.jpg', alt: 'NTUPC social post 2' },
            ]} />
          </CaseStudy>

        </section>
      </main>
      <DesignFooter />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Design />);
