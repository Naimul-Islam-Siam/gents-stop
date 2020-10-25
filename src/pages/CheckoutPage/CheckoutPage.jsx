import React from 'react';
import './CheckoutPage.scss';
import { connect } from 'react-redux';
import { selectCartItems } from './../../redux/cart/cartSelectors';
import { selectCartTotalPrice } from './../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from './../../components/StripeButton/StripeButton';


const CheckoutPage = ({ cartItems, total }) => (
   <div className="checkout-page">
      <div className="checkout-header">
         <div className="header-block">
            <span>Product</span>
         </div>

         <div className="header-block">
            <span>Description</span>
         </div>

         <div className="header-block">
            <span>Quantity</span>
         </div>

         <div className="header-block">
            <span>Price</span>
         </div>

         <div className="header-block">
            <span>Remove</span>
         </div>
      </div>

      <div>
         {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
         }
      </div>

      <div className="total">
         <span>Total: ${total}</span>
      </div>

      <div className="test-warning">
         *Please use the following test credit card for payments*
         <br />
         4242 4242 4242 4242 - Exp: 01/20 - CW: 123
      </div>

      <StripeCheckoutButton price={total} />
   </div>
);


const mapStateToProps = state => ({
   cartItems: selectCartItems(state),
   total: selectCartTotalPrice(state)
});


export default connect(mapStateToProps)(CheckoutPage);