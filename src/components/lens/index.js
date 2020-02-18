import React from 'react'
import { connect } from 'react-redux'
import ProductCard from '../componentcard'
import './lens.scss'
import { actions } from '../../redux/actions'
import SubHeader from '../subheader'
import Footer from '../footer'


const Lens = (props) => {

  const { product, increment, productStore } = props

  const mapProducts = product.map((product, index) => {
    return (
      <ProductCard key={index} product={product} increment={increment}/>
    )
  })

  return (
      <div className="lens-view">
        <SubHeader titleAvaible="LAST PRODUCT AVAILABLE" productAvaible={`${product.length} product available`} />
        <div className="product-list">
          {mapProducts}
        </div>
        <Footer productAdded={`Product added:${productStore.length}`} path='/checkout' textButton="Go to cart" />
      </div>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    increment: item => dispatch(actions('ADD', item)),
  }
}
const mapStateToProps = (state) => {
  return {
    productStore: state.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lens)
