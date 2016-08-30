import React from 'react'
import TodoCount from './TodoCount'
import Filters from './Filters'
import ClearCompletedButton from './ClearCompletedButton'

const Footer = (props) => {
  const clearButton = props.numCompletedItem > 0 ?
    <ClearCompletedButton onClearCompleted={props.onClearCompleted} /> : ''

  return (
    <footer className="footer">
      <TodoCount numActiveItem={props.numActiveItem} />
      <Filters selectedFilter={props.filter} onSelectFilter={props.onSelectFilter} />
      {clearButton}
    </footer>
  )
}

Footer.propTypes = {
  numActiveItem: React.PropTypes.number.isRequired,
  numCompletedItem: React.PropTypes.number.isRequired,
  filter: React.PropTypes.string.isRequired,
  onSelectFilter: React.PropTypes.func.isRequired,
  onClearCompleted: React.PropTypes.func.isRequired,
}

export default Footer
