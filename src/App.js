import React from "react";
import { TodoProvider } from "./components/TodoContext";
import TodoList from "./components/TodoList";

// import db from "./firebase";

import "./App.css";

function App() {
  return (
    <TodoProvider>
      <div className="app-wrapper">
    
          <div className="app-title">
            <p>TODO</p>
          </div>
          <TodoList></TodoList>

      </div>
    </TodoProvider>
  );
}

export default App;
