import React from "react";
import { BtnLink } from "../components/Banner";
import COLORS from "../Constants/COLORS";

function AboutBanner() {
  return (
    <div className="flex flex-col mx-5 md:items-center mt-2 bg-no-repeat bg-center bg-[url('/images/large-map-1.png')] h-[70vh]">
      <p className="1079xl:text-5xl text-3xl text-black font-semibold">
        Transforming Lives and Businesses
      </p>
      <p
        className="text-sm w-[55%] 1079xl:w-[35%] md:text-center mt-4 mb-6"
        style={{ color: COLORS.Secondarytext }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend
        metus tellus, sed tristique dolor efficitur nec. Nullam viverra ultrices
        porttitor. Pellentesque condimentum est mauris
      </p>

      <BtnLink linkText="Shop on Marketplace" />
    </div>
  );
}

export default AboutBanner;
