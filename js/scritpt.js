// Evernto que adiciona a tarefa
function addTask(){
  // a primeira coisa a se fazer é pegar o input da tarefa, adicionando o value por causa do valor do input.

  const taskTiltle = document.querySelector('#task-title').value;

  if(taskTiltle){
    // clonar o template

  const template = document.querySelector('.template');

  const newTask = template.cloneNode(true);

  // Adicionar span título
  newTask.querySelector('.task-title').textContent = taskTiltle;

  // remover as claasses desnecessárias

  newTask.classList.remove('template');
  newTask.classList.remove('hide');


// adiciona tarefa na lista

const list = document.querySelector('#task-list');

list.appendChild(newTask)

// adicionar o evento de remover 

const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function(){
  removeTask(this) // esse this se refere ao elemento em si que queremos remover 
})

// adicionar evento de remover
const doneBtn = newTask.querySelector('.done-btn').addEventListener('click',function(){
  completeTask(this);
})

// limpar texto
document.querySelector('#task-title').value = '';

  }
}


// função de remover tarefa 
function removeTask(task){
  task.parentNode.remove(true); // com essa linha de código já conseguimos remover o elemento pai que é a li ou seja remover qualquer uma das tarefas.
}

// função de completar tarefa 
function completeTask(task){
  const taskToComplete = task.parentNode;

  taskToComplete.classList.toggle('done'); // esse toggle verifica se o elemento tem a class , se não tiver ele coloca , se tiver ele remove.
  
}


// Evento de adicionar tarefa
const addBtn =  document.querySelector('#add-btn');

addBtn,addEventListener('click', function(e){

e.preventDefault();

addTask();

});