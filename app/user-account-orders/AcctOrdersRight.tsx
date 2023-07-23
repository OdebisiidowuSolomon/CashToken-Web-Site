"use client";

import React, { useState } from "react";
import { CustomImageContain } from "../product-detail/ProdLeftContainer";
import { Button } from "../components/navbar/NavLinks";
import { BsArrowLeft } from "react-icons/bs";
import { AcctOverviewRightCard } from "../user-account-home/AcctOverviewRight";

const TabItem = ({
  cancelled,
  _orderDetail,
}: {
  cancelled?: boolean;
  _orderDetail?: boolean;
}) => {
  return (
    <div className="flex gap-3 mx-5 py-3 border-b items-centerr border-gray-200">
      <div className="w-[104px] h-[110px] flex-shrink-0 flex-[0.10]">
        {cancelled || _orderDetail ? (
          <CustomImageContain image="/images/Rectangle-377.png" />
        ) : (
          <CustomImageContain image="/images/Rectangle-346.png" />
        )}
      </div>
      <div className="flex-[0.6]">
        <p className="text-sm font-medium text-grayBlack">
          Addidas Men’s Sneakers
        </p>
        <p className="text-xs text-grayBlack my-1">Color: Black | Size: 41</p>
        <p className="text-xs text-secondaryText">Order No. 1234567</p>
        {cancelled && (
          <p className="p-[2px] text-xs rounded-md text-secondaryText w-auto my-1">
            Qty: 2
          </p>
        )}
        {_orderDetail && (
          <>
            <p className="p-[2px] text-xs rounded-md text-secondaryText w-auto my-1">
              $50,000
            </p>
            <p className="p-[2px] text-xs rounded-md text-secondaryText w-auto my-1">
              Cash Back: $2,000
            </p>
            <p className="p-[2px] text-xs rounded-md text-brown w-auto my-1">
              CashToken: 30
            </p>
          </>
        )}

        {cancelled ? (
          <p className="p-[2px] text-xs rounded-md bg-dividerBorder text-black w-auto inline-block my-1">
            Order Cancelled
          </p>
        ) : (
          <p className="p-[2px] text-xs rounded-md bg-greenSuccess text-white w-auto inline-block my-1">
            Order in Progress
          </p>
        )}
        {cancelled || _orderDetail ? (
          <p className="text-xs text-grayBlack font-semibold mt-1">
            Tuesday 01 November
          </p>
        ) : (
          <p className="text-xs text-grayBlack font-semibold mt-1">
            Estimated Delivery: Between Tuesday 01 November to Thursday 13
            November
          </p>
        )}
      </div>
      <div className="self-start w-[100%] flex-[0.30]">
        <p className="font-medium text-primary text-right">
          {_orderDetail ? "Track Item" : "See Details"}
        </p>
      </div>
    </div>
  );
};

function AcctOrdersRight() {
  const [id, setId] = useState<number>(1);

  return false ? (
    <div className="bg-white rounded-xl flex-[0.75]">
      <div className="p-5 border-b-2 border-gray-200">
        <p className="font-medium text-xl text-grayBlack">Your Orders</p>
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
              Open Orders
            </p>
            <p
              className={`font-medium py-5 cursor-pointer text-black ${
                id === 2 && "border-b border-primary text-primary"
              }`}
              onClick={() => setId(2)}
            >
              Closed Orders
            </p>
          </div>
          {id === 1 ? <TabItem /> : <TabItem cancelled />}
        </div>
      ) : (
        <NoOrder />
      )}
    </div>
  ) : (
    <OrderDetail />
  );
}

export default AcctOrdersRight;

export const NoOrder = ({
  title,
  subTitle,
  BtnText,
  image,
  showBtn = true,
  showImage = true,
}: {
  title?: string;
  subTitle?: string;
  BtnText?: string;
  image?: string;
  showBtn?: boolean;
  showImage?: boolean;
}) => {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="">
        <div className="w-[200px] h-[200px] m-auto mb-4">
          {showImage && <CustomImageContain image={image || "/images/Rectangle.png"} />}
        </div>
        <div>
          <p className="font-medium text-center">
            {title || "You currently have no orders"}
          </p>
          <p className="mt-2 text-center w-[50%] m-auto">
            {subTitle || "All your orders will be displayed here"}
          </p>
          {showBtn && (
            <div className="flex justify-center">
              <Button title={BtnText || "Start Shopping"} customClass="mt-3" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const OrderDetail = () => {
  return (
    <div className="bg-white rounded-xl flex-[0.75]">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center gap-1">
          <BsArrowLeft size={24} />
          <p className="font-medium text-xl text-grayBlack">Orders Details</p>
        </div>
      </div>
      <div className="m-5 border-b border-gray-200">
        <p className="font-medium mb-3">Order Number: 1234567</p>
        <p className="text-sm mb-1 text-secondaryText">Qty: 1</p>
        <p className="text-sm mb-1 text-secondaryText">Date: 11/10/2022</p>
        <p className="text-sm mb-1 text-secondaryText pb-2">Total: $50,000</p>
      </div>

      <div>
        <p className="px-5">Items in Your Order</p>
        <TabItem _orderDetail />
      </div>

      <div className="m-4 flex justify-between">
        <AcctOverviewRightCard headertext="Payment Information">
          <p className="font-medium text-grayBlack mb-3">Payment Method</p>
          <p className="text-grayBlack text-sm">Cash on Delivery</p>

          <div className="mt-3">
            <p className="font-medium text-grayBlack mb-3">
              Payment Information
            </p>
            <p className="text-grayBlack mb-1 text-sm">Items Total: 50,000</p>
            <p className="text-grayBlack mb-1 text-sm">Shipping Fee: $100</p>
            <p className="text-grayBlack text-sm">Total: $50,000</p>
          </div>
        </AcctOverviewRightCard>

        <AcctOverviewRightCard headertext="Delivery Information">
          <div className="m3e">
            <p className="font-medium text-grayBlack mb-3">Delivery Method</p>
            <p className="text-grayBlack mb-1 text-sm">Door Step</p>
          </div>

          <div>
            <p className="font-medium text-grayBlack mb-3">Shipping Address</p>
            <p className="text-grayBlack text-sm mb-3">
              No. 177, Moshood Olugbani Street, Off Ligali Ayorinde Street,
              Victoria Island, Lagos
            </p>
          </div>

          <div>
            <p className="font-medium text-grayBlack mb-3">
              Estimated Shipping Period
            </p>
            <p className="text-grayBlack text-sm">
              Estimated Shipping: Tuesday, 2 November to Friday, 10 November
            </p>
          </div>
        </AcctOverviewRightCard>
      </div>
    </div>
  );
};
