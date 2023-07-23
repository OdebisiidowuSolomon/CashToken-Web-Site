import React from "react";
import { Star } from "../marketplace/MPMegaDeals";
import { Button } from "../components/navbar/NavLinks";
import COLORS from "../Constants/COLORS";

function ProdRightContainer() {
  return (
    <div className="flex-[0.3] shrink-0 gap-7">
      <ProdRightContainerDelivery />
      <ProdRightContainerAboutSeller />
      <ProdRightContainerMenSneaker />
    </div>
  );
}

export default ProdRightContainer;

const ProdRightContainerDelivery = () => {
  return (
    <div className="py-3 bg-white rounded-xl">
      <div className="px-6 p-3 border-b-2 border-gray-100">
        <p className="font-medium text-grayBlack">Delivery</p>
      </div>
      <div>
        <div className="px-6">
          <div className="mt-3">
            <p className="text-sm font-medium text-grayBlack">Door Delivery</p>
            <p className="text-xs text-grayBlack">
              Delivery by 1st November, 2022
            </p>
          </div>
          <div className="mt-3">
            <p className="text-sm font-medium text-grayBlack">Pick Up</p>
            <p className="text-xs text-grayBlack">
              Pick up from merchants location on 1st November
            </p>
          </div>
        </div>
        <div className="pt-3 mt-3 px-6 border-t-2 border-gray-100">
          <p className="text-sm font-medium text-grayBlack">Return Policy</p>
          <p className="text-xs text-grayBlack">
            Exchange or money back guarantee for all orders.
            <span className="text-primary">Learn more</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const ProdRightContainerAboutSeller = () => {
  const ProdRightContainerAboutSellerFlexItem = ({
    LText,
    RText,
  }: {
    LText: string;
    RText: string;
  }) => (
    <div className="flex items-center gap-1 mt-2">
      <p className="text-sm font-semibold">{LText}</p>
      <p className="text-sm">{RText}</p>
    </div>
  );

  return (
    <div className="py-3 bg-white rounded-xl mt-8 pb-7">
      <div className="px-6 p-3 border-b-2 border-gray-100 flex items-center justify-between">
        <p className="font-medium text-grayBlack">About Seller</p>
        <p className="font-medium text-primary text-sm">Visit Store</p>
      </div>
      <div className="px-6">
        <p className="font-medium text-grayBlack mt-2">
          Bumble Bee Fashion World
        </p>
        <ProdRightContainerAboutSellerFlexItem
          LText="Quality Score"
          RText="100%"
        />
        <ProdRightContainerAboutSellerFlexItem LText="Reviews" RText="100%" />
        <ProdRightContainerAboutSellerFlexItem LText="Followers" RText="500" />
        <button className="bg-primary text-white py-2 px-4 w-[79px] rounded-md mt-3">
          Follow
        </button>
      </div>
    </div>
  );
};

export const GroupStarFive = () => {
  return (
    <div className="flex items-center mt-1">
      <p className="text-sm text-grayBlack mr-1">5</p>
      <Star color={COLORS.yellowWarning} />
      <p className="text-sm text-grayBlack ml-1">(200)</p>
    </div>
  );
};

const ProdRightContainerMenSneaker = () => {
  return (
    <div className="py-3 bg-white rounded-xl mt-8 pb-7">
      <div className="px-6 p-3">
        <p className="font-medium text-grayBlack">Dior Mens Sneaker </p>
      </div>
      <div className="px-6">
        <div className="flex items-center mt-1">
          <p className="text-sm text-grayBlack mr-1">5</p>
          <Star color="black" />
          <p className="text-sm text-grayBlack ml-1">(200)</p>
        </div>
        <p className="text-black font-medium text-base mt-1">$50,000</p>
        <p className="text-secondaryText font-medium text-base line-through mt-1">
          N55,000
        </p>
        <p className="text-secondaryText font-medium text-base mt-1">
          Cash Back: <span className="font-normal">N2,000</span>
        </p>
        <p className="text-secondaryText font-medium text-base mt-1">
          Cash Token Points: <span className="font-normal">30</span>
        </p>
        <OutLineButton
          title="Buy Now"
          customStyle={{ width: "100%" }}
          customClass="mt-3"
        />
        <Button
          title="Add to Cart"
          customStyle={{ width: "100%" }}
          customClass="mt-5"
        />
      </div>
    </div>
  );
};

export function OutLineButton({
  title,
  customStyle,
  customClass,
}: {
  title: string;
  customStyle?: React.CSSProperties;
  customClass?: string;
}) {
  return (
    <button
      className={`1079xl:px-5 py-2 ml-1 text-primary border-2 border-primary rounded-[4px] px-3 text-xs 1079xl:text-sm ${customClass}`}
      style={{ backgroundColor: COLORS.white, ...customStyle }}
    >
      {title}
    </button>
  );
}
