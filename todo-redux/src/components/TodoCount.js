import React from 'react'

const TodoCount = (props) => {
  const numActiveItem = props.numActiveItem > 0 ? props.numActiveItem : 'No'
  const unit = props.numActiveItem > 1 ? 'items' : 'item'

  return (
    <span className="todo-count">
      <strong>{numActiveItem}</strong>
      <span>&nbsp;</span>
      <span>{unit}</span>
      <span> left</span>
    </span>
  )
}

TodoCount.propTypes = {
  numActiveItem: React.PropTypes.number.isRequired,
}

export default TodoCount
