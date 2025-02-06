import React from "react";
import customer1 from "../customer/customer1.png"
import st1 from "../customer/st1.jpg"
import st2 from "../customer/st2.jpg"
import st3 from "../customer/st3.jpg"
const CustomerReviews = () => {
  const testimonials = [
    {
      id: 1,
      stars: 5,
      quote:
        "The audiologist at Insono Hearing visited my home, helped me with <b>Signia Silk IX</b> allowing me to regain my natural hearing levels.",
      name: "Mrs. Gupta",
      role: "",
      image: st1, // Replace with actual image path
    },
    {
      id: 2,
      stars: 5,
      quote:
        "There’s a big difference now. Khushi responds when we call out to her. I’m extremely happy for my daughter and 100% satisfied.",
      name: "Khushi",
      role: "Father: Mr. Vinay",
      image: st2, // Replace with actual image path
    },
    {
      id: 3,
      stars: 5,
      quote:
        "These hearing aids have not just transformed my mother's life; they've also deeply influenced our entire family.",
      name: "Piyush Gupta",
      role: "",
      image: st3, // Replace with actual image path
    },
  ];

  return (
    <div className="bg-orange-50 py-8 px-4">
      {/* Header Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        Trusted by Over <b>40,000 Hearing Aid Users</b> Across India
      </h2>
      <div className="mb-8">
        <img
          src={customer1} // Replace with actual full-width image URL
          alt="Customer Reviews Banner"
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            {/* Stars */}
            <div className="flex items-center text-yellow-500 mb-4">
              {Array.from({ length: testimonial.stars }).map((_, i) => (
                <span key={i} className="text-xl">
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-gray-700 mb-4">
              <p className="text-lg italic">“{testimonial.quote}”</p>
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
