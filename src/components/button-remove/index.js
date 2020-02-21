import React from 'react'
import './buttonremove.scss'

const ButtonRemove = (props) => {
  const { productStore } = props
  return (
    <div onClick={(e) => props.removeItem(productStore, productStore.id)} className="button-remove">
      <span>remove</span>
      <div className="circle"><span>-</span></div>
    </div>
  )
}

export default ButtonRemove
