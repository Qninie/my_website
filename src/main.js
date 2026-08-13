import { memories } from './memories.js';

const baseUrl = import.meta.env?.BASE_URL
  ?? (window.location.hostname.endsWith('github.io') ? '/my_website/' : '/');
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
    number:'01', slug:'hitern', category:'systems', title:'Hitern', type:'Capstone · Full-stack web application',
    role:'UI/UX · FULL-STACK DEVELOPMENT',
    summary:'A role-based internship document management platform that simplifies submissions, approvals and progress tracking for interns, supervisors and HR.',
    challenge:'Internship documents and approvals can become fragmented across messages, files and different stakeholders.',
    approach:'I mapped the multi-role workflow, designed responsive dashboards and built secure document, notification and approval experiences.',
    outcome:'A working role-based platform that centralizes document submission, approval tracking, notifications and internship progress monitoring.',
    tools:['React','Tailwind CSS','Node.js','Express','MySQL'],
    images:['hitern-login.png','hitern-intern-dashboard.png','hitern-supervisor-dashboard.png','hitern-hr-dashboard.png'],
    link:'https://qninie.github.io/hitern_system/',
    manual:'HITERN_User_Manual.pdf'
  },
  {
    number:'02', slug:'language', category:'ux', title:'EduVerse', type:'UX case study · Figma mobile prototype',
    role:'Team Leader & UI/UX Designer',
    summary:'A Figma prototype that makes learning programming feel structured, motivating and social.',
    challenge:'Beginners often find coding overwhelming and learning resources scattered.',
    approach:'I led the UX process from research and wireframes to an interactive Figma prototype.',
    outcome:'User testing improved readability, navigation, attendance tracking and community bookmarks.',
    highlights:[['5','Languages'],['3','Learning levels'],['Figma','Interactive prototype']],
    tools:['Figma','Wireframing','Prototyping','User Testing'],
    images:['eduverse-welcome.png','eduverse-login.png','eduverse-home.png','eduverse-profile.png','eduverse-notifications.png','eduverse-settings.png'],
    link:'https://youtu.be/lMaTKmI0Mkg?si=cWsmk6KDcG7va0zB',
    prototype:'https://www.figma.com/proto/l8da9LnvNeLf5GwDJYAUtX/IMS564-USER-EXPERIENCE?node-id=0-1&t=y0G3xgvQTiP1PP54-1'
  },
  {
    number:'03', slug:'hostel', category:'systems', title:'Hostel Management', type:'Responsive web development',
    role:'Frontend Developer',
    summary:'A responsive system for managing student information, room availability and hostel settings in one clear interface.',
    challenge:'Hostel information needed to remain easy to scan and manage across different screens and lighting preferences.',
    approach:'I organised complex records into a responsive dashboard and implemented both light and dark interface themes.',
    outcome:'A deployed frontend experience that demonstrates responsive layouts, structured data presentation and theme switching.',
    tools:['HTML','CSS','JavaScript','Bootstrap'],
    images:['hostel-login.png','hostel-home.png','hostel-dashboard.png','hostel-list.png','hostel-students.png','hostel-room-status.png','hostel-register-student.png','hostel-settings.png'],
    link:'https://qninie.github.io/Hostel-system-management/'
  },
  {
    number:'04', slug:'apcs', category:'systems', title:'Academic Peer Counselling System', type:'Database-driven web application',
    role:'System Developer',
    summary:'A structured UiTM mentoring platform that connects Dean’s List mentors with students who need academic support.',
    challenge:'Peer mentoring records were scattered, making it difficult to match students, measure academic improvement and recognize mentor contributions.',
    approach:'I developed the web system and database workflow for student registration, automated role validation, mentor–mentee matching, session management and GPA tracking.',
    outcome:'A tested and deployed prototype with working CRUD operations, centralized mentoring records, progress tracking and certificate management for mentors.',
    highlights:[['4','Core data entities'],['GPA','Progress tracking'],['CRUD','Session management']],
    tools:['PHP','MySQL','HTML','Bootstrap','phpMyAdmin','FileZilla'],
    images:['apcs-login.png','apcs-dashboard.png','apcs-admin-management.png','apcs-session-management.png','apcs-session-list.png','apcs-certificate-management.png','apcs-certificate-list.png'],
    link:'https://youtu.be/7kEiJudpVQU?si=Jht50xd2BPfqGDux'
  },
  {
    number:'05', slug:'eresume', category:'development', title:'E-Resume Website', type:'Individual project · Multi-page frontend website',
    role:'UI DESIGN & FRONTEND DEVELOPMENT',
    summary:'A multi-page digital resume presenting my background, education, skills, experience and achievements in a browsable web format.',
    challenge:'A traditional resume has limited space for presenting detailed academic, personal and professional information in an engaging way.',
    approach:'I independently planned the information structure, designed the visual identity and developed consistent navigation across seven content pages.',
    outcome:'A deployed personal website that organises my résumé into clear sections and demonstrates foundational frontend and interface design skills.',
    tools:['HTML','CSS','JavaScript','Responsive Design'],
    images:['e-resume-home.png','e-resume-personal-detail.png','e-resume-education.png','e-resume-skills.png','e-resume-experience.png','e-resume-achievement.png','e-resume-references.png'],
    link:'https://queenie-resume.netlify.app/'
  },
  {
    number:'06', slug:'kampungwai', category:'development', title:'Kampung Wai', type:'Group assignment · Cultural tourism website',
    role:'TEAM LEADER · WEB DESIGN & DEVELOPMENT',
    summary:'A multi-page destination website introducing the heritage, culture, attractions and community experiences of Kampung Wai, Perlis.',
    challenge:'Kampung Wai needed an engaging digital presence that could preserve local identity while helping visitors discover its culture and attractions.',
    approach:'As team leader, I guided our four-person team in planning an eight-page sitemap and combining cultural storytelling, scenic media and interactive navigation into a welcoming experience.',
    outcome:'A deployed tourism website that brings the village’s history, culture, events, attractions and visitor information together in one accessible destination.',
    tools:['HTML','CSS','JavaScript','Responsive Design'],
    images:['kampung-wai-home.png','kampung-wai-about.png','kampung-wai-history.png','kampung-wai-culture.png','kampung-wai-attraction.png','kampung-wai-event.png','kampung-wai-gallery.png','kampung-wai-faq.png'],
    link:'https://qninie.github.io/kampungwai/'
  },
  {
    number:'07', slug:'digitalsecurity', category:'creative', title:'Digital Security', type:'Group assignment · Awareness video',
    role:'TEAM LEADER · DIRECTOR · VIDEO EDITOR',
    summary:'An educational awareness video introducing digital security and the importance of protecting information, devices and online activity.',
    challenge:'Digital threats can feel technical and distant, making important security concepts difficult to communicate in an engaging, understandable way.',
    approach:'As team leader and director, I guided the production and independently edited the final video in CapCut to shape its pacing, visual flow and message.',
    outcome:'A completed group video that transforms research about digital security into a concise visual awareness piece for a student audience.',
    tools:['CapCut','Video Editing','Directing','Visual Storytelling'],
    images:['digital-security-video.png'],
    video:'digital-security-video.m4v'
  },
  {
    number:'08', slug:'livingroomgame', category:'creative', title:'Living Room Learning Game', type:'Individual lab test · Interactive presentation',
    role:'INTERACTION DESIGN & PRESENTATION DEVELOPMENT',
    summary:'A child-friendly PowerPoint activity that teaches common living-room objects through guided learning and a picture-based quiz.',
    challenge:'The exercise explored how a familiar presentation tool could become a simple, understandable interactive learning experience for children.',
    approach:'I designed the visual assets in Canva and built linked learning, quiz and feedback paths in PowerPoint across 34 interactive slides.',
    outcome:'A small working learning activity covering 13 household objects, followed by five questions with immediate correct or incorrect feedback.',
    highlights:[['13','Objects'],['5','Quiz questions'],['34','Interactive slides']],
    tools:['Canva','PowerPoint','Interaction Design','Educational Content'],
    images:['living-room-game.png'],
    presentation:'living-room-interactive-game.pptx'
  }
];

const skillGroups = [
  { title:'Design', skills:[['UI/UX Design',84],['Wireframing',88],['Prototyping',82],['Responsive Design',78]] },
  { title:'Frontend', skills:[['HTML & CSS',88],['JavaScript',76],['React',72],['Tailwind CSS',78]] },
  { title:'Development', skills:[['Node.js & Express',68],['MySQL',72],['REST APIs',66],['Git & GitHub',76]] }
];
const toolsKnown = ['Figma','React','JavaScript','HTML','CSS','Tailwind','Node.js','Express','MySQL','Git','GitHub','VS Code','Postman','Tableau','Canva','Bootstrap'];
const toolIcons = {
  Figma:'figma.svg', React:'react.svg', JavaScript:'javascript.svg', HTML:'html5.svg',
  CSS:'css.svg', Tailwind:'tailwindcss.svg', 'Node.js':'nodedotjs.svg', Express:'express.svg',
  MySQL:'mysql.svg', Git:'git.svg', GitHub:'github.svg', 'VS Code':'visualstudiocode.svg',
  Postman:'postman.svg', Tableau:'tableau.svg', Canva:'canva.svg', Bootstrap:'bootstrap.svg'
};

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
    <a class="resume-button" href="${assetUrl('Queenie-Tham-Resume.pdf')}" download="Queenie-Tham-Resume.pdf" aria-label="Download Queenie Tham's résumé">
      <span class="resume-button-full">Download résumé</span><span class="resume-button-short">CV</span><i aria-hidden="true">↓</i>
    </a>
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
          <a class="primary-button" href="#door-scene">Explore My Journey</a>
          <div class="hero-scroll"><i></i></div>
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
            <h2 id="memory-heading">Discover the moments that helped me <em>grow</em></h2>
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
        <h2 id="journey-title">Learning by doing<br><em>Growing with purpose</em></h2>
        <p>From my early academic years to stepping into the industry, each chapter has shaped who I am and where I’m heading.</p>
      </header>

      <div class="journey-layout">
        <div class="timeline-rail" aria-hidden="true">
          <i></i>
          <img class="timeline-butterfly" src="${assetUrl('guide-butterfly-open-cropped.png')}" alt="" />
        </div>
        <ol class="journey-timeline">
          <li class="journey-milestone">
            <span class="milestone-year">2020</span>
            <div class="milestone-copy">
              <p class="milestone-type">The starting point</p>
              <h3>SPM · SMJK Krian</h3>
              <p>A starting point that opened the door to the next stage of my academic journey.</p>
              <div class="milestone-highlights">
                <span><strong>SPM</strong> Graduate</span>
                <span><strong>SMJK</strong> Krian</span>
              </div>
            </div>
          </li>
          <li class="journey-milestone">
            <span class="milestone-year">2023</span>
            <div class="milestone-copy">
              <p class="milestone-type">Building my foundation</p>
              <h3>STPM · SMK Panglima Bukit Gantang</h3>
              <p>Completed Form 6 and built a stronger academic foundation before moving on to university.</p>
              <div class="milestone-highlights">
                <span><strong>3.17</strong> CGPA</span>
                <span><strong>3.5</strong> MUET Band</span>
              </div>
            </div>
          </li>
          <li class="journey-milestone">
            <span class="milestone-year">2023–2026</span>
            <div class="milestone-copy">
              <p class="milestone-type">Discovering my direction</p>
              <h3>Bachelor of Information Systems Management · UiTM</h3>
              <p>Explored information systems through academic and hands-on projects while developing a growing interest in UI/UX and frontend development.</p>
              <div class="milestone-highlights">
                <span><strong>3.67</strong> CGPA</span>
                <span><strong>5×</strong> Dean’s List</span>
                <span><strong>Bachelor’s</strong> Degree</span>
              </div>
            </div>
          </li>
          <li class="journey-milestone journey-milestone--featured">
            <span class="milestone-year">Mar–Aug<br>2026</span>
            <div class="milestone-copy">
              <p class="milestone-type">Stepping into the industry</p>
              <h3>UI/UX Intern · Hitachi eBworx</h3>
              <p>Gained practical industry exposure through research, wireframing, interface refinement, frontend implementation, and responsive testing.</p>
              <div class="milestone-highlights">
                <span><strong>50+</strong> Wireframe Screens</span>
                <span><strong>4</strong> Projects</span>
              </div>
            </div>
          </li>
          <li class="journey-milestone journey-milestone--next">
            <span class="milestone-year">2026</span>
            <div class="milestone-copy">
              <p class="milestone-type">What’s next?</p>
              <h3>The journey continues</h3>
              <p>Ready to take the next step into my professional journey while continuing to learn, create, and grow.</p>
              <div class="milestone-highlights">
                <span><strong>Final-Year</strong> Undergraduate</span>
                <span><strong>2027</strong> Expected Graduation</span>
                <span><strong>Open</strong> to Opportunities In</span>
                <span class="opportunity-roles"><strong>UI/UX</strong><i>·</i><strong>Frontend</strong></span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section id="work" class="work-section" aria-labelledby="work-title">
      <header class="work-heading">
        <div>
          <p class="scene-label">Chapter three · Selected work</p>
          <h2 id="work-title">Where ideas become<br><em>useful experiences</em></h2>
        </div>
        <p>A selection of projects exploring how I bring together design, technology and creative problem-solving.</p>
      </header>

      <div class="work-filters" role="group" aria-label="Filter selected work by category">
        <button class="work-filter is-active" type="button" data-filter="all" aria-pressed="true">All</button>
        <button class="work-filter" type="button" data-filter="systems" aria-pressed="false">Web Applications</button>
        <button class="work-filter" type="button" data-filter="development" aria-pressed="false">Web Development</button>
        <button class="work-filter" type="button" data-filter="ux" aria-pressed="false">UI/UX Design</button>
        <button class="work-filter" type="button" data-filter="creative" aria-pressed="false">Creative Work</button>
        <span class="work-filter-indicator" aria-hidden="true"></span>
      </div>

      <div class="work-grid">
        ${projects.map((project,index)=>`
          <article class="work-card work-card--${project.slug} ${index === 0 ? 'work-card--featured' : ''}" data-project="${index}" data-category="${project.category}">
            <button class="project-preview" type="button" aria-label="View ${project.title} case study">
              <span class="project-number">${project.number}</span>
              ${project.images ? `<span class="screenshot-carousel project-screenshot-carousel" aria-hidden="true">
                ${project.images.map((image,index) => `<img class="${index === 0 ? 'is-active' : ''}" src="${assetUrl(image)}" alt="">`).join('')}
              </span>` : ''}
              <span class="project-mockup" aria-hidden="true">
                <i class="mockup-browser"><b></b><b></b><b></b><span></span><em></em><strong></strong></i>
                ${project.slug === 'language' ? '<i class="mockup-phone"><b></b><span></span><em></em></i>' : ''}
              </span>
              <span class="preview-cue">Open case study <i>↗</i></span>
            </button>
            <div class="project-info">
              <div class="project-title-row"><h3>${project.title}</h3><span>${project.type}</span></div>
              <p>${project.summary}</p>
              <ul>${project.tools.slice(0,5).map(tool=>`<li>${tool}</li>`).join('')}</ul>
              <button class="case-study-link" type="button">View case study <span>↗</span></button>
            </div>
          </article>`).join('')}
      </div>
      <p class="work-empty" hidden><strong>More work is growing here.</strong><span>New projects will be added to this category soon.</span></p>
    </section>

    <section id="skills" class="skills-section" aria-labelledby="skills-title">
      <div class="skills-petals" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <header class="skills-heading">
        <p class="scene-label">Chapter four · What I bring</p>
        <h2 id="skills-title">Designing with empathy<br><em>Building with intention</em></h2>
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
        <div class="tools-intro"><p class="scene-label">Tools in my workflow</p></div>
        <div class="tools-marquee">
          <div class="tools-track">
            ${[...toolsKnown,...toolsKnown].map((tool,index)=>`
              <div class="tool-item" ${index >= toolsKnown.length ? 'aria-hidden="true"' : ''}>
                <span class="tool-mark"><img src="${assetUrl(`tool-icons/${toolIcons[tool]}`)}" alt="" loading="lazy"></span>
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
            <span>✉</span> A LITTLE NOTE FROM ME　 <i>＋</i>
          </button>
          <div class="letter-note" hidden>
            <p>Dear Recruiter,</p>
            <p>Thank you for taking the time to explore my work. I'm excited to begin the next chapter of my journey and always happy to connect, collaborate, or simply have a conversation about design and technology. 🌸</p>
            <p>— Queenie</p>
          </div>

          <address class="contact-links">
            <a href="mailto:qthamshinee@gmail.com"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3zM4 7l8 6 8-6"/></svg></span><div><small>Email</small><strong>qthamshinee@gmail.com</strong></div></a>
            <a href="https://www.linkedin.com/in/queenie-tham" target="_blank" rel="noreferrer"><span><svg class="contact-brand-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V9H7.1v11.45Z"/></svg></span><div><small>LinkedIn</small><strong>queenie-tham</strong></div></a>
            <a href="https://github.com/Qninie" target="_blank" rel="noreferrer"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8a9.3 9.3 0 0 0-2.94 18.12c.47.08.64-.2.64-.45v-1.8c-2.62.57-3.17-1.11-3.17-1.11-.43-1.09-1.05-1.38-1.05-1.38-.86-.59.06-.58.06-.58.95.07 1.45.98 1.45.98.85 1.44 2.22 1.03 2.76.79.09-.61.33-1.03.6-1.27-2.09-.24-4.29-1.05-4.29-4.65 0-1.03.37-1.87.97-2.53-.1-.24-.42-1.2.09-2.5 0 0 .79-.25 2.56.97a8.9 8.9 0 0 1 4.66 0c1.78-1.22 2.56-.97 2.56-.97.51 1.3.19 2.26.09 2.5.61.66.97 1.5.97 2.53 0 3.61-2.2 4.4-4.3 4.64.34.29.64.87.64 1.76v2.62c0 .25.17.54.65.45A9.3 9.3 0 0 0 12 2.8Z"/></svg></span><div><small>GitHub</small><strong>Qninie</strong></div></a>
            <a href="${assetUrl('Queenie-Tham-Resume.pdf')}" download="Queenie-Tham-Resume.pdf"><span>↓</span><div><small>Résumé</small><strong>Download PDF</strong></div></a>
          </address>
        </div>

        <div class="contact-form-wrap">
          <span class="contact-blossom" aria-hidden="true">${flowerSvg('contact-flower-svg')}</span>
          <p class="scene-label">LET'S CONNECT</p>
          <h3>Send me a message</h3>
          <form class="contact-form">
            <label><span>Name</span><input type="text" name="name" autocomplete="name" placeholder="Your name" required></label>
            <label><span>Email</span><input type="email" name="email" autocomplete="email" placeholder="your@email.com" required></label>
            <label><span>Message</span><textarea name="message" rows="5" placeholder="Tell me about your opportunity, project, or just say hello…" required></textarea></label>
            <button type="submit">Send a message <span aria-hidden="true">↗</span></button>
            <p class="form-note">Opens your email app with the message prepared.</p>
          </form>
        </div>
      </div>

      <footer class="world-footer">
        <small>Designed & built with care by Queenie · 2026</small>
        <a class="back-to-top" href="#greeting" aria-label="Back to top">
          <span class="back-to-top-flower" aria-hidden="true">${flowerSvg('back-to-top-flower-svg')}<i>↑</i></span>
        </a>
      </footer>
    </section>
  </main>

  <div class="memory-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
    <div class="memory-detail">
      <div class="detail-blossom" aria-hidden="true">
        ${flowerSvg('detail-flower-svg')}
        <div class="modal-image" role="img"></div>
      </div>
      <div class="memory-photo-marquee" aria-label="Then and now photo story" hidden><div class="memory-photo-track"></div></div>
      <div class="modal-copy"><p class="scene-label">A memory from my journey</p><h2 id="modal-title" tabindex="-1"></h2><p class="modal-description"></p><small class="modal-detail"></small></div>
    </div>
  </div>

  <div class="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" hidden>
    <div class="project-case-study">
      <button class="project-modal-close" type="button" aria-label="Back to selected work"><span>←</span> Back to selected work</button>
      <div class="case-study-visual" aria-hidden="true">
        <span class="project-mockup"><i class="mockup-browser"><b></b><b></b><b></b><span></span><em></em><strong></strong></i></span>
        <div class="screenshot-carousel case-screenshot-carousel" hidden></div>
      </div>
      <div class="case-study-copy">
        <p class="scene-label">Selected case study · <span class="case-number"></span></p>
        <h2 id="project-modal-title" tabindex="-1"></h2>
        <p class="case-role"></p>
        <p class="case-summary"></p>
        <dl class="case-details">
          <div><dt>The challenge</dt><dd class="case-challenge"></dd></div>
          <div><dt>My approach</dt><dd class="case-approach"></dd></div>
          <div><dt>The outcome</dt><dd class="case-outcome"></dd></div>
        </dl>
        <div class="case-highlights" hidden></div>
        <ul class="case-tools"></ul>
        <div class="case-actions">
          <a class="case-live-link" target="_blank" rel="noreferrer">View live project <span>↗</span></a>
          <a class="case-prototype-link" target="_blank" rel="noreferrer" hidden>View Figma prototype <span>↗</span></a>
          <a class="case-manual-link" target="_blank" rel="noreferrer" hidden>View user manual <span>↗</span></a>
        </div>
      </div>
    </div>
    <div class="project-video-viewer" hidden>
      <button class="project-video-close" type="button" aria-label="Close video"><span>×</span> Close video</button>
      <video controls playsinline preload="metadata"></video>
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
const doorOpenRatio = .68;
const reducedMotion = matchMedia('(prefers-reduced-motion:reduce)').matches;
let hasSettledAtOpenDoor = false;
let previousDoorProgress = 0;
let previousScrollY = scrollY;

function getFullyOpenDoorPosition() {
  const scrollDistance = Math.max(0, doorScene.offsetHeight - innerHeight);
  return doorScene.offsetTop + scrollDistance * doorOpenRatio;
}

discoverNavLink.addEventListener('click', event => {
  event.preventDefault();
  const fullyOpenPosition = getFullyOpenDoorPosition();
  hasSettledAtOpenDoor = true;
  history.replaceState(null, '', '#door-scene');
  window.scrollTo({ top:fullyOpenPosition, behavior:reducedMotion ? 'auto' : 'smooth' });
});
let scrollFrame = 0;
let treeButterflyTourStarted = false;
let treeButterflyTourComplete = false;

function startTreeButterflyTour() {
  if (treeButterflyTourStarted || reducedMotion) return;
  const flowerStops = [...document.querySelectorAll('.memory-flower')].map(flower => {
    const flowerRect = flower.getBoundingClientRect();
    return {
      x: flowerRect.left + flowerRect.width / 2,
      y: flowerRect.top + flowerRect.height / 2
    };
  });
  if (flowerStops.length !== memories.length) return;

  treeButterflyTourStarted = true;
  const finalStop = { x: innerWidth * .78, y: innerHeight * .62 };
  const tourStops = [
    { x: -60, y: Math.max(innerHeight * .55, flowerStops[0].y + 70) },
    ...flowerStops,
    finalStop
  ];
  const offsets = [0, .12, .32, .50, .68, .86];
  const keyframes = tourStops.map((stop, stopIndex) => ({
    offset: offsets[stopIndex],
    transform: `translate3d(${stop.x}px,${stop.y}px,0) translate(-50%,-50%) scale(${stopIndex ? 1 : .72})`,
    opacity: stopIndex ? 1 : 0,
    easing: 'cubic-bezier(.35,.05,.25,1)'
  }));

  const tour = scrollButterflyGuide.animate(keyframes, {
    duration: 7200,
    fill: 'forwards'
  });
  tour.finished.then(() => {
    treeButterflyTourComplete = true;
    scrollButterflyGuide.style.setProperty('--guide-screen-x', '78vw');
    scrollButterflyGuide.style.setProperty('--guide-screen-y', '62vh');
    scrollButterflyGuide.classList.add('has-tip');
    tour.cancel();
  }).catch(() => {});
}

function updateScrollScenes() {
  const rect = doorScene.getBoundingClientRect();
  const distance = doorScene.offsetHeight - innerHeight;
  const openingDistance = Math.max(1, distance * doorOpenRatio);
  const progress = Math.max(0, Math.min(1, -rect.top / openingDistance));
  const scrollingDown = scrollY > previousScrollY;
  if (!reducedMotion && !hasSettledAtOpenDoor && scrollingDown && previousDoorProgress < .94 && progress >= .94) {
    hasSettledAtOpenDoor = true;
    window.scrollTo({ top:getFullyOpenDoorPosition(), behavior:'smooth' });
  }
  if (progress < .65) hasSettledAtOpenDoor = false;
  previousDoorProgress = progress;
  previousScrollY = scrollY;
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
  scrollButterflyGuide.classList.toggle('has-tip', treeGuideVisible && treeButterflyTourComplete);
  scrollButterflyGuide.classList.toggle('is-tree-orbiting', treeGuideVisible);
  scrollButterflyGuide.classList.toggle('is-on-timeline', journeyGuideVisible);
  scrollButterflyGuide.setAttribute('aria-hidden', String(!guideVisible));
  scrollGuideTip.textContent = 'Click a flower to discover more about Queenie.';
  if (treeGuideVisible) startTreeButterflyTour();
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

const workFilters = [...document.querySelectorAll('.work-filter')];
const workFilterIndicator = document.querySelector('.work-filter-indicator');
const workEmpty = document.querySelector('.work-empty');
let filterTransition = 0;
function positionWorkFilterIndicator(button) {
  workFilterIndicator.style.setProperty('--filter-left', `${button.offsetLeft}px`);
  workFilterIndicator.style.setProperty('--filter-width', `${button.offsetWidth}px`);
}
async function filterWork(category) {
  const transition = ++filterTransition;
  const visibleCards = [...workCards].filter(card => category === 'all' || card.dataset.category === category);
  const activeButton = workFilters.find(button => button.dataset.filter === category);
  workFilters.forEach(button => {
    const isActive = button === activeButton;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  positionWorkFilterIndicator(activeButton);

  const outgoingCards = [...workCards].filter(card => !card.hidden);
  await Promise.all(outgoingCards.map(card => card.animate([
    { opacity:1, transform:'translateY(0)' },
    { opacity:0, transform:'translateY(12px)' }
  ], { duration:180, easing:'ease-out', fill:'forwards' }).finished.catch(() => {})));
  if (transition !== filterTransition) return;

  workCards.forEach(card => {
    const isVisible = visibleCards.includes(card);
    card.hidden = !isVisible;
    card.classList.remove('is-filter-featured','is-filter-even');
  });
  visibleCards.forEach((card,index) => {
    card.querySelector('.project-number').textContent = category === 'all'
      ? projects[Number(card.dataset.project)].number
      : String(index + 1).padStart(2,'0');
  });
  if (category !== 'all') {
    visibleCards[0]?.classList.add('is-filter-featured');
    visibleCards.slice(1).forEach((card,index) => card.classList.toggle('is-filter-even', index % 2 === 0));
  }
  workEmpty.hidden = visibleCards.length > 0;
  visibleCards.forEach(card => card.animate([
    { opacity:0, transform:'translateY(18px)' },
    { opacity:1, transform:'translateY(0)' }
  ], { duration:380, delay:60, easing:'cubic-bezier(.2,.75,.2,1)', fill:'both' }));
}
workFilters.forEach(button => button.addEventListener('click', () => filterWork(button.dataset.filter)));
requestAnimationFrame(() => positionWorkFilterIndicator(workFilters.find(button => button.classList.contains('is-active'))));
window.addEventListener('resize', () => positionWorkFilterIndicator(workFilters.find(button => button.classList.contains('is-active'))));

const preparedScreenshotCarousels = new WeakSet();
function prepareScreenshotCarousel(carousel) {
  if (!carousel || preparedScreenshotCarousels.has(carousel)) return;
  const slides = [...carousel.querySelectorAll('img')];
  if (slides.length < 2) return;
  const hoverTarget = carousel.closest('.project-preview, .case-study-visual') ?? carousel;
  let currentSlide = 0;
  let slideTimer = null;
  const showSlide = nextSlide => {
    const previousSlide = slides[currentSlide];
    previousSlide.classList.add('is-leaving');
    previousSlide.classList.remove('is-active');
    window.setTimeout(() => previousSlide.classList.remove('is-leaving'), 600);
    currentSlide = nextSlide % slides.length;
    slides[currentSlide].classList.add('is-active');
  };
  const startSlides = () => {
    if (slideTimer) return;
    carousel.classList.add('is-playing');
    slideTimer = window.setInterval(() => showSlide(currentSlide + 1), 1350);
  };
  const stopSlides = () => {
    window.clearInterval(slideTimer);
    slideTimer = null;
    carousel.classList.remove('is-playing');
    showSlide(0);
  };
  hoverTarget.addEventListener('pointerenter', startSlides);
  hoverTarget.addEventListener('pointerleave', stopSlides);
  preparedScreenshotCarousels.add(carousel);
}
document.querySelectorAll('.project-screenshot-carousel').forEach(prepareScreenshotCarousel);

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
const projectVideoViewer = projectModal.querySelector('.project-video-viewer');
const projectVideo = projectVideoViewer.querySelector('video');
const projectVideoClose = projectVideoViewer.querySelector('.project-video-close');
let projectTrigger = null;
function openProject(index, trigger) {
  const project = projects[index];
  projectTrigger = trigger;
  projectModal.className = `project-modal project-modal--${project.slug}`;
  projectModal.querySelector('.case-number').textContent = trigger.closest('.work-card')?.querySelector('.project-number')?.textContent ?? project.number;
  projectModal.querySelector('#project-modal-title').textContent = project.title;
  projectModal.querySelector('.case-role').textContent = project.role;
  projectModal.querySelector('.case-summary').textContent = project.summary;
  projectModal.querySelector('.case-challenge').textContent = project.challenge;
  projectModal.querySelector('.case-approach').textContent = project.approach;
  projectModal.querySelector('.case-outcome').textContent = project.outcome;
  const highlights = projectModal.querySelector('.case-highlights');
  highlights.hidden = !project.highlights;
  highlights.innerHTML = project.highlights?.map(([value, label]) => `<span><strong>${value}</strong>${label}</span>`).join('') ?? '';
  projectModal.querySelector('.case-tools').innerHTML = project.tools.map(tool => `<li>${tool}</li>`).join('');
  const projectVisual = projectModal.querySelector('.case-study-visual');
  const caseCarousel = projectVisual.querySelector('.case-screenshot-carousel');
  const hasScreenshots = Array.isArray(project.images) && project.images.length > 0;
  caseCarousel.hidden = !hasScreenshots;
  if (hasScreenshots && caseCarousel.dataset.project !== project.slug) {
    caseCarousel.dataset.project = project.slug;
    caseCarousel.innerHTML = project.images.map((image,index) => `<img class="${index === 0 ? 'is-active' : ''}" src="${assetUrl(image)}" alt="">`).join('');
  }
  projectVisual.classList.toggle('has-project-image', Boolean(project.image) || hasScreenshots);
  projectVisual.style.backgroundImage = project.image ? `url("${assetUrl(project.image)}")` : '';
  if (hasScreenshots) prepareScreenshotCarousel(caseCarousel);
  const link = projectModal.querySelector('.case-live-link');
  link.href = project.video ? assetUrl(project.video) : project.presentation ? assetUrl(project.presentation) : project.link;
  link.dataset.video = project.video ? assetUrl(project.video) : '';
  link.innerHTML = `${project.video ? 'View video' : project.presentation ? 'Open interactive PPTX' : project.slug === 'language' || project.slug === 'apcs' ? 'Watch project walkthrough' : 'View live project'} <span>↗</span>`;
  const prototypeLink = projectModal.querySelector('.case-prototype-link');
  prototypeLink.hidden = !project.prototype;
  if (project.prototype) prototypeLink.href = project.prototype;
  const manualLink = projectModal.querySelector('.case-manual-link');
  manualLink.hidden = !project.manual;
  if (project.manual) manualLink.href = assetUrl(project.manual);
  projectModal.hidden = false;
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => projectModal.classList.add('is-open'));
  projectClose.focus();
}
function closeProject() {
  projectVideo.pause();
  projectVideo.removeAttribute('src');
  projectVideo.load();
  projectVideoViewer.hidden = true;
  projectModal.classList.remove('is-video-open');
  projectModal.classList.remove('is-open');
  document.body.classList.remove('modal-open');
  setTimeout(() => { projectModal.hidden = true; projectTrigger?.focus(); }, 450);
}
projectModal.querySelector('.case-live-link').addEventListener('click', event => {
  const videoSource = event.currentTarget.dataset.video;
  if (!videoSource) return;
  event.preventDefault();
  projectVideo.src = videoSource;
  projectVideoViewer.hidden = false;
  projectModal.classList.add('is-video-open');
  projectVideoViewer.scrollIntoView({ behavior:'smooth', block:'start' });
  projectVideo.play().catch(() => {});
  projectVideoClose.focus();
});
projectVideoClose.addEventListener('click', () => {
  projectVideo.pause();
  projectVideoViewer.hidden = true;
  projectModal.classList.remove('is-video-open');
  projectModal.querySelector('.case-live-link').focus();
});
workCards.forEach((card,index) => {
  card.querySelectorAll('.project-preview,.case-study-link').forEach(button => button.addEventListener('click', () => openProject(index, button)));
});
projectClose.addEventListener('click', closeProject);

const flowers = [...document.querySelectorAll('.memory-flower')];
const progressLabel = document.querySelector('.discovery-progress span');
const modal = document.querySelector('.memory-modal');
const garden = document.querySelector('.memory-garden');
const treeInstruction = document.querySelector('.tree-instruction');
const guideButterfly = document.querySelector('.tree-guide-butterfly');
const progress = document.querySelector('.discovery-progress');
const memoryState = {
  viewMode: 'tree',
  currentMemory: null,
  activeFlowerIndex: 0,
  discoveredMemories: new Set()
};
let modalTrigger = null;
let treeReady = false;

const memoryPhotoMarquee = modal.querySelector('.memory-photo-marquee');
let galleryDrag = null;
memoryPhotoMarquee.addEventListener('pointerdown', event => {
  if (memoryPhotoMarquee.classList.contains('is-single-photo')) return;
  galleryDrag = { pointerId:event.pointerId, startX:event.clientX, startScroll:memoryPhotoMarquee.scrollLeft };
  memoryPhotoMarquee.classList.add('is-dragging');
  memoryPhotoMarquee.setPointerCapture(event.pointerId);
});
memoryPhotoMarquee.addEventListener('pointermove', event => {
  if (!galleryDrag || galleryDrag.pointerId !== event.pointerId) return;
  memoryPhotoMarquee.scrollLeft = galleryDrag.startScroll - (event.clientX - galleryDrag.startX);
});
const finishGalleryDrag = event => {
  if (!galleryDrag || galleryDrag.pointerId !== event.pointerId) return;
  galleryDrag = null;
  memoryPhotoMarquee.classList.remove('is-dragging');
};
memoryPhotoMarquee.addEventListener('pointerup', finishGalleryDrag);
memoryPhotoMarquee.addEventListener('pointercancel', finishGalleryDrag);

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
  const galleryItems = Array.isArray(memory.gallery) ? memory.gallery.filter(item => item.image) : [];
  const hasGallery = galleryItems.length > 0;
  photoMarquee.hidden = !hasGallery;
  photoMarquee.classList.remove('is-single-photo');
  detailBlossom.hidden = hasGallery;
  modal.querySelector('.memory-detail').classList.toggle('has-photo-gallery', hasGallery);
  if (hasGallery) {
    const desktopSecondsPerPhoto = 24 / 7;
    const mobileSecondsPerPhoto = 20 / 7;
    photoMarquee.style.setProperty('--memory-scroll-duration', `${galleryItems.length * desktopSecondsPerPhoto}s`);
    photoMarquee.style.setProperty('--memory-scroll-duration-mobile', `${galleryItems.length * mobileSecondsPerPhoto}s`);
    const slides = [...galleryItems, ...galleryItems];
    photoMarquee.querySelector('.memory-photo-track').innerHTML = slides.map((item, galleryIndex) => `
      <figure class="memory-photo-card" ${galleryIndex >= galleryItems.length ? 'aria-hidden="true"' : ''}>
        <img src="${item.image}" alt="${item.label} — ${item.caption}">
        <figcaption><strong>${item.label}</strong><span>${item.caption}</span></figcaption>
      </figure>`).join('');
    photoMarquee.scrollLeft = 0;
  }
  modal.hidden = false;
  document.body.classList.add('modal-open');
  garden.classList.add('is-softened');
  requestAnimationFrame(() => modal.classList.add('is-open'));
  modal.querySelector('#modal-title').focus();
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
modal.addEventListener('click', closeModal);
window.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.hidden) closeModal();
  if (event.key === 'Escape' && !projectModal.hidden) closeProject();
});

if (matchMedia('(prefers-reduced-motion:reduce)').matches) {
  beginCue.classList.add('is-visible');
}
renderMemoryState();
