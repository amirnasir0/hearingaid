import React from "react";

const ComparisonTable = () => {
  const offers = [
    "Free Hearing Check-Ups",
    "Guidance By Experienced Audiologists",
    "Free Hearing Aid Device Trials",
    "Free Fine-Tunings",
    "Extended Warranty",
    "Availability Of Top Hearing Aid Brands"
  ];

  return (
    <div className="bg-gray-100 py-10 flex justify-center">
      <div className="max-w-7xl w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Exclusive Offers At Insono Hearing Solutions
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-3 text-lg font-semibold">Offers</th>
                <th className="border border-gray-300 p-3 text-lg font-semibold bg-blue-600 text-white">
                  Insono Hearing Solutions Clinic
                </th>
                <th className="border border-gray-300 p-3 text-lg font-semibold">
                  Other Hearing Aids Clinics
                </th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="border border-gray-300 p-3 text-gray-700 font-medium">
                    {offer}
                  </td>
                  <td className="border border-gray-300 p-3  text-white text-lg">✔</td>
                  <td className="border border-gray-300 p-3 text-lg">✖</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
