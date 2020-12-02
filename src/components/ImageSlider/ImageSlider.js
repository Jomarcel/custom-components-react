import React, { useState } from "react";
import { sliderData } from "./SliderData";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [currentImage, setCurrentImage] = useState(0);
  //   const length = slides.length;
  //   console.log(slides);
  return (
    <div className="slider">
      <FaArrowCircleRight className="slider__RightArrow" onClick={{}} />
      <FaArrowCircleLeft className="slider__leftArrow" onClick={{}} />

      {sliderData.map((slide, idx) => {
        return <img src={slide.image} alt="travel-image" />;
      })}
    </div>
  );
};

export default ImageSlider;
