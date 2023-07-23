import React from "react";

function MPCallToAction() {
  return (
    <div className="flex justify-center flex-row h-[500px] gap-5 mb-7">
      <div className="1100xl:flex-[0.5] bg-red-200">
        <img
          src="/images/CTA-main-img.png"
          alt="logo"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="hidden 1100xl:flex-[0.5] 1100xl:flex gap-5">
        <div className="flex-[0.65] bg-yellow-200">
          <img
            src="/images/Rectangle-345.png"
            alt="logo"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="flex flex-col flex-[0.35] gap-5">
          <div className="flex-[0.5] bg-purple-200">
            <img
              src="/images/Rectangle-324.png"
              alt="logo"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="flex-[0.5] bg-green-200">
            <img
              src="/images/Rectangle-325.png"
              alt="logo"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MPCallToAction;
