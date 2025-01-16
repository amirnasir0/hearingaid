import React from "react";

const HearingAidForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="flex flex-col items-center">
        <img
          src="logo.png" // Replace with your logo URL
          alt="Insono Hearing Solutions"
          className="h-16 mb-4"
        />
        <p className="text-2xl font-bold text-orange-500">
          Best Offers on Hearing Aids
        </p>
        <p className="text-gray-600 mt-2 text-center">
          Enter your name and number to get{" "}
          <span className="text-orange-500">Latest Hearing Aids Price List</span>{" "}
          directly on WhatsApp!
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6 w-full max-w-md">
        <form>
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Phone Input */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Your Phone Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Get Price List on WhatsApp
            </button>
          </div>
        </form>
      </div>

      {/* Contact Section */}
      <div className="mt-6">
        <p className="text-blue-600 font-bold flex items-center gap-2">
          <span className="material-icons">phone</span>
          6204260510
        </p>
      </div>
    </div>
  );
};

export default HearingAidForm;
