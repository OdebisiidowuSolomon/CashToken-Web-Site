import React from "react";
import { MPMegaDealsCard } from "../marketplace/MPMegaDeals";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import COLORS from "../Constants/COLORS";
import { MdOutlineSort } from "react-icons/md";

function CatRightContainer() {
  return (
    <div className="py-3 bg-white rounded-xl flex-[0.8]">
      <div className="hidden 804xl:block">
        <div className="px-5 py-2 mb-3 rounded-lg border-b-2 border-gray-100">
          <p className="text-grayBlack text-2xl">Offers Near You</p>
        </div>

        <div className="flex justify-between px-5 py-1 mb-3 rounded-lg items-center border-b-2 border-gray-100">
          <p className="text-secondaryText text-base">300 Products Found</p>
          <div className="flex items-center">
            <p className="text-base text-grayBlack mr-2">Sort by:</p>
            <select
              name="Popularity"
              id=""
              className="px-3 py-2 border-2 border-gray-100"
            >
              <option value="Popularity">Popularity</option>
              <option value="New Arrivals">New Arrivals</option>
              <option value="New Arrivals">Reviews</option>
              <option value="New Arrivals">Price: High</option>
              <option value="New Arrivals">Price: Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="804xl:hidden block">
        <div className="flex flex-col items-center mb-3">
          <p className="font-medium text-grayBlack text-2xl mb-1">
            Offers Near You
          </p>
          <p className="text-sm text-secondaryText">1-40 of 800 results</p>
        </div>

        <div className="flex justify-center gap-4">
          <div className="flex gap-2">
            <CiFilter size={23} color={COLORS.primary} />
            <p className="text-primary">Filter</p>
          </div>
          <div className="flex gap-2">
            <MdOutlineSort size={23} color={COLORS.primary} />
            <p className="text-primary">Sort</p>
          </div>
        </div>
      </div>

      <div className="my-9 pb-14 mx-6 flex gap-5 flex-wrap justify-center">
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
        <MPMegaDealsCard />
      </div>
      <CatRightContainerFooterNavigation />
    </div>
  );
}

export default CatRightContainer;

const CatRightContainerFooterNavigation = () => {
  return (
    <div className="flex items-center justify-end">
      <div className="flex items-center">
        <BiSolidChevronLeft size={24} />
        <p className="text-sm font-medium mr-2">Previous</p>
        <div className="px-3 py-1 border-2  border-primary">
          <p className="text-primary">1</p>
        </div>
      </div>
      <p className="mx-2">...</p>
      <div className="flex items-center">
        <div className="px-3 py-1 border-2 mr-2  border-black">
          <p>15</p>
        </div>
        <p className="text-sm font-medium mr-2">Next</p>
        <BiSolidChevronRight size={24} />
      </div>
    </div>
  );
};
