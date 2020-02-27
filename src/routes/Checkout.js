import React from 'react'
import Cart from '../components/cart'
import Header from '../components/header'
import { products } from '../costants'

const Checkout = () => {
  return (
    <>
      <Header />
      <Cart products={products} />
    </>
  )
}

export default Checkout
