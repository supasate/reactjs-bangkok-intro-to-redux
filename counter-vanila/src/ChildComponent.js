import React from 'react'

export default (props) => {
  
  return (
    <div>
      <label>{props.number}</label>
      <button onClick={() => props.add(1)}>Add 1</button>
    </div>
  )
}
