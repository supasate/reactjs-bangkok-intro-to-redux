import { expect } from '../test-helper'
import filterTodoReducer from '../../src/reducers/filterTodo'
import filters from '../../src/constants/filters'
import types from '../../src/actions/types'

describe('filterTodoReducer', () => {
  it('should change to ACTIVE state when receiving ACTIVE filterTodo action', () => {
    const curState = filters.ALL
    const action = {
      type: types.FILTER_TODO,
      payload: filters.ACTIVE,
    }
    const nextState = filterTodoReducer(curState, action)
    const expectedState = filters.ACTIVE

    expect(nextState).to.equal(expectedState)
  })

  it('should change to COMPLETED state when receiving COMPLETED filterTodo action', () => {
    const curState = filters.ALL
    const action = {
      type: types.FILTER_TODO,
      payload: filters.COMPLETED,
    }
    const nextState = filterTodoReducer(curState, action)
    const expectedState = filters.COMPLETED

    expect(nextState).to.equal(expectedState)
  })

  it('should change to ALL state when receiving ALL filterTodo action', () => {
    const curState = filters.ACTIVE
    const action = {
      type: types.FILTER_TODO,
      payload: filters.ALL,
    }
    const nextState = filterTodoReducer(curState, action)
    const expectedState = filters.ALL

    expect(nextState).to.equal(expectedState)
  })
})
