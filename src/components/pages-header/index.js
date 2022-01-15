import React from "react";
import { PagesHeaderContainer, PagesHeaderWrapper } from "./style";
import StyledLink from "../../core-ui/styled-link";

const PagesHeader = ({ title, locationList, staticBg, DynamicBg }) => {
  return (
    <PagesHeaderContainer
      className="flex-wrapper flex-center"
      staticBg={staticBg}
      dynamicBg={DynamicBg}
    >
      <PagesHeaderWrapper className="wrapper flex-wrapper flex-center">
        <h1 className="pages-header__title gradiant-text" data-aos="fade-up">
          {title}
        </h1>
        <div className="pages-header-diretion-wrapper">
          <ul className="pages-header-diretion__list">
            {locationList.map(({ id, name, link }) => (
              <li key={id} className="diretion-list__item" data-aos="fade-up">
                <StyledLink href={`${link}`} className="diretion-list__link">
                  {name}
                </StyledLink>
              </li>
            ))}
          </ul>
        </div>
      </PagesHeaderWrapper>
    </PagesHeaderContainer>
  );
};

export default PagesHeader;
