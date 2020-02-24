import React from 'react'
import Buttons from '../button'
import './footer.scss'
import Back from '../back'

const Footer = (props) => {

  // cambia la classe in base alla base alla rotta per disporre correttamente gli elementi e aggiungere il pulsante Back
  const checkBack = () => {
    if (props.textButton === "Checkout") {
      return (
        <Back />
      )
    }
  }

  return (
    <div className="container-footer" >
      <div className={props.textButton === 'Checkout' ? `footer footer-display-between` : `footer footer-display-end`}>
        {checkBack()}
        <div className="footer-right">
          {props.productAdded}
          <Buttons resetter={props.resetter} checkDisabled={props.disabled} path={props.path} textButton={props.textButton} />
        </div>
      </div>
    </div>
  )
}

export default Footer
