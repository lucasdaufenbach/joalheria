# Joalheria Daleffe — Anéis de Formatura em Medicina

Vitrine online exclusiva para anéis de formatura em Medicina, vendidos sob
encomenda pela Joalheria Daleffe (Criciúma, SC). A apresentação é em formato
de feed vertical em tela cheia (estilo Instagram/Reels), com valor estimado por
peça e contato direto com o vendedor via WhatsApp.

## Status

- **Fase A — mockup estático (atual):** protótipo de design em `docs/`, HTML/CSS/JS
  puro, com produtos de exemplo. Serve para validar a experiência visual.
- **Fase B — projeto completo (futuro):** Next.js + banco de dados + painel
  administrativo com cadastro/edição/exclusão de produtos e cálculo de preço a
  partir da cotação do ouro. Ficará na raiz do repositório.

## Estrutura

```
docs/            → site publicado (GitHub Pages serve esta pasta)
  index.html
  styles.css
  script.js
  media/         → logo + fotos dos anéis usadas no mockup
fontes/          → material-fonte (NÃO versionado): catálogo de preços da
                   fábrica, fotos originais, logo original. Fica só na máquina.
```

## Rodar localmente

O site é estático. Abra `docs/index.html` direto no navegador, ou sirva a pasta:

```bash
cd docs
python -m http.server 8000
# acesse http://localhost:8000
```

## Publicar no GitHub Pages

1. Faça commit e push da pasta `docs/`.
2. No GitHub: **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Branch: `main` (ou `master`), pasta: **/docs**. Salve.
5. Em ~1 min o site fica no ar em `https://lucasdaufenbach.github.io/joalheria/`.

## Precificação (referência)

O valor estimado exibido segue a fórmula da fábrica:

```
valor estimado = índice do anel × cotação do ouro (R$/g) × margem
```

O índice varia conforme o tipo de ouro (10k / 18k) e é específico de cada anel.
No mockup esses valores são fixos, apenas para demonstração. A cotação e a
margem reais serão configuráveis no painel administrativo da Fase B.
