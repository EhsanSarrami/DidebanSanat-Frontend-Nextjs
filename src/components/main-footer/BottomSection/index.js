import React from "react";
import { BottomSectionWrapper } from "./style";

const BottomSection = () => {
  return (
    <BottomSectionWrapper>
      <h6 className="bottom-section__text">
        تمامی حقوق مادی و معنوی این وبسایت متعلق است به{" "}
        <span className="gradiant-text">شرکت دیده بان صنعت</span>
      </h6>
      <p className="bottom-section__text">
        طراحی و اجرا توسط :{" "}
        <a href="https://softnegar.com/" className="gradiant-text">
          سافت نگار
        </a>
      </p>
    </BottomSectionWrapper>
  );
};

export default BottomSection;
