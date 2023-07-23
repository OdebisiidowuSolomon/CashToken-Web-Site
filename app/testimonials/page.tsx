"use client";

import React from "react";
import TestimonialBanner from "./TestimonialBanner";
import {
  TestimonialCard,
  TestimonialContainer,
} from "../components/HomeSectionSix";
import Footer from "../components/Footer";

function page() {
  return (
    <div>
      <TestimonialBanner />
      <div className="vs:px-5 sm:px-14 md:px-28 my-16">
        <TestimonialContainer />
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <TestimonialCard key={item} subtitle="Company Name" />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
