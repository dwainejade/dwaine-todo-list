import React, { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "do laundry",
            completed: false
        },
        {
            id: 2,
            text: "go to the bank",
            completed: true
        },
        {
            id: 3,
            text: "study for test",
            completed: false
        }
    ]);



    return <TodoContext.Provider
        value={[todos, setTodos, ]}
    >{props.children}</TodoContext.Provider>;
};
