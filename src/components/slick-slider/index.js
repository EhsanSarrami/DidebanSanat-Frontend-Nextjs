import React from "react";
import { SliderContainer } from "./style";
import Slider from "react-slick";
import uuid from "react-uuid";

const SlickSlider = ({ Slide, data, settings, ...rest }) => {
  return (
    <SliderContainer {...rest} className="wrapper">
      <Slider {...settings}>
        {data.map((slide) => (
          <Slide data={slide} key={uuid()} />
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default SlickSlider;
