import React from 'react';
import { TodoList } from './components/TodoList';
import List from './constants/List';

export function App () {
    return (
        <TodoList todos={List} />
    )
}