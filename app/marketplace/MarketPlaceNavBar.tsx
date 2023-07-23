import React from "react";
import { IconType } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsPerson, BsListUl, BsSuitHeart, BsCart3 } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { CustomImageContain } from "../product-detail/ProdLeftContainer";

function MarketPlaceNavBar() {
  return (
    <div className="bg-white">
      <div className="flex px-3 1100xl:px-16 py-4 border-b-2 border-gray-100">
        <div className="w-[109px] h-[41px] flex-shrink-0">
          <CustomImageContain image="/images/CTR-1.png" />
        </div>
        <>
          <div className="flex ml-auto items-center">
            <div className="hidden 804xl:flex items-center mr-7">
              <div className="flex items-center py-2 px-4 border-2 mr-3 border-gray-100">
                <AiOutlineSearch size={25} />
                <input
                  type="text"
                  placeholder="Search for products, brands..."
                  className="w-[40%] min-w-[376px]"
                />
              </div>
              <button className="bg-[#A67A0F] px-5 py-2 text-white">
                Search
              </button>
            </div>
            <div className="1100xl:flex hidden">
              <MPNavbarIconItem dropdown Icon={BsPerson} title="Account" />
              <MPNavbarIconItem Icon={BsSuitHeart} title="Wishlist" />
              <MPNavbarIconItem Icon={BsCart3} title="Cart" />
              <MPNavbarIconItem Icon={GrLocation} title="USA" />
            </div>
            <div className="flex 1100xl:hidden ml-auto items-center gap-3">
              <AiOutlineSearch size={24} />
              <BsPerson size={24} />
              <BsCart3 size={24} />
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default MarketPlaceNavBar;

const MPNavbarIconItem = ({
  Icon,
  title,
  dropdown = false,
}: {
  Icon: IconType;
  title: string;
  dropdown?: boolean;
}) => {
  return (
    <div className="flex items-center mr-3">
      <Icon size={25} />
      <div className="flex items-center ml-2">
        <p className="mr-1 font-semibold">{title}</p>
        {dropdown && <BiChevronDown size={25} />}
      </div>
    </div>
  );
};

export const SecondNavBar = () => {
  return (
    <div className="px-16 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center">
          <BsListUl size={25} />
          <p className="ml-2">Shop by category</p>
        </div>
        <p className="font-medium ml-2">Home</p>
        <p className="font-medium ml-2">Vendors</p>
      </div>
      <div className="flex items-center">
        <p className="font-medium ml-2 ">Help</p>
        <p className="font-medium ml-2 text-primary">Sell on CashToken</p>
      </div>
    </div>
  );
};
