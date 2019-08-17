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
    render() {
        console.log(this.state.todos)
        return (
          <div className="App">
              <Todos todos={this.state.todos}></Todos>
          </div>
        );
    }
}

export default App;