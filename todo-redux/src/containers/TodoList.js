import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import actions from '../actions/todos'

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
  onItemClick: (id) => {
    dispatch(actions.toggleTodo(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
