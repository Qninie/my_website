import { memories } from './memories.js';

const baseUrl = import.meta.env?.BASE_URL ?? '/my_website/';
const assetUrl = (filename) => `${baseUrl}assets/${filename}`;

let flowerSvgId = 0;
const flowerSvg = (className = '') => {
  const id = `sakura-${flowerSvgId++}`;
  return `
    <svg class="${className}" viewBox="-32 -32 64 64" aria-hidden="true">
      <defs>
        <radialGradient id="${id}-petal" cx="50%" cy="65%" r="72%">
          <stop offset="0" stop-color="#eaa7bd" stop-opacity=".76"/>
          <stop offset=".48" stop-color="#f5cddd" stop-opacity=".86"/>
          <stop offset="1" stop-color="#fff9fb" stop-opacity=".96"/>
        </radialGradient>
        <radialGradient id="${id}-heart"><stop offset="0" stop-color="#d984a2"/><stop offset="1" stop-color="#efb6c9"/></radialGradient>
      </defs>
      ${[0,72,144,216,288].map(a => `<path class="sakura-petal" style="fill:url(#${id}-petal)" d="M0 3C-7 3-14-4-14-13C-14-21-8-28-3-30L0-26L3-30C8-28 14-21 14-13C14-4 7 3 0 3Z" transform="rotate(${a})"/>`).join('')}
      <circle class="sakura-heart" style="fill:url(#${id}-heart)" r="5.4"/>
      <g class="sakura-stamens">
        ${[-68,-45,-22,0,22,45,68].map(a=>`<g transform="rotate(${a})"><path d="M0-2V-12"/><circle cy="-13" r="1"/></g>`).join('')}
      </g>
    </svg>`;
};

const cursorFlowerSvg = () => `
  <svg class="cursor-flower-art" viewBox="-32 -32 64 64" aria-hidden="true">
    <defs>
      <radialGradient id="cursor-petal-wash" cx="50%" cy="58%" r="72%">
        <stop offset="0" stop-color="#eaa8bd" stop-opacity=".72"/>
        <stop offset=".48" stop-color="#f4c7d7" stop-opacity=".76"/>
        <stop offset="1" stop-color="#fff7fa" stop-opacity=".9"/>
      </radialGradient>
      <radialGradient id="cursor-heart" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#d887a4" stop-opacity=".8"/>
        <stop offset="1" stop-color="#edb5c8" stop-opacity=".25"/>
      </radialGradient>
    </defs>
    ${[0,72,144,216,288].map(a => `
      <path class="cursor-sakura-petal" transform="rotate(${a})"
        d="M0 3C-5 2-10-3-11-11C-12-19-7-27-3-30L0-26L3-30C7-27 12-19 11-11C10-3 5 2 0 3Z"/>
    `).join('')}
    <circle class="cursor-flower-heart" r="5.5"/>
    <g class="cursor-stamens">
      ${[-72,-48,-24,0,24,48,72].map(a => `
        <g transform="rotate(${a})">
          <path d="M0 0C0-4 0-8 0-12"/>
          <circle cy="-13" r="1.1"/>
        </g>
      `).join('')}
    </g>
  </svg>`;

const treeFlowers = [
  [27,27],[40,12],[50,26],[66,18],[75,31],[84,18],[19,43],[38,42],
  [55,42],[70,48],[86,45],[30,59],[48,61],[66,64],[79,68],[57,77]
];

const projects = [
  {
    number:'01', slug:'hitern', title:'Hitern', type:'Capstone · Full-stack web application',
    role:'UI/UX Designer & Full-stack Developer',
    summary:'A role-based internship document management platform that simplifies submissions, approvals and progress tracking for interns, supervisors and HR.',
    challenge:'Internship documents and approvals can become fragmented across messages, files and different stakeholders.',
    approach:'I mapped the multi-role workflow, designed responsive dashboards and built secure document, notification and approval experiences.',
    outcome:'A complete working capstone product with role-based access, RESTful APIs and dashboard analytics.',
    tools:['React','Tailwind CSS','Node.js','Express','MySQL'],
    link:'https://qninie.github.io/hitern_system/'
  },
  {
    number:'02', slug:'language', title:'IT Languages Learning', type:'UX case study · Mobile prototype',
    role:'Team Leader & UI/UX Designer',
    summary:'A mobile learning concept designed to make technical-language lessons clearer, friendlier and easier to complete.',
    challenge:'Learners needed a less intimidating way to understand introductory technical language concepts.',
    approach:'I led the design workflow, developed the interface in Figma and refined key tasks through user-centred testing.',
    outcome:'The improved prototype increased task-completion efficiency by 20% during testing.',
    tools:['Figma','Prototyping','User testing','Canva'],
    link:'https://youtu.be/IMaTKmI0Mkg?si=P6-LQWeK41Fss2wA'
  },
  {
    number:'03', slug:'hostel', title:'Hostel Management', type:'Responsive web development',
    role:'Frontend Developer',
    summary:'A responsive system for managing student information, room availability and hostel settings in one clear interface.',
    challenge:'Hostel information needed to remain easy to scan and manage across different screens and lighting preferences.',
    approach:'I organised complex records into a responsive dashboard and implemented both light and dark interface themes.',
    outcome:'A deployed frontend experience that demonstrates responsive layouts, structured data presentation and theme switching.',
    tools:['HTML','CSS','JavaScript','Bootstrap'],
    link:'https://qninie.github.io/Hostel-system-management/'
  },
  {
    number:'04', slug:'event', title:'Event Hall Booking', type:'Web application development',
    role:'Team Leader & Developer',
    summary:'A booking-management system that brings reservations, hall availability and administration into one workflow.',
    challenge:'The booking experience required a clearer connection between customer-facing forms and administrative records.',
    approach:'I led the team and connected the frontend booking journey to PHP and MySQL-backed reservation management.',
    outcome:'A functional full-stack system with a more efficient reservation and administration workflow.',
    tools:['HTML','CSS','PHP','MySQL','Laragon'],
    link:'https://youtu.be/7kEiJudpVQU?si=Jht50xd2BPfqGDux'
  }
];

const skillGroups = [
  { title:'Design', skills:[['UI/UX Design',84],['Wireframing',88],['Prototyping',82],['Responsive Design',78]] },
  { title:'Frontend', skills:[['HTML & CSS',88],['JavaScript',76],['React',72],['Tailwind CSS',78]] },
  { title:'Development', skills:[['Node.js & Express',68],['MySQL',72],['REST APIs',66],['Git & GitHub',76]] }
];
const toolsKnown = ['Figma','React','JavaScript','HTML','CSS','Tailwind','Node.js','Express','MySQL','Git','GitHub','VS Code','Postman','Tableau','Canva','Bootstrap'];

document.querySelector('#app').innerHTML = `
  <header class="home-nav" aria-label="Primary navigation">
    <a class="home-mark" href="#greeting" aria-label="Queenie, back to beginning">Queenie</a>
    <nav class="site-nav" aria-label="Portfolio chapters">
      <a class="is-active" href="#door-scene" data-section="door-scene">Discover</a>
      <a href="#journey" data-section="journey">Journey</a>
      <a href="#work" data-section="work">Work</a>
      <a href="#skills" data-section="skills">Skills</a>
      <a href="#contact" data-section="contact">Contact</a>
    </nav>
  </header>

  <div class="sakura-cursor" aria-hidden="true">${cursorFlowerSvg()}</div>
  <div class="scroll-butterfly-guide" aria-live="polite" aria-hidden="true">
    <span class="guide-tip">Click the box or scroll to begin.</span>
    <img src="${assetUrl('guide-butterfly-open-cropped.png')}" alt="" />
  </div>

  <main class="home-page">
    <section id="greeting" class="greeting-scene" aria-label="Welcome">
      <div class="intro-petals" aria-hidden="true">${Array.from({length:6},(_,i)=>`<i style="--i:${i}"></i>`).join('')}</div>
      <p class="greeting-kicker">Welcome</p>
      <div class="greeting-list" aria-live="polite">
        ${['Hello','你好','Apa Khabar','こんにちは','안녕하세요','Bonjour'].map((word,i)=>`<p class="greeting-word ${i===0?'is-visible':''}">${word}</p>`).join('')}
      </div>
      <div class="begin-cue is-visible" aria-hidden="true"><span>Scroll to begin</span><i></i></div>
    </section>

    <section id="hero" class="hero-scene">
      <div class="hero-light" aria-hidden="true"></div>
      <div class="hero-blossom-shadow" aria-hidden="true"></div>
      <div class="hero-nature" aria-hidden="true">
        <img class="hero-branch" src="${assetUrl('sakura-branch.png')}" alt="" />
      </div>
      <div class="hero-petals" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="hero-intro">
        <h1>I’m <br><em>Queenie</em></h1>
        <p class="hero-lead">Always learning, always improving, and excited to build experiences that people genuinely enjoy using.</p>
        <p class="hero-note">Creating thoughtful digital experiences, one project at a time.</p>
        <div class="journey-actions">
          <div class="hero-scroll"><span>The story begins here</span><i></i></div>
          <a class="primary-button" href="#door-scene">Explore My Journey <span>↘</span></a>
          <span class="button-butterfly" aria-hidden="true">
            <img class="butterfly-resting" src="${assetUrl('guide-butterfly-side-cropped.png')}" alt="" />
            <img class="butterfly-open" src="${assetUrl('guide-butterfly-open-cropped.png')}" alt="" />
          </span>
        </div>
      </div>
    </section>

    <section id="door-scene" class="door-scene">
      <div class="door-sticky">
        <section class="memory-garden" aria-labelledby="memory-heading">
          <div class="memory-heading">
            <p class="scene-label">Chapter one · Discover me</p>
            <h2 id="memory-heading">Discover the moments that helped me <em>grow.</em></h2>
            <p class="tree-instruction">Select the glowing flower to discover a memory.</p>
            <div class="discovery-progress" aria-live="polite"><span>01</span><i></i><b>04</b></div>
          </div>
          <div class="blossom-tree" aria-label="Interactive blossom memory tree">
            <img class="tree-art" src="${assetUrl('memory-tree-filled.png')}" alt="A full watercolor cherry blossom tree" />
            ${memories.map((memory,i)=>`
              <button class="memory-flower" data-index="${i}" style="--tree-x:${memory.tree.x}%;--tree-y:${memory.tree.y}%" aria-label="Discover ${memory.title} memory">
                <span class="bud-layer">${flowerSvg('memory-closed-flower')}</span>
                <span class="bloom-layer">${flowerSvg('memory-flower-svg')}</span>
              </button>`).join('')}
            <img class="tree-guide-butterfly" src="${assetUrl('guide-butterfly-open-cropped.png')}" alt="" aria-hidden="true" />
            <div class="tree-petals" aria-hidden="true"><i></i><i></i><i></i></div>
          </div>
        </section>
        <div class="door-magic" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><span></span></div>
        <div class="paper-panel panel-left" aria-hidden="true"><i></i></div>
        <div class="paper-panel panel-right" aria-hidden="true"><i></i></div>
      </div>
    </section>

    <section id="journey" class="journey-section" aria-labelledby="journey-title">
      <header class="journey-heading">
        <p class="scene-label">Chapter two · My journey</p>
        <h2 id="journey-title">Learning by doing.<br><em>Growing with purpose.</em></h2>
        <p>From university projects to real product work, each step has shaped how I think, design and build.</p>
      </header>

      <div class="journey-layout">
        <div class="timeline-rail" aria-hidden="true">
          <i></i>
          <img class="timeline-butterfly" src="${assetUrl('guide-butterfly-open-cropped.png')}" alt="" />
        </div>
        <ol class="journey-timeline">
          <li class="journey-milestone">
            <span class="milestone-year">2023</span>
            <div class="milestone-copy">
              <p class="milestone-type">The foundation</p>
              <h3>Began my Information Science degree</h3>
              <p>At UiTM Puncak Perdana, I began building a foundation in information systems, interaction design and web development.</p>
              <span class="milestone-tag">Bachelor’s Degree · UiTM</span>
            </div>
          </li>
          <li class="journey-milestone">
            <span class="milestone-year">2023–25</span>
            <div class="milestone-copy">
              <p class="milestone-type">Learning by making</p>
              <h3>Ideas became working experiences</h3>
              <p>I led and contributed to academic products—from an educational app prototype to hostel and event management systems—while earning Dean’s List recognition for five consecutive semesters.</p>
              <span class="milestone-tag">UX projects · Frontend development</span>
            </div>
          </li>
          <li class="journey-milestone journey-milestone--featured">
            <span class="milestone-year">Mar–Aug<br>2026</span>
            <div class="milestone-copy">
              <p class="milestone-type">Into practice</p>
              <h3>UI/UX Intern at Hitachi eBworx</h3>
              <p>I designed and enhanced more than 50 responsive interfaces for digital banking and insurance products, contributing to four product initiatives alongside designers and business consultants.</p>
              <div class="milestone-stats"><span><strong>50+</strong> interfaces</span><span><strong>4</strong> initiatives</span></div>
            </div>
          </li>
          <li class="journey-milestone">
            <span class="milestone-year">2026</span>
            <div class="milestone-copy">
              <p class="milestone-type">Capstone project</p>
              <h3>Built Hitern end to end</h3>
              <p>I designed and developed a role-based internship document management platform with secure workflows, notifications and dashboards for interns, supervisors and HR.</p>
              <span class="milestone-tag">React · Node.js · Express · MySQL</span>
            </div>
          </li>
          <li class="journey-milestone journey-milestone--next">
            <span class="milestone-year">Next</span>
            <div class="milestone-copy">
              <p class="milestone-type">The fresh-graduate chapter</p>
              <h3>The journey continues…</h3>
              <p>I’m looking for a UI/UX or frontend opportunity where I can keep learning, contribute thoughtfully and create experiences people genuinely enjoy using.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section id="work" class="work-section" aria-labelledby="work-title">
      <header class="work-heading">
        <div>
          <p class="scene-label">Chapter three · Selected work</p>
          <h2 id="work-title">Where ideas become<br><em>useful experiences.</em></h2>
        </div>
        <p>A selection of projects that show how I move between user experience thinking, interface design and frontend development.</p>
      </header>

      <div class="work-grid">
        ${projects.map((project,index)=>`
          <article class="work-card work-card--${project.slug} ${index === 0 ? 'work-card--featured' : ''}" data-project="${index}">
            <button class="project-preview" type="button" aria-label="View ${project.title} case study">
              <span class="project-number">${project.number}</span>
              <span class="project-mockup" aria-hidden="true">
                <i class="mockup-browser"><b></b><b></b><b></b><span></span><em></em><strong></strong></i>
                ${project.slug === 'language' ? '<i class="mockup-phone"><b></b><span></span><em></em></i>' : ''}
              </span>
              <span class="preview-cue">Open case study <i>↗</i></span>
            </button>
            <div class="project-info">
              <div class="project-title-row"><h3>${project.title}</h3><span>${project.type}</span></div>
              <p>${project.summary}</p>
              <ul>${project.tools.slice(0,4).map(tool=>`<li>${tool}</li>`).join('')}</ul>
              <button class="case-study-link" type="button">View case study <span>↗</span></button>
            </div>
          </article>`).join('')}
      </div>
    </section>

    <section id="skills" class="skills-section" aria-labelledby="skills-title">
      <div class="skills-petals" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <header class="skills-heading">
        <p class="scene-label">Chapter four · What I bring</p>
        <h2 id="skills-title">Designing with empathy.<br><em>Building with intention.</em></h2>
        <p>A growing toolkit across interface design and frontend development. The progress values below are temporary placeholders for now.</p>
      </header>

      <div class="skills-frame">
        <div class="vine vine--top" aria-hidden="true">${Array.from({length:9},(_,i)=>`<i style="--leaf:${i}"></i>`).join('')}</div>
        <div class="vine vine--right" aria-hidden="true">${Array.from({length:7},(_,i)=>`<i style="--leaf:${i}"></i>`).join('')}</div>
        <div class="vine vine--bottom" aria-hidden="true">${Array.from({length:9},(_,i)=>`<i style="--leaf:${i}"></i>`).join('')}</div>
        <div class="vine vine--left" aria-hidden="true">${Array.from({length:7},(_,i)=>`<i style="--leaf:${i}"></i>`).join('')}</div>
        <span class="frame-flower frame-flower--one" aria-hidden="true">${flowerSvg('frame-flower-svg')}</span>
        <span class="frame-flower frame-flower--two" aria-hidden="true">${flowerSvg('frame-flower-svg')}</span>

        <div class="skill-groups">
          ${skillGroups.map(group=>`
            <article class="skill-group">
              <h3>${group.title}</h3>
              <div class="skill-list">
                ${group.skills.map(([name,value])=>`
                  <div class="skill-row" style="--skill-level:${value}%">
                    <div class="skill-label"><span>${name}</span><b>${value}%</b></div>
                    <div class="skill-track" role="progressbar" aria-label="${name} placeholder proficiency" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100"><i></i></div>
                  </div>`).join('')}
              </div>
            </article>`).join('')}
        </div>
      </div>

      <div class="tools-showcase" aria-label="Tools and applications I use">
        <div class="tools-intro"><p class="scene-label">Tools in my workflow</p><span>Hover to pause</span></div>
        <div class="tools-marquee">
          <div class="tools-track">
            ${[...toolsKnown,...toolsKnown].map((tool,index)=>`
              <div class="tool-item" ${index >= toolsKnown.length ? 'aria-hidden="true"' : ''}>
                <span class="tool-mark">${tool.split(/\s|\./).map(word=>word[0]).join('').slice(0,3)}</span>
                <strong>${tool}</strong>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section" aria-labelledby="contact-title">
      <div class="contact-petals" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
      <div class="contact-layout">
        <div class="contact-story">
          <p class="scene-label">The next chapter · Contact</p>
          <h2 id="contact-title">Thank you for visiting<br><em>my world.</em></h2>
          <p class="contact-intro">My journey is just beginning. I’m currently exploring opportunities where I can continue learning, creating and growing.</p>

          <button class="letter-button" type="button" aria-expanded="false">
            <span>✉</span> A letter for you <i>＋</i>
          </button>
          <div class="letter-note" hidden>
            <p>Dear Anonymous,</p>
            <p>Thank you for taking the time to explore my work. I’d love the opportunity to bring thoughtful design, curiosity and care to your team.</p>
            <p>— Queenie</p>
          </div>

          <address class="contact-links">
            <a href="mailto:qthamshinee@gmail.com"><span>✉</span><div><small>Email</small><strong>qthamshinee@gmail.com</strong></div></a>
            <a href="https://www.linkedin.com/in/queenie-tham" target="_blank" rel="noreferrer"><span>in</span><div><small>LinkedIn</small><strong>queenie-tham</strong></div></a>
            <a href="https://github.com/Qninie" target="_blank" rel="noreferrer"><span>gh</span><div><small>GitHub</small><strong>Qninie</strong></div></a>
          </address>
        </div>

        <div class="contact-form-wrap">
          <span class="contact-blossom" aria-hidden="true">${flowerSvg('contact-flower-svg')}</span>
          <p class="scene-label">Let’s create something meaningful</p>
          <h3>Send me a message</h3>
          <form class="contact-form">
            <label><span>Name</span><input type="text" name="name" autocomplete="name" placeholder="Your name" required></label>
            <label><span>Email</span><input type="email" name="email" autocomplete="email" placeholder="your@email.com" required></label>
            <label><span>Message</span><textarea name="message" rows="5" placeholder="Tell me about your opportunity, project, or just say hello…" required></textarea></label>
            <button type="submit">Open email draft <span>→</span></button>
            <p class="form-note">This opens your email app with the message prepared.</p>
          </form>
        </div>
      </div>

      <footer class="world-footer">
        <span class="final-petal" aria-hidden="true"></span>
        <p>Thank you for visiting my world.</p>
        <span>Designed & built with care by Queenie · 2026</span>
      </footer>
    </section>
  </main>

  <div class="memory-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
    <button class="back-to-tree" aria-label="Back to the blossom tree"><span>←</span> Back to the tree</button>
    <div class="memory-detail">
      <div class="detail-blossom" aria-hidden="true">
        ${flowerSvg('detail-flower-svg')}
        <div class="modal-image" role="img"></div>
      </div>
      <div class="memory-photo-marquee" aria-label="Then and now photo story" hidden><div class="memory-photo-track"></div></div>
      <div class="modal-copy"><p class="scene-label">A memory from my journey</p><h2 id="modal-title"></h2><p class="modal-description"></p><small class="modal-detail"></small></div>
    </div>
  </div>

  <div class="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" hidden>
    <div class="project-case-study">
      <button class="project-modal-close" type="button" aria-label="Close project case study"><span>←</span> Back to selected work</button>
      <div class="case-study-visual" aria-hidden="true">
        <span class="project-mockup"><i class="mockup-browser"><b></b><b></b><b></b><span></span><em></em><strong></strong></i></span>
      </div>
      <div class="case-study-copy">
        <p class="scene-label">Selected case study · <span class="case-number"></span></p>
        <h2 id="project-modal-title"></h2>
        <p class="case-role"></p>
        <p class="case-summary"></p>
        <dl class="case-details">
          <div><dt>The challenge</dt><dd class="case-challenge"></dd></div>
          <div><dt>My approach</dt><dd class="case-approach"></dd></div>
          <div><dt>The outcome</dt><dd class="case-outcome"></dd></div>
        </dl>
        <ul class="case-tools"></ul>
        <a class="case-live-link" target="_blank" rel="noreferrer">View live project <span>↗</span></a>
      </div>
    </div>
  </div>
`;

// Keep the multilingual welcome gently looping.
const greetings = [...document.querySelectorAll('.greeting-word')];
const beginCue = document.querySelector('.begin-cue');
let greetingIndex = 0;
const greetingTimer = window.setInterval(() => {
  greetings[greetingIndex].classList.remove('is-visible');
  greetingIndex = (greetingIndex + 1) % greetings.length;
  greetings[greetingIndex].classList.add('is-visible');
}, 1450);

// Lightweight cursor trail with a strict particle cap.
const cursor = document.querySelector('.sakura-cursor');
const canUseCursor = matchMedia('(hover:hover) and (pointer:fine) and (min-width:1025px) and (prefers-reduced-motion:no-preference)').matches;
let cursorFrame = 0;
let pointer = { x: -80, y: -80 };
let lastParticle = 0;
const particles = new Set();
if (canUseCursor) {
  window.addEventListener('pointermove', event => {
    pointer = { x: event.clientX, y: event.clientY };
    if (!cursorFrame) cursorFrame = requestAnimationFrame(() => {
      cursor.style.transform = `translate3d(${pointer.x}px,${pointer.y}px,0)`;
      cursor.classList.add('is-visible');
      cursorFrame = 0;
    });
    if (performance.now() - lastParticle < 110 || particles.size >= 12) return;
    lastParticle = performance.now();
    const petal = document.createElement('i');
    petal.className = 'trail-petal';
    petal.style.cssText = `left:${event.clientX}px;top:${event.clientY}px;--drift:${(Math.random()-.5)*60}px;--spin:${(Math.random()-.5)*240}deg`;
    particles.add(petal);
    document.body.append(petal);
    petal.addEventListener('animationend', () => { particles.delete(petal); petal.remove(); }, { once:true });
  }, { passive:true });
}

const hero = document.querySelector('.hero-scene');
const journeyButton = document.querySelector('.primary-button');
const scrollButterflyGuide = document.querySelector('.scroll-butterfly-guide');
const scrollGuideTip = scrollButterflyGuide.querySelector('.guide-tip');
new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting && !hero.classList.contains('has-grown')) {
    hero.classList.add('has-grown');
  }
}, { threshold:.28 }).observe(hero);

const heroNature = document.querySelector('.hero-nature');
const activeHeroPetals = new Set();
let lastHeroPetal = 0;
if (matchMedia('(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)').matches) {
  hero.addEventListener('pointermove', event => {
    const rect = hero.getBoundingClientRect();
    const branchPoint = { x: rect.left + rect.width * .77, y: rect.top + rect.height * .34 };
    const dx = event.clientX - branchPoint.x;
    const dy = event.clientY - branchPoint.y;
    const distance = Math.hypot(dx, dy);
    if (distance > 180) {
      heroNature.style.setProperty('--react-x', '0deg');
      heroNature.style.setProperty('--react-y', '0px');
      return;
    }
    const strength = 1 - distance / 180;
    heroNature.style.setProperty('--react-x', `${Math.max(-3, Math.min(3, -dx / 55 * strength))}deg`);
    heroNature.style.setProperty('--react-y', `${-dy / 20 * strength}px`);
    if (performance.now() - lastHeroPetal > 850 && activeHeroPetals.size < 3 && Math.random() > .55) {
      lastHeroPetal = performance.now();
      const petal = document.createElement('i');
      petal.className = 'released-petal';
      petal.style.cssText = `left:${68 + Math.random()*22}%;top:${24 + Math.random()*28}%;--petal-drift:${(Math.random()-.5)*140}px;--petal-spin:${160+Math.random()*260}deg`;
      activeHeroPetals.add(petal);
      hero.append(petal);
      petal.addEventListener('animationend', () => { activeHeroPetals.delete(petal); petal.remove(); }, { once:true });
    }
  }, { passive:true });
  hero.addEventListener('pointerleave', () => {
    heroNature.style.setProperty('--react-x', '0deg');
    heroNature.style.setProperty('--react-y', '0px');
  });
}

// Scroll progress opens and closes the paper panels in either direction.
const doorScene = document.querySelector('.door-scene');
const journeySection = document.querySelector('.journey-section');
const timelineRail = document.querySelector('.timeline-rail');
const discoverNavLink = document.querySelector('.site-nav a[data-section="door-scene"]');
discoverNavLink.addEventListener('click', event => {
  event.preventDefault();
  const fullyOpenPosition = doorScene.offsetTop + doorScene.offsetHeight - innerHeight - 2;
  history.replaceState(null, '', '#door-scene');
  window.scrollTo({ top:fullyOpenPosition, behavior:matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth' });
});
let scrollFrame = 0;
function updateScrollScenes() {
  const rect = doorScene.getBoundingClientRect();
  const distance = doorScene.offsetHeight - innerHeight;
  const progress = Math.max(0, Math.min(1, -rect.top / distance));
  doorScene.style.setProperty('--door-progress', progress.toFixed(3));
  const journeyRect = journeySection.getBoundingClientRect();
  const railRect = timelineRail.getBoundingClientRect();
  const railGuideY = Math.max(105, Math.min(innerHeight * .56, railRect.bottom - 18));
  const journeyProgress = Math.max(0, Math.min(1, (railGuideY - railRect.top) / Math.max(1, railRect.height)));
  journeySection.style.setProperty('--journey-progress', journeyProgress.toFixed(3));
  const treeReached = progress > .94;
  const treeGuideVisible = treeReached && journeyRect.top > innerHeight * .55;
  const journeyGuideVisible = railRect.top <= innerHeight * .56 && railRect.bottom >= 105;
  const guideVisible = treeGuideVisible || journeyGuideVisible;
  let guideX;
  let guideY;
  if (treeGuideVisible) {
    guideX = innerWidth * .78;
    guideY = innerHeight * .54;
  } else if (journeyGuideVisible) {
    guideX = railRect.left + railRect.width / 2;
    guideY = railGuideY;
  } else {
    guideX = innerWidth * .5;
    guideY = innerHeight * .6;
  }
  scrollButterflyGuide.style.setProperty('--guide-screen-x', `${guideX}px`);
  scrollButterflyGuide.style.setProperty('--guide-screen-y', `${guideY}px`);
  scrollButterflyGuide.classList.toggle('is-following', guideVisible);
  scrollButterflyGuide.classList.toggle('has-tip', treeGuideVisible);
  scrollButterflyGuide.classList.toggle('is-tree-orbiting', treeGuideVisible);
  scrollButterflyGuide.classList.toggle('is-on-timeline', journeyGuideVisible);
  scrollButterflyGuide.setAttribute('aria-hidden', String(!guideVisible));
  scrollGuideTip.textContent = 'Click a flower to discover more about Queenie.';
  hero.classList.toggle('guide-is-travelling', guideVisible);
  document.querySelector('.home-nav').classList.toggle('has-background', scrollY > 8);
  scrollFrame = 0;
}
window.addEventListener('scroll', () => {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollScenes);
}, { passive:true });
updateScrollScenes();

const navLinks = [...document.querySelectorAll('.site-nav a')];
const navSections = navLinks.map(link => document.getElementById(link.dataset.section)).filter(Boolean);
new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(link => link.classList.toggle('is-active', link.dataset.section === visible.target.id));
}, { rootMargin:'-34% 0px -52%', threshold:[0,.2,.5] }).observe(doorScene);
new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) return;
  navLinks.forEach(link => link.classList.toggle('is-active', link.dataset.section === 'journey'));
}, { rootMargin:'-32% 0px -55%', threshold:0 }).observe(journeySection);

const workSection = document.querySelector('.work-section');
new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) return;
  navLinks.forEach(link => link.classList.toggle('is-active', link.dataset.section === 'work'));
}, { rootMargin:'-32% 0px -55%', threshold:0 }).observe(workSection);

const skillsSection = document.querySelector('.skills-section');
new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) return;
  navLinks.forEach(link => link.classList.toggle('is-active', link.dataset.section === 'skills'));
}, { rootMargin:'-32% 0px -55%', threshold:0 }).observe(skillsSection);

const contactSection = document.querySelector('.contact-section');
new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) return;
  navLinks.forEach(link => link.classList.toggle('is-active', link.dataset.section === 'contact'));
}, { rootMargin:'-32% 0px -55%', threshold:0 }).observe(contactSection);

const milestones = document.querySelectorAll('.journey-milestone');
const milestoneObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold:.2 });
milestones.forEach(milestone => milestoneObserver.observe(milestone));

const workCards = document.querySelectorAll('.work-card');
const workObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold:.15 });
workCards.forEach(card => workObserver.observe(card));

new IntersectionObserver(([entry], observer) => {
  if (!entry.isIntersecting) return;
  skillsSection.classList.add('is-visible');
  observer.disconnect();
}, { threshold:.18 }).observe(skillsSection);

const letterButton = document.querySelector('.letter-button');
const letterNote = document.querySelector('.letter-note');
letterButton.addEventListener('click', () => {
  const open = letterButton.getAttribute('aria-expanded') === 'true';
  letterButton.setAttribute('aria-expanded', String(!open));
  letterNote.hidden = open;
  letterButton.querySelector('i').textContent = open ? '＋' : '−';
});

document.querySelector('.contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get('name').trim();
  const email = data.get('email').trim();
  const message = data.get('message').trim();
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
  window.location.href = `mailto:qthamshinee@gmail.com?subject=${subject}&body=${body}`;
});

const projectModal = document.querySelector('.project-modal');
const projectClose = projectModal.querySelector('.project-modal-close');
let projectTrigger = null;
function openProject(index, trigger) {
  const project = projects[index];
  projectTrigger = trigger;
  projectModal.className = `project-modal project-modal--${project.slug}`;
  projectModal.querySelector('.case-number').textContent = project.number;
  projectModal.querySelector('#project-modal-title').textContent = project.title;
  projectModal.querySelector('.case-role').textContent = project.role;
  projectModal.querySelector('.case-summary').textContent = project.summary;
  projectModal.querySelector('.case-challenge').textContent = project.challenge;
  projectModal.querySelector('.case-approach').textContent = project.approach;
  projectModal.querySelector('.case-outcome').textContent = project.outcome;
  projectModal.querySelector('.case-tools').innerHTML = project.tools.map(tool => `<li>${tool}</li>`).join('');
  const link = projectModal.querySelector('.case-live-link');
  link.href = project.link;
  link.textContent = project.slug === 'language' || project.slug === 'event' ? 'Watch project walkthrough ↗' : 'View live project ↗';
  projectModal.hidden = false;
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => projectModal.classList.add('is-open'));
  projectClose.focus();
}
function closeProject() {
  projectModal.classList.remove('is-open');
  document.body.classList.remove('modal-open');
  setTimeout(() => { projectModal.hidden = true; projectTrigger?.focus(); }, 450);
}
workCards.forEach((card,index) => {
  card.querySelectorAll('.project-preview,.case-study-link').forEach(button => button.addEventListener('click', () => openProject(index, button)));
});
projectClose.addEventListener('click', closeProject);
projectModal.addEventListener('click', event => { if (event.target === projectModal) closeProject(); });

const flowers = [...document.querySelectorAll('.memory-flower')];
const progressLabel = document.querySelector('.discovery-progress span');
const modal = document.querySelector('.memory-modal');
const garden = document.querySelector('.memory-garden');
const treeInstruction = document.querySelector('.tree-instruction');
const guideButterfly = document.querySelector('.tree-guide-butterfly');
const progress = document.querySelector('.discovery-progress');
const backButton = modal.querySelector('.back-to-tree');
const memoryState = {
  viewMode: 'tree',
  currentMemory: null,
  activeFlowerIndex: 0,
  discoveredMemories: new Set()
};
let modalTrigger = null;
let treeReady = false;

function renderMemoryState() {
  const complete = memoryState.discoveredMemories.size === memories.length;
  flowers.forEach((button, index) => {
    const bloomed = memoryState.discoveredMemories.has(index);
    const active = !complete && index === memoryState.activeFlowerIndex && !bloomed;
    button.className = `memory-flower ${bloomed ? 'is-bloomed' : active ? 'is-active' : 'is-closed'}`;
    button.setAttribute('aria-current', active ? 'step' : 'false');
    button.setAttribute('aria-label', `${bloomed ? 'Revisit' : 'Discover'} ${memories[index].title} memory`);
  });
  progressLabel.textContent = String(Math.min(memoryState.discoveredMemories.size + (complete ? 0 : 1), 4)).padStart(2, '0');
  progress.classList.toggle('is-complete', complete);
  treeInstruction.textContent = complete
    ? 'Four moments, one growing journey.'
    : 'Select the glowing flower to discover a memory.';
  guideButterfly.classList.toggle('is-settled', complete);
  if (!complete && treeReady) {
    const target = memories[memoryState.activeFlowerIndex].tree;
    guideButterfly.style.setProperty('--guide-x', `${target.x}%`);
    guideButterfly.style.setProperty('--guide-y', `${target.y}%`);
    guideButterfly.classList.remove('is-guiding');
    requestAnimationFrame(() => guideButterfly.classList.add('is-guiding'));
  }
}

new IntersectionObserver(([entry], observer) => {
  if (!entry.isIntersecting) return;
  treeReady = true;
  document.querySelector('.door-sticky').classList.add('tree-is-revealing');
  renderMemoryState();
  observer.disconnect();
}, { threshold: .55 }).observe(document.querySelector('.door-sticky'));

function openMemory(index, trigger, isNewDiscovery = false) {
  const memory = memories[index];
  modalTrigger = trigger;
  modal.dataset.memory = memory.id;
  memoryState.currentMemory = index;
  memoryState.viewMode = 'memory';
  if (isNewDiscovery) memoryState.discoveredMemories.add(index);
  renderMemoryState();
  modal.querySelector('#modal-title').textContent = memory.title;
  modal.querySelector('.modal-copy .scene-label').textContent = `${memory.chapter} · A personal chapter`;
  modal.querySelector('.modal-description').textContent = memory.description;
  modal.querySelector('.modal-detail').textContent = memory.detail;
  const image = modal.querySelector('.modal-image');
  image.className = `modal-image memory-image-${memory.art}`;
  image.style.backgroundImage = memory.image ? `url("${memory.image}")` : '';
  image.setAttribute('aria-label', `${memory.title} placeholder image`);
  const photoMarquee = modal.querySelector('.memory-photo-marquee');
  const detailBlossom = modal.querySelector('.detail-blossom');
  const hasGallery = Array.isArray(memory.gallery);
  photoMarquee.hidden = !hasGallery;
  detailBlossom.hidden = hasGallery;
  modal.querySelector('.memory-detail').classList.toggle('has-photo-gallery', hasGallery);
  if (hasGallery) {
    const slides = [...memory.gallery, ...memory.gallery];
    photoMarquee.querySelector('.memory-photo-track').innerHTML = slides.map((item, galleryIndex) => `
      <figure class="memory-photo-card" ${galleryIndex >= memory.gallery.length ? 'aria-hidden="true"' : ''}>
        ${item.image ? `<img src="${item.image}" alt="${item.label} — ${item.caption}">` : `<div class="memory-photo-placeholder">Photo</div>`}
        <figcaption><strong>${item.label}</strong><span>${item.caption}</span></figcaption>
      </figure>`).join('');
  }
  modal.hidden = false;
  document.body.classList.add('modal-open');
  garden.classList.add('is-softened');
  requestAnimationFrame(() => modal.classList.add('is-open'));
  backButton.focus();
}

flowers.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (memoryState.discoveredMemories.has(index)) {
      openMemory(index, button);
      return;
    }
    if (index !== memoryState.activeFlowerIndex) return;
    guideButterfly.classList.remove('is-guiding');
    openMemory(index, button, true);
  });
});

function closeModal() {
  modal.classList.remove('is-open');
  garden.classList.remove('is-softened');
  garden.classList.remove('is-transitioning');
  document.body.classList.remove('modal-open');
  memoryState.viewMode = 'tree';
  const next = memories.findIndex((_, index) => !memoryState.discoveredMemories.has(index));
  memoryState.activeFlowerIndex = next === -1 ? 0 : next;
  renderMemoryState();
  setTimeout(() => {
    modal.hidden = true;
    flowers[memoryState.currentMemory]?.classList.remove('is-entering');
    modalTrigger?.focus();
    memoryState.currentMemory = null;
  }, 500);
}
backButton.addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
window.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.hidden) closeModal();
  if (event.key === 'Escape' && !projectModal.hidden) closeProject();
  if (event.key === 'Tab' && !modal.hidden) {
    event.preventDefault();
    backButton.focus();
  }
});

if (matchMedia('(prefers-reduced-motion:reduce)').matches) {
  beginCue.classList.add('is-visible');
}
renderMemoryState();
