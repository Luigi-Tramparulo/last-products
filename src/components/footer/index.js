import React from 'react'
import ButtonBuy from '../button'
import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
          <ButtonBuy checkout="Checkout" />
        </div>
    )
}

export default Footer
