import React from "react";
import Link from "next/link";
import StyledLinkWrapper from "./style";

const StyledLink = ({ href, children, ...props }) => {
  return (
    <Link href={href}>
      <StyledLinkWrapper {...props}>{children}</StyledLinkWrapper>
    </Link>
  );
};

export default StyledLink;
