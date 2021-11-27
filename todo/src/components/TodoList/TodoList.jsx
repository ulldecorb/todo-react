import React from "react";
import {TodoItem} from '../TodoItem/TodoItem';

export function TodoList({todos}) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem todo={todo} />
            ))}
        </ul>
    )
}