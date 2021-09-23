import React, { useState } from 'react'
import { useContext } from 'react/cjs/react.development';
import Todo from './Todo'
import { TodoContext } from './TodoContext'

function TodoList() {
    const [todos, setTodos] = useContext(TodoContext)
    const [input, setInput] = useState("");

    function newTodo(text) {
        return { text, id: Date.now(), completed: false }
    }

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([newTodo(input), ...todos]);
        setInput("");
        console.log("todo added: ", todos);
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addTodo} disabled={!input}>
                    Add Todo
                </button>
            </form>
            {todos.map(todo => (
                <Todo todo={todo} />
            ))}
        </div>
    )
}

export default TodoList