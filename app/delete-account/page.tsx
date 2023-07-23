import React from "react";
import MarketPlaceNavBar from "../marketplace/MarketPlaceNavBar";
import AcctDeleteRight from "./AcctDeleteRight";
import ManageAcctLeft from "../profile-details/ManageAcctLeft";

function page() {
  return (
    <div className="bg-siteBG">
      <MarketPlaceNavBar />
      <div className="flex-col 804xl:flex-row px-3 804xl:px-16 pt-8 pb-16 flex gap-4">
        <ManageAcctLeft activeTab="delete-account" />
        <AcctDeleteRight />
      </div>
    </div>
  );
}

export default page;
