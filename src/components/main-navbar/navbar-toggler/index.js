import React from "react";
import { NavbarTogglerWrapper } from "./style";

const NavbarToggler = ({ setOpenNav, sticky }) => {
  // handle open nav
  const handleOpenNav = () => setOpenNav(true);

  return (
    <NavbarTogglerWrapper onClick={handleOpenNav} sticky={sticky}>
      <div className="navbar-toggler__line"></div>
      <div className="navbar-toggler__line"></div>
      <div className="navbar-toggler__line"></div>
    </NavbarTogglerWrapper>
  );
};

export default NavbarToggler;
