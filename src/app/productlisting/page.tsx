"use client";

import { useState } from "react";
import ProductCard from "../../components/productlist/ProductCard";
import Image from "next/image";

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
  brand: [
    "All",
    "Jewelry Co.",
    "Glamour",
    "Luxury",
    "Royal Gems",
    "Fine Jewelers",
    "Elegance",
    "Silver Touch",
    "Greenstone",
    "Precious Gems",
    "Dazzle",
  ],
  priceRange: [
    { label: "All", min: 0, max: Infinity },
    { label: "Under $200", min: 0, max: 200 },
    { label: "$200 - $500", min: 200, max: 500 },
    { label: "$500 - $800", min: 500, max: 800 },
    { label: "Above $800", min: 800, max: Infinity },
  ],
  rating: [1, 2, 3, 4, 5], // Minimum rating filter
};

const ProductListingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStockStatus, setSelectedStockStatus] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(
    filters.priceRange[0]
  );
  const [selectedRating, setSelectedRating] = useState(1);

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesStockStatus =
      selectedStockStatus === "All" ||
      product.stockStatus === selectedStockStatus;
    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;
    const matchesPrice =
      parseInt(product.price.replace("$", ""), 10) >= selectedPriceRange.min &&
      parseInt(product.price.replace("$", ""), 10) <= selectedPriceRange.max;
    const matchesRating = product.rating >= selectedRating;

    return (
      matchesCategory &&
      matchesStockStatus &&
      matchesBrand &&
      matchesPrice &&
      matchesRating
    );
  });

  return (
    <div className="flex flex-col   mt-36 mx-auto ">
      {/* Banner Section */}
      <div className="relative h-56 sm:h-[30%] w-full   rounded-lg shadow-sm overflow-hidden mb-8">
        <div className="absolute inset-0 flex flex-col bg-transparent items-center justify-center text-center px-4 md:px-8">
          <h1 className="text-pink-600 text-2xl sm:text-4xl font-bold tracking-wide">
            Welcome to Our Jewelry Collection
          </h1>
          <p className="text-pink-600 text-sm sm:text-lg mt-2">
            Discover the perfect piece for every occasion.
          </p>
        </div>
        <Image
          src="/products/122.jpg" // Replace with your banner image path
          alt="Jewelry Banner"
          width={1350}
          height={300}
          className="   top-56 z-20  left-0 w-full h-[30vh]  object-cover opacity-30"
        />
      </div>

      <div className="flex flex-col md:flex-row  mx-auto md:items-start md:w-[80%]">
        {/* Filters Section */}
        <div className="w-full md:w-1/4 p-6 mt-4 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-2">
            Filters
          </h2>

          {/* Category Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Category
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Stock Status
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

          {/* Brand Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Brand
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              {filters.brand.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Price Range
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={selectedPriceRange.label}
              onChange={(e) => {
                const range = filters.priceRange.find(
                  (r) => r.label === e.target.value
                );
                setSelectedPriceRange(range);
              }}
            >
              {filters.priceRange.map((range) => (
                <option key={range.label} value={range.label}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Rating Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Rating (Minimum)
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={selectedRating}
              onChange={(e) => setSelectedRating(Number(e.target.value))}
            >
              {filters.rating.map((rating) => (
                <option key={rating} value={rating}>
                  {rating} Stars & Up
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Section */}
        <div className="w-full md:w-3/4 p-6 mt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600">
              <p className="text-lg font-medium">No products found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
