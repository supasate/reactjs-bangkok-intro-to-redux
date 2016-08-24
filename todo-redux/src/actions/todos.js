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

const destroyTodo = (id) => ({
  type: types.DESTROY_TODO,
  payload: {
    id,
  },
})

export default {
  changeNewTodoText,
  addTodo,
  toggleTodo,
  destroyTodo,
}
