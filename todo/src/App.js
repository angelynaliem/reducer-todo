import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

import {
  reducer,
  initialState,
  ADD_TODO_ITEM,
  TOGGLE_COMPLETED_TODO_ITEM,
  CLEAR_ALL_COMPLETED_ITEMS,
  OVERDUE,
} from './reducer';

import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm'; 
import './App.css';

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodoItem = (e, item) => {
    e.preventDefault();
    dispatch( { type: ADD_TODO_ITEM, payload: item } )
  }

  const toggleTodoItem = itemId => {
    dispatch( { type: TOGGLE_COMPLETED_TODO_ITEM, payload: itemId } )
  }

  const clearCompletedItems = e => {
    e.preventDefault();
    dispatch( { type: CLEAR_ALL_COMPLETED_ITEMS } )
  }

  const overdue = itemTimestampDue => {
    dispatch( { type: OVERDUE, payload: itemTimestampDue } )
  }

  return (
    <div className="mainDiv">
  
        <h1>My To Do List</h1>
        <TodoForm addTodoItem={addTodoItem} />
    
      <TodoList
      todoItems={state.todoItems}
      toggleTodoItem={toggleTodoItem}
      clearCompletedItems={clearCompletedItems}
      overdue={overdue}
      />
    </div>
  )
}

export default App;
