import { combineReducers } from 'redux'
import todosReducer from './todos'
import newTodoReducer from './newTodo'
import filterTodoReducer from './filterTodo'

const rootReducer = combineReducers({
  todos: todosReducer,
  newTodoText: newTodoReducer,
  filter: filterTodoReducer,
})

export default rootReducer
