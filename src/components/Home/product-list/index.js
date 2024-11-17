"use client";
import ProductBadge from "../../../components/ProductBadge/ProductBadge";
import ProductCol from "../../../components/productcol";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import React, { useEffect, useState } from "react";
import ProductCard from "../../productlist/ProductCard";

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const apiData = [
      {
        id: 1,
        rating: 5,
        img: "/categories/8.webp",
        stockStatus: "ONLY 1 LEFT IN STOCK",
        price: "₹47,336",
        description: "Enchanting Triad Solitaire Pendant",
        category: "Pendants", // Added category
      },
      {
        id: 2,
        rating: 5,
        img: "/categories/7.webp",
        stockStatus: "ONLY 2 LEFT IN STOCK",
        price: "₹38,999",
        description: "Elegant Oval Diamond Necklace",
        category: "Necklaces", // Added category
      },
      {
        id: 3,
        rating: 2,
        img: "/categories/1.webp",
        stockStatus: "ONLY 3 LEFT IN STOCK",
        price: "₹52,120",
        description: "Sapphire and Diamond Pendant",
        category: "Pendants", // Added category
      },
      {
        id: 4,
        rating: 4,
        img: "/categories/2.webp",
        stockStatus: "LIMITED STOCK",
        price: "₹45,450",
        description: "Classic Pearl Necklace",
        category: "Necklaces", // Added category
      },
      {
        id: 5,
        rating: 2,
        img: "/categories/3.webp",
        stockStatus: "IN STOCK",
        price: "₹60,000",
        description: "Vintage Ruby Pendant",
        category: "Pendants", // Added category
      },
      {
        id: 6,
        rating: 5,
        img: "/categories/4.webp",
        stockStatus: "IN STOCK",
        price: "₹39,999",
        description: "Emerald Cut Solitaire",
        category: "Rings", // Added category
      },
      {
        id: 7,
        rating: 2,
        img: "/categories/5.webp",
        stockStatus: "IN STOCK",
        price: "₹42,500",
        description: "Gold Heart Necklace",
        category: "Necklaces", // Added category
      },
      {
        id: 8,
        rating: 4,
        img: "/categories/6.webp",
        stockStatus: "ONLY 1 LEFT IN STOCK",
        price: "₹49,800",
        description: "Brilliant Diamond Pendant",
        category: "Pendants", // Added category
      },
    ];
    
  
    
    setProducts(apiData);
    setFilteredProducts(apiData);
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className=" md:mx-28 md:py-8">
      {/* Section Title */}
      <SectionTitle title="Our Products" align="center">
        Explore our exclusive collection.
      </SectionTitle>

      {/* Modern Tabs */}
      <div className="flex justify-start md:space-x-6 space-x-1 mb-8 border-b border-gray-300">
        {["All", "Rings", "Necklaces", "Earrings", "Bracelets"].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`relative pb-2 transition-all duration-300 font-medium ${
              activeCategory === category
                ? "text-pink-600 after:content-[''] after:block after:h-[2px] after:w-full after:bg-pink-600 after:rounded-full"
                : "text-gray-500 hover:text-pink-600 after:content-[''] after:block after:h-[2px] after:w-0 after:bg-pink-600 after:rounded-full hover:after:w-full hover:after:transition-all hover:after:duration-300 md:px-3 px-2"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-4 grid-cols-2 p-2 md:p-4 md:gap-20 gap-1 md:mx-16">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
         <div key={product.id} className="mx-2 mb-2">
          <ProductCard product={product}  /></div>  
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}
