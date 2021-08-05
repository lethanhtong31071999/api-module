import React from 'react';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {};

function ListPage(props) {
  const todoList = [
    {
      id: 1,
      title: 'eat',
      status: 'completed',
    },
    {
      id: 2,
      title: 'sleep',
      status: 'new',
    },
    {
      id: 3,
      title: 'code',
      status: 'new',
    },
  ];

  function handleTodoFormSubmit(value) {
    console.log('Form submit: ', value);
  }

  return (
    <div>
      <h3>What to do?</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>Todo List</h3>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default ListPage;
