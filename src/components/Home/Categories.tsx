// components/JewelryCategories.js

import Image from "next/image";
import { SectionTitle } from "../SectionTitle/SectionTitle";

const categories = [
  { name: "Solitaires", imagePath: "/categories/1.webp" },
  { name: "Watch Jewellery", imagePath: "/categories/2.webp" },
  { name: "Men's Jewellery", imagePath: "/categories/3.webp" },
  { name: "Mangalsutras", imagePath: "/categories/4.webp" },
  { name: "Nose Pins", imagePath: "/categories/5.webp" },
  { name: "Kids Jewellery", imagePath: "/categories/6.webp" },
  { name: "Gold Coins", imagePath: "/categories/7.webp" },
  { name: "Anklets", imagePath: "/categories/8.webp" },
  { name: "Pendants", imagePath: "/categories/9.webp" },
  { name: "Rings", imagePath: "/categories/10.webp" },
  { name: "Necklaces", imagePath: "/categories/11.webp" },
  { name: "Earrings", imagePath: "/categories/12.webp" },
  { name: "Bangles", imagePath: "/categories/13.webp" },
  { name: "Bracelets", imagePath: "/categories/14.webp" },
];

const JewelryCategories = () => {
  return (
    <div className="md:w-[90%] mx-auto md:px-4 py-8">
      <div className="grid grid-cols-2 px-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        <div className="row">
          <SectionTitle title={"Shop By Category"}>
            Browse through your favorite categories. We&apos;ve got them all!
          </SectionTitle>
        </div>
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:cursor-pointer bg-pink-50 rounded-3xl p-4 shadow-md"
          >
            <Image
              src={category.imagePath} // Replace with actual image paths
              alt={category.name}
              width={140}
              height={140}
              className="rounded-md"
            />
            <p className="mt-2 text-base text-sm font-semibold font-baskervville ">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelryCategories;
