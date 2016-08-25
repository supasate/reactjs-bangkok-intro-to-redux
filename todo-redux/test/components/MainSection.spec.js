import React from 'react'
import { expect, reduxMount, sinon } from '../test-helper'
import MainSection from '../../src/components/MainSection'

describe('MainSection', () => {
  let wrapper
  let props
  let state

  beforeEach(() => {
    props = {
      onDestroy: sinon.stub(),
      onToggleAllTodos: sinon.stub(),
    }
    state = {
      todos: [],
    }
    wrapper = reduxMount(<MainSection {...props} />, state)
  })

  it('should render correct structure', () => {
    expect(wrapper).to.have.tagName('section')
    expect(wrapper).to.have.className('main')
    expect(wrapper.find('input')).to.be.present()
    expect(wrapper.find('input')).to.have.className('toggle-all')
    expect(wrapper.find('TodoList')).to.present()
  })

  it('should pass onDestroy prop to TodoList', () => {
    expect(wrapper.find('TodoList')).to.have.prop('onDestroy', props.onDestroy)
  })
})
