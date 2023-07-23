import React from "react";
import MarketPlaceNavBar from "../marketplace/MarketPlaceNavBar";
import AcctWishListRight from "./AcctWishListRight";
import AcctLeft from "../user-account-home/AcctLeft";

function page() {
  return (
    <div className="bg-siteBG">
      <MarketPlaceNavBar />
      <div className="px-16 pt-8 pb-16 flex gap-4">
        <AcctLeft />
        <AcctWishListRight />
      </div>
    </div>
  );
}

export default page;
