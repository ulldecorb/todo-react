import React from "react";

export function TodoItem ({todo,  toggleTodo, handleDeleteTask}) {

    const { id, task, completed } = todo;
    const handleTodoClick = () => {
        toggleTodo(id);
    }
    const handleDeleteTaskClick = () => {
        console.log("id: "+ id + " - task: " + task);
        handleDeleteTask(id);
    }

    return(
        <li>
            <input type="checkbox" checked={completed} onChange={handleTodoClick} />
            {task}
            <button onClick={handleDeleteTaskClick}>❌</button>
        </li>
    )
}