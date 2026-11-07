# O Mensageiro: Game Design Document (GDD)

2026-11-06 · Cléo Quintiliano Fernandes de Brito

## 1. Visão geral

**Conceito em uma frase:** o estudante faz o papel do computador e conduz um robô mensageiro pela cidade, lendo, executando, prevendo e consertando o código que leva pão, remédio e cartas a quem precisa.

| Item | Definição |
| --- | --- |
| Gênero | Quebra-cabeça educacional de leitura e depuração de código, com progressão por mapa |
| Público principal | Estudantes do 7º e 8º ano do Ensino Fundamental (11 a 14 anos) |
| Público secundário | Docentes de Computação que aplicam o material a partir da MEC RED |
| Plataforma | Aplicação web no navegador, em computador de laboratório ou celular, sem instalação |
| Duração | Missões de 3 a 5 minutos; jornada completa em 4 aulas de 50 minutos |
| Modo de jogo | Individual ou em dupla (piloto e navegador) |
| Versão atual | Versão de teste: 4 capítulos, 19 missões, modos Rastrear, Prever e Depurar |
| Base pedagógica | Compreensão de código antes da escrita; BNCC Computação, habilidade central EF07CO02 |
| Planejamento | Framework 5W2H (Klock; Gasparini; Pimenta, 2016) com a Taxonomia de Toda et al. (2019) |

**Pilares de design.** Toda decisão do jogo passa por estes cinco critérios:

1. **Ritmo primeiro.** Uma tecla é uma instrução, com resposta imediata. Recurso que deixa o ciclo mais lento sai ou vira opcional.
2. **O código manda.** O que importa é o que o código diz, não o desenho. Mapas e casas ajudam, mas não substituem a leitura.
3. **Errar é recomeçar, não perder.** O erro ensina em camadas e o estudante continua do ponto onde errou.
4. **Valores mostrados, não ditos.** A casa acende e alguém aparece à janela. Nenhuma frase moral na tela.
5. **Leve e sóbrio.** Visual limpo, pouco texto, nada infantilizado para adolescentes.

## 2. Narrativa, mundo e personagens

**Premissa.** Uma pequena cidade acorda com as casas apagadas. O mensageiro começa a trabalhar na padaria e, a cada entrega, uma casa se acende e alguém aparece à janela. Ao fim da jornada, a cidade inteira está iluminada e os moradores se reúnem numa festa.

**Tom.** Acolhedor e leve, sem vilão e sem violência. O conflito é sempre o mesmo: alguém precisa de algo e o caminho até essa pessoa está escrito em código.

**Valores implícitos.** Servir, partilhar, parar para ajudar quem está à margem do caminho, buscar quem se perdeu e recomeçar sem culpa. Eles aparecem nas situações da história, nunca em frases morais. Assim, o material serve tanto à escola pública laica quanto à escola confessional.

**Como a história é contada.** Uma imagem e uma frase no início de cada capítulo, que o estudante pode pular. Durante as missões, a história vive só no mapa: o nome da missão diz quem espera a entrega e a casa acesa mostra que a entrega aconteceu.

### Personagens

| Personagem | Papel | Direção de arte |
| --- | --- | --- |
| O Mensageiro | Avatar controlado pelo estudante. Não fala: quem "pensa" por ele é o estudante | Robô redondo com anel turquesa, rosto simples e bolsa amarela |
| Moradores | Destinatários das entregas: Ana, Seu João, Dona Rosa, a creche e outros | Silhuetas que aparecem à janela quando a casa acende; sem rosto detalhado, para que qualquer estudante se reconheça |
| O novato (capítulo 5) | Mensageiro iniciante a quem o jogador ensina rotas | Versão menor do Mensageiro |
| O filhote (capítulo 7) | Animal perdido que o mensageiro procura | Silhueta simples |

### O mundo

A cidade é dividida em bairros, um por capítulo. Cada bairro tem uma regra visual que antecipa o conceito: no bairro das ruas repetidas, os quarteirões têm o mesmo desenho; no bairro das decisões, as calçadas têm formas e cores que mudam o caminho. O mapa das missões dá a volta nas bordas (mapa toroidal), o que exige ler o código em vez de confiar no desenho.

## 3. Mecânicas centrais

Todas as missões usam o mesmo motor: um interpretador que executa o código uma instrução por vez e compara cada passo com a jogada do estudante.

| Modo | O que o estudante faz | Interação | Objetivo de aprendizagem |
| --- | --- | --- | --- |
| **Rastrear** | Executa o código linha a linha, movendo o mensageiro | Setas do teclado, botões na tela ou deslizar o dedo; Entregar com Enter ou botão | Seguir o fluxo de controle e o estado do programa |
| **Prever** | Antes de executar, toca na casa onde o mensageiro vai parar | Um toque no mapa e o botão Conferir | Raciocinar sobre o programa inteiro e acabar com o avanço por tentativa e erro |
| **Depurar** | O código deveria acender as casas, mas falha. O estudante executa, observa, toca no número suspeito e gira o valor | Executar, tocar no número, girar para cima ou para baixo | EF07CO02: detectar e remover erros |
| **Explicar** (versão completa) | Escolhe, entre três frases, a que descreve o que o código faz | Um toque | Dizer o propósito do código com palavras |

**Teste de mesa.** Quando a missão tem variáveis, aparece uma tabela ao lado do mapa com o valor de cada variável a cada linha executada. Ela nasce vazia e é preenchida conforme o estudante avança.

**Condições por forma e cor.** As calçadas têm ● laranja, ▲ roxo e ■ verde. A forma garante que estudantes com daltonismo leiam a condição. A partir do capítulo 3, as condições passam a usar variáveis e operadores.

**Armadilhas didáticas.** Desenho que engana (o mapa sugere um caminho, o código manda outro), "se" que não é "enquanto", mapa que dá a volta nas bordas e laços aninhados.

**Rejogar com variação.** Uma missão já concluída pode voltar espelhada, para que o estudante não decore o caminho.

**Controles.**

- Teclado: setas para mover, Enter para entregar.
- Toque: botões grandes e deslizar o dedo sobre o mapa.
- Em dupla: o piloto controla, o navegador lê o código em voz alta e confere; os papéis trocam a cada missão.

## 4. Loop de jogo e mapa de progressão

### Loop central (cada missão, 3 a 5 minutos)

Ler o código, executar ou prever, receber retorno imediato, entregar, ver a casa acender e voltar ao mapa.

### Loop de sessão (uma aula)

Entrar, fazer a revisão do dia (versão completa), avançar pelo bairro atual no mapa, ver o bairro se iluminar e anotar o código de progresso.

### Mapa de progressão da cidade (decisão de design)

**Situação atual.** Desde 06/11/2026, a versão de teste tem o mapa da cidade: um bairro por capítulo, casas ligadas por uma rua em zigue-zague, casas que acendem, trecho de rua já percorrido mais escuro, barra "casas acesas" da cidade, botão Continuar e o mensageiro que caminha até a próxima casa ao fim de cada missão. No celular, a rua fica na vertical. Antes disso, o mapa era uma lista de círculos por capítulo.

**Proposta.** Trocar a lista por um mapa da cidade no estilo dos mapas de mundo dos jogos de plataforma, como o de Super Mario Bros. 3: o mensageiro anda por ruas que ligam as missões, e cada bairro corresponde a um capítulo.

**Por que vale a pena.**

- **A progressão vira parte da história.** Neste jogo, o mapa é o próprio mundo. As casas acesas nas missões continuam acesas no mapa, e a cidade se ilumina diante do estudante. Isso mostra os valores sem dizer nada.
- **Atende ao elemento Progressão** da dimensão de desempenho da taxonomia de Toda et al. (2019), já previsto no esboço, de forma muito mais visível que uma lista.
- **Apoia competência e autonomia**, duas das necessidades psicológicas básicas da Teoria da Autodeterminação (Ryan; Deci, 2000): o estudante vê quanto já percorreu e pode escolher caminhos opcionais.
- **Orienta o professor.** Numa olhada, ele vê em que bairro cada estudante está.

**Riscos e como evitá-los.**

| Risco | Cuidado no design |
| --- | --- |
| Mais um clique antes de jogar quebra o ritmo | Botão "Continuar" na tela inicial leva direto à próxima missão; o mapa é para quem quer explorar |
| Mapa grande demais no celular | Um bairro por tela, com rolagem horizontal entre bairros |
| Caminhos livres deixam pular pré-requisitos | Caminho principal linear; só os ramos opcionais são livres |
| Mapa vira enfeite caro de produzir | Mapa em SVG gerado a partir dos dados das missões, sem ilustração feita à mão |
| Acessibilidade | Navegação por teclado entre os pontos e uma vista em lista como alternativa |

**Elementos inspirados nos mapas de mundo, adaptados ao jogo.**

| Elemento | No Mensageiro |
| --- | --- |
| Fase | Casa de um morador, ligada à anterior por uma rua |
| Avatar que anda no mapa | O mensageiro caminha até a próxima casa ao concluir uma missão |
| Castelo do fim do mundo | Missão de depurar no fim de cada bairro, "o grande conserto" |
| Casas de bônus | Missões opcionais em ramos laterais, para quem quer a terceira estrela ou mais desafio |
| Atalhos | Liberados ao concluir um bairro com todas as estrelas; nunca obrigatórios |
| Mundo seguinte | Novo bairro aparece quando o anterior se ilumina |

**Escopo.** Feito na versão de teste: 4 bairros, ruas, casas que acendem, mensageiro andando, botão Continuar e o "grande conserto" (ícone de chave) na última missão do bairro 4, que é de depurar. Ramos opcionais, atalhos e o mensageiro seguindo a curva da rua ficam para a versão completa.

## 5. Estrutura de conteúdo

### Jornada completa: 7 capítulos e um epílogo

| Capítulo (bairro) | Conceitos | Valor implícito |
| --- | --- | --- |
| 1. Primeiro dia | Sequência; o código vale mais que o desenho | Servir começa no pequeno |
| 2. Ruas que se repetem | Repetição com número fixo, laços aninhados, mapa que dá a volta | Constância |
| 3. A mochila | Variáveis, tipos, operadores aritméticos, entrada e saída | Partilha |
| 4. Decisões no caminho | se, senão, operadores relacionais, E, OU, NÃO, enquanto | Cuidar de quem está à margem |
| 5. Rotas reaproveitadas | Funções com parâmetros e retorno | Ensinar o que se aprendeu |
| 6. A lista de quem espera | Listas, percorrer, contador e acumulador | Ninguém fica de fora |
| 7. O filhote perdido | Recursão | Buscar quem se perdeu |
| Epílogo: a festa do bairro | Todos os conceitos | Comunidade e gratidão |

### Versão de teste: 4 capítulos, 19 missões

| Capítulo | Missões (modo) |
| --- | --- |
| 1. Primeiro dia | 1-1 Pão para Ana (rastrear) · 1-2 Leite para Seu João (rastrear) · 1-3 O desenho engana (rastrear) · 1-4 Onde ele para? (prever) |
| 2. Ruas que se repetem | 2-1 A rua comprida (rastrear) · 2-2 Escada de quarteirões (rastrear) · 2-3 A rua dá a volta (rastrear) · 2-4 Remédio para Dona Rosa (depurar) · 2-5 Volta e sobe (prever) |
| 3. A mochila | 3-1 Dois pães, duas casas (rastrear) · 3-2 Contando os passos (rastrear) · 3-3 Quantas entregas? (prever) · 3-4 Pão para três casas (depurar) · 3-5 O caderno de entregas (rastrear) |
| 4. Decisões no caminho | 4-1 A calçada laranja (rastrear) · 4-2 Se não é enquanto (rastrear) · 4-3 Subir ou seguir (rastrear) · 4-4 Enquanto for verde (prever) · 4-5 Carta para a creche (depurar) |

### Regras de desenho das missões

- No máximo 8 linhas de código por missão.
- Um conceito novo só entra depois que o anterior foi praticado em pelo menos duas missões.
- A primeira missão de cada capítulo é tutorial: casa visível e caminho direto.
- Nas demais missões de rastrear, o mapa deve ter casas que não recebem entrega e caminhos que não são o mais curto, para que a casa visível não vire atalho (decisão pendente, ver seção 13).
- Toda missão de depurar tem um único erro plantado, num número que pode ser girado, e mais de uma correção válida é aceita quando o resultado é o mesmo.
- Prever aparece em cerca de uma missão por capítulo, para não virar rotina.

## 6. Feedback, erro e dicas

**Erro em camadas.** O retorno cresce aos poucos, para não quebrar o ritmo:

| Momento | O que acontece | Texto na tela |
| --- | --- | --- |
| 1º erro no passo | A linha treme e um "fantasma" do mensageiro mostra para onde o código mandava ir | Nenhum |
| 2º erro no mesmo passo | Pista curta ligada ao tipo de instrução, por exemplo "olhe a cor da calçada" | Até seis palavras |
| Dica pedida | Explicação completa do passo | Uma ou duas frases |

O estudante continua do ponto do erro, nunca do zero.

**Dicas.** Três dicas gratuitas por capítulo, sem moedas e sem compra. A dica é um andaime que o estudante decide quando usar.

**Estrelas.** De 1 a 3 por missão: concluiu; concluiu sem dica; concluiu de primeira. Aparecem só no mapa e na tela de fim de missão, nunca durante o jogo.

**Acerto.** A casa acende, alguém aparece à janela e um som curto confirma a entrega.

**Depurar.** Ao executar o código com erro, o mensageiro percorre o caminho, as casas que ficaram apagadas são marcadas e uma frase curta orienta o estudante a tocar num número do código. Se o mensageiro não para nunca, a frase avisa que algo no código não muda. A linha do erro só é destacada quando o estudante usa uma dica, para que ele procure primeiro.

**Prever.** Ao conferir, a execução é mostrada passo a passo. Se o mensageiro parar em outro lugar, ou se o valor previsto da variável estiver errado, uma frase curta diz qual dos dois falhou e o estudante prevê de novo.

## 7. Gamificação

Os elementos seguem a Taxonomia de Toda et al. (2019), dentro da dimensão "Como" do Framework 5W2H (Klock; Gasparini; Pimenta, 2016). Cada elemento precisa servir à compreensão do código.

| Dimensão | Elemento | Como aparece | Versão |
| --- | --- | --- | --- |
| Ficcional | Narrativa e contar histórias | Imagem e frase por capítulo; morador em cada missão | Teste |
| Desempenho | Progressão | Mapa da cidade que se ilumina, bairro por bairro (seção 4) | Teste (simples) e completa |
| Desempenho | Pontos e estatísticas | Estrelas de 1 a 3, visíveis só no mapa | Teste |
| Desempenho | Reconhecimento | Insígnias por conceito dominado | Completa |
| Pessoal | Quebra-cabeça e objetivo | Cada missão tem destino e pessoa explícitos | Teste |
| Pessoal | Novidade e renovação | Missões espelhadas ao rejogar; revisão do dia | Teste (espelho) e completa |
| Pessoal | Sensação | Casa que acende, sons curtos, opção de silenciar | Teste |
| Social | Cooperação | Dupla de piloto e navegador | Guia do professor |

**Evitados de propósito.**

- **Moedas e loja:** substituídas por 3 dicas gratuitas por capítulo, para não criar uma economia que compete com o desafio.
- **Ranking público:** expõe quem está atrás, o que desmotiva sobretudo estudantes de territórios vulneráveis.
- **Pressão de tempo:** rastrear exige atenção, não pressa. Só em missões bônus opcionais.
- **Frases morais na tela:** adolescentes rejeitam sermão; os valores ficam na história.

## 8. Arte, interface e tipografia

**Direção de arte.** Leve, limpa e sóbria, com formas planas e muito espaço em branco. Nada de texturas, sombras pesadas ou personagens infantis.

**Paleta.**

| Uso | Cor |
| --- | --- |
| Fundo | #F7F9FC |
| Texto principal | #1F2A44 |
| Azul de ação (botões, linha atual) | #1D3F86 |
| Turquesa (mensageiro, acertos) | #16A8A6 |
| Amarelo (entregar, luz da janela) | #FFD45C |
| Coral (telhado da casa acesa) | #FF7A59 |
| Palavra-chave do código | #B4235A |
| Condições | ● laranja #FF9F43 · ▲ roxo #8E6CEF · ■ verde #2BB673 |

**Tipografia.** Ubuntu para a interface e Ubuntu Mono para o código, as duas embutidas no arquivo, para funcionar sem internet. O código usa tamanho grande, de 19 a 24 px, conforme a tela.

**Elementos visuais.**

- Casa em SVG: apagada em tons de cinza; acesa com telhado coral, janela amarela e alguém à janela.
- Mensageiro em SVG: anel turquesa, rosto simples e bolsa amarela. Ao chegar a uma casa, ele diminui e se posiciona ao lado dela para não cobri-la.
- Ruas como círculos cinza claros em grade.

**Telas.**

| Tela | Conteúdo |
| --- | --- |
| Início | Nome do jogo, frase de chamada, Jogar, Tenho um código e uma fileira de casas animada |
| Mapa | Mapa da cidade com botão Continuar, barra de casas acesas e um bairro por capítulo (seção 4) |
| Abertura de capítulo | Uma imagem e uma frase, com botão de pular |
| Missão | Barra superior (voltar, título, modo, Dica, Mudo), código à esquerda, mapa no centro, teste de mesa à direita, controles embaixo |
| Fim de missão | Estrelas, próxima missão e voltar ao mapa |

**Celular primeiro.** Na tela estreita, o código fica em cima, o mapa embaixo e os controles ao alcance do polegar. Botões com pelo menos 44 px.

## 9. Áudio, acessibilidade e inclusão

**Áudio.** Sons curtos gerados no próprio navegador (Web Audio), sem arquivos: passo, entrega, acerto e erro. O erro tem som suave, nunca de punição. O botão Mudo fica sempre visível, porque o jogo é usado em laboratório com muitos computadores juntos. Música de fundo não está prevista.

**Acessibilidade.**

| Necessidade | Solução | Situação |
| --- | --- | --- |
| Daltonismo | Condições por forma e cor juntas (● ▲ ■) | Feito |
| Uso sem mouse | Teclado completo: setas, Enter e navegação por Tab | Feito |
| Leitor de tela | Rótulos descritivos nos botões e nas missões do mapa | Parcial |
| Sensibilidade a movimento | Respeita a preferência de reduzir movimento do sistema | Feito |
| Baixa visão | Alto contraste e código grande; tamanho de letra ajustável | Ajuste de letra na versão completa |
| Coordenação motora | Áreas de toque grandes e nenhuma ação com tempo limite | Feito |

**Inclusão.**

- Sem ranking e sem exposição de quem erra.
- Moradores sem rosto detalhado, para que qualquer estudante se reconheça.
- Funciona em computador antigo de laboratório e em celular, inclusive com dois estudantes num aparelho.
- Funciona sem internet depois de aberto.
- Pouco texto na tela, para não excluir quem ainda lê devagar.

## 10. Progresso, dados e privacidade

**Problema a resolver.** Jogos que guardam o progresso só no navegador fazem o estudante recomeçar do zero ao trocar de computador ou limpar o navegador, o que frustra. A repetição deve ser escolhida dentro do jogo, não imposta pela perda de progresso.

| Versão | Como o progresso é salvo | Dados pessoais |
| --- | --- | --- |
| Teste (23/11) | No aparelho, e num **código de progresso** curto (por exemplo, M1-…) que o estudante anota e digita em outro computador. O código tem um dígito de verificação para detectar erro de digitação | Nenhum |
| Completa | No servidor, por login com o e-mail institucional da escola ou por apelido aleatório com código de recuperação | E-mail institucional, ou nenhum no caso do apelido |

**Apelido aleatório.** O professor cria a turma, a aplicação gera apelidos como "Mensageiro Lontra 427" e o professor imprime um cartão por estudante. A relação entre apelido e nome real fica só com o professor, no papel.

**Regras de proteção de dados.**

- Melhor interesse do estudante, conforme a LGPD, art. 14, e o Enunciado CD/ANPD nº 1/2023.
- Mínimo de dados: sem nome, foto, localização ou contato; sem anúncios e sem rastreadores de terceiros.
- Exclusão dos dados da turma ao fim do ano letivo ou a pedido.
- O termo de uso deve ser validado pela escola ou pela secretaria de educação antes da aplicação. Estas regras são proposta de projeto, não parecer jurídico.

## 11. Tecnologia e arquitetura

**Uma estrutura, várias linguagens.** Cada missão é guardada como uma árvore sintática abstrata (AST), uma estrutura de dados que representa o programa sem depender de linguagem. Um único interpretador executa a árvore e gera o rastro completo da execução (posição, variáveis, casas acesas a cada passo). Cada linguagem é só uma forma de exibir a mesma árvore.

| Exibição | Exemplo da mesma condição | Versão |
| --- | --- | --- |
| Pseudocódigo em português com símbolos | `se ● {` | Teste |
| Blocos (Blockly) | Bloco colorido de condição | Futura |
| Python | `if casa_laranja():` | Futura |
| JavaScript | `if (casaLaranja()) {` | Futura |

**Versão de teste (feita).**

| Parte | Tecnologia |
| --- | --- |
| Motor | JavaScript puro: construtores da árvore, `layout` (gera as linhas de código), `simulate` (gera o rastro) e espelhamento de missões |
| Interface | Um único arquivo HTML com CSS e JavaScript, fontes embutidas, sem dependências externas |
| Progresso | localStorage e código de progresso |
| Qualidade | Teste automático que joga todas as missões, inclusive espelhadas, e testes de interface com Playwright |

**Versão completa (prevista).**

| Camada | Tecnologia |
| --- | --- |
| Interface | React com TypeScript (Vite), como PWA |
| Motor | Interpretador da árvore em TypeScript |
| Missões | Arquivos JSON com árvore, mapa, erro plantado e dicas |
| Sem internet | Service Worker e IndexedDB |
| Servidor | Supabase (PostgreSQL, autenticação e Row Level Security), região São Paulo |
| Login | OAuth com Google restrito ao domínio da escola |
| Hospedagem | CDN, como Cloudflare Pages ou Vercel |
| Qualidade | Vitest, Playwright, axe e GitHub Actions |

## 12. Avaliação, métricas, escopo e cronograma

**O que medir.**

| O que se mede | Instrumento | Indicador |
| --- | --- | --- |
| Rastreio e depuração | Pré e pós-teste com questões equivalentes | Diferença de acertos |
| Domínio por conceito | Registros da aplicação | Acertos de primeira por conceito |
| Autonomia | Registros da aplicação | Dicas usadas e sua queda ao longo dos capítulos |
| Concepções equivocadas | Registros da aplicação | Erros mais frequentes, como tratar "se" como "enquanto" |
| Experiência | Teste de jogo com uma turma de 7º ano | Onde travam, comemoram e desistem |
| Engajamento | Questionário validado (a escolher) | Interesse e vontade de continuar |
| Valores | Roda de conversa guiada | Relações entre a história e o cotidiano |

**Escopo por versão.**

| Item | Teste (23/11) | Completa |
| --- | --- | --- |
| Capítulos | 1 a 4, 19 missões | 1 a 7 e epílogo |
| Modos | Rastrear, Prever, Depurar | Mais Explicar |
| Mapa | Mapa da cidade simples (feito) | Ramos opcionais e atalhos |
| Progresso | Aparelho e código de progresso | Servidor, e-mail institucional ou apelido |
| Linguagens | Pseudocódigo com símbolos | Blocos, Python e JavaScript |
| Professor | Guia e plano de 4 aulas | Painel da turma |

**Cronograma.**

| Data | Entrega |
| --- | --- |
| 06/11/2026 | Apresentação de 5 minutos da proposta |
| Até 15/11 | Ajustes das missões de rastrear (mapa da cidade já feito) |
| Até 20/11 | Teste de jogo com turma, guia do professor e plano de aulas |
| 23/11/2026 | Coleção na MEC RED e envio por e-mail ao professor da disciplina |

## 13. Riscos e decisões em aberto

**Decisões em aberto.**

| Decisão | Opções | Recomendação |
| --- | --- | --- |
| Mapa da cidade na versão de teste | Decidido em 06/11: mapa simples feito | Fazer o mapa simples; ramos e atalhos depois |
| Casa visível nas missões de rastrear | Manter como está ou incluir casas que despistam e caminhos que não são o mais curto | Incluir, mantendo a 1-1 como tutorial |
| Questionário de engajamento | Escolher instrumento validado na literatura | Escolher e conferir a referência antes do teste |
| Texto oficial das habilidades da BNCC | Copiar do anexo do Parecer CNE/CEB nº 2/2022 | Fazer antes da entrega |

**Riscos.**

| Risco | Efeito | Mitigação |
| --- | --- | --- |
| Somar recursos e perder o ritmo | Estudantes perdem o interesse | Pilar "ritmo primeiro"; tudo novo é opcional ou aparece só quando necessário |
| Casa visível virar atalho | Estudante não lê o código | Casas que despistam e caminhos não óbvios |
| Escopo maior que o prazo | Entrega incompleta em 23/11 | Escopo da versão de teste fechado; o restante vai documentado no guia |
| Login institucional depender da secretaria | Atraso na versão completa | Código de progresso funciona sem login |
| Internet instável no laboratório | Aula interrompida | Arquivo único que funciona sem internet |
| Narrativa de valores parecer sermão | Rejeição pelos adolescentes | Valores só nas situações, nunca em frases |

## 14. Referências

AUTORIDADE NACIONAL DE PROTEÇÃO DE DADOS (Brasil). **Enunciado CD/ANPD nº 1, de 24 de maio de 2023**. Trata das hipóteses legais para o tratamento de dados pessoais de crianças e adolescentes. Brasília, DF: ANPD, 2023.

BRASIL. **Lei nº 13.709, de 14 de agosto de 2018**. Lei Geral de Proteção de Dados Pessoais (LGPD). Brasília, DF: Presidência da República, 2018.

BRASIL. Conselho Nacional de Educação. Câmara de Educação Básica. **Resolução CNE/CEB nº 1, de 4 de outubro de 2022**. Normas sobre Computação na Educação Básica, Complemento à BNCC. Diário Oficial da União, Brasília, DF, 6 out. 2022, Seção 1, p. 33.

KLOCK, A. C. T.; GASPARINI, I.; PIMENTA, M. S. 5W2H Framework: a guide to design, develop and evaluate the user-centered gamification. In: BRAZILIAN SYMPOSIUM ON HUMAN FACTORS IN COMPUTING SYSTEMS, 15., 2016, São Paulo. **Proceedings** [...]. New York: ACM, 2016. p. 14:1-14:10.

RYAN, R. M.; DECI, E. L. Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. **American Psychologist**, v. 55, n. 1, p. 68-78, 2000. DOI: 10.1037/0003-066X.55.1.68.

TODA, A. M. et al. Analysing gamification elements in educational environments using an existing gamification taxonomy. **Smart Learning Environments**, v. 6, n. 1, art. 16, p. 1-14, 2019. DOI: 10.1186/s40561-019-0106-1.

TOXICODE. **Compute It**. Jogo digital. Disponível em: https://compute-it.toxicode.fr/. Acesso em: 5 nov. 2026.

Documentos relacionados: esboço da atividade (5W2H), relatório de novidade e diferenciação e apresentação de 06/11/2026.
