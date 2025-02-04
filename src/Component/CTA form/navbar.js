import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import img from "./lo.webp";

const Navbar = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white py-4 fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-28 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={img} // Replace with the actual path to your logo
              alt="Logo"
              className="h-8"
            />
            {/* <span className="text-xl font-bold text-gray-700">YourBrand</span> */}
          </div>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition"
            onClick={() => (window.location.href = "tel:917742573686")} // Directing to the phone number
          >
          📞 77425-73686
          </button>
        </div>
      </nav>
      {/* Page content */}
      <div className="pt-20">
        {" "}
        {/* Added padding to push content below the navbar */}
        {/* Your other content here */}
      </div>
    </div>
  );
};

export default Navbar;
