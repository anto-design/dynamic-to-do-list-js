document.addEventListener('DOMContentLoaded', (event)=>{
  const addButton = document.getElementById('add-task-btn')
  const taskInput = document.getElementById('task-input')
  const taskList = document.getElementById('task-list')

const todoList = []

renderTodoList();

function renderTodoList() {
let todoListHTML = ''

for(let i = 0 ; i < todoList.length; i++ ) {
const todo = todoList[i]
const html = `<li>${todo}<button onclick="
todoList.splice(${i}, 1)
renderTodoList();

" class="remove-btn"> Remove</button></li>`
todoListHTML+=html;
}

taskList.innerHTML = todoListHTML

}

document.createElement.classList.add('add')
document.appendChild('tasklist')


  function addTask() {

    const taskText = taskInput.value.trim()

    todoList.push(taskText)
    console.log(todoList)
    taskInput.value = ''

    if(taskText === '') {
      alert('please input value')
    }
    

    renderTodoList();
  };


  addButton.addEventListener('keypress' , (event)=>{
    if(event.key === 'Enter'){
      addTask();
    }
    
  })
  taskInput.addEventListener('keypress' , (event)=>{
    if(event.key === 'Enter') {
      renderTodoList();
    }
  })



  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  // Other initialization code
});
})