import React from "react";
import { CustomImageContain } from "../product-detail/ProdLeftContainer";
import { Button } from "../components/navbar/NavLinks";
import { LabelAndInput } from "../register/page";

function page() {
  return (
    <div className="bg-siteBG w-[100%] h-[100%]">
      <div className="w-[100%] 1100xl:w-[35vw] py-5 m-auto flex flex-col items-center pt-[5%]">
        <div className="w-[109px] h-[40px]">
          <CustomImageContain image="/images/CTR-1.png" />
        </div>
        <div className="">
          <p className="text-4xl text-center">👋</p>
        </div>
        <p className="text-xl font-semibold my-4 text-grayBlack">
          Welcome Back!
        </p>
        <p className="font-medium">Login to your account</p>

        <div className="w-[70%]">
          <LabelAndInput
            label="Email Address"
            placeholder="example@gmail.com"
          />
          <LabelAndInput label="Password" placeholder="********" />
          <p className="text-xs text-[#5D5FEF] font-medium mt-1">
            Forgot Password
          </p>
          <div className="mt-3">
            <Button title="Login" customClass="w-[100%]" />
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
          <p className="font-medium text-grayBlack">Don&apos;t have an account?</p>
          <p className="text-primary">Create One</p>
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
