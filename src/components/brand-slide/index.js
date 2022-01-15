import React from "react";
import { BrandSlideWrapper } from "./style";

const BrandSlide = ({ data }) => {
  // destructure data
  const { image, altImage } = data;

  return (
    <BrandSlideWrapper>
      <img src={`https://api.didebansanat.com/media/${image}`} alt={altImage} />
    </BrandSlideWrapper>
  );
};

export default BrandSlide;
