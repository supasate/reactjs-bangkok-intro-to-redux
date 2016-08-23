import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, render, shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'

chai.use(sinonChai)
chai.use(chaiEnzyme())

export {
  expect,
  sinon,
  mount,
  render,
  shallow,
}
