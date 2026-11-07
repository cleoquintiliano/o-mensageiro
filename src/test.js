const E = require('./engine.js');
let ok = true;
const allNums = ast => { const r = []; const w = o => { if (!o || typeof o !== 'object') return; if (o.k === 'num') r.push(o); Object.values(o).forEach(v => Array.isArray(v) ? v.forEach(w) : (v && typeof v === 'object' && w(v))); }; ast.forEach(w); return r; };
for (const m0 of E.MISSIONS) {
  for (const mir of [false, true]) {
    const m = mir ? E.mirrorMission(m0) : E.clone(m0);
    const ast = E.clone(m.code); const lay = E.layout(ast);
    const r = E.simulate(m, ast);
    const ins = r.steps.filter(s => s.kind === 'in').map(s => s.key).join('');
    let msg = '';
    if (m.modo === 'rastrear') {
      if (!r.allLit || r.fail || r.overflow) { ok = false; msg = 'FALHA rastrear'; }
    } else if (m.modo === 'prever') {
      if (r.overflow) { ok = false; msg = 'FALHA overflow'; }
      msg += ' final=' + r.final.x + ',' + r.final.y + (m.predictVar ? ' ' + m.predictVar + '=' + r.final.vars[m.predictVar] : '');
    } else if (m.modo === 'depurar') {
      if (r.allLit && !r.fail) { ok = false; msg = 'FALHA: bug não falha'; }
      const fixes = [];
      allNums(ast).forEach(nd => { const orig = nd.v; for (let v = 0; v <= 9; v++) { if (v === orig) continue; nd.v = v; const t = E.simulate(m, ast); if (t.allLit && !t.fail && !t.overflow) fixes.push(nd.id + ':' + orig + '->' + v); } nd.v = orig; });
      if (!fixes.length) { ok = false; msg = 'FALHA sem correção'; }
      msg += ' correções=' + fixes.join(' ');
    }
    console.log((mir ? 'esp ' : '    ') + m.id, m.modo.padEnd(9), 'linhas=' + lay.lines.length, 'passos=' + r.steps.length, 'teclas=' + ins, msg);
  }
}
console.log(ok ? 'TUDO OK' : 'HÁ FALHAS');
