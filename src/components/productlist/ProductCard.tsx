"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiGitCompare, BiHeart } from "react-icons/bi";
import { CiViewBoard } from "react-icons/ci";
import { FaEye } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const ProductCard = ({ product }) => {
  console.log("title", product);
  const [hovered, setHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div
        className="overflow-hidden w-full max-w-sm border border-gray-200 rounded-lg shadow-md bg-white transition-transform hover:-translate-y-1"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Product Image */}
        <div
          className="relative rounded-md"
          onClick={() => router.push("/product/2")}
        >
          <Image
            src={product.img}
            alt={product.name || "img"}
            width={400}
            height={400}
            className="rounded-t-lg p-3 object-cover rounded-md hover:cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>

        {/* Hover Icons */}
        <div
          className={`absolute top-2 right-2 flex flex-col gap-2 p-2 bg-pink-50 rounded-md transition-transform duration-300 ease-in-out ${
            hovered ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <button className="p-2 bg-gray-100 rounded-full hover:bg-pink-200">
            <BiHeart />
          </button>
          {/* Compare Icon */}
          <button className="p-2 bg-gray-100 rounded-full hover:bg-pink-200">
            <BiGitCompare />
          </button>
          {/* Quick View Icon */}
          <button
            onClick={() => setShowPopup(true)}
            className="p-2 bg-gray-100 rounded-full hover:bg-pink-200"
          >
            <FaEye />
          </button>
        </div>

        {/* Product Details */}
        <div className="md:px-4 px-2 pb-2">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-800 truncate">
              {product?.title || "wdad"}
            </span>
            <span className="text-sm font-semibold text-gray-500 truncate">
              {product.description || "ring"}
            </span>
            <label className="text-sm text-gray-500">{product.brand}</label>
          </div>

          <div className="flex items-center justify-between">
            <label className="font-bold text-gray-800 font-sans py-1">
              {product.price}
            </label>
            <div className="flex items-center text-gray-600">
              <span className="text-yellow-400 text-sm mr-1">
                ★ {product.rating}
              </span>
              <span className="text-xs">({product.reviews || 15})</span>
            </div>
          </div>
        </div>
        <div className="md:px-4 px-2 pb-2">
          {/* Product Info */}
          <div className="w-full">
            <button className="w-full gap-2 font-poppins text-sm font-semibold bg-gray-50 py-2 px-4 rounded hover:bg-pink-50 text-base transition-colors">
              + Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          setShowPopup(false);
        }}
        className={`fixed w-full h-full top-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
          showPopup ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`relative bg-white rounded-lg shadow-lg w-11/12 max-w-4xl transform transition-transform duration-300 ${
            showPopup ? "scale-100" : "scale-90"
          }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 p-2 text-white hover:text-gray-800"
            onClick={() => setShowPopup(false)}
          >
            <IoMdClose className="w-7 h-7" />
          </button>

          {/* Popup Content */}
          <div className="flex flex-col">
            {/* Heading Section */}
            <div className="bg-pink-700 px-6 pt-4 rounded-t-lg">
              <h2 className="text-xl font-bold text-white">
                {product.name || "Product Title"}
              </h2>
              <p className="text-sm text-white">{product.brand}</p>
            </div>

            {/* Body Section */}
            <div className="p-6 flex flex-col md:flex-row gap-6">
              {/* Image Section */}
              <div className="flex-shrink-0">
                <Image
                  src={product.img}
                  alt={product.description}
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              {/* Details Section */}
              <div className="flex-grow flex flex-col justify-between">
                {/* Product Description */}
                <p className="text-gray-700 font-baskervville text-2xl mb-4">
                  {product.description}
                </p>

                {/* Price and Stock */}
                <div className="mb-4">
                  <label className="text-xl font-bold text-gray-800">
                    {product.price}
                  </label>
                  {product.stockStatus && (
                    <p className="text-sm text-red-600 mt-2">
                      {product.stockStatus}
                    </p>
                  )}
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-600">Category</p>
                    <p className="text-gray-700">
                      {product.category || "Jewelry"}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600">Material</p>
                    <p className="text-gray-700">
                      {product.material || "Gold"}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600">Weight</p>
                    <p className="text-gray-700">{product.weight || "10g"}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600">Dimensions</p>
                    <p className="text-gray-700">
                      {product.dimensions || "5x5x2 cm"}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <button className="bg-pink-700 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                    Add to Cart
                  </button>
                  <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="bg-pink-700 px-6 py-4 rounded-b-lg">
              <p className="text-sm text-white text-center">
                * Prices may vary depending on availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
