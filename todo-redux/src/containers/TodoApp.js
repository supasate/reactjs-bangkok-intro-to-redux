import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import todoActions from '../actions/todos'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'

const TodoApp = (props) => {
  const onNewTodoTextChange = (text) => {
    props.actions.changeNewTodoText(text)
  }

  const onAddTodo = (text) => {
    if (text !== '') {
      props.actions.addTodo(text)
    }
  }

  const onToggleAllTodos = () => {
    props.actions.toggleAllTodos()
  }

  const onDestroyTodo = (id) => {
    props.actions.destroyTodo(id)
  }

  const onSelectFilter = (filter) => {
    props.actions.filterTodo(filter)
  }

  const onClearCompleted = () => {
    props.actions.clearCompletedTodos()
  }

  const footer = props.todos.length > 0 ?
    <Footer
      numActiveItem={props.todos.length}
      filter={props.filter}
      onSelectFilter={onSelectFilter}
      onClearCompleted={onClearCompleted}
    /> : ''

  return (
    <div>
      <Header
        newTodoText={props.newTodoText}
        onChange={onNewTodoTextChange}
        onEnter={onAddTodo}
      />
      <MainSection onToggleAll={onToggleAllTodos} onDestroy={onDestroyTodo} />
      {footer}
    </div>
  )
}

TodoApp.propTypes = {
  newTodoText: React.PropTypes.string,
  actions: React.PropTypes.object.isRequired,
  todos: React.PropTypes.array.isRequired,
  filter: React.PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  newTodoText: state.newTodoText,
  todos: state.todos,
  filter: state.filter,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
