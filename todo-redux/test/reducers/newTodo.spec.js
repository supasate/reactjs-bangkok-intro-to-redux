import { expect } from '../test-helper'
import types from '../../src/actions/types'
import newTodoReducer from '../../src/reducers/newTodo'

describe('newTodoReducer', () => {
  let curState

  beforeEach(() => {
    curState = ''
  })

  it('should return correct initial state', () => {
    expect(newTodoReducer(undefined, {})).to.equal('')
  })

  it('should change state when receiving changeNewTodoText action', () => {
    const action = {
      type: types.CHANGE_NEW_TODO_TEXT,
      payload: {
        text: 'My next task',
      },
    }
    const nextState = newTodoReducer(curState, action)
    const expectedState = 'My next task'

    expect(nextState).to.equal(expectedState)
  })
})
