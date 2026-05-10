/* global React */
const { useEffect, useState } = React;

function useTypewriter(text, speed, startDelay) {
  speed = speed || 38;
  startDelay = startDelay || 600;
  const [out, setOut] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    let t;
    const start = setTimeout(() => {
      t = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) { clearInterval(t); setDone(true); }
      }, speed);
    }, startDelay);
    return () => { clearTimeout(start); clearInterval(t); };
  }, [text]);
  return { out, done };
}

const SUBTITLES = ['CS Undergraduate.', 'GenAI Builder.', 'Product Thinker.', 'Filmmaker.', 'Storyteller.','Gamer.'];

function useRotatingTypewriter(items) {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const current = items[idx];
    let pos = 0;
    let deleting = false;
    let timer;

    function tick() {
      if (!deleting) {
        pos++;
        setDisplayed(current.slice(0, pos));
        if (pos >= current.length) {
          deleting = true;
          timer = setTimeout(tick, 1800);
        } else {
          timer = setTimeout(tick, 55);
        }
      } else {
        pos--;
        setDisplayed(current.slice(0, pos));
        if (pos <= 0) {
          setIdx((i) => (i + 1) % items.length);
        } else {
          timer = setTimeout(tick, 32);
        }
      }
    }

    timer = setTimeout(tick, 55);
    return () => clearTimeout(timer);
  }, [idx]);

  return { displayed, idx };
}

const SUBTITLE_COLORS = [
  'var(--steel)',
  'var(--amber-soft)',
  'var(--brass)',
  'var(--signal)',
];

function Hero({ onJump }) {
  const { out: nameOut, done: nameDone } = useTypewriter('deyan lo.', 45, 300);
  const { displayed: subtitle, idx: subIdx } = useRotatingTypewriter(SUBTITLES);

  return (
    <section id="hero" className="dy-hero fx-grid" data-screen-label="01 Hero">
      <div className="dy-hero__inner">
        <div className="dy-hero__chyron mono">
          <span className="dy-online" aria-hidden="true"></span>
          <span>STATUS / ONLINE</span>
          <span className="dy-hero__sep">·</span>
          <span>BUILD 0.4.1</span>
          <span className="dy-hero__sep">·</span>
          <span>2026</span>
        </div>

        <h1 className="dy-hero__name">
          {nameOut}
          {nameDone
            ? <span className="dy-hero__dot">_</span>
            : <span className="caret" aria-hidden="true"></span>}
        </h1>

        <p className="dy-hero__subtitle mono" style={{ color: SUBTITLE_COLORS[subIdx % SUBTITLE_COLORS.length] }}>
          {subtitle}
          <span className="caret" aria-hidden="true"></span>
        </p>

        <p className="dy-hero__bio">
          CS undergrad at NTU & Film diploma from NP. I bridge my creative storytelling and
          technical skills to build products with the heart of a user in mind.
        </p>

        <div className="dy-hero__ctas">
          <button className="btn" onClick={() => onJump('builds')}>
            <i data-lucide="terminal" className="dy-icon"></i>
            VIEW MY WORK
          </button>
          <a className="btn btn--ghost" href="resume.pdf" download>
            <i data-lucide="download" className="dy-icon"></i>
            DOWNLOAD RESUME
          </a>
        </div>

        <div className="dy-hero__corners" aria-hidden="true">
          <span className="dy-corner dy-corner--tl">┌</span>
          <span className="dy-corner dy-corner--tr">┐</span>
          <span className="dy-corner dy-corner--bl">└</span>
          <span className="dy-corner dy-corner--br">┘</span>
        </div>
      </div>

      <div className="dy-hero__scroll mono" onClick={() => onJump('about')}>
        <span>SCROLL</span>
        <i data-lucide="arrow-down" className="dy-icon"></i>
      </div>
    </section>
  );
}

window.Hero = Hero;
