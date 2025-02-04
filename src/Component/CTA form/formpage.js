import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

const FormPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsappConsent, setWhatsappConsent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Validate phone number: must start with a digit between 5-9 and be 10 digits long
  const validatePhoneNumber = (phone) => /^[5-9]\d{9}$/.test(phone);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!phone || !name) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      setErrorMessage("Invalid phone number. Enter a valid 10-digit number.");
      return;
    }

    if (!whatsappConsent) {
      setErrorMessage("Please give consent to receive WhatsApp notifications.");
      return;
    }

    setErrorMessage(""); // Clear error messages

    const refurl = document.referrer || "N/A";
    const source = window.location.href;

    const data = {
      phone: "91" + phone,
      name,
      refurl,
      source,
      medium: "main form", // Replace with unique ID if necessary
    };

    try {
      // Send data to the server (Webhook)
      await fetch("https://chat-xbot.webspecia.in/api/iwh/ecf71fd692f9ede5e7593a573a864830", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      

      console.log("Form submitted successfully:", data);
      navigate("/thank-you");
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to submit form. Please try again later.");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Navbar />
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
            Best Offers on Hearing Aids
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Enter your name and number to get the Latest Hearing Aids Price List directly on WhatsApp!
          </p>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Phone Input */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Your Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* WhatsApp Consent Checkbox */}
            <div className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                id="whatsapp"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                onChange={(e) => setWhatsappConsent(e.target.checked)}
              />
              <label htmlFor="whatsapp" className="text-gray-600 text-sm">
                Receive appointment details & special offers on WhatsApp
              </label>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormPage;
