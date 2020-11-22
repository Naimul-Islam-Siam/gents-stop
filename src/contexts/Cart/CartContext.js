import { createContext } from 'react';

const CartContext = createContext({
   cartHidden: true,
   toggleCart: () => { }
});

export default CartContext;