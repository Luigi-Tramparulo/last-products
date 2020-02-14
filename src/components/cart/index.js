import React from 'react';
import { Table } from 'reactstrap';
import './cart.scss'

const Cart = (props) => {
    return (
      <div>
        <Table className="table-cart">
            <thead>
                <tr>
                    <th>SKU</th>
                    <th>Size</th>
                    <th>Qty</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>150</td>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>150</td>
                </tr>
                <tr>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>150</td>
                </tr>
            </tbody>
        </Table>
        <div className="total-cart">
          <p>Total piecies:</p>
          <p>Total price:</p>
        </div>
      </div>
    );
}

export default Cart;
