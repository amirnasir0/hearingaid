import React, { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Where can I get Signia/Seimens hearing aids?",
      answer: (
        <p>Siemens, also know as Signia is a leading hearing aid brand.
    You can purchase <b>Signia hearing aids</b> from Insono Hearing Clinic.<br />
    Rated <b>5.0 by 1200 customers</b>, we offer free trial along with home visits for senior citizen hearing clinics. With <b>13+ years of experience</b>,
    we are a leading brands for Signia Ear machines.</p>
      ),
    },
    {
      question: "What is the price of latest Signia Digital hearing aids in India?",
      answer: (
        <p>
         In India, Signia hearing aids are available at different price points based on technology levels. <br />
  Basic models such as <b>Prompt or Fun SP start</b> at ₹18,000, while premium models like <b>Signia Styletto or Charge&Go </b>can go up to ₹3,00,000.
        </p>
      ),
    },
    {
      question: "Does Signia offer invisible hearing aids?",
      answer: (
        <p>Yes, Signia provides <b>Invisible-in-Canal (IIC)and Completely-in-Canal (CIC)</b> hearing aids, which are discreet and nearly invisible when worn.</p>
      ),
    },
    {
      question: "What is the most discreet ear machine available?",
      answer: (
        <p>
        Signia offers Completely-in-Canal (CIC) and Invisible-in-Canal (IIC) hearing aids, which fit deep inside the ear canal for a nearly invisible appearance.
         Signia’s <b>Silk X and Insio IIC</b> are among the most discreet hearing aids, designed to be virtually invisible while providing excellent sound quality.<br/>
        
        </p>
      ),
    },
    {
      question: "Tell me about Signia Styletto & Charge&Go?",
      answer: (
       <p><b>Signia Styletto</b> is a slim, stylish, and rechargeable hearing aid featuring Bluetooth connectivity, AI-powered sound enhancement, and a sleek design.<br />
        Whereas <b>Signia Charge&Go</b> is a rechargeable hearing aid series that offers long battery life, Bluetooth streaming, and superior speech clarity.</p>

      ),
    },
    {
      question: "Are EMI options available for Signia hearing aids?",
      answer: (
        <p>Yes, We offer 0% Interest EMI options, allowing you to pay in easy monthly installments. Call us for attractive offers on EMI options.</p>
      ),
    },
    {
      question: "Which is the best Signia hearing aid for senior citizens?",
      answer: (
        <p>
          The best hearing aids for seniors should have clear sound processing, 
        easy controls, and rechargeable options. <b>Signia’s Motion X, Charge&Go, and Styletto</b> are great choices.
        </p>
      ),
    },
    {
      question: "Can we use the machine without consultation?",
      answer: (
        <p>
          While it is possible to use a hearing aid without consulting
          professionals, it is not recommended. Consulting an expert audiologist
          ensures proper usage and fitting.
        </p>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm"
          >
            <button
              className="w-full text-left p-4 flex items-center justify-between text-gray-800 font-medium hover:bg-gray-100"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className="text-lg">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      
      {/* Add the button below FAQs */}
      <div className="flex justify-center mt-6">
        <a
          href="tel:+917742573686"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg text-xl font-semibold hover:bg-blue-700 transition"
        >
          Talk to a Hearing Expert – Call Now
        </a>
      </div>
    </div>
  );
};

export default FAQs;
