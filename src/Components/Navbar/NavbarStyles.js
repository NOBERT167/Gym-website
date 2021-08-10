import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  //margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 10;
  font-size: 1rem;
  position: sticky;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  height: 80px;
`;
export const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: none;
  margin-left: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: 22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkScroll)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  height: 100%;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
export const BtnWrapper = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Btn = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  padding: 10px 22px;
  font-size: 16px;
  border: none;
  text-decoration: none;
  color: #010606;
  white-space: nowrap;
  outline: none;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.25s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
