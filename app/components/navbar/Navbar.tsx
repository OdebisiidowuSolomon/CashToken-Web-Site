import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

// 1079

function Navbar() {
  return (
    <div className="flex justify-between items-center px-5 py-5 1079xl:px-28 sticky border-b-2 border-gray-100">
      <Logo />
      <div className="hidden md:block">
        <NavLinks />
      </div>
    </div>
  );
}

export default Navbar;
