import React from 'react'
import { expect, shallow, sinon } from '../test-helper'
import ClearCompletedButton from '../../src/components/ClearCompletedButton'

describe('ClearCompletedButton', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      onClearCompleted: sinon.spy(),
    }
    wrapper = shallow(<ClearCompletedButton {...props} />)
  })

  it('should render correct structure', () => {
    expect(wrapper).to.have.tagName('button')
    expect(wrapper).to.have.className('clear-completed')
  })

  it('should call onClearCompleted on click', () => {
    wrapper.simulate('click')
    expect(props.onClearCompleted).to.have.been.called
  })
})
