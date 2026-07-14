// ---------- conteúdo da história, em segmentos (estilo stories) ----------
// theme: 'dark' | 'light' — alterna para criar hierarquia visual entre emoção/produto
// chapter: agrupa os segmentos na barra de progresso (pequeno respiro visual entre capítulos)
const SEGMENTS = [
  {
    type: "cover", theme: "dark", chapter: 0,
    eyebrow: "DALEFFE · UMA HISTÓRIA",
    title: "Por que uma joalheria de Criciúma decidiu criar uma coleção exclusiva para médicos?",
    hint: "toque para começar",
    duration: 5200,
  },
  {
    type: "chapter", theme: "dark", chapter: 1,
    num: "CAPÍTULO 01",
    title: "Tudo começou muito antes desta loja existir.",
  },
  {
    type: "text", theme: "dark", chapter: 1,
    body: [
      "Há mais de meio século, fazemos parte da história de Criciúma.",
      "Construímos uma reputação baseada em confiança, em atendimento próximo e em uma seleção cuidadosa de joias.",
    ],
  },
  {
    type: "timeline", theme: "dark", chapter: 1,
    caption: "Para ser mais exatos:",
    year: "1971",
    desc: "Nasce a Relojoaria Daleffe.",
    duration: 4200,
  },
  {
    type: "text", theme: "dark", chapter: 1,
    body: [
      "Nossa história sempre aconteceu dentro da loja.",
      "Era ali que recebíamos nossos clientes — um por um.",
    ],
  },
  {
    type: "chapter", theme: "dark", chapter: 2,
    num: "CAPÍTULO 02",
    title: "Então percebemos que faltava alguma coisa.",
  },
  {
    type: "text", theme: "dark", chapter: 2,
    body: [
      "Quando a segunda geração da família entrou na faculdade de Medicina, acompanhamos de perto uma jornada de estudos, plantões, amizades e conquistas.",
    ],
  },
  {
    type: "text", theme: "dark", chapter: 2, emphasis: true,
    body: [
      "Mas, na hora de escolher o símbolo dessa trajetória, encontramos catálogos genéricos, pouca personalização — e um processo frio para um momento tão importante.",
    ],
    duration: 6400,
  },
  {
    type: "chapter", theme: "dark", chapter: 3,
    num: "CAPÍTULO 03",
    title: "Foi assim que nasceu esta coleção.",
  },
  {
    type: "text", theme: "dark", chapter: 3,
    body: [
      "Decidimos criar exatamente a experiência que gostaríamos de encontrar.",
      "Uma coleção exclusiva para Medicina — sem centenas de modelos desconectados, sem escolhas complicadas.",
      "Apenas anéis cuidadosamente selecionados. E totalmente personalizáveis.",
    ],
    duration: 6800,
  },
  {
    type: "config", theme: "light", chapter: 4,
    eyebrow: "CAPÍTULO 04",
    title: "Cada anel é único.",
    steps: ["Escolha o ouro", "Escolha a pedra", "Escolha os detalhes", "Sua joia exclusiva"],
    bg: "media/AF1498.jpg",
    duration: 7200,
  },
  {
    type: "chapter", theme: "dark", chapter: 5,
    num: "CAPÍTULO 05",
    title: "Tradição não significa fazer tudo como sempre foi.",
  },
  {
    type: "text", theme: "dark", chapter: 5,
    body: [
      "Significa manter o mesmo cuidado de sempre, enquanto encontramos novas formas de atender melhor.",
      "Hoje, unimos décadas de joalheria à tecnologia — para médicos de todo o Brasil.",
    ],
    duration: 6200,
  },
  {
    type: "people", theme: "light", chapter: 6,
    eyebrow: "CAPÍTULO 06",
    title: "Desenvolvido por quem vive esse momento.",
    left: { label: "A tradição", sub: "+ de 50 anos de joalheria" },
    right: { label: "A vivência", sub: "A trajetória até a Medicina" },
    duration: 5600,
  },
  {
    type: "text", theme: "light", chapter: 6,
    body: [
      "Este projeto nasceu da união de duas histórias.",
      "De um lado, a tradição de mais de cinco décadas da Daleffe. Do outro, a vivência de quem está prestes a concluir a Medicina — e entende o peso desse momento.",
      "A tecnologia entrou para aproximar as duas. E tornar a escolha do anel tão especial quanto a própria conquista.",
    ],
    duration: 7000,
  },
  {
    type: "final", theme: "dark", chapter: 7,
    bg: "media/AF1498.jpg",
    body: [
      "Alguns símbolos atravessam toda uma vida.",
      "Esperamos que o seu seja um deles.",
    ],
    duration: 6600,
  },
  {
    type: "end", theme: "dark", chapter: 8,
    tagline: "Desde 1971, celebrando histórias.\nAgora também fazendo parte da sua.",
    duration: Infinity,
  },
];

// ---------- duração adaptável por quantidade de texto (padrão tipo Instagram) ----------
function computeDuration(seg) {
  if (seg.duration) return seg.duration;
  const words = (seg.body || []).join(" ").split(/\s+/).filter(Boolean).length;
  return Math.min(7200, Math.max(3400, words * 260));
}

// ---------- templates por tipo de slide ----------
function renderSlide(seg, i) {
  const el = document.createElement("div");
  el.className = `slide slide-${seg.type} ${seg.theme}`;
  el.dataset.index = i;

  const bgHtml = seg.bg ? `<div class="bg-photo" style="background-image:url('${seg.bg}')"></div>` : "";

  if (seg.type === "cover") {
    el.innerHTML = `
      ${bgHtml}
      <div class="eyebrow-label reveal" style="animation-delay:.1s">${seg.eyebrow}</div>
      <h1 class="cover-title reveal" style="animation-delay:.28s">${seg.title}</h1>
      <div class="cover-hint reveal" style="animation-delay:.9s">${seg.hint}</div>
    `;
  } else if (seg.type === "chapter") {
    el.innerHTML = `
      ${bgHtml}
      <div class="chapter-num reveal" style="color:var(--gold-soft);animation-delay:.05s">${seg.num}</div>
      <div class="chapter-title reveal" style="animation-delay:.22s">${seg.title}</div>
    `;
  } else if (seg.type === "text") {
    if (seg.emphasis) el.classList.add("emphasis");
    el.innerHTML = `
      ${bgHtml}
      <div class="text-body">
        ${seg.body.map((p, idx) => `<p class="reveal" style="animation-delay:${0.08 + idx * 0.16}s">${p}</p>`).join("")}
      </div>
    `;
  } else if (seg.type === "timeline") {
    el.innerHTML = `
      ${bgHtml}
      <div class="tl-caption reveal" style="animation-delay:.05s">${seg.caption}</div>
      <div class="tl-line reveal" style="animation-delay:.2s"></div>
      <div class="tl-year reveal" style="animation-delay:.32s">${seg.year}</div>
      <div class="tl-desc reveal" style="animation-delay:.6s">${seg.desc}</div>
    `;
  } else if (seg.type === "config") {
    el.innerHTML = `
      ${bgHtml}
      <div class="eyebrow-label reveal" style="animation-delay:.05s">${seg.eyebrow}</div>
      <div class="config-title reveal" style="animation-delay:.18s">${seg.title}</div>
      <div class="config-steps">
        ${seg.steps.map((s, idx) => `
          ${idx > 0 ? '<div class="connector"></div>' : ""}
          <div class="config-step ${idx === seg.steps.length - 1 ? "final" : ""} reveal" style="animation-delay:${0.35 + idx * 0.14}s">
            <div class="dot">${idx === seg.steps.length - 1 ? "✓" : idx + 1}</div>
            <div class="label">${s}</div>
          </div>
        `).join("")}
      </div>
    `;
  } else if (seg.type === "people") {
    el.innerHTML = `
      ${bgHtml}
      <div class="eyebrow-label reveal" style="animation-delay:.05s">${seg.eyebrow}</div>
      <div class="people-title reveal" style="animation-delay:.18s">${seg.title}</div>
      <div class="people-split reveal" style="animation-delay:.4s">
        <div class="people-panel">
          <div class="people-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a6 6 0 0012 0V3"/><path d="M12 17v4"/><path d="M8 21h8"/></svg></div>
          <div class="people-label">${seg.left.label}</div>
          <div class="people-sub">${seg.left.sub}</div>
        </div>
        <div class="people-divider"></div>
        <div class="people-panel">
          <div class="people-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="12" rx="1.5"/><path d="M2 19h20"/><path d="M9 19v-2h6v2"/></svg></div>
          <div class="people-label">${seg.right.label}</div>
          <div class="people-sub">${seg.right.sub}</div>
        </div>
      </div>
    `;
  } else if (seg.type === "final") {
    el.innerHTML = `
      ${bgHtml}
      <div class="final-body">
        ${seg.body.map((p, idx) => `<p class="reveal" style="animation-delay:${0.15 + idx * 0.5}s">${p}</p>`).join("")}
      </div>
    `;
  } else if (seg.type === "end") {
    el.innerHTML = `
      <img class="end-mark reveal" style="animation-delay:.1s" src="media/logo.png" alt="Daleffe">
      <div class="end-tag reveal" style="animation-delay:.35s">${seg.tagline.replace("\n", "<br>")}</div>
      <div class="end-links reveal" style="animation-delay:.6s">
        <a class="end-cta" href="index.html">Ver a coleção</a>
        <button class="end-replay" id="replayBtn" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
          Assistir novamente
        </button>
      </div>
    `;
  }

  return el;
}

// ---------- motor de stories ----------
const stage = document.getElementById("storyStage");
const progressBar = document.getElementById("storyProgress");
const tapLeft = document.getElementById("tapLeft");
const tapRight = document.getElementById("tapRight");
const closeBtn = document.getElementById("storyClose");
const storiesEl = document.getElementById("stories");

let current = 0;
let slideEls = [];
let segDurations = SEGMENTS.map(computeDuration);
let advanceTimer = null;
let paused = false;
let remaining = 0;    // ms restantes no segmento atual (para retomar após pausa)
let segStartedAt = 0;

// monta os slides
SEGMENTS.forEach((seg, i) => {
  const el = renderSlide(seg, i);
  stage.appendChild(el);
  slideEls.push(el);
});

// monta a barra de progresso (um segmento por tela, mesma margem entre todas)
const barEls = SEGMENTS.map((seg, i) => {
  const b = document.createElement("div");
  b.className = "seg";
  b.innerHTML = `<div class="fill"></div>`;
  progressBar.appendChild(b);
  return b;
});

function clearTimer() {
  if (advanceTimer) { clearTimeout(advanceTimer); advanceTimer = null; }
}

function goTo(i, { replay = false } = {}) {
  if (i < 0) i = 0;
  if (i >= SEGMENTS.length) { showEnd(); return; }

  clearTimer();
  slideEls[current]?.classList.remove("active");
  current = i;
  const el = slideEls[current];
  el.classList.add("active");

  // reinicia animações de entrada (força reflow)
  el.querySelectorAll(".reveal").forEach((r) => {
    r.style.animation = "none";
    void r.offsetWidth;
    r.style.animation = "";
  });
  const bg = el.querySelector(".bg-photo");
  if (bg) { bg.style.animation = "none"; void bg.offsetWidth; bg.style.animation = ""; }

  // barra de progresso
  barEls.forEach((b, idx) => {
    b.classList.toggle("done", idx < current);
    b.classList.toggle("active", idx === current);
    const fill = b.querySelector(".fill");
    fill.style.animation = "none";
    void fill.offsetWidth;
    fill.style.animation = "";
  });

  const dur = segDurations[current];
  document.documentElement.style.setProperty("--dur", dur === Infinity ? "0ms" : dur + "ms");
  el.style.setProperty("--dur", dur === Infinity ? "0ms" : dur + "ms");

  remaining = dur;
  segStartedAt = performance.now();
  paused = false;
  progressBar.classList.remove("paused");

  // no slide final, libera os links/botões: as zonas de toque ficam por cima
  // de todo o conteúdo (para navegar tocando em qualquer lugar) e bloqueavam os cliques
  storiesEl.classList.toggle("no-tap", SEGMENTS[current].type === "end");

  if (dur !== Infinity) {
    advanceTimer = setTimeout(next, dur);
  }
}

function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }

function showEnd() { /* último segmento já é a tela de encerramento */ }

function pauseStory() {
  if (paused || current >= SEGMENTS.length - 1) return;
  paused = true;
  clearTimer();
  const elapsed = performance.now() - segStartedAt;
  remaining = Math.max(0, remaining - elapsed);
  progressBar.classList.add("paused");
}
function resumeStory() {
  if (!paused) return;
  paused = false;
  progressBar.classList.remove("paused");
  segStartedAt = performance.now();
  const dur = segDurations[current];
  if (dur !== Infinity) advanceTimer = setTimeout(next, remaining);
}

// ---------- interação: toque rápido = navega · segurar = pausa ----------
let holdTimer = null;
let isHold = false;
let downX = 0, downY = 0;

function onDown(e) {
  isHold = false;
  downX = e.clientX; downY = e.clientY;
  holdTimer = setTimeout(() => { isHold = true; pauseStory(); }, 180);
}
function onMove(e) {
  if (Math.hypot(e.clientX - downX, e.clientY - downY) > 12) {
    clearTimeout(holdTimer);
  }
}
function onUp(zone) {
  clearTimeout(holdTimer);
  if (isHold) { resumeStory(); return; }
  if (zone === "left") prev(); else next();
}

[tapLeft, tapRight].forEach((zone) => {
  const which = zone === tapLeft ? "left" : "right";
  zone.addEventListener("pointerdown", onDown);
  zone.addEventListener("pointermove", onMove);
  zone.addEventListener("pointerup", () => onUp(which));
  zone.addEventListener("pointercancel", resumeStory);
});

// teclado (conveniência no desktop)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  else if (e.key === "ArrowLeft") prev();
  else if (e.key === " ") { e.preventDefault(); paused ? resumeStory() : pauseStory(); }
  else if (e.key === "Escape") window.location.href = "index.html";
});

// pausa automaticamente se o usuário trocar de aba
document.addEventListener("visibilitychange", () => {
  if (document.hidden) pauseStory();
});

closeBtn.addEventListener("click", () => { window.location.href = "index.html"; });

stage.addEventListener("click", (e) => {
  if (e.target && e.target.id === "replayBtn") { goTo(0); }
});

goTo(0);
