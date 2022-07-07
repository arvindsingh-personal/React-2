import React from 'react'

const DisplayCard = props => {
  return (
    <div className='card'>
      <h6>{props.header}</h6>
      <hr />
      <h5>{props.title}</h5>
      <p>{props.content}</p>
    </div>
  )
}

export default DisplayCard