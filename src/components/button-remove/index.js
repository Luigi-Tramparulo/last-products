import React from 'react'
import './buttonremove.scss'

const ButtonRemove = (props) => {
  const { removeItem } = props
  return (
    <div onClick={(e) => removeItem()} className="button-remove">
      <div className="circle"><span>-</span></div>
    </div>
  )
}

export default ButtonRemove
