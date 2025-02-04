import React, { useState } from "react";
import img1 from "../Assets/image1.jpg";
import img2 from "../Assets/image2.jpg";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/image4.png";
import img5 from "../Assets/image5.png";
import { useNavigate } from "react-router-dom";
import DetailsForm from "../component/TopForm/detailsForm";

const CardComponent = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = () => setFormSubmitted(true);

  const cards = [
    {
      image: img1,
      title: "Phonak Audeo Paradise",
      rating: 5,
      features: [
        "Easy smartphone control via app",
        "Nearly invisible design",
        "Slim RIC",
        "Crystal clear hearing",
      ],
    },
    {
      image: img2,
      title: "Phonak Naida Paradise",
      rating: 5,
      features: [
        "Easy smartphone control via app",
        "Slim RIC",
        "Rechargeable with brand warranty",
        "Crystal clear hearing",
      ],
    },
    {
      image: img3,
      title: "Phonak Sky Lumity",
      rating: 5,
      features: [
        "BTE hearing aid",
        "Outstanding speech clarity",
        "Powerful Bluetooth connectivity ",
        "SmartPhones connectivity",
      ],
    },
    {
      image: img4,
      title: "Phonak Audeo Lumity Life",
      rating: 5,
      features: [
        "New AutoSense OS™",
        "Outstanding speech clarity",
        "Wireless Recharging",
        "Tinnitus options",
      ],
    },
    {
      image: img5,
      title: "Phonak Audeo Lumity Slim",
      rating: 5,
      features: [
        "Easy smartphone control via app",
        "Nearly invisible design",
        "Phonak Xperience technology",
        "Crystal clear hearing",
      ],
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="text-yellow-500">
        &#9733;
      </span>
    ));
  };

  return (
    <div className="bg-gray-100 py-10">
      <div
        className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex space-x-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg flex flex-col w-80 shrink-0"
            >
              {/* Image Section */}
              <div className="h-48 w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content Section */}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                <div className="flex items-center mb-4">
                  {renderStars(card.rating)}
                </div>
                <ul className="text-gray-700 list-disc ml-4 space-y-1">
                  {card.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button
                  className="mt-4 bg-orange-600 text-white px-4 py-2 rounded w-full hover:bg-orange-700"
                  onClick={() => setShowPopup(true)}
                >
                  Get Price Estimate Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Popup Section */}
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
              <DetailsForm onSubmit={handleSubmit} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
