import React from 'react'
import { expect, shallow } from '../test-helper'
import TodoItem from '../../src/components/TodoItem'

describe('TodoItem', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      todo: {
        id: 1,
        title: 'Prepare a slide deck',
        completed: false,
      },
    }
    wrapper = shallow(<TodoItem {...props} />)
  })

  it('should have a correct class', () => {
    expect(wrapper).to.have.className('todo-item')
  })

  it('should not have a completed class for incomplete item', () => {
    expect(wrapper).to.not.have.className('completed')
  })

  it('should have a completed class for completed item', () => {
    props.todo.completed = true
    wrapper.setProps(props)
    expect(wrapper).to.have.className('completed')
  })
})
