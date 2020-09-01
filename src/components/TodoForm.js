import React from 'react'

class TodoForm extends React.Component {
    //form needs it's own slice of state.
    constructor() {
      super();
      this.state = {
        item: ""
      };
    }

    //onchange function for input field
changes = (e) => {
    this.setState({
        item: e.target.value
    })
}

//run add function and clear state.
submit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.item)
    this.setState({item: ""})
    
}



render(){
    return(
        <form onSubmit = {this.submit}>
            <input
            type = "text"
            name = "item"
            value = {this.state.item}
            onChange = {this.changes}

            />
            <button onClick = {this.submit}>Add todo</button>
            <button onClick = {this.props.clear}>Clear completed</button>

        </form>
    )
}
}

export default TodoForm