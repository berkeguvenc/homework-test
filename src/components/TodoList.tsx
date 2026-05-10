import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input.trim(), completed: false },
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
              {todo.completed ? <s>{todo.text}</s> : todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
