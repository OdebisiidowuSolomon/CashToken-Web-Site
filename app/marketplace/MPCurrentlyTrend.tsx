import Link from "next/link";
import React from "react";

function MPCurrentlyTrend() {
  return (
    <div className="bg-white mt-4 rounded-xl py-4 px-2">
      <div className="h-11 px-2 mb-3">
        <p className="text-2xl font-medium">Currently Trending Offers</p>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        <MPCurrentlyTrendCard />
        <MPCurrentlyTrendCard />
        <MPCurrentlyTrendCard />
        <MPCurrentlyTrendCard />
        <MPCurrentlyTrendCard />
        <MPCurrentlyTrendCard />
        <MPCurrentlyTrendCard />
        <MPCurrentlyTrendCard />
      </div>
    </div>
  );
}

export default MPCurrentlyTrend;

const MPCurrentlyTrendCard = () => {
  return (
    <Link href={'categories'} className="w-[221px] h-[335px] relative">
      <div className="w-[220px] h-[220px] rounded-full bg-light absolute left-0 right-0 top-[10%] z-auto"></div>
      <div className="w-[205px] h-[233px] relative">
        <img
          src="/images/men-category.png"
          alt="logo"
          className="w-[100%] h-[100%] object-contain z-10"
        />
      </div>
      <p className="font-medium text-lg text-center mt-7">Men&apos;s Fashion</p>
    </Link>
  );
};
