import Link from "next/link";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import COLORS from "../../Constants/COLORS";

function NavLinks({path}:{path:string}) {
  return (
    <div className="flex">
      <NavLink path={path === 'about-us'} link="about-us" title="About Us" />
      <NavLink path={path === 'testimonials'} link="testimonials" title="Testimonial" />
      <NavLink path={path === 'services'} title="Services" showArrow />
      <NavLink path={path === 'marketplace'} link="marketplaces" title="Marketplaces" showArrow />
      <NavLink path={path === 'login'} title="Login" link="login" customStyles={{ fontWeight: "500" }} />
      <Button title="Get Started" customStyle={{ marginLeft: 32 }} />
    </div>
  );
}

export default NavLinks;

function NavLink({
  showArrow = false,
  customStyles,
  title,
  link,
  path
}: {
  showArrow?: boolean;
  customStyles?: React.CSSProperties;
  title: string;
  link?: string;
  path: boolean;
}) {
  return (
    <Link
      href={link || "/"}
      className={`text-sm 1079xl:ml-7 ml-3 flex items-center ${path && 'text-primary'}`}
      style={{ ...customStyles }}
    >
      {title} {showArrow && <BiChevronDown />}
    </Link>
  );
}

export function Button({
  title,
  customStyle,
  customClass,
}: {
  title: string;
  customStyle?: React.CSSProperties;
  customClass?: string;
}) {
  return (
    <button
      className={`1079xl:px-5 py-2 ml-1 text-white rounded-[4px] px-3 text-xs 1079xl:text-sm ${customClass}`}
      style={{ backgroundColor: COLORS.primary, ...customStyle }}
    >
      {title}
    </button>
  );
}
