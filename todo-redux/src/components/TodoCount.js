import React from 'react'

const TodoCount = (props) => {
  const numItem = props.numItem > 0 ? props.numItem : 'No'
  const unit = props.numItem > 1 ? 'items' : 'item'

  return (
    <span className="todo-count">
      <strong>{numItem}</strong>
      <span>&nbsp;</span>
      <span>{unit}</span>
      <span> left</span>
    </span>
  )
}

TodoCount.propTypes = {
  numItem: React.PropTypes.number.isRequired,
}

export default TodoCount
