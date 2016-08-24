import React from 'react'
import classNames from 'classnames'

const TodoItem = ({ todo, onClick }) => (
  <li
    className={classNames('todo-item', {
      completed: todo.completed,
    })}
    onClick={onClick}
  >
    <div className="view">
      <label htmlFor="todo-item">{ todo.title }</label>
    </div>
  </li>
)

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired,
}

export default TodoItem
