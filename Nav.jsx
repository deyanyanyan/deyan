/* global React */
const { useEffect, useState, useRef } = React;

function Nav({ active, onJump }) {
  const items = [
    { id: 'hero',   label: '00 / HOME'   },
    { id: 'about',  label: '01 / ABOUT'  },
    { id: 'career', label: '02 / CAREER' },
    { id: 'builds', label: '03 / BUILDS' },
    { id: 'skills', label: '04 / SKILLS' },
    { id: 'ping',   label: '05 / PING'   },
  ];
  return (
    <nav className="dy-nav">
      <a
        className="dy-nav__brand"
        href="#hero"
        onClick={(e) => { e.preventDefault(); onJump('hero'); }}
      >
        <span className="dy-nav__bracket">[</span>
        <span className="dy-nav__brand-letter">D</span>
        <span className="dy-nav__bracket">]</span>
        <span className="dy-nav__brand-name">deyan</span>
        <span className="caret" aria-hidden="true"></span>
      </a>

      <ul className="dy-nav__list">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={`dy-nav__link ${active === it.id ? 'is-active' : ''}`}
              onClick={(e) => { e.preventDefault(); onJump(it.id); }}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>

      <a className="dy-nav__cta" href="resume.pdf" aria-label="Download resume">
        <i data-lucide="download" className="dy-icon"></i>
        <span>RESUME.pdf</span>
      </a>
    </nav>
  );
}

window.Nav = Nav;
