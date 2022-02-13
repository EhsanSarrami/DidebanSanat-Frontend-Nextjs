import { useContext } from "react";
import { AppContext } from "../../../context";
import { NavbarLogoWrapper, NavbarBtn } from "./style";
import StyledLink from "../../../core-ui/styled-link";
import Image from "next/image";
import { BsMoon, BsSunFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { setStoreage } from "../../../helper";

const NavbarLogo = ({ sticky, setOpenSearchBar }) => {
  // use context
  const { darkTheme, changeTheme } = useContext(AppContext);

  // handle change theme
  const handleChangeTheme = () => {
    setStoreage("darkTheme", JSON.stringify(!darkTheme));
    changeTheme();
  };

  // handle open searchbar
  const handleOpenSearchbar = () => setOpenSearchBar((prev) => !prev);

  return (
    <NavbarLogoWrapper sticky={sticky}>
      <NavbarBtn sticky={sticky} onClick={handleOpenSearchbar}>
        <GoSearch />
      </NavbarBtn>

      <NavbarBtn sticky={sticky} onClick={handleChangeTheme}>
        {darkTheme ? <BsSunFill /> : <BsMoon />}
      </NavbarBtn>

      <div className="navbar-logo-divider" />

      <StyledLink href="/" className="navbar-logo-img">
        {!darkTheme ? (
          sticky ? (
            <Image
              src="/image/DidebanLogoDark.png"
              alt="dideban sanat"
              width={135}
              height={50}
              priority={true}
            />
          ) : (
            <Image
              src="/image/DidebanLogo.png"
              alt="dideban sanat"
              width={135}
              height={50}
              priority={true}
            />
          )
        ) : (
          <Image
            src="/image/DidebanLogo.png"
            alt="dideban sanat"
            width={135}
            height={50}
            priority={true}
          />
        )}
      </StyledLink>
    </NavbarLogoWrapper>
  );
};

export default NavbarLogo;
