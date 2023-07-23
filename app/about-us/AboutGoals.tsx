'use client'

import React from "react";
import COLORS from "../Constants/COLORS";
import { SubHeaderText } from "../components/HomeGroupOne";

function AboutGoals() {
  return (
    <div className="vs:px-9 sm:px-14 md:px-28 flex flex-col justify-center md:flex-row my-10 pt-3 lg:pt-20 gap-6">
      <AboutCardItem />
      <AboutCardItem />
      <AboutCardItem />
    </div>
  );
}

export default AboutGoals;

const AboutCardItem = () => {
  return (
    <div className="border-2 border-gray-100 p-6 pb-8 w-[100%] md:w-[33%] rounded-xl shadow-sm">
      <div
        className="w-20 h-20 p-3 rounded-2xl"
        style={{ backgroundColor: COLORS.lightGold }}
      >
        <img
          src="/images/mission-1.png"
          alt="image"
          className="w-[100%] h-[100%]"
        />
      </div>
      <p className="my-5 font-semibold">Our Mission</p>
      <div>
        <SubHeaderText text="To Be The Foremost Life-Changing Reward Company in Africa." />
      </div>
    </div>
  );
};
