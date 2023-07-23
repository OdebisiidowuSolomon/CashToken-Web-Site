import React from "react";
import { CustomImageContain } from "../product-detail/ProdLeftContainer";

function MPShopByStore() {
  return (
    <div className="my-4">
      <p className="text-2xl text-grayBlack font-medium mb-4">Shop By Store</p>
      <div className="flex gap-7 flex-wrap">
        <MPShopByStoreCard />
        <MPShopByStoreCard />
        <MPShopByStoreCard />
      </div>
    </div>
  );
}

export default MPShopByStore;

const MPShopByStoreCard = () => {
  return (
    // <div className="w-[384px] h-[284px]">
    <div className="max-w-[384px] max-h-[284px]">
      <CustomImageContain image="/images/Rectangle-339.png" />
    </div>
  );
};
