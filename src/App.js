import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import uuid from 'uuid';

import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import './App.css';
import axios from 'axios';

class App extends Component {
    state ={
        todos: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({ todos: res.data }))
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
        // this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)] });
        axios.delete('https://jsonplaceholder.typicode.com/todos/'+ id)
        .then(res => this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
    }

    //AddTodo
    addTodo = (title) => {
        // const newTodo = {
        //     id: uuid.v4(),
        //     title, // no ES6 é o mesmo que title: title 
        //     completed: false
        // }
        // this.setState({ todos: [...this.state.todos, newTodo]})
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        }).then(res => this.setState({ todos: [...this.state.todos, res.data]}));
    }

    render() {
        return ( 
            <BrowserRouter>
                <div className="App">
                {console.log(this.state)}
                    <Header />
                    
                    <Route exact path="/" render={ props => (
                        <Fragment>
                            <AddTodo addTodo={this.addTodo}/>
                            <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
                        </Fragment>
                    )} />
                    
                    <Route path="/about" component={About} />

                </div>
            </BrowserRouter>
        );
    }
}

export default App;