import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import HearingAidTrial from "./Component/HearingAidTrial";
import SpecialCTA from "./Component/SpecialCTA";
import FeaturesSection from "./Component/featuresection";
import CardComponent from "./Component/CardComponent";
import WhyHear from "./Component/WhyHear";
import AllRate from "./Component/AllRate";
import CustomerReviews from "./Component/CustomerReviews";
import FormPage from "./Component/CTA form/formpage";
import ThankYouForm from "./Component/CTA form/thankyouform";
import Navbar from "./Component/CTA form/navbar";
import Phonak from "./Phonak/Phonak";
import FAQs from "./Component/FAQ";
import ComparisonTable from "./Component/compare";
import VideoTestimonials from "./Component/VideoTestomonial";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Placing it here so it remains persistent across routes */}
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <HearingAidTrial />
              <SpecialCTA />
              <FeaturesSection />
              <ComparisonTable />
              <CardComponent />
              <WhyHear />
              <AllRate />
              <CustomerReviews />
              <VideoTestimonials/>
              <FAQs />
            </>
          }
        />

        {/* Form Page Route */}
        <Route path="/form" element={<FormPage />} />

        {/* Thank You Page Route */}
        <Route path="/thank-you" element={<ThankYouForm />} />

        {/* Phonak Page Route */}
        <Route path="/phonak" element={<Phonak />} />
      </Routes>
    </Router>
  );
};

export default App;
