import React from 'react';

import Todo from './Todo';

const TodoList = props => {

    return (
        <div>
            {props.todoItems.map((item) => {
                return <Todo 
                key={item.id}
                item={item}
                toggleTodoItem={props.toggleTodoItem}
                overdue={props.overdue} />
            })}

            <button onClick={props.clearCompletedItems} className="clearButton">Clear completed todo items</button>
        </div>
    )
}

export default TodoList;