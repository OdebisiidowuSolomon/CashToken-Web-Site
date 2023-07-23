import React from "react";
import { LabelAndInput } from "../register/page";
import { Button } from "../components/navbar/NavLinks";

function AcctChangePasswordRight() {
  return (
    <div className="bg-white rounded-xl flex-[0.75]">
      <div className="p-5 border-b-2 border-gray-200">
        <p className="font-medium text-xl text-grayBlack">Change Password</p>
      </div>

      <div className="w-[100%] px-5">
        <AcctChangePasswordRightLabelAndInput label="Current Password" placeholder="" />
        <AcctChangePasswordRightLabelAndInput label="New Password" placeholder="" />
        <AcctChangePasswordRightLabelAndInput label="Confirm Password" placeholder="" />

        <div>
            <Button title="Save" customClass='mt-3 w-[100%]' />
        </div>
      </div>
    </div>
  );
}

export default AcctChangePasswordRight;

const AcctChangePasswordRightLabelAndInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <div className="mt-3">
      <p className="font-medium text-sm text-secondaryText mb-1">{label}</p>
      <input type="text" className="p-3 px-5 text-sm w-[100%] bg-siteBG" placeholder={placeholder} />
    </div>
  );
};
