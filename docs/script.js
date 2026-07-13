// ---------- MOCK DATA (apenas para validar o design — não é o CRUD real) ----------
const WHATSAPP_NUMBER = "5548991085300";
const GOLD_PRICE_PER_GRAM = 420; // cotação mockada, R$/g
const MARGIN = 1.75; // dentro da faixa 1,5–2 pedida

const PRODUCTS = [
  {
    code: "AF1498",
    name: "Gênesis",
    image: "media/ring-1.png",
    desc: "Pedra central em lapidação gota, envolvida por um exuberante halo que intensifica o brilho. O Bastão de Asclépio marca, com distinção, a dedicação da carreira médica.",
    specs: [["Pedra central", "Gota 5×7mm"], ["Halo", "35 pedras"], ["Gravação", "Sob consulta"]],
    idx10: 2.27, idx18: 4.3,
  },
  {
    code: "AG5062",
    name: "Excelência",
    image: "media/ring-2.png",
    desc: "Design imponente e acabamento refinado. A pedra central em lapidação baguete destaca-se pelo brilho intenso, enquanto o Bastão de Asclépio, gravado de forma discreta, completa a peça.",
    specs: [["Pedra central", "Baguete 5×7mm"], ["Pedras laterais", "6 × 1,25mm"], ["Gravação", "Disponível"]],
    idx10: 4.00, idx18: 7.56,
  },
  {
    code: "AG5070",
    name: "Juramento",
    image: "media/ring-3.png",
    desc: "Um medalhão contemporâneo com o símbolo da Medicina em relevo, emoldurado por pedras cravejadas com detalhe em ródio — para quem celebra a formatura com um design mais autoral.",
    specs: [["Pedras", "16 × 1,50mm"], ["Detalhe", "Acabamento em ródio"], ["Gravação", "Peça sem gravação"]],
    idx10: 3.75, idx18: 7.10,
  },
  {
    code: "AG5005",
    name: "Tradição",
    image: "media/ring-4.png",
    desc: "Um modelo clássico e sofisticado. A pedra central em lapidação oval é realçada por um delicado halo, enquanto o Bastão de Asclépio confere autenticidade e simbolismo à joia.",
    specs: [["Pedra central", "Oval 4×6mm"], ["Cabeçada", "9,5 × 7,5mm"], ["Gravação", "Disponível"]],
    idx10: 1.50, idx18: 2.84,
  },
  {
    code: "AC6151",
    name: "Vocação",
    image: "media/ring-5.png",
    desc: "Duas linhas de ouro entrelaçadas simbolizam o encontro entre ciência e cuidado. Cravejado do início ao fim, com uma pedra central que assina a conquista da formatura.",
    specs: [["Pedras", "10 × 2mm / 8 × 1,5mm"], ["Pedra central", "5mm"], ["Gravação", "Disponível"]],
    idx10: 1.93, idx18: 3.65,
  },
  {
    code: "AG5089",
    name: "Essência",
    image: "media/ring-6.png",
    desc: "Minimalista e atemporal. Um cluster de pedras verdes compõe uma peça discreta, pensada para o dia a dia do médico que prefere a elegância sem excessos.",
    specs: [["Pedras", "2 × 2mm + 1 × 3mm"], ["Estilo", "Cluster minimalista"], ["Gravação", "Peça sem gravação"]],
    idx10: 1.17, idx18: 2.21,
  },
];

function formatBRL(v){
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function estimate(idx){
  return formatBRL(idx * GOLD_PRICE_PER_GRAM * MARGIN);
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
        <div class="price-label">A partir de</div>
        <div class="price">
          <div class="price-value" data-price>${estimate(p.idx10)}</div>
          <div class="price-est">valor estimado</div>
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
    priceEl.textContent = estimate(curGold === 10 ? p.idx10 : p.idx18);
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
      <div class="gprice">a partir de ${estimate(p.idx10)}</div>
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
  } else if (pointers.size === 1) {
    panStart = { x: e.clientX, y: e.clientY, tx, ty };
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
  pointers.delete(e.pointerId);
  if (pointers.size < 2) startDist = 0;
  if (pointers.size === 0) panStart = null;
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
lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });

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
