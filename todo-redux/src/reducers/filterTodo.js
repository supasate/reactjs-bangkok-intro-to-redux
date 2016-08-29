import types from '../actions/types'
import filters from '../constants/filters'

const initialState = filters.ALL

const filterTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_TODO: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default filterTodoReducer
