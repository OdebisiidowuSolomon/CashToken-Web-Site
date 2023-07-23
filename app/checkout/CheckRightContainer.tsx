import React from "react";
import { CustomImageContain } from "../product-detail/ProdLeftContainer";
import { CheckLeftContainerPaymentMethodFooterItem } from "./CheckLeftContainer";
import { OutLineButton } from "../product-detail/ProdRightContainer";

function CheckRightContainer() {
  return (
    <div className="flex-[0.3]">
      <div className="rounded-2xl bg-white py-3">
        <div className="flex gap-4 items-center p-4 border-b-2 border-gray-100">
          <p className="font-semibold text-grayBlack text-xl">Your Order</p>
          <p className="text-grayBlack">2 Items</p>
        </div>

        <div className="px-4 h-[300px] overflow-y-scroll">
          <CheckRightContainerCartItem />
          <CheckRightContainerCartItem />
          <CheckRightContainerCartItem />
          <CheckRightContainerCartItem />
          <CheckRightContainerCartItem />
        </div>

        <div className="px-4 pt-2 border-b-2 border-gray-100">
            <CheckLeftContainerPaymentMethodFooterItem LText="Subtotal" RText="$100,000.00" />
            <CheckLeftContainerPaymentMethodFooterItem LText="Shipping" RText="$10.00" />
        </div>

        <div className="px-4 py-1">
            <CheckLeftContainerPaymentMethodFooterItem LText="Total" RText="$50,000.00" color />
            <OutLineButton title="Edit Cart" customClass="w-[100%]" />
        </div>



      </div>
    </div>
  );
}

export default CheckRightContainer;

const CheckRightContainerCartItem = () => {
  return (
    <div className="py-4 flex gap-3 border-b-2 border-gray-100">
      <div className="w-[64px] h-[64px]">
        <CustomImageContain image="/images/Rectangle-346.png" />
      </div>
      <div>
        <p className="text-grayBlack text-xs">Addidas men&apos;s sneakers</p>
        <p className="text-grayBlack text-sm font-medium">$50.000</p>
        <p className="text-grayBlack text-xs">Qty: 1</p>
      </div>
    </div>
  );
};
