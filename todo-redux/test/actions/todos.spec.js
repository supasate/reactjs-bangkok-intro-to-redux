import { expect } from '../test-helper'
import actions from '../../src/actions/todos'
import types from '../../src/actions/types'

describe('Todos Actions', () => {
  it('should create action with type ADD_TODO', () => {
    const action = actions.addTodo(1, 'Prepare a slide deck')
    const expectedAction = {
      type: types.ADD_TODO,
      payload: {
        id: 1,
        title: 'Prepare a slide deck',
      },
    }
    expect(action).to.deep.equal(expectedAction)
  })
})
