import React from 'react'
import Lens from '../components/lens'
import { products } from '../costants'
import Header from '../components/header'

const Home = () => {
  return (
    <div>
        <Header />
        <Lens product={products} />
    </div>
  )
}

export default Home
