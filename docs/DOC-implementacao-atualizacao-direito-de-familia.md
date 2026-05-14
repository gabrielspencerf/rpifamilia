# DOC — Implementação da atualização para Direito de Família

Este documento traduz o spec em passos práticos por arquivo/componente, com checkpoints de validação.

Referência de copy/direção: `atualizacao-direito-familia.md`.

---

## 1) Arquivos impactados

- `index.html` (SEO)
- `components/Hero.tsx`
- `components/UrgencySection.tsx`
- `components/TeamSection.tsx`
- `components/ServicesSection.tsx`
- `components/ReviewsSection.tsx`
- `components/FAQSection.tsx`
- `components/Footer.tsx` (modais)

---

## 2) Plano de implementação (ordem sugerida)

### Passo A — SEO (`index.html`)

- Atualizar `<title>` para o título de Direito de Família.
- Atualizar `<meta name="description" ...>` para a nova descrição.

Checkpoint:
- Abrir a página e validar título/descrição (DevTools ou “View Source”).

---

### Passo B — Hero (`components/Hero.tsx`)

Atualizar:
- H1
- parágrafo (subheadline)
- CTA secundário (texto e/ou destino, se necessário)
- microcopy do hero (linha “Sigilo/Plantão” vira “Atendimento Sigiloso …”)
- alt text da imagem

Cuidados:
- Evitar termos: “defesa”, “liberdade”, “plantão 24h”, “delegacia”, etc.
- Manter CTA principal abrindo Typebot (via `GoldButton`).

Checkpoint:
- Hero comunica “família” em 5 segundos, sem ruído criminal.

---

### Passo C — Diferenciais (`components/UrgencySection.tsx`)

Substituir:
- eyebrow para “Direito de Família”
- H2 e parágrafo (apoio, clareza, estratégia)
- badge local (Porto Alegre e Região Metropolitana)
- 3 cards: Clareza Jurídica / Atuação Estratégica / Atendimento Humano

Checkpoint:
- Cards não têm “urgência criminal”.

---

### Passo D — Equipe (`components/TeamSection.tsx`)

Atualizar:
- H2 e parágrafo introdutório
- `specialty` e `bio` de cada sócio (mantendo nome/cargo/OAB)

Checkpoint:
- Nenhum perfil menciona Penal/Processo Penal/Habeas Corpus/Execução Penal.

---

### Passo E — Áreas de atuação (`components/ServicesSection.tsx`)

Substituir lista de “crimes/penal” por serviços de família:
- Divórcio Consensual
- Divórcio Litigioso
- Dissolução de União Estável
- Guarda e Convivência
- Pensão Alimentícia
- Partilha de Bens
- Regulamentação de Visitas
- Acordos Familiares

Observação:
- Ícones podem ser reaproveitados (não é requisito trocar), mas os títulos/descrições devem ser 100% família.

Checkpoint:
- Não existe nenhum card com termos criminais.

---

### Passo F — Depoimentos (`components/ReviewsSection.tsx`)

Ação:
- Manter apenas depoimentos “genéricos” que não mencionem criminal/penal/delegacia/flagrante.
- Recomendados pela referência: Karolyna, Priscilla, Elias, Daniel.

Checkpoint:
- Leitura aleatória de 2 depoimentos não quebra coerência com família.

---

### Passo G — FAQ (`components/FAQSection.tsx`)

Substituir perguntas e respostas pelo bloco de Direito de Família (7 perguntas).

Checkpoint:
- Todas as perguntas são “família” e não “delegacia/intimação”.

---

### Passo H — Footer e modais (`components/Footer.tsx`)

Ação:
- Manter endereço, links e identidade.
- Atualizar o conteúdo da Política de Privacidade e Termos de Uso para linguagem jurídica geral (sem criminal específico).

Checkpoint:
- Nenhum modal menciona “defesa criminal”, “processo penal” etc.

---

## 3) Rotina de validação (final)

### Validação rápida por busca (texto)

Buscar no projeto (componentes/HTML) por termos proibidos (ver spec). Resultado esperado: **zero** em UI renderizada.

### Build

- `npm run build`
- `npm run preview` e navegar pelas seções.

### Manual (UI)

- CTAs abrem Typebot.
- Conteúdo responsivo em mobile.
- Tom geral: seguro, acolhedor e técnico.

---

## 4) Notas (decisões registradas)

- O layout atual será preservado; a entrega é majoritariamente de **copy/posicionamento**.
- Manter o brand “Roland, Pessalli & Isidoro” e os dados institucionais (endereço, OABs).

