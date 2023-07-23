/* eslint-disable @next/next/no-img-element */
import React, { CSSProperties } from "react";

function HomeSectionBanner() {
  return (
    <div className="">
      <IMG image="/images/Art-board-1.png" />
    </div>
  );
}

export default HomeSectionBanner;

export const IMG = ({
  image,
  customStyle,
}: {
  image: string;
  customStyle?: CSSProperties;
}) => {
  return (
    <img
      src={image}
      className="w-[100%] h-[100%] object-contain"
      alt={image.split("/")[2]}
      style={{...customStyle}}
    />
  );
};
