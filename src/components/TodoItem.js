import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    //Function to style component
    getStyle = () => {
        return {
            backgroundColor: 'f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button className="btn btn-danger ml-2" value="Delete" onClick={this.props.deleteTodo.bind(this, id)}>X</button>
                </p> 
            </div>
        )
    }
    
}

// propTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default TodoItem