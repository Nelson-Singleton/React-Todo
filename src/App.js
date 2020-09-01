import React from 'react';
import TodoList from './components/TodoList'

const todos = [{
  task: "Study react",
  id: Date.now(),
  completed: false
},
{
  task: "Study Javascript",
  id: Date.now(),
  complete: false
}
]



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: todos,
    }
  }

  addTodo = (itemName) => {
    const newTask = {
        task: itemName,
        id: new Date(),
        completed: false,
    }
    this.setState({
        list: [...this.state.list, newTask]
    })
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>To do list</h1>
        <TodoList 
        todos = {this.state.list}
        addTodo = {this.addTodo} />
        
      </div>
    );
  }
}

export default App;
