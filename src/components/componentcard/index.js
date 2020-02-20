import React, { useState } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'

const ProductCard = (props) => {
  const { product, add, productStore } = props
  const options = product.sizes.map((size, i) => {
    return (
      <option key={i} value={size.size}>{`${size.size} (${size.quantity})`}</option>
    )
  })
  const [size, updateSize] = useState(0)

  const handlerSelectChange = e => {
    updateSize(parseInt(e.currentTarget.value))
  }

  const callBackFilter = item => {
    return item.size === size
  }
  const quantity = size ? product.sizes.find(callBackFilter).quantity : null
  const storeQuantity = productStore.filter(item => item.size === size && item.id === product.id).length

  const checkAdd = () => {
    if (storeQuantity >= quantity) {
      return true
    }
  }

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
            <select onChange={handlerSelectChange} value={size}>
              <option value="0" >Select size</option>
              {options}
            </select>
          </div>
          <div>
            <Button disabled={checkAdd()} className="button-style" onClick={() => add({ ...product, size })}>Add</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProductCard
