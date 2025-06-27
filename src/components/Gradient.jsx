import React from "react";
import ImageGradient from '../assets/gradient-1.png';
import ImageGradient2 from '../assets/gradient-2.png';

function Gradient() {
  return (
    <div>
      <div className="svg-bg">
        <img src={ImageGradient} alt="" />
      </div>
      <div className="svg-bg2">
        <img src={ImageGradient2} alt="" />
      </div>
    </div>
  );
}

export default Gradient;
