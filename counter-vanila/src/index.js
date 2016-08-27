import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const add = (value) => {
  return { type: 'ADD', payload: value }
}

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

const store = createStore(reducer)
const connect = (mapStateToProps, mapDispatchToProps) => {
  return (Presentational) => {
    return class extends Component {
      constructor(props) {
        super(props)
        const stateProps = mapStateToProps(store.getState())
        const dispatchProps = mapDispatchToProps(store.dispatch)
        this.state = {
          ...stateProps,
          ...dispatchProps,
        }
      }
      componentWillMount() {
        store.subscribe(() => {
          const stateProps = mapStateToProps(store.getState())
          console.log(stateProps)
          this.setState(stateProps)
        })
      }
      render() {
        return <Presentational {...this.state} />
      }
    }
  }
}

const Counter = (props) => (
  <div>
    <label>{props.counter}</label>
    <button onClick={props.count}>Add</button>
  </div>
)

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)
ReactDOM.render(<CounterContainer />, document.getElementById('root'))
