import React from 'react'
import './buttonadd.scss'

const ButtonAdd = (props) => {
  const { addItem } = props
  return (
    <div onClick={(e) => addItem()} className="button-add">
      <div className="circle"><span>+</span></div>
    </div>
  )
}

export default ButtonAdd
