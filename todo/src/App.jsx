import React, { Fragment, useState, useRef } from 'react';
import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import List from './constants/List';

export function App () {
    const [todos, setTodos] = useState(List);

    const todoTaskRef = useRef();

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === '') return;

        // const newId = todos.length;
        const newId = todos.map((e) => e.id).sort((a, b) => a + b)[todos.length - 1] + 1;

        const prevTodos = {id: newId, task: task, completed: false};

        setTodos([...todos,prevTodos])

        todoTaskRef.current.value = null;
    }

    return (      
        <Fragment>      
            <Header />
            <TodoList todos={todos} />
            <input ref={todoTaskRef} type="text" placeholder="New Task" />
            <button onClick={handleTodoAdd}>➕</button>
            <button>🗑</button>
        </Fragment>
    )
}