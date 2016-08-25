import React from 'react'
import TodoList from '../containers/TodoList'

const MainSection = (props) => (
  <section className="main">
    <input className="toggle-all" type="checkbox" onClick={props.onToggleAll} />
    <TodoList onDestroy={props.onDestroy} />
  </section>
)

MainSection.propTypes = {
  onToggleAll: React.PropTypes.func.isRequired,
  onDestroy: React.PropTypes.func.isRequired,
}

export default MainSection
