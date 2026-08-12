(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const S=[{id:"beginning",chapter:"01",title:"Where It All Began",detail:"Curiosity was where it all started",description:"I started my journey without knowing exactly where it would lead. Through university projects, new experiences, and plenty of learning along the way, I gradually discovered my interest in creating digital experiences that bring creativity and technology together. Looking back at where I started reminds me how much I’ve grown — and how much more there is to explore.",image:"",art:"beginning",gallery:[{label:"Then",caption:"Where it started",image:"./assets/flower1-then.jpg"},{label:"Now",caption:"Still learning, still growing.",image:"./assets/flower1-now.jpg"}],tree:{x:50,y:29},position:{x:50,y:12}},{id:"proud-moment",chapter:"02",title:"A Proud Moment",detail:"Performance · Dean’s List · A full-circle journey",description:"Since Semester 1, I have taken part as both a dancer and singer in MAJIS and ISSNITE. MAJIS is a celebratory gathering that recognises Dean’s List students, while ISSNITE is our faculty’s farewell celebration for final-semester students. I began by contributing as a performer, then attended my final MAJIS in Semester 5 to celebrate my Semester 4 Dean’s List achievement. Later, I returned to ISSNITE in a senior role—a full-circle moment that showed how much I had grown in confidence, experience and responsibility.",image:"",art:"internship",gallery:[{label:"The Beginning",caption:"Taking part as a dancer and singer",image:"./assets/flower2-performer.jpg"},{label:"A Milestone",caption:"My final MAJIS",image:"./assets/flower2-deans-list.jpg"},{label:"Full Circle",caption:"Returning to ISSNITE in a senior role",image:"./assets/flower2-senior.jpg"}],tree:{x:65,y:43},position:{x:88,y:48}},{id:"beyond-classroom",chapter:"03",title:"Beyond the Classroom",detail:"Some of the best lessons happened outside of it.",description:"Taking part in activities beyond academics gave me opportunities to connect with different people, work as part of a team, and step outside my comfort zone. Each experience taught me something new and became a meaningful part of my growth throughout my student journey.",image:"",art:"hitern",gallery:[{label:"Teamwork",caption:"Learning and contributing together",image:"./assets/flower3-classroom-2.jpg"},{label:"Communication",caption:"Connecting through shared activities",image:"./assets/flower3-classroom-3.jpg"},{label:"New Experiences",caption:"Stepping outside my comfort zone",image:"./assets/flower3-classroom-4.jpg"},{label:"Growth",caption:"Building confidence with others",image:"./assets/flower3-classroom-5.jpg"},{label:"Teamwork",caption:"Growing through every experience",image:"./assets/flower3-classroom-7.jpg"},{label:"New Experiences",caption:"Making memories beyond the classroom",image:"./assets/flower3-classroom-8.jpg"}],tree:{x:51,y:58},position:{x:50,y:86}},{id:"what-drives-me",chapter:"04",title:"What Drives Me",detail:"Still learning. Still creating. Still growing.",description:"I’m drawn to the process of turning an idea into something people can actually see, use and enjoy. I love learning through experimentation, improving through feedback, and watching an idea gradually become a real experience.",image:"",art:"achievement",gallery:[{label:"What Drives Me",caption:"Turning ideas into experiences",image:"./assets/flower4.png"},{label:"Design in Progress",caption:"Bringing an idea to life in Figma",image:"./assets/flower4-design-process.jpeg"}],tree:{x:35,y:43},position:{x:12,y:50}}],ue="/",m=e=>`${ue}assets/${e}`;let he=0;const x=(e="")=>{const t=`sakura-${he++}`;return`
    <svg class="${e}" viewBox="-32 -32 64 64" aria-hidden="true">
      <defs>
        <radialGradient id="${t}-petal" cx="50%" cy="65%" r="72%">
          <stop offset="0" stop-color="#eaa7bd" stop-opacity=".76"/>
          <stop offset=".48" stop-color="#f5cddd" stop-opacity=".86"/>
          <stop offset="1" stop-color="#fff9fb" stop-opacity=".96"/>
        </radialGradient>
        <radialGradient id="${t}-heart"><stop offset="0" stop-color="#d984a2"/><stop offset="1" stop-color="#efb6c9"/></radialGradient>
      </defs>
      ${[0,72,144,216,288].map(s=>`<path class="sakura-petal" style="fill:url(#${t}-petal)" d="M0 3C-7 3-14-4-14-13C-14-21-8-28-3-30L0-26L3-30C8-28 14-21 14-13C14-4 7 3 0 3Z" transform="rotate(${s})"/>`).join("")}
      <circle class="sakura-heart" style="fill:url(#${t}-heart)" r="5.4"/>
      <g class="sakura-stamens">
        ${[-68,-45,-22,0,22,45,68].map(s=>`<g transform="rotate(${s})"><path d="M0-2V-12"/><circle cy="-13" r="1"/></g>`).join("")}
      </g>
    </svg>`},ye=()=>`
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
    ${[0,72,144,216,288].map(e=>`
      <path class="cursor-sakura-petal" transform="rotate(${e})"
        d="M0 3C-5 2-10-3-11-11C-12-19-7-27-3-30L0-26L3-30C7-27 12-19 11-11C10-3 5 2 0 3Z"/>
    `).join("")}
    <circle class="cursor-flower-heart" r="5.5"/>
    <g class="cursor-stamens">
      ${[-72,-48,-24,0,24,48,72].map(e=>`
        <g transform="rotate(${e})">
          <path d="M0 0C0-4 0-8 0-12"/>
          <circle cy="-13" r="1.1"/>
        </g>
      `).join("")}
    </g>
  </svg>`,ee=[{number:"01",slug:"hitern",category:"web",title:"Hitern",type:"Capstone · Full-stack web application",role:"FULL-STACK DEVELOPMENT",summary:"A role-based internship document management platform that simplifies submissions, approvals and progress tracking for interns, supervisors and HR.",challenge:"Internship documents and approvals can become fragmented across messages, files and different stakeholders.",approach:"I mapped the multi-role workflow, designed responsive dashboards and built secure document, notification and approval experiences.",outcome:"A complete working capstone product with role-based access, RESTful APIs and dashboard analytics.",tools:["React","Tailwind CSS","Node.js","Express","MySQL"],images:["hitern-login.png","hitern-intern-dashboard.png","hitern-supervisor-dashboard.png","hitern-hr-dashboard.png"],link:"https://qninie.github.io/hitern_system/",manual:"HITERN_User_Manual.pdf"},{number:"02",slug:"language",category:"ux",title:"EduVerse",type:"UX case study · Figma mobile prototype",role:"Team Leader & UI/UX Designer",summary:"A Figma prototype that makes learning programming feel structured, motivating and social.",challenge:"Beginners often find coding overwhelming and learning resources scattered.",approach:"I led the UX process from research and wireframes to an interactive Figma prototype.",outcome:"User testing improved readability, navigation, attendance tracking and community bookmarks.",highlights:[["5","Languages"],["3","Learning levels"],["Figma","Interactive prototype"]],tools:["Figma","Wireframing","Prototyping","User Testing"],images:["eduverse-welcome.png","eduverse-login.png","eduverse-home.png","eduverse-profile.png","eduverse-notifications.png","eduverse-settings.png"],link:"https://youtu.be/lMaTKmI0Mkg?si=cWsmk6KDcG7va0zB",prototype:"https://www.figma.com/proto/l8da9LnvNeLf5GwDJYAUtX/IMS564-USER-EXPERIENCE?node-id=0-1&t=y0G3xgvQTiP1PP54-1"},{number:"03",slug:"hostel",category:"web",title:"Hostel Management",type:"Responsive web development",role:"Frontend Developer",summary:"A responsive system for managing student information, room availability and hostel settings in one clear interface.",challenge:"Hostel information needed to remain easy to scan and manage across different screens and lighting preferences.",approach:"I organised complex records into a responsive dashboard and implemented both light and dark interface themes.",outcome:"A deployed frontend experience that demonstrates responsive layouts, structured data presentation and theme switching.",tools:["HTML","CSS","JavaScript","Bootstrap"],images:["hostel-login.png","hostel-home.png","hostel-dashboard.png","hostel-list.png","hostel-students.png","hostel-room-status.png","hostel-register-student.png","hostel-settings.png"],link:"https://qninie.github.io/Hostel-system-management/"},{number:"04",slug:"apcs",category:"web",title:"Academic Peer Counselling System",type:"Database-driven web application",role:"System Developer",summary:"A structured UiTM mentoring platform that connects Dean’s List mentors with students who need academic support.",challenge:"Peer mentoring records were scattered, making it difficult to match students, measure academic improvement and recognize mentor contributions.",approach:"I developed the web system and database workflow for student registration, automated role validation, mentor–mentee matching, session management and GPA tracking.",outcome:"A tested and deployed prototype with working CRUD operations, centralized mentoring records, progress tracking and certificate management for mentors.",highlights:[["4","Core data entities"],["GPA","Progress tracking"],["CRUD","Session management"]],tools:["PHP","MySQL","HTML","Bootstrap","phpMyAdmin","FileZilla"],images:["apcs-login.png","apcs-dashboard.png","apcs-admin-management.png","apcs-session-management.png","apcs-session-list.png","apcs-certificate-management.png","apcs-certificate-list.png"],link:"https://youtu.be/7kEiJudpVQU?si=Jht50xd2BPfqGDux"}],fe=[{title:"Design",skills:[["UI/UX Design",84],["Wireframing",88],["Prototyping",82],["Responsive Design",78]]},{title:"Frontend",skills:[["HTML & CSS",88],["JavaScript",76],["React",72],["Tailwind CSS",78]]},{title:"Development",skills:[["Node.js & Express",68],["MySQL",72],["REST APIs",66],["Git & GitHub",76]]}],P=["Figma","React","JavaScript","HTML","CSS","Tailwind","Node.js","Express","MySQL","Git","GitHub","VS Code","Postman","Tableau","Canva","Bootstrap"],ve={Figma:"figma.svg",React:"react.svg",JavaScript:"javascript.svg",HTML:"html5.svg",CSS:"css.svg",Tailwind:"tailwindcss.svg","Node.js":"nodedotjs.svg",Express:"express.svg",MySQL:"mysql.svg",Git:"git.svg",GitHub:"github.svg","VS Code":"visualstudiocode.svg",Postman:"postman.svg",Tableau:"tableau.svg",Canva:"canva.svg",Bootstrap:"bootstrap.svg"};document.querySelector("#app").innerHTML=`
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

  <div class="sakura-cursor" aria-hidden="true">${ye()}</div>
  <div class="scroll-butterfly-guide" aria-live="polite" aria-hidden="true">
    <span class="guide-tip">Click the box or scroll to begin.</span>
    <img src="${m("guide-butterfly-open-cropped.png")}" alt="" />
  </div>

  <main class="home-page">
    <section id="greeting" class="greeting-scene" aria-label="Welcome">
      <div class="intro-petals" aria-hidden="true">${Array.from({length:6},(e,t)=>`<i style="--i:${t}"></i>`).join("")}</div>
      <p class="greeting-kicker">Welcome</p>
      <div class="greeting-list" aria-live="polite">
        ${["Hello","你好","Apa Khabar","こんにちは","안녕하세요","Bonjour"].map((e,t)=>`<p class="greeting-word ${t===0?"is-visible":""}">${e}</p>`).join("")}
      </div>
      <div class="begin-cue is-visible" aria-hidden="true"><span>Scroll to begin</span><i></i></div>
    </section>

    <section id="hero" class="hero-scene">
      <div class="hero-light" aria-hidden="true"></div>
      <div class="hero-blossom-shadow" aria-hidden="true"></div>
      <div class="hero-nature" aria-hidden="true">
        <img class="hero-branch" src="${m("sakura-branch.png")}" alt="" />
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
            <img class="butterfly-resting" src="${m("guide-butterfly-side-cropped.png")}" alt="" />
            <img class="butterfly-open" src="${m("guide-butterfly-open-cropped.png")}" alt="" />
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
            <img class="tree-art" src="${m("memory-tree-filled.png")}" alt="A full watercolor cherry blossom tree" />
            ${S.map((e,t)=>`
              <button class="memory-flower" data-index="${t}" style="--tree-x:${e.tree.x}%;--tree-y:${e.tree.y}%" aria-label="Discover ${e.title} memory">
                <span class="bud-layer">${x("memory-closed-flower")}</span>
                <span class="bloom-layer">${x("memory-flower-svg")}</span>
              </button>`).join("")}
            <img class="tree-guide-butterfly" src="${m("guide-butterfly-open-cropped.png")}" alt="" aria-hidden="true" />
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
          <img class="timeline-butterfly" src="${m("guide-butterfly-open-cropped.png")}" alt="" />
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
        <p>A selection of projects that show how I move between user experience thinking, interface design and frontend development.</p>
      </header>

      <div class="work-filters" role="group" aria-label="Filter selected work by category">
        <button class="work-filter is-active" type="button" data-filter="all" aria-pressed="true">All</button>
        <button class="work-filter" type="button" data-filter="web" aria-pressed="false">Web Systems</button>
        <button class="work-filter" type="button" data-filter="ux" aria-pressed="false">UI/UX</button>
        <button class="work-filter" type="button" data-filter="creative" aria-pressed="false">Creative Media</button>
        <button class="work-filter" type="button" data-filter="learning" aria-pressed="false">Interactive Learning</button>
      </div>

      <div class="work-grid">
        ${ee.map((e,t)=>`
          <article class="work-card work-card--${e.slug} ${t===0?"work-card--featured":""}" data-project="${t}" data-category="${e.category}">
            <button class="project-preview" type="button" aria-label="View ${e.title} case study">
              <span class="project-number">${e.number}</span>
              ${e.images?`<span class="screenshot-carousel project-screenshot-carousel" aria-hidden="true">
                ${e.images.map((s,a)=>`<img class="${a===0?"is-active":""}" src="${m(s)}" alt="">`).join("")}
              </span>`:""}
              <span class="project-mockup" aria-hidden="true">
                <i class="mockup-browser"><b></b><b></b><b></b><span></span><em></em><strong></strong></i>
                ${e.slug==="language"?'<i class="mockup-phone"><b></b><span></span><em></em></i>':""}
              </span>
              <span class="preview-cue">Open case study <i>↗</i></span>
            </button>
            <div class="project-info">
              <div class="project-title-row"><h3>${e.title}</h3><span>${e.type}</span></div>
              <p>${e.summary}</p>
              <ul>${e.tools.slice(0,4).map(s=>`<li>${s}</li>`).join("")}</ul>
              <button class="case-study-link" type="button">View case study <span>↗</span></button>
            </div>
          </article>`).join("")}
      </div>
      <p class="work-empty" hidden><strong>More work is growing here.</strong><span>New projects will be added to this category soon.</span></p>
    </section>

    <section id="skills" class="skills-section" aria-labelledby="skills-title">
      <div class="skills-petals" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <header class="skills-heading">
        <p class="scene-label">Chapter four · What I bring</p>
        <h2 id="skills-title">Designing with empathy.<br><em>Building with intention.</em></h2>
        <p>A growing toolkit across interface design and frontend development. The progress values below are temporary placeholders for now.</p>
      </header>

      <div class="skills-frame">
        <div class="vine vine--top" aria-hidden="true">${Array.from({length:9},(e,t)=>`<i style="--leaf:${t}"></i>`).join("")}</div>
        <div class="vine vine--right" aria-hidden="true">${Array.from({length:7},(e,t)=>`<i style="--leaf:${t}"></i>`).join("")}</div>
        <div class="vine vine--bottom" aria-hidden="true">${Array.from({length:9},(e,t)=>`<i style="--leaf:${t}"></i>`).join("")}</div>
        <div class="vine vine--left" aria-hidden="true">${Array.from({length:7},(e,t)=>`<i style="--leaf:${t}"></i>`).join("")}</div>
        <span class="frame-flower frame-flower--one" aria-hidden="true">${x("frame-flower-svg")}</span>
        <span class="frame-flower frame-flower--two" aria-hidden="true">${x("frame-flower-svg")}</span>

        <div class="skill-groups">
          ${fe.map(e=>`
            <article class="skill-group">
              <h3>${e.title}</h3>
              <div class="skill-list">
                ${e.skills.map(([t,s])=>`
                  <div class="skill-row" style="--skill-level:${s}%">
                    <div class="skill-label"><span>${t}</span><b>${s}%</b></div>
                    <div class="skill-track" role="progressbar" aria-label="${t} placeholder proficiency" aria-valuenow="${s}" aria-valuemin="0" aria-valuemax="100"><i></i></div>
                  </div>`).join("")}
              </div>
            </article>`).join("")}
        </div>
      </div>

      <div class="tools-showcase" aria-label="Tools and applications I use">
        <div class="tools-intro"><p class="scene-label">Tools in my workflow</p><span>Hover to pause</span></div>
        <div class="tools-marquee">
          <div class="tools-track">
            ${[...P,...P].map((e,t)=>`
              <div class="tool-item" ${t>=P.length?'aria-hidden="true"':""}>
                <span class="tool-mark"><img src="${m(`tool-icons/${ve[e]}`)}" alt="" loading="lazy"></span>
                <strong>${e}</strong>
              </div>`).join("")}
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
          <span class="contact-blossom" aria-hidden="true">${x("contact-flower-svg")}</span>
          <p class="scene-label">Let’s create something meaningful</p>
          <h3>Send me a message</h3>
          <form class="contact-form">
            <label><span>Name</span><input type="text" name="name" autocomplete="name" placeholder="Your name" required></label>
            <label><span>Email</span><input type="email" name="email" autocomplete="email" placeholder="your@email.com" required></label>
            <label><span>Message</span><textarea name="message" rows="5" placeholder="Tell me about your opportunity, project, or just say hello…" required></textarea></label>
            <button type="submit">Open email draft</button>
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
    <div class="memory-detail">
      <div class="detail-blossom" aria-hidden="true">
        ${x("detail-flower-svg")}
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
          <a class="case-live-link" target="_blank" rel="noreferrer">View live project</a>
          <a class="case-prototype-link" target="_blank" rel="noreferrer" hidden>View Figma prototype</a>
          <a class="case-manual-link" download="HITERN_User_Manual.pdf" hidden>Download user manual</a>
        </div>
      </div>
    </div>
  </div>
`;const D=[...document.querySelectorAll(".greeting-word")],be=document.querySelector(".begin-cue");let q=0;window.setInterval(()=>{D[q].classList.remove("is-visible"),q=(q+1)%D.length,D[q].classList.add("is-visible")},1450);const V=document.querySelector(".sakura-cursor"),we=matchMedia("(hover:hover) and (pointer:fine) and (min-width:1025px) and (prefers-reduced-motion:no-preference)").matches;let F=0,B={x:-80,y:-80},J=0;const G=new Set;we&&window.addEventListener("pointermove",e=>{if(B={x:e.clientX,y:e.clientY},F||(F=requestAnimationFrame(()=>{V.style.transform=`translate3d(${B.x}px,${B.y}px,0)`,V.classList.add("is-visible"),F=0})),performance.now()-J<110||G.size>=12)return;J=performance.now();const t=document.createElement("i");t.className="trail-petal",t.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;--drift:${(Math.random()-.5)*60}px;--spin:${(Math.random()-.5)*240}deg`,G.add(t),document.body.append(t),t.addEventListener("animationend",()=>{G.delete(t),t.remove()},{once:!0})},{passive:!0});const b=document.querySelector(".hero-scene");document.querySelector(".primary-button");const g=document.querySelector(".scroll-butterfly-guide"),Se=g.querySelector(".guide-tip");new IntersectionObserver(([e])=>{e.isIntersecting&&!b.classList.contains("has-grown")&&b.classList.add("has-grown")},{threshold:.28}).observe(b);const L=document.querySelector(".hero-nature"),H=new Set;let Q=0;matchMedia("(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)").matches&&(b.addEventListener("pointermove",e=>{const t=b.getBoundingClientRect(),s={x:t.left+t.width*.77,y:t.top+t.height*.34},a=e.clientX-s.x,o=e.clientY-s.y,r=Math.hypot(a,o);if(r>180){L.style.setProperty("--react-x","0deg"),L.style.setProperty("--react-y","0px");return}const n=1-r/180;if(L.style.setProperty("--react-x",`${Math.max(-3,Math.min(3,-a/55*n))}deg`),L.style.setProperty("--react-y",`${-o/20*n}px`),performance.now()-Q>850&&H.size<3&&Math.random()>.55){Q=performance.now();const i=document.createElement("i");i.className="released-petal",i.style.cssText=`left:${68+Math.random()*22}%;top:${24+Math.random()*28}%;--petal-drift:${(Math.random()-.5)*140}px;--petal-spin:${160+Math.random()*260}deg`,H.add(i),b.append(i),i.addEventListener("animationend",()=>{H.delete(i),i.remove()},{once:!0})}},{passive:!0}),b.addEventListener("pointerleave",()=>{L.style.setProperty("--react-x","0deg"),L.style.setProperty("--react-y","0px")}));const j=document.querySelector(".door-scene"),R=document.querySelector(".journey-section"),ke=document.querySelector(".timeline-rail"),xe=document.querySelector('.site-nav a[data-section="door-scene"]'),te=.68,W=matchMedia("(prefers-reduced-motion:reduce)").matches;let C=!1,_=0,Y=scrollY;function se(){const e=Math.max(0,j.offsetHeight-innerHeight);return j.offsetTop+e*te}xe.addEventListener("click",e=>{e.preventDefault();const t=se();C=!0,history.replaceState(null,"","#door-scene"),window.scrollTo({top:t,behavior:W?"auto":"smooth"})});let U=0,z=!1,ae=!1;function Le(){if(z||W)return;const e=[...document.querySelectorAll(".memory-flower")].map(n=>{const i=n.getBoundingClientRect();return{x:i.left+i.width/2,y:i.top+i.height/2}});if(e.length!==S.length)return;z=!0;const t={x:innerWidth*.78,y:innerHeight*.62},s=[{x:-60,y:Math.max(innerHeight*.55,e[0].y+70)},...e,t],a=[0,.12,.32,.5,.68,.86],o=s.map((n,i)=>({offset:a[i],transform:`translate3d(${n.x}px,${n.y}px,0) translate(-50%,-50%) scale(${i?1:.72})`,opacity:i?1:0,easing:"cubic-bezier(.35,.05,.25,1)"})),r=g.animate(o,{duration:7200,fill:"forwards"});r.finished.then(()=>{ae=!0,g.style.setProperty("--guide-screen-x","78vw"),g.style.setProperty("--guide-screen-y","62vh"),g.classList.add("has-tip"),r.cancel()}).catch(()=>{})}function oe(){const e=j.getBoundingClientRect(),t=j.offsetHeight-innerHeight,s=Math.max(1,t*te),a=Math.max(0,Math.min(1,-e.top/s)),o=scrollY>Y;!W&&!C&&o&&_<.94&&a>=.94&&(C=!0,window.scrollTo({top:se(),behavior:"smooth"})),a<.65&&(C=!1),_=a,Y=scrollY,j.style.setProperty("--door-progress",a.toFixed(3));const r=R.getBoundingClientRect(),n=ke.getBoundingClientRect(),i=Math.max(105,Math.min(innerHeight*.56,n.bottom-18)),u=Math.max(0,Math.min(1,(i-n.top)/Math.max(1,n.height)));R.style.setProperty("--journey-progress",u.toFixed(3));const p=a>.94&&r.top>innerHeight*.55,f=n.top<=innerHeight*.56&&n.bottom>=105,v=p||f;let k,I;p?(k=innerWidth*.78,I=innerHeight*.54):f?(k=n.left+n.width/2,I=i):(k=innerWidth*.5,I=innerHeight*.6),g.style.setProperty("--guide-screen-x",`${k}px`),g.style.setProperty("--guide-screen-y",`${I}px`),g.classList.toggle("is-following",v),g.classList.toggle("has-tip",p&&ae),g.classList.toggle("is-tree-orbiting",p),g.classList.toggle("is-on-timeline",f),g.setAttribute("aria-hidden",String(!v)),Se.textContent="Click a flower to discover more about Queenie.",p&&Le(),b.classList.toggle("guide-is-travelling",v),document.querySelector(".home-nav").classList.toggle("has-background",scrollY>8),U=0}window.addEventListener("scroll",()=>{U||(U=requestAnimationFrame(oe))},{passive:!0});oe();const M=[...document.querySelectorAll(".site-nav a")];M.map(e=>document.getElementById(e.dataset.section)).filter(Boolean);new IntersectionObserver(e=>{const t=e.filter(s=>s.isIntersecting).sort((s,a)=>a.intersectionRatio-s.intersectionRatio)[0];t&&M.forEach(s=>s.classList.toggle("is-active",s.dataset.section===t.target.id))},{rootMargin:"-34% 0px -52%",threshold:[0,.2,.5]}).observe(j);new IntersectionObserver(e=>{e[0].isIntersecting&&M.forEach(t=>t.classList.toggle("is-active",t.dataset.section==="journey"))},{rootMargin:"-32% 0px -55%",threshold:0}).observe(R);const $e=document.querySelector(".work-section");new IntersectionObserver(e=>{e[0].isIntersecting&&M.forEach(t=>t.classList.toggle("is-active",t.dataset.section==="work"))},{rootMargin:"-32% 0px -55%",threshold:0}).observe($e);const N=document.querySelector(".skills-section");new IntersectionObserver(e=>{e[0].isIntersecting&&M.forEach(t=>t.classList.toggle("is-active",t.dataset.section==="skills"))},{rootMargin:"-32% 0px -55%",threshold:0}).observe(N);const je=document.querySelector(".contact-section");new IntersectionObserver(e=>{e[0].isIntersecting&&M.forEach(t=>t.classList.toggle("is-active",t.dataset.section==="contact"))},{rootMargin:"-32% 0px -55%",threshold:0}).observe(je);const Me=document.querySelectorAll(".journey-milestone"),Ie=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("is-visible")})},{threshold:.2});Me.forEach(e=>Ie.observe(e));const T=document.querySelectorAll(".work-card"),qe=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("is-visible")})},{threshold:.15});T.forEach(e=>qe.observe(e));const re=[...document.querySelectorAll(".work-filter")],Ee=document.querySelector(".work-empty");function Ce(e){const t=[...T].filter(s=>e==="all"||s.dataset.category===e);T.forEach(s=>{const a=t.includes(s);s.hidden=!a,s.classList.remove("is-filter-featured","is-filter-even")}),e!=="all"&&(t[0]?.classList.add("is-filter-featured"),t.slice(1).forEach((s,a)=>s.classList.toggle("is-filter-even",a%2===0))),Ee.hidden=t.length>0,re.forEach(s=>{const a=s.dataset.filter===e;s.classList.toggle("is-active",a),s.setAttribute("aria-pressed",String(a))})}re.forEach(e=>e.addEventListener("click",()=>Ce(e.dataset.filter)));const K=new WeakSet;function ie(e){if(!e||K.has(e))return;const t=[...e.querySelectorAll("img")];if(t.length<2)return;const s=e.closest(".project-preview, .case-study-visual")??e;let a=0,o=null;const r=u=>{const h=t[a];h.classList.add("is-leaving"),h.classList.remove("is-active"),window.setTimeout(()=>h.classList.remove("is-leaving"),600),a=u%t.length,t[a].classList.add("is-active")},n=()=>{o||(e.classList.add("is-playing"),o=window.setInterval(()=>r(a+1),1350))},i=()=>{window.clearInterval(o),o=null,e.classList.remove("is-playing"),r(0)};s.addEventListener("pointerenter",n),s.addEventListener("pointerleave",i),K.add(e)}document.querySelectorAll(".project-screenshot-carousel").forEach(ie);new IntersectionObserver(([e],t)=>{e.isIntersecting&&(N.classList.add("is-visible"),t.disconnect())},{threshold:.18}).observe(N);const E=document.querySelector(".letter-button"),Te=document.querySelector(".letter-note");E.addEventListener("click",()=>{const e=E.getAttribute("aria-expanded")==="true";E.setAttribute("aria-expanded",String(!e)),Te.hidden=e,E.querySelector("i").textContent=e?"＋":"−"});document.querySelector(".contact-form").addEventListener("submit",e=>{e.preventDefault();const t=new FormData(e.currentTarget),s=t.get("name").trim(),a=t.get("email").trim(),o=t.get("message").trim(),r=encodeURIComponent(`Portfolio enquiry from ${s}`),n=encodeURIComponent(`${o}

From: ${s}
Email: ${a}`);window.location.href=`mailto:qthamshinee@gmail.com?subject=${r}&body=${n}`});const l=document.querySelector(".project-modal"),ne=l.querySelector(".project-modal-close");let le=null;function Ae(e,t){const s=ee[e];le=t,l.className=`project-modal project-modal--${s.slug}`,l.querySelector(".case-number").textContent=s.number,l.querySelector("#project-modal-title").textContent=s.title,l.querySelector(".case-role").textContent=s.role,l.querySelector(".case-summary").textContent=s.summary,l.querySelector(".case-challenge").textContent=s.challenge,l.querySelector(".case-approach").textContent=s.approach,l.querySelector(".case-outcome").textContent=s.outcome;const a=l.querySelector(".case-highlights");a.hidden=!s.highlights,a.innerHTML=s.highlights?.map(([p,f])=>`<span><strong>${p}</strong>${f}</span>`).join("")??"",l.querySelector(".case-tools").innerHTML=s.tools.map(p=>`<li>${p}</li>`).join("");const o=l.querySelector(".case-study-visual"),r=o.querySelector(".case-screenshot-carousel"),n=Array.isArray(s.images)&&s.images.length>0;r.hidden=!n,n&&r.dataset.project!==s.slug&&(r.dataset.project=s.slug,r.innerHTML=s.images.map((p,f)=>`<img class="${f===0?"is-active":""}" src="${m(p)}" alt="">`).join("")),o.classList.toggle("has-project-image",!!s.image||n),o.style.backgroundImage=s.image?`url("${m(s.image)}")`:"",n&&ie(r);const i=l.querySelector(".case-live-link");i.href=s.link,i.textContent=s.slug==="language"||s.slug==="apcs"?"Watch project walkthrough":"View live project";const u=l.querySelector(".case-prototype-link");u.hidden=!s.prototype,s.prototype&&(u.href=s.prototype);const h=l.querySelector(".case-manual-link");h.hidden=!s.manual,s.manual&&(h.href=m(s.manual)),l.hidden=!1,document.body.classList.add("modal-open"),requestAnimationFrame(()=>l.classList.add("is-open")),ne.focus()}function ce(){l.classList.remove("is-open"),document.body.classList.remove("modal-open"),setTimeout(()=>{l.hidden=!0,le?.focus()},450)}T.forEach((e,t)=>{e.querySelectorAll(".project-preview,.case-study-link").forEach(s=>s.addEventListener("click",()=>Ae(t,s)))});ne.addEventListener("click",ce);const X=[...document.querySelectorAll(".memory-flower")],Pe=document.querySelector(".discovery-progress span"),c=document.querySelector(".memory-modal"),O=document.querySelector(".memory-garden"),De=document.querySelector(".tree-instruction"),$=document.querySelector(".tree-guide-butterfly"),Fe=document.querySelector(".discovery-progress"),d={viewMode:"tree",currentMemory:null,activeFlowerIndex:0,discoveredMemories:new Set};let de=null,pe=!1;const y=c.querySelector(".memory-photo-marquee");let w=null;y.addEventListener("pointerdown",e=>{y.classList.contains("is-single-photo")||(w={pointerId:e.pointerId,startX:e.clientX,startScroll:y.scrollLeft},y.classList.add("is-dragging"),y.setPointerCapture(e.pointerId))});y.addEventListener("pointermove",e=>{!w||w.pointerId!==e.pointerId||(y.scrollLeft=w.startScroll-(e.clientX-w.startX))});const me=e=>{!w||w.pointerId!==e.pointerId||(w=null,y.classList.remove("is-dragging"))};y.addEventListener("pointerup",me);y.addEventListener("pointercancel",me);function A(){const e=d.discoveredMemories.size===S.length;if(X.forEach((t,s)=>{const a=d.discoveredMemories.has(s),o=!e&&s===d.activeFlowerIndex&&!a;t.className=`memory-flower ${a?"is-bloomed":o?"is-active":"is-closed"}`,t.setAttribute("aria-current",o?"step":"false"),t.setAttribute("aria-label",`${a?"Revisit":"Discover"} ${S[s].title} memory`)}),Pe.textContent=String(Math.min(d.discoveredMemories.size+(e?0:1),4)).padStart(2,"0"),Fe.classList.toggle("is-complete",e),De.textContent=e?"Four moments, one growing journey.":"Select the glowing flower to discover a memory.",$.classList.toggle("is-settled",e),!e&&pe){const t=S[d.activeFlowerIndex].tree;$.style.setProperty("--guide-x",`${t.x}%`),$.style.setProperty("--guide-y",`${t.y}%`),$.classList.remove("is-guiding"),requestAnimationFrame(()=>$.classList.add("is-guiding"))}}new IntersectionObserver(([e],t)=>{e.isIntersecting&&(pe=!0,document.querySelector(".door-sticky").classList.add("tree-is-revealing"),A(),t.disconnect())},{threshold:.55}).observe(document.querySelector(".door-sticky"));function Z(e,t,s=!1){const a=S[e];de=t,c.dataset.memory=a.id,d.currentMemory=e,d.viewMode="memory",s&&d.discoveredMemories.add(e),A(),c.querySelector("#modal-title").textContent=a.title,c.querySelector(".modal-copy .scene-label").textContent=`${a.chapter} · A personal chapter`,c.querySelector(".modal-description").textContent=a.description,c.querySelector(".modal-detail").textContent=a.detail;const o=c.querySelector(".modal-image");o.className=`modal-image memory-image-${a.art}`,o.style.backgroundImage=a.image?`url("${a.image}")`:"",o.setAttribute("aria-label",`${a.title} placeholder image`);const r=c.querySelector(".memory-photo-marquee"),n=c.querySelector(".detail-blossom"),i=Array.isArray(a.gallery)?a.gallery.filter(h=>h.image):[],u=i.length>0;if(r.hidden=!u,r.classList.remove("is-single-photo"),n.hidden=u,c.querySelector(".memory-detail").classList.toggle("has-photo-gallery",u),u){const h=3.4285714285714284,p=20/7;r.style.setProperty("--memory-scroll-duration",`${i.length*h}s`),r.style.setProperty("--memory-scroll-duration-mobile",`${i.length*p}s`);const f=[...i,...i];r.querySelector(".memory-photo-track").innerHTML=f.map((v,k)=>`
      <figure class="memory-photo-card" ${k>=i.length?'aria-hidden="true"':""}>
        <img src="${v.image}" alt="${v.label} — ${v.caption}">
        <figcaption><strong>${v.label}</strong><span>${v.caption}</span></figcaption>
      </figure>`).join(""),r.scrollLeft=0}c.hidden=!1,document.body.classList.add("modal-open"),O.classList.add("is-softened"),requestAnimationFrame(()=>c.classList.add("is-open")),c.querySelector("#modal-title").focus()}X.forEach((e,t)=>{e.addEventListener("click",()=>{if(d.discoveredMemories.has(t)){Z(t,e);return}t===d.activeFlowerIndex&&($.classList.remove("is-guiding"),Z(t,e,!0))})});function ge(){c.classList.remove("is-open"),O.classList.remove("is-softened"),O.classList.remove("is-transitioning"),document.body.classList.remove("modal-open"),d.viewMode="tree";const e=S.findIndex((t,s)=>!d.discoveredMemories.has(s));d.activeFlowerIndex=e===-1?0:e,A(),setTimeout(()=>{c.hidden=!0,X[d.currentMemory]?.classList.remove("is-entering"),de?.focus(),d.currentMemory=null},500)}c.addEventListener("click",ge);window.addEventListener("keydown",e=>{e.key==="Escape"&&!c.hidden&&ge(),e.key==="Escape"&&!l.hidden&&ce()});matchMedia("(prefers-reduced-motion:reduce)").matches&&be.classList.add("is-visible");A();
