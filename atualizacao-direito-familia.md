# Atualização de Copy e Posicionamento — Direito de Família

Documento de implementação para migrar a landing de “Advocacia Criminal” para **Direito de Família**, mantendo identidade institucional e elevando clareza, acolhimento e segurança jurídica.

## Sumário (estrutura sugerida)

- Diretriz central e tom
- Checklist de aceite (rápido)
- Mapeamento por arquivo/componente
- Copy por seção (pronta para colar)
- Regras de higienização (remover linguagem criminal, depoimentos, CTAs)
- Políticas (Privacidade / Termos)

---

## Diretriz central e tom

### Objetivo

Atualizar a comunicação do projeto para posicionar o escritório **Roland, Pessalli & Isidoro** em **Direito de Família**, substituindo qualquer linguagem anterior voltada para advocacia criminal.

### Mensagens que a página deve transmitir

- segurança jurídica
- atendimento humanizado
- sigilo
- clareza
- estratégia
- redução de desgaste emocional
- proteção de direitos familiares e patrimoniais

### Eixo central

> Clareza jurídica, acolhimento e estratégia para resolver conflitos familiares com segurança.

### Não usar (proibido)

Não usar tom agressivo, policial, emergencial criminal ou focado em termos como “liberdade”, “flagrante”, “delegacia”, “habeas corpus”, “defesa criminal” ou “audiência de custódia”.

### Referência de tom (guia)

A página precisa passar a sensação de:

> “Você está em um momento difícil, mas existe um caminho jurídico claro, seguro e organizado para resolver isso.”

Não passar a sensação de:

> “Você está em guerra e precisa atacar agora.”

Direito de Família exige firmeza, mas com inteligência emocional.

---

## Checklist de aceite (rápido)

- [ ] Nenhuma seção menciona advocacia criminal.
- [ ] Nenhum serviço criminal permanece na página.
- [ ] H1 está focado em Direito de Família.
- [ ] Meta title e meta description foram atualizados.
- [ ] Serviços estão focados em divórcio, guarda, pensão, união estável e partilha.
- [ ] FAQ está coerente com Direito de Família.
- [ ] Depoimentos não citam advocacia criminal.
- [ ] CTAs estão funcionais.
- [ ] Alt texts foram atualizados.
- [ ] Política de Privacidade e Termos de Uso não possuem linguagem criminal específica.
- [ ] O tom geral transmite segurança, clareza e acolhimento sem parecer fraco ou genérico.

---

## Mapeamento por arquivo/componente (onde aplicar)

- `index.html`: Title, meta description, (se existir) microcopy exposta fora do React.
- `components/Hero.tsx`: H1, parágrafo, CTAs, microcopy, alt de imagem.
- `components/UrgencySection.tsx`: eyebrow, H2, parágrafo, badge, cards.
- `components/TeamSection.tsx`: título/intro e bios/áreas dos sócios (mantendo nomes/cargos/OAB).
- `components/ServicesSection.tsx`: áreas de atuação (lista de cards).
- `components/ReviewsSection.tsx`: manter apenas depoimentos coerentes (sem criminal).
- `components/FAQSection.tsx`: perguntas e respostas.
- `components/Footer.tsx`: endereço/links + conteúdo dos modais (Privacidade/Termos).

---

## Copy por seção (pronta para colar)

### Meta / SEO

#### Title

```txt
Roland, Pessalli & Isidoro | Direito de Família
```

#### Meta Description

```txt
Roland, Pessalli & Isidoro - Advocacia em Direito de Família em Porto Alegre e Região Metropolitana. Atendimento humanizado, sigiloso e estratégico para divórcio, guarda, pensão, união estável e partilha de bens.
```

---

### Hero Section

#### H1

```txt
Orientação jurídica segura para momentos delicados da família.
```

#### Parágrafo

```txt
Atuação humanizada, sigilosa e estratégica em Direito de Família em Porto Alegre e Região Metropolitana. Ajudamos você em questões como divórcio, guarda, pensão, convivência, união estável e partilha de bens, conduzindo cada etapa com clareza, segurança e o menor desgaste possível.
```

#### CTA Primário

```txt
Agendar Atendimento
```

#### CTA Secundário

```txt
Conhecer Atuação
```

#### Rodapé / Microcopy do Hero

```txt
Atendimento Sigiloso · Orientação Humanizada
```

#### Alt da imagem

```txt
Escritório Roland, Pessalli & Isidoro
```

---

### Diferenciais / UrgencySection

#### Eyebrow

```txt
Direito de Família
```

#### H2

```txt
Você não precisa enfrentar esse momento sem apoio jurídico.
```

#### Parágrafo

```txt
Questões familiares envolvem decisões sensíveis, patrimônio, filhos, rotina e futuro. Nossa atuação combina técnica jurídica, escuta responsável e estratégia para orientar você com segurança em cada decisão.
```

#### Badge

```txt
Porto Alegre e Região Metropolitana
```

#### Cards

**Card 1 — Título**

```txt
Clareza Jurídica
```

**Card 1 — Texto**

```txt
Explicamos seus direitos, riscos e caminhos possíveis de forma objetiva, para que você tome decisões com segurança e sem confusão jurídica.
```

**Card 2 — Título**

```txt
Atuação Estratégica
```

**Card 2 — Texto**

```txt
Cada caso é analisado conforme o contexto familiar, patrimonial e emocional, buscando a solução mais adequada, seja por acordo ou via judicial.
```

**Card 3 — Título**

```txt
Atendimento Humano
```

**Card 3 — Texto**

```txt
Entendemos que conflitos familiares exigem cuidado. Atuamos com sigilo, respeito e comunicação transparente durante todo o processo.
```

---

### Equipe / TeamSection

#### Eyebrow

```txt
Nossa Liderança
```

#### H2

```txt
Orientação técnica para decisões familiares importantes
```

#### Parágrafo

```txt
Nossa atuação é conduzida por advogados com visão estratégica, comunicação clara e compromisso com a proteção dos direitos dos clientes em momentos sensíveis da vida familiar.
```

#### Sócios (manter nomes, cargos e OABs)

**Dra. Jessica Roland — Cargo**

```txt
Sócia Fundadora
```

**Dra. Jessica Roland — Área**

```txt
Direito de Família, mediação de conflitos e orientação jurídica familiar
```

**Dra. Jessica Roland — OAB**

```txt
OAB/RS 109.437
```

**Dra. Jessica Roland — Bio**

```txt
Atuação voltada à orientação jurídica humanizada, com foco em soluções seguras para conflitos familiares, proteção de direitos e condução responsável de casos sensíveis.
```

**Dr. Alessandro Pessalli — Cargo**

```txt
Sócio Fundador
```

**Dr. Alessandro Pessalli — Área**

```txt
Direito de Família, estratégia processual e demandas patrimoniais
```

**Dr. Alessandro Pessalli — OAB**

```txt
OAB/RS 122.632
```

**Dr. Alessandro Pessalli — Bio**

```txt
Atuação estratégica na análise de casos familiares, com atenção à segurança jurídica, organização documental e proteção dos interesses do cliente.
```

**Dra. Adriana Isidoro — Cargo**

```txt
Sócia Fundadora
```

**Dra. Adriana Isidoro — Área**

```txt
Direito de Família, guarda, alimentos e proteção de direitos
```

**Dra. Adriana Isidoro — OAB**

```txt
OAB/RS 100.249
```

**Dra. Adriana Isidoro — Bio**

```txt
Atuação focada na garantia de direitos, orientação clara e condução de demandas familiares com responsabilidade, sensibilidade e firmeza técnica.
```

---

### Áreas de Atuação / ServicesSection

#### Eyebrow

```txt
Como podemos ajudar
```

#### H2

```txt
Atuação em Direito de Família
```

#### Parágrafo

```txt
Cuidamos da orientação jurídica, documentação e condução do seu caso com clareza, segurança e estratégia para reduzir conflitos e proteger seus direitos.
```

#### Serviços (cards)

**Serviço 1 — Título**

```txt
Divórcio Consensual
```

**Serviço 1 — Descrição**

```txt
Quando há acordo entre as partes, orientamos a formalização do divórcio com segurança jurídica, organização documental e menor desgaste possível.
```

**Serviço 2 — Título**

```txt
Divórcio Litigioso
```

**Serviço 2 — Descrição**

```txt
Quando não existe consenso, atuamos de forma estratégica para defender seus direitos patrimoniais e familiares com firmeza, ética e técnica.
```

**Serviço 3 — Título**

```txt
Dissolução de União Estável
```

**Serviço 3 — Descrição**

```txt
Regularização do encerramento da união estável, com análise de bens, direitos, responsabilidades e regime aplicável ao caso.
```

**Serviço 4 — Título**

```txt
Guarda e Convivência
```

**Serviço 4 — Descrição**

```txt
Orientação sobre guarda dos filhos, convivência familiar e definição de rotinas que respeitem os direitos da criança e dos responsáveis.
```

**Serviço 5 — Título**

```txt
Pensão Alimentícia
```

**Serviço 5 — Descrição**

```txt
Atuação em pedido, revisão, exoneração ou execução de alimentos, buscando equilíbrio entre necessidade, possibilidade e segurança jurídica.
```

**Serviço 6 — Título**

```txt
Partilha de Bens
```

**Serviço 6 — Descrição**

```txt
Análise do patrimônio do casal para divisão adequada conforme o regime de bens, documentação existente e particularidades da relação.
```

**Serviço 7 — Título**

```txt
Regulamentação de Visitas
```

**Serviço 7 — Descrição**

```txt
Organização jurídica da convivência entre pais, filhos e familiares, evitando conflitos recorrentes e trazendo previsibilidade à rotina.
```

**Serviço 8 — Título**

```txt
Acordos Familiares
```

**Serviço 8 — Descrição**

```txt
Elaboração e formalização de acordos para resolver conflitos com mais agilidade, segurança e menor exposição emocional.
```

---

### Depoimentos / ReviewsSection

#### H2

```txt
O que dizem nossos clientes
```

#### Nota

```txt
5.0 — baseado em avaliações no Google
```

#### Depoimentos recomendados (manter apenas os coerentes)

**Karolyna Konzen — Origem**

```txt
Avaliação no Google
```

**Karolyna Konzen — Texto**

```txt
Ambiente de trabalho excelente, ótimo atendimento, extremamente profissional, com um grau de conhecimento alto. Atendimento personalizado e disponível sempre que preciso. Recomendo muito.
```

**Priscilla Lima — Origem**

```txt
Avaliação no Google
```

**Priscilla Lima — Texto**

```txt
Atendimento diferenciado. Equipe extremamente comprometida e responsável. Trabalho de qualidade. Recomendo com prazer.
```

**Elias Paulino da Silva — Origem**

```txt
Local Guide
```

**Elias Paulino da Silva — Texto**

```txt
Atendimento super profissional e humanizado. Recomendo.
```

**Daniel Rochadel — Origem**

```txt
Local Guide
```

**Daniel Rochadel — Texto**

```txt
Investimento que vale cada centavo. Excelentes profissionais.
```

---

### FAQ / FAQSection

#### Eyebrow

```txt
Suporte
```

#### H2

```txt
Dúvidas Frequentes
```

#### Perguntas e respostas

**Pergunta 1**

```txt
Quanto tempo demora um divórcio?
```

**Resposta 1**

```txt
Depende se existe acordo entre as partes. Quando há consenso e a documentação está organizada, o processo costuma ser mais rápido. Em casos com conflito, filhos menores, partilha de bens ou divergências, o prazo pode variar conforme a complexidade do caso.
```

**Pergunta 2**

```txt
Posso me divorciar mesmo se a outra pessoa não concordar?
```

**Resposta 2**

```txt
Sim. O divórcio é um direito e não depende da concordância da outra parte para acontecer. Quando não há acordo, o caso pode seguir pela via judicial, com orientação jurídica para proteger seus direitos.
```

**Pergunta 3**

```txt
Preciso estar junto do meu ex para resolver a separação?
```

**Resposta 3**

```txt
Não necessariamente. Em muitos casos, a comunicação pode ser feita por meio dos advogados, especialmente quando há conflito, desgaste emocional ou dificuldade de diálogo entre as partes.
```

**Pergunta 4**

```txt
Como funciona a guarda dos filhos?
```

**Resposta 4**

```txt
A guarda é definida considerando o melhor interesse da criança ou adolescente. O caso pode envolver guarda compartilhada, convivência, responsabilidades dos pais e definição de rotina familiar.
```

**Pergunta 5**

```txt
A pensão alimentícia pode ser revisada?
```

**Resposta 5**

```txt
Sim. A pensão pode ser revista quando há mudança na necessidade de quem recebe ou na condição financeira de quem paga. Cada caso precisa ser analisado com base em documentos e contexto atual.
```

**Pergunta 6**

```txt
A separação pode ser resolvida online?
```

**Resposta 6**

```txt
Sim, parte do atendimento e da organização documental pode ser feita online. A possibilidade de concluir todo o procedimento dessa forma depende do tipo de caso, existência de acordo e exigências legais aplicáveis.
```

**Pergunta 7**

```txt
Quanto custa um processo de família?
```

**Resposta 7**

```txt
O valor depende da complexidade do caso, da existência de acordo, da quantidade de temas envolvidos e das medidas necessárias. Após a análise inicial, os honorários são apresentados de forma clara e formalizados por contrato.
```

---

### Rodapé / Footer

#### Links

```txt
Política de Privacidade · Termos de Uso
```

#### Endereço

```txt
Endereço: R. Jorge Amado, 844 - Santa Cruz, Gravataí - RS, 94155-030
```

#### Copyright

```txt
© [ano atual] Roland, Pessalli & Isidoro. Todos os direitos reservados.
```

#### Crédito

```txt
Assessoria Digital: CREATIVE LANE
```

#### Alt do logo

```txt
Roland, Pessalli & Isidoro
```

---

## Regras de higienização (implementação)

### Remover linguagem criminal (buscar e remover/substituir)

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

### Substituir por linguagem de Direito de Família (direção)

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

### Depoimentos (regra)

Remover ou ocultar depoimentos que mencionem diretamente:

- advocacia criminal
- defesa criminal
- crimes
- processo penal
- liberdade
- tribunal criminal
- flagrante
- delegacia

Esses depoimentos quebram a coerência da página de Direito de Família.

---

## CTAs

### CTA principal (padrão)

```txt
Agendar Atendimento
```

### Alternativas aceitáveis

```txt
Falar com um advogado
Quero orientação jurídica
Entender meu caso
```

Evitar CTAs agressivos ou emergenciais como:

```txt
Preciso de defesa agora
Plantão urgente
Atendimento criminal imediato
```

---

## Modal — Política de Privacidade e LGPD

### Introdução

```txt
Esta Política de Privacidade descreve como o escritório Roland, Pessalli & Isidoro coleta, usa e protege suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados — LGPD, Lei nº 13.709/2018.
```

### Coleta de Dados

```txt
Coletamos apenas dados essenciais fornecidos voluntariamente através de nossos canais de atendimento, como Typebot, WhatsApp, formulário, telefone ou e-mail, para fins de contato profissional, análise preliminar e agendamento de atendimento jurídico.
```

### Uso das Informações

```txt
As informações são utilizadas estritamente para contato, análise inicial da demanda, organização do atendimento e prestação de orientação jurídica. Todas as informações compartilhadas são tratadas com sigilo profissional.
```

### Compartilhamento

```txt
Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing. Seus dados poderão ser utilizados apenas quando necessário para a prestação dos serviços jurídicos, cumprimento de obrigação legal ou defesa dos seus interesses.
```

### Seus Direitos

```txt
Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais a qualquer momento através dos canais oficiais do escritório.
```

### Botão do modal

```txt
Fechar
```

---

## Modal — Termos de Uso

### Aceitação

```txt
Ao acessar este site, você concorda com estes Termos de Uso. O conteúdo disponibilizado possui caráter meramente informativo e não substitui consulta jurídica formal.
```

### Propriedade Intelectual

```txt
Todo o conteúdo deste site, incluindo textos, design, logotipos e elementos visuais, é propriedade de Roland, Pessalli & Isidoro. É proibida a reprodução sem autorização prévia.
```

### Limitação de Responsabilidade

```txt
O escritório não se responsabiliza por decisões tomadas com base apenas nas informações gerais deste site. Cada caso jurídico possui particularidades e precisa de análise individual.
```

### Alterações

```txt
Reservamo-nos o direito de alterar estes termos a qualquer momento, sem aviso prévio.
```

### Botão do modal

```txt
Fechar
```
