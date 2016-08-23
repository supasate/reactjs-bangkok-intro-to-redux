import types from '../actions/types'

const initialState = []

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO: {
      const newTodo = {
        id: action.payload.id,
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
