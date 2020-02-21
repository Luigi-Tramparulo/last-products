import React,{useState} from 'react'
import { Table } from 'reactstrap'
import { connect } from 'react-redux'
import './cart.scss'
import { actions } from '../../redux/actions'
import ButtonRemove from '../button-remove'
import SubHeader from '../subheader'
import Footer from '../footer'

const Cart = (props) => {

 const [sort, updateSort] = useState('')

  const duplicateProduct = product => {
     return(
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
  const removeDuplicates = (array, id, size) => {
    return array.filter((obj, index, self) =>
      index === self.findIndex((el) => (
        el[id] === obj[id] && el[size] === obj[size]
      ))
    )
  }

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

  const sortByPrice = (product1, product2) => {
    return product1.price - product2.price
  }

  const reverseSortByPrice = (product1, product2) => {
    return product2.price - product1.price
  }



  const productFiltered = removeDuplicates(props.productStore,'id','size')

  const productSorted = [...productFiltered].sort(sortByName)
  const reverseSorted = [...productFiltered].sort(reverseSortByName)
  const productSortedPrice = [...productFiltered].sort(sortByPrice)
  const reverseSortedPrice = [...productFiltered].sort(reverseSortByPrice)

  const rowRendered = (product, index) => {
    return (
      <tr key={index}>
        <td><div className="container-td-name"><div className="td-name">{`RayBan ${product.name}`}</div><ButtonRemove productStore={product} removeItem={props.decrement} /></div></td>
        <td>{product.sku}</td>
        <td>{product.size}</td>
        <td>{duplicateProduct(product)}</td>
        <td>{`\u20AC ${product.price}`}</td>
      </tr>
    )
  }
  // clicked ? productSorted.map(rowRendered) : productFiltered.map(rowRendered)
  const mapProductStore = () =>{
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
      return productFiltered.map(rowRendered);
    }
  }

  let totalPrice = props.productStore.map(product => product.price).reduce((total, currentPrice) => {
    return total + currentPrice
  }, 0)

    return (
    <div className="cart">
        <SubHeader titleAvaible="CART" productAvaible={`${fiteredById(props.productStore, 'id').length} products added`}/>
      <div className="table-border">
        <h3>Your Cart contains :</h3>
        <Table className="table-cart">
            <thead>
                <tr>
              <th>Model <img onClick={(e) => sort === 'NAME' ? updateSort('REVERSENAME'):updateSort('NAME')} src="./assets/sort.png" alt="sort" width="25px" height="25px"></img></th>
                    <th>SKU</th>
                    <th>Size</th>
                    <th>Qty</th>
              <th>Price <img onClick={(e) => sort === 'PRICE' ? updateSort('REVERSEPRICE') : updateSort('PRICE')} src="./assets/sort.png" alt="sort" width="25px" height="25px"></img></th>
                </tr>
            </thead>
            <tbody>
              {mapProductStore()}
            </tbody>
        </Table>
      </div>
        <div className="total-cart">
          <p>Total piecies:<span className="bolder">{props.productStore.length}</span></p>
          <p>Total price:<span className="bolder">{` \u20AC ${totalPrice}`}</span></p>
        </div>
        <Footer productAdded={`${fiteredById(props.productStore, 'id').length} Product added`} path="/orderprocessed" textButton="Checkout"/>
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
