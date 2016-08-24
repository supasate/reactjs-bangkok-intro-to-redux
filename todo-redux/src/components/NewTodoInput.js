import React from 'react'

const NewTodoInput = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value)
  }

  return (
    <input
      className="new-todo-input"
      value={props.text}
      placeholder={props.placeholder}
      onChange={handleChange}
    />
  )
}

NewTodoInput.propTypes = {
  text: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
}

export default NewTodoInput
