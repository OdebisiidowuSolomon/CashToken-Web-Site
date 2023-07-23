/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { HeaderText, SubHeaderText } from "./HomeGroupOne";
import COLORS from "../Constants/COLORS";

function HomeSectionFive() {
  return (
    <div className="vs:px-5 sm:px-10 lg:px-28 pt-20">
      <p className="font-semibold text-3xl text-center vs:text-base">
        Why CashToken Reward
      </p>
      <p className="my-3 md:text-lg text-center mt-4 w-[80%] md:w-[60%] m-auto vs:text-sm">
        Loyalty programs have proven to be one of the means to increase customer
        retention and improve sales but the CashToken reward unlocks a new
        level. .
      </p>

      <div className="flex my-10 flex-col md:flex-row">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}

export default HomeSectionFive;

const CardItem = () => {
  return (
    <div className="border-2 border-gray-100 p-6 pb-8 vs:w-[100%] w-[90%] lg:w-[33%] md:mr-7 rounded-tr-[40px] rounded-bl-[40px] shadow-sm hover:shadow-md m-auto mb-5 md:mb-0">
      <div
        className="w-20 h-20 p-3 rounded-2xl"
        style={{ backgroundColor: COLORS.lightGold }}
      >
        <img
          src="/images/search-engine.png"
          alt="image"
          className="w-[100%] h-[100%]"
        />
      </div>
      <p className="my-5 text-base lg:text-lg font-medium">
        Optimization of Existing Loyalty Programs
      </p>
      <div>
        <p className="text-start text-sm lg:text-base">
          The CashToken reward model is designed to complement the existing
          loyalty programs of any business. We help businesses develop a more
          exciting reward program.
        </p>
      </div>
    </div>
  );
};
