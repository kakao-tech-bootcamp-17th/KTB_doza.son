import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

interface TodoItem {
  text: string;
  isCompleted: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 저장된 todos를 가져오기
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as TodoItem[];
    setTodos(savedTodos);
  }, []);

  // todos 상태가 변경될 때마다 로컬 스토리지에 저장하기
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    console.log('Adding new todo:', newTodos); // 디버깅용 로그
    setTodos(newTodos);
  };

  const toggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <header>
        <h1>ToDo List</h1>
      </header>
      <section>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </section>
    </div>
  );
};

export default TodoApp;
