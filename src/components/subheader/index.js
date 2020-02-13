import React from 'react'
import './subheader.scss'

const SubHeader = (props) => {
  return (
    <div className="subheader">
      <div>{props.titleAvaible}</div>
      <div>{props.productAvaible}</div>
    </div>
  )
}

export default SubHeader
