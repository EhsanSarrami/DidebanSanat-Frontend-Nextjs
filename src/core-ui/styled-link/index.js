import React from "react";
import Link from "next/link";
import StyledLinkWrapper from "./style";

const StyledLink = ({ href, children, scroll, ...props }) => {
  return (
    <Link href={href} scroll={scroll ? scroll : false}>
      <StyledLinkWrapper {...props}>{children}</StyledLinkWrapper>
    </Link>
  );
};

export default StyledLink;
