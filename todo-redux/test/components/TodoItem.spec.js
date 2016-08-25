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

    const input = div.childAt(0)
    expect(input).to.have.tagName('input')
    expect(input).to.have.className('toggle')

    const label = div.childAt(1)
    expect(label).to.have.tagName('label')

    const button = div.childAt(2)
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

  it('should call onClick when clicking on a toggle checkbox', () => {
    wrapper.find('.toggle').simulate('click')
    expect(props.onClick).to.have.been.called
  })

  it('should call onDestroy when clicking on a delete mark', () => {
    wrapper.find('.destroy').simulate('click')
    expect(props.onDestroy).to.have.been.calledWith(props.todo.id)
  })

  it('should change checked attribute of a toggle checkbox', () => {
    props.todo.completed = true
    wrapper.setProps(props)
    expect(wrapper.find('.toggle')).to.have.attr('checked')

    props.todo.completed = false
    wrapper.setProps(props)
    expect(wrapper.find('.toggle')).to.not.have.attr('checked')
  })
})
