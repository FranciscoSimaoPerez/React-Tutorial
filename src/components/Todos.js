import React from 'react';
import TodoItem from './TodoItem';
// import PropTypes from 'prop-types';


const Todos = ({todos}) => (
    todos.map((todo) => {
        console.log(todo);
        return <TodoItem key={todo.id} text={todo.text} />
    })
)



export default Todos;