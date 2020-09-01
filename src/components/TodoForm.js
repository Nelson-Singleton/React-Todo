import React from 'react'

class TodoForm extends React.Component {
    
    constructor() {
      super();
      this.state = {
        item: ""
      };
    }

changes = (e) => {
    this.setState({
        item: e.target.value
    })
}

submit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.item)
    
}

clear = (e) => {
    e.preventDefault();
}

render(){
    return(
        <form onSubmit>
            <input
            type = "text"
            name = "someTodo"
            value = {this.state.item}
            onChange = {this.changes}

            />
            <button onClick = {this.submit}>Add todo</button>
            <button>Clear completed</button>

        </form>
    )
}
}

export default TodoForm