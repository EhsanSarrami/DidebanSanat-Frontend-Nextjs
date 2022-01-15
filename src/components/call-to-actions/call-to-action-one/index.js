import React from "react";
import { CallToActionOneContainer, CallToActionOneWrapper } from "./style";
import StyledLink from "../../../core-ui/styled-link";

const CallToActionOne = ({ data }) => {
  const { image, title, description, btn_link, btn_text, mg_top, mg_bottom } =
    data;

  return (
    <CallToActionOneContainer
      bgImage={image}
      mgTop={mg_top}
      mgBottom={mg_bottom}
      className="flex-wrapper flex-center"
    >
      <CallToActionOneWrapper
        className="wrapper flex-wrapper flex-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h3 className="call-to-action__title">{title}</h3>
        <h6 className="call-to-action__desc">{description}</h6>
        {btn_link && (
          <StyledLink href={btn_link} space="0.5em 2.2em" isBtn>
            {btn_text}
          </StyledLink>
        )}
      </CallToActionOneWrapper>
    </CallToActionOneContainer>
  );
};

export default CallToActionOne;
