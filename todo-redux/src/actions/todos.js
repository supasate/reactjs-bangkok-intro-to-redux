import types from './types'

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
  addTodo,
  toggleTodo,
}
