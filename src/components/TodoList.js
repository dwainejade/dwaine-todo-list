import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import Todo from "./Todo";
import { TodoContext } from "./TodoContext";

function TodoList() {
    const [todos, setTodos] = useContext(TodoContext);
    const [input, setInput] = useState("");

    function newTodo(text) {
        return { text, id: Date.now(), completed: false };
    }

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, newTodo(input)]);
        setInput("");
        console.log("todo added: ", todos);
    };

    return (
        <div>
            {todos.map((todo) => (
                <Todo todo={todo} key={todo.id} />
            ))}
            <form>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addTodo} disabled={!input}>
                    +
                </button>
            </form>
        </div>
    );
}

export default TodoList;
