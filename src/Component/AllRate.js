import React from "react";
import RatingCard from "./RatingCards";
import google from "../Assets/Google.svg"; // Add Google rating logo
import trust from "../Assets/trustpilot.svg"; // Add Trustpilot rating logo
const AllRate = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-100">
      {/* Google Rating */}
      <RatingCard
        platform="Google"
        rating="4.3"
        icon={google}
        additionalInfo={<p className="text-yellow-500 text-xl text-center md:text-left">★★★★★</p>}
      />

      {/* Trustpilot Rating */}
      <RatingCard
        platform="Trustpilot"
        rating="4.3"
        icon={trust}
        additionalInfo={
          <p className="text-green-500 text-xl flex justify-center md:justify-start gap-1">
            ★★★★☆
          </p>
        }
      />

      {/* Success Rate */}
      <RatingCard
        platform="Success Rate"
        rating="97%"
        icon="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
        additionalInfo={
          <div className="text-yellow-500 text-xl flex justify-center md:justify-start gap-1">
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        }
      />
    </div>
  );
};

export default AllRate;
