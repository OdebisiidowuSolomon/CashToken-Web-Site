import React from "react";
import { HeaderImage, HeaderText, SubHeaderText } from "./HomeGroupOne";
import { Button } from "./navbar/NavLinks";

function HomeGroupThree() {
  return (
    <div className="vs:px-5 sm:px-14 md:px-28 flex flex-col lg:flex-row items-center">
      <div className="flex-[0.5] mr-6 my-12 md:my-0">
        <HeaderText text="Stay Ahead of Competition" />
        <SubHeaderText text="We provide a Global marketplace experience for business growth and increased consumer engagement. Become a CashToken merchant and sell to customers beyond your location." />
        <Button title="Sign up to sell" />
      </div>
      <HeaderImage imgPath="/images/home-group3.png" />
    </div>
  );
}

export default HomeGroupThree;
