import Link from "next/link";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

function MPMegaDeals() {
  return (
    <div className="bg-white mt-4 rounded-xl">
      <div className="py-2 bg-red-500 flex justify-between px-2 mb-3 rounded-lg items-center">
        <p className="text-white text-base lg:text-2xl">Mega Deals</p>
        <p className="text-white">See All</p>
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

export default MPMegaDeals;

export const MPMegaDealsCard = () => {
  return (
    <Link href={'product-detail'} className="w-[80%] 490xl:w-[205px]">
      <div className="w-[100%] h-[205px] 490xl:w-[205px] rounded-lg relative">
        <img
          src="/images/Rectangle-27.png"
          alt="logo"
          className="h-[100%] w-[100%] object-cover"
        />
        <div className="w-[50px] h-[28px] rounded-br-lg rounded-tr-lg bg-redError absolute top-3 left-0">
          -12%
        </div>
      </div>
      <div>
        <p className="text-[12px] text-grayBlack my-2">
          Egusi Soup With chicken and sea food and Garri
        </p>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <AiTwotoneStar size={12} color={"#F6A609"} key={i} />
          ))}
          <p className="text-[10px] text-grayBlack my-2 ml-1">(4692 reviews)</p>
        </div>
        <p className="text-sm text-grayBlack">$100,000</p>
        <p className="text-sm text-grayBlack line-through mt-1">$100,000</p>
        <div className="flex gap-1 mt-1">
          <div className="w-[12px] h-[12px]">
            <img
              src="/images/money-1.png"
              alt="logo"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <span className="text-[10px] text-grayBlack">Cash Back: N200</span>
        </div>
        <div className="flex gap-1 mt-1">
          <div className="w-[12px] h-[12px]">
            <img
              src="/images/gift.png"
              alt="logo"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <span className="text-[10px] text-[#691413]">CashTokens: N1,000</span>
        </div>
        <p className="text-sm text-grayBlack mt-2">Vendor: Kelly’s Kitchen</p>
      </div>
    </Link>
  );
};

export const Star = ({ size,color }: { size?: number, color?:string }) => {
  return [1, 2, 3, 4, 5].map((i) => (
    <AiTwotoneStar
      size={size || 12}
      color={color || "#F6A609"}
      key={i}
      className="mr-[2px]"
    />
  ));
};

export const SingleStar = ({ size }: { size?: number }) => (
  <AiTwotoneStar size={size || 12} color={"#F6A609"} />
);
