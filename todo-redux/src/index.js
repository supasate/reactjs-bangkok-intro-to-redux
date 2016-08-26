import 'todomvc-app-css/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import TodoApp from './containers/TodoApp'

let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension())

// check if HMR is enabled
if (module.hot) {
  // accept update of dependency
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default

    store.replaceReducer(nextReducer)
  })
}

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
  , document.getElementById('root')
)
