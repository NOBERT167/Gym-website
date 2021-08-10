import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  BtnWrapper,
  Btn,
} from "./NavbarStyles";

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">LOGO</NavLogo>
        </NavbarContainer>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/blog">Blog</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/Contact">Contact</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/support">Support</NavLinks>
          </NavItem>
          <BtnWrapper>
            <Btn>Sign up</Btn>
          </BtnWrapper>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
