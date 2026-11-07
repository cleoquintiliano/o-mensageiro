# O Mensageiro

**Atividade gamificada para ensino de computação, em que o estudante faz o papel do computador.**

O estudante conduz um robô mensageiro pela cidade lendo um código: executa cada instrução passo a passo, prevê onde o programa vai terminar e encontra e corrige erros. A cada entrega certa, uma casa se acende e alguém aparece à janela. Aos poucos, a cidade inteira se ilumina.

| | Link |
|---|---|
| Página do projeto | https://cleoquintiliano.github.io/o-mensageiro/ |
| Versão de teste do jogo | https://cleoquintiliano.github.io/o-mensageiro/jogo/ |
| Apresentação | https://cleoquintiliano.github.io/o-mensageiro/apresentacao/ |
| Game Design Document (GDD) | [docs/GDD.md](docs/GDD.md) |
| Esboço da atividade (5W2H) | [docs/esboco-5W2H.md](docs/esboco-5W2H.md) |
| Relatório de novidade e diferenciação | [docs/relatorio-novidade.md](docs/relatorio-novidade.md) |

## Para quem é

- **Estudantes** do 7º e 8º ano do Ensino Fundamental (11 a 14 anos), em computador de laboratório ou celular, sem instalação.
- **Docentes de Computação** que queiram aplicar a atividade em sala. O esboço 5W2H traz a sugestão de uso em 4 aulas de 50 minutos.

## O que tem na versão de teste

- **4 bairros (capítulos) e 19 missões:** sequência, repetição, variáveis e condições.
- **Três modos de desafio:**
  - **Rastrear:** executar o código linha a linha, movendo o mensageiro com as setas, os botões ou o dedo.
  - **Prever:** tocar na casa onde o mensageiro vai parar antes de executar.
  - **Depurar:** encontrar o número errado no código, girar o valor e executar de novo.
- **Teste de mesa:** tabela com o valor de cada variável a cada linha executada.
- **Erro em camadas, sem punição:** um "fantasma" mostra para onde o código mandava ir, depois uma pista curta e, se o estudante pedir, uma dica. Ele continua do ponto onde errou.
- **Mapa da cidade:** cada capítulo é um bairro; as casas acendem e o mensageiro caminha até a próxima missão.
- **Progresso** salvo no aparelho e num **código de progresso** que o estudante anota para continuar em outro computador. Nenhum dado pessoal é coletado.
- **Acessibilidade:** condições por forma e cor (● ▲ ■), uso completo pelo teclado e respeito à preferência de reduzir movimento.

## Fundamentação

- **BNCC Computação** (Resolução CNE/CEB nº 1/2022), com foco na habilidade EF07CO02: analisar programas para detectar e remover erros.
- **Framework 5W2H** (KLOCK; GASPARINI; PIMENTA, 2016) para planejar a gamificação, com os elementos da **Taxonomia de Toda et al. (2019)**.
- **Compreensão antes da escrita:** ler e rastrear código vem antes de escrevê-lo.

As referências completas, em ABNT, estão no [GDD](docs/GDD.md#14-referências). A comparação com outras aplicações e pesquisas de ensino de lógica de programação, e o que o Mensageiro traz de novo, está no [relatório de novidade](docs/relatorio-novidade.md).

## Estrutura do repositório

```
index.html              página inicial do projeto
jogo/index.html         versão de teste (arquivo único, funciona sem internet)
apresentacao/index.html apresentação com animações (arquivo único)
docs/GDD.md             Game Design Document
docs/esboco-5W2H.md     esboço da atividade pelo Framework 5W2H
docs/relatorio-novidade.md  comparação com outras aplicações e pesquisas
src/engine.js           motor: árvore sintática, interpretador e missões
src/app.html            interface do jogo
src/build.js            junta interface e motor em jogo/index.html
src/test.js             joga todas as missões automaticamente
```

## Como rodar no seu computador

Basta abrir `jogo/index.html` ou `apresentacao/index.html` no navegador. Para alterar o jogo:

```bash
node src/build.js   # gera jogo/index.html a partir de src/
node src/test.js    # confere se todas as missões têm solução
```

## Licença

- **Código** (`src/`, `jogo/`, `index.html`): [MIT](LICENSE).
- **Textos, apresentação e documentos** (`docs/`, `apresentacao/`): [Creative Commons Atribuição 4.0 Internacional (CC BY 4.0)](LICENSE-CONTEUDO.md).

As fontes Ubuntu e Ubuntu Mono, embutidas nos arquivos, seguem a Ubuntu Font Licence 1.0.

## Autor

**Cléo Quintiliano Fernandes de Brito**
Mestrado Profissional em Ensino de Computação (ProfComp/UENP), disciplina de Gamificação, 2026.
