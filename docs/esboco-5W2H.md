# O Mensageiro: esboço da atividade gamificada (5W2H)

2026-11-05 · Cléo Quintiliano Fernandes de Brito

## Visão geral

O Mensageiro é uma aplicação web gamificada em que o estudante faz o papel do computador: lê um código, executa, prevê e conserta. Inspirada no Compute It (Toxicode), ela acrescenta o que o original não tem: variáveis, operadores, depuração, retorno ao erro e narrativa.

- **Formato:** plugado, aplicação web que roda no navegador de computador ou celular, sem instalação, com o progresso salvo no servidor. As fases começam em pseudocódigo com símbolos gráficos, e a arquitetura já prevê blocos, Python e JavaScript.
- **Narrativa em uma frase:** um robô mensageiro atravessa a cidade levando pão, remédio e cartas; cada missão é alguém que precisa dele, e cada código é o caminho até essa pessoa.
- **Ideia central:** entender um programa vem antes de escrevê-lo. O estudante rastreia (executa o código de cabeça), prevê o resultado, encontra erros e explica o que o código faz.
- **Valores implícitos:** cuidado com quem está à margem do caminho, partilha, buscar quem se perdeu e recomeço sem punição. Nenhuma referência religiosa é explícita, o que mantém o material adequado à escola pública laica e à escola confessional.

## Estrutura adotada: 5W2H com a Taxonomia de Toda no "Como"

O planejamento segue o Framework 5W2H de Klock, Gasparini e Pimenta (2016), e a Taxonomia de Toda et al. (2019) fornece os elementos de jogo da dimensão "Como".

1. **Processo, não catálogo.** A taxonomia lista 21 elementos em 5 dimensões; o 5W2H obriga a decidir público, finalidade, momento, implementação e avaliação. Isso evita gamificação reduzida a pontos e medalhas.
2. **Aplicação por outros docentes.** As dimensões "Quando" e "Onde" se convertem diretamente no guia do professor exigido para a MEC RED.
3. **Avaliação.** A dimensão "Quanto" torna a atividade pesquisável, o que interessa ao mestrado.
4. **Coerência teórica.** Ana Carolina Tomé Klock é coautora das duas obras, então usá-las juntas segue a própria linha de pesquisa dos autores.

## 1. Quem (Who): público-alvo

Estudantes do 7º e 8º ano do Ensino Fundamental, com extensão possível ao 1º ano do Ensino Médio técnico como revisão de lógica de programação.

| Característica | Implicação no design |
| --- | --- |
| 11 a 14 anos, já tiveram contato com programação em blocos | Pseudocódigo em português, curto, com cores e formas; progressão do concreto ao abstrato |
| Níveis de leitura e de experiência muito diferentes na mesma turma | Dicas gratuitas (3 por capítulo) e fases bônus permitem ritmos diferentes |
| Muitos estudantes de territórios vulneráveis | Sem ranking público; protagonismo positivo na narrativa; erro sem punição |
| Menores de idade | Progresso salvo no servidor com o mínimo de dados: e-mail institucional da escola ou usuário com nome aleatório (ver "Onde") |
| Acesso desigual a equipamentos | Funciona em computador do laboratório e em celular, inclusive em dupla num único aparelho |
| Estudantes com daltonismo ou baixa visão | Condições representadas por forma e cor juntas, alto contraste |

**Docentes** são o segundo público: professores de Computação que vão aplicar o material sem a presença do autor, a partir da MEC RED.

## 2. O quê (What): conteúdos e tarefas

O Compute It cobre fluxo de controle, mas não tem dados: não há variável, operador, entrada, saída nem lista. O Mensageiro mantém o fluxo de controle e acrescenta esse núcleo da lógica de programação, sempre dentro da história.

### Conteúdos de lógica de programação

| Conceito | No Compute It | No Mensageiro (exemplo na história) |
| --- | --- | --- |
| Sequência de comandos | Sim | `andar()`, `virar_esquerda()`, `entregar()` |
| Repetição com número fixo | Sim, sem variável visível | `para i de 1 até 4 { andar() }`, com o valor de `i` mostrado a cada volta |
| Seleção (se, senão, senão se) | Sim, só por cor da casa | `se casa = padaria { pegar_pão() }` |
| Repetição com condição (enquanto) | Sim | `enquanto pães > 0 { entregar() }` |
| Negação | Sim | `se não chovendo { atalho() }` |
| Funções e recursão | Sim, sem parâmetros | Mantidas, agora com parâmetros e retorno |
| **Variáveis e atribuição** | Não | `pães ← 3`, `pães ← pães - 1` |
| **Tipos de dados** | Não | inteiro (`pães`), texto (`destinatário`), lógico (`chovendo`) |
| **Operadores aritméticos** | Não | `+ - * /` e resto da divisão, por exemplo dividir pães entre casas |
| **Operadores relacionais** | Não | `= ≠ > < ≥ ≤`, por exemplo `se remédios ≥ 1` |
| **Operadores lógicos E e OU** | Não (só negação) | `se idoso E sozinho { visitar() }` |
| **Contador e acumulador** | Não | `entregas ← entregas + 1`; `distância ← distância + passos` |
| **Entrada e saída** | Não | `ler(endereço)`; `escrever("Entregue a Clara")` |
| **Listas (vetores)** | Não | `rota ← ["Ana", "Bento", "Clara"]`; `rota[2]`; percorrer a lista |
| **Parâmetros e retorno de função** | Não | `andar(passos)`; `função falta(pães, casas) retorna casas - pães` |
| **Teste de mesa** | Não | Tabela que mostra o valor de cada variável a cada linha executada |

As condições por cor do Compute It continuam nas fases iniciais, porque são uma boa porta de entrada. A partir do capítulo 3, elas dão lugar a expressões com variáveis e operadores. O código aparece em pseudocódigo em português; em versões futuras, a mesma missão poderá ser exibida em blocos, Python ou JavaScript (ver "Onde").

### Tarefas do estudante (4 modos de desafio)

1. **Rastrear:** executar o código passo a passo com setas, deslizando o dedo ou tocando nos botões, como no Compute It.
2. **Prever:** antes de executar, tocar na casa onde o mensageiro vai terminar e, quando houver variável, girar o valor final dela. Aparece só em algumas missões, para não virar rotina, e impede o avanço por tentativa e erro.
3. **Depurar:** o código deveria levar o mensageiro até alguém, mas não leva. O estudante toca na linha suspeita e gira o número errado, como num cadeado, e executa de novo.
4. **Explicar:** escolher, entre três frases, a que descreve o que o código faz (versão completa).

## 3. Por quê (Why): finalidade e estímulos

O objetivo é desenvolver a leitura e a compreensão de código, que vêm antes da escrita, e a capacidade de encontrar e corrigir erros.

**Objetivos de aprendizagem.** Ao final, o estudante deve conseguir:

- rastrear um programa com variáveis, seleção, repetição e funções, registrando o teste de mesa;
- prever o resultado de um programa antes de executá-lo;
- localizar e corrigir erros de lógica;
- explicar com as próprias palavras o propósito de um trecho de código.

**Habilidades da BNCC Computação** (Normas sobre Computação na Educação Básica, Resolução CNE/CEB nº 1/2022):

| Código | Habilidade | Onde aparece no Mensageiro |
| --- | --- | --- |
| EF07CO02 | Analisar programas para detectar e remover erros, ampliando a confiança na sua correção. | Modo Depurar; é a habilidade central da atividade |
| EF06CO02 | Elaborar algoritmos que envolvam instruções sequenciais, de repetição e de seleção usando uma linguagem de programação. | Capítulos 1 a 4 (pré-requisito revisado) |
| EF06CO05 | Identificar entradas, saídas e seus tipos de dados (paráfrase) | Capítulo 3, variáveis, `ler` e `escrever` |
| EF06CO06 | Comparar instâncias de um problema e criar algoritmo genérico com parâmetros (paráfrase) | Capítulo 5, funções com parâmetros |
| EF07CO01 | Criar soluções com registros e vetores (paráfrase) | Capítulo 6, lista de entregas |
| EF07CO05 | Criar algoritmos com decomposição e reuso, de forma colaborativa (paráfrase) | Funções e modo em dupla |
| EF08CO01 | Criar soluções com recursão (paráfrase) | Capítulo 7 |
| EF08CO02 | Criar soluções com listas, com ou sem recursão (paráfrase) | Capítulos 6 e 7 |

O texto de EF07CO02 e EF06CO02 foi conferido em [computacional.com.br/bncc](https://www.computacional.com.br/bncc/); os demais estão parafraseados e devem ser copiados do anexo oficial do Parecer CNE/CEB nº 2/2022 antes da entrega.

**Estímulos a promover:** curiosidade pela história, sensação de competência ao acertar na primeira tentativa, autonomia ao decidir quando usar uma das dicas e pertencimento ao trabalhar em dupla.

## 4. Quando (When): jornada e momentos de uso

A jornada tem 7 capítulos e um epílogo. Cada capítulo tem de 6 a 8 missões curtas, de 3 a 5 minutos (microlearning), e um conceito novo só aparece depois que o anterior foi dominado.

| Capítulo | História | Conceitos | Valor implícito |
| --- | --- | --- | --- |
| 1. Primeiro dia | O mensageiro leva pão para a vizinha | Sequência; o código vale mais que o desenho | Servir começa no pequeno |
| 2. Ruas que se repetem | Rotas pelos quarteirões da cidade | Repetição com `para`, laços aninhados, mapa que dá a volta | Constância |
| 3. A mochila | Contar e repartir pães entre as casas | Variáveis, tipos, operadores aritméticos, `ler` e `escrever` | Partilha |
| 4. Decisões no caminho | Parar para ajudar alguém caído na estrada | `se`, `senão`, relacionais, E, OU, NÃO, `enquanto` | Cuidar de quem está à margem |
| 5. Rotas reaproveitadas | Ensinar a rota a um mensageiro novato | Funções com parâmetros e retorno | Ensinar o que se aprendeu |
| 6. A lista de quem espera | Ninguém da lista pode ficar sem entrega | Listas, percorrer, contador e acumulador | Ninguém fica de fora |
| 7. O filhote perdido | Procurar o filhote que se perdeu do rebanho | Recursão | Buscar quem se perdeu |
| Epílogo: a festa do bairro | Organizar a festa que reúne todos os ajudados | Integra todos os conceitos | Comunidade e gratidão |

**Repetição dentro da aplicação.** A repetição que é importante para aprender fica a cargo do jogo, não da perda de progresso:

- **Revisão do dia:** ao entrar, o estudante recebe 2 ou 3 missões curtas de capítulos anteriores, priorizando os conceitos em que mais errou (revisão espaçada).
- **Rejogar com variação:** qualquer missão concluída pode ser rejogada; o mapa e o código aparecem espelhados ou rotacionados, como no Compute It, para que não dê para decorar.
- **Estrelas por domínio:** a missão vale 1 a 3 estrelas (concluiu, sem dica, de primeira). Voltar para buscar a terceira estrela é uma repetição escolhida, não imposta.

**Sugestão de uso em sala (4 aulas de 50 minutos):**

1. Pré-teste de rastreio (10 min) e capítulos 1 e 2.
2. Revisão do dia, capítulos 3 e 4.
3. Capítulos 5 e 6 no modo em dupla.
4. Capítulo 7, epílogo, pós-teste e roda de conversa sobre a história e os erros mais comuns.

Como o progresso fica salvo, o estudante pode continuar em casa ou em outro computador da escola.

## 5. Como (How): mecânicas e elementos de jogo

Os elementos de jogo foram escolhidos para servir à compreensão do código, e não como enfeite.

**Erro em camadas, sem punição e sem texto moral.** No Compute It, o erro apenas reinicia a fase. No Mensageiro, o retorno cresce aos poucos, para não quebrar o ritmo:

1. **1º erro:** a linha treme e um "fantasma" do mensageiro mostra para onde o código mandava ir. Nenhum texto; o estudante continua do ponto do erro, não do zero.
2. **2º erro no mesmo passo:** aparece uma pista curta, de no máximo seis palavras, ligada ao conceito (por exemplo, "olhe a cor da casa atual").
3. **Explicação completa:** só quando o estudante pede, usando uma das dicas.

O recomeço sem punição é a própria mecânica. Nenhuma frase moral aparece na tela: os valores são mostrados pela história, não ditos.

**Elementos da Taxonomia de Toda et al. (2019) utilizados:**

| Dimensão | Elemento | Como aparece |
| --- | --- | --- |
| Ficcional | Narrativa e contar histórias | Uma imagem e uma frase no início do capítulo, que o estudante pode pular; durante as missões, a história vive só no mapa (a casa acende, alguém aparece à janela) |
| Desempenho | Progressão e nível | Mapa da cidade no estilo dos mapas de mundo dos jogos de plataforma: cada bairro é um capítulo, as missões são casas ligadas por ruas e a cidade se ilumina conforme o estudante avança (ver "Mapa de progressão da cidade") |
| Desempenho | Pontos e estatísticas | Estrelas por missão, visíveis só no mapa de fases, nunca durante o jogo |
| Desempenho | Reconhecimento | Insígnias por conceito dominado, como "Mestre das Repetições" (versão completa) |
| Pessoal | Quebra-cabeça e objetivo | Cada missão tem destino e pessoa explícitos, ao contrário do Compute It |
| Pessoal | Novidade e renovação | Mapas espelhados ou rotacionados ao rejogar; revisão do dia |
| Social | Cooperação | Modo em dupla: o piloto executa, o navegador lê o código e confere; os papéis trocam a cada missão |
| Pessoal | Sensação | Sons curtos e animações de entrega, com opção de silenciar e de reduzir o movimento |

**Dicas sem economia.** A versão anterior previa moedas para comprar dicas. Elas foram retiradas: cada capítulo oferece 3 dicas gratuitas. O andaime continua, sem uma economia competindo com o próprio desafio pela atenção do estudante.

**Elementos evitados de propósito:**

- **Ranking público e pressão social:** expor quem está em último lugar desmotiva, sobretudo estudantes de territórios vulneráveis.
- **Competição individual:** só aparece como desafio opcional entre equipes, escolhido pelo professor.
- **Pressão de tempo:** apenas em fases bônus, porque rastrear código exige atenção e não pressa.

### Experiência do estudante (UX e UI)

Os estudantes gostam do Compute It pelo ritmo, não pelo conteúdo: uma tecla é uma instrução, a resposta é imediata, não há texto para ler, o visual é sóbrio e errar custa pouco. O risco do Mensageiro é somar recursos e perder justamente isso. Por isso, o projeto segue nove princípios:

1. **Proteger o ciclo central.** Uma tecla é uma instrução, com resposta em menos de meio segundo; recurso que deixa o ciclo mais lento sai ou vira opcional.
2. **Revelação progressiva.** A tela inicial tem só código e mapa; o teste de mesa aparece apenas quando a missão tem variáveis.
3. **Erro em camadas.** Fantasma sem texto no 1º erro, pista curta no 2º, explicação só quando pedida.
4. **Valores mostrados, não ditos.** A casa acende e alguém aparece à janela; nenhuma frase moral na tela.
5. **Narrativa mínima.** Uma imagem e uma frase por capítulo, que o estudante pode pular.
6. **Manipulação direta.** Prever é um toque na casa final; depurar é tocar na linha e girar o número, como num cadeado. Nada de digitação.
7. **Recompensas discretas.** Estrelas só no mapa de fases; dicas gratuitas e limitadas.
8. **Visual sóbrio e adolescente.** Formas planas, código grande com no máximo 8 linhas por fase, paleta clara e leve, fonte Ubuntu (Ubuntu Mono no código), personagem sem diálogos; celular primeiro (código em cima, mapa embaixo, deslizar o dedo para mover).
9. **Acessibilidade sem perder estética.** Condições por forma e cor (● ▲ ■), uso completo pelo teclado, áreas de toque grandes e opção de reduzir o movimento.

### Mapa de progressão da cidade

O mapa de fases, antes uma lista de círculos por capítulo, virou em 06/11/2026 um mapa da cidade, como os mapas de mundo de jogos de plataforma (por exemplo, Super Mario Bros. 3): o mensageiro anda por ruas que ligam as missões e cada bairro corresponde a um capítulo.

- **Por que vale a pena:** neste jogo o mapa é o próprio mundo da história, então a progressão vira narrativa (as casas acesas continuam acesas e a cidade se ilumina). Isso fortalece o elemento Progressão de Toda et al. (2019) e apoia as necessidades de competência e autonomia da Teoria da Autodeterminação (Ryan; Deci, 2000).
- **Elementos adaptados:** casa de morador como fase; o mensageiro caminhando até a próxima casa; uma missão de depurar no fim de cada bairro, "o grande conserto"; casas bônus em ramos opcionais; atalhos liberados ao completar um bairro.
- **Cuidados:** botão "Continuar" que leva direto à próxima missão, para não acrescentar cliques; um bairro por tela no celular; caminho principal linear, com liberdade só nos ramos opcionais; mapa em SVG gerado a partir dos dados das missões; navegação por teclado e vista em lista como alternativa.
- **Escopo:** já feito na versão de teste, com os 4 bairros, ruas, casas que acendem, o mensageiro andando e o botão Continuar. Ramos opcionais e atalhos ficam para a versão completa.

O detalhamento completo do jogo está no Game Design Document (GDD) do Mensageiro.

## 6. Onde (Where): implementação

O Mensageiro é uma aplicação web acessada por link, com o progresso salvo em servidor. Isso corrige o principal problema do Compute It, que guarda o progresso só no navegador: ao trocar de computador ou limpar o navegador, o estudante perde tudo e precisa recomeçar do zero.

### Arquitetura: uma estrutura, várias linguagens

Cada missão é guardada como uma árvore sintática abstrata (AST), uma estrutura de dados que representa o programa sem depender de nenhuma linguagem. Um único interpretador executa essa árvore, e cada linguagem é apenas uma forma de exibi-la.

- **O interpretador é o mesmo para todas as linguagens.** Rastrear, prever, depurar, o teste de mesa e a mensagem de erro funcionam igual em qualquer exibição.
- **Cada instrução da árvore tem um identificador.** Cada tradutor sabe em que linha ou bloco ela aparece, então o destaque da linha atual e do erro acompanha a linguagem escolhida.
- **As missões são escritas uma vez só.** Uma missão nova aparece automaticamente em todas as linguagens disponíveis.
- **Python e JavaScript não são executados de verdade.** O texto é gerado a partir da árvore e executado pelo interpretador do Mensageiro, o que evita carregar um Python inteiro no navegador, pesado em celulares.

| Forma de exibição | Exemplo da mesma condição | Versão |
| --- | --- | --- |
| Pseudocódigo em português com símbolos gráficos | `se ● laranja {` | Primeira versão |
| Blocos de encaixar, com a biblioteca [Blockly](https://blockly.com) | Bloco colorido de condição | Futura |
| Python | `if casa_laranja():` | Futura |
| JavaScript | `if (casaLaranja()) {` | Futura |

O Blockly é a base do Scratch, do MakeCode e do App Inventor; desde novembro de 2025 é mantido pela Raspberry Pi Foundation, com licença aberta Apache 2.0. Em Python e JavaScript, nomes com acento (`pães`) são aceitos, mas o costume profissional é escrever sem acento (`paes`); a escolha ficará como opção do professor.

Com a troca de linguagem, a mesma missão pode ser vista em blocos e em texto lado a lado, o que apoia a transição da programação em blocos para a textual.

### Tecnologias previstas

| Camada | Tecnologia | Função |
| --- | --- | --- |
| Interface do estudante e do professor | React com TypeScript (Vite), como PWA | Telas, animações e instalação como aplicativo |
| Motor do jogo | Interpretador próprio da árvore sintática, em TypeScript | Executa o código uma instrução por vez e compara com a jogada do estudante |
| Missões | Arquivos JSON | Árvore do código, mapa, erro plantado e dicas de cada missão |
| Funcionamento sem internet | Service Worker e IndexedDB | Guardam o progresso no aparelho e sincronizam depois |
| Servidor e banco de dados | Supabase (PostgreSQL, autenticação e Row Level Security), na região de São Paulo | Contas, turmas, progresso e registros para a pesquisa |
| Login institucional | OAuth 2.0 e OpenID Connect com Google, restrito ao domínio escola.pr.gov.br | Entrada com a conta @escola; o administrador do domínio (SEED ou Celepar) pode precisar autorizar o aplicativo, o que será confirmado antes do piloto |
| Hospedagem da interface | CDN, como Cloudflare Pages ou Vercel | Entrega rápida em qualquer escola |
| Qualidade | Vitest, Playwright, axe e GitHub Actions | Testes do interpretador e de cada missão, testes de ponta a ponta, acessibilidade e publicação automática |

**Escopo para a entrega de 23/11:** interpretador, exibição em pseudocódigo com símbolos, capítulos 1 a 4 (19 missões) nos modos Rastrear, Prever e Depurar, mapa simples da cidade, fonte Ubuntu embutida para funcionar sem internet, progresso salvo no aparelho e um código de progresso que o estudante anota para continuar em outro computador. Login institucional, painel do professor, servidor e as demais linguagens ficam documentados no guia como próximas etapas.

### Progresso salvo e proteção de dados

Há duas formas de entrar, e as duas salvam o progresso no servidor:

| Forma de entrada | Para quem | O que fica armazenado |
| --- | --- | --- |
| E-mail institucional da escola (login pela conta da escola) | Escolas que oferecem contas institucionais aos estudantes | E-mail institucional, turma e progresso |
| Usuário com nome aleatório | Estudantes sem conta institucional ou cuja família não autorizou o uso de dados | Apelido gerado (por exemplo, "Mensageiro Lontra 427"), código de recuperação, turma e progresso |

No usuário com nome aleatório, o professor cria a turma, a aplicação gera os apelidos e códigos de recuperação, e o professor imprime um cartão para cada estudante. A relação entre apelido e nome real fica só com o professor, no papel, e nunca entra no sistema. Mais tarde, o apelido pode ser vinculado ao e-mail institucional sem perder o progresso.

Regras de proteção de dados adotadas:

- **Melhor interesse do estudante:** a LGPD (Lei nº 13.709/2018), art. 14, determina que dados de crianças e adolescentes sejam tratados em seu melhor interesse; o §1º exige consentimento específico de um dos pais para crianças (até 12 anos incompletos). O Enunciado CD/ANPD nº 1/2023 admite outras bases legais, desde que prevaleça o melhor interesse.
- **Mínimo de dados:** nenhum nome, foto, localização ou dado de contato além do e-mail institucional; sem anúncios e sem rastreadores de terceiros.
- **Prazo:** os dados da turma são excluídos ao fim do ano letivo ou a pedido da escola ou da família.
- **Sem internet:** o progresso fica guardado no aparelho e é enviado ao servidor quando a conexão voltar, para laboratórios com internet instável.

Essas regras são uma proposta de projeto, não um parecer jurídico; a escola ou a secretaria de educação deve validar o termo de uso antes da aplicação.

### Painel do professor

- Criação da turma e impressão dos cartões de acesso.
- Mapa de calor da turma: quais conceitos e quais missões concentram mais erros e mais dicas.
- Liberação de capítulos e ativação opcional do desafio entre equipes.
- Exportação dos resultados em planilha, inclusive pré e pós-teste.

### Acessibilidade

- Condições representadas por forma e cor juntas (● ▲ ■ ★), alto contraste.
- Funciona por teclado, toque e leitor de tela; tamanho de letra ajustável.

### Publicação na MEC RED

Uma coleção com: link da aplicação, guia do professor, plano das 4 aulas, pré e pós-teste em PDF e vídeo curto de demonstração, sob licença aberta (Creative Commons).

## 7. Quanto (How much): avaliação dos resultados

A avaliação combina o que o estudante aprendeu, como ele jogou e o que ele sentiu.

| O que se mede | Instrumento | Indicador |
| --- | --- | --- |
| Aprendizagem de rastreio e depuração | Pré e pós-teste com questões equivalentes (prever saída, preencher teste de mesa, achar o erro) | Diferença de acertos entre pré e pós-teste |
| Domínio por conceito | Registros da aplicação | Acertos na primeira tentativa, por conceito |
| Autonomia | Registros da aplicação | Dicas usadas por missão e sua queda ao longo dos capítulos |
| Concepções equivocadas | Registros da aplicação | Erros mais frequentes, por exemplo tratar `se` como `enquanto` |
| Engajamento e percepção | Questionário curto de escala ao final | Interesse, dificuldade percebida, vontade de continuar |
| Valores trabalhados | Roda de conversa guiada | Relações que os estudantes fazem entre a história e o cotidiano |

O questionário de engajamento ainda precisa ser escolhido entre instrumentos validados na literatura; a referência será conferida antes de entrar no texto final.

**Teste de jogo antes da versão final.** Uma aula de 50 minutos com uma turma de 7º ano: 20 minutos com o Compute It e 20 com a versão de teste do Mensageiro, observando onde os estudantes travam, comemoram e desistem, com alguns pensando em voz alta. No fim, três perguntas: o que mais gostou, quando ficou com raiva e o que mudaria. Para virar dado da dissertação, o caminho ético da pesquisa com estudantes precisa estar resolvido antes; como atividade de aula, pode ser feito já.

## Compute It e O Mensageiro lado a lado

O Mensageiro mantém a mecânica central do Compute It e corrige as limitações observadas ao jogar as 60 fases em 05/11/2026.

| Aspecto | Compute It | O Mensageiro |
| --- | --- | --- |
| Papel do estudante | Executa o código com as setas | Executa, prevê, depura e explica |
| Conteúdo | Fluxo de controle, sem dados | Fluxo de controle mais variáveis, tipos, operadores, entrada e saída, listas, parâmetros e retorno, em pseudocódigo e, depois, em blocos, Python e JavaScript |
| Erro | Tela apaga e a fase recomeça do zero | Retorno em camadas: fantasma no 1º erro, pista curta no 2º e recomeço do ponto do erro |
| Tentativa e erro | Possível, tecla a tecla | Bloqueada pelo modo Prever |
| Progresso | Salvo só no navegador | Salvo no servidor, por e-mail institucional ou apelido aleatório |
| Repetição | Recomeçar por perda de progresso | Revisão do dia, rejogar com variação, estrelas |
| Narrativa e objetivo | Não há; não há destino marcado | História em 7 capítulos; cada missão tem destino e pessoa |
| Condições | Só por cor | Forma e cor, depois expressões com variáveis |
| Professor | Sem acompanhamento verificado | Painel da turma com exportação |
| Colaboração | Individual | Modo em dupla com papéis |

## Referências

AUTORIDADE NACIONAL DE PROTEÇÃO DE DADOS (Brasil). **Enunciado CD/ANPD nº 1, de 24 de maio de 2023**. Trata das hipóteses legais para o tratamento de dados pessoais de crianças e adolescentes. Brasília, DF: ANPD, 2023.

BRASIL. **Lei nº 13.709, de 14 de agosto de 2018**. Lei Geral de Proteção de Dados Pessoais (LGPD). Brasília, DF: Presidência da República, 2018.

BRASIL. Conselho Nacional de Educação. Câmara de Educação Básica. **Parecer CNE/CEB nº 2/2022**, aprovado em 17 de fevereiro de 2022. Normas sobre Computação na Educação Básica, Complemento à Base Nacional Comum Curricular (BNCC). Brasília, DF: MEC, 2022.

BRASIL. Conselho Nacional de Educação. Câmara de Educação Básica. **Resolução CNE/CEB nº 1, de 4 de outubro de 2022**. Normas sobre Computação na Educação Básica, Complemento à BNCC. Diário Oficial da União, Brasília, DF, 6 out. 2022, Seção 1, p. 33.

KLOCK, A. C. T.; GASPARINI, I.; PIMENTA, M. S. 5W2H Framework: a guide to design, develop and evaluate the user-centered gamification. In: BRAZILIAN SYMPOSIUM ON HUMAN FACTORS IN COMPUTING SYSTEMS, 15., 2016, São Paulo. **Proceedings** [...]. New York: ACM, 2016. p. 14:1-14:10.

RYAN, R. M.; DECI, E. L. Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. **American Psychologist**, v. 55, n. 1, p. 68-78, 2000. DOI: 10.1037/0003-066X.55.1.68.

TODA, A. M. et al. Analysing gamification elements in educational environments using an existing gamification taxonomy. **Smart Learning Environments**, v. 6, n. 1, art. 16, p. 1-14, 2019. DOI: [10.1186/s40561-019-0106-1](https://doi.org/10.1186/s40561-019-0106-1).

TOXICODE. **Compute It**. [S. l.]: Toxicode, [20--]. Jogo digital. Disponível em: [https://compute-it.toxicode.fr/](https://compute-it.toxicode.fr/). Acesso em: 5 nov. 2026.

Fontes consultadas para o texto das habilidades e da LGPD: [computacional.com.br/bncc](https://www.computacional.com.br/bncc/), [Confidata, LGPD comentada art. 14](https://confidata.com.br/blog/lgpd-comentada-10-criancas-adolescentes), [Felsberg Advogados sobre o Enunciado CD/ANPD nº 1/2023](https://www.felsberg.com.br/?p=43256).
