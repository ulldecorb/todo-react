import React, { useRef } from "react";

export function TodoItem ({todo,  toggleTodo, handleDeleteTask, handleUpdateTask}) {

    const updateTask = useRef()

    const { id, task, completed } = todo;
    const handleTodoClick = () => {
        toggleTodo(id);
    }
    const handleDeleteTaskClick = () => {
        console.log("id: "+ id + " - task: " + task);
        handleDeleteTask(id);
    }
    const handleUpdateTaskClick = () => {
        handleUpdateTask(id, updateTask.current.value);
        updateTask.current.value = null;
    }

    return(
        <li>
            <input type="checkbox" checked={completed} onChange={handleTodoClick} />
            {task}
            <button onClick={handleDeleteTaskClick}>❌</button>
            <input ref={updateTask} type="text" placeholder={task} />
            <button onClick={handleUpdateTaskClick}>🔄</button>
        </li>
    )
}