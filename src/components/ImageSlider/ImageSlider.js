import React, { useState } from "react";
import { sliderData } from "./SliderData";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    console.log("image data is null");
    return null;
  }
  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };
  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };
  console.log("currentImage:", currentImage);
  console.log("length:", length);
  return (
    <div className="slider">
      <FaArrowCircleRight className="slider__RightArrow" onClick={nextSlide} />
      <FaArrowCircleLeft className="slider__LeftArrow" onClick={prevSlide} />

      {sliderData.map((slide, idx) => {
        return <img src={slide.image} alt="travel-image" />;
      })}
    </div>
  );
};

export default ImageSlider;
