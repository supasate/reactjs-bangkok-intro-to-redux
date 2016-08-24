import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import todoActions from '../actions/todos'
import Header from '../components/Header'
import TodoList from './TodoList'

const TodoApp = (props) => {
  const onNewTodoTextChange = (text) => {
    props.actions.changeNewTodoText(text)
  }

  const onAddTodo = (text) => {
    props.actions.addTodo(text)
  }

  const onDestroyTodo = (id) => {
    props.actions.destroyTodo(id)
  }

  return (
    <div>
      <Header
        newTodoText={props.newTodoText}
        onChange={onNewTodoTextChange}
        onEnter={onAddTodo}
      />
      <TodoList onDestroy={onDestroyTodo} />
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
