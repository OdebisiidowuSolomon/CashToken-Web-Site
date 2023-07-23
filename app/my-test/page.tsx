"use client";

import React, { useState } from "react";
import { sliderItems } from "./data";
import { CustomImageContain, CustomImageCover } from "../product-detail/ProdLeftContainer";

function page() {
  const [index, setIndex] = useState(0);

  const handleControl = (b: any) => {
    console.log(b);
    if (b === "next" && index > -3) {
      setIndex((p) => (p -= 1));
      console.log(b, index);
    } else if (b == "prev" && index < 0) {
      setIndex((p) => (p += 1));
      console.log(b, index);
    }
  };

  return (
    <div className="">
      <div className={`w-[800px] h-[500px] flex overflow-hidden`}>
        <div
          className="w-[100%] h-[100%] flex"
          style={{ translate: `${index * 800}px` }}
        >
          {sliderItems.map((item) => (
            <CustomImageCover key={item.id} image={item.img} />
          ))}
        </div>
      </div>
      <div className="flex bg-green-300">
        <button onClick={() => handleControl("prev")}>Prev</button>
        <p className="p-4">{index}</p>
        <button onClick={() => handleControl("next")}>Next</button>
      </div>
    </div>
  );
}

export default page;
