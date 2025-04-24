import React from "react";

function hexToRgba(hex, alpha = 1) {
  const parsedHex = hex.replace("#", "");
  const bigint = parseInt(parsedHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Card({
  Children,
  className = "",
  shadowColor = "#000000",
  backgroundColor = "#FFD736",
}) {
  const rgbaColor = hexToRgba(shadowColor, 1);
  const shadowStyle = {
    boxShadow: `inset 0.175rem -0.4875rem 0rem 0rem ${rgbaColor}`,
    backgroundColor: backgroundColor,
    // textShadow:
    //   "-2px -2px 0 #005C4C, 2px -2px 0 #005C4C, -2px 2px 0 #005C4C, 2px 2px 0 #005C4C", // using rem units
  };

  return (
    <div
      className={`flex items-center justify-center rounded-[0.4rem]  border-black border-[0.2rem] px-[2vw] py-[2vh]  ${className}`}
      style={shadowStyle}
    >
      {Children}
    </div>
  );
}
