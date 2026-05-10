/* global React */
const { useEffect: useEffectPing, useState: useStatePing } = React;

function PingMe() {
  const lines = [
    { k: '> scanning visitor...',                 cls: 'dim' },
    { k: '> human detected.',                     cls: 'dim' },
    { k: '> wow. you actually scrolled this far.' },
    { k: '> initiating reward protocol...',       cls: 'dim' },
    { k: '> reward: a picture of my cat.'         },
  ];

  const [shown, setShown] = useStatePing(0);

  useEffectPing(function() {
    var t = setInterval(function() {
      setShown(function(n) { return n >= lines.length ? n : n + 1; });
    }, 220);
    return function() { clearInterval(t); };
  }, []);

  const icons = [
    { name: 'Email',              icon: 'mail',      href: 'mailto:deyanlodeen@gmail.com' },
    { name: 'LinkedIn',           icon: 'briefcase', href: 'https://www.linkedin.com/in/deyan-lo-b73459188/' },
    { name: 'CREATIVE PORTFOLIO', icon: 'gamepad-2', href: 'https://mr-deyan-lo.wixsite.com/deyan' },
    { name: 'RESUME',             icon: 'download',  href: 'https://drive.google.com/file/d/1IsdouPwQGiD81SIAFFP-dWBp2Hf1mR2W/view?usp=sharing' },
  ];

  return (
    <section id="ping" className="dy-section" data-screen-label="06 Ping">
      <header className="dy-section__head">
        <span className="chyron">// 05 PING ME</span>
        <h2>Say hi.</h2>
      </header>

      <div className="dy-ping">
        <div className="dy-terminal">
          <div className="dy-terminal__bar mono">
            <span className="dy-terminal__dot" style={{ background: '#FF5F57' }}></span>
            <span className="dy-terminal__dot" style={{ background: '#FEBC2E' }}></span>
            <span className="dy-terminal__dot" style={{ background: '#28C840' }}></span>
            <span className="dy-terminal__title">deyan@portfolio: ~/contact</span>
          </div>
          <pre className="dy-terminal__body mono">
            {lines.slice(0, shown).map(function(l, i) {
              return (
                <div key={i} className={'dy-terminal__line ' + (l.cls || '')}>
                  <span>{l.k}</span>
                  {l.v && <a className="dy-terminal__val" href={l.href}>{l.v}</a>}
                </div>
              );
            })}
            {shown >= lines.length && <span className="caret" aria-hidden="true"></span>}
          </pre>
          {shown >= lines.length && (
            <div className="dy-terminal__footer">
              <a
                className="dy-human-btn mono"
                href="https://drive.google.com/file/d/1ea8pHXq3R3JQqyG-H035AVL3Cmh3jfMk/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                {'> [ claim reward ]'}
              </a>
            </div>
          )}
        </div>

        <div className="dy-ping__icons">
          {icons.map(function(it) {
            return (
              <a key={it.name} href={it.href} className="dy-iconbtn">
                <i data-lucide={it.icon} className="dy-icon dy-icon--lg"></i>
                <span className="mono">{it.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="dy-footer mono">
      <div>
        <span className="dy-online" aria-hidden="true"></span>
        <span>END OF FILE</span>
      </div>
      <div className="dy-footer__hash">
        © 2026 Deyan · build a4f1c2 · pressing ESC won't help
      </div>
    </footer>
  );
}

window.PingMe = PingMe;
window.Footer = Footer;
