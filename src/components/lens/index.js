import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import './lens.scss'
import { actions } from '../../redux/actions'
import SubHeader from '../subheader'
import Footer from '../footer'
import Cart from '../cart'

const Lens = (props) => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {

    setClicked(clicked => !clicked)
  }

  const { product, increment, decrement, productStore } = props

  const mapProducts = product.map((product, index) => {
    return (

      <Card key={index}>
        <CardImg heigth="100%" width="100%" src={`./assets/${product.name.toLowerCase()}.jpeg`} alt="Card image cap" />
        <CardBody>
          <CardTitle>{`RayBan ${product.name}`}</CardTitle>
          <CardSubtitle>{product.sku}</CardSubtitle>
          <CardText>Qty: <span className="bolder">{`${product.qty}`}</span></CardText>
          <CardText>Price: <span className="bolder">{`${product.price}\u20AC`}</span></CardText>
          <div className="footer-card">
            <div className="select-form">
              <select>
                <option>Size</option>
              </select>
            </div>
            <div>
              <Button className="button-style" onClick={() => increment(product)}>Add</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  })

  const LensView = () => {
    return(
      <div className="lens-view">
        <SubHeader titleAvaible="LAST PRODUCT AVAILABLE" productAvaible={`${product.length} product available`} />
        <div className="product-list">
          {mapProducts}
        </div>
        <Footer goToCart={handleClick} checkout="Checkout" />
      </div>
    )
  }

  return (
    <div>
        { !clicked ? LensView() : <Cart removeItem = {decrement} products={productStore} />}
    </div>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    increment: item => dispatch(actions('ADD', item)),
    decrement: (item,id) => dispatch(actions('REMOVE', item, id))
  }
}
const mapStateToProps = (state) => {
  return {
    productStore: state.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lens)
