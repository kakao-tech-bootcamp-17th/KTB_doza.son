document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    //todolist 저장
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    savedTodos.forEach(todo => addTodoItem(todo.text, todo.completed));

    //이벤트 실행
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newTodoText = todoInput.value.trim();
        if (newTodoText === '') {
            return;
        }

        addTodoItem(newTodoText, false);
        saveTodos();
        todoInput.value = '';
    });

    //todoItem 입력
    function addTodoItem(text, completed) {
        const newTodoItem = document.createElement('li');
        if (completed) {
            newTodoItem.classList.add('completed');
        }

        const todoItemDiv = document.createElement('div');
        todoItemDiv.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        checkbox.checked = completed;
        //변경사항 저장
        checkbox.addEventListener('change', () => {
            toggleTodoItemCompletion(newTodoItem);
            saveTodos();
        });

        const todoText = document.createElement('span');
        todoText.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        //todoItem 삭제 및 변경사항 저장
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            deleteTodoItem(newTodoItem);
            saveTodos();
        });

        todoItemDiv.appendChild(checkbox);
        todoItemDiv.appendChild(todoText);

        newTodoItem.appendChild(todoItemDiv);
        newTodoItem.appendChild(deleteButton);
        todoList.appendChild(newTodoItem);
    }

    function deleteTodoItem(todoItem) {
        todoList.removeChild(todoItem);
    }

    function toggleTodoItemCompletion(todoItem) {
        todoItem.classList.toggle('completed');
    }
    //저장사항 저장 함수
    function saveTodos() {
        const todos = [];
        todoList.querySelectorAll('li').forEach(todoItem => {
            const text = todoItem.querySelector('span').textContent;
            const completed = todoItem.classList.contains('completed');
            todos.push({ text, completed });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }
});
