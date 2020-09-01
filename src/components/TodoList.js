import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm'



const TodoList = (props) => {

    const addTodo = (itemName) => {
        const newTask = {
            task: itemName,
            id: new Date(),
            completed: false,
        }
        this.setState({
            todos: [...this.state.todos, newTask]
        })
      }

      
    return(
        <div>
            {props.todos.map((item) => (
                    <Todo 
                    key = {item.id}                    
                    task = {item.task}
                    />
                    

                ))
            }
            <TodoForm 
            todos = {props.todos}
            addTodo = {addTodo}/>
        </div>
    )


}

export default TodoList
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
