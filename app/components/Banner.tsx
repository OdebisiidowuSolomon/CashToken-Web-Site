"use client";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { CSSProperties } from "react";
import { Button } from "./navbar/NavLinks";
import { BsArrowUpRight } from "react-icons/bs";
import COLORS from "../Constants/COLORS";
import { useRouter } from "next/navigation";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row md:pl-28 p-4 bg-white md:bg-[#fff3d4] bg-[url('/images/image_71.png')] items-start md:items-center h-auto md:h-[70vh]">
      <div className="flex-[0.45]">
        <div>
          <p className="1079xl:text-5xl text-3xl leading-12 font-bold 1079xl:leading-[64px]">
            Universal Cash Reward for Customer Loyalty and Incentives
          </p>
        </div>
        <div className="my-3 w-[70%]">
          <p className="text-sm md:text-lg" style={{ color: COLORS.text }}>
            We make rewarding loyalty easy, sustainable and profitable
          </p>
        </div>
        <div className="flex items-center">
          <BtnLink />
        </div>
      </div>

      <div className="m-3 md:ml-32 w-[90%] md:w-[700px] flex-[0.55]">
        <img src="/images/banner-map-2.png" style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default Banner;

export const BtnLink = ({ linkText }: { linkText?: string }) => {
  return (
    <div className="flex items-center">
      <Button
        customStyle={{ marginLeft: 0, borderRadius: 0 }}
        title="Get Started"
      />
      <TextArrIcon linkText={linkText} />
    </div>
  );
};

export const TextArrIcon = ({
  linkText,
  customStyle,
}: {
  linkText?: string;
  customStyle?: CSSProperties;
}) => {
  const router = useRouter();

  return (
    <div
      className="flex items-center ml-5 cursor-pointer"
      style={{ ...customStyle }}
      onClick={() => router.push('/marketplace')}
    >
      <p style={{ color: COLORS.primary }}>{linkText || "Go to Marketplace"}</p>
      <BsArrowUpRight color={COLORS.primary} className="m-1" size={15} />
    </div>
  );
};
