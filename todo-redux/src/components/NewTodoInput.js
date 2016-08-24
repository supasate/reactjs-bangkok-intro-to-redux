import React from 'react'

const ENTER_KEY = 13

const NewTodoInput = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      props.onAddTodo(event.target.value.trim())
    }
  }

  return (
    <input
      className="new-todo-input"
      value={props.text}
      placeholder={props.placeholder}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}

NewTodoInput.propTypes = {
  text: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  onAddTodo: React.PropTypes.func.isRequired,
}

export default NewTodoInput
