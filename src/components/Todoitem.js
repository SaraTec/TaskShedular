import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todoitem extends Component {
    getStyle = () => {
        let stil;
        if (this.props.todo.completed)
            stil = "line-through";
        else
            stil = "none";
        return {
            backgroundColor: "#f4f4f4",
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: stil
        }
    }

    markComplete = (e) => {
        console.log(this.props);

    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p> <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{""}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style ={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

const itemStyle = {
    backgroundColor: '#f4f4f4'
}
const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
Todoitem.propTypes = {
    todos: PropTypes.object.isRequired
}

export default Todoitem
