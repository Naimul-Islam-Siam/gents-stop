import React from 'react';
import './CartDropdown.scss';
import CustomButton from './../CustomButton/CustomButton';
import CartItem from './../CartItem/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from './../../redux/cart/cartSelectors';


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
   cartItems: selectCartItems(state) // allows CartDropdown to re-render only when it's required (when state changes are related to cartItems)
});


export default connect(mapStateToProps)(CartDropdown);