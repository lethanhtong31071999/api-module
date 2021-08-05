import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
};

function TodoList(props) {
  const { todoList } = props;
  return (
    <ul>
      {todoList.map(function (todo) {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
}

export default TodoList;
