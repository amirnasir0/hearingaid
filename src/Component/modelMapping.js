import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Ensures reactivity to URL changes
import prompt from "../Assets/signia-prompt.jpg";
import styletto from "../Assets/signia-styletto.jpg";
import defaultimg from "../Assets/image3.jpg";
import silk1 from"../Assets/silk_ix.webp";
import pure  from"../Assets/image5.jpg";
import insio from "../Assets/image1.jpg"
import intuis from "../Assets/image4.jpg";
// Define model mappings with bullet points
const modelMappings = {
  //sigina prompt series
    "Signia Prompt P": {
      image: prompt,
      headline: "Signia Prompt P - Reliable and Clear",
      bulletPoints: [
        "Essential sound clarity",
        "User-friendly controls",
        "Durable and affordable",
        "Comfortable fit for daily use",
        "16 Channels",
      ],
    },
  
    "Signia Prompt SP": {
      image: prompt,
      headline: "Signia Prompt SP - Enhanced Hearing",
      bulletPoints: [
        "Improved noise reduction",
        "Clear and natural sound",
        "Lightweight and ergonomic",
        "Easy-to-use volume adjustments",
        "16 Channels",
      ],
    },
  
    "Signia Prompt Custom": {
      image: prompt,
      headline: "Signia Prompt Custom - Smart and Adaptive",
      bulletPoints: [
        "Adaptive sound technology",
        "Enhanced speech clarity",
        "Durable and long-lasting battery",
        "Comfortable all-day wear",
        "16 Channels",
      ],
    },
  //Intuis Series=================
    "Intuis 4.2": {
      image: intuis,
      headline: "Intuis 4.2 - High Performance",
      bulletPoints: [
        "Advanced noise cancellation",
        "Premium sound processing",
        "Long battery life",
        "Ideal for various environments",
        "16 Channels",
      ],
    },
  
    "Intuis 4.1": {
      image: intuis,
      headline: "Intuis 4.1 - Cutting-Edge Sound Experience",
      bulletPoints: [
        "Top-tier sound quality",
        "Automatic noise adaptation",
        "Ultra-fast processing",
        "Designed for maximum comfort",
        "16 Channels",
      ],
    },
    "Intuis 4.0": {
      image: intuis,
      headline: "Intuis 4.0 - Enhanced Hearing",
      bulletPoints: [
        "Improved noise reduction",
        "Clear and natural sound",
        "Lightweight and ergonomic",
        "Easy-to-use volume adjustments",
        "12 Channels",
      ],
    },
  

 //pure Series=====
 
  "pure 1IX": {
    image: pure,
    headline: "Pure C&G 1IX - Simple and Effective",
    bulletPoints: [
      "Clear and natural sound",
      "User-friendly controls",
      "Reliable and durable",
      "Comfortable for everyday use",
      "16 Channels",
    ],
  },

  "pure 2IX": {
    image: pure,
    headline: "Pure C&G 2IX - Enhanced Clarity",
    bulletPoints: [
      "Improved noise reduction",
      "Lightweight and ergonomic",
      "Easy-to-use volume adjustments",
      "Long-lasting battery",
      "24 Channels",
    ],
  },

  "pure 3IX": {
    image: pure,
    headline: "Pure C&G 3IX - Smart and Adaptive",
    bulletPoints: [
      "Adaptive sound technology",
      "Better speech focus",
      "Comfortable all-day wear",
      "Durable and long-lasting battery",
      "32 Channels",
    ],
  },

  "pure 5IX": {
    image: pure,
    headline: "Pure C&G 5IX - High Performance",
    bulletPoints: [
      "Advanced noise cancellation",
      "Premium sound processing",
      "Ideal for various environments",
      "Long battery life",
      "36 Channels",
    ],
  },

  "pure 7IX": {
    image: pure,
    headline: "Pure C&G 7IX - Ultimate Comfort and Clarity",
    bulletPoints: [
      "Top-tier sound quality",
      "Automatic noise adaptation",
      "Ultra-fast processing",
      "Designed for maximum comfort",
      "48 Channels",
    ],
  },


  //Styletto series========================

    "Styletto 1IX": {
      image: styletto,
      headline: "Styletto 1IX - Sleek and Smart",
      bulletPoints: [
        "Slim and stylish design",
        "Essential sound clarity",
        "Fast-charging battery",
        "Comfortable all-day wear",
        "16 Channels",
      ],
    },
  
    "Styletto 2IX": {
      image: styletto,
      headline: "Styletto 2IX - Modern and Versatile",
      bulletPoints: [
        "AI-powered sound processing",
        "Enhanced Bluetooth connectivity",
        "Rechargeable with portable case",
        "Ideal for everyday use",
        "24 Channels",
      ],
    },
  
    "Styletto 3IX": {
      image: styletto,
      headline: "Styletto 3IX - Advanced Performance",
      bulletPoints: [
        "Adaptive sound management",
        "Improved speech focus",
        "Wireless streaming capabilities",
        "Sleek and ergonomic fit",
        "32 Channels",
      ],
    },
  
    "Styletto 5IX": {
      image: styletto,
      headline: "Styletto 5IX - High-Tech Comfort",
      bulletPoints: [
        "Premium sound processing",
        "AI-driven noise reduction",
        "Extended battery life",
        "Designed for active lifestyles",
        "36 Channels",
      ],
    },
  
    "Styletto 7IX": {
      image: styletto,
      headline: "Styletto 7IX - Ultimate Sound Experience",
      bulletPoints: [
        "Top-tier sound quality",
        "Automatic scene adaptation",
        "Ultra-fast processing",
        "Luxury design with maximum comfort",
        "48 Channels",
      ],
    },
//Insio Series ===========
  "Insio 1AX": {
    image: insio,
    headline: "Insio C&G 1AX - Discreet and Effective",
    bulletPoints: [
      "Nearly invisible design",
      "Natural and clear sound",
      "User-friendly controls",
      "Comfortable for extended wear",
      "16 Channels",
    ],
  },

  "Insio 2AX": {
    image: insio,
    headline: "Insio C&G 2AX - Enhanced Clarity",
    bulletPoints: [
      "Improved noise reduction",
      "Lightweight and ergonomic fit",
      "Easy-to-use volume adjustments",
      "Long-lasting battery life",
      "16 Channels",
    ],
  },

  "Insio 3AX": {
    image: insio,
    headline: "Insio C&G 3AX - Smart and Adaptive",
    bulletPoints: [
      "Adaptive sound technology",
      "Better speech focus in noise",
      "Comfortable for all-day use",
      "Durable and efficient battery",
      "24 Channels",
    ],
  },

  "Insio 5AX": {
    image: insio,
    headline: "Insio C&G 5AX - High Performance",
    bulletPoints: [
      "Advanced noise cancellation",
      "Premium sound processing",
      "Ideal for various environments",
      "Long battery life",
      "32 Channels",
    ],
  },

  "Insio 7AX": {
    image: insio,
    headline: "Insio C&G 7AX - Ultimate Comfort and Clarity",
    bulletPoints: [
      "Top-tier sound quality",
      "Automatic noise adaptation",
      "Ultra-fast processing",
      "Designed for maximum comfort",
      "48 Channels",
    ],
  },

// silkSeries===============================
  "Silk 1IX": {
    image: silk1,
    headline: "Silk 1IX - Discreet and Comfortable",
    bulletPoints: [
      "Nearly invisible in the ear",
      "Natural sound quality",
      "No need for ear impressions",
      "Ideal for first-time users",
      "16 Channels",
    ],
  },

  "Silk 2IX": {
    image: silk1,
    headline: "Silk 2IX - Compact and Smart",
    bulletPoints: [
      "Soft silicone sleeves for instant fit",
      "Enhanced speech clarity",
      "Wireless connectivity",
      "Adaptive sound processing",
      "24 Channels",
    ],
  },

  "Silk 3IX": {
    image: silk1,
    headline: "Silk 3IX - Advanced and Adaptive",
    bulletPoints: [
      "Real-time noise cancellation",
      "Better speech focus in noisy environments",
      "Bluetooth streaming capability",
      "Rechargeable with fast charging",
      "32 Channels",
    ],
  },

  "Silk 5IX": {
    image: silk1,
    headline: "Silk 5IX - High Performance",
    bulletPoints: [
      "Crystal-clear sound",
      "AI-powered sound adjustments",
      "Seamless connectivity",
      "Extended battery life",
      "36 Channels",
    ],
  },

  "Silk 7IX": {
    image: silk1,
    headline: "Silk 7IX - Premium and Powerful",
    bulletPoints: [
      "Best-in-class sound quality",
      "Automatic scene detection",
      "Ultra-fast processing",
      "Enhanced comfort for all-day use",
      "48 Channels",
    ],
  },
};

// Default fallback
const defaultContent = {
  image: defaultimg,
  headline: "Best Hearing Aids in India – Compare Prices & Buy Signia Hearing Aids",
  bulletPoints: [
    "Nearly invisible design",
    "Bluetooth connectivity",
    "Rechargeable Machine",
    "0% EMI Options",
    "Special offers for Senior Citizens",
  ],
};

const ModalMapping = () => {
  const location = useLocation(); // Reactively get URL params
  const [matchedModel, setMatchedModel] = useState(defaultContent);

  useEffect(() => {
    // Extract search query from URL
    const urlParams = new URLSearchParams(location.search);
    const searchKeyword = urlParams.get("utm_term")?.toLowerCase().trim() || "";

    // Attempt to find a matching model
    let foundModel = defaultContent;
    for (const model in modelMappings) {
      if (searchKeyword.includes(model.toLowerCase())) {
        foundModel = modelMappings[model];
        break;
      }
    }

    setMatchedModel(foundModel);
  }, [location.search]); // Runs every time the URL changes

  return (
    <div>
      <h1 className="text-2xl mb-2 md:text-4xl font-bold mt-6">{matchedModel.headline}</h1>
      <img src={matchedModel.image} alt="Hearing Aid Model" className="w-full rounded-lg shadow-lg" />

      <ul className="mt-4 space-y-2 text-lg">
        {matchedModel.bulletPoints.map((point, index) => (
          <li key={index} className="flex items-center">
            <span className="text-blue-600 font-bold text-lg mr-2">✔</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModalMapping;
