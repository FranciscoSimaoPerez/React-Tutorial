import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

// import PropTypes from 'prop-types';

let AddTodo = ({ dispatch }) => {
    let input;

    /* [e.target.name] vai buscar o nome no input neste caso é title, desta forma é possível usar para vários inputs em vez de ter
     de criar um setState para cada input.

     e.target.value vai buscar o value do input e esse value é enviado para o state
    */
    // onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    // onSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.addTodo(this.state.title);
    //     this.setState({ title: '' });
    // }

 
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }

                dispatch(addTodo(input.value))
                input.value = ''
            }} 
            className="input-group my-3">
                <input className="form-control" 
                    type="text" name="title"  
                    placeholder="Add To Do"
                    ref={ node => {
                        input = node
                    }}
                />
                <div className="input-group-append">
                    <input className="btn btn-primary" 
                        type="submit" 
                        value="Add"
                    />
                </div>
            </form> 
        </div>
    );
}



AddTodo = connect()(AddTodo)
export default AddTodo;