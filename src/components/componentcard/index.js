import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'

const ProductCard = (props) => {
  const {product, increment} =props
  return (
    <Card>
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
}

export default ProductCard
