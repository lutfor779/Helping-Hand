import React, { useEffect, useState } from "react";
import AboutUs from "../../Services/AboutUs/AboutUs";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Loaders from "../../Shared/Loaders/Loaders";
import Banner from "../Banner/Banner";
import Feedback from "../Feedback/Feedback";
import LatestNews from "../LatestNews/LatestNews";

const Home = () => {
  const [isPreLoader, setIsPreLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsPreLoader(false);
    }, 2500);
  });
  return (
    <div>
      {isPreLoader === true ? (
        <Loaders></Loaders>
      ) : (
        <div>
          <Header />
          <Banner />
          <AboutUs />
          <Feedback />
          <LatestNews />
          <Footer />
        </div>
      )}
    </div>
  );
      };

export default Home;
