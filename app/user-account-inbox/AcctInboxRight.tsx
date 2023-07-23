import React, { ReactNode } from "react";
import { CustomImageContain } from "../product-detail/ProdLeftContainer";
import { NoOrder } from "../user-account-orders/AcctOrdersRight";

function AcctInboxRight() {
  return (
    <div className="bg-white rounded-xl flex-[0.75]">
      <div className="p-5 border-b-2 border-gray-200">
        <p className="font-medium text-xl text-grayBlack">Inbox</p>
      </div>
      {true ? (
        <>
          <AcctInboxRightSingleInbox>
            <div className="mt-4">
              <AcctInboxRightSingleInboxImage />
            </div>
          </AcctInboxRightSingleInbox>
          <AcctInboxRightSingleInbox
            title="How was your experience"
            leftText="Leave a review"
          />
        </>
      ) : (
        <NoOrder
          image="/images/mail.png"
          title="Your inbox is empty"
          subTitle="All messages you receive from us will be displayed here."
          showBtn={false}
        />
      )}
    </div>
  );
}

export default AcctInboxRight;

const AcctInboxRightSingleInbox = ({
  children,
  leftText,
  title,
}: {
  children?: ReactNode;
  leftText?: string;
  title?: string;
}) => {
  return (
    <div className="m-4 rounded-md border-2 border-gray-200 p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-xs text-secondaryText">1 month ago</p>
          <div className="h-[8px] w-[8px] rounded-full bg-primary" />
        </div>

        <p className="text-primary font-medium">{leftText || "See Details"}</p>
      </div>

      <div>
        <p className="font-medium text-grayBlack mt-1">
          {title || "Package Delivered"}
        </p>
        <p className="text-sm my-1">
          Package Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {children}
    </div>
  );
};

const AcctInboxRightSingleInboxImage = () => {
  return (
    <div className="rounded-md border-2 border-gray-200 p-2 flex gap-2">
      <div className="w-[64px] h-[64px]">
        <CustomImageContain image="images/Rectangle-346.png" />
      </div>
      <div>
        <p className="text-xs">Balenciaga Men’s Sneakers</p>
        <p className="text-xs font-medium my-1">$50,000</p>
        <p className="text-[9px] text-secondaryText">Color: Black | Size 41</p>
        <p className="text-[9px] text-secondaryText mt-1">Order No: 1234567</p>
      </div>
    </div>
  );
};
