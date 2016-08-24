import React from 'react'
import { expect, shallow, sinon } from '../test-helper'
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
      onClick: sinon.spy(),
      onDestroy: sinon.spy(),
    }
    wrapper = shallow(<TodoItem {...props} />)
  })

  it('should have correct tags and class structure', () => {
    expect(wrapper).to.have.className('todo-item')
    expect(wrapper).to.have.tagName('li')

    const div = wrapper.children()
    expect(div).to.have.tagName('div')
    expect(div).to.have.className('view')

    const label = div.childAt(0)
    expect(label).to.have.tagName('label')

    const button = div.childAt(1)
    expect(button).to.have.tagName('button')
    expect(button).to.have.className('destroy')
  })

  it('should not have a completed class for incomplete item', () => {
    expect(wrapper).to.not.have.className('completed')
  })

  it('should have a completed class for completed item', () => {
    props.todo.completed = true
    wrapper.setProps(props)
    expect(wrapper).to.have.className('completed')
  })

  it('should call onClick when clicking on a todo item', () => {
    wrapper.simulate('click')
    expect(props.onClick).to.have.been.called
  })

  it('should call onDestroy when clicking on a delete mark', () => {
    wrapper.find('.destroy').simulate('click')
    expect(props.onDestroy).to.have.been.calledWith(props.todo.id)
  })
})
