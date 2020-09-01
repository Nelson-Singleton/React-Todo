import React from 'react'


const Todo = (props) =>{
    return(
    <div
    // if ID's match toggle completed from true to false or from false to true
    onClick = {() => props.toggleCompleted(props.someItem.id)}
    //If completed is true, set class to completed. Completed class has a line through its text.
    className= {props.someItem.completed === true ? "completed" : "" }
    
   
    >
        <h2>{props.task}</h2>
    </div>
    )
}

export default Todo;