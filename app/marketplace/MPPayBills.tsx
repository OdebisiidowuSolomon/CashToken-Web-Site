import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function MPPayBills() {
  return (
    <div className="py-3 px-3 bg-white rounded-xl">
      <p className="text-xl mb-4 font-medium">Pay Bills</p>
      <div className="relative">
        <div className="flex px-6 lg:px-12 py-3 gap-3 lg:gap-7 relative overflow-x-scroll">
          <SliderCards />
          <SliderCards />
          <SliderCards />
          <SliderCards />
          <SliderCards />
          <SliderCards />
        </div>
        <Indicator left />
        <Indicator />
      </div>
    </div>
  );
}

export default MPPayBills;

const SliderCards = () => {
  return (
    <div>
      <div className="w-[150px] h-[150px] lg:w-[211px] lg:h-[236px] rounded-2xl bg-white shadow-lg">
        <div className="w-[130px] h-[100px] lg:w-[195px] lg:h-[164px] rounded-2xl bg-black m-auto"></div>
        <p className="text-sm mt-3 text-center font-medium">
          Electricity Bills
        </p>
      </div>
    </div>
  );
};

const Indicator = ({ left }: { left?: boolean }) => {
  if (left)
    return (
      <div className="hidden w-8 h-8 rounded-full bg-defaultText items-center justify-center 1100xl:flex absolute top-[89px] left-0">
        <BiChevronLeft size={25} />
      </div>
    );

  return (
    <div className="hidden w-8 h-8 rounded-full bg-defaultText items-center justify-center 1100xl:flex absolute top-[89px] right-0">
      <BiChevronRight size={25} />
    </div>
  );
};
