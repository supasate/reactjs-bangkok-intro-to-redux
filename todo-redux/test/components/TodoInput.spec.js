import React from 'react'
import { expect, shallow, sinon } from '../test-helper'
import TodoInput from '../../src/components/TodoInput'

describe('TodoInput', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      text: '',
      newTodo: false,
      placeholder: 'What needs to be done?',
      onChange: sinon.spy(),
      onEnter: sinon.spy(),
    }
    wrapper = shallow(<TodoInput {...props} />)
  })

  it('should have a correct tag', () => {
    expect(wrapper).to.have.tagName('input')
  })

  it('should have a correct class', () => {
    expect(wrapper).to.have.className('todo-input')
    expect(wrapper).to.not.have.className('new-todo')
  })

  it('should have new-todo class for newTodo input', () => {
    props.newTodo = true
    wrapper.setProps(props)

    expect(wrapper).to.have.className('todo-input')
    expect(wrapper).to.have.className('new-todo')
  })

  it('should have placeholder text', () => {
    expect(wrapper).to.have.attr('placeholder', 'What needs to be done?')
  })

  it('should display text from props', () => {
    expect(wrapper).to.have.value('')

    props.text = 'My new task'
    wrapper.setProps(props)

    expect(wrapper).to.have.value('My new task')
  })

  it('should call props.onChange on change event', () => {
    wrapper.simulate('change', { target: { value: 'My new task' } })

    expect(props.onChange).to.have.been.calledWith('My new task')
  })

  it('should not call props.onAddTodo when hitting enter on existing Todo', () => {
    const ENTER_KEY = 13

    props.text = 'My new task'
    props.newTodo = false
    wrapper.setProps(props)
    expect(wrapper).to.have.value('My new task')

    wrapper.simulate('keyDown', { which: ENTER_KEY, target: { value: 'My new task' } })
    expect(props.onEnter).to.have.been.calledWith('My new task')
    expect(props.onChange).to.not.have.been.called
  })

  it('should call props.onAddTodo when hitting enter on new Todo', () => {
    const ENTER_KEY = 13

    props.text = 'My new task'
    props.newTodo = true
    wrapper.setProps(props)
    expect(wrapper).to.have.value('My new task')

    wrapper.simulate('keyDown', { which: ENTER_KEY, target: { value: 'My new task' } })
    expect(props.onEnter).to.have.been.calledWith('My new task')
    expect(props.onChange).to.have.been.calledWith('')
  })
})
