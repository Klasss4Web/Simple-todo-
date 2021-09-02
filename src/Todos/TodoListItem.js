import React from 'react';
import './TodoListItem.css';


export default function TodoListItem({ todo, onRemovePressed, onCompletedPressed }) {
  return (
    <div className="todo-container">
      <h3 className="todo-item">{todo.text}</h3>
      <div className="buttons-container">
        {todo.isCompleted ? <button 
            className="mark-btn mark-completed-btn"
          >Completed</button> : 
          <button 
            onClick={() => onCompletedPressed(todo.text)}
            className="mark-btn completed-btn"
          >Mark as completed</button> }
        
        <button onClick={() => onRemovePressed(todo.text)} className="remove-btn">Remove</button>
      </div>
    </div>
  )
}

