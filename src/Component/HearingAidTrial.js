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


<div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-left space-y-4 sm:space-y-0 sm:space-x-6">
  <div className="flex items-center space-x-4">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c.2 35.5-28.5 64.3-64 64.3l-320.4 0c-35.3 0-64-28.7-64-64l0-160.4-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7 416 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 121 52.8 46.4c8 7 12 15 11 24zM272 192c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0z"/></svg>
    <div>
      <p className="text-xl font-bold">75+</p>
      <p className="text-sm text-gray-600">Clinics</p>
    </div>
  </div>

  <div className="flex items-center space-x-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
    <div>
      <p className="text-xl font-bold">15+</p>
      <p className="text-sm text-gray-600">Years Experience</p>
    </div>
  </div>

  <div className="flex items-center space-x-4">
    <svg xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com 
License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1l0 50.8c27.6 7.1 48 32.2 48 62l0 40c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l0-24c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 24c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-40c0-29.8 20.4-54.9 48-62l0-57.1c-6-.6-12.1-.9-18.3-.9l-91.4 0c-6.2 0-12.3 .3-18.3 .9l0 65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7l0-59.1zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
    <div>
      <p className="text-xl font-bold">100+</p>
      <p className="text-sm text-gray-600">Audiologists</p>
    </div>
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
