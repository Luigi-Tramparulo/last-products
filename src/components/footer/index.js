import React from 'react'
import ButtonBuy from '../button'
import './footer.scss'

const Footer = (props) => {
    return (
        <div className="footer">
          <ButtonBuy goToCart = {props.goToCart}checkout={props.checkout} />
        </div>
    )
}

export default Footer
