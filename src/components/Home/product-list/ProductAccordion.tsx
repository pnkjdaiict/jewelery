"use client";
import React, { useState } from "react";

const ProductAccordion = () => {
  const [openSection, setOpenSection] = useState(""); // Tracks which accordion section is open

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <div className="w-full  mx-auto py-10  px-2 bg-pink-50">
      
      <div className="space-y-4">
        {/* Description Section */}
        <div className="border border-gray-200 rounded-md">
          <button
            onClick={() => toggleSection("description")}
            className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-semibold text-lg  hover:bg-pink-100"
          >
            <span>Product Description</span>
            <span className="text-gray-500">
              {openSection === "description" ? "−" : "+"}
            </span>
          </button>
          {openSection === "description" && (
            <div className="p-4 text-gray-700 text-sm border-t border-gray-200">
              <p>
                This elegant ring features a tapered shank design, an exquisite
                oval opal centerpiece, and a trio of dazzling diamonds. Perfect
                for special occasions, the ring combines timeless elegance with
                superior craftsmanship. Made from high-quality materials, this
                piece is designed to last and maintain its brilliance for years.
              </p>
            </div>
          )}
        </div>

        {/* Specification Section */}
        <div className="border border-gray-200 rounded-md">
          <button
            onClick={() => toggleSection("specifications")}
            className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-semibold text-lg hover:bg-pink-100"
          >
            <span>Specifications</span>
            <span className="text-gray-500">
              {openSection === "specifications" ? "−" : "+"}
            </span>
          </button>
          {openSection === "specifications" && (
            <div className="p-4 text-gray-700 text-sm border-t border-gray-200">
              <ul className="list-disc pl-5 space-y-2">
                <li>Material: 14k White Gold</li>
                <li>Center Stone: Oval Opal (1.5 carats)</li>
                <li>
                  Side Stones: Trio of Natural Diamonds (0.3 carats total)
                </li>
                <li>Ring Size: Available in sizes 5 to 9</li>
                <li>Packaging: Premium illuminated gift box</li>
                <li>Care Instructions: Avoid exposure to harsh chemicals</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductAccordion;
