import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  BtnWrapper,
} from "./NavbarStyles";
import { Btn2 } from "../Globalstyles/GlobalStyles";
import { BiAnalyse } from "react-icons/bi";

function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={toggleHome} to="/">
            {" "}
            <BiAnalyse /> FITNESS ZONE
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                exact="true"
                spy="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="trainers"
                smooth={true}
                duration={500}
                exact="true"
                spy="true"
                offset={-80}
              >
                Trainers
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="benefits"
                smooth={true}
                duration={500}
                exact="true"
                spy="true"
                offset={-80}
              >
                Benefits
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                exact="true"
                spy="true"
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={500}
                exact="true"
                spy="true"
                offset={-80}
              >
                Sign up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <BtnWrapper>
            <Btn2 to={{ pathname: "/signin" }}>Sign in</Btn2>
          </BtnWrapper>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
