"use client";

import React, { useState } from "react";
import { WishListProductItem } from "../user-account-wishlist/AcctWishListRight";
import { CustomImageContain } from "../product-detail/ProdLeftContainer";
import { AiTwotoneStar } from "react-icons/ai";
import { NoOrder } from "../user-account-orders/AcctOrdersRight";

function AcctPendingRight() {
  const [reviewProduct, setReviewProduct] = useState(false);

  return (
    <div className="bg-white rounded-xl flex-[0.75]">
      <div className="p-5 border-b border-gray-200">
        <p className="font-semibold text-xl text-grayBlack">Pending Reviews</p>
      </div>

      {!reviewProduct ? (
        <div>
          <WishListProductItem onPress={() => setReviewProduct(true)} review />
          <WishListProductItem onPress={() => setReviewProduct(true)} review />
        </div>
      ) : (
        <div>
          {reviewProduct ? (
            <ReviewProduct />
          ) : (
            <NoOrder
              title="You don’t have orders awaiting your review"
              subTitle="After you purchase products on CashToken, the products will be displayed here for you to review them. Your reviews will be displayed on the products page."
              BtnText="Start Shopping"
              showImage={false}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default AcctPendingRight;

const ReviewProduct = () => {
  const ReviewProductInput = ({
    title,
    placeholder,
  }: {
    title: string;
    placeholder: string;
  }) => {
    return (
      <div className="flex-[0.5]">
        <p className="text-sm font-medium text-secondaryText mb-2">{title}</p>
        <input
          type="text"
          placeholder={placeholder}
          className="px-6 py-3 rounded-md bg-siteBG text-defaultText w-[100%] border border-dividerBorder"
        />
      </div>
    );
  };

  const ReviewProductTextArea = () => {
    return (
      <div className="">
        <p className="text-sm font-medium text-secondaryText mb-2">
          Review Details
        </p>
        <textarea
          placeholder="Tell us more about your experience with this product."
          className="px-4 py-3 rounded-md bg-siteBG text-defaultText w-[100%] border border-dividerBorder"
          cols={30}
          rows={10}
        ></textarea>
      </div>
    );
  };

  return (
    <div>
      <div className="mx-5 py-5 border-b border-gray-200">
        <p className="font-medium">Select the Stars to Rate this Product</p>
      </div>

      <div className="m-5">
        <div className="flex gap-2">
          <div className="w-[64px] h-[64px]">
            <CustomImageContain image="/images/Rectangle-346.png" />
          </div>
          <div>
            <p className="font-medium text-sm mb-2">Addidas Men’s Shoe</p>
            <CustomStars />
          </div>
        </div>

        <div className="mt-4">
          <p className="font-medium text-secondaryText mb-3">Write a Review</p>

          <div className="flex flex-col 490xl:flex-row gap-8">
            <ReviewProductInput
              title="Review Title"
              placeholder="e.g Good product/ I like it/ I don’t like it"
            />
            <ReviewProductInput title="Your Name" placeholder="e.g John Doe" />
          </div>

          <div className="mt-6">
            <ReviewProductTextArea />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CustomStars = ({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) => {
  const [id, setId] = useState<number>(0);

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((i) => (
        <AiTwotoneStar
          size={size || 20}
          key={i}
          color={i <= id ? "#F6A609" : "#CACCCF"}
          className="mr-2 cursor-pointer"
          onClick={() => setId(i)}
        />
      ))}
    </div>
  );
};
