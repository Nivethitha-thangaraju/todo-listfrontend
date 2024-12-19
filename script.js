// Array to store todos
let todos = [];

// Function to display the list of todos
function displayTodos() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    li.classList.add(todo.completed ? 'completed' : 'pending');
    
    // Create Edit Button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editTodo(index);

    // Create Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTodo(index);

    // Create Mark as Completed Button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = todo.completed ? 'Undo' : 'Complete';
    toggleButton.onclick = () => toggleComplete(index);

    // Append buttons to the list item
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    li.appendChild(toggleButton);

    todoList.appendChild(li);
  });
}

// Function to add a new todo
function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value.trim();

  if (todoText === '') {
    alert('Please enter a task!');
    return;
  }

  const newTodo = {
    text: todoText,
    completed: false,
  };

  todos.push(newTodo);
  todoInput.value = '';
  displayTodos();
}

// Function to edit an existing todo
function editTodo(index) {
  const newTodoText = prompt('Edit your task:', todos[index].text);

  if (newTodoText !== null && newTodoText.trim() !== '') {
    todos[index].text = newTodoText.trim();
    displayTodos();
  }
}

// Function to delete a todo
function deleteTodo(index) {
  const confirmed = confirm('Are you sure you want to delete this task?');

  if (confirmed) {
    todos.splice(index, 1);
    displayTodos();
  }
}

// Function to mark a todo as completed or incomplete
function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  displayTodos();
}

// Initially display todos (if any)
displayTodos();
