import React from 'react';
import { Link } from 'gatsby';
import { Container } from '../../common/container';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, BrandLogo, Brand } from './styles'
import { Logo } from '../../common/Logo'

const Navbar = () => (
  <Wrapper as={Container}>
    
     <Brand as={Link} to="/">
        <BrandLogo
          as={Logo}
          color={'#212121'}
          strokeWidth="2"
        />
    <Link to="/">@achintan</Link>
    </Brand>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
