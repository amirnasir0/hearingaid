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
          <div className="mt-6 p-4 rounded-lg flex items-center gap-4 text-center overflow-x-auto">
            <div className="flex items-center space-x-4">

<div className="mt-6 grid grid-cols-3 gap-4 text-center">
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 mx-auto text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12h3m4 0h-1M4 6h16M4 18h16M4 12h3m4 0h3m-4 6V6m4 6V6m-4 6v6m4 0v-6"
      />
    </svg>
    <p className="text-xl font-bold">75+</p>
    <p className="text-sm text-gray-600">Clinics</p>
  </div>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 mx-auto text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m9 1a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <p className="text-xl font-bold">15+</p>
    <p className="text-sm text-gray-600">Years Experience</p>
  </div>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 mx-auto text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.1 9a3 3 0 11-4.2 0m4.2 0a3.5 3.5 0 01-4.2 0m4.2 0A5.5 5.5 0 108.9 9m8.4 0a5.5 5.5 0 00-8.4 0m6.4 4l1.6 2H6l1.6-2M4 15l1 5m14-5l-1 5"
      />
    </svg>
    <p className="text-xl font-bold">100+</p>
    <p className="text-sm text-gray-600">Audiologists</p>
  </div>
</div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HearingAidTrial;
