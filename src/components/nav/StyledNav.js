import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;

export const NavImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-right: 1rem;
`;

export const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
`;
