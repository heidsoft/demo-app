import React,{ Component} from 'react';
class Todos extends Component {
    render() {
       return (
           <div className="App">
               <Todos todos={this.state.todos} />
           </div>
       )
    }
}

export default Todos;