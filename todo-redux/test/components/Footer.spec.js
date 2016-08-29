import React from 'react'
import { expect, shallow } from '../test-helper'
import Footer from '../../src/components/Footer'

describe('Footer', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      numItem: 3,
    }
    wrapper = shallow(<Footer {...props} />)
  })

  it('should render correct structure', () => {
    expect(wrapper).to.have.tagName('footer')
    expect(wrapper).to.have.className('footer')
    expect(wrapper).to.have.descendants('TodoCount')
  })

  it('should pass numItem prop to TodoCount', () => {
    expect(wrapper.find('TodoCount')).to.have.prop('numItem', 3)
  })
})
