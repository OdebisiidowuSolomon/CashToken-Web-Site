import React from "react";
import MarketPlaceNavBar from "./MarketPlaceNavBar";
import MPCallToAction from "./MPCallToAction";
import MPPayBills from "./MPPayBills";
import MPMegaDeals from "./MPMegaDeals";
import MPSecurePayments from "./MPSecurePayments";
import MPCashToken from "./MPCashToken";
import MPCurrentlyTrend from "./MPCurrentlyTrend";
import MPShopByStore from "./MPShopByStore";
import MPBanner from "./MPBanner";
import MPTestimonials from "./MPTestimonials";
import Footer from "../components/Footer";

function page() {
  return (
    <div className="bg-siteBG">
      <div className="h-[56px] bg-[#A67A0F]"></div>
      <MarketPlaceNavBar />
      <div className="px-1 lg:px-9 110xl:px-16 pt-8 pb-16">
        <MPCallToAction />
        <MPPayBills />
        <MPMegaDeals />
        <MPSecurePayments />
        <MPCashToken leftText="CashToken Special" />
        <MPCurrentlyTrend />
        <MPCashToken leftText="Recommended for You" />
        <MPShopByStore />
        <MPCashToken leftText="Under-3k Shop" />
        <MPBanner />
        <MPTestimonials />
      </div>
      <Footer />
    </div>
  );
}

export default page;
