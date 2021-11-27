import React from "react";
import {TodoItem} from '../TodoItem/TodoItem';

export function TodoList({todos, toggleTodo, handleDeleteTask, handleUpdateTask}) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem todo={todo} toggleTodo={toggleTodo} handleDeleteTask={handleDeleteTask} handleUpdateTask={handleUpdateTask} />
            ))}
        </ul>
    )
}