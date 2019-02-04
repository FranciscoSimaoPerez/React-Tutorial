import uuid from 'uuid';
//Action types
export const ADD_TODO = 'ADD_TODO';

//Action creators
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text,
        id: uuid()
    }
}

