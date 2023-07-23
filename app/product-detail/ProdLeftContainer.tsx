"use client";

import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { SingleStar, Star } from "../marketplace/MPMegaDeals";
import { BsSuitHeart } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export const SocialMediaShare = ({ color }: { color?: boolean }) => {
  return (
    <div className="flex gap-3 mt-1">
      <div
        className={`w-[40px] h-[40px] flex justify-center items-center rounded-full ${
          color ? "text-white" : "border border-grayBlack"
        }`}
      >
        <FaLinkedinIn size={20} />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full border border-grayBlack">
        <FaInstagram size={20} />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full border border-grayBlack">
        <FaTwitter size={20} />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full border border-grayBlack">
        <FaFacebookF size={20} />
      </div>
    </div>
  );
};

function ProdLeftContainer() {
  return (
    <div className="flex-[0.7] gap-7">
      <div className="p-5 bg-white rounded-xl ">
        <div className="1100xl:flex-row flex-col flex gap-9">
          <ProdLeftContainerLeftCard />
          <ProdLeftContainerRightCard />
        </div>

        <div className="mt-8">
          <p>Share This Product</p>
          <SocialMediaShare />
        </div>
      </div>
      <ProdLeftSpecifications />
    </div>
  );
}

const ProdLeftSpecifications = () => {
  const [id, setId] = useState(1);

  const TabOne = () => {
    return (
      <div className="mt-3 px-6">
        <p className="text-sm text-grayBlack">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          egestas magna quis ante elementum ultrices. Quisque varius tempor
          eros. Integer elementum euismod lorem vulputate tempor. Vestibulum
          venenatis orci magna, nec vulputate metus molestie in. Nam nec ante
          finibus, auctor augue vitae, rutrum lectus. Mauris id dapibus ligula.
          Suspendisse potenti. Integer aliquet nisi quis aliquet imperdiet. In
          at iaculis est. Integer pretium risus scelerisque tempor lobortis. Sed
          non hendrerit libero. Pellentesque luctus nisl dictum tortor semper
          porta.
        </p>

        <p className="mt-3 text-sm text-grayBlack">
          Morbi tristique vitae ex sit amet accumsan. In sed tincidunt turpis.
          Aliquam efficitur pulvinar iaculis. Donec ipsum est, euismod quis
          ultricies a, sollicitudin maximus lectus. Phasellus nec congue mauris.
          Morbi tellus nulla, viverra vitae diam nec, faucibus tristique orci.
          Fusce pellentesque maximus nulla, posuere porttitor mi eleifend quis.
          Sed id ullamcorper ex, in laoreet velit. Nunc odio purus, vestibulum
          vitae viverra eget, vestibulum non nulla. Phasellus iaculis et felis
          eget cursus. Aliquam erat volutpat. Integer sed metus non sem sagittis
          varius nec at odio. Suspendisse vestibulum vehicula faucibus. Aliquam
          erat volutpat. Pellentesque eget ante rutrum, scelerisque leo id,
          pulvinar ligula. Cras ullamcorper consectetur mauris, et tincidunt est
          euismod nec.
        </p>
      </div>
    );
  };

  const TabTwo = () => {
    const TabTwoItem = ({ title }: { title: string }) => {
      return (
        <div>
          <div className="px-4 py-4 border-2 border-gray-100 rounded-t-3xl">
            <p className="font-medium text-grayBlack">{title}</p>
          </div>
          <div className="px-4 py-4 border-2 border-gray-100">
            <ul className="list-disc px-8">
              <li className="text-sm text-grayBlack mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                egestas magna quis ante
              </li>
              <li className="text-sm text-grayBlack mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                egestas magna quis ante
              </li>
              <li className="text-sm text-grayBlack mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                egestas magna quis ante elementum ultrices. Quisque varius
                tempor eros.
              </li>
              <li className="text-sm text-grayBlack mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                egestas magna quis ante elementum ultrices. Quisque varius
                tempor eros.
              </li>
            </ul>
          </div>
        </div>
      );
    };
    return (
      <div>
        <div className="px-6 py-3 border-b-2 border-gray-100">
          <p className="text-xl font-medium">Specifications and Features</p>
        </div>

        <div className="mt-6 flex 1100xl:flex-row flex-col gap-5 px-6">
          <TabTwoItem title="Specifications" />
          <TabTwoItem title="Key Features" />
        </div>
      </div>
    );
  };

  const TabThree = () => {
    const TabThreeItem = () => {
      return (
        <div className="pb-3">
          <p className="text-sm">John Doe</p>
          <div className="flex items-center">
            <Star />
            <p className="text-xs text-grayBlack">6 days ago</p>
          </div>
          <p className="text-xs text-grayBlack my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus
            justo, commodo quis metus sit amet, pharetra rhoncus tellus. Nam sed
            mollis elit. Aenean porta accumsan lorem in ultrices. Morbi quis
            nisl dictum ex blandit ullamcorper. Etiam non odio nisl. Phasellus
            porta quam quis dui iaculis rhoncus. Cras condimentum
          </p>
          <p className="text-xs mt-2 text-primary font-medium">Show more</p>
        </div>
      );
    };

    return (
      <div>
        <div className="py-3">
          <div className="flex px-6 py-3 border-b-2 border-gray-100 items-center gap-1">
            <SingleStar size={16} />
            <p className="font-medium">5 Reviews (200)</p>
          </div>
          <div className="px-6 pt-4">
            <TabThreeItem />
            <TabThreeItem />
            <TabThreeItem />
            <TabThreeItem />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-7 py-5 bg-white rounded-xl ">
      <div className="px-6 p-3 border-b-2 border-gray-100 flex gap-7">
        <p
          className={`font-medium cursor-pointer 1100xl:text-base text-sm ${
            id === 1 ? "text-primary" : "text-grayBlack"
          }`}
          onClick={() => setId(1)}
        >
          Product Description
        </p>
        <p
          className={`font-medium cursor-pointer 1100xl:text-base text-sm ${
            id === 2 ? "text-primary" : "text-grayBlack"
          }`}
          onClick={() => setId(2)}
        >
          Specifications and Features
        </p>
        <p
          className={`font-medium cursor-pointer 1100xl:text-base text-sm ${
            id === 3 ? "text-primary" : "text-grayBlack"
          }`}
          onClick={() => setId(3)}
        >
          Reviews
        </p>
      </div>
      {/* <div className="px-6"> */}
      <>
        {id === 1 && <TabOne />}
        {id === 2 && <TabTwo />}
        {id === 3 && <TabThree />}
      </>
      {/* </div> */}
    </div>
  );
};

export default ProdLeftContainer;

// const ProdLeftContainerRightCardProdDetails = () => {}

const ProdLeftContainerRightCard = () => {
  const LittleBox = ({ unselect }: { unselect?: boolean }) => (
    <div
      className={`border-2 ${
        unselect ? "border-gray-400" : "border-black"
      } rounded-md w-[59px] box-content p-1 flex justify-center items-center`}
    >
      <p className={`text-base ${unselect ? "text-gray-400" : "text-black"}`}>
        UK 39
      </p>
    </div>
  );

  return (
    <div className="">
      <p className="text-3xl font-semibold text-grayBlack">
        Balenciaga Mens Sneaker Black
      </p>
      <p className="text-base text-secondaryText mt-1">Sold by: Bumble bee</p>
      <div className="flex items-center mt-1">
        <p className="text-sm text-grayBlack mr-1">5</p>
        <Star />
        <p className="text-sm text-grayBlack ml-1">(200)</p>
      </div>
      <p className="text-black font-medium text-base mt-1">$50,000</p>
      <p className="text-secondaryText font-medium text-base line-through mt-1">
        N55,000
      </p>
      <p className="text-secondaryText font-medium text-base mt-1">
        Cash Back: N2,000{" "}
      </p>
      <p className="text-brown font-medium text-base mt-1">
        Cash Token Points: 30{" "}
      </p>
      <div className="mt-3">
        <p className="text-black font-medium text-base">Colors</p>
        <div className="flex gap-2 mt-2">
          <div className="h-[26px] w-[26px] rounded-full bg-[#DFBD0A]"></div>
          <div className="h-[26px] w-[26px] rounded-full bg-[#000000]"></div>
          <div className="h-[26px] w-[26px] rounded-full bg-[#EB4335]"></div>
          <div className="h-[26px] w-[26px] rounded-full bg-[#2C5DA9]"></div>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-black font-medium text-base">Size</p>
        <div className="flex gap-2 mt-2 flex-wrap">
          <LittleBox />
          <LittleBox />
          <LittleBox />
          <LittleBox />
          <LittleBox />
          <LittleBox />
          <LittleBox unselect />
          <LittleBox unselect />
          <LittleBox unselect />
        </div>
      </div>
      <div className="mt-3">
        <div className="flex items-center gap-3">
          <button className="bg-primary flex-[0.95] p-3 font-medium text-white rounded-md box-content">
            Add to Cart
          </button>
          <div className="bg-light p-3 rounded-md flex-[0.05]">
            <BsSuitHeart size={21} className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProdLeftContainerLeftCard = () => {
  return (
    <div className="">
      <div className="1100xl:w-[395px] w-[100%] h-[325px] rounded-xl bg-white relative">
        <CustomImageContain image="/images/Rectangle-279.png" />
        <>
          <div className="left-[5%] top-[45%] w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center absolute">
            <BiChevronLeft size={26} className="text-grayBlack" />
          </div>
          <div className="right-[5%] top-[45%] w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center absolute">
            <BiChevronRight size={26} className="text-grayBlack" />
          </div>
        </>
      </div>

      <div className="mt-3 flex 1100xl:justify-between gap-2 ">
        <div className="w-[20%] 1100xl:w-[90px] h-[90px] rounded-md">
          <CustomImageContain image="/images/Rectangle-302.png" />
        </div>
        <div className="w-[20%] 1100xl:w-[90px] h-[90px] rounded-md">
          <CustomImageContain image="/images/Rectangle-305.png" />
        </div>
        <div className="w-[20%] 1100xl:w-[90px] h-[90px] rounded-md">
          <CustomImageContain image="/images/Rectangle-304.png" />
        </div>
        <div className="w-[20%] 1100xl:w-[90px] h-[90px] rounded-md">
          <CustomImageContain image="/images/Rectangle-303.png" />
        </div>
      </div>
    </div>
  );
};

export const CustomImageContain = ({ image }: { image: string }) => {
  return (
    <img src={image} alt="image" className="w-[100%] h-[100%] object-contain" />
  );
};

export const CustomImageCover = ({ image }: { image: string }) => {
  return (
    <img src={image} alt="image" className="w-[100%] h-[100%] object-cover" />
  );
};
