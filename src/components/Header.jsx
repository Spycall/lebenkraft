import React from "react";
import backgroundImg from "../assets/background.jpg";
import Slider from "./Slider";

function Header({ text = "" }) {
  return (
    <div className="relative">
      <Slider />
      {/* Overlay */}
      <div className="w-full h-full absolute top-0 left-0 bg-black/60"></div>

      {/* Text */}
      <p className="absolute top-[3rem] right-[1rem] md:right-[4rem] text-[#BB2E94] text-3xl md:text-6xl max-w-[20rem] font-bold">
        {text}
      </p>
    </div>
  );
}

export default Header;
