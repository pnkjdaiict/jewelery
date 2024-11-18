// pages/index.js

import Link from "next/link";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "Triad Solitaire Pendant",
      brand: "KaDesignBE",
      rating: 5,
      img: "/products/1.webp",
      stockStatus: "ONLY 1 LEFT IN STOCK",
      price: "₹47,336",
      description: "Enchanting Triad Solitaire Pendant",
    },
    {
      id: 2,
      name: "Oval Diamond Necklace",
      brand: "GemCraft",
      rating: 5,
      img: "/categories/7.webp",
      stockStatus: "ONLY 2 LEFT IN STOCK",
      price: "₹38,999",
      description: "Elegant Oval Diamond Necklace",
    },
    {
      id: 3,
      name: "Sapphire Pendant",
      brand: "JewelSphere",
      rating: 2,
      img: "/categories/1.webp",
      stockStatus: "ONLY 3 LEFT IN STOCK",
      price: "₹52,120",
      description: "Sapphire and Diamond Pendant",
    },
    {
      id: 4,
      name: "Pearl Necklace",
      brand: "LustreCraft",
      rating: 4,
      img: "/categories/2.webp",
      stockStatus: "LIMITED STOCK",
      price: "₹45,450",
      description: "Classic Pearl Necklace",
    },
    {
      id: 5,
      name: "Ruby Pendant",
      brand: "EleganceJewels",
      rating: 2,
      img: "/categories/3.webp",
      stockStatus: "IN STOCK",
      price: "₹60,000",
      description: "Vintage Ruby Pendant",
    },
    {
      id: 6,
      name: "Emerald Solitaire",
      brand: "EmeraldElite",
      rating: 5,
      img: "/categories/4.webp",
      stockStatus: "IN STOCK",
      price: "₹39,999",
      description: "Emerald Cut Solitaire",
    },
    {
      id: 7,
      name: "Gold Heart Necklace",
      brand: "GoldenCharm",
      rating: 2,
      img: "/categories/5.webp",
      stockStatus: "IN STOCK",
      price: "₹42,500",
      description: "Gold Heart Necklace",
    },
    {
      id: 8,
      name: "Diamond Pendant",
      brand: "BrillianceCraft",
      rating: 4,
      img: "/categories/6.webp",
      stockStatus: "ONLY 1 LEFT IN STOCK",
      price: "₹49,800",
      description: "Brilliant Diamond Pendant",
    },
  ];

  return (
    <div>
      <div className="md:col-12 flex align-items-center justify-content-center">
        <SectionTitle title={"Top Products"}>
          Explore Our Bestselling and Most Popular Designs
        </SectionTitle>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 p-2 md:p-4 md:gap-16  gap-y-4 md:mx-28">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex items-center justify-center  text-pink-700">
        <Link
          href={"/productlisting"}
          className="text-base text-xl capitalize py-3 font-poppins font-normal mt-10  hover:bg-pink-700  bg-pink-200 px-4 rounded transition-all ease-linear duration-200 hover:text-white"
        >
          {" "}
          View all Products
        </Link>
      </div>
    </div>
  );
}
