import React, { useState, useEffect } from "react";
import ThankYouPage from "./Thankyou";
import useWebhook from "../useWebhook";

const DetailsForm = () => {
  const [formVisible, setFormVisible] = useState(true);
  const [thankYouVisible, setThankYouVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [problem, setProblem] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const sendToWebhook = useWebhook();

  useEffect(() => {
    trackPageView();
  }, []);

  const trackPageView = async () => {
    try {
      const visitorData = await getVisitorData();
      const ip = await getIPAddress();
      const payload = {
        event: "page_view",
        visitorData: { ...visitorData, ip },
      };
      await sendToWebhook(payload);
    } catch (error) {
      console.error("Page view tracking error:", error);
    }
  };

  const validatePhoneNumber = (phone) => /^[5-9]\d{9}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || !name || !problem) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      setErrorMessage("Invalid phone number. Enter a valid 10-digit number.");
      return;
    }

    setErrorMessage("");
    const refurl = document.referrer || "N/A";
    const source = window.location.href;
    const visitorData = await getVisitorData();
    const ip = await getIPAddress();

    const data = {
      phone: "91" + phone,
      name,
      problem,
      refurl,
      source,
      medium: "price download popup",
      visitorData: { ...visitorData, ip },
    };

    try {
      await sendToWebhook(data);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "main_lead_submission",
        phone: "91" + phone,
        name,
        referrer: refurl,
        source,
      });

      console.log("GTM Event Triggered: lead_submission");

      setFormVisible(false);
      setThankYouVisible(true);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to submit the form. Please try again later.");
    }
  };

  const getVisitorData = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      gclid: urlParams.get("gclid") || "",
      fbclid: urlParams.get("fbclid") || "",
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      pageURL: window.location.href,
      browserId: getBrowserId(),
      sessionId: getSessionId(),
    };
  };

  const getBrowserId = () => {
    let id = localStorage.getItem("browserId");
    if (!id) {
      id = "browser-" + crypto.randomUUID();
      localStorage.setItem("browserId", id);
    }
    return id;
  };

  const getSessionId = () => {
    let sessionId = sessionStorage.getItem("sessionId");
    if (!sessionId) {
      sessionId = "session-" + crypto.randomUUID();
      sessionStorage.setItem("sessionId", sessionId);
    }
    return sessionId;
  };

  const getIPAddress = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("IP fetch error:", error);
      return "unknown";
    }
  };

  if (thankYouVisible) {
    return <ThankYouPage name={name} />;
  }

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-700">
        Apply for a Free Signia Hearing Aid Trial
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Get a <b>FREE Hearing Test & Home Visit</b> – Limited Offer!
      </p>
      {formVisible && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Mobile Number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Tell us your problem"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
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
