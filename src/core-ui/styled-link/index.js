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
      <StyledLinkWrapper
        href={href}
        scroll={scroll ? scroll : false}
        target={target}
        {...props}
      >
        {children}
      </StyledLinkWrapper>
    );
};

export default StyledLink;
