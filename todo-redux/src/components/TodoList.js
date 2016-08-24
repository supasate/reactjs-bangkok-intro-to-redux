import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onItemClick, onDestroy }) => {
  const todoList = todos.map((todo) =>
    <TodoItem
      key={todo.id}
      todo={todo}
      onClick={() => onItemClick(todo.id)}
      onDestroy={() => onDestroy(todo.id)}
    />
  )

  return (
    <ul className="todo-list">
      {todoList}
    </ul>
  )
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
  onItemClick: React.PropTypes.func.isRequired,
  onDestroy: React.PropTypes.func.isRequired,
}

export default TodoList
