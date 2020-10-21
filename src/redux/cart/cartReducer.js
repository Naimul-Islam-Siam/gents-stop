import { cartActionTypes } from './cartTypes';
import { addItemToCart, decreaseItemFromCart } from './cartUtils';

const INITIAL_STATE = {
   cartHidden: true,
   cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case cartActionTypes.TOGGLE_CART:
         return {
            ...state,
            cartHidden: !state.cartHidden
         }

      case cartActionTypes.ADD_ITEM:
         return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)
         }

      case cartActionTypes.REMOVE_ITEM_FROM_CART:
         return {
            ...state,
            cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
         }

      case cartActionTypes.DECREASE_ITEM:
         return {
            ...state,
            cartItems: decreaseItemFromCart(state.cartItems, action.payload)
         }

      default:
         return state;
   }
};

export default cartReducer;