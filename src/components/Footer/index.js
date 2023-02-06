import React from "react";
import { StyledDivFooter } from "./StyledFooter";

const Footer = () => {
  return (
    <StyledDivFooter>
      <p>Copyright &copy; {new Date().getFullYear()} Kacper Piróg</p>
    </StyledDivFooter>
  );
};

export default Footer;
