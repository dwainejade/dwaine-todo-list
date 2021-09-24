import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import Todo from "./Todo";
import { TodoContext } from "./TodoContext";
import { FaPlusCircle } from "react-icons/fa";

function TodoList() {
  const [todos, setTodos] = useContext(TodoContext);
  const [input, setInput] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  function newTodo(text) {
    return { text, id: Date.now(), completed: false };
  }

  const addTodo = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (text) {
      setTodos([...todos, newTodo(text)]);
      console.log("todo added: ", todos);
    }
    setInput("");
  };

  const handleShowCompleted = () => {
    const incompleteTodos = todos.filter((todo) => todo.completed === false);
    const completedTodos = todos.filter((todo) => todo.completed === true);
    const allTodos = incompleteTodos.concat(completedTodos);
    setTodos(allTodos);
    setShowCompleted(!showCompleted);
  };

  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          defaultChecked={showCompleted}
          onChange={handleShowCompleted}
        />
        <span className="slider round"></span>
      </label>
      <div className="list-container">
        {showCompleted
          ? todos.map((todo) => <Todo todo={todo} key={todo.id} />)
          : todos
            .filter((todo) => todo.completed === false)
            .map((todo) => <Todo todo={todo} key={todo.id} />)}
      </div>
      <div className="bottom-wrapper">
        <form className="input-form">
          <input
            autoFocus
            id="add-todo"
            type="text"
            placeholder="Add Todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={addTodo} disabled={!input}>
            <FaPlusCircle className="plus" size={32} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default TodoList;
