import React, { useState } from 'react'
import { Table } from 'reactstrap'
import { connect } from 'react-redux'
import { products } from '../../costants'
import './cart.scss'
import { add,remove } from '../../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Button from '../button'
import ButtonRemove from '../button-remove'
import ButtonAdd from '../button-add'
import SubHeader from '../subheader'
import Footer from '../footer'

const Cart = (props) => {

  //definiamo uno stato che viene aggiornato quando l'utente vuole ordinare per prezzo o per nome
  const [sort, updateSort] = useState('NAME')

  //funzione di callback che ci restituisce la lunghezza della quanità dei prodotti nello store con stessa id e taglia
  const duplicateProduct = product => {
    return (
      props.productStore.filter(item => {
        return item.id === product.id && item.size === product.size
      }).length
    )
  }
  const fiteredById = (array, id) => {
    return array.filter((obj, index, self) =>
      index === self.findIndex((el) => (
        el[id] === obj[id]
      ))
    )
  }

  //funzione di callback che rimuove i prodotti con stessa size e id
  const removeDuplicates = (array, id, size) => {
    return array.filter((obj, index, self) =>
      index === self.findIndex((el) => (
        el[id] === obj[id] && el[size] === obj[size]
      ))
    )
  }

  //funzioni di callback per ordinare per nome
  const sortByName = (product1, product2) => {
    if (product2.name > product1.name) {
      return -1;
    }
    if (product1.name > product2.name) {
      return 1;
    }
    return 0;
  }
  const reverseSortByName = (product1, product2) => {
    if (product1.name > product2.name) {
      return -1;
    }
    if (product2.name > product1.name) {
      return 1;
    }
    return 0;
  }

  //Arrow icon
  const transformArrow = state => sort === state ? 0 : 180

  //update sort state
  const sortBy = (initialState, reverse) => {
    sort === initialState ? updateSort(reverse) : updateSort(initialState)
  }

  //funzioni di callback per ordinare per prezzo
  const sortByPrice = (product1, product2) => {
    return product1.price - product2.price
  }
  const reverseSortByPrice = (product1, product2) => {
    return product2.price - product1.price
  }

  //array di prodotti dello store filtrati per id e size
  const productFiltered = removeDuplicates(props.productStore, 'id', 'size')

  //array di prodotti dello store filtrati in base all'ordinamento di prezzo o nome
  const productSorted = [...productFiltered].sort(sortByName)
  const reverseSorted = [...productFiltered].sort(reverseSortByName)
  const productSortedPrice = [...productFiltered].sort(sortByPrice)
  const reverseSortedPrice = [...productFiltered].sort(reverseSortByPrice)

  //funzione per rimuovere tutta la quantità dell'ogetto nel carrello e quandi rimouvere l'oggetto dallo store
  const removeItem = (qty, item) => {
    for (let i = 0; i < qty; i++) {
      props.remove(item)
    }
  }

  //funzione di callback da utilizzare nel mapping degli array filtrati, che mostra ogni riga
  const rowRendered = (product, index) => {

    const quantityStore = duplicateProduct(product)
    const quantity = products.find(item => item.id === product.id).sizes.find(size => size.size === product.size).quantity
    return (
      <tr key={index}>
        <td><div className="container-td-name"><div className="td-name">{`RayBan ${product.name}`}</div>
          <span className="color-red" onClick={() => removeItem(quantityStore, product)}>Remove</span></div></td>
        <td>{product.sku}</td>
        <td>{product.size}</td>
        <td>
          <div className="container-qty-col">
            <ButtonRemove
              productStore={product}
              removeItem={() => props.remove(product)} />
            <span>{quantityStore}</span>
            {
              quantityStore < quantity ?
                <ButtonAdd action={() => props.add(product)} /> :
                null
            }
          </div>
        </td>
        <td>{`\u20AC${product.price}`}</td>
      </tr>
    )
  }

  //funzione di mapping in base alla selezione dell'utente, di default verrà mostrato l'ordine con cui l'utente ha aggiunto i prodotti nello store
  const mapProductStore = () => {
    switch (sort) {
      case 'NAME':
        return productSorted.map(rowRendered);
      case 'REVERSENAME':
        return reverseSorted.map(rowRendered);
      case 'PRICE':
        return productSortedPrice.map(rowRendered);
      case 'REVERSEPRICE':
        return reverseSortedPrice.map(rowRendered);
      default:
        return productSorted.map(rowRendered);
    }
  }

  let totalPrice = props.productStore.map(product => product.price).reduce((total, currentPrice) => {
    return total + currentPrice
  }, 0)

  return (

    <div className="cart">
      <SubHeader titleAvaible="CART" productAvaible={`${fiteredById(props.productStore, 'id').length} products added`} />

      {props.productStore.length > 0 ?

      <div className="table-border">
        <h3>Your Cart contains :</h3>
        <Table className="table-cart">
          <thead>
            <tr>
              <th className={sort==='NAME'|| sort==='REVERSENAME' ? 'active':''}>
                Model
                <FontAwesomeIcon
                  rotation={transformArrow('REVERSENAME')}
                  icon={faArrowUp}
                  onClick={(e) => sortBy('NAME', 'REVERSENAME')}
                />
              </th>
              <th>SKU</th>
              <th>Size</th>
              <th>Qty</th>
                <th className={sort === 'PRICE' || sort === 'REVERSEPRICE' ? 'active' : ''}>
                Price
                  <FontAwesomeIcon
                    rotation={transformArrow('REVERSEPRICE')}
                    icon={faArrowUp}
                    onClick={(e) => sortBy('PRICE', 'REVERSEPRICE')}
                  />
                </th>
            </tr>
          </thead>
          <tbody>
            {mapProductStore()}
          </tbody>
        </Table>
      </div>
        : <Button path="/" textButton="Turn back to Store"></Button>
        }
      <div className="total-cart">
        <p>Total piecies: <span className="bolder">{props.productStore.length}</span></p>
        <p>Total price: <span className="bolder">{` \u20AC${totalPrice}`}</span></p>
      </div>
      <Footer
        disabled={props.productStore.length < 1 ? true : false}
        productAdded={`${fiteredById(props.productStore, 'id').length} Product added`}
        path="/orderprocessed"
        textButton="Checkout" />
    </div>

  );
}

const mapDispatchToProps = {
  add,remove
}
const mapStateToProps = (state) => {
  return {
    productStore: state.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
