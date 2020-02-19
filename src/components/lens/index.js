import React from 'react'
import { connect } from 'react-redux'
import ProductCard from '../componentcard'
import './lens.scss'
import { actions } from '../../redux/actions'
import SubHeader from '../subheader'
import Footer from '../footer'


const Lens = (props) => {

  const { products, add, productStore } = props

  const mapProducts = products.map((product, index) => {
    return (
      <ProductCard productStore={productStore} key={index} product={product} add={add}/>
    )
  })

  return (
      <div className="lens-view">
        <SubHeader titleAvaible="LAST PRODUCT AVAILABLE" productAvaible={`${products.length} product available`} />
        <div className="product-list">
          {mapProducts}
        </div>
        <Footer productAdded={`Product added:${productStore.length}`} path='/checkout' textButton="Go to cart" />
      </div>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    add: item => dispatch(actions('ADD', item)),
  }
}
const mapStateToProps = (state) => {
  return {
    productStore: state.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lens)
