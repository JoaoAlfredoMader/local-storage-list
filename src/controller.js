const fs = require('fs');

// CREATE
function adicionarTarefa(titulo, concluido) {
  let listaTarefas = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));

  const novaTarefa = {
    titulo: titulo,
    concluido: concluido
  };

  listaTarefas.push(novaTarefa);

  fs.writeFileSync('tasks.json', JSON.stringify(listaTarefas));
}

// UPDATE
function atualizarTarefa(titulo) {
  let listaTarefas = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));

  listaTarefas = listaTarefas.map(tarefa => {
    if (tarefa.titulo === titulo) {
      tarefa.concluido = true;
    }
    return tarefa;
  });

  fs.writeFileSync('tasks.json', JSON.stringify(listaTarefas));
}

// DELETE
function removerTarefa(titulo) {
  let listaTarefas = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));

  listaTarefas = listaTarefas.filter(tarefa => tarefa.titulo !== titulo);

  fs.writeFileSync('tasks.json', JSON.stringify(listaTarefas));
}

// Exemplo de uso
removerTarefa('Fazer compras');