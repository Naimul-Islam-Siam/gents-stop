import React from 'react';
import { ReactComponent as ShoppingIcon } from './../../assets/cart.svg';
import './CartIcon.scss';
import { connect } from 'react-redux';
import { toggleCart } from './../../redux/cart/cartActions';
import { selectCartItemsCount } from './../../redux/cart/cartSelectors';


const CartIcon = ({ toggleCart, itemCount }) => (
   <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
   </div>
);

const mapDispatchToProps = dispatch => ({
   toggleCart: () => dispatch(toggleCart())
});

const mapStateToProps = state => ({
   itemCount: selectCartItemsCount(state) // allows CartIcon to re-render only when it's required (when state changes are related to itemCount)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);