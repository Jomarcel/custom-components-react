import React, { useState } from "react";
import { sliderData } from "./SliderData";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    console.log("image data is null");
    return null;
  }
  const nextSlide = () => {
    setCurrentImageIdx(
      currentImageIdx === length - 1 ? 0 : currentImageIdx + 1
    );
  };
  const prevSlide = () => {
    setCurrentImageIdx(
      currentImageIdx === 0 ? length - 1 : currentImageIdx - 1
    );
  };
  console.log("currentImageIdx:", currentImageIdx);
  console.log("length:", length);
  return (
    <div className="slider">
      <FaArrowCircleRight className="slider__RightArrow" onClick={nextSlide} />
      <FaArrowCircleLeft className="slider__LeftArrow" onClick={prevSlide} />
      <div className="image">
        {" "}
        {sliderData.map((slide, idx) => {
          return (
            <div
              className={
                idx === currentImageIdx ? "slider__active" : "slider__slide"
              }
            >
              {/* {console.log(idx)} */}

              {idx === currentImageIdx && (
                <img src={slide.image} alt="travel-image" className="image" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
