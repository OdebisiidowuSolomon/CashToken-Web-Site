import React from "react";
import MarketPlaceNavBar from "../marketplace/MarketPlaceNavBar";
import ProdLeftContainer from "./ProdLeftContainer";
import ProdRightContainer from "./ProdRightContainer";
import MPCashToken from "../marketplace/MPCashToken";
import Footer from "../components/Footer";

function page() {
  return (
    <div className="bg-siteBG">
      <div className="h-[56px] bg-[#A67A0F]"></div>
      <MarketPlaceNavBar />
      <div className="flex-col 804xl:flex-row px-3 804xl:px-16 pt-8 pb-8 flex gap-9 justify-center">
        <ProdLeftContainer />
        <ProdRightContainer />
      </div>
      <div className="px-3 804xl:px-16 pb-8">
        <MPCashToken leftText="Recently viewed" />
        <MPCashToken leftText="Customers also Bought" />
      </div>
      <Footer/>
    </div>
  );
}

export default page;
