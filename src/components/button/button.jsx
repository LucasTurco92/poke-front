import React from 'react'
import './button.css'
export const Button = ({ action, value }) => {
  const handleAction = () => {
    action()
  }

  return (<div className='commonButton' onClick={handleAction}>{value}</div>)
}
