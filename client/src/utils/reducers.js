import {
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
  } from "./actions";

  const Start = {
    products: [],
    categories: [],
    currentCategory: '',
    cart: [],
    cartOpen: false
  };
  
  export const reducers = (state = Start, response) => {
    switch (response.type) {
      case UPDATE_PRODUCTS:
        return {
          ...state,
          products: [...response.products],
        };
  
      case ADD_TO_CART:
        return {
          ...state,
          cartOpen: true,
          cart: [...state.cart, response.product],
        };
  
      case ADD_MULTIPLE_TO_CART:
        return {
          ...state,
          cart: [...state.cart, ...response.products],
        };
  
      case UPDATE_CART_QUANTITY:
        return {
          ...state,
          cartOpen: true,
          cart: state.cart.map((product) => {
            if (response._id === product._id) {
              product.purchaseQuantity = response.purchaseQuantity;
            }
            return product;
          }),
        };
  
      case REMOVE_FROM_CART:
        let newState = state.cart.filter((product) => {
          return product._id !== response._id;
        });
  
        return {
          ...state,
          cartOpen: newState.length > 0,
          cart: newState,
        };
  
      case UPDATE_CATEGORIES:
        return {
          ...state,
          categories: [...response.categories],
        };
  
      case UPDATE_CURRENT_CATEGORY:
        return {
          ...state,
          currentCategory: response.currentCategory,
        };
  
      default:
        return state;
    }
  };
  
  export default reducers;