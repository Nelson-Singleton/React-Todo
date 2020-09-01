import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm'



const TodoList = (props) => {



      
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
            addTodo = {props.addTodo}/>
        </div>
    )


}

export default TodoList
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
