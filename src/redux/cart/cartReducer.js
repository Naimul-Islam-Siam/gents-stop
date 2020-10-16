import { cartActionTypes } from './cartTypes';

const INITIAL_STATE = {
   cartHidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case cartActionTypes.TOGGLE_CART:
         return {
            ...state,
            cartHidden: !state.cartHidden
         }

      default:
         return state;
   }
};

export default cartReducer;