import React from 'react'
import { Table } from 'reactstrap'
import './cart.scss'

const Cart = (props) => {

  const mapProductStore = props.products.map(product => {
    return (
      <tr>
        <td>{product.name}<button onClick={(e) => props.removeItem(product,product.id)}>remove</button></td>
        <td>{product.sku}</td>
        <td>{product.size}</td>
        <td>{product.qty}</td>
        <td>{product.price}</td>
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
          <p>Total price:{`${totalPrice}\u20AC`}</p>
        </div>
      </div>
    );
}

export default Cart;
