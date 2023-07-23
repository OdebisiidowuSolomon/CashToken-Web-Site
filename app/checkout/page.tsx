import React from "react";
import { CustomImageContain } from "../product-detail/ProdLeftContainer";
import CheckLeftContainer from "./CheckLeftContainer";
import CheckRightContainer from "./CheckRightContainer";

function page() {
  return (
    <div className="bg-siteBG">
      <CheckoutNavbar />
      <div className="flex justify-center p-3 mt-8 font-semibold bg-white">
        <p className="text-2xl">Checkout</p>
      </div>
      <div className="flex-col-reverse 804xl:flex-row px-3 804xl:px-16 pt-5 pb-8 flex gap-9 justify-center mt-8">
        <CheckLeftContainer />
        <CheckRightContainer />
      </div>
    </div>
  );
}

export default page;

const CheckoutNavbar = () => {
  return (
    <div className="px-20 py-4 flex items-center justify-between bg-white">
      <div className="flex items-center gap-2">
        <div className="w-[40px] h-[40px]">
          <CustomImageContain image="/images/cashtoken-logo.png" />
        </div>
        <p className="text-lg font-bold text-grayBlack">CashToken Rewards</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="font-medium">Need help?</p>
        <p className="font-medium text-primary">Contact Us</p>
      </div>
    </div>
  );
};
