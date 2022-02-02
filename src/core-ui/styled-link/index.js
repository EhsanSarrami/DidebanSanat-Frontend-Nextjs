import React from "react";
import Link from "next/link";
import StyledLinkWrapper from "./style";

const StyledLink = ({ href, children, scroll, isAnchor, target, ...props }) => {
  if (!isAnchor)
    return (
      <Link href={href} scroll={scroll ? scroll : false}>
        <StyledLinkWrapper {...props}>{children}</StyledLinkWrapper>
      </Link>
    );
  else
    return (
      <a href={href} scroll={scroll ? scroll : false} target={target}>
        <StyledLinkWrapper {...props}>{children}</StyledLinkWrapper>
      </a>
    );
};

export default StyledLink;
