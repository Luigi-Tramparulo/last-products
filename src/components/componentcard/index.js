import React, { useState } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import CircleLast from '../circleLast'

const ProductCard = (props) => {
  const { product, add, productStore } = props
  const options = product.sizes.map((size, i) => {
    return (
      <option key={i} value={size.size}>{`${size.size} (${size.quantity} pcs)`}</option>
    )
  })
  //stato per tenere traccia della size selezionata
  const [size, updateSize] = useState(0)

  //funzione per intercettare l'evento della size scelta nelle option
  const handlerSelectChange = e => {
    updateSize(parseInt(e.currentTarget.value))
  }

  //funzione di callback per filtrare i prodotti iniziali con la size scelta dall'utente
  const callBackFilter = item => {
    return item.size === size
  }
  //controlla la quantità disponibile per ogni prodotto, se l'utente non ha scelto nulla la size è undefined
  const quantity = size ? product.sizes.find(callBackFilter).quantity : null

  //controlla la quantità disponibile per ogni prodotto nello store di redux
  const storeQuantity = productStore.filter(item => item.size === size && item.id === product.id).length

  //controlla la quantità disponibile per ogni prodotto nello store di redux e confronta la quantità totale, se eccede disabilità il pulsante add
  const checkAdd = () => {
    if (storeQuantity >= quantity) {
      return true
    }
  }

  let totalQuantity = 0;
  const findTotalQuantity = prod => totalQuantity = totalQuantity + prod.quantity;
  product.sizes.forEach(findTotalQuantity)

  //se la quantità del prodotto è inferiore a 4 mostra un testo, se è 1 aggiunge un componente visivo CircleLast
  const textLastpiece = <span className="lastpiece">Last piece, buy it now!</span>
  const checkLastPiece = totalqty => {
    if (totalqty <= 3) {
      return textLastpiece
    }
  }
  const addCircleLast = () => {
    if (totalQuantity === 1) {
      return <CircleLast />
    }
  }

  return (
    <Card>
      {addCircleLast()}
      <CardImg heigth="100%" width="100%" src={`./assets/${product.name.toLowerCase()}.jpeg`} alt="Card image cap" />
      <CardBody>
        <CardTitle>{`RayBan ${product.name}`}</CardTitle>
        <CardSubtitle>{product.sku}</CardSubtitle>
        <CardText>Qty: <span className={"bolder"+ (totalQuantity === 1 ? " color-red" : null)}>{`${totalQuantity} `}</span>{checkLastPiece(totalQuantity)}</CardText>
        <CardText>Price: <span className="bolder">{`\u20AC ${product.price}`}</span></CardText>
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
