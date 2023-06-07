import React from 'react';
import TodosLogic from './components/TodosLogic';
import Header from './components/Header';

const TodoApp = () => (
  <>
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  </>
);

export default TodoApp;
