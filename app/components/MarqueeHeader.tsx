/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CustomImageContain } from "../product-detail/ProdLeftContainer";

const partnerImages = [
  "/images/glo.png",
  "/images/mastercard.png",
  "/images/airtel.png",
  "/images/ekedcp_logo.png",
  "/images/Mtn.png",
  "/images/Lasg.png",
  "/images/coralpay.png",
  "/images/9mobile.png",
  "/images/ikejaElectric.png",
];

function MarqueeHeader() {
  return (
    <div className="py-10 px-0 md:px-28">
      <p className="text-center font-medium">Our Partners</p>
      {/* <div className="flex mt-5 md:justify-between"> */}
      <div className="flex mt-5 overflow-x-scroll">
        {partnerImages.map((item) => (
          <>
          <MarqueeHeaderItems key={item} image={item} />
          </>
        ))}
      </div>
    </div>
  );
}

export default MarqueeHeader;

function MarqueeHeaderItems({ image }: { image: string }) {
  return (
    <div className="w-[210px] h-[75px] mr-4 flex-shrink-0">
      <CustomImageContain
        image={image}
      />
    </div>
  );
}
