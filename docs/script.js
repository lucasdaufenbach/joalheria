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

function waLink(product){
  const msg = `Olá! Tenho interesse no anel de formatura "${product.name}" (código ${product.code}). Poderiam me passar um orçamento?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const productsContainer = document.getElementById("products");
const progressContainer = document.getElementById("progress");

// hero dot
progressContainer.appendChild(Object.assign(document.createElement("i"), { className: "active" }));

PRODUCTS.forEach((p, i) => {
  const slide = document.createElement("section");
  slide.className = "slide product";
  slide.id = `p-${i}`;

  slide.innerHTML = `
    <span class="codebadge">${p.code}</span>
    <div class="stage">
      <div class="frame"><img src="${p.image}" alt="${p.name}"></div>
    </div>
    <div class="panel">
      <div class="eyebrow">Anel de Formatura · Medicina</div>
      <h2>${p.name}</h2>
      <p class="desc">${p.desc}</p>
      <div class="specs">
        ${p.specs.map(([label, value]) => `<div class="spec"><span class="k">${label}</span><span class="v">${value}</span></div>`).join("")}
      </div>
      <div class="pricebar">
        <div class="gold-toggle" data-toggle>
          <button class="active" data-k="10">Ouro 10k</button>
          <button data-k="18">Ouro 18k</button>
        </div>
        <div class="price">
          <div class="price-label">A partir de</div>
          <div class="price-value" data-price>${estimate(p.idx10)}</div>
          <div class="price-est">valor estimado</div>
        </div>
      </div>
      <a class="cta" href="${waLink(p)}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5C10 9 9.5 7.6 9.3 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.5 5.2L2 22l4.9-1.5c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3 .9.9-2.9-.2-.3C3.8 14.7 3.3 13.4 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7z"/></svg>
        Falar com vendedor
      </a>
    </div>
  `;

  productsContainer.appendChild(slide);

  const dot = document.createElement("i");
  progressContainer.appendChild(dot);

  const toggle = slide.querySelector("[data-toggle]");
  const priceEl = slide.querySelector("[data-price]");
  toggle.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    toggle.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const idx = btn.dataset.k === "10" ? p.idx10 : p.idx18;
    priceEl.textContent = estimate(idx);
  });
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
