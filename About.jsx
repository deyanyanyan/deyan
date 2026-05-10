/* global React */

function About() {
  const stats = [
    { label: 'EDUCATION',    value: 'BComp (Hons) Computer Science @ NTU' },
    { label: 'CURRENTLY',    value: 'Gen AI Product Development @ CPF Board' },
    { label: 'LANGUAGES',    value: 'English · Mandarin · Cantonese · French' },
    { label: 'LOCATION',     value: 'Singapore' },
    { label: 'NOW PLAYING',  value: 'Slay The Spire 2 · Teamfight Tactics' },
  ];

  return (
    <section id="about" className="dy-section" data-screen-label="02 About">
      <header className="dy-section__head">
        <span className="chyron">// 01 ABOUT</span>
        <h2>Who I am.</h2>
      </header>

      <div className="dy-about__grid">
        <div className="dy-about__bio">
          <p>
            I'm an aspiring product manager with an unusual mix: 
            a CS degree and a film & media diploma.
            My creative background trained me to empathize and understand people — 
            what they actually need, and how to reach them. 
          </p>
          <p>
              CS gave me the language to sit with engineers and 
              understand what's being built and how to build it.

          </p>
          <p>
            I believe PM sits at that intersection, where understanding people 
            and understanding systems have to work together. I hope to bring my 
            heart and unique skills to build products that truly resonates with users.
          </p>
          
          <blockquote className="pull">
            "The one in love always wins. - Ethan Hawke 2026"
          </blockquote>
        </div>

        <aside className="dy-stats" aria-label="Character stats">
          <div className="dy-stats__head mono">
            <span>STATS.SHEET</span>
            <span className="dy-stats__lvl">LV.01</span>
          </div>
          <ul className="dy-stats__list">
            {stats.map((s) => (
              <li key={s.label} className="dy-stats__row">
                <span className="dy-stats__label mono">{s.label}</span>
                <span className="dy-stats__val">{s.value}</span>
              </li>
            ))}
          </ul>
          <div className="dy-stats__bar" aria-hidden="true">
            <span className="dy-stats__bar-label mono">XP</span>
            <span className="dy-stats__bar-track">
              <span className="dy-stats__bar-fill" style={{ width: '75%' }}></span>
            </span>
            <span className="dy-stats__bar-num mono">Y3 / Y4</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

window.About = About;
