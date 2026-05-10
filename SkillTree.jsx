/* global React */

function SkillTree() {
  const cols = [
    {
      head: 'PM SKILLS',
      icon: 'compass',
      items: [
        'User Research & Interviews',
        'Product Roadmapping',
        'PRD Writing',
        'Wireframing & Prototyping',
        'Agile / Scrum',
        'A/B Testing & Metrics',
        'Competitive Analysis',
        'Feature Prioritisation',
      ],
    },
    {
      head: 'TOOLS',
      icon: 'box',
      items: [
        'Python · SQL',
        'JavaScript · TypeScript · HTML · CSS',
        'C · C++ · Java',
        'FastAPI · Next.js',
        'Figma · Canva',
        'Adobe Premiere Pro · Lightroom · Photoshop',
      ],
    },
    {
      head: 'SOFT SKILLS',
      icon: 'sparkles',
      items: [
        'Storytelling',
        'Systems Thinking',
        'Creative Direction',
        'Cross-functional Collaboration',
        'Communication',
        'Stakeholder Management',
        'Pitching & Presentation',
      ],
    },
  ];

  return (
    <section id="skills" className="dy-section" data-screen-label="05 Skills">
      <header className="dy-section__head">
        <span className="chyron">// 04 SKILL TREE</span>
        <h2>What I can do.</h2>
      </header>

      <div className="dy-skills">
        {cols.map((c) => (
          <div className="dy-skills__col card" key={c.head}>
            <header className="dy-skills__head">
              <i data-lucide={c.icon} className="dy-icon dy-icon--lg"></i>
              <span className="mono">{c.head}</span>
            </header>
            <ul className="dy-skills__chips">
              {c.items.map((it) => (
                <li className="dy-skills__chip mono" key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

window.SkillTree = SkillTree;
