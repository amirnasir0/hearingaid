// import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailsForm from "../Component/TopForm/PriceForm.js";

const SpecialCTA = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto m-7 flex items-center justify-center relative">
      {/* CTA Button */}
      <button
        onClick={() => setShowPopup(true)}
        className="px-6 py-3 bg-orange-500 text-white text-lg rounded-lg shadow-lg hover:bg-orange-600 transition"
      >
        Download Latest Price List
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={() => {
                setShowPopup(false);
                setFormSubmitted(false);
              }}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
            
            {formSubmitted ? (
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">Thank You!</h2>
                <p>Your details have been submitted successfully.</p>
              </div>
            ) : (
              <>
                <PriceForm onSubmit={handleSubmit} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialCTA;
