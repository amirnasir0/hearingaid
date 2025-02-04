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
    You can purchase <b>Signia hearing aids</b> from Insono Hearing Clinic.
    Rated <b>5.0 by 1200 customers</b>, we offer free trial along with home visits for senior citizen hearing clinics. With <b>13+ years of experience</b>,
    we are a leading brands for Signia Ear machines.</p>
      ),
    },
    {
      question: "What is the price of latest Signia Digital hearing aids in India?",
      answer: (
        <p>
         In India, Signia hearing aids are available at different price points based on technology levels. Basic models such as Prompt or Fun SP start at ₹18,000, while premium models like <b>Signia Styletto or Charge&Go </b>can go up to ₹3,00,000.
        </p>
      ),
    },
    {
      question: "Does Signia offer invisible hearing aids?",
      answer: (
        <p>Yes, Signia provides Invisible-in-Canal (IIC)and Completely-in-Canal (CIC) hearing aids, which are discreet and nearly invisible when worn.</p>
      ),
    },
    {
      question: "Payment Method & Financing",
      answer: (
        <p>
          We accept almost all payment methods, both physical and digital. EMI facilities are available for select banks and through Bajaj Finance.
        </p>
      ),
    },
    {
      question: "What is the authenticity of your Products?",
      answer: (
        <ul className="list-disc ml-6">
          <li>
            Authorized partners of renowned hearing aid companies: Signia, Phonak, Resound, Widex, Unitron, Starkey, Oticon, etc.
          </li>
          <li>
            Professional and qualified audiologists provide the best-in-class service.
          </li>
        </ul>
      ),
    },
    {
      question: "How long does the Hearing Aid’s Battery last?",
      answer: (
        <p>Depending on the model, the battery lasts between 7 to 20 days.</p>
      ),
    },
    {
      question: "Will Hearing Aids treat my Hearing Loss?",
      answer: (
        <p>
          Hearing aids do not restore your hearing but are the only remedy for
          certain types of hearing loss. They help improve hearing and
          communication, enhancing your quality of life.
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
    </div>
  );
};

export default FAQs;
