import React from "react";

const ThankYouPage = () => {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-700">Thank You!</h2>
      <p className="text-center text-gray-500 mt-4">
        Your request has been submitted successfully. Our team will contact you
        shortly.
      </p>
      <p className="text-center text-gray-600 mt-6">
        Meanwhile, you can{" "}
        <a
          href="https://offers.hearwellhearing.in/wp-content/uploads/2024/12/HearWell_HearingPD.pdf"
          className="text-orange-500 hover:underline"
        >
          download the price list
        </a>{" "}
        or contact us via{" "}
        <a
          href="https://api.whatsapp.com/send/?phone=917742573686&text=hi&type=phone_number&app_absent=0"
          className="text-orange-500 hover:underline"
        >
          WhatsApp
        </a>{" "}
        or{" "}
        <a
          href="tel:917742573686"
          className="text-orange-500 hover:underline"
        >
          call us at 77425-73686
        </a>.
      </p>
    </div>
  );
};

export default ThankYouPage;
