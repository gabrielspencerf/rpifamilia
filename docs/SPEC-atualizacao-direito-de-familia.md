# SPEC — Atualização da Landing para Direito de Família (RPI)

## 1) Contexto

O projeto atual é uma landing page em React/Tailwind com copy voltada para **Advocacia Criminal**. Este spec define requisitos para migrar a comunicação e a oferta para **Direito de Família**, mantendo a identidade do escritório **Roland, Pessalli & Isidoro** e preservando a estrutura de seções do site.

Fonte de verdade de copy/direção: `atualizacao-direito-familia.md`.

---

## 2) Objetivo (resultado esperado)

Reposicionar toda a landing para **Direito de Família** com tom:

- humano e acolhedor
- técnico e seguro
- discreto e objetivo
- estratégico (sem agressividade)

Eixo central:

> Clareza jurídica, acolhimento e estratégia para resolver conflitos familiares com segurança.

---

## 3) Escopo

### Em escopo

- Atualizar **SEO** (title + meta description).
- Atualizar copy e microcopy das seções: **Hero**, **Diferenciais**, **Equipe**, **Áreas de Atuação**, **Depoimentos**, **FAQ**, **Rodapé**.
- Atualizar texto dos modais: **Política de Privacidade** e **Termos de Uso** (sem linguagem criminal específica).
- Remover/substituir referências explícitas a advocacia criminal e termos correlatos em toda a UI.
- Garantir que os CTAs abram o Typebot como hoje (não quebrar o fluxo).

### Fora de escopo (neste spec)

- Alteração de layout/UX (além de ajustes necessários por quebra de texto).
- Alteração de imagens (troca de fotos, novo ensaio, novos assets).
- Alteração de integrações (GTM, Typebot, domínios, analytics).
- Implementar novas páginas (blog, páginas de serviço, etc.).

---

## 4) Requisitos funcionais (FR)

### FR-01 — SEO

- Title: `Roland, Pessalli & Isidoro | Direito de Família`
- Meta description: conforme `atualizacao-direito-familia.md`.

### FR-02 — Copy por seção (conteúdo)

- **Hero**: H1, parágrafo, microcopy e CTAs orientados a Direito de Família.
- **Diferenciais**: 3 cards com foco em clareza, estratégia e atendimento humano.
- **Equipe**: manter nomes/cargos/OAB, atualizar áreas e bios para Direito de Família.
- **Áreas de atuação**: lista substituída por serviços/temas de família (divórcio, guarda, pensão, união estável, partilha etc.).
- **Depoimentos**: exibir apenas avaliações coerentes (sem menções criminal).
- **FAQ**: perguntas e respostas voltadas a família.
- **Rodapé**: manter endereço e identidade, atualizar modais conforme doc.

### FR-03 — CTAs

- CTA principal padronizado: `Agendar Atendimento`.
- CTAs não podem soar emergenciais/criminalistas.
- Botões devem continuar abrindo o Typebot (`window.openTypebot`).

---

## 5) Requisitos não funcionais (NFR)

- **Coerência de tom**: sem linguagem de “guerra”, “ataque”, “urgência criminal”.
- **Consistência terminológica**: “Direito de Família” e termos correlatos devem dominar o texto.
- **Acessibilidade mínima**: alt texts coerentes (sem “fachada criminal” etc.).
- **Sem regressão funcional**: site builda e roda (`npm run build`, `npm run dev`) sem erros.

---

## 6) Regras de conteúdo (proibições e substituições)

### Remover/substituir (exemplos)

Não pode aparecer na UI:

```txt
Advocacia Criminal
Direito Penal
Processo Penal
Habeas Corpus
Execução Penal
Tribunal do Júri
Tráfico de Drogas
Maria da Penha
Crimes Digitais
Crimes Econômicos
Inquérito Policial
Flagrante
Audiência de custódia
Delegacia
Defesa criminal
Liberdade
Plantão 24 Horas
Réu
Investigado
Prisão
```

Preferir/usar:

```txt
Direito de Família
Divórcio
Separação
Guarda
Convivência
Pensão Alimentícia
Partilha de Bens
União Estável
Acordos Familiares
Orientação jurídica
Atendimento humanizado
Sigilo
Segurança jurídica
Proteção de direitos
Redução de desgaste
```

---

## 7) Critérios de aceite (Definition of Done)

- [ ] Title e meta description atualizados.
- [ ] Hero atualizado (H1/parágrafo/microcopy/CTAs) e coerente com família.
- [ ] Diferenciais com 3 cards de família (clareza/estratégia/humano).
- [ ] Equipe atualizada (sem termos criminais).
- [ ] Áreas de atuação 100% família (sem itens criminais).
- [ ] Depoimentos: nenhum menciona criminal/penal/delegacia/flagrante.
- [ ] FAQ 100% família.
- [ ] Rodapé e modais sem linguagem criminal específica.
- [ ] Busca por termos proibidos retorna **zero** ocorrências nos componentes renderizados.
- [ ] `npm run build` finaliza sem erros.

---

## 8) Itens a validar manualmente (QA rápido)

- Typebot abre ao clicar em `Agendar Atendimento`.
- Scroll/ancoras continuam funcionando (ex.: CTA secundário).
- Responsivo: textos não estouram em mobile.
- Depoimentos e FAQ não ficam “genéricos demais” (soam humanos/técnicos).

