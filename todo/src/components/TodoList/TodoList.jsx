import React from "react";
import {TodoItem} from '../TodoItem/TodoItem';

export function TodoList({todos, toggleTodo}) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem todo={todo} toggleTodo={toggleTodo}  />
            ))}
        </ul>
    )
}