import React from 'react'
import { expect, reduxMount, sinon } from '../test-helper'
import FilteredTodoList from '../../src/containers/FilteredTodoList'
import filters from '../../src/constants/filters'

describe('FilteredTodoList', () => {
  let wrapper
  let props
  let state

  beforeEach(() => {
    props = {
      onItemClick: sinon.spy(),
      onDestroy: sinon.spy(),
    }
    state = {
      todos: [
        { id: 1, title: 'Prepare a slide deck', completed: false },
        { id: 2, title: 'Speak at ReactJS Conference', completed: false },
        { id: 3, title: 'Sleep', completed: true },
      ],
      filter: filters.ALL,
    }
  })

  it('should display all todos with ALL filter', () => {
    state.filter = filters.ALL
    wrapper = reduxMount(<FilteredTodoList {...props} />, state)
    expect(wrapper).to.have.exactly(3).descendants('li')
  })

  it('should display only active todos with ACTIVE filter', () => {
    state.filter = filters.ACTIVE
    wrapper = reduxMount(<FilteredTodoList {...props} />, state)
    expect(wrapper).to.have.exactly(2).descendants('li')
  })

  it('should display on completed todos with COMPLETED filter', () => {
    state.filter = filters.COMPLETED
    wrapper = reduxMount(<FilteredTodoList {...props} />, state)
    expect(wrapper).to.have.exactly(1).descendants('li')
  })
})
