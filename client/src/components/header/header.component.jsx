import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { signOutStart } from '../../redux/user/user.actions';

//import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink as='div'>{                
                currentUser ? 'Welcome ' + currentUser.displayName : ''
            }</OptionLink>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {
                currentUser ? (
                <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                ) : (
                <OptionLink to='/signin'>SIGN IN</OptionLink>
                )
            }
        
        <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
        
    </HeaderContainer>
);

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStatetoProps,mapDispatchToProps)(Header);