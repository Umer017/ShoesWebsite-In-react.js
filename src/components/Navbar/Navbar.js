import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: transparent;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 10px 0;
    margin-top: 20px;
    background-color: #f5f5f5;
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled.li`
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: #333;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;

  &.active {
    background-color: #ddd;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 5px;
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer>
      <Logo href="/">
        <LogoImage
          src="https://i.pinimg.com/736x/dc/53/50/dc5350243970437d9fff2c8db3a9975b--running-shoes-sermon-series.jpg"
          alt="Logo"
        />
        ShoeStop
      </Logo>
      <NavList isMobileMenuOpen={isMobileMenuOpen}>
        <NavItem>
          <NavLinkStyled to="/" exact activeClassName="active">
            Home
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/products" activeClassName="active">
            Products
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/wishlist" activeClassName="active">
            Wishlist
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/about" activeClassName="active">
            About Us
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/contact" activeClassName="active">
            Contact
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/cart" activeClassName="active">
            Add to Cart
          </NavLinkStyled>
        </NavItem>
      </NavList>
      <BurgerMenu onClick={handleMobileMenuToggle}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </BurgerMenu>
    </NavbarContainer>
  );
};

export default Navbar;
