import React from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/logo.svg';
import { connect } from 'react-redux';
import { selectCurrentUser } from './../../redux/user/userSelectors';
import { selectCartHidden } from './../../redux/cart/cartSelectors';
import { auth } from './../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';


const Header = ({ currentUser, cartHidden }) => (
   <div className="header">
      <Link to="/" className="logo-container">
         <Logo className="logo" />
      </Link>

      <div className="options">
         <Link to="/shop" className="option">
            SHOP
         </Link>
         <Link to="/contact" className="option">
            CONTACT
         </Link>
         {
            currentUser ?
               <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
               :
               <Link className="option" to="/signin">SIGN IN</Link>
         }
         <CartIcon />
      </div>
      {
         cartHidden ? null : (<CartDropdown />)
      }
   </div>
);


const mapStateToProps = state => ({
   currentUser: selectCurrentUser(state),
   cartHidden: selectCartHidden(state)
});


export default connect(mapStateToProps)(Header);