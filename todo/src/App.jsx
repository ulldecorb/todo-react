import React, { Fragment, useState, useRef } from 'react';
import {v4 as newId} from 'uuid';
import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import List from './constants/List';

export function App () {
    const [todos, setTodos] = useState(List);

    const todoTaskRef = useRef();

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id == id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === '') return;

        const prevTodos = {id: newId(), task: task, completed: false};

        setTodos([...todos,prevTodos])

        todoTaskRef.current.value = null;
    }

    return (
        <Fragment>      
            <Header />
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <input ref={todoTaskRef} type="text" placeholder="New Task" />
            <button onClick={handleTodoAdd}>➕</button>
            <button>🗑</button>
        </Fragment>
    )
}