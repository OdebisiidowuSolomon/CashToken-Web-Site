/* eslint-disable @next/next/no-img-element */
import React from "react";
import { HeaderText, SubHeaderText } from "../components/HomeGroupOne";
import { BtnLink } from "../components/Banner";
import COLORS from "../Constants/COLORS";

function TestimonialBanner() {
  return (
    <div className="vs:px-5 sm:px-14 md:px-28 flex flex-col lg:flex-row items-center py-20 pl-28 gap-7 bg-[#F8FAFC]">
      <div className="flex-[0.45] mr-10 ">
        <p className="1079xl:text-5xl text-3xl leading-12 font-bold 1079xl:leading-[64px]">
          Everyone is a winner with CashToken
        </p>
        <p
          style={{ color: COLORS.Secondarytext }}
          className="my-3 text-sm md:text-lg w-[80%]"
        >
          We are transforming lives and businesses one CashToken at a time. A
          life changing cash opportunity awaits you, on every CashToken
        </p>
        <BtnLink />
      </div>
      <div className="flex-[0.55] ">
      {/* <div className="w-[90%] md:w-[700px] flex-[0.55]"> */}
        <div>
          <img
            src="/images/rectangle-407.png"
            className="rounded-lg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialBanner;
