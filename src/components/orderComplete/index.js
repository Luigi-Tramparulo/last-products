import React from 'react'
import { connect } from 'react-redux'
import { actions, RESET } from '../../redux/actions'
import Footer from '../footer'
import Buttons from '../button';
import './ordercomplete.scss'

//passiamo la funzione dispatch reset al Button e al componente footer che renderizza a sua volta un altro button

const OrderComplete = (props) => {
  const { reset } = props
  return (
    <div className="order-complete">
      <h1>Thank you!</h1>
      <h2>Your{` ${props.productStore.length}`} products will be shipped soon</h2>
      <Buttons path="/" resetter={reset} textButton={'Buy More'}> </Buttons>
      <Footer resetter={reset} textButton={`Buy more`} path="/" />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    reset: () => dispatch(actions(RESET)),
  }
}

const mapStateToProps = (state) => {
  return {
    productStore: state.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderComplete)
