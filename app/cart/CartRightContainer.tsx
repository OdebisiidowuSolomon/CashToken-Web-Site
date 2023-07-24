import React from "react";
import { Button } from "../components/navbar/NavLinks";
import { OutLineButton } from "../product-detail/ProdRightContainer";
import { useRouter } from "next/navigation";

function CartRightContainer() {

  const router = useRouter()

  return (
    <div className="flex-[0.3]">
      <div className="p-6 border-b-2 border-gray-100 bg-white rounded-md">
        <p className="font-medium text-xl text-grayBlack">Order Summary</p>
      </div>
      <div className="px-6 bg-white border-b-2 border-gray-100">
        <div className="py-3">
          <p className="text-primary font-medium">
            Have a coupon? Click here to apply it
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-grayBlack">Subtotal</p>
          <p className="text-grayBlack font-medium">$50,000.00</p>
        </div>
        <p className="text-xs text-secondaryText my-2 mb-4">
          Delivery fees not includes
        </p>
      </div>
      <div className="px-6 bg-white py-4">
        <div className="flex justify-between">
          <p className="text-grayBlack">Total</p>
          <p className="text-grayBlack font-medium">$50,000.00</p>
        </div>
        <div>
          <Button title="Checkout" customClass="mt-5 w-[100%]" onPress={() => router.push('/checkout')} />
          <OutLineButton title="Continue Shopping" customClass="my-5 w-[100%]" />
        </div>
      </div>
    </div>
  );
}

export default CartRightContainer;
