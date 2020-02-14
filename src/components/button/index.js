import React from 'react';
import { Button } from 'reactstrap';
import './button.scss'

const ButtonBuy = (props) => {
    return (
        <div>
            <Button className="button-buy">{props.checkout}</Button>
        </div>
    )
}

export default ButtonBuy
