import React from 'react'
import ReactDom from 'react-dom'

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const add = (value) => {
  return { type: 'ADD', payload: value }
}
const Counter = (props) => (
  <div>
    <label>{props.counter}</label>
    <button onClick={props.count}>Add</button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    count: () => dispatch(add(1))
  }
}

const reducer = (state = { counter: 0}, action) => {
  if (action.type === 'ADD') {
    return {
      counter: state.counter + action.payload,
    }
  }
  return state
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)
const store = createStore(reducer)

ReactDom.render(<Provider store={store}><CounterContainer /></Provider>, document.getElementById('root'))