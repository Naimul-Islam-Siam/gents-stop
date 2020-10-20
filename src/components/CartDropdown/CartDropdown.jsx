import React from 'react';
import './CartDropdown.scss';
import CustomButton from './../CustomButton/CustomButton';
import CartItem from './../CartItem/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from './../../redux/cart/cartSelectors';
import { withRouter } from 'react-router-dom'; // must be after { connect }


const CartDropdown = ({ cartItems, history }) => (
   <div className="cart-dropdown">
      <div className="cart-items">
         {
            cartItems.length > 0 ?
               (cartItems.map(cartItem => (
                  <CartItem key={cartItem.id} item={cartItem} />
               ))
               )
               :
               (<span className="empty-message">Your cart is empty</span>)
         }
      </div>
      <CustomButton onClick={() => history.push('/checkout')} >Go to checkout</CustomButton>
   </div>
);


const mapStateToProps = state => ({
   cartItems: selectCartItems(state) // allows CartDropdown to re-render only when it's required (when state changes are related to cartItems)
});


export default withRouter(connect(mapStateToProps)(CartDropdown));