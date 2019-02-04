import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import uuid from 'uuid';

import Header from './components/layout/header';
// import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import TodoList from './containers/TodoList'

import './App.css';
// import axios from 'axios';

class App extends Component {
    state ={
        todos: []
    }

    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //     .then(res => this.setState({ todos: res.data }))
    // }

 


    render() {
        return ( 
            <BrowserRouter>
                <div className="App">
                    <Header />
                    
                    <Route exact path="/" render={ props => (
                        <Fragment>
                            <AddTodo />
                            {/* <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/> */}
                            <TodoList />
                        </Fragment>
                    )} />
                    
                    <Route path="/about" component={About} />

                </div>
            </BrowserRouter>
        );
    }
}

export default App;