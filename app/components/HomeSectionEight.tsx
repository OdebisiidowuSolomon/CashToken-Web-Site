"use client";

import React from "react";
import { HeaderText, SubHeaderText } from "./HomeGroupOne";
import { IMG } from "./HomeSectionBanner";
import COLORS from "../Constants/COLORS";
import { BsArrowRight } from "react-icons/bs";
import { Button } from "./navbar/NavLinks";

function HomeSectionEight() {
  return (
    <>
      <div className="vs:px-3 sm:px-14 lg:px-28 md:py-24">
        <p className="font-semibold text-base md:text-3xl text-center">
          Read our Articles & News
        </p>
        <p className="my-3 text-sm md:text-lg text-center mt-4 vs:w-[85%] w-[75%] md:w-[60%] m-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut
        </p>
        <div className="flex my-9 flex-col justify-center md:flex-row md:justify-normal gap-4">
          <SectionEightCard />
          <SectionEightCard />
        </div>
      </div>
      <div className="px-0 sm-px-14 lg:px-28 pb-10 md:py-24">
        <TransformLivesCard />
      </div>
    </>
  );
}

export default HomeSectionEight;

const SectionEightCard = () => {
  return (
    <div className="vs:w-[90%] w-[70%] md:w-[350px] border-[2px] border-gray-100 lg:mr-14 rounded-xl vs:m-auto md:m-0">
      <div className=" w-[100%] lg:w-[334px] lg:h-[223px] p-1">
        <IMG
          image="/images/test.jpg"
          customStyle={{ borderRadius: "0.75rem" }}
        />
      </div>
      <div className="p-3">
        <p style={{ color: COLORS.text, fontWeight: "500" }}>Technology</p>
        <p style={{ color: COLORS.Secondarytext, fontSize: 14 }}>
          Monday Jan 20 , 2020
        </p>
        <p
          className="my-4"
          style={{ color: COLORS.Secondarytext, fontSize: 14 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
          pretium placerat ut platea...
        </p>
        <div className="flex items-center">
          <p style={{ color: COLORS.primary, marginRight: 10 }}>Read article</p>
          <BsArrowRight color={COLORS.primary} />
        </div>
      </div>
    </div>
  );
};

export const TransformLivesCard = () => {
  return (
    <div
      className="w-auto rounded-none md:w-[75%] mt-10 bg-red-300 flex flex-col items-center m-auto py-12 px-8 md:px-16 md:rounded-3xl box-content"
      style={{ backgroundColor: COLORS.lightGold }}
    >
      <p className="font-semibold md:text-3xl vs:text-base text-center">
        Transforming Lives and Businesses
      </p>
      <p className="my-3 md:text-lg vs:text-sm text-center">
        Still not sure how to get started with CashToken Rewards?
      </p>
      <Button title="Contact Us" />
    </div>
  );
};
