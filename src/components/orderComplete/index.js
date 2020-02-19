import React from 'react'
import Button from '../button'
import Footer from '../footer'
import './ordercomplete.scss'

const OrderComplete = () => {
  return (
    <div className="order-complete">
      <h1>Thank you!</h1>
      <h2>Your{`3`} products will be shipped soon</h2>
      <Button path ="/" textButton={`Buy more`} />
      <Footer textButton={`Buy more`} path="/" />
    </div>
  )
}

export default OrderComplete
