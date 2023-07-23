import React from "react";
import { Star } from "./MPMegaDeals";

function MPTestimonials() {
  return (
    <div className="bg-white mt-4 rounded-xl py-4 px-2 mb-7">
      <div className="h-11 px-2 mb-3">
        <p className="text-2xl font-medium text-center">Testimonials</p>
      </div>
      <div className="mx-4 my-3 gap-7 flex flex-wrap mb-8 pb-20 justify-center">
        <MPTestimonialsCard />
        <MPTestimonialsCard />
        <MPTestimonialsCard />
      </div>
    </div>
  );
}

export default MPTestimonials;

const MPTestimonialsCard = () => {
  return (
    <div className="w-[363px] h-[281px] hover:shadow-md transition-all rounded-lg box-content p-3 relative mb-11">
      <div className="w-[96px] h-[96px] flex justify-center items-center m-auto">
        <img
          src="/images/MP-Quote-Vector.png"
          alt="logo"
          className="w-[64px] h-[40px]"
        />
      </div>
      <p className="text-sm text-grayBlack">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        sagittis nibh sit amet lectus condimentum rhoncus. Nunc varius fringilla
        mattis. Curabitur tristique massa{" "}
      </p>
      <div className="flex justify-center my-3">
        <Star size={16} />
      </div>
      <div>
        <MPTestimonialsCardPassPort />
      </div>
    </div>
  );
};

const MPTestimonialsCardPassPort = () => {
  return (
    <div className="absolute bottom-[-30%] left-[30%] w-[152px] flex flex-col items-center">
      <div className="h-[100px] w-[100px] rounded-full">
        <img
          src="/images/whitelady.png"
          alt="image"
          className="h-[100%] w-[100%] object-contain"
        />
      </div>
      <p className="font-medium text-black my-1">Elena Michael</p>
      <p className="text-sm text-grayBlack text-center">CEO Real Estate Group</p>
    </div>
  );
};
