import React from 'react'
import FilteredTodoList from '../containers/FilteredTodoList'

const MainSection = (props) => (
  <section className="main">
    <input className="toggle-all" type="checkbox" onClick={props.onToggleAll} />
    <FilteredTodoList onDestroy={props.onDestroy} />
  </section>
)

MainSection.propTypes = {
  onToggleAll: React.PropTypes.func.isRequired,
  onDestroy: React.PropTypes.func.isRequired,
}

export default MainSection
