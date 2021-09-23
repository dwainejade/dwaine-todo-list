import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useContext } from "react/cjs/react.development";
import "./todo.scss";
import { TodoContext } from "./TodoContext";

export default function Todo({ todo }) {
  const [todos, setTodos] = useContext(TodoContext);
  const [edit, setEdit] = useState(false);

  const markComplete = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        console.log("done", todo);
      }
      return todo;
    });
    setTodos([...todos]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todo-wrapper">
      <div className="item-wrapper">
        <div
          className="left-wrapper"

          // style={{ border: "1px solid", width: "500px", margin: "20px auto" }}
        >
          <div className="radio" onClick={() => markComplete(todo.id)}>
            {todo.completed ? (
              <div></div>
            ) : (
              <div className="radio-clicked"></div>
            )}
          </div>
          <p className="todo-title" onClick={() => setEdit}>
            {todo.text}
          </p>
          {/* <p>id: {todo.id}</p> */}
          {/* <p>completed: {todo.completed.toString()}</p> */}
        </div>
        <div className="icons">
          <FaEdit className="edit" />
          <FaTrashAlt className="trash" onClick={() => deleteTodo(todo.id)} />
        </div>
      </div>
    </div>
  );
}
