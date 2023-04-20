import React from "react";
import {
  NavContainer,
  NavImage,
  NavItem,
  NavLeft,
  NavLink,
  NavList,
  NavRight,
} from "./StyledNav";
import { routes } from "../../utils/routes";
import img_kacper from "../../assets/profile/foto_KP.jpeg";

const Navigation = () => {
  return (
    <NavContainer>
      <NavLeft>
        <NavImage src={img_kacper} alt="Profile Image" />
      </NavLeft>
      <NavRight>
        <NavList>
          <NavItem>
            <NavLink to={routes.home}>Doświadczenie</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={routes.portfolio}>Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={routes.about}>Contact</NavLink>
          </NavItem>
        </NavList>
      </NavRight>
    </NavContainer>
  );
};

export default Navigation;
