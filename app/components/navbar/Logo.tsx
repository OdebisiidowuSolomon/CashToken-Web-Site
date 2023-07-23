"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div className="flex items-center">
      <Image
        className="w-6 md:block cursor-pointer"
        alt="Logo"
        src="/images/logo.png"
        width="34"
        height="34"
        onClick={() => router.push("")}
      />
      <div className="ml-1">
        <Link href={'/'} className="text-lg">CashToken Reward</Link>
        {/* <p className="text-lg 1079xl:text-lg">CashToken Reward</p> */}
      </div>
    </div>
  );
};

export default Logo;
