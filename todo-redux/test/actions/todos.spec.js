import { expect } from '../test-helper'
import actions from '../../src/actions/todos'
import types from '../../src/actions/types'
import filters from '../../src/constants/filters'

describe('Todos Actions', () => {
  it('should create action with type CHANGE_NEW_TODO_TEXT', () => {
    const action = actions.changeNewTodoText('Feed my cat')
    const expectedAction = {
      type: types.CHANGE_NEW_TODO_TEXT,
      payload: {
        text: 'Feed my cat',
      },
    }
    expect(action).to.deep.equal(expectedAction)
  })

  it('should create action with type ADD_TODO', () => {
    const action = actions.addTodo('Prepare a slide deck')
    const expectedAction = {
      type: types.ADD_TODO,
      payload: {
        title: 'Prepare a slide deck',
      },
    }
    expect(action).to.deep.equal(expectedAction)
  })

  it('should create action with type TOGGLE_TODO', () => {
    const action = actions.toggleTodo(1)
    const expectedAction = {
      type: types.TOGGLE_TODO,
      payload: {
        id: 1,
      },
    }
    expect(action).to.deep.equal(expectedAction)
  })

  it('should create action with type TOGGLE_ALL_TODOS', () => {
    const action = actions.toggleAllTodos()
    const expectedAction = {
      type: types.TOGGLE_ALL_TODOS,
    }
    expect(action).to.deep.equal(expectedAction)
  })

  it('should create action with type DESTROY_TODO', () => {
    const action = actions.destroyTodo(1)
    const expectedAction = {
      type: types.DESTROY_TODO,
      payload: {
        id: 1,
      },
    }
    expect(action).to.deep.equal(expectedAction)
  })

  it('should create action with type FILTER_TODO', () => {
    const action = actions.filterTodo(filters.ALL)
    const expectedAction = {
      type: types.FILTER_TODO,
      payload: {
        filter: filters.ALL,
      },
    }
    expect(action).to.deep.equal(expectedAction)
  })
})
