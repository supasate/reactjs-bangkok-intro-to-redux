import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import { add } from './actions'

export default class ParentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }

    this.add = (number) => {
      this.props.store.dispatch(add(number))
    }
  }
  
  componentWillMount() {
    this.props.store.subscribe(() => {
      const state = this.props.store.getState()
      console.log(state)
      this.setState({
        number: state.num
      })
    })
  }

  render() {
    return <ChildComponent store={this.props.store} number={this.state.number} add={this.add} />
  }
}