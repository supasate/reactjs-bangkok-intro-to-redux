import types from './types'

const changeNewTodoText = (text) => ({
  type: types.CHANGE_NEW_TODO_TEXT,
  payload: {
    text,
  },
})

const addTodo = (title) => ({
  type: types.ADD_TODO,
  payload: {
    title,
  },
})

const toggleTodo = (id) => ({
  type: types.TOGGLE_TODO,
  payload: {
    id,
  },
})

const toggleAllTodos = () => ({
  type: types.TOGGLE_ALL_TODOS,
})

const destroyTodo = (id) => ({
  type: types.DESTROY_TODO,
  payload: {
    id,
  },
})

const filterTodo = (filter) => ({
  type: types.FILTER_TODO,
  payload: {
    filter,
  },
})

const clearCompletedTodos = () => ({
  type: types.CLEAR_COMPLETED_TODOS,
})

export default {
  changeNewTodoText,
  addTodo,
  toggleTodo,
  toggleAllTodos,
  destroyTodo,
  filterTodo,
  clearCompletedTodos,
}
