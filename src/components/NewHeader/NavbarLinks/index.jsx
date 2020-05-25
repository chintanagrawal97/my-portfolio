import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}> About </Link>
    <Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}> Blog </Link>
    <Link to="/projects" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}> Projects </Link>
    <Link to="/workExperience" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}> Work Experience </Link>
    <Link to="/contactPage" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}> Contact </Link>
    
  </Wrapper>
);

export default NavbarLinks;
