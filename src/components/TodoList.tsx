import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

let nextId = 0;

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTodos([
      ...todos,
      { id: nextId++, text: input.trim(), completed: false },
    ]);
    setInput("");
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          data-testid="todo-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Ekle</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span onClick={() => handleToggle(todo.id)}>
              {todo.completed ? (
                <p style={{ textDecoration: "line-through" }}>{todo.text}</p>
              ) : (
                <p>{todo.text}</p>
              )}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
