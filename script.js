  
  const addButton = document.getElementById('add-task-btn')
  const taskInput = document.getElementById('task-input')
  const taskList = document.getElementById('task-list')

const todoList = []

renderTodoList();

function renderTodoList() {
let todoListHTML = ''

for(let i = 0 ; i < todoList.length; i++ ) {
const todo = todoList[i]
const html = `<li>${todo}</li>`
todoListHTML+=html;
}

taskList.innerHTML = todoListHTML

}

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
  