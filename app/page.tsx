import Banner from "./components/Banner";
import MarqueeHeader from "./components/MarqueeHeader";
import HomeGroupOne from "./components/HomeGroupOne";
import HomeGroupTwo from "./components/HomeGroupTwo";
import HomeGroupThree from "./components/HomeGroupThree";
import HomeGroupFour from "./components/HomeGroupFour";
import HomeSectionFive from "./components/HomeSectionFive";
import HomeSectionSix from "./components/HomeSectionSix";
import HomeSectionBanner from "./components/HomeSectionBanner";
import HomeSectionEight from "./components/HomeSectionEight";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="pb-0">
      <Banner />
      <MarqueeHeader />
      <HomeGroupOne />
      <HomeGroupTwo />
      <HomeGroupThree />
      <HomeGroupFour />
      <HomeSectionFive />
      <HomeSectionSix />
      <HomeSectionBanner />
      <HomeSectionEight />
      <Footer />
    </div>
  );
}
