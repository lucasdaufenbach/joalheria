// ---------- CATÁLOGO (dados reais do catálogo da fábrica — Aneis.pdf) ----------
const WHATSAPP_NUMBER = "5548991085300";
const GOLD_PRICE_PER_GRAM = 420; // cotação mockada, R$/g (atualizável no admin da Fase B)
const MARGIN = 1.5;              // fórmula da fábrica: Índice × Cotação × 1,5

// idx10 / idx18 = multiplicador (índice) do ouro 10k / 18k, direto do catálogo
const PRODUCTS = [
  {
    code: "AF1498", name: "Hipócrates", image: "media/AF1498.jpg",
    desc: "Inspirado na grandiosidade das joias clássicas, combina a elegância da lapidação em gota com um exuberante halo de pedras, criando uma composição de brilho intenso e sofisticação.",
    specs: [["Pedra central", "Gota 5×7mm"], ["Pedras laterais", "35 pedras"], ["Gravação", "Disponível"]],
    idx10: 2.27, idx18: 4.30,
  },
  {
    code: "AG5062", name: "Legado", image: "media/AG5062.jpg",
    desc: "Inspirado na tradição da Medicina, destaca o Bastão de Asclépio em um design elegante e atemporal. A pedra central em lapidação baguete confere brilho e personalidade à joia.",
    specs: [["Pedra central", "Baguete 5×7mm"], ["Pedras laterais", "6 × 1,25mm"], ["Gravação", "Disponível"]],
    idx10: 4.00, idx18: 7.56,
  },
  {
    code: "AG5070", name: "Lúmina", image: "media/AG5070.jpg",
    desc: "O brilho de dezesseis pedras cuidadosamente lapidadas, aliado aos delicados detalhes em ródio, cria uma joia de elegância atemporal e sofisticada.",
    specs: [["Pedras", "16 × 1,50mm"], ["Detalhe", "Acabamento em ródio"], ["Gravação", "Não disponível"]],
    idx10: 3.75, idx18: 7.10,
  },
  {
    code: "AG5020", name: "Praesidium", image: "media/AG5020.jpg",
    desc: "Com linhas marcantes e acabamento refinado, traduz a tradição da Medicina em uma joia de presença elegante. A pedra em lapidação baguete harmoniza-se ao Bastão de Asclépio.",
    specs: [["Pedra central", "Baguete 6×8mm"], ["Pedras laterais", "2 × 1,50mm"], ["Gravação", "Disponível"]],
    idx10: 2.92, idx18: 5.52,
  },
  {
    code: "AC6151", name: "Magnus", image: "media/AC6151.jpg",
    desc: "Imponente e sofisticado, evidencia a beleza da pedra central por meio de uma composição rica em brilho e proporções harmoniosas. Uma joia marcante, criada para eternizar conquistas.",
    specs: [["Pedra central", "5,00mm"], ["Demais pedras", "10 × 2mm + 8 × 1,5mm"], ["Gravação", "Disponível"]],
    idx10: 1.93, idx18: 3.65,
  },
  {
    code: "AG5063", name: "Serpente", image: "media/AG5063.jpg",
    desc: "Mais do que um detalhe, a serpente integra a própria estrutura do anel, num design exclusivo inspirado no Bastão de Asclépio. O pavê de pedras e a esmeralda central conferem imponência.",
    specs: [["Pedra central", "3,50mm"], ["Demais pedras", "21 × 1,25mm"], ["Gravação", "Não disponível"]],
    idx10: 1.71, idx18: 3.23,
  },
  {
    code: "AG5061", name: "Aeternum", image: "media/AG5061.jpg",
    desc: "A pedra central oval, envolvida por um delicado halo de pedras, traduz equilíbrio, brilho e sofisticação. Um design clássico que transforma cada detalhe em um símbolo de elegância.",
    specs: [["Pedra central", "Oval 5×7mm"], ["Demais pedras", "16 × 1,50mm"], ["Gravação", "Não disponível"]],
    idx10: 2.02, idx18: 3.82,
  },
  {
    code: "AG5017", name: "Nobilis", image: "media/AG5017.jpg",
    desc: "O brilho da pedra central em lapidação navete, envolvida por um delicado halo de pedras, cria uma composição clássica e marcante, que une elegância, presença e refinamento.",
    specs: [["Pedra central", "Navete 4×8mm"], ["Cabeçada", "12,5 × 9mm"], ["Gravação", "Não disponível"]],
    idx10: 2.03, idx18: 3.84,
  },
  {
    code: "AG5005", name: "Virtus", image: "media/AG5005.jpg",
    desc: "Clássico e sofisticado, valoriza a beleza da pedra central oval por um delicado halo de pedras. O Bastão de Asclépio completa a composição, unindo significado, tradição e elegância.",
    specs: [["Pedra central", "Oval 4×6mm"], ["Cabeçada", "9,5 × 7,5mm"], ["Gravação", "Disponível"]],
    idx10: 1.50, idx18: 2.84,
  },
  {
    code: "AG5076", name: "Ethos", image: "media/AG5076.jpg",
    desc: "A delicada pedra central oval, envolvida por um halo de vinte pedras, cria uma composição luminosa e sofisticada. Um clássico que traduz equilíbrio, delicadeza e elegância.",
    specs: [["Pedra central", "Oval 4×6mm"], ["Demais pedras", "20 × 1,00mm"], ["Gravação", "Disponível"]],
    idx10: 1.20, idx18: 2.27,
  },
  {
    code: "AG5045", name: "Salus", image: "media/AG5045.jpg",
    desc: "Incorpora a serpente ao seu design de forma elegante e exclusiva. A combinação da pedra central com o delicado conjunto de pedras laterais resulta em uma joia marcante.",
    specs: [["Pedra central", "3,00mm"], ["Demais pedras", "4×1,5 + 2×1,25 + 2×1mm"], ["Gravação", "Não disponível"]],
    idx10: 1.42, idx18: 2.70,
  },
  {
    code: "AG5077", name: "Honra", image: "media/AG5077.jpg",
    desc: "Inspirado na nobreza da Medicina, reúne a elegância da pedra central ao simbolismo do Bastão de Asclépio. Um modelo clássico que representa dedicação e o compromisso com a vida.",
    specs: [["Pedra central", "Oval 4×6mm"], ["Pedras laterais", "12 × 1,50mm"], ["Gravação", "Não disponível"]],
    idx10: 1.20, idx18: 2.27,
  },
  {
    code: "AG5009", name: "Aureus", image: "media/AG5009.jpg",
    desc: "Clássico e refinado, valoriza a elegância da pedra oval e a força simbólica do Bastão de Asclépio. Um modelo discreto, pensado para representar uma conquista lembrada por toda a vida.",
    specs: [["Pedra", "Oval 4×6mm"], ["Altura", "3,7mm"], ["Gravação", "Disponível"]],
    idx10: 2.12, idx18: 4.04,
  },
  {
    code: "AG5012", name: "Vita", image: "media/AG5012.jpg",
    desc: "Elegante em sua simplicidade, destaca a pedra central verde e o Bastão de Asclépio em uma composição equilibrada e atemporal. Simboliza a dedicação e a paixão pela Medicina.",
    specs: [["Pedra", "5×5mm"], ["Altura", "3,75mm"], ["Gravação", "Disponível"]],
    idx10: 1.87, idx18: 3.53,
  },
  {
    code: "AF1166", name: "Asclépio", image: "media/AF1166.jpg",
    desc: "Elegante e atemporal, traduz a essência da Medicina em uma joia sofisticada, desenvolvida para acompanhar toda uma carreira. Seu design clássico valoriza o brilho da pedra central.",
    specs: [["Estilo", "Clássico"], ["Gravação", "Disponível"]],
    idx10: 1.66, idx18: 3.15,
  },
  {
    code: "AF1373", name: "Galeno", image: "media/AF1373.jpg",
    desc: "Com linhas delicadas e proporções equilibradas, evidencia a beleza da pedra central oval, acompanhada por um conjunto de pedras que acrescenta brilho na medida certa.",
    specs: [["Pedra central", "Oval 4×6mm"], ["Pedras laterais", "6 × 1,50mm"], ["Gravação", "Disponível"]],
    idx10: 0.85, idx18: 1.60,
  },
  {
    code: "AG5000", name: "Salus Halo", image: "media/AG5000.jpg",
    desc: "A delicadeza da pedra central, cercada por um halo luminoso, cria uma joia de beleza atemporal. Um modelo leve e elegante, desenvolvido para celebrar conquistas.",
    specs: [["Pedra central", "3mm"], ["Demais pedras", "2mm"], ["Cabeçada", "8mm"]],
    idx10: 1.60, idx18: 3.03,
  },
  {
    code: "AG5089", name: "Lumen", image: "media/AG5089.jpg",
    desc: "A harmonia entre a pedra central e as laterais resulta em um design delicado, elegante e versátil. Uma joia criada para valorizar a simplicidade com brilho e sofisticação.",
    specs: [["Pedra central", "3,00mm"], ["Pedras laterais", "2 × 2,00mm"], ["Gravação", "Não disponível"]],
    idx10: 1.17, idx18: 2.21,
  },
  {
    code: "AG5095", name: "Praxis", image: "media/AG5095.jpg",
    desc: "Com design discreto e refinado, valoriza a beleza em uma composição minimalista e atemporal. Uma joia elegante, ideal para quem aprecia sofisticação nos pequenos detalhes.",
    specs: [["Estilo", "Minimalista"], ["Gravação", "Disponível"]],
    idx10: 1.01, idx18: 1.90,
  },
  {
    code: "LA346", name: "Prestige", image: "media/LA346.jpg",
    desc: "Minimalista e atemporal, traduz a beleza da simplicidade em um design delicado e elegante. Uma joia versátil, criada para acompanhar momentos especiais com discrição e sofisticação.",
    specs: [["Estilo", "Minimalista"], ["Gravação", "Disponível"]],
    idx10: 0.82, idx18: 1.55,
  },
  // anéis "Joelson" — sem índice de multiplicador no catálogo da fábrica, preço fixo definido pela loja
  {
    code: "J01", name: "Zircônia Cravejada", image: "media/J01.jpg",
    desc: "Peça inteiramente cravejada em zircônia, com brilho intenso do início ao fim do aro. Um design marcante para quem busca presença e sofisticação.",
    specs: [["Pedras", "12×1,75mm + 6×1,50mm + 1×2,50mm"], ["Pedra", "Apenas zircônia"], ["Gravação", "Não disponível"]],
    fixed: 2000,
  },
  {
    code: "J02", name: "Pizza Pequeno", image: "media/J02.jpg",
    desc: "Modelo compacto e discreto, com pedra verde sintética central. Uma peça leve e elegante para o uso diário.",
    specs: [["Pedra", "Verde sintética"], ["Estilo", "Pizza pequeno"]],
    fixed: 2000,
  },
  {
    code: "J04", name: "Solitário Verde", image: "media/J04.jpg",
    desc: "Design solitário e minimalista, com uma única pedra verde sintética em destaque. Elegância na simplicidade.",
    specs: [["Pedra", "Verde sintética"], ["Estilo", "Solitário"]],
    fixed: 2000,
  },
  {
    code: "J05", name: "Pizza Médio", image: "media/J05.jpg",
    desc: "Modelo de presença intermediária, com pedra verde sintética central em uma composição equilibrada.",
    specs: [["Pedra", "Verde sintética"], ["Estilo", "Pizza médio"]],
    fixed: 2000,
  },
];

function formatBRL(v){
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function estimate(idx){
  return formatBRL(idx * GOLD_PRICE_PER_GRAM * MARGIN);
}

// preço de um produto: fixo (definido pela loja) ou calculado pelo índice do ouro escolhido
function priceOf(p, gold){
  if (p.fixed != null) return formatBRL(p.fixed);
  return estimate(gold === 18 ? p.idx18 : p.idx10);
}

function waLink(product, gold, stone){
  const msg = `Olá! Tenho interesse no anel de formatura "${product.name}" (código ${product.code}), em ouro ${gold}k com pedra ${stone.toLowerCase()}. Poderiam me passar um orçamento?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function setActive(btn){
  btn.parentElement.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

const productsContainer = document.getElementById("products");
const progressContainer = document.getElementById("progress");
const gridWrap = document.getElementById("gridWrap");

// hero dot
progressContainer.appendChild(Object.assign(document.createElement("i"), { className: "active" }));

PRODUCTS.forEach((p, i) => {
  const slide = document.createElement("section");
  slide.className = "slide product";
  slide.id = `p-${i}`;

  slide.innerHTML = `
    <span class="codebadge">${p.code}</span>
    <div class="stage">
      <div class="frame" data-zoom="${p.image}" role="button" tabindex="0" aria-label="Ampliar foto de ${p.name}">
        <img src="${p.image}" alt="${p.name}">
        <span class="zoom-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>Ampliar</span>
      </div>
    </div>
    <div class="panel">
      <div class="eyebrow">Anel de Formatura · Medicina</div>
      <h2>${p.name}</h2>
      <p class="desc">${p.desc}</p>
      <div class="options">
        <div class="opt-row">
          <span class="opt-label">Ouro</span>
          <div class="seg" data-gold>
            <button class="active" data-k="10">10k</button>
            <button data-k="18">18k</button>
          </div>
        </div>
        <div class="opt-row">
          <span class="opt-label">Pedra</span>
          <div class="seg" data-stone>
            <button class="active" data-s="Natural">Natural</button>
            <button data-s="Sintética">Sintética</button>
          </div>
        </div>
      </div>
      <div class="pricebar">
        <div class="price-label">${p.fixed != null ? "Valor" : "A partir de"}</div>
        <div class="price">
          <div class="price-value" data-price>${priceOf(p, 10)}</div>
          <div class="price-est">${p.fixed != null ? "valor fixo" : "valor estimado"}</div>
        </div>
      </div>
      <button class="cta" data-cta type="button">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5C10 9 9.5 7.6 9.3 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.5 5.2L2 22l4.9-1.5c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3 .9.9-2.9-.2-.3C3.8 14.7 3.3 13.4 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7z"/></svg>
        Falar com vendedor
      </button>
    </div>
  `;

  productsContainer.appendChild(slide);

  const dot = document.createElement("i");
  progressContainer.appendChild(dot);

  let curGold = 10, curStone = "Natural";
  const priceEl = slide.querySelector("[data-price]");

  slide.querySelector("[data-gold]").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    curGold = Number(btn.dataset.k);
    setActive(btn);
    priceEl.textContent = priceOf(p, curGold);
  });

  slide.querySelector("[data-stone]").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    curStone = btn.dataset.s;
    setActive(btn);
  });

  slide.querySelector("[data-cta]").addEventListener("click", () => {
    openConfirm(waLink(p, curGold, curStone));
  });

  const frame = slide.querySelector(".frame");
  frame.addEventListener("click", () => openLightbox(p.image, p.name));
  frame.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(p.image, p.name); }
  });

  // cartão correspondente na grade
  const gcard = document.createElement("button");
  gcard.className = "gcard";
  gcard.type = "button";
  gcard.innerHTML = `
    <div class="gframe"><img src="${p.image}" alt="${p.name}"></div>
    <div class="gmeta">
      <div class="gname">${p.name}</div>
      <div class="gprice">${p.fixed != null ? "" : "a partir de "}${priceOf(p, 10)}</div>
    </div>`;
  gcard.addEventListener("click", () => goToProduct(i));
  gridWrap.appendChild(gcard);
});

// ---------- entrance animation + progress dots via IntersectionObserver ----------
const allSlides = Array.from(document.querySelectorAll(".slide"));
const allDots = Array.from(progressContainer.children);

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const idx = allSlides.indexOf(entry.target);
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        allDots.forEach((d, i) => d.classList.toggle("active", i === idx));
        // esconde as bolinhas de progresso enquanto estiver na primeira tela (hero)
        progressContainer.classList.toggle("hidden", idx === 0);
      }
    });
  },
  { threshold: 0.6 }
);

allSlides.forEach((s) => io.observe(s));

// ---------- lightbox com pinça / zoom / arraste ----------
const lb = document.getElementById("lightbox");
const lbStage = document.getElementById("lbStage");
const lbCard = document.getElementById("lbCard");
const lbImg = document.getElementById("lbImg");
const lbClose = document.getElementById("lbClose");
const lbHint = document.getElementById("lbHint");

let scale = 1, tx = 0, ty = 0;
const MIN_SCALE = 1, MAX_SCALE = 5;
const pointers = new Map();
let startDist = 0, startScale = 1;      // estado no início da pinça
let panStart = null;                    // {x,y,tx,ty} no início do arraste
let lastTap = 0;
let downX = 0, downY = 0;                // ponto onde o toque começou
let gestureMoved = false;               // virou true se houve arraste/pinça (não é um toque simples)

function applyTransform() {
  lbCard.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
}
function resetTransform() { scale = 1; tx = 0; ty = 0; applyTransform(); }

function openLightbox(src, alt) {
  lbImg.src = src;
  lbImg.alt = alt || "";
  resetTransform();
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  pointers.clear();
}

function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }

lbStage.addEventListener("pointerdown", (e) => {
  lbStage.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

  if (pointers.size === 2) {
    const [p1, p2] = [...pointers.values()];
    startDist = dist(p1, p2);
    startScale = scale;
    panStart = null;
    gestureMoved = true;                 // dois dedos = gesto, nunca "toque para fechar"
  } else if (pointers.size === 1) {
    panStart = { x: e.clientX, y: e.clientY, tx, ty };
    downX = e.clientX; downY = e.clientY;
    gestureMoved = false;
    // detecção de toque duplo
    const now = Date.now();
    if (now - lastTap < 300) {
      scale = scale > 1 ? 1 : 2.5;
      if (scale === 1) { tx = 0; ty = 0; }
      applyTransform();
      lastTap = 0;
    } else {
      lastTap = now;
    }
  }
});

lbStage.addEventListener("pointermove", (e) => {
  if (!pointers.has(e.pointerId)) return;
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (Math.hypot(e.clientX - downX, e.clientY - downY) > 8) gestureMoved = true;

  if (pointers.size === 2) {
    const [p1, p2] = [...pointers.values()];
    const d = dist(p1, p2);
    if (startDist > 0) {
      scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, startScale * (d / startDist)));
      if (scale === 1) { tx = 0; ty = 0; }
      applyTransform();
    }
  } else if (pointers.size === 1 && panStart && scale > 1) {
    tx = panStart.tx + (e.clientX - panStart.x);
    ty = panStart.ty + (e.clientY - panStart.y);
    applyTransform();
  }
});

function endPointer(e) {
  const upX = e.clientX, upY = e.clientY;
  pointers.delete(e.pointerId);
  if (pointers.size < 2) startDist = 0;
  if (pointers.size === 0) {
    panStart = null;
    // toque simples fora da moldura → fecha (igual ao X)
    if (!gestureMoved) {
      const r = lbCard.getBoundingClientRect();
      const foraDaMoldura = upX < r.left || upX > r.right || upY < r.top || upY > r.bottom;
      if (foraDaMoldura) { closeLightbox(); return; }
    }
  }
  if (scale <= 1) { tx = 0; ty = 0; applyTransform(); }
}
lbStage.addEventListener("pointerup", endPointer);
lbStage.addEventListener("pointercancel", endPointer);

// duplo clique no desktop
lbStage.addEventListener("dblclick", (e) => {
  e.preventDefault();
  scale = scale > 1 ? 1 : 2.5;
  if (scale === 1) { tx = 0; ty = 0; }
  applyTransform();
});

// zoom com a roda do mouse (desktop)
lbStage.addEventListener("wheel", (e) => {
  e.preventDefault();
  scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale - e.deltaY * 0.0015));
  if (scale === 1) { tx = 0; ty = 0; }
  applyTransform();
}, { passive: false });

lbClose.addEventListener("click", closeLightbox);

// ---------- modal de confirmação antes do WhatsApp ----------
const confirmEl = document.getElementById("confirm");
const confirmOk = document.getElementById("confirmOk");
const confirmCancel = document.getElementById("confirmCancel");
let pendingWa = null;

function openConfirm(link) {
  pendingWa = link;
  confirmEl.classList.add("open");
  confirmEl.setAttribute("aria-hidden", "false");
}
function closeConfirm() {
  confirmEl.classList.remove("open");
  confirmEl.setAttribute("aria-hidden", "true");
  pendingWa = null;
}
confirmOk.addEventListener("click", () => {
  const link = pendingWa;
  closeConfirm();
  if (link) window.open(link, "_blank", "noopener");
});
confirmCancel.addEventListener("click", closeConfirm);
confirmEl.addEventListener("click", (e) => { if (e.target === confirmEl) closeConfirm(); });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeLightbox(); closeConfirm(); }
});

// ---------- alternância de visualização (um por vez / grade) ----------
const viewToggle = document.getElementById("viewToggle");
const feedEl = document.getElementById("feed");

function setView(view) {
  viewToggle.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
  document.body.classList.toggle("mode-grid", view === "grid");
}
function goToProduct(i) {
  setView("feed");
  const slide = document.getElementById("p-" + i);
  requestAnimationFrame(() => {
    feedEl.scrollTo({ top: slide.offsetTop, behavior: "instant" });
    slide.classList.add("in-view");
  });
}
viewToggle.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (btn) setView(btn.dataset.view);
});

// ---------- carrossel do hero (coverflow 3D) ----------
(() => {
  const wrap = document.getElementById("heroCarousel");
  const track = document.getElementById("carouselTrack");
  if (!wrap || !track) return;

  const N = PRODUCTS.length;
  let active = 0;
  let spacing = 90;      // px entre itens, recalculado no layout()
  let dragPx = 0;
  let dragging = false;
  let downX = 0, dragMoved = false;
  let autoplayTimer = null;
  let resumeTimer = null;

  const items = PRODUCTS.map((p, i) => {
    const el = document.createElement("div");
    el.className = "carousel-item";
    el.innerHTML = `<img src="${p.image}" alt="${p.name}">`;
    track.appendChild(el);
    el.addEventListener("click", () => onItemClick(i));
    return el;
  });

  function shortestOffset(i, from) {
    let raw = i - from;
    if (raw > N / 2) raw -= N;
    if (raw < -N / 2) raw += N;
    return raw;
  }

  function render() {
    items.forEach((el, i) => {
      const raw = shortestOffset(i, active);
      const x = raw * spacing + dragPx;
      const abs = Math.abs(raw);
      const scale = Math.max(0.6, 1 - abs * 0.17);
      const rotate = Math.max(-34, Math.min(34, raw * -28));
      const opacity = abs > 2.4 ? 0 : Math.max(0, 1 - abs * 0.32);
      el.style.transform = `translate(-50%,-50%) translateX(${x}px) scale(${scale}) rotateY(${rotate}deg)`;
      el.style.opacity = opacity;
      el.style.zIndex = String(Math.round(100 - abs * 10));
      el.style.pointerEvents = opacity > 0.08 ? "auto" : "none";
    });
  }

  function layout() {
    spacing = track.clientWidth * 0.27;
    render();
  }

  function goTo(i) {
    active = ((i % N) + N) % N;
    render();
  }
  function next() { goTo(active + 1); }
  function prev() { goTo(active - 1); }

  function onItemClick(i) {
    if (dragMoved) return;              // era um arraste, não um toque
    stopAutoplay();
    goToProduct(i);                     // toque em qualquer item → vai direto ao produto
  }

  // ---------- autoplay ----------
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(next, 3200);
  }
  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
  function scheduleResume() {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(startAutoplay, 4000);
  }

  // ---------- arraste (toque / mouse) ----------
  track.addEventListener("pointerdown", (e) => {
    try { track.setPointerCapture(e.pointerId); } catch (_) {}
    dragging = true; dragMoved = false;
    downX = e.clientX;
    wrap.classList.add("dragging");
    stopAutoplay();
  });
  track.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    dragPx = e.clientX - downX;
    if (Math.abs(dragPx) > 6) dragMoved = true;
    render();
  });
  function endDrag(e) {
    if (!dragging) return;
    dragging = false;
    wrap.classList.remove("dragging");
    const threshold = spacing * 0.28;
    if (dragPx <= -threshold) next();
    else if (dragPx >= threshold) prev();
    dragPx = 0;
    render();
    scheduleResume();
  }
  track.addEventListener("pointerup", endDrag);
  track.addEventListener("pointercancel", endDrag);

  // ---------- roda do mouse / trackpad ----------
  let wheelLocked = false;
  wrap.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (wheelLocked) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 4) return;
    wheelLocked = true;
    stopAutoplay();
    if (delta > 0) next(); else prev();
    scheduleResume();
    setTimeout(() => { wheelLocked = false; }, 380);
  }, { passive: false });

  window.addEventListener("resize", layout);
  layout();
  startAutoplay();
})();
