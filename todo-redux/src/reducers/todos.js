import types from '../actions/types'

const initialState = []

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO: {
      const nextId = state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
      const newTodo = {
        id: nextId,
        title: action.payload.title,
        completed: false,
      }
      return [...state, newTodo]
    }
    default:
      return state
  }
}

export default todosReducer
