/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { HeaderText, SubHeaderText } from "./HomeGroupOne";
import COLORS from "../Constants/COLORS";
import { Button } from "./navbar/NavLinks";

function HomeSectionSix({ subtitle }: { subtitle?: string }) {
  return (
    // <div className="vs:px-1 sm:px-14 md:px-28 pt-10 mb-10">
    <div className="vs:px-5 sm:px-10 lg:px-28 pt-10 mb-10">
      <HeaderText customStyle={{ textAlign: "center" }} text="Testimonials" />
      <SubHeaderText
        customStyle={{
          textAlign: "center",
          marginTop: 15,
        }}
        text={
          subtitle || `Meet CashToken winners from different parts of the world`
        }
      />
      <TestimonialContainer />
      <TestimonialCards />
      <div style={{ display: "flex", justifyContent: "center", marginTop: 35 }}>
        <Button
          title="See More"
          customStyle={{
            backgroundColor: COLORS.white,
            border: `2px solid ${COLORS.primary}`,
            color: COLORS.primary,
          }}
        />
      </div>
    </div>
  );
}

export default HomeSectionSix;

const TestimonialCards = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-6 justify-center flex-col md:flex-row">
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </div>
  );
};

export const TestimonialCard = ({subtitle}:{subtitle?:string}) => {
  return (
    <div
      className="w-[85%] m-auto md:w-[30%] p-8 shadow-md"
      style={{ backgroundColor: COLORS.cardBackground }}
    >
      <div className="flex items-center">
        <div className="w-[68px] h-[68px] rounded-full">
          <img
            src="/images/Ellipse-173.png"
            className="w-[100%] h-[100%] object-contain"
            alt="image"
          />
        </div>
        <div className="ml-4">
          <p className="text-black lg:text-lg vs:text-sm font-medium">Saheed</p>
          <p className="mt-3 lg:text-sm vs:text-xs">
            {subtitle || 'Tax Officer'}
          </p>
        </div>
      </div>
      <div>
        <p className="mt-5 md:text-base vs:text-sm">
          Who would have thought that a customer reward could change someone’s
          life. I received CashToken from MTN and I won the sum of N2,000,000
          which I was able to access seamlessly. I really commend CashToken
          Africa for this initiative and I appreciate MTN Nigeria for this life
          changing opportunity
        </p>
      </div>
    </div>
  );
};

export const TestimonialContainer = () => {
  const [src, setSrc] = useState("https://www.youtube.com/embed/QnJEhvlilHE");

  const TestimonialVideos = [
    {
      src: "https://www.youtube.com/embed/5Hgqv5sSrHQ",
      img: "/images/testmonial1.png",
    },
    {
      src: "https://www.youtube.com/embed/qRjgL_J-izw",
      img: "/images/testmonial2.png",
    },
    {
      src: "https://www.youtube.com/embed/ST3LdHOFgkM",
      img: "/images/testmonial3.png",
    },
  ];

  return (
    <div>
      <div className="w-[100%] h-[400px] m-auto rounded-xl vs:rounded-none overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
      <div className="mt-10 w-[70%] m-auto justify-center hidden lg:flex">
        {TestimonialVideos.map((item) => (
          <TestimonialSmallVideo
            key={item.src}
            img={item.img}
            selected={src === item.src}
            onPress={() => setSrc(item.src)}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialSmallVideo = ({
  onPress,
  img,
  selected,
}: {
  onPress?: () => void;
  img: string;
  selected: boolean;
}) => {
  return (
    <div
      className="w-[230px] h-[140px] mr-7 hover:scale-110 transition-all cursor-pointer"
      style={{ transform: selected ? "scaleX(1.1) scaleY(1.1)" : "" }}
      onClick={onPress}
    >
      <img src={img} alt="image" className="h-[100%] w-[100%] object-contain" />
    </div>
  );
};
