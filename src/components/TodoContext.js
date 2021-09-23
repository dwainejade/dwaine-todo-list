import React, { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "do laundry",
      completed: false,
      edit: false
    },
    {
      id: 2,
      text: "go to the bank",
      completed: true,
      edit: false
    },
    {
      id: 3,
      text: "study for test",
      completed: false,
      edit: false
    }
  ]);

  // // localStorage
  // const todoStorage = {
  //     fetch: function () {
  //         let todos = JSON.parse(localStorage.getItem('todo-app') || '[]')
  //         todos.forEach(function (todo, index) {
  //             todo.id = index
  //         })
  //         todoStorage.uid = todos.length
  //         return todos
  //     },
  //     save: function (todos) {
  //         localStorage.setItem('todo-app', JSON.stringify(todos))
  //     }
  // }

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
