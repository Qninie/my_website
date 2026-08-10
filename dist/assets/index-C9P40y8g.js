(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const b=[{id:"beginning",chapter:"01",title:"Where It All Began",detail:"From curiosity to creating.",description:"I started my journey without knowing exactly where it would lead. Through university projects, new experiences, and plenty of learning along the way, I gradually discovered my interest in creating digital experiences that bring creativity and technology together. Looking back at where I started reminds me how much I’ve grown — and how much more there is to explore.",image:"",art:"beginning",gallery:[{label:"Then",caption:"Where it started",image:""},{label:"Now",caption:"Still learning, still growing.",image:""}],tree:{x:50,y:29},position:{x:50,y:12}},{id:"proud-moment",chapter:"02",title:"A Proud Moment",detail:"Dean’s List · Five consecutive semesters · 2023–Present",description:"One of the moments that reminded me how far I’ve come. It represents the effort, persistence and learning behind the achievement—not simply the result itself.",image:"",art:"internship",tree:{x:65,y:43},position:{x:88,y:48}},{id:"beyond-screen",chapter:"03",title:"Beyond the Screen",detail:"The person behind the work",description:"A glimpse into the interests, small joys and experiences that shape who I am when I step away from designing and building.",image:"",art:"hitern",tree:{x:51,y:58},position:{x:50,y:86}},{id:"what-drives-me",chapter:"04",title:"What Drives Me",detail:"Creating, learning and growing",description:"I enjoy turning ideas into thoughtful experiences, learning through each challenge and finding the balance between creativity, design and technology.",image:"",art:"achievement",tree:{x:35,y:43},position:{x:12,y:50}}],Z="/my_website/",g=e=>`${Z}assets/${e}`;let ee=0;const y=(e="")=>{const t=`sakura-${ee++}`;return`
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
    </svg>`},te=()=>`
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
  </svg>`,X=[{number:"01",slug:"hitern",title:"Hitern",type:"Capstone · Full-stack web application",role:"UI/UX Designer & Full-stack Developer",summary:"A role-based internship document management platform that simplifies submissions, approvals and progress tracking for interns, supervisors and HR.",challenge:"Internship documents and approvals can become fragmented across messages, files and different stakeholders.",approach:"I mapped the multi-role workflow, designed responsive dashboards and built secure document, notification and approval experiences.",outcome:"A complete working capstone product with role-based access, RESTful APIs and dashboard analytics.",tools:["React","Tailwind CSS","Node.js","Express","MySQL"],link:"https://qninie.github.io/hitern_system/"},{number:"02",slug:"language",title:"IT Languages Learning",type:"UX case study · Mobile prototype",role:"Team Leader & UI/UX Designer",summary:"A mobile learning concept designed to make technical-language lessons clearer, friendlier and easier to complete.",challenge:"Learners needed a less intimidating way to understand introductory technical language concepts.",approach:"I led the design workflow, developed the interface in Figma and refined key tasks through user-centred testing.",outcome:"The improved prototype increased task-completion efficiency by 20% during testing.",tools:["Figma","Prototyping","User testing","Canva"],link:"https://youtu.be/IMaTKmI0Mkg?si=P6-LQWeK41Fss2wA"},{number:"03",slug:"hostel",title:"Hostel Management",type:"Responsive web development",role:"Frontend Developer",summary:"A responsive system for managing student information, room availability and hostel settings in one clear interface.",challenge:"Hostel information needed to remain easy to scan and manage across different screens and lighting preferences.",approach:"I organised complex records into a responsive dashboard and implemented both light and dark interface themes.",outcome:"A deployed frontend experience that demonstrates responsive layouts, structured data presentation and theme switching.",tools:["HTML","CSS","JavaScript","Bootstrap"],link:"https://qninie.github.io/Hostel-system-management/"},{number:"04",slug:"event",title:"Event Hall Booking",type:"Web application development",role:"Team Leader & Developer",summary:"A booking-management system that brings reservations, hall availability and administration into one workflow.",challenge:"The booking experience required a clearer connection between customer-facing forms and administrative records.",approach:"I led the team and connected the frontend booking journey to PHP and MySQL-backed reservation management.",outcome:"A functional full-stack system with a more efficient reservation and administration workflow.",tools:["HTML","CSS","PHP","MySQL","Laragon"],link:"https://youtu.be/7kEiJudpVQU?si=Jht50xd2BPfqGDux"}],se=[{title:"Design",skills:[["UI/UX Design",84],["Wireframing",88],["Prototyping",82],["Responsive Design",78]]},{title:"Frontend",skills:[["HTML & CSS",88],["JavaScript",76],["React",72],["Tailwind CSS",78]]},{title:"Development",skills:[["Node.js & Express",68],["MySQL",72],["REST APIs",66],["Git & GitHub",76]]}],q=["Figma","React","JavaScript","HTML","CSS","Tailwind","Node.js","Express","MySQL","Git","GitHub","VS Code","Postman","Tableau","Canva","Bootstrap"];document.querySelector("#app").innerHTML=`
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

  <div class="sakura-cursor" aria-hidden="true">${te()}</div>
  <div class="scroll-butterfly-guide" aria-live="polite" aria-hidden="true">
    <span class="guide-tip">Click the box or scroll to begin.</span>
    <img src="${g("guide-butterfly-open-cropped.png")}" alt="" />
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
        <img class="hero-branch" src="${g("sakura-branch.png")}" alt="" />
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
            <img class="butterfly-resting" src="${g("guide-butterfly-side-cropped.png")}" alt="" />
            <img class="butterfly-open" src="${g("guide-butterfly-open-cropped.png")}" alt="" />
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
            <img class="tree-art" src="${g("memory-tree-filled.png")}" alt="A full watercolor cherry blossom tree" />
            ${b.map((e,t)=>`
              <button class="memory-flower" data-index="${t}" style="--tree-x:${e.tree.x}%;--tree-y:${e.tree.y}%" aria-label="Discover ${e.title} memory">
                <span class="bud-layer">${y("memory-closed-flower")}</span>
                <span class="bloom-layer">${y("memory-flower-svg")}</span>
              </button>`).join("")}
            <img class="tree-guide-butterfly" src="${g("guide-butterfly-open-cropped.png")}" alt="" aria-hidden="true" />
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
          <img class="timeline-butterfly" src="${g("guide-butterfly-open-cropped.png")}" alt="" />
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
        ${X.map((e,t)=>`
          <article class="work-card work-card--${e.slug} ${t===0?"work-card--featured":""}" data-project="${t}">
            <button class="project-preview" type="button" aria-label="View ${e.title} case study">
              <span class="project-number">${e.number}</span>
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
        <span class="frame-flower frame-flower--one" aria-hidden="true">${y("frame-flower-svg")}</span>
        <span class="frame-flower frame-flower--two" aria-hidden="true">${y("frame-flower-svg")}</span>

        <div class="skill-groups">
          ${se.map(e=>`
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
            ${[...q,...q].map((e,t)=>`
              <div class="tool-item" ${t>=q.length?'aria-hidden="true"':""}>
                <span class="tool-mark">${e.split(/\s|\./).map(s=>s[0]).join("").slice(0,3)}</span>
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
          <span class="contact-blossom" aria-hidden="true">${y("contact-flower-svg")}</span>
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
        ${y("detail-flower-svg")}
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
`;const M=[...document.querySelectorAll(".greeting-word")],oe=document.querySelector(".begin-cue");let L=0;window.setInterval(()=>{M[L].classList.remove("is-visible"),L=(L+1)%M.length,M[L].classList.add("is-visible")},1450);const U=document.querySelector(".sakura-cursor"),ae=matchMedia("(hover:hover) and (pointer:fine) and (min-width:1025px) and (prefers-reduced-motion:no-preference)").matches;let C=0,T={x:-80,y:-80},N=0;const A=new Set;ae&&window.addEventListener("pointermove",e=>{if(T={x:e.clientX,y:e.clientY},C||(C=requestAnimationFrame(()=>{U.style.transform=`translate3d(${T.x}px,${T.y}px,0)`,U.classList.add("is-visible"),C=0})),performance.now()-N<110||A.size>=12)return;N=performance.now();const t=document.createElement("i");t.className="trail-petal",t.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;--drift:${(Math.random()-.5)*60}px;--spin:${(Math.random()-.5)*240}deg`,A.add(t),document.body.append(t),t.addEventListener("animationend",()=>{A.delete(t),t.remove()},{once:!0})},{passive:!0});const u=document.querySelector(".hero-scene");document.querySelector(".primary-button");const m=document.querySelector(".scroll-butterfly-guide"),ie=m.querySelector(".guide-tip");new IntersectionObserver(([e])=>{e.isIntersecting&&!u.classList.contains("has-grown")&&u.classList.add("has-grown")},{threshold:.28}).observe(u);const v=document.querySelector(".hero-nature"),E=new Set;let Q=0;matchMedia("(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)").matches&&(u.addEventListener("pointermove",e=>{const t=u.getBoundingClientRect(),s={x:t.left+t.width*.77,y:t.top+t.height*.34},a=e.clientX-s.x,o=e.clientY-s.y,i=Math.hypot(a,o);if(i>180){v.style.setProperty("--react-x","0deg"),v.style.setProperty("--react-y","0px");return}const d=1-i/180;if(v.style.setProperty("--react-x",`${Math.max(-3,Math.min(3,-a/55*d))}deg`),v.style.setProperty("--react-y",`${-o/20*d}px`),performance.now()-Q>850&&E.size<3&&Math.random()>.55){Q=performance.now();const c=document.createElement("i");c.className="released-petal",c.style.cssText=`left:${68+Math.random()*22}%;top:${24+Math.random()*28}%;--petal-drift:${(Math.random()-.5)*140}px;--petal-spin:${160+Math.random()*260}deg`,E.add(c),u.append(c),c.addEventListener("animationend",()=>{E.delete(c),c.remove()},{once:!0})}},{passive:!0}),u.addEventListener("pointerleave",()=>{v.style.setProperty("--react-x","0deg"),v.style.setProperty("--react-y","0px")}));const w=document.querySelector(".door-scene"),P=document.querySelector(".journey-section"),re=document.querySelector(".timeline-rail"),ne=document.querySelector('.site-nav a[data-section="door-scene"]');ne.addEventListener("click",e=>{e.preventDefault();const t=w.offsetTop+w.offsetHeight-innerHeight-2;history.replaceState(null,"","#door-scene"),window.scrollTo({top:t,behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth"})});let H=0;function _(){const e=w.getBoundingClientRect(),t=w.offsetHeight-innerHeight,s=Math.max(0,Math.min(1,-e.top/t));w.style.setProperty("--door-progress",s.toFixed(3));const a=P.getBoundingClientRect(),o=re.getBoundingClientRect(),i=Math.max(105,Math.min(innerHeight*.56,o.bottom-18)),d=Math.max(0,Math.min(1,(i-o.top)/Math.max(1,o.height)));P.style.setProperty("--journey-progress",d.toFixed(3));const h=s>.94&&a.top>innerHeight*.55,p=o.top<=innerHeight*.56&&o.bottom>=105,S=h||p;let $,x;h?($=innerWidth*.78,x=innerHeight*.54):p?($=o.left+o.width/2,x=i):($=innerWidth*.5,x=innerHeight*.6),m.style.setProperty("--guide-screen-x",`${$}px`),m.style.setProperty("--guide-screen-y",`${x}px`),m.classList.toggle("is-following",S),m.classList.toggle("has-tip",h),m.classList.toggle("is-tree-orbiting",h),m.classList.toggle("is-on-timeline",p),m.setAttribute("aria-hidden",String(!S)),ie.textContent="Click a flower to discover more about Queenie.",u.classList.toggle("guide-is-travelling",S),document.querySelector(".home-nav").classList.toggle("has-background",scrollY>8),H=0}window.addEventListener("scroll",()=>{H||(H=requestAnimationFrame(_))},{passive:!0});_();const k=[...document.querySelectorAll(".site-nav a")];k.map(e=>document.getElementById(e.dataset.section)).filter(Boolean);new IntersectionObserver(e=>{const t=e.filter(s=>s.isIntersecting).sort((s,a)=>a.intersectionRatio-s.intersectionRatio)[0];t&&k.forEach(s=>s.classList.toggle("is-active",s.dataset.section===t.target.id))},{rootMargin:"-34% 0px -52%",threshold:[0,.2,.5]}).observe(w);new IntersectionObserver(e=>{e[0].isIntersecting&&k.forEach(t=>t.classList.toggle("is-active",t.dataset.section==="journey"))},{rootMargin:"-32% 0px -55%",threshold:0}).observe(P);const le=document.querySelector(".work-section");new IntersectionObserver(e=>{e[0].isIntersecting&&k.forEach(t=>t.classList.toggle("is-active",t.dataset.section==="work"))},{rootMargin:"-32% 0px -55%",threshold:0}).observe(le);const F=document.querySelector(".skills-section");new IntersectionObserver(e=>{e[0].isIntersecting&&k.forEach(t=>t.classList.toggle("is-active",t.dataset.section==="skills"))},{rootMargin:"-32% 0px -55%",threshold:0}).observe(F);const ce=document.querySelector(".contact-section");new IntersectionObserver(e=>{e[0].isIntersecting&&k.forEach(t=>t.classList.toggle("is-active",t.dataset.section==="contact"))},{rootMargin:"-32% 0px -55%",threshold:0}).observe(ce);const de=document.querySelectorAll(".journey-milestone"),pe=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("is-visible")})},{threshold:.2});de.forEach(e=>pe.observe(e));const V=document.querySelectorAll(".work-card"),me=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("is-visible")})},{threshold:.15});V.forEach(e=>me.observe(e));new IntersectionObserver(([e],t)=>{e.isIntersecting&&(F.classList.add("is-visible"),t.disconnect())},{threshold:.18}).observe(F);const j=document.querySelector(".letter-button"),ue=document.querySelector(".letter-note");j.addEventListener("click",()=>{const e=j.getAttribute("aria-expanded")==="true";j.setAttribute("aria-expanded",String(!e)),ue.hidden=e,j.querySelector("i").textContent=e?"＋":"−"});document.querySelector(".contact-form").addEventListener("submit",e=>{e.preventDefault();const t=new FormData(e.currentTarget),s=t.get("name").trim(),a=t.get("email").trim(),o=t.get("message").trim(),i=encodeURIComponent(`Portfolio enquiry from ${s}`),d=encodeURIComponent(`${o}

From: ${s}
Email: ${a}`);window.location.href=`mailto:qthamshinee@gmail.com?subject=${i}&body=${d}`});const r=document.querySelector(".project-modal"),J=r.querySelector(".project-modal-close");let Y=null;function ge(e,t){const s=X[e];Y=t,r.className=`project-modal project-modal--${s.slug}`,r.querySelector(".case-number").textContent=s.number,r.querySelector("#project-modal-title").textContent=s.title,r.querySelector(".case-role").textContent=s.role,r.querySelector(".case-summary").textContent=s.summary,r.querySelector(".case-challenge").textContent=s.challenge,r.querySelector(".case-approach").textContent=s.approach,r.querySelector(".case-outcome").textContent=s.outcome,r.querySelector(".case-tools").innerHTML=s.tools.map(o=>`<li>${o}</li>`).join("");const a=r.querySelector(".case-live-link");a.href=s.link,a.textContent=s.slug==="language"||s.slug==="event"?"Watch project walkthrough ↗":"View live project ↗",r.hidden=!1,document.body.classList.add("modal-open"),requestAnimationFrame(()=>r.classList.add("is-open")),J.focus()}function D(){r.classList.remove("is-open"),document.body.classList.remove("modal-open"),setTimeout(()=>{r.hidden=!0,Y?.focus()},450)}V.forEach((e,t)=>{e.querySelectorAll(".project-preview,.case-study-link").forEach(s=>s.addEventListener("click",()=>ge(t,s)))});J.addEventListener("click",D);r.addEventListener("click",e=>{e.target===r&&D()});const R=[...document.querySelectorAll(".memory-flower")],he=document.querySelector(".discovery-progress span"),n=document.querySelector(".memory-modal"),B=document.querySelector(".memory-garden"),ye=document.querySelector(".tree-instruction"),f=document.querySelector(".tree-guide-butterfly"),ve=document.querySelector(".discovery-progress"),G=n.querySelector(".back-to-tree"),l={viewMode:"tree",currentMemory:null,activeFlowerIndex:0,discoveredMemories:new Set};let K=null,z=!1;function I(){const e=l.discoveredMemories.size===b.length;if(R.forEach((t,s)=>{const a=l.discoveredMemories.has(s),o=!e&&s===l.activeFlowerIndex&&!a;t.className=`memory-flower ${a?"is-bloomed":o?"is-active":"is-closed"}`,t.setAttribute("aria-current",o?"step":"false"),t.setAttribute("aria-label",`${a?"Revisit":"Discover"} ${b[s].title} memory`)}),he.textContent=String(Math.min(l.discoveredMemories.size+(e?0:1),4)).padStart(2,"0"),ve.classList.toggle("is-complete",e),ye.textContent=e?"Four moments, one growing journey.":"Select the glowing flower to discover a memory.",f.classList.toggle("is-settled",e),!e&&z){const t=b[l.activeFlowerIndex].tree;f.style.setProperty("--guide-x",`${t.x}%`),f.style.setProperty("--guide-y",`${t.y}%`),f.classList.remove("is-guiding"),requestAnimationFrame(()=>f.classList.add("is-guiding"))}}new IntersectionObserver(([e],t)=>{e.isIntersecting&&(z=!0,document.querySelector(".door-sticky").classList.add("tree-is-revealing"),I(),t.disconnect())},{threshold:.55}).observe(document.querySelector(".door-sticky"));function W(e,t,s=!1){const a=b[e];K=t,n.dataset.memory=a.id,l.currentMemory=e,l.viewMode="memory",s&&l.discoveredMemories.add(e),I(),n.querySelector("#modal-title").textContent=a.title,n.querySelector(".modal-copy .scene-label").textContent=`${a.chapter} · A personal chapter`,n.querySelector(".modal-description").textContent=a.description,n.querySelector(".modal-detail").textContent=a.detail;const o=n.querySelector(".modal-image");o.className=`modal-image memory-image-${a.art}`,o.style.backgroundImage=a.image?`url("${a.image}")`:"",o.setAttribute("aria-label",`${a.title} placeholder image`);const i=n.querySelector(".memory-photo-marquee"),d=n.querySelector(".detail-blossom"),c=Array.isArray(a.gallery);if(i.hidden=!c,d.hidden=c,n.querySelector(".memory-detail").classList.toggle("has-photo-gallery",c),c){const h=[...a.gallery,...a.gallery];i.querySelector(".memory-photo-track").innerHTML=h.map((p,S)=>`
      <figure class="memory-photo-card" ${S>=a.gallery.length?'aria-hidden="true"':""}>
        ${p.image?`<img src="${p.image}" alt="${p.label} — ${p.caption}">`:'<div class="memory-photo-placeholder">Photo</div>'}
        <figcaption><strong>${p.label}</strong><span>${p.caption}</span></figcaption>
      </figure>`).join("")}n.hidden=!1,document.body.classList.add("modal-open"),B.classList.add("is-softened"),requestAnimationFrame(()=>n.classList.add("is-open")),G.focus()}R.forEach((e,t)=>{e.addEventListener("click",()=>{if(l.discoveredMemories.has(t)){W(t,e);return}t===l.activeFlowerIndex&&(f.classList.remove("is-guiding"),W(t,e,!0))})});function O(){n.classList.remove("is-open"),B.classList.remove("is-softened"),B.classList.remove("is-transitioning"),document.body.classList.remove("modal-open"),l.viewMode="tree";const e=b.findIndex((t,s)=>!l.discoveredMemories.has(s));l.activeFlowerIndex=e===-1?0:e,I(),setTimeout(()=>{n.hidden=!0,R[l.currentMemory]?.classList.remove("is-entering"),K?.focus(),l.currentMemory=null},500)}G.addEventListener("click",O);n.addEventListener("click",e=>{e.target===n&&O()});window.addEventListener("keydown",e=>{e.key==="Escape"&&!n.hidden&&O(),e.key==="Escape"&&!r.hidden&&D(),e.key==="Tab"&&!n.hidden&&(e.preventDefault(),G.focus())});matchMedia("(prefers-reduced-motion:reduce)").matches&&oe.classList.add("is-visible");I();
