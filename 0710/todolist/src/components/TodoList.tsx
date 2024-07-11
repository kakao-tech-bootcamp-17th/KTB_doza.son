import React from "react";

interface TodoItem {
  text: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: TodoItem[];
  toggleTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul id="todolist">
      {todos.map((todo, index) => (
        <li key={index} className={todo.isCompleted ? 'completed' : ""}>
          <div className="todo-item">
            <input
              type="checkbox"
              className="checkbox"
              checked={todo.isCompleted}
              onChange={() => toggleTodo(index)}
            />
            <span>{todo.text}</span>
          </div>
          <button className="delete" onClick={() => deleteTodo(index)}>삭제</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
