import React, { Fragment, useState, useRef, useEffect } from 'react';
import {v4 as newId} from 'uuid';
import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import List from './constants/List';

const KEY = "todoApp.todos";

export function App () {
    const [todos, setTodos] = useState(List);

    const todoTaskRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos) {
            setTodos(storedTodos)
        }
    } , [])

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos))
    }, [todos])

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }

    const handleDeleteTask = (id) => {
        const todoList = [...todos];
        const newTodos = todoList.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }

    const handleUpdateTask = (id, newTask) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.task = newTask
        setTodos(newTodos);
    }

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
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
            <TodoList todos={todos} toggleTodo={toggleTodo} handleDeleteTask={handleDeleteTask} handleUpdateTask={handleUpdateTask} />
            <input ref={todoTaskRef} type="text" placeholder="New Task" />
            <button onClick={handleTodoAdd}>➕</button>
            <button onClick={handleClearAll}>🗑</button>
            <div>{todos.filter((todo) => !todo.completed).length} task to complet</div>
        </Fragment>
    )
}