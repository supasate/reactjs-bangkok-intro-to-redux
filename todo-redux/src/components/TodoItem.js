import React from 'react'
import classNames from 'classnames'

const TodoItem = ({ todo }) => (
  <li
    className={classNames('todo-item', {
      completed: todo.completed,
    })}
  >
    { todo.title }
  </li>
)

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
}

export default TodoItem
