import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './button.scss'

const Buttons = (props) => {
  return (
    <div className="align-center">
      <Link to={props.path}>
        <Button onClick={props.resetter} disabled={props.checkDisabled} className="button-buy">{props.textButton}</Button>
      </Link>
    </div>
  )
}

export default Buttons
