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
import ComparisonTable from "../Component/compare";
import VideoTestimonials from "../Component/VideoTestomonial";
const Phonak = () => {
  return (
    <>
      <Navbar />
      <HearingAidTrial />
      <SpecialCTA />
      <FeaturesSection />
      <ComparisonTable/>
      <CardComponent />
      <WhyHear />
      <AllRate />
      <CustomerReviews />
      <VideoTestimonials/>
      <FAQs/>
      <SpecialCTA />
    </>
  );
};

export default Phonak;
