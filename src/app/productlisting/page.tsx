"use client";
import React, { useState } from "react";
import ProductCard from "../../components/productlist/ProductCard";

const productsData = [
  {
    id: 1,
    name: "Elegant Opal Ring",
    img: "/categories/1.webp",
    price: "$299",
    description: "Beautiful opal ring with diamonds",
    brand: "Jewelry Co.",
    rating: 4.5,
    reviews: 22,
    category: "Rings",
    stockStatus: "In Stock",
  },
  {
    id: 2,
    name: "Diamond Stud Earrings",
    img: "/categories/2.webp",
    price: "$199",
    description: "Sparkling diamond earrings",
    brand: "Glamour",
    rating: 4.8,
    reviews: 34,
    category: "Earrings",
    stockStatus: "In Stock",
  },
  {
    id: 3,
    name: "Gold Bracelet",
    img: "/categories/3.webp",
    price: "$399",
    description: "Classic gold bracelet",
    brand: "Luxury",
    rating: 4.2,
    reviews: 18,
    category: "Bracelets",
    stockStatus: "Limited Stock",
  },
  {
    id: 4,
    name: "Sapphire Necklace",
    img: "/categories/4.webp",
    price: "$599",
    description: "Elegant sapphire necklace",
    brand: "Royal Gems",
    rating: 4.9,
    reviews: 42,
    category: "Necklaces",
    stockStatus: "In Stock",
  },
  {
    id: 5,
    name: "Platinum Ring",
    img: "/categories/5.webp",
    price: "$499",
    description: "Stylish platinum ring",
    brand: "Fine Jewelers",
    rating: 4.3,
    reviews: 28,
    category: "Rings",
    stockStatus: "Out of Stock",
  },
  {
    id: 6,
    name: "Pearl Earrings",
    img: "/categories/6.webp",
    price: "$149",
    description: "Classic pearl earrings",
    brand: "Elegance",
    rating: 4.6,
    reviews: 19,
    category: "Earrings",
    stockStatus: "In Stock",
  },
  {
    id: 7,
    name: "Silver Bracelet",
    img: "/categories/7.webp",
    price: "$249",
    description: "Simple silver bracelet",
    brand: "Silver Touch",
    rating: 4.1,
    reviews: 10,
    category: "Bracelets",
    stockStatus: "In Stock",
  },
  {
    id: 8,
    name: "Emerald Necklace",
    img: "/categories/8.webp",
    price: "$799",
    description: "Beautiful emerald necklace",
    brand: "Greenstone",
    rating: 5.0,
    reviews: 48,
    category: "Necklaces",
    stockStatus: "Limited Stock",
  },
  {
    id: 9,
    name: "Ruby Ring",
    img: "/categories/2.webp",
    price: "$699",
    description: "Exquisite ruby ring",
    brand: "Precious Gems",
    rating: 4.7,
    reviews: 36,
    category: "Rings",
    stockStatus: "In Stock",
  },
  {
    id: 10,
    name: "Diamond Bracelet",
    img: "/categories/2.webp",
    price: "$899",
    description: "Luxury diamond bracelet",
    brand: "Dazzle",
    rating: 4.9,
    reviews: 52,
    category: "Bracelets",
    stockStatus: "In Stock",
  },
];

const filters = {
  category: ["All", "Rings", "Earrings", "Bracelets", "Necklaces"],
  stockStatus: ["All", "In Stock", "Limited Stock", "Out of Stock"],
};

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStockStatus, setSelectedStockStatus] = useState("All");

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesStockStatus =
      selectedStockStatus === "All" ||
      product.stockStatus === selectedStockStatus;
    return matchesCategory && matchesStockStatus;
  });

  return (
    <div className="flex flex-col md:flex-row mt-32 pt-6">
      {/* Filters Section */}
      <div className="w-full md:w-1/4 p-4 mt-6 bg-gray-50 border-r border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700">Category</label>
          <select
            className="mt-2 w-full border border-gray-300 rounded-md p-2 text-sm"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {filters.category.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Stock Status Filter */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Stock Status
          </label>
          <select
            className="mt-2 w-full border border-gray-300 rounded-md p-2 text-sm"
            value={selectedStockStatus}
            onChange={(e) => setSelectedStockStatus(e.target.value)}
          >
            {filters.stockStatus.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Section */}
      <div className="w-full md:w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Page;
