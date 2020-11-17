import React from 'react'
// import './Header.scss';
// import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/logo.svg';
import { connect } from 'react-redux';
import { selectCurrentUser } from './../../redux/user/userSelectors';
import { selectCartHidden } from './../../redux/cart/cartSelectors';
import { signOutStart } from './../../redux/user/userActions';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

// styled components
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './Header.styles';

const Header = ({ currentUser, cartHidden, signOutStart }) => (
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
               (<OptionDiv onClick={signOutStart}>
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

const mapDispatchToProps = dispatch => ({
   signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);