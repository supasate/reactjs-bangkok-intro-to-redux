import React from 'react'
import classNames from 'classnames'

const ENTER_KEY = 13

const TodoInput = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      props.onEnter(event.target.value.trim())
      if (props.newTodo) {
        props.onChange('')
      }
    }
  }

  return (
    <input
      className={classNames('todo-input', {
        'new-todo': props.newTodo,
      })}
      value={props.text}
      placeholder={props.placeholder}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}

TodoInput.propTypes = {
  text: React.PropTypes.string,
  newTodo: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  onEnter: React.PropTypes.func.isRequired,
}

export default TodoInput
