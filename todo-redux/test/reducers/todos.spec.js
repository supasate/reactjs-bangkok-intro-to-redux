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
      const actions = [
        {
          type: types.ADD_TODO,
          payload: {
            title: 'Catch a pokemon',
          },
        },
        {
          type: types.ADD_TODO,
          payload: {
            title: 'Evolve a pokemon',
          },
        },
      ]
      const nextState = actions.reduce(reducer, curState)

      reducer(curState, actions)
      const expectedState = [
        { id: 1, title: 'Prepare a slide deck', completed: false },
        { id: 2, title: 'Speak at ReactJS Conference', completed: false },
        { id: 3, title: 'Sleep', completed: true },
        { id: 4, title: 'Catch a pokemon', completed: false },
        { id: 5, title: 'Evolve a pokemon', completed: false },
      ]

      expect(nextState).to.deep.equal(expectedState)
    })

    it('should not return the same reference of state', () => {
      const action = {
        type: types.ADD_TODO,
        payload: {
          title: 'Catch a pokemon',
        },
      }
      const nextState = reducer(curState, action)

      expect(nextState).to.not.equal(curState)
    })
  })

  describe('toggle', () => {
    it('should toggle complete status', () => {
      const action = {
        type: types.TOGGLE_TODO,
        payload: {
          id: 2,
        },
      }
      const nextState = reducer(curState, action)
      const expectedState = [
        { id: 1, title: 'Prepare a slide deck', completed: false },
        { id: 2, title: 'Speak at ReactJS Conference', completed: true },
        { id: 3, title: 'Sleep', completed: true },
      ]

      expect(nextState).to.deep.equal(expectedState)
    })
  })

  describe('toggleAllTodos', () => {
    it('should complete all todos if at least one todo is incomplete', () => {
      const action = {
        type: types.TOGGLE_ALL_TODOS,
      }
      const nextState = reducer(curState, action)
      const expectedState = [
        { id: 1, title: 'Prepare a slide deck', completed: true },
        { id: 2, title: 'Speak at ReactJS Conference', completed: true },
        { id: 3, title: 'Sleep', completed: true },
      ]
      expect(nextState).to.deep.equal(expectedState)
    })

    it('should reset of all complete status if all todos are completed', () => {
      curState = [
        { id: 1, title: 'Prepare a slide deck', completed: true },
        { id: 2, title: 'Speak at ReactJS Conference', completed: true },
        { id: 3, title: 'Sleep', completed: true },
      ]
      const action = {
        type: types.TOGGLE_ALL_TODOS,
      }
      const nextState = reducer(curState, action)
      const expectedState = [
        { id: 1, title: 'Prepare a slide deck', completed: false },
        { id: 2, title: 'Speak at ReactJS Conference', completed: false },
        { id: 3, title: 'Sleep', completed: false },
      ]
      expect(nextState).to.deep.equal(expectedState)
    })
  })

  describe('destroy', () => {
    it('should destroy selected todo', () => {
      const action = {
        type: types.DESTROY_TODO,
        payload: {
          id: 2,
        },
      }
      const nextState = reducer(curState, action)
      const expectedState = [
        { id: 1, title: 'Prepare a slide deck', completed: false },
        { id: 3, title: 'Sleep', completed: true },
      ]
      expect(nextState).to.deep.equal(expectedState)
    })
  })

  describe('clearCompletedTodos', () => {
    it('should clear all completed todos', () => {
      const action = {
        type: types.CLEAR_COMPLETED_TODOS,
      }
      const nextState = reducer(curState, action)
      const expectedState = [
        { id: 1, title: 'Prepare a slide deck', completed: false },
        { id: 2, title: 'Speak at ReactJS Conference', completed: false },
      ]
      expect(nextState).to.deep.equal(expectedState)
    })
  })
})
