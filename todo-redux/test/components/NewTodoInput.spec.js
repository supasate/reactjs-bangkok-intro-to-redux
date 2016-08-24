import React from 'react'
import { expect, shallow, sinon } from '../test-helper'
import NewTodoInput from '../../src/components/NewTodoInput'

describe('NewTodoInput', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      text: '',
      placeholder: 'What needs to be done?',
      onChange: sinon.spy(),
      onEnter: sinon.spy(),
    }
    wrapper = shallow(<NewTodoInput {...props} />)
  })

  it('should have a correct tag', () => {
    expect(wrapper).to.have.tagName('input')
  })

  it('should have a correct class', () => {
    expect(wrapper).to.have.className('new-todo-input')
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

  it('should call props.onAddTodo when hitting enter', () => {
    const ENTER_KEY = 13

    props.text = 'My new task'
    wrapper.setProps(props)
    expect(wrapper).to.have.value('My new task')

    wrapper.simulate('keyDown', { which: ENTER_KEY, target: { value: 'My new task' } })
    expect(props.onEnter).to.have.been.calledWith('My new task')
    expect(props.onChange).to.have.been.calledWith('')
  })
})
