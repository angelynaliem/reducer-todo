import React from 'react';

const Todo = props => {

    return (
        <div
        className={`item${props.item.completed ? ' completed' : '' }` }
        onClick={ () => props.toggleTodoItem(props.item.id) }
        >
            <p>{props.item.todoItem}</p>
        </div>
    )
}

export default Todo;