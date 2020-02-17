const initialState = {
    products: [],
    totalCart : 0
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            let totalPrice = state.products.map(product => product.price).reduce((total, currentPrice) => {
                return total + currentPrice
            }, 0)
            return {...state,products:state.products.concat(action.item),totalCart:state.totalCart + totalPrice} ;

        case 'REMOVE':
            let checkIndex = id => id === action.id;
            let findItem = state.products.findIndex(checkIndex);
            return {...state, products:state.products.splice(findItem,1)};

        default:
            return state;
    }
}

/*
let totalPrice= state.products.map(product => product.price).reduce((total,currentPrice)=>{
    return total + currentPrice
},0)

*/
