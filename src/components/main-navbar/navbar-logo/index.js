import { useContext } from "react";
import { AppContext } from "../../../context";
import NavbarLogoWrapper from "./style";
import StyledLink from "../../../core-ui/styled-link";
import Image from "next/image";

const NavbarLogo = ({ sticky }) => {
  // use context
  const { darkTheme } = useContext(AppContext);

  return (
    <NavbarLogoWrapper>
      <StyledLink href="/">
        {!darkTheme ? (
          sticky ? (
            <Image
              src="/image/DidebanLogoDark.png"
              alt="dideban sanat"
              width={147}
              height={50}
            />
          ) : (
            <Image
              src="/image/DidebanLogo.png"
              alt="dideban sanat"
              width={147}
              height={50}
            />
          )
        ) : (
          <Image
            src="/image/DidebanLogo.png"
            alt="dideban sanat"
            width={147}
            height={50}
          />
        )}
      </StyledLink>
    </NavbarLogoWrapper>
  );
};

export default NavbarLogo;
