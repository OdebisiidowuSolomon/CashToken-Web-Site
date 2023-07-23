import React from "react";
import MarketPlaceNavBar from "../marketplace/MarketPlaceNavBar";
import AcctLeft from "../user-account-home/AcctLeft";
import AcctVoucherRight from "./AcctVoucherRight";

function page() {
  return (
    <div className="bg-siteBG">
      <MarketPlaceNavBar />
      <div className="px-16 pt-8 pb-16 flex gap-4">
        <AcctLeft />
        <AcctVoucherRight />
      </div>
    </div>
  );
}

export default page;