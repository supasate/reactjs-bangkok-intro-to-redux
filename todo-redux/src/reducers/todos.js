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
    case types.TOGGLE_TODO: {
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    }
    case types.TOGGLE_ALL_TODOS: {
      const isAllCompleted = state.every(todo => todo.completed)

      return state.map(todo => {
        if (isAllCompleted) {
          return { ...todo, completed: false }
        }
        return { ...todo, completed: true }
      })
    }
    case types.DESTROY_TODO: {
      return state.filter(todo => todo.id !== action.payload.id)
    }
    default:
      return state
  }
}

export default todosReducer
