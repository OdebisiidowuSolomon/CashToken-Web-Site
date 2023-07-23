/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { CSSProperties, useState } from "react";
import COLORS from "../Constants/COLORS";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Button } from "./navbar/NavLinks";

function HomeGroupOne() {
  return (
    <div className="vs:px-5 sm:px-14 md:px-28 flex flex-col lg:flex-row border-t-[1px] border-t-gray-100 py-11">
      <div className="flex-[0.5]">
        <p className="font-semibold md:text-xl lg:text-2xl vs:text-base">
          A Socially-Smart Business Model Developed to Power Business Growth and
          Customer Engagement
        </p>
        <p style={{ color: COLORS.text }} className="my-3 lg:text-base vs:text-sm">
          The Universal Cash Reward as-a-Service platform is designed to
          increase business revenue, improve customers' satisfaction, and grow
          emotional equity for brands
        </p>
        <div className="vs:m-0 ml-4 block">
          <Item
            title="1. Develop consumer emotional equity"
            content="The CashToken is the most potent patronage reward product that offers  life-changing cash opportunities to its beneficiaries. This creates emotional equity between businesses and customers."
          />
          <Item
            title="2. Generate new revenues from consumer activities"
            content="The CashToken reward system is designed for sustainable customer engagement and increased sales activities for partnering businesses."
          />
          <Item
            title="3. Optimise Consumer Loyalty Investments"
            content="The CashToken System Optimization Program leverages parts or a whole of the existing customer loyalty point systems of businesses to improve customer reward experience and business revenue."
          />
          <Item
            title="4. Zero Cost of Entry"
            content="We provide an instant opportunity for businesses to build a loyalty program for customer reward and engagement at zero cost. Businesses can begin the loyalty reward journey at no cost."
          />
        </div>
        <Button
          title="Get Started"
          customStyle={{ marginLeft: 6, marginTop: 5 }}
        />
      </div>
      <div className="flex-[0.5] h-[500px] w-[544px] vs:w-[80%] vs:mt-4">
        <img
          src="/images/home-group.png"
          alt=""
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    </div>
  );
}

export default HomeGroupOne;

export const Item = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [isExpand, setIsExpand] = useState(false);

  const handlePress = () => {
    console.log(isExpand);

    setIsExpand((p) => !p);
  };

  const stateColor = isExpand ? COLORS.primary : COLORS.black;

  return (
    <div className="mb-3">
      <div className="flex cursor-pointer items-center" onClick={handlePress}>
        <div className="shrink-0">
          {isExpand ? (
            <BiChevronUp size={28} color={stateColor} />
          ) : (
            <BiChevronDown size={28} color={stateColor} />
          )}
        </div>
        <p
          className="ml-3 font-medium text-lg vs:text-sm"
          style={{ color: stateColor }}
        >
          {title}
        </p>
      </div>
      <div
        style={{
          height: isExpand ? "90px" : 0,
          transition: "all ease-in-out 450ms",
        }}
        className="overflow-hidden"
      >
        <p
          className="ml-9 mt-3 text-base vs:text-sm"
          style={{ color: COLORS.text }}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export const HeaderText = ({
  text,
  customStyle,
}: {
  text: string;
  customStyle?: CSSProperties;
}) => {
  return (
    <p
      className="font-semibold md:text-2xl lg:text-3xl vs:text-base"
      style={{ ...customStyle }}
    >
      {text}
    </p>
  );
};

export const SubHeaderText = ({
  text,
  customStyle,
}: {
  text: string;
  customStyle?: CSSProperties;
}) => {
  return (
    <p
      style={{ color: COLORS.Secondarytext, ...customStyle }}
      className="my-3 md:text-lg vs:text-sm"
    >
      {text}
    </p>
  );
};

export const HeaderImage = ({ imgPath }: { imgPath: string }) => {
  return (
    <div className="flex-[0.5] h-[500px] w-[544px] vs:w-[80%] vs:mt-4">
      <img
        src={imgPath}
        alt="img"
        className="w-[100%] h-[100%] object-contain"
      />
    </div>
  );
};
