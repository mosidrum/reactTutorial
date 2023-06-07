import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa'

const InputTodo = ({addTodoItem}) => {
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');

  const handleTask = (e) => {
    e.preventDefault();
    setTask(e.target.value); 
  }

  const submitTask = (e) => {
     e.preventDefault();
     if (task.trim()) {
     addTodoItem(task);
     setTask('');
     setMessage('')
     } else {
      setMessage("Please add an Item")
     }
  }
  return(
    <>
      <form onSubmit={submitTask} className="form-container">
        <input 
        className="input-text"
        type="text" 
        placeholder='Add To Do'
        value={task}
        onChange={handleTask}
        />
        <button  className="input-submit"><FaPlusCircle size={25} /></button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
}

export default InputTodo;
