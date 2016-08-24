import { combineReducers } from 'redux'
import todosReducer from './todos'
import newTodoReducer from './newTodo'

const rootReducer = combineReducers({
  todos: todosReducer,
  newTodoText: newTodoReducer,
})

export default rootReducer
