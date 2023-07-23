import React from "react";
import MarketPlaceNavBar, {
  SecondNavBar,
} from "../marketplace/MarketPlaceNavBar";
import CatLeftContainer from "./CatLeftContainer";
import CatRightContainer from "./CatRightContainer";
import MPCashToken from "../marketplace/MPCashToken";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div className="bg-siteBG">
      <div className="h-[56px] bg-[#A67A0F]"></div>
      <MarketPlaceNavBar />
      <SecondNavBar />
      <div className="px-3 804xl:px-16 pt-8 pb-16 flex-col 804xl:flex-row flex gap-4">
        {/* <div className="px-16 pt-8 pb-16 flex gap-4"> */}
        <CatLeftContainer />
        <CatRightContainer />
      </div>
      <div className="px-0 804xl:px-16 pb-16">
        <MPCashToken leftText="Recently viewed" />
        <MPCashToken leftText="Recommended for You" />
      </div>
      <Footer/>
    </div>
  );
}
