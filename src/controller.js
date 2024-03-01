const fs = require('fs');


// Função para ler todas as tarefas salvas no localStorage
function listarTarefas() {
    let listaTarefas = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
    return listaTarefas;
  }

  
// Função para adicionar uma tarefa à lista de tarefas no localStorage
function adicionarTarefa(titulo, concluido) {
  let listaTarefas = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));

  const novaTarefa = {
    titulo: titulo,
    concluido: concluido
  };

  listaTarefas.push(novaTarefa);

  fs.writeFileSync('tasks.json', JSON.stringify(listaTarefas));
}

// Função para atualizar uma tarefa existente no localStorage
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

// Função para remover uma tarefa existente do localStorage
function removerTarefa(titulo) {
  let listaTarefas = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));

  listaTarefas = listaTarefas.filter(tarefa => tarefa.titulo !== titulo);

  fs.writeFileSync('tasks.json', JSON.stringify(listaTarefas));
}



// Exemplo de uso
console.log(listarTarefas());