import React from "react";
import video from "../Assets/video.mp4";
import DetailsForm from "../Component/TopForm/detailsForm.js";
import googleLogo from "../Assets/Google.svg";
import SpecialCTA from "../Component/SpecialCTA.js";
import trustpilotLogo from "../Assets/trustpilot.svg";
import secure from "../Assets/secure.jpg";

const HearingAidTrial = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-8 px-4 -mt-7">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Section */}
        <div className="flex-1 w-full md:w-auto">
          <h1 className="text-2xl md:text-4xl font-bold mt-6">
            Best Hearing Aids in India – Compare Prices & Buy Signia Hearing Aids
          </h1>
          <ul className="mt-4 space-y-2 text-lg">
            <li className="flex items-center">
              <span className="text-blue-600 font-bold text-lg mr-2">✔</span>
              Nearly invisible design
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 font-bold text-lg mr-2">✔</span>
              Bluetooth connectivity
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 font-bold text-lg mr-2">✔</span>
              Rechargeable Machine
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 font-bold text-lg mr-2">✔</span>
              0% EMI Options
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 font-bold text-lg mr-2">✔</span>
              Special offers for Senior Citizens
            </li>
          </ul>

          {/* Video Section */}
          <div className="mt-6">
            <video
              src={video}
              controls
              autoPlay
              muted
              loop
              className="w-full rounded-lg shadow-lg"
            ></video>
            <SpecialCTA />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full md:w-auto bg-white rounded-lg shadow-lg p-8">
          <DetailsForm />
          <p className="text-xs text-center text-gray-500 mt-4">
            By proceeding, you are authorizing us to contact you via WhatsApp,
            SMS, RCS & Email for providing consultation, updates, and sharing
            relevant product information & offers. You also agree to our T&C and
            Privacy Policy.
          </p>

          {/* Rating Card */}
          


<div className="mt-6 flex flex-row justify-between items-center text-left flex-nowrap space-x-6">
  <div className="flex items-center flex-1 space-x-4">
    🏥  
    <div>
      <p className="text-xl font-bold">75+</p>
      <p className="text-sm text-gray-600">Clinics</p>
    </div>
  </div>

  <div className="flex items-center flex-1 space-x-4">
    ⚡ 
    <div>
      <p className="text-xl font-bold">15+</p>
      <p className="text-sm text-gray-600">Years Experience</p>
    </div>
  </div>

  <div className="flex items-center flex-1 space-x-4">
    👨‍⚕️
    <div>
      <p className="text-xl font-bold">100+</p>
      <p className="text-sm text-gray-600">Audiologists</p>
    </div>
  </div>
</div>




           

            
           
        </div>
      </div>
    </div>
  );
};

export default HearingAidTrial;
