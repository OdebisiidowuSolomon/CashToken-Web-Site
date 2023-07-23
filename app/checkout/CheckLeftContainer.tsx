import React, { ReactNode } from "react";
import { Button } from "../components/navbar/NavLinks";
import { CustomImageContain } from "../product-detail/ProdLeftContainer";
import { AiOutlineCheckSquare } from "react-icons/ai";
import COLORS from "../Constants/COLORS";

function CheckLeftContainer() {
  return (
    <div className="flex-[0.7]">
      {false ? (
        <div>
          <CheckLeftContainerAddressDetails />
          <CheckLeftContainerPersonDetails />

          {/* Choose Delivery Method */}
          <div className="mt-4">
            <CheckLeftContainerChooseDeliveryMethod />
            <CheckLeftContainerDeliveryMethod
              title="Door Delivery"
              subtitle="Estimated delivery between Thursday 2 Feb and Tuesday 7 Feb for ₦ 1,560"
            />
            <CheckLeftContainerDeliveryMethod
              title="Pick Up from Merchant"
              subtitle="You will visit the merchant’s physical location to pick up the purchased item(s) between
          Thursday 2 Feb and Tuesday 7 Feb. No delivery charges attached"
            />
            <div className="px-10 bg-white pb-6 rounded-b-md">
              <Button title="Proceed" customClass="w-[100%]" />
            </div>
          </div>

          {/* Choose Payment Method */}
          <div className="mt-4 pb-6 bg-white">
            <CheckLeftContainerPaymentMethod />
            <CheckLeftContainerPayWithCard />
            <CheckLeftContainerPayPalDelivery />
            <CheckLeftContainerDeliveryMethod title="Cash on Delivery" />
            <div className="bg-white">
              <CheckLeftContainerPaymentMethodFooter />
            </div>
            <div className="px-10 pt-2">
              <Button title="Confirm and Pay" customClass="w-[100%]" />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <CheckLeftContainerAlternative />
        </div>
      )}
    </div>
  );
}

export default CheckLeftContainer;

const ChooseHeaderMethod = ({
  no,
  LText,
  RText,
  color,
}: {
  no?: number;
  LText: string;
  RText: string;
  color?: string;
}) => {
  return (
    <div className="p-6 border-b-2 border-gray-100 flex items-center justify-between bg-white rounded-md">
      <div className="flex items-center gap-3">
        {no && (
          <p
            className={`p-1 px-3 ${
              color || "bg-greenSuccess"
            } text-white rounded-md`}
          >
            {no}
          </p>
        )}
        <p className="font-medium text-base sm:text-xl text-black">{LText}</p>
      </div>
      <p className="text-primary text-sm sm:text-base font-medium">{RText}</p>
    </div>
  );
};

const CheckLeftContainerAddressDetails = () => {
  return <ChooseHeaderMethod LText="Address Details" RText="Change" no={1} />;
};

const CheckLeftContainerChooseDeliveryMethod = () => {
  return (
    <ChooseHeaderMethod LText="Choose Delivery Method" RText="Change" no={2} />
  );
};

const CheckLeftContainerPaymentMethod = () => {
  return (
    <ChooseHeaderMethod
      LText="Choose Payment Method"
      RText="Change"
      no={3}
      color="bg-primary"
    />
  );
};

const CheckLeftContainerDeliveryMethod = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="px-10 flex py-3 bg-white gap-2">
      <div>
        <input type="radio" />
      </div>
      <div>
        <p>{title}</p>
        <p className="text-[13px] mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

const CheckLeftContainerPersonDetails = () => {
  return (
    <div className="px-10 pb-4 bg-white">
      <p className="font-medium py-3">Justina Anya</p>
      <p className="text-secondaryText">
        Number 177b, Moshood Olugbani Street, Ligali, Victoria Island, Lagos
        +234581456789363
      </p>
    </div>
  );
};

const CheckLeftContainerPayWithCard = ({}: {}) => {
  return (
    <div className="px-10 flex pt-2 bg-white gap-2">
      <div>
        <input type="radio" />
      </div>
      <div>
        <p>Pay with card</p>
        <div className="flex mt-2 gap-2 items-center border-2 border-x-gray-300 p-1 rounded-sm">
          <div className="w-[40px] h-[20px]">
            <CustomImageContain image="/images/visa-card.png" />
          </div>
          <div className="w-[40px] h-[20px]">
            <CustomImageContain image="/images/mastercardd.png" />
          </div>
          <div className="w-[40px] h-[20px]">
            <CustomImageContain image="/images/xpress-card.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckLeftContainerPayPalDelivery = () => {
  return (
    <div className="px-10 flex pt-3 bg-white gap-2 items-center">
      <div>
        <input type="radio" />
      </div>
      <div className="flex items-center gap-1">
        <div className="w-[40px] h-[20px]">
          <CustomImageContain image="/images/paypal.png" />
        </div>
        <p>Cash on Delivery</p>
      </div>
    </div>
  );
};

export const CheckLeftContainerPaymentMethodFooterItem = ({
  RText,
  LText,
  color,
  customClass
}: {
  RText: string;
  LText: string;
  color?: boolean;
  customClass?:string;
}) => {
  return (
    <div className={`flex justify-between items-center my-2 ${customClass}`}>
      <p
        className={`font-medium ${
          color ? "text-black" : "text-secondaryText"
        }`}
      >
        {LText}
      </p>
      <p
        className={`font-medium ${
          color ? "text-black" : "text-secondaryText"
        }`}
      >
        {RText}
      </p>
    </div>
  );
};

const CheckLeftContainerPaymentMethodFooter = () => {

  return (
    <div className="mx-10 border-t border-gray-200 pr-3">
      <CheckLeftContainerPaymentMethodFooterItem
        LText="2 Items"
        RText="$100,000"
      />
      <CheckLeftContainerPaymentMethodFooterItem
        LText="Shipping Fee"
        RText="$10"
      />
      <CheckLeftContainerPaymentMethodFooterItem
        LText="Total"
        RText="$110,000.00"
        color
      />
    </div>
  );
};

const CheckLeftContainerAlternative = () => {
  const CheckLeftContainerAlternativeSmallerInput = ({
    label,
    placeholder,
  }: {
    label: string;
    placeholder: string;
  }) => {
    return (
      <div className="flex-[0.4]">
        <label
          htmlFor="expdate"
          className="font-medium text-sm text-secondaryText block mb-2"
        >
          {label}
        </label>
        <input
          type="text"
          id="expdate"
          placeholder={placeholder}
          className="p-4 px-2 bg-siteBG w-[100%] border-2 border-dividerBorder rounded-md"
        />
      </div>
    );
  };

  return (
    <div>
      <ChooseHeaderMethod LText="Payment Card Details" RText="Save Card" />
      <div className="p-6 py-4 bg-white">
        <p className="text-grayBlack mb-3">What are your card details? </p>
        <div>
          <div>
            <label
              htmlFor="ccn"
              className="font-medium text-sm text-secondaryText block mb-2"
            >
              Credit Card Number
            </label>
            <input
              type="text"
              id="ccn"
              placeholder="1234 1243 1234 1234"
              className="p-4 px-5 bg-siteBG w-[100%] 490xl:w-[60%] border-2 border-dividerBorder rounded-md"
            />
          </div>
          <div className="w-[100%] 490xl:w-[60%] mt-5 flex justify-between">
            <CheckLeftContainerAlternativeSmallerInput
              label="Expiry Date"
              placeholder="MM/YY"
            />
            <CheckLeftContainerAlternativeSmallerInput
              label="CVC/CVV"
              placeholder="123"
            />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <AiOutlineCheckSquare size={24} color={COLORS.primary} />
            <p className="text-grayBlack">Do you want to save this card details?</p>
          </div>
        </div>
        <Button title="Pay Now" customClass="w-[100%] mt-4 py-3 mb-3" />
      </div>
    </div>
  );
};
