import React from 'react'
// import './Header.scss';
// import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/logo.svg';
import { connect } from 'react-redux';
import { selectCurrentUser } from './../../redux/user/userSelectors';
import { selectCartHidden } from './../../redux/cart/cartSelectors';
import { auth } from './../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

// styled components
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './Header.styles';

const Header = ({ currentUser, cartHidden }) => (
   <HeaderContainer>
      <LogoContainer to="/">
         <Logo className="logo" />
      </LogoContainer>

      <OptionsContainer>
         <OptionLink to="/shop">
            SHOP
         </OptionLink>
         <OptionLink to="/contact">
            CONTACT
         </OptionLink>
         {
            currentUser ?
               (<OptionDiv onClick={() => auth.signOut()}>
                  SIGN OUT
               </OptionDiv>)
               :
               (<OptionLink to="/signin">
                  SIGN IN
               </OptionLink>)
         }
         <CartIcon />
      </OptionsContainer>
      {
         cartHidden ? null : (<CartDropdown />)
      }
   </HeaderContainer>
);


const mapStateToProps = state => ({
   currentUser: selectCurrentUser(state),
   cartHidden: selectCartHidden(state)
});


export default connect(mapStateToProps)(Header);