"use client";

import React, { useState } from "react";

const ProductDetailRightside = ({}) => {
  const title = "Engagement Ring";
  const rating = 4.5;
  const price = 1056;
  const originalPrice = 1173;
  const discount = 10;
  const offer = {
    gift: "FREE Jewelry Gift",
    timer: "21h: 01m: 32s",
    link: "#",
  };
  const stoneShape = "Square";
  const shapes = ["circle", "oval", "pear", "emerald", "square"];
  const accentStone = "Diamond";
  const accentColors = ["#fff", "#f00", "#0f0", "#00f"];
  const metal = "14K";
  const metals = ["14K", "18K", "PT"];
  const stoneOrigin = "Natural";
  const selectButtonLabel = "SELECT THIS SETTING";
  const shippingCost = 12;
  const deliveryTime = "01h : 31m : 32s";
  const deliveryDate = "Nov 25";
  const [selectedAccent, setSelectedAccent] = useState(null);

  return (
    <div className="container mx-auto ml-10 pb-8">
      {/* Product Title */}
      <h1 className="text-2xl md:text-2xl font-normal font-poppins text-gray-800 text-left">
        {
          "Square Side Stone Reverse Tapered Diamond Studded Shank Engagement Ring"
        }
      </h1>

      {/* Rating */}
      <div className="flex justify-start items-center space-x-2 text-gray-600 mt-2">
        <span className="text-yellow-400 text-lg">★</span>
        <span className="text-sm">
          {rating ? `${rating} Reviews` : "No Reviews Yet"}
        </span>
      </div>

      {/* Pricing Section */}
      <div className="flex justify-start items-baseline space-x-2 mt-4">
        <span className="text-2xl font-poppins font-normal text-gray-900">
          {price ? `$${price}` : "Price Not Available"}
        </span>
        {originalPrice && (
          <>
            <span className="line-through text-gray-500">${originalPrice}</span>
            {discount && (
              <span className="text-green-600 text-sm font-bold">
                ({discount}% Off)
              </span>
            )}
          </>
        )}
      </div>

      {/* Free Gift & Offer Timer */}
      {offer ? (
        <div className="bg-pink-50 text-pink-700 p-2 mt-4 rounded flex justify-between items-center">
          <div>
            <span className="text-sm font-medium">
              🎁 {offer.gift || "Gift Not Available"}
            </span>
          </div>
          <div>
            <span className="text-sm">
              {offer.timer || "Time Left: Not Available"}
            </span>
            {offer.link && (
              <a
                href={offer.link}
                className="text-blue-600 text-sm ml-2 underline"
              >
                View Offer
              </a>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 text-gray-600 p-4 mt-4 rounded">
          <p>Special offers are not available at this time.</p>
        </div>
      )}

      {/* Product Options */}
      <div className="mt-4 border-dashed border-t  pt-4">
        {/* Center Stone Shape */}
        <div>
          <h3 className="text-sm font-poppins font-semibold text-gray-600">
            Center Stone Shape: {stoneShape || "Not Specified"}
          </h3>
          <div className="flex space-x-4 mt-2">
            {shapes?.length > 0 ? (
              shapes.map((shape, index) => (
                <div
                  key={index}
                  className={`border ${
                    shape === stoneShape ? "border-gray-800" : "border-gray-300"
                  } p-2 rounded-md hover:border-gray-800 cursor-pointer`}
                >
                  <span className="block w-6 h-6 bg-gray-200"></span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No shapes available</p>
            )}
          </div>
        </div>

        {/* Accent Stone */}
        <div className="mt-4 border-t border-dashed pt-4">
          <h3 className="text-sm font-poppins font-semibold text-gray-600">
            Accent Stone: {accentStone || "Not Specified"}
          </h3>
          <div className="flex space-x-4 mt-2">
            {accentColors?.length > 0 ? (
              accentColors.map((color, index) => (
                <div
                  key={index}
                  className={`border ${
                    color === selectedAccent
                      ? "border-gray-800"
                      : "border-gray-300"
                  } p-2 rounded-md hover:border-gray-800 cursor-pointer`}
                  style={{ backgroundColor: color }}
                ></div>
              ))
            ) : (
              <p className="text-gray-500">No accent stones available</p>
            )}
          </div>
        </div>

        {/* Metal */}
        <div className="mt-4 border-t border-dashed pt-4">
          <h3 className="text-sm font-poppins font-semibold text-gray-600">
            Metal: {metal || "Not Specified"}
          </h3>
          <div className="flex space-x-4 mt-2">
            {metals?.length > 0 ? (
              metals.map((type, index) => (
                <div
                  key={index}
                  className={`border ${
                    type === metal ? "border-gray-800" : "border-gray-300"
                  } p-2 rounded-md hover:border-gray-800 cursor-pointer`}
                >
                  <span className="block w-6 h-6 text-center">{type}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No metals available</p>
            )}
          </div>
        </div>

        {/* Stone Origin */}
        <div className="mt-4 border-t pt-4 border-dashed">
          <h3 className="text-sm font-poppins font-semibold text-gray-600">
            Stone Origin
          </h3>
          <div className="flex space-x-4 mt-2">
            {["Natural", "Lab-Grown"].map((origin, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-sm rounded border ${
                  origin === stoneOrigin
                    ? "bg-gray-800 text-white border-gray-800"
                    : "border-gray-300"
                } hover:border-gray-800`}
              >
                {origin}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Select Setting Button */}
      <button className="w-full mt-6 py-3 bg-pink-700 text-white font-semibold rounded hover:bg-gray-800 transition">
        {selectButtonLabel || "Add To Cart"}
      </button>

      {/* Shipping Info */}
      <div className="mt-4 text-sm text-gray-700">
        <p>
          🚚 Express Shipping{" "}
          {shippingCost ? (
            <>
              <span className="line-through">${shippingCost}</span>{" "}
              <span className="text-green-600 font-bold">Free</span>
            </>
          ) : (
            "Not Available"
          )}
        </p>
        <p>
          {deliveryTime ? (
            <>
              Order Within <span className="text-red-500">{deliveryTime}</span>{" "}
              & get it by <span className="font-semibold">{deliveryDate}</span>
            </>
          ) : (
            "Delivery details not available"
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductDetailRightside;
