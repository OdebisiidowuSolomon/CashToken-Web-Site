import React from "react";
import { Button } from "../components/navbar/NavLinks";

function AcctDeleteRight() {
  return (
    <div className="bg-white rounded-xl flex-[0.75]">
      <div className="p-5 border-b-2 border-gray-200">
        <p className="font-medium text-xl text-grayBlack">Delete Account</p>
      </div>

      <div className="p-5">
        <div className="w-[90%] 804xl:w-[80%] m-auto">
          <p className="text-center font-medium">We hate to see you go </p>
          <p className="text-center text-sm my-3">
            We want you to be aware that deleting your account would erase your
            data from all CashToken platforms before you do so. If that&apos;s
            what you want, please proceed by telling us why you want to delete
            your account and confirm it’s you by entering your password.
          </p>
        </div>

        <div>
          <input
            type="text"
            className="w-[100%] mb-3 p-3 bg-siteBG"
            placeholder="Johndoe@gmail.com"
          />

          <div className="my-2">
            <p className="mb-2">Why do you want to delete your account</p>
            <textarea cols={30} rows={10} className="w-[100%] mb-3 p-3 bg-siteBG"></textarea>
          </div>

          <div>
            <p className="mb-2">Enter Password</p>
            <input type="text" className="w-[100%] mb-3 p-3 bg-siteBG" />
          </div>

          <Button title="Continue" customClass="w-[100%] mt-3" />
        </div>
      </div>
    </div>
  );
}

export default AcctDeleteRight;
