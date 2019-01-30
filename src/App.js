import React, { Component } from 'react';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends Component {
    state ={
        todos: [
            {
                id: 1,
                title: "Take out the trash",
                completed: false
            },
            {
                id: 2,
                title: "Do things",
                completed: false
            },
            {
                id: 3,
                title: "Handshake amigo",
                completed: true
            }
        ]
    }
    // Toggle complete
    markComplete = (id) => {
        this.setState( { todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })} );
    }

    //Delete Todo
    deleteTodo = (id) => {
        this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

    //AddTodo
    addTodo = (title) => {
        const newTodo = {
            id: 3,
            title: title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo]})
    }

    render() {
        return ( 
            <div className = "App" >
                <Header />
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
            </div>
        );
    }
}

export default App;