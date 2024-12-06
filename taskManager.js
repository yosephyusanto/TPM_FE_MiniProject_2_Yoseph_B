export const createTodoItem = (todoContent) => {
  var todoItem = document.createElement('li');
  var div = document.createElement('div');
  var input = document.createElement('input');
  var p = document.createElement('p');
  var i = document.createElement('i');


  todoItem.classList.add('todo-item');
  div.classList.add('flex');
  input.classList.add('checkbox');
  input.type = 'checkbox';
  i.classList.add('fa-solid', 'fa-xmark');

  p.innerHTML = todoContent;

  div.appendChild(input);
  div.appendChild(p);
  todoItem.appendChild(div);
  todoItem.appendChild(i);
  
  var todosContainer = document.querySelector('.todos-container');
  todosContainer.appendChild(todoItem);

}

export const deleteTodoItem = () => {
  
}