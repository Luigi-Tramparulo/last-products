import React, { useState } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import CircleLast from '../circleLast'

const ProductCard = (props) => {
  const { product, add, productStore } = props

  //stato per tenere traccia della size selezionata
  const [size, updateSize] = useState(0)

  //funzione per intercettare l'evento della size scelta nelle option
  const handlerSelectChange = e => {
    updateSize(parseInt(e.currentTarget.value))
  }

  /*
  funzione di callback per filtrare i prodotti iniziali con la size scelta
  dall'utente
  */
  const callBackFilter = item => {
    return item.size === size
  }
  /*controlla la quantità disponibile per ogni prodotto, se l'utente non ha
  scelto nulla la size è undefined
  */
  const quantity = size ? product.sizes.find(callBackFilter).quantity : null

  /*
  controlla la quantità disponibile per ogni prodotto nello store di redux,
  il parametro sizeSelected sarà la size scelta per filtrare i prodotti nello
  store di redux
  */
  const storeQuantity = sizeSelected =>
    productStore.filter(item =>
    item.size === sizeSelected && item.id === product.id).length

  /*
  controlla la quantità disponibile per ogni prodotto nello store di redux
  e confronta la quantità totale, se eccede disabilità il pulsante add
  */
  const checkAdd = () => {
    if (storeQuantity(size) >= quantity) {
      return true
    }
  }

  /*
  mappo le size dell'array delle quantità iniziali e restituisco tante
  option quante size sono disponibili, per determinare il numero di pezzi
  disponibili sottraggo alla quantità iniziale la quantità del prodotto
  con quella size nello store di redux riutilizzando la funzione
  storeQuantity ma passando come parametro la size dell'opzione mappata
  */
  const options = product.sizes.map((size, i) => {
    return (
      <option
        key={i}
        value={size.size}>{`${size.size}
        (${(size.quantity) - (storeQuantity(size.size))} pcs)`}
      </option>
    )
  })

  /*
    filtro i prodotti nello store con lo stesso ID e ottengo la lunghezza
    dell'array generato da filter
    Assegno alla variabile initialQuantity la quantità iniziale del prodotto
    sommando anche la quantità delle diverse taglie
    Assegno a totalQuantity la differenza tra la quantità iniziale del
    prodotto e quella nella store di redux, non facendo ulteriori controlli
    perchè per l'utente il bottone è disabilitato quando eccede le quantità
    del prodotto disponibile
  */
  const storeQuantitySameId = productStore.filter(item =>
    item.id === product.id
    ).length;
  let initialQuantity = 0;
  const findInitialQuantity = prod => initialQuantity += prod.quantity;
  product.sizes.forEach(findInitialQuantity)

  let totalQuantity = initialQuantity - storeQuantitySameId;

  /*
  se la quantità del prodotto è inferiore a 4 mostra un testo, se è 1
  aggiunge un componente visivo CircleLast
  */
  const textLastpiece =
  <span
    className="lastpiece">
    Last piece, buy it now!
  </span>
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
    <Card
      className={totalQuantity < 1 ? "not-active" : "active"}>
      {addCircleLast()}
      <CardImg
        heigth="100%"
        width="100%"
        src={`./assets/${product.name.toLowerCase()}.jpeg`}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{`RayBan ${product.name}`}</CardTitle>
        <CardSubtitle>{product.sku}</CardSubtitle>
        <CardText>
          Qty:
          <span
            className={"bolder" + (totalQuantity === 1 ? " color-red" :
            null
            )}
          >
            {` ${totalQuantity} `}
          </span>
          {checkLastPiece(totalQuantity)}
        </CardText>
        <CardText>
          Price:
          <span className="bolder">{` \u20AC${product.price}`}</span>
        </CardText>
        <div className="footer-card">
          <div className="select-form">
            <select
              disabled={totalQuantity < 1}
              onChange={handlerSelectChange}
              value={size}
            >
              <option value="0" >Select size</option>
              {options}
            </select>
          </div>
          <div>
            <Button
              disabled={checkAdd()}
              className="button-style"
              onClick={() => add({ ...product, size })}
            >
              Add
               </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProductCard
