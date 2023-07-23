"use client";

import React, { createRef, useRef, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { Button } from "../components/navbar/NavLinks";

function AcctProfileDetailsRight() {
  return (
    <div className="bg-white rounded-xl flex-[0.75]">
      <div className="p-5 border-b-2 border-gray-200">
        <p className="font-medium text-xl text-grayBlack">Profile Details</p>
      </div>

      <div className="p-5">
        <AcctProfileDetailsRightEditProfile />
      </div>
    </div>
  );
}

export default AcctProfileDetailsRight;

const AcctProfileDetailsRightEditProfile = () => {
  return (
    <div>
      <AcctProfileDetailsRightEditProfileInput
        label="First Name"
        value="John"
      />
      <AcctProfileDetailsRightEditProfileInput
        label="Middle Name"
        value="Ebuka"
      />
      <AcctProfileDetailsRightEditProfileInput label="Last Name" value="Doe" />
      <AcctProfileDetailsRightEditProfileInput
        label="Email Address"
        value="justnnenna@gmail.com"
      />
      {/* <AcctProfileDetailsRightEditProfileDoubleInput
        label="Mobile Number"
        value="8156789034"
      /> */}
      <AcctProfileDetailsRightEditProfileInput
        label="Mobile Number"
        value="2348156789034"
      />
      <AcctProfileDetailsRightEditProfileInput label="Gender" value="Female" />
      <AcctProfileDetailsRightEditProfileInput
        label="Date of Birth"
        value="12-9-1900"
      />
      <div>
        <Button title="Save" customClass="w-[100%] mt-2" />
      </div>
    </div>
  );
};

const AcctProfileDetailsRightEditProfileInput = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="mb-2">
      <p className="text-sm font-medium my-1 text-secondaryText">{label}</p>
      <div
        className={`flex bg-siteBG mb-3 w-[100%] items-center rounded-md border-2 border-transparent ${
          focused && "border-primary"
        } `}
      >
        <input
          type="text"
          className="p-5 py-3 flex-[0.95] bg-transparent outline-none"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={value}
          onChange={() => {}}
        />
        <div className="flex-[0.05]">
          <BiPencil size={24} />
        </div>
      </div>
    </div>
  );
};

const AcctProfileDetailsRightEditProfileDoubleInput = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="mb-2">
      <p className="text-sm font-medium my-1 text-secondaryText">{label}</p>
      <div
        className={`flex bg-white mb-3 w-[100%] items-center rounded-md border-2 border-transparent ${
          focused && "border-primary"
        } `}
      >
        <div className="flex-[0.05] mr-3">
          <input
            type="text"
            className="p-5 py-3 bg-siteBG outline-none"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={234}
            onChange={() => {}}
          />
        </div>

        <input
          type="text"
          className="p-5 py-3 flex-[0.90] bg-siteBG outline-none"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={value}
          onChange={() => {}}
        />
        <div className="flex-[0.05] bg-siteBG h-[100%]">
          <BiPencil size={24} />
        </div>
      </div>
    </div>
  );
};
