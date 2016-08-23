import types from './types'

const addTodo = (id, title) => ({
  type: types.ADD_TODO,
  payload: {
    id,
    title,
  },
})

export default {
  addTodo,
}
