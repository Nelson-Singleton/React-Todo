import React from 'react';
import TodoList from './components/TodoList'
import "./components/Todo.css"
//default state
const todos = [{
  task: "Study react",
  id: Date.now(),
  completed: false
}
]



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: todos,
    }
  }

  //create new item with the current state data as the task, a unique id, and "completed" set to false.
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

  //on click, sets a copy of the array to state and flips the completed field of the clicked item
    toggleCompleted = (clickedId) => {
      this.setState({
      list: this.state.list.map((item) => {
        if(item.id === clickedId){
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }

        })
        
      })
    }

    //filters through the array and only returns items where completed = false
    clear = (e) => {
      e.preventDefault();
      this.setState({
        list: this.state.list.filter(item => !item.completed)
          
      })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
  //render TodoList. Pass necessary fields as props.
  render() {
    return (
      <div>
        <h1>To do list</h1>
        <TodoList 
        todos = {this.state.list}
        addTodo = {this.addTodo}
        toggleCompleted = {this.toggleCompleted}
        clear = {this.clear}
        />
        
      </div>
    );
  }
}

export default App;
