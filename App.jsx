/* global React, ReactDOM, Nav, Hero, About, CareerLog, BuildLog, SkillTree, PingMe, Footer */
const { useEffect, useState, useRef } = React;

function App() {
  const [active, setActive] = useState('hero');
  const sectionsRef = useRef([]);

  const onJump = function(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(function() {
    var ids = ['hero', 'about', 'career', 'builds', 'skills', 'ping'];
    sectionsRef.current = ids.map(function(id) { return document.getElementById(id); }).filter(Boolean);

    var onScroll = function() {
      var probe = window.innerHeight * 0.3;
      var current = active;
      for (var i = 0; i < sectionsRef.current.length; i++) {
        var r = sectionsRef.current[i].getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) {
          current = sectionsRef.current[i].id;
          break;
        }
      }
      if (current !== active) setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return function() { window.removeEventListener('scroll', onScroll); };
  }, [active]);

  useEffect(function() {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  });

  return (
    <div className="dy-app">
      <Nav active={active} onJump={onJump} />
      <main>
        <Hero onJump={onJump} />
        <About />
        <CareerLog />
        <BuildLog />
        <SkillTree />
        <PingMe />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
