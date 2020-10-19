import { cartActionTypes } from './cartTypes';
import { addItemToCart } from './cartUtils';

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

      default:
         return state;
   }
};

export default cartReducer;