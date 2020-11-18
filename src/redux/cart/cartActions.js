import { cartActionTypes } from './cartTypes';

export const toggleCart = () => ({
   type: cartActionTypes.TOGGLE_CART
});

export const addItem = item => ({
   type: cartActionTypes.ADD_ITEM,
   payload: item
});

export const removeItemFromCart = item => ({
   type: cartActionTypes.REMOVE_ITEM_FROM_CART,
   payload: item
});

export const decreaseItem = item => ({
   type: cartActionTypes.DECREASE_ITEM,
   payload: item
});

export const resetCart = () => ({
   type: cartActionTypes.RESET_CART
});