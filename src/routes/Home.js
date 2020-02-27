import React from 'react'
import Lens from '../components/lens'
import { products } from '../costants'
import Header from '../components/header'

const Home = () => {
  return (
    <>
      <Header />
      <Lens products={products} />
    </>
  )
}

export default Home
