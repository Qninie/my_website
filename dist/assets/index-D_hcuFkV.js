(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const q=[{id:"graduation",title:"Graduation",detail:"A new beginning · 2025",description:"A meaningful milestone marking the beginning of my professional journey.",image:"",art:"graduation",tree:{x:42,y:23},position:{x:50,y:12}},{id:"internship",title:"Internship Experience",detail:"Learning in practice",description:"Gaining practical experience in UI/UX research, wireframing, interface refinement and frontend implementation.",image:"",art:"internship",tree:{x:76,y:38},position:{x:88,y:48}},{id:"hitern",title:"Hitern",detail:"Capstone project",description:"A web-based internship document management system developed as my capstone project.",image:"",art:"hitern",tree:{x:59,y:58},position:{x:50,y:86}},{id:"achievement",title:"Achievement",detail:"Moments of growth",description:"A collection of academic and personal milestones that shaped my growth.",image:"",art:"achievement",tree:{x:25,y:43},position:{x:12,y:50}}],A=(e="")=>`
  <svg class="${e}" viewBox="-30 -30 60 60" aria-hidden="true">
    ${[0,72,144,216,288].map(t=>`<ellipse rx="12" ry="20" cy="-12" transform="rotate(${t})"/>`).join("")}
    <circle r="6"/>
  </svg>`,C=()=>`
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
  </svg>`,P=[[27,27],[40,12],[50,26],[66,18],[75,31],[84,18],[19,43],[38,42],[55,42],[70,48],[86,45],[30,59],[48,61],[66,64],[79,68],[57,77]];document.querySelector("#app").innerHTML=`
  <header class="home-nav" aria-label="Primary navigation">
    <a class="home-mark" href="#greeting" aria-label="Queenie, back to beginning">Queenie<span>.</span></a>
    <a class="journey-link" href="#hero">The beginning <span>↓</span></a>
  </header>

  <div class="sakura-cursor" aria-hidden="true">${C()}</div>

  <main class="home-page">
    <section id="greeting" class="greeting-scene" aria-label="Welcome">
      <div class="intro-petals" aria-hidden="true">${Array.from({length:6},(e,t)=>`<i style="--i:${t}"></i>`).join("")}</div>
      <p class="greeting-kicker">Welcome</p>
      <div class="greeting-list" aria-live="polite">
        ${["Hello","你好","こんにちは","안녕하세요","Bonjour"].map((e,t)=>`<p class="greeting-word ${t===0?"is-visible":""}">${e}</p>`).join("")}
      </div>
      <div class="begin-cue is-visible" aria-hidden="true"><span>Scroll to begin</span><i></i></div>
    </section>

    <section id="hero" class="hero-scene">
      <div class="hero-light" aria-hidden="true"></div>
      <div class="hero-blossom-shadow" aria-hidden="true"></div>
      <div class="hero-nature" aria-hidden="true">
        <img class="hero-branch" src="/assets/sakura-branch.png" alt="" />
      </div>
      <div class="hero-petals" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="hero-intro">
        <h1>Hi, I’m <em>Queenie.</em></h1>
        <p class="hero-lead">Always learning, always improving, and excited to build experiences that people genuinely enjoy using.</p>
        <p class="hero-note">Creating thoughtful digital experiences, one project at a time.</p>
        <div class="journey-actions">
          <div class="hero-scroll"><span>Follow the journey</span><i></i></div>
          <a class="primary-button" href="#door-scene">Explore My Journey <span>↘</span></a>
          <span class="button-butterfly" aria-hidden="true">
            <img class="butterfly-resting" src="/assets/guide-butterfly-side-cropped.png" alt="" />
            <img class="butterfly-open" src="/assets/guide-butterfly-open-cropped.png" alt="" />
          </span>
        </div>
      </div>
    </section>

    <section id="door-scene" class="door-scene">
      <div class="door-sticky">
        <section class="memory-garden" aria-labelledby="memory-heading">
          <div class="memory-heading">
            <p class="scene-label">A tree of beginnings</p>
            <h2 id="memory-heading">Discover the moments<br>that helped me <em>grow.</em></h2>
            <p>Select the glowing flower to discover a memory.</p>
            <div class="discovery-progress" aria-live="polite"><span>01</span><i></i><b>04</b></div>
          </div>
          <div class="blossom-tree" aria-label="Interactive blossom memory tree">
            <svg class="tree-drawing" viewBox="0 0 700 760" role="img" aria-label="Stylised cherry blossom tree">
              <path class="trunk" d="M365 760c-5-138 45-199 1-308-24-59-75-103-63-193 8-64 52-128 102-218"/>
              <path class="branch" d="M348 439C270 375 206 346 94 356M376 457c86-72 151-100 263-98M315 305c-61-50-119-88-207-91M323 281c72-37 132-91 167-168M389 531c84 11 146 45 196 104"/>
              <path class="twig" d="M205 347c-34-50-77-77-133-89m107 70c-17 46-55 77-104 94m422-86c32-49 76-75 133-86m-103 75c13 43 47 73 91 90M210 263c-28-40-66-60-111-62m376-73c42 6 82-7 115-39m-66 506c36 25 59 63 65 108"/>
              ${P.map(([e,t],a)=>`<g class="ambient-flower" transform="translate(${e*7} ${t*7.2}) scale(${a%3===0?1.1:.82})">${[0,72,144,216,288].map(o=>`<ellipse rx="12" ry="20" cy="-12" transform="rotate(${o})"/>`).join("")}<circle r="5"/></g>`).join("")}
            </svg>
            <div class="tree-sway" aria-hidden="true"></div>
            ${q.map((e,t)=>`
              <button class="memory-flower ${t===0?"is-current":""}" data-index="${t}" style="--tree-x:${e.tree.x}%;--tree-y:${e.tree.y}%;--final-x:${e.position.x}%;--final-y:${e.position.y}%" aria-label="Discover ${e.title}" aria-current="${t===0?"step":"false"}">
                ${A("memory-flower-svg")}
                <span class="memory-preview">
                  <i class="memory-image memory-image-${e.art}" role="img" aria-label="${e.title} placeholder image"></i>
                  <strong>${e.title}</strong><small>${e.detail}</small>
                </span>
              </button>`).join("")}
          </div>
        </section>
        <div class="paper-panel panel-left" aria-hidden="true"><i></i></div>
        <div class="paper-panel panel-right" aria-hidden="true"><i></i></div>
      </div>
    </section>
  </main>

  <div class="memory-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
    <div class="modal-card">
      <button class="modal-close" aria-label="Close memory">×</button>
      <div class="modal-image" role="img"></div>
      <div class="modal-copy"><p class="scene-label">A memory from my journey</p><h2 id="modal-title"></h2><p></p></div>
    </div>
  </div>
`;const g=[...document.querySelectorAll(".greeting-word")],k=document.querySelector(".begin-cue");let u=0;window.setInterval(()=>{g[u].classList.remove("is-visible"),u=(u+1)%g.length,g[u].classList.add("is-visible")},1450);const $=document.querySelector(".sakura-cursor"),F=matchMedia("(hover:hover) and (pointer:fine) and (min-width:1025px) and (prefers-reduced-motion:no-preference)").matches;let h=0,y={x:-80,y:-80},L=0;const f=new Set;F&&window.addEventListener("pointermove",e=>{if(y={x:e.clientX,y:e.clientY},h||(h=requestAnimationFrame(()=>{$.style.transform=`translate3d(${y.x}px,${y.y}px,0)`,$.classList.add("is-visible"),h=0})),performance.now()-L<110||f.size>=12)return;L=performance.now();const t=document.createElement("i");t.className="trail-petal",t.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;--drift:${(Math.random()-.5)*60}px;--spin:${(Math.random()-.5)*240}deg`,f.add(t),document.body.append(t),t.addEventListener("animationend",()=>{f.delete(t),t.remove()},{once:!0})},{passive:!0});const c=document.querySelector(".hero-scene");new IntersectionObserver(([e])=>{e.isIntersecting&&!c.classList.contains("has-grown")&&c.classList.add("has-grown")},{threshold:.28}).observe(c);const d=document.querySelector(".hero-nature"),v=new Set;let M=0;matchMedia("(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)").matches&&(c.addEventListener("pointermove",e=>{const t=c.getBoundingClientRect(),a={x:t.left+t.width*.77,y:t.top+t.height*.34},o=e.clientX-a.x,r=e.clientY-a.y,s=Math.hypot(o,r);if(s>180){d.style.setProperty("--react-x","0deg"),d.style.setProperty("--react-y","0px");return}const l=1-s/180;if(d.style.setProperty("--react-x",`${Math.max(-3,Math.min(3,-o/55*l))}deg`),d.style.setProperty("--react-y",`${-r/20*l}px`),performance.now()-M>850&&v.size<3&&Math.random()>.55){M=performance.now();const n=document.createElement("i");n.className="released-petal",n.style.cssText=`left:${68+Math.random()*22}%;top:${24+Math.random()*28}%;--petal-drift:${(Math.random()-.5)*140}px;--petal-spin:${160+Math.random()*260}deg`,v.add(n),c.append(n),n.addEventListener("animationend",()=>{v.delete(n),n.remove()},{once:!0})}},{passive:!0}),c.addEventListener("pointerleave",()=>{d.style.setProperty("--react-x","0deg"),d.style.setProperty("--react-y","0px")}));const b=document.querySelector(".door-scene");let x=0;function E(){const e=b.getBoundingClientRect(),t=b.offsetHeight-innerHeight,a=Math.max(0,Math.min(1,-e.top/t));b.style.setProperty("--door-progress",a.toFixed(3)),document.querySelector(".home-nav").classList.toggle("has-background",scrollY>innerHeight*.75),x=0}window.addEventListener("scroll",()=>{x||(x=requestAnimationFrame(E))},{passive:!0});E();const m=[...document.querySelectorAll(".memory-flower")],S=document.querySelector(".discovery-progress span");let p=0,j=null;const i=document.querySelector(".memory-modal");function H(e){Number(e.dataset.index)===p&&(e.classList.remove("is-current"),e.classList.add("is-discovered","is-previewing"),e.setAttribute("aria-current","false"),p+=1,S.textContent=String(Math.min(p+1,4)).padStart(2,"0"),m[p]?setTimeout(()=>{m[p].classList.add("is-current"),m[p].setAttribute("aria-current","step")},950):(document.querySelector(".discovery-progress").classList.add("is-complete"),S.textContent="04"))}function I(e,t){const a=q[e];j=t,i.querySelector("#modal-title").textContent=a.title,i.querySelector(".modal-copy>p:last-child").textContent=a.description;const o=i.querySelector(".modal-image");o.className=`modal-image memory-image-${a.art}`,o.setAttribute("aria-label",`${a.title} placeholder image`),i.hidden=!1,document.body.classList.add("modal-open"),requestAnimationFrame(()=>i.classList.add("is-open")),i.querySelector(".modal-close").focus()}m.forEach((e,t)=>{e.addEventListener("click",()=>{if(!e.classList.contains("is-discovered")){H(e);return}I(t,e)}),e.addEventListener("pointerenter",()=>{e.classList.contains("is-discovered")&&e.classList.add("is-previewing")}),e.addEventListener("pointerleave",()=>e.classList.remove("is-previewing"))});function w(){i.classList.remove("is-open"),document.body.classList.remove("modal-open"),setTimeout(()=>{i.hidden=!0,j?.focus()},350)}i.querySelector(".modal-close").addEventListener("click",w);i.addEventListener("click",e=>{e.target===i&&w()});window.addEventListener("keydown",e=>{e.key==="Escape"&&!i.hidden&&w(),e.key==="Tab"&&!i.hidden&&(e.preventDefault(),i.querySelector(".modal-close").focus())});matchMedia("(prefers-reduced-motion:reduce)").matches&&(k.classList.add("is-visible"),m.forEach(e=>e.classList.add("is-discovered")),document.querySelector(".discovery-progress").classList.add("is-complete"));
