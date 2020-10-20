// selectors are used to selectively render a component (memoization)
// this works in a way that a component doesn't re-render when change in state is not related to the component
// for example suppose state changes in redux because of update in user, this is not related to the cart component
// without selectors even if the state changes because of a change in user, the cart component will re-render
// this causes performance issues, selectors prevent that allowing re-render of a component only when it's required

import { createSelector } from 'reselect';

const selectCart = state => state.cart; // input selector (doesn't need createSelector) only fetches a portion of the state


// this is an output selector
// the first argument of createSelector will be an array of input selectors
// the second argument will be a function that takes as parameter the value that the input selectors return in the same order of the array 
// the second argument function will return what we want from the output selector

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

// will count the number of products that are added to the cart
export const selectCartItemsCount = createSelector([selectCartItems], cartItems => (
   cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)
));

export const selectCartHidden = createSelector([selectCart], cart => cart.cartHidden);