import React, { Fragment, useState } from 'react';
import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import List from './constants/List';

export function App () {
    const [todos, setTodos] = useState(List);
    return (      
        <Fragment>      
            <Header />
            <TodoList todos={todos} />
            <button>➕</button>
            <button>🗑</button>
        </Fragment>
    )
}