"use client";

import React from "react";

export default function NavBar() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth"});
        }
    }

  return (
    <nav className="bg-[#003366] text-white flex justify-between items-center py-3 px-6 fixed right-0 left-0 top-0 z-50 shadow-md">
      {/* Left: Hitotsubashi text */}
      <div className="text-xl font-bold tracking-wide">
        Taste Tokyo
      </div>

      {/* Right: Buttons */}
      <div className="flex space-x-6">
        <button
          onClick={() => scrollToSection("map-section")}
          className="px-5 py-2 rounded-md font-semibold hover:bg-[#004080] transition"
        >
          Map
        </button>
        <button
          onClick={() => scrollToSection("list-section")}
          className="px-5 py-2 rounded-md font-semibold hover:bg-[#004080] transition"
        >
          List
        </button>
      </div>
    </nav>
  );
}
