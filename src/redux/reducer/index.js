const initialState = {
    products: [],
    totalCart : 0
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            return {...state,products:state.products.concat(action.item)}

        case 'REMOVE':
        const findItem = state.products.findIndex(element => element.id === action.id);
        const copyState = [...state.products]
        let spliceState = copyState.splice(findItem, 1)
            return {...state, products:copyState};

        default:
            return state;
    }
}

/*
let totalPrice= state.products.map(product => product.price).reduce((total,currentPrice)=>{
    return total + currentPrice
},0)

*/
