import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm'



const TodoList = props => {
      
    return(
        <div>
            {/* map through array from props and render Todo for each */}
            {props.todos.map(item => (
                    <Todo 
                    key = {item.id}                    
                    someItem = {item}
                    task = {item.task}
                    toggleCompleted = {props.toggleCompleted} 
                    
                    />
                    

                ))
            }
            {/* Pass array and functions down another level via props */}
            <TodoForm 
            todos = {props.todos}
            addTodo = {props.addTodo}
            clear = {props.clear}
            />
        </div>
    )


}

export default TodoList
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
