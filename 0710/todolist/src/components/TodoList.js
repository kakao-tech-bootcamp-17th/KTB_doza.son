import React from "react";

const TodoList = ({todos,toggleTodo,deleteTodo}) => {
    return (
        <ul id="todolist">
            {todos.map((todo,index)=> (
                <li key={index} className={todo.isCompleted ? 'conplated' : ""}>
                    <div className="todo-item">
                        <input
                        type="checkbox"
                        className="checkbox"
                        checked={todo.isCompleted}
                        onChange={()=>toggleTodo(index)}
                        />
                        <span>{todo.text}</span>
                    </div>
                    <button className="delete" onClick={()=> deleteTodo(index)}>삭제</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;