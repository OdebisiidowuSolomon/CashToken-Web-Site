import React from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { CustomImageContain } from "../product-detail/ProdLeftContainer";
import { BsFillPlusSquareFill } from "react-icons/bs";
import COLORS from "../Constants/COLORS";
import { FiMinusSquare } from "react-icons/fi";
import Link from "next/link";

function CartLeftContainer() {
  return (
    <div className="flex-[0.7]">
      <div className="p-6 border-b-1 border-gray-100 flex gap-5 items-center bg-white rounded-md">
        <p className="font-medium text-2xl text-black">Shopping Cart</p>
        <p className="text-black">2 Items</p>
      </div>
      <div>
        <CartLeftContainerItem image="/images/Rectangle-346.png" />
        <CartLeftContainerItem image="/images/Rectangle-347.png" />
      </div>
    </div>
  );
}

export default CartLeftContainer;

const CartLeftContainerItem = ({ image }: { image: string }) => {
  return (
    <div className="p-4 bg-white border-t-2 border-gray-100">
      <div className="flex gap-3">
        <div className="w-[120px] h-[120px] flex-grow-0 flex-shrink-0">
          <CustomImageContain image={image} />
        </div>
        <div className="flex-grow">
          <div className="490xl:flex-row flex-col flex 490xl:items-center 490xl:justify-between">
            <Link href={'product-detail'} className="text-black font-medium">
              Addidas Men&apos;s Sneakers
            </Link>
            <p className="text-black font-medium">N50,000</p>
          </div>
          <div className="flex items-center justify-between mt-1">
            <p className="text-grayBlack text-sm">
              Seller: Bumble Bee fashion World
            </p>
            <p className="hidden 490xl:block text-grayBlack text-sm line-through">$50,000</p>
          </div>
          <p className="text-grayBlack text-sm mt-1">Color: Black | Size: 41</p>
          <div className="flex gap-1 mt-1 items-center">
            <div className="w-[12px] h-[12px]">
              <img
                src="/images/money-1.png"
                alt="logo"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <span className="text-sm text-grayBlack font-medium">
              Cash Back: N2,000
            </span>
          </div>
          <div className="flex gap-1 mt-1 items-center">
            <div className="w-[12px] h-[12px]">
              <img
                src="/images/gift.png"
                alt="logo"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <span className="text-sm text-[#691413]">CashTokens: 30</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex gap-1 items-center">
          <IoMdRemoveCircleOutline size={24} />
          <p>Remove</p>
        </div>
        <div className="flex gap-2 items-center">
          <FiMinusSquare color={COLORS.primary} size={26} />
          <p className="text-sm">12</p>
          <BsFillPlusSquareFill color={COLORS.primary} size={24} />
        </div>
      </div>
    </div>
  );
};
