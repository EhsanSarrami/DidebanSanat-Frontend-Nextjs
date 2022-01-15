import React from "react";
import { OverlayWrapper } from "./style";

const Overlay = () => {
  return (
    <OverlayWrapper>
      <div className="wrapper" data-aos="fade-up">
        <h1 className="overlay__title">
          شرکت توسعه ارتباطات دیده بان صنعت
        </h1>
        <h2 className="overlay__subtitle">
          نماد امنیت ، آرامش و کنترل
        </h2>
      </div>
    </OverlayWrapper>
  );
};

export default Overlay;
