# Handoff: rssviana — Página Pessoal

## Overview
Site pessoal de @rssviana concentrando quatro áreas: página inicial (apresentação pessoal), **Meus 2 centavos** (blog de artigos), **ByteCode** (empresa de TI) e **ByteFotos** (galeria de fotografia). Design minimalista com tipografia serif, fundo pastel e dark mode.

## About the Design Files
Os arquivos HTML neste pacote são **referências de design criadas como protótipos** — eles mostram a aparência e o comportamento pretendidos, mas não são código de produção para copiar diretamente. A tarefa é **recriar esses designs no ambiente do seu codebase** (Next.js, React, etc.) usando os padrões e bibliotecas estabelecidos. Se não existir um ambiente, Next.js + Tailwind CSS é uma boa escolha para este projeto.

## Fidelity
**High-fidelity (hifi)** — Os protótipos têm cores finais, tipografia, espaçamentos e interações. O desenvolvedor deve recriar a UI pixel-perfect usando os padrões do codebase.

---

## Design Tokens

### Cores
```
Light mode:
  --bg:     #F6F5F2   (fundo principal)
  --bg2:    #eceae6   (fundo secundário, seção ByteCode)
  --fg:     #1a1a1a   (texto principal)
  --muted:  #8a8480   (texto secundário, labels)
  --card:   #eeecea   (fundo de cards)
  --border: rgba(26,26,26,0.10)

Dark mode:
  --bg:     #232323
  --bg2:    #2c2c2c
  --fg:     #F6F5F2
  --muted:  #7a7672
  --card:   #2e2e2e
  --border: rgba(246,245,242,0.10)
```

### Tipografia
```
Font family: 'Libre Caslon Display', Georgia, serif
  → Google Fonts: https://fonts.google.com/specimen/Libre+Caslon+Display

Escala:
  handle / labels:    11px, letter-spacing 0.18em, uppercase
  eyebrow:            10.5px, letter-spacing 0.22em, uppercase
  nav links:          15px
  hero title:         42px, line-height 1.15
  section title:      32px
  article title:      22px
  body text:          16–17px, line-height 1.75–1.85
  captions / meta:    12–13px, font-style italic
```

### Espaçamento
```
Section padding:  110px top/bottom, 40px left/right
Max content width: 860px (centrado)
Article reading width: 660px
Gap grid hero:    80px
Gap grid artigos: 2px (quase flush)
```

### Bordas e raios
```
Border: 1px solid var(--border)
Border radius cards hero: 12px
Border radius tags: 100px (pill)
Photo grid gap: 3px
```

---

## Screens / Views

### 1. index.html — Página Inicial

**Layout geral:** página scrollável, max-width 860px centralizado.

#### Header (sticky)
- Fundo: `var(--bg)`, border-bottom 1px `var(--border)`
- Padding: 20px 40px 16px
- Conteúdo: handle `@rssviana` (11px, letra-espaçada, muted) + nav links abaixo
- Nav links: Início, Meus 2 centavos → `centavos.html`, ByteCode → `#bytecode`, ByteFotos → `#bytefotos`, botão "Dark" (italic, muted)
- Hover nos links: underline animado `scaleX(0→1)` na linha de baixo

#### Seção Hero (`#inicio`)
- Grid 2 colunas, gap 80px, align items center
- **Esquerda:** stack de 3 cards sobrepostos
  - Card base: 220×220px, bg `var(--card)`, border-radius 12px, border 1px
  - Card 1: rotate(-5deg) translate(-8px, 8px), opacity 0.45
  - Card 2: rotate(-2deg) translate(-2px, 3px), opacity 0.70
  - Card 3: sem transform, opacity 1, texto "Hello World" (13px, muted)
- **Direita:** coluna com gap 20px
  - Eyebrow: "DESENVOLVEDOR · PRODUTOS DIGITAIS" (10.5px uppercase muted)
  - H1: "Construindo produtos simples que realmente importam." (42px, weight 500)
  - Parágrafo italic muted (16px)
  - Link underline → `artigo.html?id=0`

#### Seção Sobre (`#sobre`)
- Centralizado, border-top
- Título 32px + parágrafo italic muted
- Tags pill: Fotografia, Cinema, Guitarra & Violão, Kart, Fórmula 1
  - Padding 7px 18px, border 1px, border-radius 100px, italic muted

#### Seção Meus 2 centavos (`#centavos`)
- Label eyebrow + título + subtítulo
- Grid 2 colunas, gap 2px
- 3 cards clicáveis → `artigo.html?id=N`, 1 card "ver todos →" → `centavos.html`
- Card: padding 36px 40px, bg `var(--card)`, hover → `var(--bg2)`
- Conteúdo card: meta (11px uppercase muted) + título (21px) + excerpt (14px italic muted)
- Cards são `<a>` tags com `text-decoration:none; color:inherit`

#### Seção ByteFotos (`#bytefotos`)
- Header row: label + título à esq, "Ver todas →" à dir
- Grid 3 colunas × 2 linhas, gap 3px
- Cada célula: aspect-ratio 1:1, bg `var(--card)`, fundo com padrão listrado diagonal (repeating-linear-gradient -45deg, opacity 0.4)
- Texto centrado em monospace 11px, muted
- Ao clicar: abre modal (ver Modal abaixo)

#### Modal ByteFotos
- Overlay fixed, bg rgba(20,17,13,0.72), backdrop-filter blur(6px)
- Modal inner: max-width 680px, bg `var(--bg)`, border-radius 12px, overflow hidden
- Animação entrada: opacity 0→1, translateY(12px)→0, scale(0.98→1), 0.25s ease
- Área foto: aspect-ratio 4:3, placeholder com padrão listrado
- Corpo: padding 28px 36px 36px — meta (10.5px uppercase) + título (22px) + descrição (15px italic muted)
- Fechar: clique no overlay, botão ×, tecla Escape

**Dados das fotos (placeholders — substituir por imagens reais):**
```js
[
  { label:"Paisagem",     title:"Horizonte aberto",        meta:"ByteFotos · 2026", desc:"..." },
  { label:"Urbana",       title:"Geometria da cidade",     meta:"ByteFotos · 2026", desc:"..." },
  { label:"Detalhe",      title:"Perto do que importa",    meta:"ByteFotos · 2026", desc:"..." },
  { label:"Luz natural",  title:"A hora dourada",          meta:"ByteFotos · 2026", desc:"..." },
  { label:"P&B",          title:"Sem cor, mais forma",     meta:"ByteFotos · 2026", desc:"..." },
  { label:"Retrato",      title:"Uma fração de segundo",   meta:"ByteFotos · 2026", desc:"..." },
]
```

#### Seção ByteCode (`#bytecode`)
- Fundo: `var(--bg2)`
- Grid 2 colunas, gap 80px
- Esquerda: label + título (36px) + subtítulo italic muted + link "Falar sobre um projeto →"
- Direita: lista de serviços separados por border-bottom
  - Itens: Desenvolvimento web / Produtos digitais / Sistemas sob medida / Consultoria técnica
  - Cada item: padding 20px 0, justify-content space-between, font 15px italic muted

#### Footer
- Border-top, padding 32px 40px, centrado
- Texto: "@rssviana · feito de coração para as pessoas que gostam de mim '26" (12px italic muted)

---

### 2. centavos.html — Listagem de Artigos

**Layout:** max-width 860px, padding 80px 40px 120px

- Eyebrow + título "Ideias em construção." + subtítulo italic
- **Filtros:** botões pill (Todos / Tecnologia / Design / Processo)
  - Estado ativo: bg `var(--fg)`, color `var(--bg)`, border `var(--fg)`
  - Filtro filtra a lista por `data-tag` attribute
- **Lista de artigos:** `<a>` tags, grid 3 colunas: `80px 1fr auto`
  - Col 1: número (01, 02…) — 11px italic muted
  - Col 2: tag category (10px uppercase muted) + título (22px) + excerpt (14px italic muted)
  - Col 3: data + tempo de leitura + "→" (12px italic muted, alinhado à direita)
  - Border-top e border-bottom entre items, hover → opacity 0.65
  - Cada row navega para `artigo.html?id=N`

**Artigos:**
```
0 — Tecnologia — Por que simplicidade escala melhor — Jan 2026 — 4 min
1 — Processo   — Atenção é o recurso mais escasso   — Mar 2026 — 6 min
2 — Design     — Velocidade como valor de design     — Abr 2026 — 3 min
3 — Tecnologia — O mito do desenvolvedor 10x         — Abr 2026 — 5 min
```

---

### 3. artigo.html — Leitura de Artigo (estilo Medium)

**Layout:** max-width 660px, padding 80px 40px 140px

- **Barra de progresso de leitura:** fixed, top 0, height 2px, color `var(--muted)`, width calculada pelo scroll
- Link "← Meus 2 centavos" (13px italic muted) → `centavos.html`
- Tag category (10px uppercase muted)
- Título (44px, weight 400)
- Byline: "rssviana · [data] · [tempo] de leitura" — separado por dots (4px circle)
  - Border-top e border-bottom 1px, padding 20px 0
- **Corpo do artigo:** font-size 18px, line-height 1.85
  - `<p>`: margin-bottom 28px
  - `<h2>`: 26px, margin 56px 0 20px
  - `<blockquote>`: border-left 2px muted, padding-left 28px, italic muted, 20px
  - `<hr>`: border-top 1px, width 80px, centrado, margin 56px auto
- **Rodapé do artigo:** "Fim do artigo." + link "Próximo →" (próximo artigo em loop)
- Artigo carregado via `?id=N` na URL

**Persistência dark mode:** `localStorage.setItem('rssviana-dark', '1')`

---

## Interactions & Behavior

| Interação | Comportamento |
|---|---|
| Dark mode toggle | Adiciona/remove `data-dark` no `<body>`, persiste em `localStorage` |
| Nav links | Scroll suave para seção (`scroll-behavior: smooth`) |
| Cards de artigo | Navegam para `artigo.html?id=N` |
| Filtros de categoria | Mostram/ocultam rows por `data-tag` |
| Progresso de leitura | Barra no topo calculada pelo `scrollTop / (scrollHeight - clientHeight)` |
| Próximo artigo | Navega em loop pelos artigos `(id + 1) % total` |
| Modal de foto | Abre ao clicar numa foto, fecha com Esc / clique fora / botão × |
| Tweaks panel | Controla font-size, bg color e spacing; persiste via `localStorage` |

---

## Assets

- **Fonte:** Libre Caslon Display via Google Fonts — `https://fonts.google.com/specimen/Libre+Caslon+Display`
- **Fotos ByteFotos:** placeholders — substituir por imagens reais do usuário
- **Foto hero:** placeholder "Hello World" — substituir por imagem ou manter como elemento decorativo

---

## Files

| Arquivo | Descrição |
|---|---|
| `index.html` | Página principal com todas as seções |
| `centavos.html` | Listagem de artigos com filtros |
| `artigo.html` | Página de leitura individual (carrega conteúdo via `?id=N`) |

---

## Notes para o Desenvolvedor

1. **Conteúdo dos artigos** está hardcoded em JS no `artigo.html`. Em produção, substituir por CMS (Notion API, Contentful, MDX files, etc.)
2. **Fotos do ByteFotos** são placeholders — o usuário fornecerá as imagens reais
3. **Dark mode** usa `data-dark` attribute no `<body>` + CSS custom properties — fácil de portar para qualquer framework
4. Manter **max-width 860px** para o conteúdo principal e **660px** para a coluna de leitura
5. A barra de progresso de leitura é um detalhe importante da experiência — não omitir
