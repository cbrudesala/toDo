
// Gather all interactive elements
var newTaskInput = document.getElementById('new-task');
var tasks = document.getElementById('tasks');
var clearDone = document.getElementById('clear-done');
var clearAll = document.getElementById('clear-all');


/******
ADDING TASKS
******/
/* va ha haber un evento si apreto tecla en newTaskInput */
newTaskInput.onkeypress = function(evt) {
  /* si la tecla es enter... */
  if (evt.keyCode === 13) {
    /* task = valor newTaskInput*/
    var task = newTaskInput.value;
    if (task) {
      /* llama a la funcion newTask y le paso el valor que acabo de escribir (task)*/
      newTask(task);
      /*limpia el campo newTaskInput al hacer enter*/
      newTaskInput.value = '';
    }
  }
};


function newTask(task) {
  /*creo un li y lo asigno a la variable taskItem */
  var taskItem = document.createElement('li');
  /*el contend¡do que escriba es el valor que espara la funcion newTask */
  taskItem.textContent = task;
  /* #ul  */
  tasks.appendChild(taskItem);
  //return taskItem;
}

/******
MARCAS TASK AS DONE
******/
tasks.onclick = function markAsDone(evt) {
  var task = evt.target;
  taskDone(task);
};

function taskDone(taskElement) {
  taskElement.classList.toggle('done');
}

/******
DELETE DONE TASKS
******/