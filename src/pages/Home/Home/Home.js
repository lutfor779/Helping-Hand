import React from "react";
import AboutUs from "../../Services/AboutUs/AboutUs";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Feedback from "../Feedback/Feedback";
import LatestNews from "../LatestNews/LatestNews";

const Home = () => {

  return (
    <div>
      <Header />
      <Banner />
      <AboutUs />
      <Feedback />
      <LatestNews />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
