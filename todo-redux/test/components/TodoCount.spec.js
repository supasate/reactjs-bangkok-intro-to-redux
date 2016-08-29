import React from 'react'
import { expect, shallow } from '../test-helper'
import TodoCount from '../../src/components/TodoCount'

describe('TodoCount', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      numItem: 3,
    }
    wrapper = shallow(<TodoCount {...props} />)
  })

  it('should render correct structure', () => {
    expect(wrapper).to.have.tagName('span')
    expect(wrapper).to.have.className('todo-count')
    expect(wrapper.childAt(0)).to.have.tagName('strong')
    expect(wrapper.childAt(1)).to.have.tagName('span')
    expect(wrapper.childAt(2)).to.have.tagName('span')
    expect(wrapper.childAt(3)).to.have.tagName('span')
  })

  it('should display correct number of items left', () => {
    expect(wrapper).to.have.text('3 items left')
  })

  it('should display unit in singular term', () => {
    props.numItem = 1
    wrapper.setProps(props)
    expect(wrapper).to.have.text('1 item left')
  })

  it('should display no item left if numItem is zero', () => {
    props.numItem = 0
    wrapper.setProps(props)
    expect(wrapper).to.have.text('No item left')
  })
})
