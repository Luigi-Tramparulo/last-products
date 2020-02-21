import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../redux/actions'
import Footer from '../footer'
import { Button } from 'reactstrap';
import './ordercomplete.scss'

const OrderComplete = (props) => {
  const {reset} =props
  return (
    <div className="order-complete">
      <h1>Thank you!</h1>
      <h2>Your{` ${props.productStore.length}`} products will be shipped soon</h2>
      <Button className="button-buy" onClick={() => reset()}>By More</Button>
      <Footer reset={props.reset} textButton={`Buy more`} path="/" />
    </div>
  )
}

//il componente buttons ha problemi con l'azione dispatch reset

const mapDispatchToProps = dispatch => {
  return {
    reset: () => dispatch(actions('RESET')),
  }
}

const mapStateToProps = (state) => {
  return {
    productStore: state.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderComplete)
