// ===== Motor do Mensageiro: AST, interpretador e tradutor para pseudocódigo =====
const DIRS = { R: [1, 0], L: [-1, 0], U: [0, -1], D: [0, 1] };
const MOVE_WORD = { R: 'direita()', L: 'esquerda()', U: 'cima()', D: 'baixo()' };
const MOVE_NOME = { R: 'para a direita', L: 'para a esquerda', U: 'para cima', D: 'para baixo' };
const SETA = { R: '→', L: '←', U: '↑', D: '↓', E: 'Entregar' };
const SYM = {
  o: { nome: 'laranja', ch: '●' },
  p: { nome: 'roxo', ch: '▲' },
  g: { nome: 'verde', ch: '■' }
};

// ---------- construtores curtos para escrever missões ----------
const N = v => ({ k: 'num', v });
const V = n => ({ k: 'var', n });
const B = (op, a, b) => ({ k: 'bin', op, a, b });
const S = (s, neg) => ({ k: 'sym', s, neg: !!neg });
const mv = d => ({ k: 'move', d });
const R_ = mv('R'), L_ = mv('L'), U_ = mv('U'), D_ = mv('D');
const ENT = { k: 'deliver' };
const rep = (n, body, v) => ({ k: 'repeat', n: typeof n === 'number' ? N(n) : n, v, body });
const se = (c, then, els) => ({ k: 'if', c, then, els });
const enq = (c, body) => ({ k: 'while', c, body });
const set = (n, e) => ({ k: 'set', n, e: typeof e === 'number' ? N(e) : e });
const esc = e => ({ k: 'print', e });

function clone(o) { return JSON.parse(JSON.stringify(o)); }

// ---------- leitura do mapa ----------
function parseMap(rows) {
  const h = rows.length, w = rows[0].length;
  const cell = (x, y) => rows[((y % h) + h) % h][((x % w) + w) % w];
  const houses = [];
  rows.forEach((r, y) => [...r].forEach((c, x) => { if (c === 'H') houses.push(x + ',' + y); }));
  return { rows, w, h, cell, houses };
}

// ---------- tradutor AST -> linhas de pseudocódigo ----------
function exprHTML(e, opts) {
  opts = opts || {};
  if (e.k === 'num') {
    if (opts.editable) return '<span class="num ed" data-nid="' + e.id + '">' + e.v + '</span>';
    return '<span class="num">' + e.v + '</span>';
  }
  if (e.k === 'var') return '<span class="var">' + e.n + '</span>';
  if (e.k === 'bin') return exprHTML(e.a, opts) + ' ' + e.op + ' ' + exprHTML(e.b, opts);
  if (e.k === 'sym') return (e.neg ? '<span class="kw">não</span> ' : '') + '<span class="sym s-' + e.s + '" title="casa ' + SYM[e.s].nome + '">' + SYM[e.s].ch + '</span>';
  if (e.k === 'str') return '<span class="str">"' + e.v + '"</span>';
  return '';
}
function exprText(e) {
  if (e.k === 'num') return String(e.v);
  if (e.k === 'var') return e.n;
  if (e.k === 'bin') return exprText(e.a) + ' ' + e.op + ' ' + exprText(e.b);
  if (e.k === 'sym') return (e.neg ? 'não ' : '') + SYM[e.s].ch + ' ' + SYM[e.s].nome;
  return '';
}

// Numera os nós, gera as linhas e devolve o mapa nó -> linha
function layout(ast, opts) {
  opts = opts || {};
  let nid = 0;
  const lines = [], lineOf = {};
  const tag = e => { if (!e || typeof e !== 'object') return; e.id = 'e' + (nid++); if (e.a) tag(e.a); if (e.b) tag(e.b); };
  const kw = w => '<span class="kw">' + w + '</span>';
  function block(list, ind) {
    list.forEach(st => {
      st.id = 'n' + (nid++);
      const L = lines.length;
      lineOf[st.id] = L;
      let html = '';
      if (st.k === 'move') html = '<span class="fn">' + MOVE_WORD[st.d] + '</span>';
      else if (st.k === 'deliver') html = '<span class="fn">entregar()</span>';
      else if (st.k === 'set') { tag(st.e); html = '<span class="var">' + st.n + '</span> ← ' + exprHTML(st.e, opts); }
      else if (st.k === 'print') { tag(st.e); html = '<span class="fn">escrever</span>(' + exprHTML(st.e, opts) + ')'; }
      else if (st.k === 'repeat') {
        tag(st.n);
        html = st.v ? kw('para') + ' <span class="var">' + st.v + '</span> ' + kw('de') + ' 1 ' + kw('até') + ' ' + exprHTML(st.n, opts) + ' {'
                    : kw('repetir') + ' (' + exprHTML(st.n, opts) + ') {';
      }
      else if (st.k === 'if') { tag(st.c); html = kw('se') + ' ' + exprHTML(st.c, opts) + ' {'; }
      else if (st.k === 'while') { tag(st.c); html = kw('enquanto') + ' ' + exprHTML(st.c, opts) + ' {'; }
      lines.push({ html, ind, nid: st.id });
      if (st.k === 'repeat' || st.k === 'while') { block(st.body, ind + 1); lines.push({ html: '}', ind }); }
      if (st.k === 'if') {
        block(st.then, ind + 1);
        if (st.els) { lines.push({ html: '} ' + kw('senão') + ' {', ind }); block(st.els, ind + 1); }
        lines.push({ html: '}', ind });
      }
    });
  }
  block(ast, 0);
  return { lines, lineOf };
}

// ---------- interpretador: gera o rastro completo ----------
// Cada passo: {nid, kind:'in'|'auto', key?, x, y, vars, lit, ctx, note?}
function simulate(mission, ast) {
  const M = parseMap(mission.map);
  let x = mission.start[0], y = mission.start[1];
  const vars = {}, lit = {}, steps = [], out = [];
  let fail = null, guard = 0;
  const LIMIT = 600;
  const snap = (nid, kind, extra) => {
    steps.push(Object.assign({ nid, kind, x, y, vars: Object.assign({}, vars), lit: Object.assign({}, lit), out: out.slice() }, extra));
    if (++guard > LIMIT) throw new Error('LIMITE');
  };
  const ev = e => {
    if (e.k === 'num') return e.v;
    if (e.k === 'var') return vars[e.n];
    if (e.k === 'str') return e.v;
    if (e.k === 'sym') { const r = M.cell(x, y) === e.s; return e.neg ? !r : r; }
    const a = ev(e.a), b = ev(e.b);
    switch (e.op) {
      case '+': return a + b; case '-': return a - b; case '*': return a * b;
      case '>': return a > b; case '<': return a < b; case '≥': return a >= b; case '≤': return a <= b;
      case '=': return a === b; case '≠': return a !== b;
    }
  };
  function run(list, ctx) {
    for (const st of list) {
      if (st.k === 'move') {
        const d = DIRS[st.d];
        x = ((x + d[0]) % M.w + M.w) % M.w; y = ((y + d[1]) % M.h + M.h) % M.h;
        snap(st.id, 'in', { key: st.d, ctx });
      } else if (st.k === 'deliver') {
        const k = x + ',' + y;
        if (M.cell(x, y) === 'H') lit[k] = true; else if (!fail) fail = 'nobody';
        snap(st.id, 'in', { key: 'E', ctx, ok: M.cell(x, y) === 'H' });
      } else if (st.k === 'set') {
        vars[st.n] = ev(st.e); snap(st.id, 'auto', { ctx });
      } else if (st.k === 'print') {
        out.push(String(ev(st.e))); snap(st.id, 'auto', { ctx });
      } else if (st.k === 'repeat') {
        const n = ev(st.n);
        for (let i = 1; i <= n; i++) {
          if (st.v) { vars[st.v] = i; snap(st.id, 'auto', { ctx: 'repeat' }); }
          run(st.body, 'repeat');
        }
      } else if (st.k === 'if') {
        const c = ev(st.c); snap(st.id, 'auto', { ctx: 'if', cond: c });
        if (c) run(st.then, 'if'); else if (st.els) run(st.els, 'if');
      } else if (st.k === 'while') {
        while (true) {
          const c = ev(st.c); snap(st.id, 'auto', { ctx: 'while', cond: c });
          if (!c) break;
          run(st.body, 'while');
        }
      }
    }
  }
  let overflow = false;
  try { run(ast, 'seq'); } catch (e) { overflow = true; }
  const allLit = M.houses.every(k => lit[k]);
  return { steps, final: { x, y, vars: Object.assign({}, vars), lit, out }, fail, overflow, allLit, houses: M.houses };
}

// espelha uma missão na horizontal (para rejogar sem decorar)
function mirrorMission(m) {
  const c = clone(m);
  c.map = m.map.map(r => [...r].reverse().join(''));
  c.start = [m.map[0].length - 1 - m.start[0], m.start[1]];
  if (c.predict) c.predict = c.predict.slice();
  const sw = list => list.forEach(st => {
    if (st.k === 'move') st.d = st.d === 'R' ? 'L' : st.d === 'L' ? 'R' : st.d;
    ['body', 'then', 'els'].forEach(k => st[k] && sw(st[k]));
  });
  sw(c.code);
  return c;
}

// ---------- missões ----------
const CHAPTERS = [
  { id: 1, titulo: 'Primeiro dia', frase: 'Primeiro dia de entregas. A padaria abriu cedo e o bairro espera.', conceito: 'Sequência' },
  { id: 2, titulo: 'Ruas que se repetem', frase: 'As ruas do bairro se repetem. Quem enxerga o padrão chega antes.', conceito: 'Repetição' },
  { id: 3, titulo: 'A mochila', frase: 'A mochila leva pães contados. Cada entrega muda o que sobra.', conceito: 'Variáveis' },
  { id: 4, titulo: 'Decisões no caminho', frase: 'As calçadas coloridas avisam: aqui, o caminho pode mudar.', conceito: 'Condições' }
];

const MISSIONS = [
  // Capítulo 1: sequência
  { id: '1-1', cap: 1, modo: 'rastrear', titulo: 'Pão para Ana', tutorial: true,
    map: ['....H'], start: [0, 0], code: [R_, R_, R_, R_, ENT] },
  { id: '1-2', cap: 1, modo: 'rastrear', titulo: 'Leite para Seu João',
    map: ['..H', '...', '...'], start: [0, 2], code: [U_, U_, R_, R_, ENT] },
  { id: '1-3', cap: 1, modo: 'rastrear', titulo: 'O desenho engana',
    map: ['.tttt', '.t..t', '....H'], start: [0, 2], code: [R_, R_, R_, R_, ENT] },
  { id: '1-4', cap: 1, modo: 'prever', titulo: 'Onde ele para?',
    map: ['....', '....', '....'], start: [0, 0], code: [R_, D_, R_, U_, R_, D_, D_] },

  // Capítulo 2: repetição
  { id: '2-1', cap: 2, modo: 'rastrear', titulo: 'A rua comprida',
    map: ['.....H'], start: [0, 0], code: [rep(5, [R_]), ENT] },
  { id: '2-2', cap: 2, modo: 'rastrear', titulo: 'Escada de quarteirões',
    map: ['....', '....', '....', '...H'], start: [0, 0], code: [rep(3, [R_, D_]), ENT] },
  { id: '2-3', cap: 2, modo: 'rastrear', titulo: 'A rua dá a volta',
    map: ['H...'], start: [1, 0], code: [rep(7, [R_]), ENT] },
  { id: '2-4', cap: 2, modo: 'depurar', titulo: 'Remédio para Dona Rosa', alvo: 'a casa de Dona Rosa',
    map: ['....H'], start: [0, 0], code: [rep(3, [R_]), ENT] },
  { id: '2-5', cap: 2, modo: 'prever', titulo: 'Volta e sobe',
    map: ['.....', '.....', '.....'], start: [0, 2], code: [rep(2, [rep(2, [R_]), U_])] },

  // Capítulo 3: variáveis
  { id: '3-1', cap: 3, modo: 'rastrear', titulo: 'Dois pães, duas casas',
    map: ['.HH.'], start: [0, 0], code: [set('pães', 2), rep(2, [R_, ENT, set('pães', B('-', V('pães'), N(1)))])] },
  { id: '3-2', cap: 3, modo: 'rastrear', titulo: 'Contando os passos',
    map: ['...H.'], start: [0, 0], code: [set('passos', 3), enq(B('>', V('passos'), N(0)), [R_, set('passos', B('-', V('passos'), N(1)))]), ENT] },
  { id: '3-3', cap: 3, modo: 'prever', titulo: 'Quantas entregas?', predictVar: 'entregas',
    map: ['...', '...', '...', '...'], start: [1, 0], code: [set('entregas', 0), rep(3, [D_, set('entregas', B('+', V('entregas'), N(1)))])] },
  { id: '3-4', cap: 3, modo: 'depurar', titulo: 'Pão para três casas', alvo: 'as três casas',
    map: ['.HHH'], start: [0, 0], code: [set('pães', 2), enq(B('>', V('pães'), N(0)), [R_, ENT, set('pães', B('-', V('pães'), N(1)))])] },
  { id: '3-5', cap: 3, modo: 'rastrear', titulo: 'O caderno de entregas',
    map: ['.HHH'], start: [0, 0], code: [set('entregas', 0), rep(3, [R_, ENT, set('entregas', B('+', V('entregas'), N(1)))]), esc(V('entregas'))] },

  // Capítulo 4: condições com símbolos
  { id: '4-1', cap: 4, modo: 'rastrear', titulo: 'A calçada laranja',
    map: ['..H.', '.o..'], start: [0, 1], code: [R_, se(S('o'), [U_]), R_, ENT] },
  { id: '4-2', cap: 4, modo: 'rastrear', titulo: 'Se não é enquanto',
    map: ['.o...', '..o..', '...o.', '....H'], start: [0, 0], code: [rep(4, [se(S('o'), [D_]), R_]), ENT] },
  { id: '4-3', cap: 4, modo: 'rastrear', titulo: 'Subir ou seguir',
    map: ['....', '..H.', '..p.', '.p..'], start: [0, 3], code: [rep(4, [se(S('p'), [U_], [R_])]), ENT] },
  { id: '4-4', cap: 4, modo: 'prever', titulo: 'Enquanto for verde',
    map: ['ggg..', '.....'], start: [0, 0], code: [enq(S('g'), [R_]), D_] },
  { id: '4-5', cap: 4, modo: 'depurar', titulo: 'Carta para a creche', alvo: 'a creche',
    map: ['..o..', '....H'], start: [0, 0], code: [rep(3, [R_, se(S('o'), [D_])]), ENT] }
];

if (typeof module !== 'undefined') module.exports = { MISSIONS, CHAPTERS, layout, simulate, mirrorMission, clone, parseMap, exprText, SYM, MOVE_NOME, SETA };
