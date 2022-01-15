import React from "react";
import { MainFooterContainer, MainFooterWrapper } from "./style";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";

const MainFooter = () => {
  return (
    <MainFooterContainer className="flex-wrapper flex-center">
      <MainFooterWrapper className="wrapper flex-wrapper flex-center">
        <TopSection />
        <BottomSection />
      </MainFooterWrapper>
    </MainFooterContainer>
  );
};

export default MainFooter;
