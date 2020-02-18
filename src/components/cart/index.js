import React from 'react'
import { Table } from 'reactstrap'
import { connect } from 'react-redux'
import './cart.scss'
import { actions } from '../../redux/actions'
import ButtonRemove from '../button-remove'
import Footer from '../footer'

const Cart = (props) => {

  const mapProductStore = props.productStore.map((product,index) => {
    return (
      <tr key ={index}>
        <td>{product.name}<ButtonRemove productStore = {product} removeItem = {props.decrement} /></td>
        <td>{product.sku}</td>
        <td>{product.size}</td>
        <td>{product.qty}</td>
        <td>{`\u20AC ${product.price}`}</td>
      </tr>
    )
  })

  let totalPrice = props.productStore.map(product => product.price).reduce((total, currentPrice) => {
    return total + currentPrice
  }, 0)

    return (
      <div className="cart">
        <Table className="table-cart">
            <thead>
                <tr>
                    <th>Model</th>
                    <th>SKU</th>
                    <th>Size</th>
                    <th>Qty</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
              {mapProductStore}
            </tbody>
        </Table>
        <div className="total-cart">
          <p>Total piecies:{props.productStore.length}</p>
          <p>Total price:{` \u20AC ${totalPrice}`}</p>
        </div>
        <Footer productAdded={`Product added:${props.productStore.length}`} path="/orderprocessed" textButton="Checkout"/>
      </div>
    );
}

const mapDispatchToProps = dispatch => {
  return {
    decrement: (item, id) => dispatch(actions('REMOVE', item, id)),
  }
}
const mapStateToProps = (state) => {
  return {
    productStore: state.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
