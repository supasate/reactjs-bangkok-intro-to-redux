import React from 'react'
import TodoCount from './TodoCount'
import Filters from './Filters'

const Footer = (props) => (
  <footer className="footer">
    <TodoCount numItem={props.numItem} />
    <Filters selectedFilter={props.filter} onSelectFilter={props.onSelectFilter} />
  </footer>
)

Footer.propTypes = {
  numItem: React.PropTypes.number.isRequired,
  filter: React.PropTypes.string.isRequired,
  onSelectFilter: React.PropTypes.func.isRequired,
}

export default Footer
