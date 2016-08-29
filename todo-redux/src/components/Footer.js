import React from 'react'
import TodoCount from './TodoCount'

const Footer = (props) => (
  <footer className="footer">
    <TodoCount numItem={props.numItem} />
  </footer>
)

Footer.propTypes = {
  numItem: React.PropTypes.number.isRequired,
}

export default Footer
