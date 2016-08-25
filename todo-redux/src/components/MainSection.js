import React from 'react'
import TodoList from '../containers/TodoList'

const MainSection = (props) => (
  <section className="main">
    <TodoList onDestroy={props.onDestroy} />
  </section>
)

MainSection.propTypes = {
  onDestroy: React.PropTypes.func.isRequired,
}

export default MainSection
