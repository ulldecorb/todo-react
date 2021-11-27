import React from "react";

export function TodoItem ({todo}) {

    const { id, task } = todo;

    return(
        <li>
            <input type="checkbox" />
            {id}
            {task}
        </li>
    )
}