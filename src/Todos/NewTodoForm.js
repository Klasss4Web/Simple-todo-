import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions';

import './NewTodoForm.css';


function NewTodoForm({ todos, onCreatePressed }) {
  
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="new-todo-form">
      <input
       type="text" 
       className="todo-input"
       placeholder="Add a new todo"
       value={inputValue}
       onChange={e => setInputValue(e.target.value)} 
       />
      <button className="add-todo-btn"
        onClick={() => {
          const isDuplicateText = todos.some(todo => todo.text === inputValue);
          if(!isDuplicateText && inputValue !== '') {
            onCreatePressed(inputValue);
            setInputValue('');
          }
        }}
      >Add Todo</button>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(createTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
