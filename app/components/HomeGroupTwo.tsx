import React from "react";
import { HeaderImage, HeaderText, Item, SubHeaderText } from "./HomeGroupOne";
import { Button } from "./navbar/NavLinks";

function HomeGroupTwo() {
  return (
    <div className="vs:px-5 vs:py-6 sm:px-14 px-24 py-20 flex-col-reverse lg:flex-row flex items-center bg-[url('/images/home-banner2.png')] bg-fixed">
      <HeaderImage imgPath="/images/home-group2.png" />
      <div className="flex-[0.5] ml-9 vs:m-0">
        <HeaderText text="Shop to Win Life Changing Cash" />
        <SubHeaderText text="The CashToken is an electronic reward designed to offer a life changing cash opportunity to its beneficiaries. " />
        <Item
          title="2. Ticket to into the CashToken Draw"
          content="CashToken beneficiaries stand a chance to win between $10- $100m weekly in the National CashToken draw"
        />
        <Item
          title="3. Guaranteed instant cash back and cashtokens on every order"
          content="Customers who shop on the CashToken marketplace  receive guaranteed instant cashback and CashTokens to their reward wallet."
        />
        <Button title="Shop Now" />
      </div>
    </div>
  );
}

export default HomeGroupTwo;
