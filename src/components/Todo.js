import React, { useEffect, useState } from "react";
import {
  FaEdit,
  FaTrashAlt,
  FaRegCheckCircle,
  FaRegCircle
} from "react-icons/fa";
import { useContext } from "react/cjs/react.development";
import "./todo.css";
import { TodoContext } from "./TodoContext";

export default function Todo({ todo }) {
  const [todos, setTodos, storage, setStorage] = useContext(TodoContext);
  const [input, setInput] = useState(todo.text);

  const markComplete = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos([...todos]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleEdit = (todo) => {
    todos.map((t) => {
      if (t.id === todo.id) {
        todo.edit = !todo.edit;
        console.log(t);
      }
    });
    setTodos([...todos]);
  };

  const handleSave = (e) => {
    e.preventDefault();
    todos.map((t) => {
      if (t.id === todo.id) {
        todo.text = input;
        todo.edit = !todo.edit;
        console.log(t);
      }
    });
    setTodos([...todos]);
    if (!todo.text) {
      deleteTodo(todo.id);
    }
  };

  return (
    <div className="todo-wrapper">
      {todo.edit ? (
        <div>
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </form>
        </div>
      ) : (
        <div className="item-wrapper">
          {todo.completed ? (
            <div className="left-wrapper">
              <div onClick={() => markComplete(todo.id)}>
                <FaRegCheckCircle className="checkbox" size={20} />
              </div>
              <p className="strike">{todo.text}</p>
            </div>
          ) : (
            <div className="left-wrapper">
              <div onClick={() => markComplete(todo.id)}>
                <FaRegCircle className="checkbox" size={20} />
              </div>
              <p className="text">{todo.text}</p>
            </div>
          )}
          {/* <p>id: {todo.id}</p> */}
          {/* <p>completed: {todo.completed.toString()}</p> */}
          <div className="icons">
            <FaEdit
              className="edit"
              onClick={() => handleEdit(todo)}
              size={20}
            />
            <FaTrashAlt
              className="trash"
              size={20}
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
