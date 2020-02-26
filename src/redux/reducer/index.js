import {ADD,RESET,REMOVE} from '../actions'

const initialState = {
  products: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, products: state.products.concat(action.item) };

    case REMOVE:
      const findItem = state.products.findIndex(element => element.id === action.item.id && element.size === action.item.size);
      const copyState = [...state.products]
      copyState.splice(findItem, 1)
      return { ...state, products: copyState };

    case RESET:
      return { ...state, products: [] };

    default:
      return state;
  }
}
