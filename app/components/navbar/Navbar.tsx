"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

// 1079

function Navbar({ path }: { path: string }) {
  const [isExpand, setIsExpand] = useState(false);

  const handlePress = () => {
    console.log(isExpand);

    setIsExpand((p) => !p);
  };

  return (
    <div>
      <div className="flex justify-between items-center px-5 py-5 1079xl:px-28 sticky border-b-2 border-gray-100">
        <Logo />
        <div className="hidden md:block">
          <NavLinks path={path} />
        </div>
        <div onClick={handlePress} className="block md:hidden">
          {!isExpand ? <RxHamburgerMenu size={23} /> : <GrClose size={23} />}
        </div>
      </div>
      <div
        className="pb-2 bg-white overflow-hidden"
        style={{
          height: isExpand ? "250px" : 0,
          transition: "all ease-in-out 450ms",
        }}
      >
        <NavLinks path={path} />
      </div>
    </div>
  );
}

export default Navbar;
