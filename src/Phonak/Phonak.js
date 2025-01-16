// src/Phonak.js
import React from "react";
import Navbar from "../Component/CTA form/navbar";
import HearingAidTrial from "../Component/HearingAidTrial";
import SpecialCTA from "../Component/SpecialCTA";
import FeaturesSection from "../Component/featuresection";
import CardComponent from "../Phonak/component/CardComponent";
import WhyHear from "../Component/WhyHear";
import AllRate from "../Component/AllRate";
import CustomerReviews from "../Component/CustomerReviews";
import FAQs from "../Component/FAQ";
const Phonak = () => {
  return (
    <>
      <Navbar />
      <HearingAidTrial />
      <SpecialCTA />
      <FeaturesSection />
      <CardComponent />
      <WhyHear />
      <AllRate />
      <CustomerReviews />
      <FAQs/>
      <SpecialCTA />
    </>
  );
};

export default Phonak;
