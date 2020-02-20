import React from 'react'
import Cart from '../components/cart'
import Header from '../components/header'
import {products} from '../costants'

const Checkout = () => {
  return (
    <div>
        <Header />
        <Cart products={products}/>
    </div>
  )
}

export default Checkout
