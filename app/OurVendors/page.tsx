import React from "react";
import MarketPlaceNavBar from "../marketplace/MarketPlaceNavBar";
import AcctLeft from "../user-account-home/AcctLeft";
import { AiOutlineSearch } from "react-icons/ai";
import { SingleStore } from "../stores-you-follow/AcctStoresRight";

function page() {
  return (
    <div className="bg-siteBG">
      <MarketPlaceNavBar />
      <div className="px-16 pt-8 pb-16 flex gap-4">
        <OurVendorRight />
      </div>
    </div>
  );
}

export default page;

const OurVendorRight = () => {
  return (
    <div className="w-[100%]">
      <div className="p-5 bg-light">
        <p className="text-center font-medium text-xl text-grayBlack">
          Our Vendors
        </p>
      </div>
      <div className="bg-white px-5">
        <FlexInputSearch />
        <div className="m-5 flex flex-wrap gap-4">
          <SingleStore />
          <SingleStore />
          <SingleStore />
          <SingleStore />
          <SingleStore />
          <SingleStore />
          <SingleStore />
          <SingleStore />
          <SingleStore />
        </div>
      </div>
    </div>
  );
};

const FlexInputSearch = () => {
  return (
    <div className="flex flex-col 1100xl:flex-row 1100xl:justify-between p-5 mb-3 1100xl:items-center">
      <div className="flex items-center mr-7">
        <div className="flex items-center py-2 px-4 border-2 mr-3 border-gray-100 gap-3">
          <AiOutlineSearch size={25} />
          <input
            type="text"
            placeholder="Search vendors"
            className="w-[40%]"
            // className="w-[40%] min-w-[376px]"
          />
        </div>
        <button className="bg-[#A67A0F] px-5 py-2 text-white">Search</button>
      </div>

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
  );
};
