import React from 'react'
import classNames from 'classnames'

const TodoItem = (props) => (
  <li
    className={classNames('todo-item', {
      completed: props.todo.completed,
    })}
  >
    {props.todo.title}
  </li>
)

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
}

export default TodoItem
