import React, { useState } from "react";
import "./Slider.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const data = [
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const previous = () => {
    setSlide(slide === 0 ? 2 : (prev) => prev - 1);
  };
  const next = () => {
    setSlide(slide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="slider">
      <div className="imgContainer" style={{transform:`translateX(-${slide*100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={previous}>
          <ArrowBackIosIcon />
        </div>
        <div className="icon" onClick={next}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;