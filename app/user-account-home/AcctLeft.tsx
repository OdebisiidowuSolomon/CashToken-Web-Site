"use client";

import React from "react";
import COLORS from "../Constants/COLORS";
import { IconType } from "react-icons";
import { BsPerson, BsSuitHeart } from "react-icons/bs";
import { GoListUnordered } from "react-icons/go";
import { MdCardGiftcard, MdOutlineRateReview, MdStorefront } from "react-icons/md";
import { FiMail } from "react-icons/fi";

function AcctLeft() {
  const AcctLeftItem = ({
    Icon,
    title,
    active,
  }: {
    Icon: IconType;
    title: string;
    active?: boolean;
  }) => {
    return (
      <div className="flex items-center gap-4 mb-4">
        <Icon className="text-2xl" color={active ? COLORS.primary : COLORS.black} />
        <p className={`${active ? "text-primary" : "text-black"}`}>{title}</p>
      </div>
    );
  };

  return (
    <div className="flex-[0.25] flex-shrink-0 bg-white rounded-xl">
      <div className="p-6">
        <AcctLeftItem Icon={BsPerson} title="Account" active />
        <AcctLeftItem Icon={GoListUnordered} title="Orders" />
        <AcctLeftItem Icon={BsSuitHeart} title="Wishlist" />
        <AcctLeftItem Icon={FiMail} title="Inbox" />
        <AcctLeftItem Icon={MdCardGiftcard} title="CashToken Points" />
        <AcctLeftItem Icon={BsSuitHeart} title="Voucher" />
        <AcctLeftItem Icon={MdOutlineRateReview} title="Pending Reviews" />
        <AcctLeftItem Icon={MdStorefront} title="Stores You Follow" />
      </div>
    </div>
  );
}

export default AcctLeft;
