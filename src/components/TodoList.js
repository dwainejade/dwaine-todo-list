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
    setShowCompleted(!showCompleted);
  };

  const newTodos = todos.filter((todo) => todo.completed === false);

  return (
    <div className="list-wrapper">
      <label class="switch">
        <input
          type="checkbox"
          defaultChecked={showCompleted}
          onChange={handleShowCompleted}
        />
        <span class="slider round"></span>
      </label>
      {showCompleted
        ? todos.map((todo) => <Todo todo={todo} key={todo.id} />)
        : newTodos.map((todo) => <Todo todo={todo} key={todo.id} />)}
      <form className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span>
          <button onClick={addTodo} disabled={!input}>
            <FaPlusCircle className="plus" size={32} />
          </button>
        </span>
      </form>
    </div>
  );
}

export default TodoList;
