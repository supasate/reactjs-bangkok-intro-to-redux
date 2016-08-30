import React from 'react'
import TodoCount from './TodoCount'
import Filters from './Filters'
import ClearCompletedButton from './ClearCompletedButton'

const Footer = (props) => (
  <footer className="footer">
    <TodoCount numActiveItem={props.numActiveItem} />
    <Filters selectedFilter={props.filter} onSelectFilter={props.onSelectFilter} />
    <ClearCompletedButton onClearCompleted={props.onClearCompleted} />
  </footer>
)

Footer.propTypes = {
  numActiveItem: React.PropTypes.number.isRequired,
  filter: React.PropTypes.string.isRequired,
  onSelectFilter: React.PropTypes.func.isRequired,
  onClearCompleted: React.PropTypes.func.isRequired,
}

export default Footer
