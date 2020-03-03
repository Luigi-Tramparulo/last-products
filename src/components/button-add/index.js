import React from 'react'
import './buttonadd.scss'

const ButtonAdd = ({ action }) => (
  <div onClick={action} className = "button-add" >
    <div className="circle"><span>+</span></div>
  </div>
);

export default ButtonAdd
