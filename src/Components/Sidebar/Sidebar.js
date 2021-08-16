import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  BtnWrapper,
} from "./SidebarStyles";
import { Btn } from "../Globalstyles/GlobalStyles.js";

function Sidebar({ toggle, isOpen }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="trainers" onClick={toggle}>
            Trainers
          </SidebarLink>
          <SidebarLink to="benefits" onClick={toggle}>
            Benefits
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Sign up
          </SidebarLink>
          <BtnWrapper>
            <Btn to="/signin" onClick={toggle}>
              Sign in
            </Btn>
          </BtnWrapper>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
