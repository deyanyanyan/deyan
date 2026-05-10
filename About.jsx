/* global React */

function About() {
  const stats = [
    { label: 'EDUCATION',    value: 'BSc CS @ NTU · Dip Film @ NP' },
    { label: 'CURRENTLY',    value: 'Incoming CPF GenAI Intern' },
    { label: 'HOURS PLAYED', value: '4,200+ hrs across all titles' },
    { label: 'SUPERPOWER',   value: 'Turning chaos into structured thinking' },
    { label: 'LOCATION',     value: 'Singapore' },
    { label: 'NOW PLAYING',  value: 'Hades II · Balatro' },
  ];

  return (
    <section id="about" className="dy-section" data-screen-label="02 About">
      <header className="dy-section__head">
        <span className="chyron">// 01 ABOUT</span>
        <h2>Who I am, briefly.</h2>
      </header>

      <div className="dy-about__grid">
        <div className="dy-about__bio">
          <p>
            I'm an aspiring product manager with a CS undergrad and a film &amp;
            media diploma. Film taught me to <em className="serif">cut</em> —
            to look at a draft and ask what it's actually about. PM work, to me,
            is just doing that on a longer timeline, with more people.
          </p>
          <p>
            Gaming is the third leg of the stool. A thousand hours in HUDs,
            crafting trees and economy systems is, it turns out, a pretty good
            crash course in UX intuition and systems thinking. I build small
            games on the side to keep the muscle warm.
          </p>
          <blockquote className="pull">
            "Films taught me to cut. Product work is just cutting on a longer
            timeline."
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
              <span className="dy-stats__bar-fill" style={{ width: '64%' }}></span>
            </span>
            <span className="dy-stats__bar-num mono">640 / 1000</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

window.About = About;
