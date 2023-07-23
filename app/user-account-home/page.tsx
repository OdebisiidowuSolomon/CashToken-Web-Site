import React from "react";
import MarketPlaceNavBar from "../marketplace/MarketPlaceNavBar";
import AcctOverviewRight from "./AcctOverviewRight";
import AcctLeft from "./AcctLeft";

function page() {
  return (
    <div className="bg-siteBG">
      <MarketPlaceNavBar />
      <div className="px-16 pt-8 pb-16 flex gap-4">
        <AcctLeft />
        <AcctOverviewRight />
      </div>
    </div>
  );
}

export default page;
