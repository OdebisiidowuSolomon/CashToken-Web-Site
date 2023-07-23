import React from "react";
import { HeaderText, SubHeaderText } from "../components/HomeGroupOne";
import COLORS from "../Constants/COLORS";
import { TextArrIcon } from "../components/Banner";

function AboutMeetTheTeam() {
  return (
    <div className="vs:px-5 sm:px-14 md:px-28 flex flex-col pt-10">
      <p className="font-semibold md:text-xl lg:text-2xl vs:text-base text-start lg:text-center">
        Meet the Team
      </p>
      <p
        style={{ color: COLORS.text }}
        className="my-3 lg:text-base vs:text-sm text-start lg:text-center"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend
        metus tellus, sed tristique dolor efficitur nec. Nullam viverra ultrices
        porttitor.
      </p>
      <div className="flex my-7 flex-wrap justify-center gap-4">
        <AboutTeamCard />
        <AboutTeamCard />
        <AboutTeamCard />
        <AboutTeamCard />
      </div>
    </div>
  );
}

export default AboutMeetTheTeam;

const AboutTeamCard = () => {
  return (
    <div
      className="w-[276px] rounded-md p-6"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <div className="w-[153px] h-[150px]">
        <img src="/images/image-63.png" alt="image" />
      </div>
      <p className="text-xl pt-4 font-medium" style={{ color: COLORS.text }}>
        Prof. Lai Labode
      </p>
      <p className="text-base py-2 pb-8 text-[#252828]">
        Founder and Executive Chairman
      </p>
      <TextArrIcon linkText="Read bio" customStyle={{ marginLeft: 0 }} />
    </div>
  );
};
