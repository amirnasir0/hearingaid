import React, { useState } from "react";
import ThankYouPage from "./Thankyou";
import emailjs from "@emailjs/browser";

const DetailsForm = () => {
  const [formVisible, setFormVisible] = useState(true);
  const [thankYouVisible, setThankYouVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [problem, setProblem] = useState("");
  const [whatsappConsent, setWhatsappConsent] = useState(false); // State for checkbox
  const [errorMessage, setErrorMessage] = useState("");

  // Validate phone number
  const validatePhoneNumber = (phone) => /^[5-9]\d{9}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!phone || !name || !problem) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      setErrorMessage("Invalid phone number. Enter a valid 10-digit number.");
      return;
    }

    setErrorMessage(""); // Clear error messages
    const refurl = document.referrer || "N/A";
    const source = window.location.href;

    const data = {
      phone: "91" + phone,
      name,
      problem,
      refurl,
      source,
      medium: "price download popup", // Replace with unique ID if necessary
    };

    try {
      // Send data to server
      await fetch("https://chat-xbot.webspecia.in/api/iwh/ecf71fd692f9ede5e7593a573a864830", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Send email via EmailJS
      // await emailjs.send(
      //   "service_49sjwjf", // Replace with your EmailJS service ID
      //   "template_s4z0rd3", // Replace with your EmailJS template ID
      //   {
      //     name: data.name,
      //     phone: data.phone,
      //     problem: data.problem,
      //     refurl: data.refurl,
      //     source: data.source,
      //     email: "shubhamkumar83216@gmail.com", // Recipient email address
      //   },
      //   "eeWEv-3oUdlR-8zN-" // Replace with your EmailJS public key
      // );

      // Show thank you page
      setFormVisible(false);
      setThankYouVisible(true);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to submit the form. Please try again later.");
    }
  };

  if (thankYouVisible) {
    return <ThankYouPage />;
  }

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-700">
        Book Your Hearing Aid Trial
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Fill in your details to claim your free trial and consult top audiologists.
      </p>
      {formVisible && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Mobile Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <textarea
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="Tell us your problem"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default DetailsForm;
