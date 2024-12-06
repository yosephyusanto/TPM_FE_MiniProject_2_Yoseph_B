import { createTodoItem } from './taskManager.js';

let todos = [];

var todoInput = document.getElementById('todo-inp');
var todoAdd = document.getElementById('todo-add-btn');
var todosContainer = document.querySelector('.todos-container');

document.addEventListener('DOMContentLoaded', () => {

  todoAdd.addEventListener('click', function() {

    let todoObj = {
      id: new Date().getTime().toString(),
      content: todoInput.value,
      completed: false
    }

    todos.push(todoObj);

    createTodoItem(todoObj.content);
  });

  todosContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('checkbox')) {
      let todoItem = e.target.parentElement.parentElement;
      let todoId = todoItem.id;
      let todo = todos.find(todo => todo.id === todoId);
      todo.completed = !todo.completed;
      todoItem.classList.toggle('completed');
    }
  });

});




