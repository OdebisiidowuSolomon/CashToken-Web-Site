"use client";

import React, { useState } from "react";
import COLORS from "../Constants/COLORS";
import { IconType } from "react-icons";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";
import {BiSolidLockAlt } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";

function ManageAcctLeft({ activeTab }: { activeTab: string }) {
  const ManageAcctLeftItem = ({
    Icon,
    title,
    active,
    path,
    showDownBtn = false,
    onPress,
  }: {
    Icon: IconType;
    title: string;
    active?: boolean;
    path: string;
    showDownBtn?: boolean;
    onPress?: () => void;
  }) => {
    return (
      <Link href={path} onClick={onPress}>
        <div
          className={`flex items-center gap-4 mb-3 p-3 ${active && "bg-light"}`}
        >
          <Icon className="text-2xl" color={COLORS.black} />
          <p className={`text-black`}>{title}</p>
          {showDownBtn && (
            <AiOutlineRight className="text-2xl ml-auto" color={COLORS.black} />
          )}
        </div>
      </Link>
    );
  };

  const [showAlt, setShowAlt] = useState(false);

  return (
    <div className="flex-[0.25] flex-shrink-0 bg-white rounded-xl">
      <div className="p-6">
        <div className="flex items-center my-6">
          <p className="text-4xl text-center">👋</p>
          <p className="text-xl font-semibold text-grayBlack">Hello John!</p>
        </div>
        <ManageAcctLeftItem
          Icon={BsPerson}
          title="Profile Details"
          active={activeTab === "profile-details"}
          path="profile-details"
        />
        <div>
          <ManageAcctLeftItem
            Icon={BiSolidLockAlt}
            title="Security Settings"
            active={activeTab === "change-password"}
            path="change-password"
            showDownBtn
            onPress={() => setShowAlt((e) => !e)}
          />
          {showAlt && (
            <div className="flex flex-col px-5">
              <Link href={"change-password"} className="text-black mb-4">
                Change Password
              </Link>
              <Link href={"delete-account"} className="text-black mb-4">
                Delete Account
              </Link>
            </div>
          )}{" "}
        </div>
      </div>
    </div>
  );
}

export default ManageAcctLeft;
