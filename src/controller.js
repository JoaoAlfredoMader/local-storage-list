
const fs = require('fs');

function adicionarTarefa(titulo, concluido) {
  let listaTarefas = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));

  const novaTarefa = {
    titulo: titulo,
    concluido: concluido
  };

  listaTarefas.push(novaTarefa);

  fs.writeFileSync('tasks.json', JSON.stringify(listaTarefas));
}

adicionarTarefa('Fazer compras', false);
