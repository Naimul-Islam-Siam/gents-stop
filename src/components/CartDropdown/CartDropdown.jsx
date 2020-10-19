import React from 'react';
import './CartDropdown.scss';
import CustomButton from './../CustomButton/CustomButton';
import CartItem from './../CartItem/CartItem';
import { connect } from 'react-redux';


const CartDropdown = ({ cartItems }) => (
   <div className="cart-dropdown">
      <div className="cart-items">
         {
            cartItems.map(cartItem => (
               <CartItem key={cartItem.id} item={cartItem} />
            ))
         }
      </div>
      <CustomButton>Go to checkout</CustomButton>
   </div>
);


const mapStateToProps = state => ({
   cartItems: state.cart.cartItems
});


export default connect(mapStateToProps)(CartDropdown);