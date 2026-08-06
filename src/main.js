import './style.css';
import './home.css';
import { memories } from './memories.js';

const flowerSvg = (className = '') => `
  <svg class="${className}" viewBox="-30 -30 60 60" aria-hidden="true">
    ${[0,72,144,216,288].map(a => `<ellipse rx="12" ry="20" cy="-12" transform="rotate(${a})"/>`).join('')}
    <circle r="6"/>
  </svg>`;

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

document.querySelector('#app').innerHTML = `
  <header class="home-nav" aria-label="Primary navigation">
    <a class="home-mark" href="#greeting" aria-label="Queenie, back to beginning">Queenie<span>.</span></a>
    <a class="journey-link" href="#hero">The beginning <span>↓</span></a>
  </header>

  <div class="sakura-cursor" aria-hidden="true">${cursorFlowerSvg()}</div>

  <main class="home-page">
    <section id="greeting" class="greeting-scene" aria-label="Welcome">
      <div class="intro-petals" aria-hidden="true">${Array.from({length:6},(_,i)=>`<i style="--i:${i}"></i>`).join('')}</div>
      <p class="greeting-kicker">Welcome</p>
      <div class="greeting-list" aria-live="polite">
        ${['Hello','你好','こんにちは','안녕하세요','Bonjour'].map((word,i)=>`<p class="greeting-word ${i===0?'is-visible':''}">${word}</p>`).join('')}
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
          <div class="hero-scroll"><span>The story begins here</span><i></i></div>
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
              ${treeFlowers.map(([x,y],i)=>`<g class="ambient-flower" transform="translate(${x*7} ${y*7.2}) scale(${i%3===0?1.1:.82})">${[0,72,144,216,288].map(a=>`<ellipse rx="12" ry="20" cy="-12" transform="rotate(${a})"/>`).join('')}<circle r="5"/></g>`).join('')}
            </svg>
            <div class="tree-sway" aria-hidden="true"></div>
            ${memories.map((memory,i)=>`
              <button class="memory-flower ${i===0?'is-current':''}" data-index="${i}" style="--tree-x:${memory.tree.x}%;--tree-y:${memory.tree.y}%;--final-x:${memory.position.x}%;--final-y:${memory.position.y}%" aria-label="Discover ${memory.title}" aria-current="${i===0?'step':'false'}">
                ${flowerSvg('memory-flower-svg')}
                <span class="memory-preview">
                  <i class="memory-image memory-image-${memory.art}" role="img" aria-label="${memory.title} placeholder image"></i>
                  <strong>${memory.title}</strong><small>${memory.detail}</small>
                </span>
              </button>`).join('')}
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
let scrollFrame = 0;
function updateScrollScenes() {
  const rect = doorScene.getBoundingClientRect();
  const distance = doorScene.offsetHeight - innerHeight;
  const progress = Math.max(0, Math.min(1, -rect.top / distance));
  doorScene.style.setProperty('--door-progress', progress.toFixed(3));
  document.querySelector('.home-nav').classList.toggle('has-background', scrollY > innerHeight * .75);
  scrollFrame = 0;
}
window.addEventListener('scroll', () => {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollScenes);
}, { passive:true });
updateScrollScenes();

const flowers = [...document.querySelectorAll('.memory-flower')];
const progressLabel = document.querySelector('.discovery-progress span');
let discovered = 0;
let modalTrigger = null;
const modal = document.querySelector('.memory-modal');

function discoverFlower(button) {
  const index = Number(button.dataset.index);
  if (index !== discovered) return;
  button.classList.remove('is-current');
  button.classList.add('is-discovered', 'is-previewing');
  button.setAttribute('aria-current', 'false');
  discovered += 1;
  progressLabel.textContent = String(Math.min(discovered + 1, 4)).padStart(2, '0');
  if (flowers[discovered]) {
    setTimeout(() => {
      flowers[discovered].classList.add('is-current');
      flowers[discovered].setAttribute('aria-current', 'step');
    }, 950);
  } else {
    document.querySelector('.discovery-progress').classList.add('is-complete');
    progressLabel.textContent = '04';
  }
}

function openMemory(index, trigger) {
  const memory = memories[index];
  modalTrigger = trigger;
  modal.querySelector('#modal-title').textContent = memory.title;
  modal.querySelector('.modal-copy>p:last-child').textContent = memory.description;
  const image = modal.querySelector('.modal-image');
  image.className = `modal-image memory-image-${memory.art}`;
  image.setAttribute('aria-label', `${memory.title} placeholder image`);
  modal.hidden = false;
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => modal.classList.add('is-open'));
  modal.querySelector('.modal-close').focus();
}

flowers.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('is-discovered')) {
      discoverFlower(button);
      return;
    }
    openMemory(index, button);
  });
  button.addEventListener('pointerenter', () => {
    if (button.classList.contains('is-discovered')) button.classList.add('is-previewing');
  });
  button.addEventListener('pointerleave', () => button.classList.remove('is-previewing'));
});

function closeModal() {
  modal.classList.remove('is-open');
  document.body.classList.remove('modal-open');
  setTimeout(() => { modal.hidden = true; modalTrigger?.focus(); }, 350);
}
modal.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
window.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.hidden) closeModal();
  if (event.key === 'Tab' && !modal.hidden) {
    event.preventDefault();
    modal.querySelector('.modal-close').focus();
  }
});

if (matchMedia('(prefers-reduced-motion:reduce)').matches) {
  beginCue.classList.add('is-visible');
  flowers.forEach(button => button.classList.add('is-discovered'));
  document.querySelector('.discovery-progress').classList.add('is-complete');
}
