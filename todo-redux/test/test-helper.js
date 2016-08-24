import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, render, shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import jsdom from 'jsdom'

chai.use(sinonChai)
chai.use(chaiEnzyme())

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

export {
  expect,
  sinon,
  mount,
  render,
  shallow,
}
