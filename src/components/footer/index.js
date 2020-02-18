import React from 'react'
import Buttons from '../button'
import './footer.scss'
import Back from '../back'

const Footer = (props) => {

  const checkBack = () => {
    if(props.textButton === "Checkout") {
    return (
      <Back />
    )
  }}

    return (
        <div className="footer">
          {checkBack()}
          <div className="footer-right">
            {props.productAdded}
            <Buttons path = {props.path} textButton={props.textButton} />
          </div>
        </div>
    )
}

export default Footer
