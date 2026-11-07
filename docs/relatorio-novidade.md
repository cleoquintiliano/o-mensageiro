# O Mensageiro: relatório de novidade e diferenciação

2026-11-05 · Cléo Quintiliano Fernandes de Brito

## Resposta curta

Nenhuma peça isolada do Mensageiro é inédita. Colocar o estudante no papel do computador já existe (Compute It, UUhistle), ensinar a ler código antes de escrever também (PLTutor, Reduct, PRIMM), jogo de depuração com robô e narrativa idem (Gidget), e o teste de mesa com correção automática tem até ferramenta brasileira recente (My Trace Table, EduComp 2026).

O que não encontramos em nenhuma aplicação ou artigo foi a **combinação**: um único jogo que encadeia **rastrear, prever, depurar e teste de mesa** sobre o mesmo programa, com **erro em camadas**, em **pseudocódigo em português com condições por forma e cor**, preparado para **blocos, Python e JS a partir de uma única árvore sintática**, alinhado à **BNCC Computação dos anos finais**, com **progresso pseudônimo compatível com a LGPD** e **narrativa de valores implícitos**. A alegação defensável para o mestrado é, portanto, de **novidade de combinação e de contexto**, não de invenção do conceito.

## Como a busca foi feita

- **Bases e locais:** ACM Digital Library, IEEE Xplore, Taylor & Francis, SBC OpenLib (EduComp, SBIE, WEI, SBGames), RENOTE, Google Scholar, DBLP e sites oficiais das ferramentas.
- **Termos (português e inglês):** visual program simulation, code tracing, comprehension-first, debugging-first game, PRIMM, predict code game, trace table automated feedback, teste de mesa, rastreamento de código, dual-modality blocks text, jogo de depuração ensino fundamental, values/prosocial programming.
- **Critério de inclusão:** ferramenta ou estudo em que o estudante **lê, simula, prevê ou corrige** código (e não só monta programas), com publicação verificável ou produto em uso.
- **Critério de verificação:** só entra nas referências o que foi conferido em fonte primária ou indexador (DOI, DBLP, anais). Itens sem dados completos aparecem marcados como **a conferir**.
- **Limite:** a busca não é uma revisão sistemática. Ela é suficiente para posicionar o projeto, mas a dissertação deve trazer um mapeamento sistemático formal se a novidade for argumento central.

## Aplicações e pesquisas mais próximas

| Aplicação / pesquisa | O que faz | Público | O que falta em relação ao Mensageiro |
| --- | --- | --- | --- |
| Compute It (Toxicode) | O estudante é o computador: lê o programa e move o robô com as setas. Popular na Hora do Código e na CodeWeek | Anos iniciais e finais | Sem prever, sem depurar, sem teste de mesa, sem variáveis explícitas, progresso só no navegador, só em inglês e pseudo-JS |
| UUhistle (Sorva; Sirkiä, 2010) | Simulação visual de programa: o estudante executa Python manipulando a memória | Ensino superior (CS1) | Não é jogo narrativo, não é para a escola básica, foco em memória e não em fluxo |
| Python Tutor (Guo, 2013) | Visualiza a execução linha a linha, para frente e para trás | Amplo, sobretudo superior | O estudante assiste, não simula; não há desafio nem gamificação |
| PLTutor (Nelson; Xie; Ko, 2017) | Tutor de compreensão primeiro: ensina a semântica antes de escrever código | Superior | Não é jogo, sem narrativa, sem depuração como desafio |
| Gidget (Lee et al., 2014) | Jogo de depuração primeiro: robô com código errado, narrativa de salvar animais | Adolescentes e adultos | Linguagem própria em inglês, sem rastreio passo a passo, sem prever, sem teste de mesa |
| Reduct (Arawjo et al., 2017) | Quebra-cabeça que gamifica a avaliação de expressões | Iniciantes | Foco em expressões, não em programas com laços e variáveis |
| PRIMM (Sentance; Waite; Kallia, 2019) | Sequência didática Prever, Executar, Investigar, Modificar, Criar | 11 a 14 anos | É método de aula, não aplicação; o Mensageiro operacionaliza parte dele em jogo |
| King's Scroll (Malaise; Signer) | Jogo de predição para a etapa Prever do PRIMM | Escola | Só prever; sem depurar e sem simulação passo a passo (dados completos a conferir) |
| Feedback Buddy (DELFI 2024) | Tutor de rastreio com tabela de rastreio e feedback de mentalidade de crescimento | Escola | Não é jogo, sem narrativa e sem depuração |
| My Trace Table (Souza; Silva; Rebouças, 2026) | Teste de mesa com correção automática por cores (acerto, erro de valor, erro de tipo) | Introdução à programação | Não é jogo, foco no ensino superior e técnico |
| Lightbot (Gouws; Bradshaw; Wentworth, 2013) | Monta sequências de símbolos para o robô acender luzes | Crianças | O estudante **escreve**, não lê nem depura código |
| Blockly Games, CodeCombat, Code.org | Programação por blocos ou texto em fases | Variado | Foco em escrever; leitura e rastreio são secundários |
| Pencil Code (Bau et al., 2015) | Alterna entre blocos e texto no mesmo programa | Escola e superior | É editor, não jogo de leitura; inspira a AST única do Mensageiro |
| Iniciativas brasileiras (SBGames, WEI, RENOTE) | Jogos de lógica (Codando Aventuras, Exploradores do Código, Poké Prog, Farm Code, Codebricks), Grafotopia e relato de depuração no Scratch no 4º ano | Escola básica | Predominam escrever e montar; depuração aparece como atividade, não como mecânica central (a conferir texto a texto) |

## Matriz de características

Legenda: ✓ tem; ◐ tem em parte; ✗ não tem.

| Característica | Mensageiro | Compute It | UUhistle | Python Tutor | Gidget | PRIMM / King's Scroll | My Trace Table | Lightbot |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Estudante simula a execução | ✓ | ✓ | ✓ | ✗ | ◐ | ✗ | ◐ | ✗ |
| Prever o resultado antes | ✓ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ |
| Depurar código dado | ✓ | ✗ | ✗ | ✗ | ✓ | ◐ | ✗ | ✗ |
| Teste de mesa / variáveis visíveis | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ | ✓ | ✗ |
| Erro em camadas (fantasma, pista, dica) | ✓ | ✗ | ◐ | ✗ | ◐ | ✗ | ◐ | ✗ |
| Narrativa com valores implícitos | ✓ | ✗ | ✗ | ✗ | ◐ | ◐ | ✗ | ✗ |
| Pseudocódigo em português | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ |
| Condições por forma e cor | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ◐ |
| Mesma lógica em blocos, Python e JS (previsto) | ◐ | ✗ | ✗ | ◐ | ✗ | ✗ | ✗ | ✗ |
| Alinhamento explícito à BNCC Computação | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Progresso fora do navegador, pseudônimo, LGPD | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ◐ | ✗ |
| Rejogar com missões espelhadas | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |

A marcação foi feita com base nas descrições publicadas de cada ferramenta e deve ser revista por um segundo avaliador antes de entrar na dissertação.

## O que é realmente novo

Pontos sem equivalente encontrado na busca, em ordem de força do argumento:

1. **Ciclo completo de compreensão num só jogo.** Rastrear, prever, depurar e teste de mesa sobre o mesmo motor e o mesmo programa. As ferramentas existentes cobrem uma ou duas dessas etapas. É a contribuição mais defensável.
2. **Depuração por manipulação direta.** O estudante gira o número suspeito na própria linha do código e executa de novo, em vez de reescrever. Reduz a carga de digitação nos anos finais e mantém o foco no raciocínio. Não encontramos mecânica igual.
3. **Erro em camadas sem punição.** Primeiro o fantasma mostra onde o mensageiro deveria estar, depois uma pista curta ligada ao tipo de instrução, por fim a dica. Combinado com 3 dicas por capítulo e estrelas visíveis só no mapa, o desenho busca reduzir a ansiedade sem tirar o desafio.
4. **Pseudocódigo em português com condições por forma e cor.** Ponte entre o visual e o texto pensada para estudantes brasileiros de 11 a 14 anos, preparada para blocos, Python e JS a partir de uma única árvore sintática. Pencil Code mostrou o valor de alternar representações, mas como editor, não como jogo de leitura.
5. **Contexto brasileiro e legal.** Alinhamento direto à BNCC Computação (Resolução CNE/CEB nº 1/2022) e progresso pseudônimo com código de progresso ou conta institucional, compatível com a LGPD (art. 14) e o Enunciado CD/ANPD nº 1/2023. Resolve uma dor concreta do Compute It em sala.
6. **Narrativa de valores implícitos.** Entregar mensagens, servir o outro e recomeçar sem culpa. Bers (2021; 2022) defende valores na programação para a primeira infância, com ScratchJr e KIBO; não encontramos jogo de leitura de código para os anos finais com essa intenção.
7. **Rejogar com missões espelhadas.** Repetição com variação, para que o estudante não decore o caminho.

## O que não é novo e precisa ser citado como base

- **O estudante como computador** e a simulação visual de programa: Compute It e UUhistle (Sorva; Sirkiä, 2010).
- **Visualizar a execução passo a passo:** Python Tutor (Guo, 2013).
- **Compreensão antes da escrita:** PLTutor (Nelson; Xie; Ko, 2017) e Reduct (Arawjo et al., 2017).
- **Prever antes de executar:** PRIMM (Sentance; Waite; Kallia, 2019) e jogos derivados.
- **Jogo de depuração com robô e narrativa:** Gidget (Lee et al., 2014).
- **Teste de mesa com feedback automático:** My Trace Table (Souza; Silva; Rebouças, 2026) e trabalhos anteriores no SBIE.
- **Robô em grade cumprindo tarefas:** Lightbot (Gouws; Bradshaw; Wentworth, 2013) e o próprio Compute It.
- **Alternar blocos e texto:** Pencil Code (Bau et al., 2015) e Weintrop e Holbert (2017).
- **Valores pela programação:** Bers (2021; 2022).

Citar essas bases fortalece o projeto: mostra que cada escolha tem apoio na literatura e que a contribuição está em juntá-las para um público e um contexto ainda pouco atendidos.

## Riscos à alegação de novidade e recomendações

**Riscos**

- **Busca não sistemática.** Pode existir jogo em anais menores ou em outro idioma com combinação parecida. Sem mapeamento formal, a banca pode contestar a palavra "inédito".
- **Recursos ainda não implementados.** Blocos, Python e JS estão previstos, não prontos. Contam como arquitetura, não como resultado.
- **Sem evidência de aprendizagem.** Novidade de desenho não é eficácia. O teste de jogo atual mede usabilidade, não ganho.
- **Dependência do Compute It.** A inspiração é declarada e deve continuar assim; a avaliação precisa mostrar o que o Mensageiro acrescenta.
- **Casa visível como atalho.** Conforme a análise anterior, nas missões de rastrear a casa pode virar pista do destino e enfraquecer a leitura do código.

**Recomendações para o mestrado**

1. Usar a expressão **"novidade de combinação e de contexto"** e evitar "primeiro" ou "inédito" sem qualificação.
2. Fazer um **mapeamento sistemático** (Petersen ou Kitchenham) com as strings desta busca, incluindo SBC OpenLib e ACM.
3. Medir **compreensão** com um pré e pós-teste de rastreio validado e **engajamento** com questionário validado, comparando com o Compute It.
4. Registrar a **matriz de características** com dois avaliadores e calcular concordância.
5. Decidir sobre as **casas que despistam** nas missões de rastrear antes da coleta de dados.
6. Publicar o material na MEC RED com licença aberta, o que já é diferencial frente a ferramentas fechadas.

## Referências

ARAWJO, I. et al. Teaching programming with gamified semantics. In: CHI CONFERENCE ON HUMAN FACTORS IN COMPUTING SYSTEMS, 2017, Denver. **Proceedings** [...]. New York: ACM, 2017.

BAU, D. et al. Pencil Code: block code for a text world. In: INTERNATIONAL CONFERENCE ON INTERACTION DESIGN AND CHILDREN, 14., 2015. **Proceedings** [...]. New York: ACM, 2015. p. 445-448.

BERS, M. U. Coding, robotics and socio-emotional learning: developing a palette of virtues. **Pixel-Bit: Revista de Medios y Educación**, n. 62, 2021. DOI: 10.12795/pixelbit.90537.

BERS, M. U. **Beyond coding**: how children learn human values through programming. Cambridge: MIT Press, 2022.

BRASIL. Conselho Nacional de Educação. Câmara de Educação Básica. **Resolução CNE/CEB nº 1, de 4 de outubro de 2022**. Normas sobre Computação na Educação Básica, complemento à BNCC. Brasília, 2022.

GOUWS, L. A.; BRADSHAW, K.; WENTWORTH, P. Computational thinking in educational activities: an evaluation of the educational game Light-Bot. In: ACM CONFERENCE ON INNOVATION AND TECHNOLOGY IN COMPUTER SCIENCE EDUCATION, 18., 2013. **Proceedings** [...]. New York: ACM, 2013. p. 10-15.

GUO, P. J. Online Python Tutor: embeddable web-based program visualization for CS education. In: ACM TECHNICAL SYMPOSIUM ON COMPUTER SCIENCE EDUCATION, 44., 2013, Denver. **Proceedings** [...]. New York: ACM, 2013. p. 579-584. DOI: 10.1145/2445196.2445368.

LEE, M. J. et al. Principles of a debugging-first puzzle game for computing education. In: IEEE SYMPOSIUM ON VISUAL LANGUAGES AND HUMAN-CENTRIC COMPUTING (VL/HCC), 2014. **Proceedings** [...]. IEEE, 2014. DOI: 10.1109/vlhcc.2014.6883023.

NELSON, G. L.; XIE, B.; KO, A. J. Comprehension first: evaluating a novel pedagogy and tutoring system for program tracing in CS1. In: ACM CONFERENCE ON INTERNATIONAL COMPUTING EDUCATION RESEARCH (ICER), 2017. **Proceedings** [...]. New York: ACM, 2017. p. 2-11. DOI: 10.1145/3105726.3106178.

SENTANCE, S.; WAITE, J.; KALLIA, M. Teaching computer programming with PRIMM: a sociocultural perspective. **Computer Science Education**, v. 29, n. 2-3, p. 136-176, 2019. DOI: 10.1080/08993408.2019.1608781.

SORVA, J.; SIRKIÄ, T. UUhistle: a software tool for visual program simulation. In: KOLI CALLING INTERNATIONAL CONFERENCE ON COMPUTING EDUCATION RESEARCH, 10., 2010. **Proceedings** [...]. New York: ACM, 2010. DOI: 10.1145/1930464.1930471.

SOUZA, A.; SILVA, J.; REBOUÇAS, A. My Trace Table e My Trace Table Manager: sistemas para apoiar a compreensão de códigos em disciplinas introdutórias de programação. In: SIMPÓSIO BRASILEIRO DE EDUCAÇÃO EM COMPUTAÇÃO (EDUCOMP), 6., 2026, Campo Grande. **Anais** [...]. Porto Alegre: SBC, 2026. Disponível em: https://sol.sbc.org.br/index.php/educomp/article/view/42668.

TOXICODE. **Compute It**. [S. l.], [20--]. Disponível em: https://compute-it.toxicode.fr/. Acesso em: 5 nov. 2026.

WEINTROP, D.; HOLBERT, N. From blocks to text and back: programming patterns in a dual-modality environment. In: ACM SIGCSE TECHNICAL SYMPOSIUM ON COMPUTER SCIENCE EDUCATION, 48., 2017. **Proceedings** [...]. New York: ACM, 2017.

**A conferir antes de citar na dissertação** (encontrados, mas sem todos os dados verificados): King's Scroll (Malaise; Signer); Feedback Buddy (DELFI 2024, DOI 10.18420/delfi2024_16, autores a confirmar); jogos brasileiros dos anais do SBGames e do WEI (Codando Aventuras, Exploradores do Código, Poké Prog, Farm Code, Codebricks, Grafotopia) e o relato de depuração no Scratch no 4º ano (RENOTE).
