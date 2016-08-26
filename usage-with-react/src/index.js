import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import ParentComponent from './ParentComponent'


const initialState = { num: 0 }
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD': { 
      return {
        ...state,
        num: state.num + action.payload
      }
    }
    default: {
      return state
    } 
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <ParentComponent store={store} />,
  document.getElementById('root')
)