import types from './types'

const addTodo = (title) => ({
  type: types.ADD_TODO,
  payload: {
    title,
  },
})

export default {
  addTodo,
}
