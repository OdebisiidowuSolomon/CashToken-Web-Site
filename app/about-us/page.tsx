import React from "react";
import Navbar from "../components/navbar/Navbar";
import AboutBanner from "./AboutBanner";
import AboutSecondSection from "./AboutSecondSection";
import AboutGoals from "./AboutGoals";
import AboutMeetTheTeam from "./AboutMeetTheTeam";
import HomeSectionSix from "../components/HomeSectionSix";
import { TransformLivesCard } from "../components/HomeSectionEight";
import Footer from "../components/Footer";

function page() {
  return (
    <div>
      <AboutBanner />
      <AboutSecondSection />
      <AboutGoals />
      <AboutMeetTheTeam />
      <HomeSectionSix subtitle="See what our clients say about us" />
      <div className="px-0 sm-px-14 lg:px-28 pb-10 md:py-24">
        <TransformLivesCard />
      </div>
      <Footer />
    </div>
  );
}

export default page;
