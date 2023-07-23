import React from "react";
import { CustomImageContain } from "../product-detail/ProdLeftContainer";
import { Button } from "../components/navbar/NavLinks";

function page() {
  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center bg-siteBG">
      <div className="w-[100%] 1100xl:w-[35vw] py-5 m-auto bg-siteBG flex flex-col items-center mt-[8%]">
        <div className="w-[109px] h-[40px]">
          <CustomImageContain image="/images/CTR-1.png" />
        </div>
        <p className="text-xl font-semibold my-4 text-grayBlack">
          Create Your Account
        </p>

        <div className="w-[70%]">
          <LabelAndInput label="First Name" placeholder="John" />
          <LabelAndInput label="Surname" placeholder="Doe" />
          <LabelAndInput
            label="Email Address"
            placeholder="example@gmail.com"
          />
          <LabelAndInput label="Phone Number" placeholder="+2348145757892" />
          <LabelAndInput label="Password" placeholder="********" />

          <div className="mt-3">
            <Button title="Sign Up" customClass="w-[100%]" />
          </div>
          <div className="mt-3 relative">
            <p className="text-center">OR</p>
            <div className="w-[45%] h-[1px] bg-gray-500 absolute left-0 top-[50%]" />
            <div className="w-[45%] h-[1px] bg-gray-500 absolute right-0 top-[50%]" />
          </div>
        </div>
        <div>
          <ThirdPartySigning
            image="/images/facebook.png"
            title="Continue with Facebook"
          />
          <ThirdPartySigning
            image="/images/google.png"
            title="Continue with Google"
          />
        </div>
        <div className="flex gap-1 mt-6 items-center">
          <p className="font-medium text-grayBlack">Already have an account?</p>
          <p className="text-primary">Log In</p>
        </div>
      </div>
    </div>
  );
}

export default page;

const ThirdPartySigning = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <div className="flex items-center gap-3 bg-white p-2 my-4 rounded-sm">
      <div className="w-[24px] h-[24px]">
        <CustomImageContain image={image} />
      </div>
      <p className="font-medium text-grayBlack">{title}</p>
    </div>
  );
};

export const LabelAndInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <div className="mt-3">
      <p className="font-medium text-sm text-secondaryText mb-1">{label}</p>
      <input type="text" className="p-3 px-5 text-sm w-[100%]" placeholder={placeholder} />
    </div>
  );
};
