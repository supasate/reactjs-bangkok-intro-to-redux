import React from 'react'
import { expect, shallow, sinon } from '../test-helper'
import Footer from '../../src/components/Footer'
import filters from '../../src/constants/filters'

describe('Footer', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      numItem: 3,
      filter: filters.ALL,
      onSelectFilter: sinon.stub(),
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

  it('should pass selectedFilter to Filters', () => {
    expect(wrapper.find('Filters')).to.have.prop('selectedFilter', props.filter)
  })

  it('should pass onSelectFilter to Filters', () => {
    expect(wrapper.find('Filters')).to.have.prop('onSelectFilter', props.onSelectFilter)
  })
})
