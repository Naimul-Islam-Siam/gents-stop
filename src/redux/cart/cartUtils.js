export const addItemToCart = (cartItems, itemToAdd) => {
   const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

   // if the item is already in cart, increase the quantity by 1
   if (existingCartItem) {
      // map will create a new array
      return cartItems.map(cartItem =>
         cartItem.id === itemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
      );
   }

   // if the item is not in cart yet, add it to cartItems and turn the quantity to 1
   return [...cartItems, { ...itemToAdd, quantity: 1 }];
};