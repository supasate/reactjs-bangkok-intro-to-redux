import types from '../actions/types'

const initialState = ''

const newTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_NEW_TODO_TEXT: {
      return action.payload.text
    }
    default: {
      return state
    }
  }
}

export default newTodoReducer
