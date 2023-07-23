import React, { ReactNode } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Star } from "../marketplace/MPMegaDeals";

function CatLeftContainer() {
  return (
    <div className="flex-[0.2] hidden 804xl:flex flex-col gap-4">
      <div className="py-3 bg-white rounded-xl">
        <div className="px-6 p-3 border-b-2 border-gray-100">
          <p className="font-medium text-grayBlack">Product Categories</p>
        </div>
        <div className="px-6">
          <p className="py-1 text-grayBlack text-xs">Men</p>
          <p className="py-1 text-grayBlack text-xs">Women</p>
          <p className="py-1 text-grayBlack text-xs">Food and Drinks</p>
          <p className="py-1 text-grayBlack text-xs">Groceries</p>
          <p className="py-1 text-grayBlack text-xs">Hospitality</p>
          <p className="py-1 text-grayBlack text-xs">
            Beauty, Health and personal Care
          </p>
          <p className="py-1 text-grayBlack text-xs">Computers and Gadgets</p>
          <p className="py-1 text-grayBlack text-xs">Arts and Culture</p>
        </div>
      </div>
      <CatLeftContainerCard title="Brand" />
      <CatLeftContainerCard title="Size" />
      <CatLeftContainerCard title="Gender" />
      <CatLeftContainerPriceCard title="Price ($)" />
      <CatLeftContainerPriceCard title="Cash Token Points" />
      <CatLeftContainerRatingCard title="Product Rating" />
    </div>
  );
}

export default CatLeftContainer;

const CatLeftContainerCard = ({ title }: { title: string }) => {
  const CatLeftContainerCardItem = () => {
    return (
      <div className="flex items-center mb-2">
        <input type="checkbox" />
        <p className="ml-3 text-xs text-grayBlack">Addidas</p>
      </div>
    );
  };

  return (
    <div className="py-3 bg-white rounded-xl">
      <div className="px-6 p-3 border-b-2 border-gray-100">
        <p className="font-medium text-grayBlack">{title}</p>
      </div>
      <div className="px-6">
        <div className="flex mt-4 px-2 items-center border-2 border-gray-100 rounded-lg ">
          <input
            type="text"
            placeholder="Search"
            className="text-xs py-2 flex-[0.9] outline-none"
          />
          <AiOutlineSearch
            size={20}
            className="text-gray-400 flex-[0.1] ml-auto"
          />
        </div>
        <div className="mt-3 p-2">
          <CatLeftContainerCardItem />
          <CatLeftContainerCardItem />
          <CatLeftContainerCardItem />
          <CatLeftContainerCardItem />
          <CatLeftContainerCardItem />
        </div>
      </div>
    </div>
  );
};

const CatLeftContainerPriceCard = ({ title }: { title: string }) => {
  return (
    <div className="py-3 bg-white rounded-xl">
      <div className="px-6 p-3 border-b-2 border-gray-100">
        <p className="font-medium text-grayBlack">{title}</p>
      </div>
      <div className="px-6 py-3">
        <div className="h-2 w-[80%] border border-gray-300">
          <div className="h-2 w-[70%] bg-primary"></div>
        </div>
      </div>
      <div className="px-6 p-2 flex gap-3">
        <div className="flex items-center">
          <p className="text-xs text-grayBlack mr-2">Min:</p>
          <div className="p-2 pr-6 border-2 border-gray-200">
            <p className="text-xs text-grayBlack">1000</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-xs text-grayBlack mr-2">Max:</p>
          <div className="p-2 pr-6 border-2 border-gray-200">
            <p className="text-xs text-grayBlack">1000</p>
          </div>
        </div>
      </div>
      <div className="px-6 p-2 flex justify-end">
        <p className="text-primary text-xs text-right font-medium">Apply</p>
      </div>
    </div>
  );
};

const CatLeftContainerRatingCard = ({ title }: { title: string }) => {
  const CatLeftContainerRatingCardItem = () => {
    return (
      <div className="flex items-center">
        <div className="mr-2">
          <input type="radio" />
        </div>
        <Star />
        <div>
          <p className="text-xs ml-2  text-grayBlack">Stars rating & above</p>
        </div>
      </div>
    );
  };

  return (
    <CatLeftContainerGeneralCard title={title}>
      <CatLeftContainerRatingCardItem />
      <CatLeftContainerRatingCardItem />
      <CatLeftContainerRatingCardItem />
      <CatLeftContainerRatingCardItem />
      <CatLeftContainerRatingCardItem />
    </CatLeftContainerGeneralCard>
  );
};

const CatLeftContainerGeneralCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="py-3 bg-white rounded-xl">
      <div className="px-6 p-3 border-b-2 border-gray-100">
        <p className="font-medium text-grayBlack">{title}</p>
      </div>
      <div className="px-6">{children}</div>
    </div>
  );
};
