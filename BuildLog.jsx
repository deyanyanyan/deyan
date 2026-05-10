/* global React */

function PMCard({ title, ctx, desc, tools, href }) {
  return (
    <article className="dy-pm card card--amber">
      <div className="dy-pm__head">
        <span className="tag tag--amber">{ctx}</span>
      </div>
      <h3 className="dy-pm__title">{title}</h3>
      <p className="dy-pm__desc">{desc}</p>
      <p className="dy-pm__tools mono">
        {tools.map((t, i) => (
          React.createElement(React.Fragment, { key: t },
            i > 0 && React.createElement('span', { className: 'dy-pm__sep' }, ' · '),
            React.createElement('span', null, t)
          )
        ))}
      </p>
      {href && <a className="dy-pm__link mono" href={href} target="_blank" rel="noreferrer">View project →</a>}
    </article>
  );
}

function GameCard({ title, genre, role, desc, hue }) {
  hue = hue || 220;
  const initials = title.split(' ').map(function(w) { return w[0]; }).join('').slice(0, 3).toUpperCase();
  return (
    <article className="dy-game">
      <div
        className="dy-game__cover"
        style={{ background: 'linear-gradient(135deg, hsl(' + hue + ' 60% 22%), hsl(' + ((hue + 30) % 360) + ' 70% 14%))' }}
        aria-hidden="true"
      >
        <div className="dy-game__cover-mark mono">
          <span>{initials}</span>
        </div>
        <div className="dy-game__cover-grid"></div>
      </div>
      <div className="dy-game__body">
        <span className="meta">{genre}</span>
        <h3 className="dy-game__title">{title}</h3>
        <p className="dy-game__role mono">{role}</p>
        <p className="dy-game__desc">{desc}</p>
        <div className="dy-game__links">
          <a className="dy-iconlink mono" href="#" aria-label="Itch.io">
            <i data-lucide="gamepad-2" className="dy-icon"></i>itch.io
          </a>
          <a className="dy-iconlink mono" href="#" aria-label="GitHub">
            <i data-lucide="code-2" className="dy-icon"></i>github
          </a>
        </div>
      </div>
    </article>
  );
}

function SideCard({ title, desc }) {
  return (
    <a className="dy-side" href="#">
      <span className="dy-side__bullet mono" aria-hidden="true">◇</span>
      <span className="dy-side__title">{title}</span>
      <span className="dy-side__desc">— {desc}</span>
      <span className="dy-side__arr mono" aria-hidden="true">↗</span>
    </a>
  );
}

function BuildLog() {
  const pm = [
    {
      title: 'LobangSG',
      ctx: 'PERSONAL PROJECT',
      desc: 'Full-stack puzzle web app with daily Singaporean-themed connection puzzles — built with React, Express.js, and PostgreSQL (Supabase).',
      tools: ['React', 'Express.js', 'PostgreSQL', 'Supabase'],
      href: 'https://lobangsg.vercel.app/',
    },
    {
      title: 'FindMeBin',
      ctx: 'SCHOOL PROJECT',
      desc: 'Cross-platform mobile app for real-time bin discovery using geolocation APIs. Led a 6-member Agile team across full delivery.',
      tools: ['React Native', 'Geolocation API', 'Agile / Scrum'],
    },
    {
      title: 'My Home',
      ctx: 'SCHOOL PROJECT',
      desc: '2D top-down browser game built on HTML for a Multimedia Creative Writing assignment.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      href: 'https://deyanyanyan.github.io/my-home/',
    },
  ];

  const sides = [
    { title: 'Unity Certified Associate: Game Developer', desc: 'Gen Infiniti Academy · Issued Jul 2022' },
    { title: 'Diploma Plus in French', desc: 'Ngee Ann Polytechnic · Issued May 2022' },
    { title: 'Music Design for Games', desc: 'Orita Sinclair College · Issued Dec 2020' },
  ];

  return (
    <section id="builds" className="dy-section" data-screen-label="04 Builds">
      <header className="dy-section__head">
        <span className="chyron">// 03 BUILD LOG</span>
        <h2>Things I've shipped.</h2>
      </header>

      <div className="dy-build">
        <div className="dy-build__sub">
          <h3 className="dy-build__sub-h mono">▸ PROJECTS</h3>
          <div className="dy-build__pm-grid">
            {pm.map((p) => React.createElement(PMCard, Object.assign({ key: p.title }, p)))}
          </div>
        </div>

        <div className="dy-build__sub">
          <h3 className="dy-build__sub-h mono">▸ SIDE QUESTS</h3>
          <div className="dy-build__side-list">
            {sides.map((s) => React.createElement(SideCard, Object.assign({ key: s.title }, s)))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.BuildLog = BuildLog;
