import React from "react";
import MarketPlaceNavBar from "../marketplace/MarketPlaceNavBar";
import AcctInboxRight from "./AcctInboxRight";
import AcctLeft from "../user-account-home/AcctLeft";
import Footer from "../components/Footer";

function page() {
  return (
    <div className="bg-siteBG">
      <MarketPlaceNavBar />
      <div className="flex-col 804xl:flex-row px-3 804xl:px-16 pt-8 pb-16 flex gap-4">
      <AcctLeft activeTab="Inbox" />
        <AcctInboxRight />
      </div>
      <Footer />
    </div>
  );
}

export default page;
