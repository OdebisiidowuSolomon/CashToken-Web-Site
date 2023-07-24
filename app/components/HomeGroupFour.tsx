import React from "react";
import { HeaderImage, HeaderText, SubHeaderText } from "./HomeGroupOne";
import { Button } from "./navbar/NavLinks";
import Link from "next/link";
import COLORS from "../Constants/COLORS";

function HomeGroupFour() {
  return (
    <div className="vs:px-5 sm:px-14 md:px-28 vs:py-10 py-20 flex flex-col-reverse lg:flex-row items-center bg-[url('/images/home-banner2.png')] bg-fixed">
      <HeaderImage imgPath="/images/home-group4.png" />
      <div className="flex-[0.5] ml-0 mb-10 md:ml-20 md:mb-0">
        <HeaderText text="Become a CashToken Strategic Sales (SSP) Partner and Earn Life Time Commissions" />
        <SubHeaderText text="The CashToken Strategic Sales partnership enables individuals and corporates to earn lifetime commissions on deals facilitation for CashToken." />
        <div className="flex items-center">
          <Button title="Get Started" />
          <Link
            className="text-base ml-11 vs:text-sm"
            style={{ color: COLORS.primary }}
            href={"/login"}
          >
            Download the SSP Pack
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeGroupFour;
