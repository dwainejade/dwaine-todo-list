import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import db from "./firebase";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([input, ...todos]);
    setInput("");
    console.log(input);
  };

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo} disabled={!input}>
          Add Todo
        </button>
        <ul>
          {todos.map((todo) => (
            <Todo text={todo} />
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
