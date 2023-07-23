import React from "react";
import MarketPlaceNavBar from "../marketplace/MarketPlaceNavBar";
import AcctLeft from "../user-account-home/AcctLeft";
import AcctProfileDetailsRight from "./AcctProfileDetailsRight";

function page() {
  return (
    <div className="bg-siteBG">
      <MarketPlaceNavBar />
      <div className="flex-col 1100xl:flex-row px-3 1100xl:px-16 pt-8 pb-16 flex gap-4">
        <AcctLeft activeTab="" />
        <AcctProfileDetailsRight />
      </div>
    </div>
  );
}

export default page;
