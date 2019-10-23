import React, { Component } from 'react';
import '../index.css';


class App extends Component {
    constructor() {
        super();
        this.state = { todos: [] };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/todos')
            .then(response => response.json())
            .then(todos => this.setState({ todos }));
    }


    render() {
        const notComplete = {color: 'red'}
        const complete = {color: 'green'}
        return (
            <div > 
                <h1 >Total Number of Todos: {this.state.todos.length}</h1>
                <h1>Total Number of Completed: {this.state.todos
                    .filter((todo) => todo.completed).length}</h1>
           
              <div className = 'todolist'>
                <h1>Todo List</h1>
                    {this.state.todos
                        .sort((a, b) => b.id - a.id)
                        .map((todo) => <ul style ={todo.completed === true ? complete : notComplete} >
                        {todo.id}: {todo.title} {todo.completed === true ?  <span>&#10003;</span> :  <span>&#10005;</span>}</ul>)}
              </div> 

            </div>);
    }
}

export default App;

