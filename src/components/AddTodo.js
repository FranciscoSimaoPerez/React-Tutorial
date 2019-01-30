import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    /* [e.target.name] vai buscar o nome no input neste caso é title, desta forma é possível usar para vários inputs em vez de ter
     de criar um setState para cada input.

     e.target.value vai buscar o value do input e esse value é enviado para o state
    */
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="input-group my-3">
                <input className="form-control" 
                    type="text" name="title"  
                    placeholder="Add To Do"
                    onChange={this.onChange}
                    value={this.state.title}
                />
                <div className="input-group-append">
                    <input className="btn btn-primary" 
                        type="submit" 
                        value="Add"
                    />
                </div>
            </form> 
        );
    }
}

export default AddTodo