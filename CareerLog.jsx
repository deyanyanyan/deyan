/* global React */
const { useState } = React;

const FILTERS = [
  { key: 'all',        label: 'Chronological' },
  { key: 'internship', label: 'Work Experience' },
  { key: 'pm',         label: 'Product Management' },
  { key: 'education',  label: 'Education' },
  { key: 'leadership', label: 'Leadership' },
];

const TAG_META = {
  internship: { label: 'WORK EXPERIENCE',         cls: 'tag--steel',  dot: 'var(--steel)',  card: '' },
  pm:         { label: 'PRODUCT MANAGEMENT', cls: 'tag--amber',  dot: 'var(--amber)',  card: 'card--amber' },
  education:  { label: 'EDUCATION',          cls: 'tag--brass',  dot: 'var(--brass)',  card: '' },
  leadership: { label: 'LEADERSHIP',         cls: 'tag--signal', dot: 'var(--signal)', card: '' },
};

function CareerLog() {
  const [active, setActive] = useState('all');

  const entries = [
    {
      filter: 'internship',
      date: 'May 2026 — Present',
      title: 'GenAI Product Development Intern',
      org: 'Central Provident Fund Board',
      bullets: [
        'Upcoming role — GenAI product development at Singapore\'s national social security savings scheme.',
      ],
    },
    {
      filter: 'pm',
      date: 'Jan 2026 — Mar 2026',
      title: 'Technical Lead',
      org: 'GovTech ApplySG × NTU Product Management Course',
      bullets: [
        'Researched fragmented government reporting workflows across banks, SPF, and agencies — projected reduction in account freeze time from 24–48h to under 1h.',
        'Architected a high-fidelity MVP integrating ApplySG API with role-based access across multiple personas.',
        'Built a multimodal LLM-powered document extraction feature to auto-populate forms from unstructured victim inputs; pitched to GovTech ApplySG product team.',
      ],
    },
    {
      filter: 'leadership',
      date: 'Aug 2025 — Present',
      title: 'Publicity Lead · Incoming Co-President',
      org: 'NTU Product Club',
      bullets: [
        'Managed a subcommittee producing weekly content across Instagram, Telegram, and LinkedIn.',
        'Developed brand kit and structured content workflows — grew Telegram by 50% and Instagram by 30%.',
      ],
    },
    {
      filter: 'internship',
      date: 'Sep 2025 — Dec 2025',
      title: 'GenAI Intern',
      org: 'Kaveman Productions × VeNTUre',
      bullets: [
        'Designed and shipped a GenAI video workflow using LLM-based prompt engineering with RunwayML and Veo 3, enabling rapid prototyping of commercial-ready B-roll.',
        'Led cross-functional coordination across a 3-person team, translating complex AI capabilities into accessible creative briefs.',
      ],
    },
    {
      filter: 'pm',
      date: 'Aug 2025 — Sep 2025',
      title: 'Technical Lead',
      org: 'Zalora × NTU Product Management Course',
      bullets: [
        'Identified retention drop-off and conceptualized a daily avatar-based check-in mechanic using journey mapping and PMF frameworks.',
        'Validated go-to-market strategy through competitive analysis; placed 1st among competing teams.',
      ],
    },
    {
      filter: 'education',
      date: 'Aug 2024 — Present',
      title: 'BSc Computer Science',
      org: 'Nanyang Technological University',
      bullets: [
        'Specialization in Artificial Intelligence and Data Science.',
        'Relevant courses: Software Engineering, Data Structures & Algorithms, Algorithm Design, AI, Databases.',
      ],
    },
    {
      filter: 'internship',
      date: 'Mar 2021 — Aug 2021',
      title: 'Junior Writer',
      org: 'Weave Pte Ltd',
      bullets: [
        'Developed and presented 10+ client pitch decks for commercial video productions with combined budgets up to ~$100k.',
        'Conducted market research and competitor analysis to shape narrative direction and client positioning.',
      ],
    },
    {
      filter: 'education',
      date: 'Apr 2020 — Feb 2022',
      title: 'Diploma in Film, Sound & Video',
      org: 'Ngee Ann Polytechnic',
      bullets: [
        'Graduated with Merit under IMDA SG:Digital Scholarship.',
        'Awarded The Shaw Foundation Silver Medal for second most outstanding graduate.',
      ],
    },
  ];

  const visible = active === 'all' ? entries : entries.filter((e) => e.filter === active);

  return (
    <section id="career" className="dy-section" data-screen-label="03 Career">
      <header className="dy-section__head">
        <span className="chyron">// 02 CAREER LOG</span>
        <h2>Where I've been.</h2>
      </header>

      <div className="dy-filter-bar">
        {FILTERS.map((f) => {
          const isActive = active === f.key;
          const activeCls = isActive ? (f.key === 'all' ? 'is-active' : 'is-active--' + f.key) : '';
          return (
            <button
              key={f.key}
              className={'dy-filter-btn ' + activeCls}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <ol className="dy-timeline">
        {visible.map((e, i) => {
          const meta = TAG_META[e.filter];
          return (
            <li className="dy-timeline__row" key={i}>
              <div className="dy-timeline__date mono" style={{ color: meta.dot }}>
                <span className="dy-timeline__dot" aria-hidden="true" style={{ background: meta.dot, boxShadow: '0 0 12px ' + meta.dot }}></span>
                <span>{e.date}</span>
              </div>
              <div className={'dy-timeline__card card ' + meta.card}>
                <div className="dy-timeline__meta">
                  <span className={'tag ' + meta.cls}>{meta.label}</span>
                </div>
                <h3 className="dy-timeline__title">{e.title}</h3>
                <p className="dy-timeline__org mono">{e.org}</p>
                <ul className="dy-timeline__bullets">
                  {e.bullets.map((b, j) => (
                    <li key={j}>
                      <span className="dy-bullet mono" aria-hidden="true" style={{ color: meta.dot }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

window.CareerLog = CareerLog;
