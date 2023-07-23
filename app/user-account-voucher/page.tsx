import React from "react";
import MarketPlaceNavBar from "../marketplace/MarketPlaceNavBar";
import AcctLeft from "../user-account-home/AcctLeft";
import AcctVoucherRight from "./AcctVoucherRight";
import Footer from "../components/Footer";

function page() {
  return (
    <div className="bg-siteBG">
      <MarketPlaceNavBar />
      <div className="flex-col 804xl:flex-row px-3 804xl:px-16 pt-8 pb-16 flex gap-4">
        <AcctLeft activeTab="Voucher" />
        <AcctVoucherRight />
      </div>
      <Footer/>
    </div>
  );
}

export default page;
