import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, render, shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import jsdom from 'jsdom'
import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

chai.use(sinonChai)
chai.use(chaiEnzyme())

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

const reduxMount = (component, state) => { // eslint-disable-line
  const mockStore = configureMockStore()
  const store = mockStore(state)

  return mount(
    <Provider store={store}>
      {component}
    </Provider>
  )
}

export {
  expect,
  sinon,
  mount,
  render,
  shallow,
  reduxMount,
}
