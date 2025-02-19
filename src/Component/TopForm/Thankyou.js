import React from "react";

const ThankYouPage = ({ name = "Guest" }) => {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 md:p-8 rounded-lg max-w-lg w-full text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
          🎉 Congratulations, {name}! <br />
          You’ve Unlocked an Exclusive Discount!
        </h2>
        <p className="text-gray-500 mt-4 text-sm md:text-base">
          Your special offer is now active! But hurry—this extra discount is valid only for the next <strong>10 minutes</strong>! ⏳📞
          Call now to claim your offer before it expires!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <a
            href="tel:+917742573686"
            className="bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold w-full md:w-auto text-center hover:bg-orange-600 transition duration-300"
          >
           Call Now
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=917742573686&text=hi&type=phone_number&app_absent=0"
            className="bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold w-full md:w-auto text-center hover:bg-green-600 transition duration-300"
          >
           WhatsApp Now
          </a>
        </div>

        {/* Download Price List */}
        <p className="text-gray-600 mt-6 text-sm md:text-base">
          Meanwhile, you can{" "}
          <a
            href="https://prices.insonohearing.com/wp-content/uploads/2024/12/Insono.pdf"
            className="text-orange-500 font-semibold hover:underline"
          >
            download the price list
          </a>.
        </p>
      </div>
    // </div>
  );
};

export default ThankYouPage;
