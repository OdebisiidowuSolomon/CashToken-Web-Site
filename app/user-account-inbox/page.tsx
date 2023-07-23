import React from "react";
import MarketPlaceNavBar from "../marketplace/MarketPlaceNavBar";
import AcctInboxRight from "./AcctInboxRight";
import AcctLeft from "../user-account-home/AcctLeft";

function page() {
  return (
    <div className="bg-siteBG">
      <MarketPlaceNavBar />
      <div className="px-16 pt-8 pb-16 flex gap-4">
        <AcctLeft />
        <AcctInboxRight />
      </div>
    </div>
  );
}

export default page;
