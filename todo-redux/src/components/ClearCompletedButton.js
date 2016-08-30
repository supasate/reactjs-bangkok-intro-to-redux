import React from 'react'

const ClearCompletedButton = (props) => (
  <button
    className="clear-completed"
    onClick={() => props.onClearCompleted()}
  >
    Clear completed
  </button>
)

ClearCompletedButton.propTypes = {
  onClearCompleted: React.PropTypes.func.isRequired,
}

export default ClearCompletedButton
