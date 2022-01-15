import React from "react";
import {
  NavbarNavWrapper,
  NavbarNavList,
  NavbarTimesBtn,
} from "./style";
import NavbarData from "../../../json/Navbar.json";
import StyledLink from "../../../core-ui/styled-link";
import { FaTimes } from "react-icons/fa";

const NavbarNav = ({ open, setOpen, sticky }) => {
  // handle close nav
  const handleCloseNav = () => setOpen(false);

  return (
    <NavbarNavWrapper open={open} onClick={handleCloseNav}>
      <NavbarNavList
        open={open}
        onClick={(e) => e.stopPropagation()}
        sticky={sticky}
      >
        {NavbarData.map(({ id, title, link }) => (
          <li className="nav-list__item" key={id} onClick={handleCloseNav}>
            <StyledLink className="list-item__link" href={`${link}`}>
              {title}
            </StyledLink>
          </li>
        ))}
        <NavbarTimesBtn onClick={handleCloseNav}>
          <FaTimes />
        </NavbarTimesBtn>
      </NavbarNavList>
    </NavbarNavWrapper>
  );
};

export default NavbarNav;
