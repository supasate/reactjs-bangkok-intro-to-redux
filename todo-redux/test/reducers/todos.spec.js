import { expect } from '../test-helper'
import types from '../../src/actions/types'
import reducer from '../../src/reducers/todos'

describe('Todos Reducer', () => {
  let curState

  beforeEach(() => {
    curState = [
      { id: 1, title: 'Prepare a slide deck', completed: false },
      { id: 2, title: 'Speak at ReactJS Conference', completed: false },
      { id: 3, title: 'Sleep', completed: true },
    ]
  })

  it('should return correct initial state', () => {
    const expectedState = []

    expect(reducer(undefined, {})).to.deep.equal(expectedState)
  })

  describe('add', () => {
    it('should add new todo when receiving addTodo action', () => {
      const action = {
        type: types.ADD_TODO,
        payload: {
          id: 4,
          title: 'Catch a pokemon',
        },
      }
      const nextState = reducer(curState, action)
      const expectedState = [
        { id: 1, title: 'Prepare a slide deck', completed: false },
        { id: 2, title: 'Speak at ReactJS Conference', completed: false },
        { id: 3, title: 'Sleep', completed: true },
        { id: 4, title: 'Catch a pokemon', completed: false },
      ]

      expect(nextState).to.deep.equal(expectedState)
    })

    it('should not return the same reference of state', () => {
      const action = {
        type: types.ADD_TODO,
        payload: {
          id: 4,
          title: 'Catch a pokemon',
        },
      }
      const nextState = reducer(curState, action)

      expect(nextState).to.not.equal(curState)
    })
  })
})
