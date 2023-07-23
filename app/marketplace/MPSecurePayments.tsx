import React from "react";

function MPSecurePayments() {
  return (
    <div className="bg-white mt-4 py-8 px-7 rounded-xl flex justify-center gap-4 flex-wrap">
      <MPSecurePaymentsCard />
      <MPSecurePaymentsCard />
      <MPSecurePaymentsCard />
      <MPSecurePaymentsCard />
      <MPSecurePaymentsCard />
    </div>
  );
}

export default MPSecurePayments;

const MPSecurePaymentsCard = () => {
  return (
    <div className="w-[172px] h-[175px] box-content">
      <div className="w-[75px] h-[75px] m-auto">
        <img
          src="/images/card-1.png"
          alt="logo"
          className="w-[100%] h-[100%]"
        />
      </div>
      <p className="text-sm text-grayBlack font-medium text-center">Secure Payment</p>
      <p className="text-[12px] text-grayBlack text-center">We provide a secure gateway for all your transactions. </p>
    </div>
  );
};
