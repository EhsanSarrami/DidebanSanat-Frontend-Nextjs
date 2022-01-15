import React from "react";
import {
  SectionTitleWrapper,
  SectionTitleSubtitle,
  SectionTitleTitle,
  SectionTitleDescription,
} from "./style";

const SectionTitle = ({
  title,
  subTitle,
  descriprion,
  spacTop,
  spacBottom,
}) => {

  return (
    <SectionTitleWrapper
      spacTop={spacTop}
      spacBottom={spacBottom}
      data-aos="zoom-out"
    >
      <SectionTitleSubtitle className="gradiant-text">
        {subTitle}
      </SectionTitleSubtitle>
      <SectionTitleTitle>{title}</SectionTitleTitle>
      {descriprion && (
        <SectionTitleDescription>{descriprion}</SectionTitleDescription>
      )}
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
