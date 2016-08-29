import React from 'react'
import { expect, shallow, sinon } from '../test-helper'
import Filters from '../../src/components/Filters'
import filters from '../../src/constants/filters'

describe('Filters', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      selectedFilter: filters.ALL,
      onSelectFilter: sinon.spy(),
    }
    wrapper = shallow(<Filters {...props} />)
  })

  it('should render correct structure', () => {
    expect(wrapper).to.have.tagName('ul')
    expect(wrapper).to.have.className('filters')
    expect(wrapper).to.have.exactly(3).descendants('li')

    const lis = wrapper.find('li')
    expect(lis.at(0).find('a')).to.present()
    expect(lis.at(0).find('a')).to.have.text('All')
    expect(lis.at(1).find('a')).to.present()
    expect(lis.at(1).find('a')).to.have.text('Active')
    expect(lis.at(2).find('a')).to.present()
    expect(lis.at(2).find('a')).to.have.text('Completed')
  })

  it('should have a selected class on selected filter', () => {
    props.selectedFilter = filters.ALL
    wrapper.setProps(props)
    expect(wrapper.find('li').at(0).find('a')).to.have.className('selected')

    props.selectedFilter = filters.ACTIVE
    wrapper.setProps(props)
    expect(wrapper.find('li').at(1).find('a')).to.have.className('selected')

    props.selectedFilter = filters.COMPLETED
    wrapper.setProps(props)
    expect(wrapper.find('li').at(2).find('a')).to.have.className('selected')
  })

  it('should call onSelectFilter with a selected filter', () => {
    const lis = wrapper.find('li')
    lis.at(0).find('a').simulate('click')
    expect(props.onSelectFilter).have.been.calledWith(filters.ALL)

    lis.at(1).find('a').simulate('click')
    expect(props.onSelectFilter).have.been.calledWith(filters.ACTIVE)

    lis.at(2).find('a').simulate('click')
    expect(props.onSelectFilter).have.been.calledWith(filters.COMPLETED)
  })
})
