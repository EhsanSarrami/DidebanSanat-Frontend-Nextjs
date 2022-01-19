import React from "react";
import {
  NotFoundWrapper,
  NotFoundOverlay,
} from "../src/components/404NotFound/style";
import StyledLink from "../src/core-ui/styled-link";

const NotFound = () => {
  return (
    <NotFoundWrapper className="flex-wrapper">
      <NotFoundOverlay className="flex-wrapper flex-center">
        <h2>متاسفانه صفحه ای که به دنبال آن بودید وجود ندارد</h2>
        <StyledLink href="/" space="0.7em 2em" isBtn={true}>
          صفحه ی اصلی
        </StyledLink>
      </NotFoundOverlay>
    </NotFoundWrapper>
  );
};

export default NotFound;
