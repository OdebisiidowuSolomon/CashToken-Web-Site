import React from "react";
import MarketPlaceNavBar from "../marketplace/MarketPlaceNavBar";
import CartLeftContainer from "./CartLeftContainer";
import CartRightContainer from "./CartRightContainer";
import MPCashToken from "../marketplace/MPCashToken";
import Footer from "../components/Footer";

function page() {
  return (
    <div className="bg-siteBG">
      <div className="h-[56px] bg-[#A67A0F]"></div>
      <MarketPlaceNavBar />
      <div className="px-3 804xl:px-16 pt-8 pb-8 flex-col 804xl:flex-row flex gap-9 justify-center">
        <CartLeftContainer />
        <CartRightContainer />
      </div>
      <div className="px-0 804xl:px-16 pb-16">
        <MPCashToken leftText="Recently viewed" />
        <MPCashToken leftText="Recommended for You" />
      </div>
      <Footer />
    </div>
  );
}

export default page;
