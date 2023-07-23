import React from "react";
import { Button } from "../components/navbar/NavLinks";
import { CustomImageContain } from "../product-detail/ProdLeftContainer";

function page() {
  return (
    // <div className="top-[10%] left-[35vw] w-[30vw] bg-red-300 p-10 flex flex-col items-center">
    <div className="w-[100%] h-[100%] flex justify-center items-center bg-white">
      <div className="bg-white p-10 flex flex-col items-center">
        <p className="text-xl font-semibold text-grayBlack text-center">
          Your Order Has Been Received
        </p>
        <div className="w-[72px] h-[72px] my-4">
          <CustomImageContain image="/images/check-1.png" />
        </div>
        <p className="font-medium text-grayBlack text-center">
          Thank you for shopping with CashToken!
        </p>
        <p className="text-sm text-grayBlack my-3 text-center">
          Your Order ID is : 1234567
        </p>
        <p className="text-sm text-grayBlack text-center text-center">
          You will recieve an order confirmation email with details of your
          order
        </p>
        <Button title="Continue Shopping" customClass="w-[60%] mt-4" />
      </div>
    </div>
  );
}

export default page;
