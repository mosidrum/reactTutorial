import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import DefaultProps from '../PropTypes';

const TodosLogic = () => {
  function getInitialTodos() {
    const temp = localStorage.getItem('todos');
    const savedTodo = JSON.parse(temp);
    return savedTodo || [];
  }

  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTodoItem = (task) => {
    const newTodo = {
      id: uuidv4(),
      title: task,
      complete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (update, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: update,
          };
        }
        return todo;
      }),
    );
  };

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodoList
        todoprops={todos}
        handleChange={handleChange}
        deleteTodo={deleteTodo}
        setUpdate={setUpdate}
      />
    </div>
  );
};

TodosLogic.propTypes = DefaultProps;

export default TodosLogic;
