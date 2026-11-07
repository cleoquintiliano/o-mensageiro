// Gera jogo/index.html juntando a interface (app.html) e o motor (engine.js).
// Uso: node src/build.js
const fs = require('fs');
const path = require('path');

const app = fs.readFileSync(path.join(__dirname, 'app.html'), 'utf8');
const engine = fs.readFileSync(path.join(__dirname, 'engine.js'), 'utf8');

if (!app.includes('/*ENGINE*/')) {
  console.error('Marcador /*ENGINE*/ não encontrado em app.html');
  process.exit(1);
}

const out = path.join(__dirname, '..', 'jogo', 'index.html');
fs.writeFileSync(out, app.replace('/*ENGINE*/', () => engine));
console.log('Gerado:', out);
