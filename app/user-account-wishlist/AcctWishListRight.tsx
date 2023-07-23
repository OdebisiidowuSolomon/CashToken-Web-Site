import React from "react";
import { CustomImageContain } from "../product-detail/ProdLeftContainer";
import { Button } from "../components/navbar/NavLinks";
import { GoTrash } from "react-icons/go";
import { NoOrder } from "../user-account-orders/AcctOrdersRight";

function AcctWishListRight() {
  return (
    <div className="bg-white rounded-xl flex-[0.75]">
      <div className="p-5 border-b border-gray-200">
        <p className="font-semibold text-xl text-grayBlack">Wishlist</p>
      </div>
      {true ? (
        <div>
          <WishListProductItem />
          <WishListProductItem />
        </div>
      ) : (
        <NoOrder
          title="Your wishlist is empty"
          subTitle="All the items you add to your wishlist will be displayed here"
          BtnText="Explore Products"
          image="/images/NoWishList.png"
        />
      )}
    </div>
  );
}

export default AcctWishListRight;

export const WishListProductItem = ({
  cancelled,
  _orderDetail,
  review,
  onPress
}: {
  cancelled?: boolean;
  _orderDetail?: boolean;
  review?: boolean;
  onPress?: () => void;
}) => {
  return (
    <div className="flex gap-3 mx-5 py-3 border-b items-centerr border-gray-200 flex-col 490xl:flex-row ">
      <div className="490xl:w-[104px] 490xl:h-[110px] flex-shrink-0 490xl:flex-[0.10]">
        <CustomImageContain image="/images/Rectangle-346.png" />
      </div>
      <div className="490xl:flex-[0.6]">
        <p className="text-sm font-medium text-grayBlack">
          Addidas Men’s Sneakers
        </p>
        <p className="text-xs text-grayBlack my-1">Color: Black | Size: 41</p>
        <p className="text-xs text-secondaryText">Order No. 1234567</p>
        <div className="flex gap-2">
          <p className="text-sm text-grayBlack my-1">$50,000</p>
          <p className="text-xs line-through text-secondaryText my-1">
            $55,000
          </p>
        </div>

        <p className="text-xs text-grayBlack font-semibold mt-1">
          {review ? 'Delivered on' :'Estimated Delivery' }: Between Tuesday 01 November to Thursday 13
          November
        </p>
      </div>

      {review ? (
        <div className="w-[100%] 490xl:flex-[0.30]">
            <p className="font-medium text-sm 490xl:text-base text-primary text-right" onClick={onPress}>Rate This Product</p>
        </div>
      ) : (
        <div className="w-[100%] justify-between flex flex-row 490xl:flex-col 490xl:flex-[0.30]">
          <Button title="Buy Now" customClass="self-end" />

          <div className="flex gap-2 self-end">
            <GoTrash size={23} className="text-redError" />
            <p className="font-medium text-redError">Remove</p>
          </div>
        </div>
      )}
    </div>
  );
};
