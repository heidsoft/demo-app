import React ,{Component }from 'react';
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = ()=>{
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markCompleted(e){
        console.log(this.props);
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.markCompleted}/>
                <p>{ this.props.todo.title}</p>
            </div>
        )
    }
}

TodoItem.PropTypes = {
}

export default TodoItem;