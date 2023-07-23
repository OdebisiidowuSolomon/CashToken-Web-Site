import React from "react";
import { MPMegaDealsCard } from "./MPMegaDeals";

function MPCashToken({
  leftText,
  rightText,
}: {
  leftText?: string;
  rightText?: string;
}) {
  return (
    <div className="bg-white mt-4 rounded-xl">
      <div className="flex justify-between px-2 py-3 mb-3 items-center">
        <p className="text-2xl font-medium">{leftText}</p>
        <p className="text-primary">See All</p>
      </div>
      <div className="my-3 pb-14 mx-6 flex gap-9 flex-wrap justify-center">
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
      </div>
    </div>
  );
}

export default MPCashToken;
