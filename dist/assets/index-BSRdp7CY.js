(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const k=[{id:"beginning",chapter:"01",title:"Where It All Began",detail:"Curiosity was where it all started",description:"I started my journey without knowing exactly where it would lead. Through university projects, new experiences, and plenty of learning along the way, I gradually discovered my interest in creating digital experiences that bring creativity and technology together. Looking back at where I started reminds me how much I’ve grown — and how much more there is to explore.",image:"",art:"beginning",gallery:[{label:"Then",caption:"Where it started",image:"./assets/flower1-then.jpg"},{label:"Now",caption:"Still learning, still growing.",image:"./assets/flower1-now.jpg"}],tree:{x:50,y:29},position:{x:50,y:12}},{id:"proud-moment",chapter:"02",title:"A Proud Moment",detail:"Performance · Dean’s List · A full-circle journey",description:"Since Semester 1, I have taken part as both a dancer and singer in MAJIS and ISSNITE. MAJIS is a celebratory gathering that recognises Dean’s List students, while ISSNITE is our faculty’s farewell celebration for final-semester students. I began by contributing as a performer, then attended my final MAJIS in Semester 5 to celebrate my Semester 4 Dean’s List achievement. Later, I returned to ISSNITE in a senior role—a full-circle moment that showed how much I had grown in confidence, experience and responsibility.",image:"",art:"internship",gallery:[{label:"The Beginning",caption:"Taking part as a dancer and singer",image:"./assets/flower2-performer.jpg"},{label:"A Milestone",caption:"My final MAJIS",image:"./assets/flower2-deans-list.jpg"},{label:"Full Circle",caption:"Returning to ISSNITE in a senior role",image:"./assets/flower2-senior.jpg"}],tree:{x:65,y:43},position:{x:88,y:48}},{id:"beyond-classroom",chapter:"03",title:"Beyond the Classroom",detail:"Some of the best lessons happened outside of it.",description:"Taking part in activities beyond academics gave me opportunities to connect with different people, work as part of a team, and step outside my comfort zone. Each experience taught me something new and became a meaningful part of my growth throughout my student journey.",image:"",art:"hitern",gallery:[{label:"Teamwork",caption:"Learning and contributing together",image:"./assets/flower3-classroom-2.jpg"},{label:"Communication",caption:"Connecting through shared activities",image:"./assets/flower3-classroom-3.jpg"},{label:"New Experiences",caption:"Stepping outside my comfort zone",image:"./assets/flower3-classroom-4.jpg"},{label:"Growth",caption:"Building confidence with others",image:"./assets/flower3-classroom-5.jpg"},{label:"Teamwork",caption:"Growing through every experience",image:"./assets/flower3-classroom-7.jpg"},{label:"New Experiences",caption:"Making memories beyond the classroom",image:"./assets/flower3-classroom-8.jpg"}],tree:{x:51,y:58},position:{x:50,y:86}},{id:"what-drives-me",chapter:"04",title:"What Drives Me",detail:"Still learning. Still creating. Still growing.",description:"I’m drawn to the process of turning an idea into something people can actually see, use and enjoy. I love learning through experimentation, improving through feedback, and watching an idea gradually become a real experience.",image:"",art:"achievement",gallery:[{label:"What Drives Me",caption:"Turning ideas into experiences",image:"./assets/flower4.png"},{label:"Design in Progress",caption:"Bringing an idea to life in Figma",image:"./assets/flower4-design-process.jpeg"}],tree:{x:35,y:43},position:{x:12,y:50}}],we="/",d=e=>`${we}assets/${e}`;let Se=0;const S=(e="")=>{const t=`sakura-${Se++}`;return`
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
    </svg>`},ke=()=>`
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
  </svg>`,X=[{number:"01",slug:"hitern",category:"systems",title:"Hitern",type:"Capstone · Full-stack web application",role:"UI/UX · FULL-STACK DEVELOPMENT",summary:"A role-based internship document management platform that simplifies submissions, approvals and progress tracking for interns, supervisors and HR.",challenge:"Internship documents and approvals can become fragmented across messages, files and different stakeholders.",approach:"I mapped the multi-role workflow, designed responsive dashboards and built secure document, notification and approval experiences.",outcome:"A working role-based platform that centralizes document submission, approval tracking, notifications and internship progress monitoring.",tools:["React","Tailwind CSS","Node.js","Express","MySQL"],images:["hitern-login.png","hitern-intern-dashboard.png","hitern-supervisor-dashboard.png","hitern-hr-dashboard.png"],link:"https://qninie.github.io/hitern_system/",manual:"HITERN_User_Manual.pdf"},{number:"02",slug:"language",category:"ux",title:"EduVerse",type:"UX case study · Figma mobile prototype",role:"Team Leader & UI/UX Designer",summary:"A Figma prototype that makes learning programming feel structured, motivating and social.",challenge:"Beginners often find coding overwhelming and learning resources scattered.",approach:"I led the UX process from research and wireframes to an interactive Figma prototype.",outcome:"User testing improved readability, navigation, attendance tracking and community bookmarks.",highlights:[["5","Languages"],["3","Learning levels"],["Figma","Interactive prototype"]],tools:["Figma","Wireframing","Prototyping","User Testing"],images:["eduverse-welcome.png","eduverse-login.png","eduverse-home.png","eduverse-profile.png","eduverse-notifications.png","eduverse-settings.png"],link:"https://youtu.be/lMaTKmI0Mkg?si=cWsmk6KDcG7va0zB",prototype:"https://www.figma.com/proto/l8da9LnvNeLf5GwDJYAUtX/IMS564-USER-EXPERIENCE?node-id=0-1&t=y0G3xgvQTiP1PP54-1"},{number:"03",slug:"hostel",category:"systems",title:"Hostel Management",type:"Responsive web development",role:"Frontend Developer",summary:"A responsive system for managing student information, room availability and hostel settings in one clear interface.",challenge:"Hostel information needed to remain easy to scan and manage across different screens and lighting preferences.",approach:"I organised complex records into a responsive dashboard and implemented both light and dark interface themes.",outcome:"A deployed frontend experience that demonstrates responsive layouts, structured data presentation and theme switching.",tools:["HTML","CSS","JavaScript","Bootstrap"],images:["hostel-login.png","hostel-home.png","hostel-dashboard.png","hostel-list.png","hostel-students.png","hostel-room-status.png","hostel-register-student.png","hostel-settings.png"],link:"https://qninie.github.io/Hostel-system-management/"},{number:"04",slug:"apcs",category:"systems",title:"Academic Peer Counselling System",type:"Database-driven web application",role:"System Developer",summary:"A structured UiTM mentoring platform that connects Dean’s List mentors with students who need academic support.",challenge:"Peer mentoring records were scattered, making it difficult to match students, measure academic improvement and recognize mentor contributions.",approach:"I developed the web system and database workflow for student registration, automated role validation, mentor–mentee matching, session management and GPA tracking.",outcome:"A tested and deployed prototype with working CRUD operations, centralized mentoring records, progress tracking and certificate management for mentors.",highlights:[["4","Core data entities"],["GPA","Progress tracking"],["CRUD","Session management"]],tools:["PHP","MySQL","HTML","Bootstrap","phpMyAdmin","FileZilla"],images:["apcs-login.png","apcs-dashboard.png","apcs-admin-management.png","apcs-session-management.png","apcs-session-list.png","apcs-certificate-management.png","apcs-certificate-list.png"],link:"https://youtu.be/7kEiJudpVQU?si=Jht50xd2BPfqGDux"},{number:"05",slug:"eresume",category:"development",title:"E-Resume Website",type:"Individual project · Multi-page frontend website",role:"UI DESIGN & FRONTEND DEVELOPMENT",summary:"A multi-page digital resume presenting my background, education, skills, experience and achievements in a browsable web format.",challenge:"A traditional resume has limited space for presenting detailed academic, personal and professional information in an engaging way.",approach:"I independently planned the information structure, designed the visual identity and developed consistent navigation across seven content pages.",outcome:"A deployed personal website that organises my résumé into clear sections and demonstrates foundational frontend and interface design skills.",tools:["HTML","CSS","JavaScript","Responsive Design"],images:["e-resume-home.png","e-resume-personal-detail.png","e-resume-education.png","e-resume-skills.png","e-resume-experience.png","e-resume-achievement.png","e-resume-references.png"],link:"https://queenie-resume.netlify.app/"},{number:"06",slug:"kampungwai",category:"development",title:"Kampung Wai",type:"Group assignment · Cultural tourism website",role:"TEAM LEADER · WEB DESIGN & DEVELOPMENT",summary:"A multi-page destination website introducing the heritage, culture, attractions and community experiences of Kampung Wai, Perlis.",challenge:"Kampung Wai needed an engaging digital presence that could preserve local identity while helping visitors discover its culture and attractions.",approach:"As team leader, I guided our four-person team in planning an eight-page sitemap and combining cultural storytelling, scenic media and interactive navigation into a welcoming experience.",outcome:"A deployed tourism website that brings the village’s history, culture, events, attractions and visitor information together in one accessible destination.",tools:["HTML","CSS","JavaScript","Responsive Design"],images:["kampung-wai-home.png","kampung-wai-about.png","kampung-wai-history.png","kampung-wai-culture.png","kampung-wai-attraction.png","kampung-wai-event.png","kampung-wai-gallery.png","kampung-wai-faq.png"],link:"https://qninie.github.io/kampungwai/"},{number:"07",slug:"digitalsecurity",category:"creative",title:"Digital Security",type:"Group assignment · Awareness video",role:"TEAM LEADER · DIRECTOR · VIDEO EDITOR",summary:"An educational awareness video introducing digital security and the importance of protecting information, devices and online activity.",challenge:"Digital threats can feel technical and distant, making important security concepts difficult to communicate in an engaging, understandable way.",approach:"As team leader and director, I guided the production and independently edited the final video in CapCut to shape its pacing, visual flow and message.",outcome:"A completed group video that transforms research about digital security into a concise visual awareness piece for a student audience.",tools:["CapCut","Video Editing","Directing","Visual Storytelling"],images:["digital-security-video.png"],video:"digital-security-video.m4v"},{number:"08",slug:"livingroomgame",category:"creative",title:"Living Room Learning Game",type:"Individual lab test · Interactive presentation",role:"INTERACTION DESIGN & PRESENTATION DEVELOPMENT",summary:"A child-friendly PowerPoint activity that teaches common living-room objects through guided learning and a picture-based quiz.",challenge:"The exercise explored how a familiar presentation tool could become a simple, understandable interactive learning experience for children.",approach:"I designed the visual assets in Canva and built linked learning, quiz and feedback paths in PowerPoint across 34 interactive slides.",outcome:"A small working learning activity covering 13 household objects, followed by five questions with immediate correct or incorrect feedback.",highlights:[["13","Objects"],["5","Quiz questions"],["34","Interactive slides"]],tools:["Canva","PowerPoint","Interaction Design","Educational Content"],images:["living-room-game-cover.png"],presentation:"living-room-interactive-game.pptx"}],xe=[{title:"Design",skills:[["UI/UX Design",84],["Wireframing",88],["Prototyping",82],["Responsive Design",78]]},{title:"Frontend",skills:[["HTML & CSS",88],["JavaScript",76],["React",72],["Tailwind CSS",78]]},{title:"Development",skills:[["Node.js & Express",68],["MySQL",72],["REST APIs",66],["Git & GitHub",76]]}],F=["Figma","React","JavaScript","HTML","CSS","Tailwind","Node.js","Express","MySQL","Git","GitHub","VS Code","Postman","Tableau","Canva","Bootstrap"],Le={Figma:"figma.svg",React:"react.svg",JavaScript:"javascript.svg",HTML:"html5.svg",CSS:"css.svg",Tailwind:"tailwindcss.svg","Node.js":"nodedotjs.svg",Express:"express.svg",MySQL:"mysql.svg",Git:"git.svg",GitHub:"github.svg","VS Code":"visualstudiocode.svg",Postman:"postman.svg",Tableau:"tableau.svg",Canva:"canva.svg",Bootstrap:"bootstrap.svg"};document.querySelector("#app").innerHTML=`
  <header class="home-nav" aria-label="Primary navigation">
    <a class="home-mark" href="#greeting" aria-label="Queenie, back to beginning">Queenie</a>
    <nav class="site-nav" aria-label="Portfolio chapters">
      <a class="is-active" href="#door-scene" data-section="door-scene">Discover</a>
      <a href="#journey" data-section="journey">Journey</a>
      <a href="#work" data-section="work">Work</a>
      <a href="#skills" data-section="skills">Skills</a>
      <a href="#contact" data-section="contact">Contact</a>
    </nav>
    <a class="resume-button" href="${d("Queenie-Tham-Resume.pdf")}" download="Queenie-Tham-Resume.pdf" aria-label="Download Queenie Tham's résumé">
      <span class="resume-button-full">Download résumé</span><span class="resume-button-short">CV</span><i aria-hidden="true">↓</i>
    </a>
  </header>

  <div class="sakura-cursor" aria-hidden="true">${ke()}</div>
  <div class="scroll-butterfly-guide" aria-live="polite" aria-hidden="true">
    <span class="guide-tip">Click the box or scroll to begin.</span>
    <img src="${d("guide-butterfly-open-cropped.png")}" alt="" />
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
        <img class="hero-branch" src="${d("sakura-branch.png")}" alt="" />
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
            <img class="butterfly-resting" src="${d("guide-butterfly-side-cropped.png")}" alt="" />
            <img class="butterfly-open" src="${d("guide-butterfly-open-cropped.png")}" alt="" />
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
            <img class="tree-art" src="${d("memory-tree-filled.png")}" alt="A full watercolor cherry blossom tree" />
            ${k.map((e,t)=>`
              <button class="memory-flower" data-index="${t}" style="--tree-x:${e.tree.x}%;--tree-y:${e.tree.y}%" aria-label="Discover ${e.title} memory">
                <span class="bud-layer">${S("memory-closed-flower")}</span>
                <span class="bloom-layer">${S("memory-flower-svg")}</span>
              </button>`).join("")}
            <img class="tree-guide-butterfly" src="${d("guide-butterfly-open-cropped.png")}" alt="" aria-hidden="true" />
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
          <img class="timeline-butterfly" src="${d("guide-butterfly-open-cropped.png")}" alt="" />
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
        ${X.map((e,t)=>`
          <article class="work-card work-card--${e.slug} ${t===0?"work-card--featured":""}" data-project="${t}" data-category="${e.category}">
            <button class="project-preview" type="button" aria-label="View ${e.title} case study">
              <span class="project-number">${e.number}</span>
              ${e.images?`<span class="screenshot-carousel project-screenshot-carousel" aria-hidden="true">
                ${e.images.map((s,a)=>`<img class="${a===0?"is-active":""}" src="${d(s)}" alt="">`).join("")}
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
              <ul>${e.tools.slice(0,5).map(s=>`<li>${s}</li>`).join("")}</ul>
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
        <h2 id="skills-title">Designing with empathy<br><em>Building with intention</em></h2>
        <p>A growing toolkit across interface design and frontend development. The progress values below are temporary placeholders for now.</p>
      </header>

      <div class="skills-frame">
        <div class="vine vine--top" aria-hidden="true">${Array.from({length:9},(e,t)=>`<i style="--leaf:${t}"></i>`).join("")}</div>
        <div class="vine vine--right" aria-hidden="true">${Array.from({length:7},(e,t)=>`<i style="--leaf:${t}"></i>`).join("")}</div>
        <div class="vine vine--bottom" aria-hidden="true">${Array.from({length:9},(e,t)=>`<i style="--leaf:${t}"></i>`).join("")}</div>
        <div class="vine vine--left" aria-hidden="true">${Array.from({length:7},(e,t)=>`<i style="--leaf:${t}"></i>`).join("")}</div>
        <span class="frame-flower frame-flower--one" aria-hidden="true">${S("frame-flower-svg")}</span>
        <span class="frame-flower frame-flower--two" aria-hidden="true">${S("frame-flower-svg")}</span>

        <div class="skill-groups">
          ${xe.map(e=>`
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
        <div class="tools-intro"><p class="scene-label">Tools in my workflow</p></div>
        <div class="tools-marquee">
          <div class="tools-track">
            ${[...F,...F].map((e,t)=>`
              <div class="tool-item" ${t>=F.length?'aria-hidden="true"':""}>
                <span class="tool-mark"><img src="${d(`tool-icons/${Le[e]}`)}" alt="" loading="lazy"></span>
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
            <a href="${d("Queenie-Tham-Resume.pdf")}" download="Queenie-Tham-Resume.pdf"><span>↓</span><div><small>Résumé</small><strong>Download PDF</strong></div></a>
          </address>
        </div>

        <div class="contact-form-wrap">
          <span class="contact-blossom" aria-hidden="true">${S("contact-flower-svg")}</span>
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
          <span class="back-to-top-flower" aria-hidden="true">${S("back-to-top-flower-svg")}<i>↑</i></span>
        </a>
      </footer>
    </section>
  </main>

  <div class="memory-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
    <div class="memory-detail">
      <div class="detail-blossom" aria-hidden="true">
        ${S("detail-flower-svg")}
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
`;const B=[...document.querySelectorAll(".greeting-word")],$e=document.querySelector(".begin-cue");let A=0;window.setInterval(()=>{B[A].classList.remove("is-visible"),A=(A+1)%B.length,B[A].classList.add("is-visible")},1450);const K=document.querySelector(".sakura-cursor"),je=matchMedia("(hover:hover) and (pointer:fine) and (min-width:1025px) and (prefers-reduced-motion:no-preference)").matches;let G=0,N={x:-80,y:-80},_=0;const H=new Set;je&&window.addEventListener("pointermove",e=>{if(N={x:e.clientX,y:e.clientY},G||(G=requestAnimationFrame(()=>{K.style.transform=`translate3d(${N.x}px,${N.y}px,0)`,K.classList.add("is-visible"),G=0})),performance.now()-_<110||H.size>=12)return;_=performance.now();const t=document.createElement("i");t.className="trail-petal",t.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;--drift:${(Math.random()-.5)*60}px;--spin:${(Math.random()-.5)*240}deg`,H.add(t),document.body.append(t),t.addEventListener("animationend",()=>{H.delete(t),t.remove()},{once:!0})},{passive:!0});const b=document.querySelector(".hero-scene");document.querySelector(".primary-button");const u=document.querySelector(".scroll-butterfly-guide"),Ie=u.querySelector(".guide-tip");new IntersectionObserver(([e])=>{e.isIntersecting&&!b.classList.contains("has-grown")&&b.classList.add("has-grown")},{threshold:.28}).observe(b);const L=document.querySelector(".hero-nature"),O=new Set;let Z=0;matchMedia("(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)").matches&&(b.addEventListener("pointermove",e=>{const t=b.getBoundingClientRect(),s={x:t.left+t.width*.77,y:t.top+t.height*.34},a=e.clientX-s.x,o=e.clientY-s.y,i=Math.hypot(a,o);if(i>180){L.style.setProperty("--react-x","0deg"),L.style.setProperty("--react-y","0px");return}const r=1-i/180;if(L.style.setProperty("--react-x",`${Math.max(-3,Math.min(3,-a/55*r))}deg`),L.style.setProperty("--react-y",`${-o/20*r}px`),performance.now()-Z>850&&O.size<3&&Math.random()>.55){Z=performance.now();const n=document.createElement("i");n.className="released-petal",n.style.cssText=`left:${68+Math.random()*22}%;top:${24+Math.random()*28}%;--petal-drift:${(Math.random()-.5)*140}px;--petal-spin:${160+Math.random()*260}deg`,O.add(n),b.append(n),n.addEventListener("animationend",()=>{O.delete(n),n.remove()},{once:!0})}},{passive:!0}),b.addEventListener("pointerleave",()=>{L.style.setProperty("--react-x","0deg"),L.style.setProperty("--react-y","0px")}));const j=document.querySelector(".door-scene"),U=document.querySelector(".journey-section"),Me=document.querySelector(".timeline-rail"),Ee=document.querySelector('.site-nav a[data-section="door-scene"]'),ne=.68,z=matchMedia("(prefers-reduced-motion:reduce)").matches;let D=!1,ee=0,te=scrollY;function le(){const e=Math.max(0,j.offsetHeight-innerHeight);return j.offsetTop+e*ne}Ee.addEventListener("click",e=>{e.preventDefault();const t=le();D=!0,history.replaceState(null,"","#door-scene"),window.scrollTo({top:t,behavior:z?"auto":"smooth"})});let V=0,se=!1,ce=!1;function qe(){if(se||z)return;const e=[...document.querySelectorAll(".memory-flower")].map(r=>{const n=r.getBoundingClientRect();return{x:n.left+n.width/2,y:n.top+n.height/2}});if(e.length!==k.length)return;se=!0;const t={x:innerWidth*.78,y:innerHeight*.62},s=[{x:-60,y:Math.max(innerHeight*.55,e[0].y+70)},...e,t],a=[0,.12,.32,.5,.68,.86],o=s.map((r,n)=>({offset:a[n],transform:`translate3d(${r.x}px,${r.y}px,0) translate(-50%,-50%) scale(${n?1:.72})`,opacity:n?1:0,easing:"cubic-bezier(.35,.05,.25,1)"})),i=u.animate(o,{duration:7200,fill:"forwards"});i.finished.then(()=>{ce=!0,u.style.setProperty("--guide-screen-x","78vw"),u.style.setProperty("--guide-screen-y","62vh"),u.classList.add("has-tip"),i.cancel()}).catch(()=>{})}function de(){const e=j.getBoundingClientRect(),t=j.offsetHeight-innerHeight,s=Math.max(1,t*ne),a=Math.max(0,Math.min(1,-e.top/s)),o=scrollY>te;!z&&!D&&o&&ee<.94&&a>=.94&&(D=!0,window.scrollTo({top:le(),behavior:"smooth"})),a<.65&&(D=!1),ee=a,te=scrollY,j.style.setProperty("--door-progress",a.toFixed(3));const i=U.getBoundingClientRect(),r=Me.getBoundingClientRect(),n=Math.max(105,Math.min(innerHeight*.56,r.bottom-18)),g=Math.max(0,Math.min(1,(n-r.top)/Math.max(1,r.height)));U.style.setProperty("--journey-progress",g.toFixed(3));const m=a>.94&&i.top>innerHeight*.55,v=r.top<=innerHeight*.56&&r.bottom>=105,f=m||v;let x,C;m?(x=innerWidth*.78,C=innerHeight*.54):v?(x=r.left+r.width/2,C=n):(x=innerWidth*.5,C=innerHeight*.6),u.style.setProperty("--guide-screen-x",`${x}px`),u.style.setProperty("--guide-screen-y",`${C}px`),u.classList.toggle("is-following",f),u.classList.toggle("has-tip",m&&ce),u.classList.toggle("is-tree-orbiting",m),u.classList.toggle("is-on-timeline",v),u.setAttribute("aria-hidden",String(!f)),Ie.textContent="Click a flower to discover more about Queenie.",m&&qe(),b.classList.toggle("guide-is-travelling",f),document.querySelector(".home-nav").classList.toggle("has-background",scrollY>8),V=0}window.addEventListener("scroll",()=>{V||(V=requestAnimationFrame(de))},{passive:!0});de();const E=[...document.querySelectorAll(".site-nav a")];E.map(e=>document.getElementById(e.dataset.section)).filter(Boolean);new IntersectionObserver(e=>{const t=e.filter(s=>s.isIntersecting).sort((s,a)=>a.intersectionRatio-s.intersectionRatio)[0];t&&E.forEach(s=>s.classList.toggle("is-active",s.dataset.section===t.target.id))},{rootMargin:"-34% 0px -52%",threshold:[0,.2,.5]}).observe(j);new IntersectionObserver(e=>{e[0].isIntersecting&&E.forEach(t=>t.classList.toggle("is-active",t.dataset.section==="journey"))},{rootMargin:"-32% 0px -55%",threshold:0}).observe(U);const Te=document.querySelector(".work-section");new IntersectionObserver(e=>{e[0].isIntersecting&&E.forEach(t=>t.classList.toggle("is-active",t.dataset.section==="work"))},{rootMargin:"-32% 0px -55%",threshold:0}).observe(Te);const W=document.querySelector(".skills-section");new IntersectionObserver(e=>{e[0].isIntersecting&&E.forEach(t=>t.classList.toggle("is-active",t.dataset.section==="skills"))},{rootMargin:"-32% 0px -55%",threshold:0}).observe(W);const Ce=document.querySelector(".contact-section");new IntersectionObserver(e=>{e[0].isIntersecting&&E.forEach(t=>t.classList.toggle("is-active",t.dataset.section==="contact"))},{rootMargin:"-32% 0px -55%",threshold:0}).observe(Ce);const Ae=document.querySelectorAll(".journey-milestone"),Pe=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("is-visible")})},{threshold:.2});Ae.forEach(e=>Pe.observe(e));const q=document.querySelectorAll(".work-card"),De=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("is-visible")})},{threshold:.15});q.forEach(e=>De.observe(e));const T=[...document.querySelectorAll(".work-filter")],ie=document.querySelector(".work-filter-indicator"),Re=document.querySelector(".work-empty");let ae=0;function J(e){ie.style.setProperty("--filter-left",`${e.offsetLeft}px`),ie.style.setProperty("--filter-width",`${e.offsetWidth}px`)}async function Fe(e){const t=++ae,s=[...q].filter(i=>e==="all"||i.dataset.category===e),a=T.find(i=>i.dataset.filter===e);T.forEach(i=>{const r=i===a;i.classList.toggle("is-active",r),i.setAttribute("aria-pressed",String(r))}),J(a);const o=[...q].filter(i=>!i.hidden);await Promise.all(o.map(i=>i.animate([{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(12px)"}],{duration:180,easing:"ease-out",fill:"forwards"}).finished.catch(()=>{}))),t===ae&&(q.forEach(i=>{const r=s.includes(i);i.hidden=!r,i.classList.remove("is-filter-featured","is-filter-even")}),s.forEach((i,r)=>{i.querySelector(".project-number").textContent=e==="all"?X[Number(i.dataset.project)].number:String(r+1).padStart(2,"0")}),e!=="all"&&(s[0]?.classList.add("is-filter-featured"),s.slice(1).forEach((i,r)=>i.classList.toggle("is-filter-even",r%2===0))),Re.hidden=s.length>0,s.forEach(i=>i.animate([{opacity:0,transform:"translateY(18px)"},{opacity:1,transform:"translateY(0)"}],{duration:380,delay:60,easing:"cubic-bezier(.2,.75,.2,1)",fill:"both"})))}T.forEach(e=>e.addEventListener("click",()=>Fe(e.dataset.filter)));requestAnimationFrame(()=>J(T.find(e=>e.classList.contains("is-active"))));window.addEventListener("resize",()=>J(T.find(e=>e.classList.contains("is-active"))));const oe=new WeakSet;function pe(e){if(!e||oe.has(e))return;const t=[...e.querySelectorAll("img")];if(t.length<2)return;const s=e.closest(".project-preview, .case-study-visual")??e;let a=0,o=null;const i=g=>{const h=t[a];h.classList.add("is-leaving"),h.classList.remove("is-active"),window.setTimeout(()=>h.classList.remove("is-leaving"),600),a=g%t.length,t[a].classList.add("is-active")},r=()=>{o||(e.classList.add("is-playing"),o=window.setInterval(()=>i(a+1),1350))},n=()=>{window.clearInterval(o),o=null,e.classList.remove("is-playing"),i(0)};s.addEventListener("pointerenter",r),s.addEventListener("pointerleave",n),oe.add(e)}document.querySelectorAll(".project-screenshot-carousel").forEach(pe);new IntersectionObserver(([e],t)=>{e.isIntersecting&&(W.classList.add("is-visible"),t.disconnect())},{threshold:.18}).observe(W);const P=document.querySelector(".letter-button"),Be=document.querySelector(".letter-note");P.addEventListener("click",()=>{const e=P.getAttribute("aria-expanded")==="true";P.setAttribute("aria-expanded",String(!e)),Be.hidden=e,P.querySelector("i").textContent=e?"＋":"−"});document.querySelector(".contact-form").addEventListener("submit",e=>{e.preventDefault();const t=new FormData(e.currentTarget),s=t.get("name").trim(),a=t.get("email").trim(),o=t.get("message").trim(),i=encodeURIComponent(`Portfolio enquiry from ${s}`),r=encodeURIComponent(`${o}

From: ${s}
Email: ${a}`);window.location.href=`mailto:qthamshinee@gmail.com?subject=${i}&body=${r}`});const l=document.querySelector(".project-modal"),me=l.querySelector(".project-modal-close"),M=l.querySelector(".project-video-viewer"),I=M.querySelector("video"),ue=M.querySelector(".project-video-close");let ge=null;function Ge(e,t){const s=X[e];ge=t,l.className=`project-modal project-modal--${s.slug}`,l.querySelector(".case-number").textContent=t.closest(".work-card")?.querySelector(".project-number")?.textContent??s.number,l.querySelector("#project-modal-title").textContent=s.title,l.querySelector(".case-role").textContent=s.role,l.querySelector(".case-summary").textContent=s.summary,l.querySelector(".case-challenge").textContent=s.challenge,l.querySelector(".case-approach").textContent=s.approach,l.querySelector(".case-outcome").textContent=s.outcome;const a=l.querySelector(".case-highlights");a.hidden=!s.highlights,a.innerHTML=s.highlights?.map(([m,v])=>`<span><strong>${m}</strong>${v}</span>`).join("")??"",l.querySelector(".case-tools").innerHTML=s.tools.map(m=>`<li>${m}</li>`).join("");const o=l.querySelector(".case-study-visual"),i=o.querySelector(".case-screenshot-carousel"),r=Array.isArray(s.images)&&s.images.length>0;i.hidden=!r,r&&i.dataset.project!==s.slug&&(i.dataset.project=s.slug,i.innerHTML=s.images.map((m,v)=>`<img class="${v===0?"is-active":""}" src="${d(m)}" alt="">`).join("")),o.classList.toggle("has-project-image",!!s.image||r),o.style.backgroundImage=s.image?`url("${d(s.image)}")`:"",r&&pe(i);const n=l.querySelector(".case-live-link");n.href=s.video?d(s.video):s.presentation?d(s.presentation):s.link,n.dataset.video=s.video?d(s.video):"",n.innerHTML=`${s.video?"View video":s.presentation?"Open interactive PPTX":s.slug==="language"||s.slug==="apcs"?"Watch project walkthrough":"View live project"} <span>↗</span>`;const g=l.querySelector(".case-prototype-link");g.hidden=!s.prototype,s.prototype&&(g.href=s.prototype);const h=l.querySelector(".case-manual-link");h.hidden=!s.manual,s.manual&&(h.href=d(s.manual)),l.hidden=!1,document.body.classList.add("modal-open"),requestAnimationFrame(()=>l.classList.add("is-open")),me.focus()}function he(){I.pause(),I.removeAttribute("src"),I.load(),M.hidden=!0,l.classList.remove("is-video-open"),l.classList.remove("is-open"),document.body.classList.remove("modal-open"),setTimeout(()=>{l.hidden=!0,ge?.focus()},450)}l.querySelector(".case-live-link").addEventListener("click",e=>{const t=e.currentTarget.dataset.video;t&&(e.preventDefault(),I.src=t,M.hidden=!1,l.classList.add("is-video-open"),M.scrollIntoView({behavior:"smooth",block:"start"}),I.play().catch(()=>{}),ue.focus())});ue.addEventListener("click",()=>{I.pause(),M.hidden=!0,l.classList.remove("is-video-open"),l.querySelector(".case-live-link").focus()});q.forEach((e,t)=>{e.querySelectorAll(".project-preview,.case-study-link").forEach(s=>s.addEventListener("click",()=>Ge(t,s)))});me.addEventListener("click",he);const Y=[...document.querySelectorAll(".memory-flower")],Ne=document.querySelector(".discovery-progress span"),c=document.querySelector(".memory-modal"),Q=document.querySelector(".memory-garden"),He=document.querySelector(".tree-instruction"),$=document.querySelector(".tree-guide-butterfly"),Oe=document.querySelector(".discovery-progress"),p={viewMode:"tree",currentMemory:null,activeFlowerIndex:0,discoveredMemories:new Set};let ye=null,ve=!1;const y=c.querySelector(".memory-photo-marquee");let w=null;y.addEventListener("pointerdown",e=>{y.classList.contains("is-single-photo")||(w={pointerId:e.pointerId,startX:e.clientX,startScroll:y.scrollLeft},y.classList.add("is-dragging"),y.setPointerCapture(e.pointerId))});y.addEventListener("pointermove",e=>{!w||w.pointerId!==e.pointerId||(y.scrollLeft=w.startScroll-(e.clientX-w.startX))});const fe=e=>{!w||w.pointerId!==e.pointerId||(w=null,y.classList.remove("is-dragging"))};y.addEventListener("pointerup",fe);y.addEventListener("pointercancel",fe);function R(){const e=p.discoveredMemories.size===k.length;if(Y.forEach((t,s)=>{const a=p.discoveredMemories.has(s),o=!e&&s===p.activeFlowerIndex&&!a;t.className=`memory-flower ${a?"is-bloomed":o?"is-active":"is-closed"}`,t.setAttribute("aria-current",o?"step":"false"),t.setAttribute("aria-label",`${a?"Revisit":"Discover"} ${k[s].title} memory`)}),Ne.textContent=String(Math.min(p.discoveredMemories.size+(e?0:1),4)).padStart(2,"0"),Oe.classList.toggle("is-complete",e),He.textContent=e?"Four moments, one growing journey.":"Select the glowing flower to discover a memory.",$.classList.toggle("is-settled",e),!e&&ve){const t=k[p.activeFlowerIndex].tree;$.style.setProperty("--guide-x",`${t.x}%`),$.style.setProperty("--guide-y",`${t.y}%`),$.classList.remove("is-guiding"),requestAnimationFrame(()=>$.classList.add("is-guiding"))}}new IntersectionObserver(([e],t)=>{e.isIntersecting&&(ve=!0,document.querySelector(".door-sticky").classList.add("tree-is-revealing"),R(),t.disconnect())},{threshold:.55}).observe(document.querySelector(".door-sticky"));function re(e,t,s=!1){const a=k[e];ye=t,c.dataset.memory=a.id,p.currentMemory=e,p.viewMode="memory",s&&p.discoveredMemories.add(e),R(),c.querySelector("#modal-title").textContent=a.title,c.querySelector(".modal-copy .scene-label").textContent=`${a.chapter} · A personal chapter`,c.querySelector(".modal-description").textContent=a.description,c.querySelector(".modal-detail").textContent=a.detail;const o=c.querySelector(".modal-image");o.className=`modal-image memory-image-${a.art}`,o.style.backgroundImage=a.image?`url("${a.image}")`:"",o.setAttribute("aria-label",`${a.title} placeholder image`);const i=c.querySelector(".memory-photo-marquee"),r=c.querySelector(".detail-blossom"),n=Array.isArray(a.gallery)?a.gallery.filter(h=>h.image):[],g=n.length>0;if(i.hidden=!g,i.classList.remove("is-single-photo"),r.hidden=g,c.querySelector(".memory-detail").classList.toggle("has-photo-gallery",g),g){const h=3.4285714285714284,m=20/7;i.style.setProperty("--memory-scroll-duration",`${n.length*h}s`),i.style.setProperty("--memory-scroll-duration-mobile",`${n.length*m}s`);const v=[...n,...n];i.querySelector(".memory-photo-track").innerHTML=v.map((f,x)=>`
      <figure class="memory-photo-card" ${x>=n.length?'aria-hidden="true"':""}>
        <img src="${f.image}" alt="${f.label} — ${f.caption}">
        <figcaption><strong>${f.label}</strong><span>${f.caption}</span></figcaption>
      </figure>`).join(""),i.scrollLeft=0}c.hidden=!1,document.body.classList.add("modal-open"),Q.classList.add("is-softened"),requestAnimationFrame(()=>c.classList.add("is-open")),c.querySelector("#modal-title").focus()}Y.forEach((e,t)=>{e.addEventListener("click",()=>{if(p.discoveredMemories.has(t)){re(t,e);return}t===p.activeFlowerIndex&&($.classList.remove("is-guiding"),re(t,e,!0))})});function be(){c.classList.remove("is-open"),Q.classList.remove("is-softened"),Q.classList.remove("is-transitioning"),document.body.classList.remove("modal-open"),p.viewMode="tree";const e=k.findIndex((t,s)=>!p.discoveredMemories.has(s));p.activeFlowerIndex=e===-1?0:e,R(),setTimeout(()=>{c.hidden=!0,Y[p.currentMemory]?.classList.remove("is-entering"),ye?.focus(),p.currentMemory=null},500)}c.addEventListener("click",be);window.addEventListener("keydown",e=>{e.key==="Escape"&&!c.hidden&&be(),e.key==="Escape"&&!l.hidden&&he()});matchMedia("(prefers-reduced-motion:reduce)").matches&&$e.classList.add("is-visible");R();
