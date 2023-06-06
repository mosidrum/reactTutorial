import React, { useState } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const handleChange = (id) => {
    setTodos((prevState) => 
      prevState.map((todo) => {
        if(todo.id === id) {
          return {
            ...todo,
            completed : !todo.completed,
          };
        }
        return todo
      })
    )
  }

  const deleteTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      })
    ])
  }

  const addTodoItem = (task) => {
    const newTodo = {
      id: uuidv4(),
      title : task,
      complete : false,
    }
    setTodos([...todos, newTodo]);
  }

  const setUpdate = (update, id) => {
    setTodos(
      todos.map((todo) => {
        if(todo.id === id){
          todo.title = update;
        }
        return todo;
      })
    )
  }

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodoList todoprops={todos} handleChange={handleChange} deleteTodo={deleteTodo} setUpdate={setUpdate}/>
    </div>
  );
};

export default TodosLogic;
