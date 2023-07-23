"use client";

import React from "react";
import COLORS from "../Constants/COLORS";
import { IconType } from "react-icons";
import { BsPerson, BsSuitHeart } from "react-icons/bs";
import { GoListUnordered } from "react-icons/go";
import {
  MdCardGiftcard,
  MdOutlineRateReview,
  MdStorefront,
} from "react-icons/md";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

function AcctLeft({ activeTab }: { activeTab: string }) {
  const AcctLeftItem = ({
    Icon,
    title,
    active,
    path,
  }: {
    Icon: IconType;
    title: string;
    active?: boolean;
    path: string;
  }) => {
    return (
      <Link href={path}>
        <div className="flex items-center gap-4 mb-5">
          <Icon
            className="text-2xl"
            color={active ? COLORS.primary : COLORS.black}
          />
          <p className={`${active ? "text-primary" : "text-black"}`}>{title}</p>
        </div>
      </Link>
    );
  };

  return (
    <div className="flex-[0.25] flex-shrink-0 bg-white rounded-xl">
      <div className="p-6">
        <AcctLeftItem
          Icon={BsPerson}
          title="Account"
          active={activeTab === "Account"}
          path="user-account-home"
        />
        <AcctLeftItem
          Icon={GoListUnordered}
          title="Orders"
          active={activeTab === "Orders"}
          path="user-account-orders"
        />
        <AcctLeftItem
          Icon={BsSuitHeart}
          title="Wishlist"
          active={activeTab === "Wishlist"}
          path="user-account-wishlist"
        />
        <AcctLeftItem
          Icon={FiMail}
          title="Inbox"
          active={activeTab === "Inbox"}
          path="user-account-inbox"
        />
        <AcctLeftItem
          Icon={MdCardGiftcard}
          title="CashToken Points"
          active={activeTab === "CashTokenPoints"}
          path="user-account-cashtoken"
        />
        <AcctLeftItem
          Icon={BsSuitHeart}
          title="Voucher"
          active={activeTab === "Voucher"}
          path="user-account-voucher"
        />
        <AcctLeftItem
          Icon={MdOutlineRateReview}
          title="Pending Reviews"
          active={activeTab === "PendingReviews"}
          path="pending-reviews"
        />
        <AcctLeftItem
          Icon={MdStorefront}
          title="Stores You Follow"
          active={activeTab === "Stores"}
          path="stores-you-follow"
        />
      </div>
      <div className="p-4 pt-4 border border-gray-100">
        <Link href={'profile-details'} className="my-2" >Manage Account</Link>
        <p className="my-2">Address Book</p>
        <p className="my-2">Become a Seller</p>
      </div>
    </div>
  );
}

export default AcctLeft;
