import types from './types'

const changeNewTodoText = (text) => ({
  type: types.CHANGE_NEW_TODO_TEXT,
  payload: {
    text,
  },
})

const addTodo = (id, title) => ({
  type: types.ADD_TODO,
  payload: {
    id,
    title,
  },
})

const toggleTodo = (id) => ({
  type: types.TOGGLE_TODO,
  payload: {
    id,
  },
})

export default {
  changeNewTodoText,
  addTodo,
  toggleTodo,
}
