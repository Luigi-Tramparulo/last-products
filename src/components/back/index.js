import React from 'react'
import { Link } from 'react-router-dom';

const Back = () => {
  return (
    <div className="back-container">
      <Link to="/">
        <div className="back-cont">
          <img src="./assets/back.png" alt="back"></img>
          <span>back</span>
        </div>
      </Link>
    </div>
  )
}

export default Back
