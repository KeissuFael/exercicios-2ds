# Painel de Métricas — Clean-Financy

## 1. Identificação

- **Produto:** Clean-Financy.
- **Objetivo:** ajudar pequenos comerciantes a organizar e acompanhar suas movimentações financeiras.
- **Público-alvo:** pequenos comerciantes e responsáveis pela gestão financeira de pequenos negócios.
- **Período de referência:** outubro de 2026.
- **Situação dos dados:** foram registrados dados de 10 visitantes, incluindo retorno, intenção de pagamento e recomendação. A ativação desse grupo, o churn, a receita real e as métricas de código ainda precisam ser avaliados.

## 2. Métricas escolhidas

A equipe selecionou cinco métricas principais: três de produto e duas de código.

| Métrica | Tipo | Valor atual | Período | Se piorar, vamos... |
|---|---|---|---|---|
| Taxa de ativação | Produto | Pendente de avaliação para os 10 visitantes | Avaliação atual | Revisar o cadastro e as orientações do primeiro acesso |
| Retenção | Produto | 40% — 4 de 10 visitantes voltaram | Outubro de 2026 | Investigar por que os usuários não retornam |
| NPS | Produto | -10 — 10 avaliações registradas | Pesquisa com 10 respostas | Analisar as opiniões e conversar com usuários insatisfeitos |
| Bugs em aberto | Código | A conferir no GitHub | Situação atual | Priorizar e corrigir os erros mais importantes |
| Commits por semana | Código | A conferir no GitHub | Semana de referência a definir | Investigar bloqueios e revisar a divisão das tarefas |

## 3. Cálculos das métricas de produto

### 3.1. Taxa de ativação

A taxa de ativação mede a proporção de visitantes que realizam a ação principal do produto. Na Clean-Financy, considera-se ativado o usuário que conclui o cadastro e registra sua primeira movimentação financeira.

**Dados do teste inicial:**

- Visitantes: 5.
- Usuários ativados: 3.
- Usuários não ativados: 2.

**Fórmula:**

Taxa de ativação = (usuários ativados ÷ total de visitantes) × 100

**Cálculo:**

(3 ÷ 5) × 100 = **60%**

**Interpretação:** no teste inicial, 60% dos participantes chegaram à primeira movimentação financeira, enquanto 40% não concluíram essa etapa.

**Valor atual para os 10 visitantes:** pendente de avaliação. Ainda é necessário identificar quantos dos dez visitantes realizaram a primeira ação importante no sistema.

**Se este número piorar, a nossa equipe vai:** revisar os campos do cadastro, melhorar as orientações do primeiro acesso e testar o processo com participantes externos.

### 3.2. Retenção

A retenção mede a proporção de usuários que retornam para utilizar o produto durante um período definido.

**Dados dos 10 visitantes:**

- Visitantes acompanhados: 10.
- Visitantes que retornaram: 4.
- Visitantes que não retornaram: 6.

**Fórmula:**

Retenção = (usuários que retornaram ÷ total de usuários acompanhados) × 100

**Cálculo:**

(4 ÷ 10) × 100 = **40%**

**Interpretação:** quatro dos dez visitantes voltaram a utilizar a Clean-Financy. Os outros seis não retornaram durante o período observado.

**Se este número piorar, a nossa equipe vai:** investigar as dificuldades de uso e verificar se o painel financeiro facilita o acompanhamento das entradas e saídas do comércio.

**Valor real:** a retenção observada é de 40%. Para comparações futuras, a equipe deverá definir um período padronizado de acompanhamento e observar os mesmos critérios em cada medição.

### 3.3. NPS — Net Promoter Score

O NPS mede a disposição dos usuários para recomendar a Clean-Financy a outras pessoas.

**Pergunta da pesquisa:** “De 0 a 10, quanto você recomendaria a Clean-Financy a outro comerciante?”

As respostas são classificadas da seguinte forma:

- **Promotores:** notas 9 e 10.
- **Passivos:** notas 7 e 8.
- **Detratores:** notas de 0 a 6.

**Respostas registradas:**

8, 7, 5, 9, 5, 10, 6, 9, 7, 4.

| Classificação | Notas | Quantidade | Percentual |
|---|---|---:|---:|
| Promotores | 9 e 10 | 3 | 30% |
| Passivos | 7 e 8 | 3 | 30% |
| Detratores | 0 a 6 | 4 | 40% |

**Fórmula:**

NPS = percentual de promotores − percentual de detratores

**Cálculo:**

- Percentual de promotores: (3 ÷ 10) × 100 = 30%.
- Percentual de detratores: (4 ÷ 10) × 100 = 40%.
- NPS: 30% − 40% = **-10**.

O resultado do NPS varia de −100 a +100.

**Interpretação:** o NPS de -10 indica que a proporção de detratores é maior que a de promotores. Apesar de três visitantes terem afirmado que recomendariam o produto, é importante investigar os motivos das avaliações negativas.

**Se este número piorar, a nossa equipe vai:** analisar os comentários e conversar com os usuários para identificar dificuldades e priorizar melhorias.

**Valor atual:** -10, considerando as dez avaliações registradas. A equipe deverá confirmar se essas respostas correspondem ao mesmo grupo dos dez visitantes utilizados nas outras métricas.

## 4. Métricas de código

### 4.1. Bugs em aberto

Essa métrica representa a quantidade de erros identificados que ainda não foram corrigidos.

- **Valor atual:** a conferir no GitHub ou no sistema de tarefas.
- **Como medir:** contar as Issues abertas classificadas como bugs na data da análise.
- **Interpretação:** avaliar a quantidade de erros junto à gravidade e ao impacto de cada problema.
- **Se este número piorar, a nossa equipe vai:** priorizar as correções dos erros que impedem o acesso, o cadastro ou o registro correto das movimentações financeiras.

A equipe deve dar prioridade aos problemas que comprometem as funções essenciais do sistema, mesmo que outros bugs menos graves também estejam abertos.

### 4.2. Commits por semana

Essa métrica representa a quantidade de commits registrados no repositório durante uma semana.

- **Valor atual:** a conferir no histórico do GitHub.
- **Período:** semana de referência a definir.
- **Como medir:** contar os commits realizados no repositório durante o intervalo escolhido.
- **Interpretação:** observar a atividade de desenvolvimento em conjunto com as tarefas concluídas, as correções e as funcionalidades entregues.
- **Se este número piorar, a nossa equipe vai:** verificar se algum integrante está bloqueado, revisar a divisão das tarefas e combinar os próximos passos.

A quantidade de commits, isoladamente, não comprova produtividade ou qualidade do código. Ela deve ser analisada junto ao andamento real do projeto.

## 5. Funil AARRR

O funil AARRR organiza a jornada do usuário em cinco etapas: aquisição, ativação, retenção, receita e recomendação.

| Etapa | Aplicação na Clean-Financy | Indicador atual |
|---|---|---|
| Aquisição | Pessoas acessam a plataforma | 10 visitantes |
| Ativação | Usuários concluem o cadastro e registram a primeira movimentação | Pendente de avaliação para os 10 visitantes |
| Retenção | Comerciantes retornam para registrar ou consultar movimentações | 4 de 10 visitantes — 40% |
| Receita | Usuários contratam o Plano Pro | 3 de 10 demonstraram intenção de pagar — 30%; pagamentos reais pendentes |
| Recomendação | Usuários recomendam a plataforma a outros comerciantes | 3 de 10 afirmaram que recomendariam — 30% |

### Exemplo do funil

Considerando os dados dos dez visitantes:

- **Aquisição:** 10 visitantes.
- **Ativação:** pendente de avaliação.
- **Retenção:** 4 visitantes retornaram.
- **Não retorno:** 6 visitantes.
- **Intenção de pagamento:** 3 visitantes.
- **Intenção de recomendação:** 3 visitantes.

**Cálculo da retenção:**

(4 ÷ 10) × 100 = **40%**

**Cálculo do não retorno:**

((10 − 4) ÷ 10) × 100 = **60%**

**Análise:** o principal ponto de atenção observado é o retorno dos usuários, pois seis dos dez visitantes não voltaram durante o período observado. Entretanto, ainda não é possível afirmar qual é a maior queda de todo o funil, porque a ativação dos dez visitantes e a receita real ainda precisam ser avaliadas.

Os três visitantes que disseram que pagariam demonstram intenção de compra, mas essa informação não confirma a contratação de um plano.

A equipe deverá acompanhar essas etapas com os mesmos critérios e períodos de medição para identificar onde estão as maiores dificuldades.

## 6. Decisão coletiva

### Duas opções de ação

| Opção | O que ganhamos | O que abrimos mão |
|---|---|---|
| **A — Melhorar o primeiro acesso e investigar o não retorno** | Pode facilitar a utilização inicial e incentivar os visitantes a voltar | Parte do tempo de desenvolvimento será dedicada à experiência do usuário |
| **B — Corrigir bugs e melhorar a estabilidade** | Pode tornar o sistema mais confiável e evitar falhas nas movimentações financeiras | As melhorias no primeiro acesso podem ficar para depois |

### Número que orienta a escolha

Na avaliação dos dez visitantes, **6 não retornaram**, representando 60% do grupo. Além disso, o NPS registrado foi de -10.

Por esse motivo, a opção A é uma prioridade sugerida: investigar as dificuldades de utilização, melhorar as orientações iniciais e entender por que os visitantes não voltam.

Entretanto, se existirem bugs críticos que comprometam o uso seguro e correto do sistema, a equipe deverá considerar sua gravidade antes de definir a ordem das tarefas.

**Registro do voto:** a equipe deve discutir as duas alternativas, realizar a votação e registrar a decisão final, incluindo eventuais discordâncias, no arquivo `metricas/decisao.md`.

## 7. Plano de acompanhamento

1. Registrar os dados reais disponíveis e definir o período de medição.
2. Identificar quantos dos dez visitantes realizaram a primeira movimentação financeira.
3. Continuar acompanhando o retorno dos usuários durante um período definido.
4. Confirmar as dez respostas utilizadas no cálculo do NPS e manter o registro das avaliações.
5. Conferir os bugs em aberto e os commits no GitHub.
6. Verificar se houve contratação de planos pagos e registrar a receita real.
7. Registrar a melhoria escolhida em uma Issue do GitHub.
8. Implementar a mudança e testar o funcionamento com participantes externos.
9. Repetir a medição após a implementação, utilizando critérios e períodos comparáveis.
10. Registrar os resultados e decidir se a melhoria deve ser mantida ou ajustada.

## 8. Resumo dos indicadores

| Métrica | Tipo | Valor atual | Próxima ação se piorar |
|---|---|---|---|
| Taxa de ativação | Produto | Pendente para os 10 visitantes; teste inicial: 60% | Simplificar cadastro e primeiro acesso |
| Retenção | Produto | 40% — 4 de 10 visitantes | Investigar por que os usuários não retornam |
| NPS | Produto | -10 — 10 avaliações | Analisar opiniões e conversar com usuários |
| Bugs em aberto | Código | A conferir no GitHub | Priorizar correções por gravidade |
| Commits por semana | Código | A conferir no GitHub | Investigar bloqueios e revisar tarefas |

**Indicadores complementares:**

- Intenção de pagamento: 30% — 3 de 10 visitantes.
- Intenção de recomendação: 30% — 3 de 10 visitantes.
- Receita real: pendente de avaliação.
- Churn: pendente de avaliação após definição do período de acompanhamento.

## 9. Conclusão

O painel reúne três métricas principais de produto — taxa de ativação, retenção e NPS — e duas métricas de código — bugs em aberto e commits por semana. Também acompanha a intenção de pagamento e de recomendação para compreender melhor o interesse dos visitantes pela Clean-Financy.

Os dados disponíveis mostram que quatro dos dez visitantes retornaram ao sistema, três demonstraram intenção de pagar e três afirmaram que recomendariam o produto. O NPS calculado a partir das dez avaliações foi de -10.

A principal oportunidade de melhoria observada é investigar por que seis dos dez visitantes não retornaram. A equipe deverá validar as causas, confirmar coletivamente a prioridade e acompanhar os resultados após a implementação.

As métricas de ativação dos dez visitantes, receita real, churn e código ainda precisam ser avaliadas. Esses dados serão importantes para completar o painel e permitir decisões mais precisas.

**Próxima revisão:** a definir após a coleta dos dados pendentes e a implementação da melhoria.
