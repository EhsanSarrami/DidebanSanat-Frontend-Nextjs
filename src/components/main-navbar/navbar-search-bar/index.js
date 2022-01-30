import React from "react";
import {
  NavbarSearchBarContainer,
  NavbarSearchBarWrapper,
  NavbarSearchBarHeader,
} from "./style";
import { FaTimes } from "react-icons/fa";
import SearchField from "../../../core-ui/search-field";
import useSearchProduct from "./useSearchProduct";

const NavbarSearchBar = ({ isOpen, setOpen }) => {
  // handle close searchbar
  const handleCloseSearchbar = () => setOpen(false);

  // use search products hook
  const { getInputValue, inputValue } = useSearchProduct();

  return (
    <NavbarSearchBarContainer isOpen={isOpen} onClick={handleCloseSearchbar}>
      <NavbarSearchBarWrapper
        isOpen={isOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <NavbarSearchBarHeader>
          <h2>جستجوی محصولات</h2>
          <button
            className="navbar-searchbar-times"
            onClick={handleCloseSearchbar}
          >
            <FaTimes />
          </button>
        </NavbarSearchBarHeader>

        <SearchField
          mgTop="5em"
          placeholder="براساس دسته بندی و مدل محصولات"
          onChange={getInputValue}
          value={inputValue}
        />
      </NavbarSearchBarWrapper>
    </NavbarSearchBarContainer>
  );
};

export default NavbarSearchBar;
