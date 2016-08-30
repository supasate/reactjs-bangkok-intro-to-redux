import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import filters from '../constants/filters'
import actions from '../actions/todos'

const mapStateToProps = (state) => {
  let todos

  if (state.filter === filters.ACTIVE) {
    todos = state.todos.filter((todo) => todo.completed === false)
  } else if (state.filter === filters.COMPLETED) {
    todos = state.todos.filter(todo => todo.completed === true)
  } else {
    todos = state.todos
  }

  return {
    todos,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onItemClick: (id) => {
    dispatch(actions.toggleTodo(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
