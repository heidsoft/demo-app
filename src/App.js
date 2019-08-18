import React from 'react';
import "./App.css";
import Todos from "./Todos"
class App extends React.Component {
    state ={
        todos:[
            {
                id: 1,
                title: "golang",
                completed: false,
            },
            {
                id: 2,
                title: "java",
                completed: false,
            },
            {
                id: 3,
                title: "c++",
                completed: false,
            }
        ]
    }
    markComplete = (id) => {
        console.log(id);
        this.setState({todos: this.state.todos.map( todo => {
            if(todo.id===id){
                todo.completed = !todo.completed
            }
            return todo;
        })})
    }

    delTodo =(id) => {
        console.log(id)
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    }
    render() {
        console.log(this.state.todos)
        return (
          <div className="App">
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
          </div>
        );
    }
}

export default App;