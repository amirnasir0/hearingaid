import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../Assets/iic_insioix.jpg";
import image2 from "../Assets/silk_ix.webp";
import image4 from "../Assets/phonak_virto_iic.png";
import image5 from "../Assets/widex_evoke.webp";
import image8 from "../Assets/Resound-Linx-3d-Hearing-aid.webp";
import PriceForm from "../Component/TopForm/PriceForm.js";

const SmallCardComponent = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => setFormSubmitted(true);

  const cards = [
    { image: image1, title: "Signia Insio IX", rating: 5 },
    { image: image2, title: "Signia Silk IX", rating: 5 },
    { image: image4, title: "Phonak Virto IIC Series", rating: 5 },
    { image: image5, title: "Widex Evoke Series", rating: 5 },
    { image: image8, title: "Resound Linx 3d", rating: 5 },
  ];

  const renderStars = (rating) =>
    [...Array(rating)].map((_, i) => <span key={i} className="text-yellow-500">&#9733;</span>);

  return (
    <div className="bg-gray-100 py-6">
    <h2 className="text-2xl font-bold text-center mb-6">
       Best Selling Invisible Hearing Aids
      </h2>
      <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <div className="flex gap-4 px-4">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg flex flex-col w-60 shrink-0 snap-center">
              <div className="h-40 w-full">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <div className="p-3 text-center">
                <h2 className="text-lg font-bold mb-1">{card.title}</h2>
                <div className="flex justify-center mb-2">{renderStars(card.rating)}</div>
                <button className="mt-2 bg-orange-600 text-white px-3 py-2 rounded hover:bg-orange-700 w-full" onClick={() => setShowPopup(true)}>
                  Get Best Price
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button onClick={() => { setShowPopup(false); setFormSubmitted(false); }} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
              ✕
            </button>
            {formSubmitted ? (
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">Thank You!</h2>
                <p>Your details have been submitted successfully.</p>
              </div>
            ) : (
              <PriceForm onSubmit={handleSubmit} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallCardComponent;
