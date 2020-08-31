import React from 'react'

class TodoForm extends React.Component {
constructor(){
    super();
    this.state = {
        someTodo: ""
    };
}

changes = (e) => {
    this.setState({
        someTodo: e.target.value
    })
}

submit = (e) => {
    e.preventDefault();

}

render(){
    return(
        <form onSubmit = {this.submit}>
            <input
            type = "text"
            name = "someTodo"
            value = {this.state.someTodo}
            onChange = {this.changes}

            />
            <button>Add todo</button>
            <button>Clear completed</button>

        </form>
    )
}
}

export default TodoForm