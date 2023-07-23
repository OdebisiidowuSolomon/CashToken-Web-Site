import React from "react";
import { HeaderText, SubHeaderText } from "../components/HomeGroupOne";
import { IMG } from "../components/HomeSectionBanner";
import COLORS from "../Constants/COLORS";

function AboutSecondSection() {
  return (
    <>
      <AboutUsContent />
      <AboutOpportunities />
    </>
  );
}

export default AboutSecondSection;

const AboutUsContent = () => {
  return (
    <div className="vs:px-9 sm:px-14 md:px-28 flex flex-col-reverse md:flex-row py-11 gap-10">
      <div className="flex-[0.5] lg:w-[513px] lg:h-[430px] w-[100%] mt-4">
        {/* <div className="flex-[0.5] w-[100%] h-[430px] mt-10"> */}
        <img src="/images/image-62.png" alt="w" className="m-auto rounded-lg" />
      </div>
      <div className="flex-[0.5]">
        <HeaderText text="About Us" />
        <SubHeaderText text="CashToken Rewards International is the World’s First Universal Cash Reward as-a-Service Company, driven by a major goal to provide valuable reward for customer loyalty. CashToken is the flagship product designed to connect every purchase of goods and services in any country to a guaranteed instant cash reward and an automatic ticket into National Weekly Consumer Draws that offers a chance to win up to $100m." />
        <SubHeaderText text=" CashToken has been successfully launched in Nigeria and is fully operational. It boasts of major clients like MTN Nigeria, Airtel Nigeria, 9mobile Nigeria, Lagos State Government, and Mastercard International amongst others. " />
        <SubHeaderText text="The CashToken Reward International / MasterCard engagement includes the development of a Pan-African marketplace where Mastercard Holders in Africa can buy from a wide range of aggregated merchants and receive CashToken rewards for patronage. " />
        <SubHeaderText text="CashToken Rewards International is leading a new generation of Socially Smart Business Models that connects the strategic interests of businesses across the world directly to the world’s most potent patronage cash reward that leads to sustainable social development. It is designed for unassailable sustainability." />
      </div>
    </div>
  );
};

const AboutOpportunities = () => {
  return (
    <div className="vs:px-5 sm:px-14 md:px-28 flex flex-col md:flex-row py-11 gap-10">
      <div className="flex-[0.5]">
        <HeaderText text="Our UCRaaS Platform offers the following unique opportunities to businesses" />
        <OpportunitiesItem text="Zero entry cost to an end to end Patronage Cash Reward Management System" />
        <OpportunitiesItem text="Optimization of existing loyalty systems" />
        <OpportunitiesItem text="Robust & Sustainable Consumer Engagement" />
        <OpportunitiesItem text="Sustainable Consumer Excitement" />
        <OpportunitiesItem text="Potential for new revenue generation" />
        <OpportunitiesItem text="Marketing support and brand exposure" />
      </div>
      <div className="flex-[0.5] lg:w-auto w-[100%]">
        <img
          src="/images/image-68.png"
          alt="w"
          style={{ borderRadius: "20px" }}
          className="m-auto"
        />
      </div>
    </div>
  );
};

const OpportunitiesItem = ({ text }: { text: string }) => {
  return (
    <div className="flex my-2">
      <div
        className="w-2 h-2 rounded-full mr-2 mt-2 shrink-0"
        style={{ backgroundColor: COLORS.primary }}
      ></div>
      <p className="text-sm lg:text-lg">{text}</p>
    </div>
  );
};
