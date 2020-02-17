import React from 'react'
import { Table } from 'reactstrap'
import './cart.scss'
import ButtonRemove from '../button-remove'

const Cart = (props) => {

  const mapProductStore = props.products.map((product,index) => {
    return (
      <tr key ={index}>
        <td>{product.name}<ButtonRemove productStore = {product} removeItem = {props.removeItem} /></td>
        <td>{product.sku}</td>
        <td>{product.size}</td>
        <td>{product.qty}</td>
        <td>{`\u20AC ${product.price}`}</td>
      </tr>
    )
  })

  let totalPrice = props.products.map(product => product.price).reduce((total, currentPrice) => {
    return total + currentPrice
  }, 0)

    return (
      <div>
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
          <p>Total piecies:{props.products.length}</p>
          <p>Total price:{` \u20AC ${totalPrice}`}</p>
        </div>
      </div>
    );
}

export default Cart;
