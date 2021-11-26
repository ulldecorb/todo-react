import React from 'react';
import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import List from './constants/List';

export function App () {
    return (
        <>
            <Header />
            <TodoList todos={List} />
        </>
    )
}