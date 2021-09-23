import React from "react";
import { TodoProvider } from "./components/TodoContext";
import TodoList from "./components/TodoList";

// import db from "./firebase";

import "./App.css";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1 className="app-title">Todo App</h1>
        <TodoList></TodoList>
      </div>
    </TodoProvider>
  );
}

export default App;
