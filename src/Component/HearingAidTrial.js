import React from "react";
import video from "../Assets/video.mp4";
import DetailsForm from "../Component/TopForm/detailsForm.js";
import googleLogo from "../Assets/Google.svg";
import SpecialCTA from "../Component/SpecialCTA.js"
import trustpilotLogo from "../Assets/trustpilot.svg";
import secure from "../Assets/secure.jpg";


const HearingAidTrial = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-8 px-4 -mt-7">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:flex-row flex-col">
        {/* Left Section */}
        <div className="flex-1 w-full md:w-auto">
          <h1 className="text-2xl md:text-4xl font-bold mt-6">
           Signia Digital Hearing Aids for Clear Hearing
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
              Rechargable Machine
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 font-bold text-lg mr-2">✔</span>
              0% EMI Options
            </li>
                 <li className="flex items-center">
              <span className="text-blue-600 font-bold text-lg mr-2">✔</span>
              Special offers for Senior Citizen
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
          <div className="mt-6 p-4 rounded-lg flex flex-row flex-nowrap items-center gap-4 text-center overflow-x-auto">
            <div className="flex items-center space-x-4">
              <img src={googleLogo} alt="Google Rating" className="h-4" />
              <div>
                <p className="font-semibold">4.9/5</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src={trustpilotLogo} alt="Trustpilot Rating" className="h-4" />
              <div>
                <p className="font-semibold">4.8/5</p>
                <p className="text-green-500">★★★★★</p>
              </div>
            </div>

       <div className="flex items-center space-x-4">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Secure Rating" className="h-4" />
              <div>
                <p className="font-semibold">98%</p>
                <p className="text-black-500">Success Rate</p>
              </div>
            </div>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default HearingAidTrial;
