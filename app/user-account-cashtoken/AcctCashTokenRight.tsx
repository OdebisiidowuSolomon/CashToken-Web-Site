import React, { ReactNode } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import COLORS from "../Constants/COLORS";
import { Button } from "../components/navbar/NavLinks";

function AcctCashTokenRight() {
  return (
    <div className="bg-white rounded-xl flex-[0.75]">
      <div className="p-5 border-b-2 border-gray-200">
        <p className="font-medium text-xl text-grayBlack">CashToken Points</p>
      </div>

      <div className="flex gap-9 m-4 flex-col 804xl:flex-row">
        <AcctCashTokenRightCardLeft />
        <AcctCashTokenRightCardRight />
      </div>
    </div>
  );
}

export default AcctCashTokenRight;

const AcctCashTokenRightCardLeft = () => {
  return (
    <div className="flex-[0.3]">
      <AcctLightContainer title="My CashToken">
        <div className="flex gap-3 px-2 py-5 bg-white rounded-lg">
          <p className="text-grayBlack">Total:</p>
          <div className="flex gap-2 items-center">
            <BsFillPlusCircleFill
              size={22}
              className="text-greenSuccess rounded-full border-2 border-lightGreen"
            />
            <p className="text-grayBlack font-medium">500</p>
          </div>
        </div>
      </AcctLightContainer>

      <div className="mt-3">
        <p className="text-sm">
          Continue shopping to earn more CashToken Points and stand a chance to
          win cash rewards in our weekly draw.
        </p>

        <p className="font-medium text-primary mt-3 text-sm">Learn More</p>
      </div>

      <Button
        title="Continue Shopping"
        customClass="mt-3"
        customStyle={{ marginLeft: 0 }}
      />
    </div>
  );
};

const AcctCashTokenRightCardRight = () => {
  const AcctCashTokenRightCardRightFlexItem = () => {
    return (
      <div className="flex justify-between">
        <p className="text-sm my-1">Balenciaga Men’s Shoe</p>
        <p className="text-sm">+200</p>
      </div>
    );
  };

  return (
    <div className="flex-[0.7] bg-light">
      <AcctLightContainer title="My CashToken History">
        <div className="px-2 py-3 bg-white rounded-lg pb-10">
          <div>
            <p className="text-sm">20-11-2022</p>
            <AcctCashTokenRightCardRightFlexItem />
            <AcctCashTokenRightCardRightFlexItem />
          </div>
          <div className="mt-3">
            <p className="text-sm">20-11-2022</p>
            <AcctCashTokenRightCardRightFlexItem />
            <AcctCashTokenRightCardRightFlexItem />
          </div>
        </div>
      </AcctLightContainer>
    </div>
  );
};

const AcctLightContainer = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="bg-light px-2 py-7">
      <p className="font-medium text-grayBlack ml-1 mb-1">{title}</p>
      {children}
    </div>
  );
};
