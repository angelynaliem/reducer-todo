import React from 'react';

const Todo = props => {

    return (
        <div
        className={`item${props.item.completed ? ' completed' : '' }` }
        onClick={ () => props.toggleTodoItem(props.item.id) }
        >
            <div className="itemDue">
            <p>{props.item.todoItem}</p>
            <span 
            className={`item${props.item.timestampDue ? ' overdue' : '' }` }
            // onClick={ () => props.overdue(props.item.timestampDue) }
            // {props.overdue ? } 
            >
                Due: {props.item.timestampDue}</span>
            </div>
        </div>
    )
}

export default Todo;