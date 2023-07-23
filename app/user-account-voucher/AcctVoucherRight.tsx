"use client";

import React, { useState } from "react";
import { NoOrder } from "../user-account-orders/AcctOrdersRight";

function AcctVoucherRight() {
  const [id, setId] = useState<number>(1);

  return (
    <div className="bg-white rounded-xl flex-[0.75]">
      <div className="p-5 border-b-2 border-gray-200">
        <p className="font-medium text-xl text-grayBlack">Voucher</p>
      </div>
      {false ? (
        <div>
          <div className="flex gap-5 mx-5 border-b border-gray-200">
            <p
              className={`font-medium py-5 cursor-pointer text-black ${
                id === 1 && "border-b border-primary text-primary"
              }`}
              onClick={() => setId(1)}
            >
              Active
            </p>
            <p
              className={`font-medium py-5 cursor-pointer text-black ${
                id === 2 && "border-b border-primary text-primary"
              }`}
              onClick={() => setId(2)}
            >
              Expired
            </p>
          </div>
          {id === 1 ? <TabItem /> : <TabItem expired />}
        </div>
      ) : (
        <NoOrder
          title="Your inbox is empty"
          subTitle="All expired vouchers will be displayed here."
          showBtn={false}
          showImage={false}
        />
      )}
    </div>
  );
}

export default AcctVoucherRight;

const TabItem = ({ expired }: { expired?: boolean }) => {
  const Item = ({ expired }: { expired?: boolean }) => {
    return (
      <div
        className={`w-[45%] min-w-[400px] p-4 ${
          expired ? "bg-siteBG" : "bg-light"
        }`}
      >
        <div className="flex justify-between">
          <p className="text-sm font-medium">USD 500</p>
          <p className="text-xs p-1 bg-white rounded-md">123fGT45H3456</p>
        </div>
        <p className="text-sm mt-2">In this store over USD 75,000</p>
        <div className="flex justify-between mt-6">
          {expired ? (
            <p className="text-xs text-secondaryText">
              Expired on Nov 30 11:59 GMT
            </p>
          ) : (
            <p className="text-xs text-secondaryText">
              Valid till Nov 30 11:59 GMT
            </p>
          )}
          <p
            className={`text-xs font-medium  ${
              expired ? "text-defaultText" : "text-primary"
            }`}
          >
            Redeem Now
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="m-5">
      <p className="text-sm font-medium">Addidas Official Store</p>
      <p className="text-xs">Only available in this store</p>

      <div className="flex gap-4 mt-3 flex-wrap">
        <Item expired={expired} />
        <Item expired={expired} />
        <Item expired={expired} />
        <Item expired={expired} />
      </div>
    </div>
  );
};
