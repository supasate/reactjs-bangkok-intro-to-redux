import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  const todoList = props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)

  return (
    <ul className="todo-list">
      {todoList}
    </ul>
  )
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
}

export default TodoList
