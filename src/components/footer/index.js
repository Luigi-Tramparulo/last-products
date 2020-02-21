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
      <div className={props.textButton === 'Checkout' ? `footer footer-display-between` : `footer footer-display-end`}>
          {checkBack()}
          <div className="footer-right">
            {props.productAdded}
            <Buttons resetter ={()=>props.reset} checkDisabled={props.disabled} path = {props.path} textButton={props.textButton} />
          </div>
        </div>
    )
}

export default Footer
