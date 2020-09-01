import React from 'react'
import TodoForm from './TodoForm'

const Todo = (props) =>{
    return(
    <div>
        <h2>{props.task}</h2>
    </div>
    )
}

export default Todo;