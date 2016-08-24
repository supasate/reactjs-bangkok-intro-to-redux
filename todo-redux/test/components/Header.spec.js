import React from 'react'
import { expect, shallow, sinon } from '../test-helper'
import Header from '../../src/components/Header'

describe('Header', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      newTodoText: '',
      onChange: sinon.spy(),
      onEnter: sinon.spy(),
    }
    wrapper = shallow(<Header {...props} />)
  })

  it('should render correct structure', () => {
    expect(wrapper).to.have.tagName('header')
    expect(wrapper).to.have.className('header')
    expect(wrapper).to.have.descendants('h1')
    expect(wrapper).to.have.descendants('TodoInput')
  })
})
