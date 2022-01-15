import React, { useState, useEffect } from "react";
import { MainNavbarContainer, MainNavbarWrapper } from "./style";
import NavbarNav from "./navbar-nav";
import NavbarLogo from "./navbar-logo";
import NavbarToggler from "./navbar-toggler";
import useDisableScroll from "../../hooks/useDisableScroll";

export const MainNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [sticky, setSticky] = useState(false);

  // make navbar sticky
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) setSticky(true);
      else setSticky(false);
    });
  }, []);

  // disable scroll when navbar open
  useDisableScroll(openNav);

  return (
    <MainNavbarContainer className="container center" sticky={sticky}>
      <MainNavbarWrapper className="wrapper">
        <NavbarToggler setOpenNav={setOpenNav} sticky={sticky} />
        <NavbarNav open={openNav} setOpen={setOpenNav} sticky={sticky} />
        <NavbarLogo sticky={sticky} />
      </MainNavbarWrapper>
    </MainNavbarContainer>
  );
};

export default MainNavbar;
