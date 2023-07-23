import React from "react";
import { CustomImageContain } from "../product-detail/ProdLeftContainer";
import { GroupStarFive } from "../product-detail/ProdRightContainer";
import { Button } from "../components/navbar/NavLinks";
import { NoOrder } from "../user-account-orders/AcctOrdersRight";

function AcctStoresRight() {
  return (
    <div className="bg-white rounded-xl flex-[0.75]">
      <div className="p-5 border-b-2 border-gray-200">
        <p className="font-medium text-xl text-grayBlack">Stores You Follow</p>
      </div>
      {true ? (
        <div className="m-5 flex flex-wrap gap-4">
          <SingleStore />
          <SingleStore />
          <SingleStore />
          <SingleStore />
        </div>
      ) : (
        <NoOrder
          title="Your inbox is empty"
          subTitle="All the stores you follow will be displayed here."
        />
      )}
    </div>
  );
}

export default AcctStoresRight;

export const SingleStore = () => {
  return (
    // <div className="border-2 border-gray-200 rounded-md py-5 flex-[0.5] 804xl:min-w-[400px] 490xl:w-[100%]  ">
    <div className="border-2 border-gray-200 rounded-md py-5 flex-[0.5] 490xl: 1100xl:min-w-[400px]">
      <div className="flex gap-3 justify-between px-5 pb-5 border-b border-dividerBorder">
        <div className="flex gap-3">
          <div className="w-[70px] h-[70px] border-[3px] p-3 border-light bg-dividerBorder">
            <CustomImageContain image="/images/store-icon.png" />
          </div>
          <div>
            <p className="font-medium text-sm text-grayBlack">
              Addidas Official Store
            </p>
            <GroupStarFive />
            <p className="text-xs text-secondaryText">
              Plot 2048, Oxford Ville Street{" "}
            </p>
          </div>
        </div>
        <div>
          <p className="p-1 border text-xs border-black">Following</p>
        </div>
      </div>
      <div className="px-5 pt-5">
        <Button title="Visit Store" />
      </div>
    </div>
  );
};
