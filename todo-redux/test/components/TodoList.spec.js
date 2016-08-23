import React from 'react'
import { expect, shallow } from '../test-helper'
import TodoList from '../../src/components/TodoList'
import TodoItem from '../../src/components/TodoItem'

describe('TodoList', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      todos: [
        { id: 1, title: 'Prepare a slide deck', completed: false },
        { id: 2, title: 'Speak at ReactJS Conference', completed: false },
        { id: 3, title: 'Sleep', completed: true },
      ],
    }
    wrapper = shallow(<TodoList {...props} />)
  })

  it('should have a correct element', () => {
    expect(wrapper).to.have.tagName('ul')
  })

  it('should have a correct class', () => {
    expect(wrapper).to.have.className('todo-list')
  })

  it('should render TodoItem from props.todo', () => {
    expect(wrapper).to.have.exactly(3).descendants(TodoItem)
  })
})
