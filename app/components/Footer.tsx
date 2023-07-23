import React, { CSSProperties, JSX } from "react";
import { Button } from "./navbar/NavLinks";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IconType } from "react-icons";
import { FiClock } from "react-icons/fi";
import { AiFillMail } from "react-icons/ai";
import { BsHeadset, BsTelephoneFill, BsLinkedin } from "react-icons/bs";
import { ImLinkedin2, ImTwitter, ImFacebook } from "react-icons/im";
import { SlSocialInstagram } from "react-icons/sl";
import COLORS from "../Constants/COLORS";

function Footer() {
  return (
    <footer className="bg-black flex py-10 flex-col lg:flex-row vs:px-3 sm:px-14 xl:px-28 md:py-24">
      <FooterContainer customstyle={{}}>
        <FooterHeadItem text="Company Info" />
        <p className="text-white text-sm mb-4">
          Reach out to us anytime and lets create a better future for all
          technology users together, forever. We are open to all types of collab
          offers and tons more.
        </p>
        <FooterIconItem
          Icon={FiClock}
          textOne={"Office hours"}
          textTwo="Monday-Friday 9 AM-5 PM GMT +1"
        />
        <FooterIconItem
          Icon={BsHeadset}
          textOne={"Support hours"}
          textTwo="Monday-Friday 9 AM-5 PM GMT +1"
          textThree="Saturday - Sunday 10am - 2pm GMT +1"
        />
      </FooterContainer>
      <FooterContainer>
        <FooterHeadItem text="Contact Info" />
        <FooterIconItem
          Icon={AiFillMail}
          textOne={"customercare@cashtoken.ng"}
        />
        <FooterIconItem Icon={BsTelephoneFill} textOne={"090-7755-5557"} />
        <FooterIconItem
          Icon={HiOutlineLocationMarker}
          textOne={
            "N0. 177a Moshood Olugbani Street Off Ligali Ayorinde, Victoria Island, Lagos."
          }
        />
      </FooterContainer>
      <FooterContainer>
        <FooterHeadItem text="Quick Links" />
        <FooterIconItem textOne={"About Us"} />
        <FooterIconItem textOne={"Policy"} />
        <FooterIconItem textOne={"Our Blog"} />
        <FooterIconItem textOne={"FAQ"} />
      </FooterContainer>
      <FooterContainer>
        <FooterItem text="Sign up to our newsletter to get the latest updates and news on CashToken Reward " />
        <div className="flex mt-3 flex-col gap-2 xl:flex-row">
          <Input placeholder="Enter Email Address" />
          <Button title="Subscribe" customStyle={{marginLeft:0}} />
        </div>
        <div className="flex mt-7">
          <IconWrapper Icon={ImLinkedin2} />
          <IconWrapper Icon={SlSocialInstagram} />
          <IconWrapper Icon={ImTwitter} />
          <IconWrapper Icon={ImFacebook} />
        </div>
      </FooterContainer>
    </footer>
  );
}

export default Footer;

const FooterIconItem = ({
  Icon,
  textOne,
  textTwo,
  textThree,
}: {
  Icon?: IconType;
  textOne?: string;
  textTwo?: string;
  textThree?: string;
}) => {
  return (
    <div className="flex mb-4">
      <div className="flex-shrink-0">
        {Icon && <Icon className="text-white mt-1 mr-2" size={23} />}
      </div>
      <div>
        {textOne && <FooterItem text={textOne} />}
        {textTwo && <FooterItem text={textTwo} />}
        {textThree && <FooterItem text={textThree} />}
      </div>
    </div>
  );
};

const FooterHeadItem = ({ text }: { text: string }) => {
  return <p className="text-white my-3 mb-5 font-semibold">{text}</p>;
};

const FooterItem = ({
  text,
  customStyle,
}: {
  text: string;
  customStyle?: CSSProperties;
}) => {
  return (
    <p className="text-white text-sm" style={{ ...customStyle }}>
      {text}
    </p>
  );
};

const FooterContainer = ({
  children,
  customstyle,
}: {
  children: React.ReactNode;
  customstyle?: CSSProperties;
}) => {
  return (
    <div className="w-[80%] lg:w-[23%] mr-6 xl:mr-16" style={{ ...customstyle }}>
      {children}
    </div>
  );
};

const Input = ({
  placeholder,
  customClass,
}: {
  placeholder: string;
  customClass?: string;
}) => {
  return (
    <input
      placeholder={placeholder}
      type="text"
      className={`py-2 px-3 rounded-[4px] ${customClass}`}
    />
  );
};

const IconWrapper = ({ Icon }: { Icon: IconType }) => {
  return (
    <div className="p-2 bg-white rounded-full mr-3">
      <Icon color={COLORS.black} size={20} />
    </div>
  );
};
