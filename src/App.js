import React, { Component } from 'react'
import Todos from './components/Todos'
import './App.css'
import './components/Layout'
import Layout from './components/Layout';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
class App extends Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: "one",
                completed: false
            },
            {
                id: uuid.v4(),
                title: "two",
                completed: false
            },
            {
                id: uuid.v4(),
                title: "333",
                completed: false
            }
        ]
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            }
            )
        });
    }

    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })

    }
    addTodo = (title) =>
    {
        const newTodo = {
            id: uuid.v4(),
            title: title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] });        
    }
    render() {
        return (
            <div className="App">
                <div className="conntainer">
                    <Layout />
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </div>
            </div>
        );
    }
}

export default App