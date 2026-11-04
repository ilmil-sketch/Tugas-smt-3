const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoText = todoInput.value.trim();
    if (!todoText) return;

    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = todoText;

    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Hapus';
    btnRemove.addEventListener('click', () => li.remove());

    li.append(span, btnRemove);
    todoList.appendChild(li);

    todoInput.value = '';
});