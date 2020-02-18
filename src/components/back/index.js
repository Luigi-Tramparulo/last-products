import React from 'react'
import { Link } from 'react-router-dom';

const Back = () => {
  return (
    <div>
      <Link to="/">
        <img src="./assets/back.png" alt="back"></img>
        <span>back</span>
      </Link>
    </div>
  )
}

export default Back
