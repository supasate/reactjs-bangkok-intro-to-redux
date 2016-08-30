import React from 'react'
import { expect, shallow, sinon } from '../test-helper'
import Footer from '../../src/components/Footer'
import filters from '../../src/constants/filters'

describe('Footer', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      numActiveItem: 3,
      filter: filters.ALL,
      onSelectFilter: sinon.stub(),
      onClearCompleted: sinon.stub(),
    }
    wrapper = shallow(<Footer {...props} />)
  })

  it('should render correct structure', () => {
    expect(wrapper).to.have.tagName('footer')
    expect(wrapper).to.have.className('footer')
    expect(wrapper).to.have.descendants('TodoCount')
    expect(wrapper).to.have.descendants('Filters')
    expect(wrapper).to.have.descendants('ClearCompletedButton')
  })

  it('should pass numActiveItem prop to TodoCount', () => {
    expect(wrapper.find('TodoCount')).to.have.prop('numActiveItem', 3)
  })

  it('should pass selectedFilter to Filters', () => {
    expect(wrapper.find('Filters')).to.have.prop('selectedFilter', props.filter)
  })

  it('should pass onSelectFilter to Filters', () => {
    expect(wrapper.find('Filters')).to.have.prop('onSelectFilter', props.onSelectFilter)
  })

  it('should pass onClearCompleted to ClearCompletedButton', () => {
    expect(wrapper.find('ClearCompletedButton'))
      .to.have.prop('onClearCompleted', props.onClearCompleted)
  })
})
