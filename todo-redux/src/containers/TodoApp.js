import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import todoActions from '../actions/todos'
import NewTodoInput from '../components/NewTodoInput'
import TodoList from './TodoList'

const TodoApp = (props) => {
  const onNewTodoTextChange = (text) => {
    props.actions.changeNewTodoText(text)
  }

  const onAddTodo = (text) => {
    props.actions.addTodo(text)
  }

  return (
    <div>
      <NewTodoInput
        placeholder="What needs to be done?"
        text={props.newTodoText}
        onChange={onNewTodoTextChange}
        onEnter={onAddTodo}
      />
      <TodoList />
    </div>
  )
}

TodoApp.propTypes = {
  newTodoText: React.PropTypes.string,
  actions: React.PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  newTodoText: state.newTodoText,
  todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
