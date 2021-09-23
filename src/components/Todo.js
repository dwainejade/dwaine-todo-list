import React from "react";
import { useContext } from "react/cjs/react.development";
import { TodoContext } from "./TodoContext";

export default function Todo({ todo }) {
  const [todos, setTodos] = useContext(TodoContext)

  function markComplete(todo) {
    todos.map(t => {
      if (t.id === todo.id) {
        return { ...todo, completed: !todo.completed }
      }
    })

  }


  return (
    <div onClick={() => markComplete(todo)} style={{ border: "1px solid", width: '500px', margin: '20px auto' }}>
      <h4>{todo.text}</h4>
      <p>id: {todo.id}</p>
      <p>completed: {todo.completed.toString()}</p>
    </div>
  );
}


