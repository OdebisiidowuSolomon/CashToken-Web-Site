import React from "react";
import MarketPlaceNavBar from "../marketplace/MarketPlaceNavBar";
import AcctChangePasswordRight from "./AcctChangePasswordRight";
import ManageAcctLeft from "../profile-details/ManageAcctLeft";

function page() {
  return (
    <div className="bg-siteBG">
      <MarketPlaceNavBar />
      <div className="flex-col 804xl:flex-row px-3 804xl:px-16 pt-8 pb-16 flex gap-4">
      <ManageAcctLeft activeTab="change-password" />
        <AcctChangePasswordRight />
      </div>
    </div>
  );
}

export default page;
