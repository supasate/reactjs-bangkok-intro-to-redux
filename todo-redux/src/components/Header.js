import React from 'react'
import TodoInput from './TodoInput'

const Header = (props) => (
  <header className="header">
    <h1>Todo App</h1>
    <TodoInput
      newTodo
      placeholder="What needs to be done?"
      text={props.newTodoText}
      onChange={props.onChange}
      onEnter={props.onEnter}
    />
  </header>
)

Header.propTypes = {
  newTodoText: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  onEnter: React.PropTypes.func.isRequired,
}

export default Header
