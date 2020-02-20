import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './button.scss'

const Buttons = (props) => {
    return (
        <div>
          <Link to={props.path}>
            <Button  className="button-buy">{props.textButton}</Button>
          </Link>
        </div>
    )
}

export default Buttons
