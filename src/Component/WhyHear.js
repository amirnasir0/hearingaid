import React from "react";


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const WhyHear = () => {
  const features = [
    {
      title: "Transparent Pricing",
      description: "Explore hearing aid price list",
    },
    {
      title: "11+ certified clinics",
      description: "Multiple clinics near you with hundreds of skilled audiologists offering consultation.",
    },
    {
      title: "Protection+ Plan",
      description: "Against theft, loss or damage",
    },
    {
      title: "Lifetime hearing care support",
      description: "Special care for senior citizens offering free home visits",
    },
    {
      title: "Interest free easy EMI plans",
      description: "Transparent 0% EMI options with absolutely no hidden charges",
    },
    {
      title: "Rated 4.9+ by 1200+ customers",
      description: "Highest rated hearing care brand across the country.",
    },
  ];

  return (
    <div className="bg-gray-50 py-8">
      {/* ✅ Content Section */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Insono - #1 Choice for Hearing Aids?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              {/* Icon */}
              <div className="text-orange-600 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" />
                </svg>
              </div>
              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Two Buttons at Bottom of Component */}
       <div className="mt-8 flex justify-center gap-4">
          
          <button
  onClick={scrollToTop}
  className="px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow-lg hover:bg-green-600 transition flex items-center"
>
            Get Started Today!
          </button>

          {/* Call Button Styled as a Button */}
          <button
            onClick={() => window.location.href = "tel:+917742573686"}
            className="px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow-lg hover:bg-green-600 transition flex items-center"
          >
            📞 Call us for Best deals
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyHear;
