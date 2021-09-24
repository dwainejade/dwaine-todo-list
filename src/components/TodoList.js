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

  const incompleteTodos = todos.filter((todo) => todo.completed === false);
  const completedTodos = todos.filter((todo) => todo.completed === true);
  const allTodos = incompleteTodos.concat(completedTodos);

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
        ? allTodos.map((todo) => <Todo todo={todo} key={todo.id} />)
        : incompleteTodos.map((todo) => <Todo todo={todo} key={todo.id} />)}
      <div className="bottom-wrapper">
        <form className="input-form">
          <input
            id="add-todo"
            type="text"
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
