import React from "react";
import image from "../Assets/lo.webp";

function Navbar() {
  return (
    <nav className="">
      <div className="max-w-5xl mx-auto flex md:flex-row">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <a href="/" className="flex items-center">
            <img src={image} alt="Logo" className="h-10 w-auto" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
