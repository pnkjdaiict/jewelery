import Image from "next/image";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaHeart,
  FaShoppingBag,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full px-[15%]  bg-white shadow-sm py-2 border-b border-orange-600 flex justify-between items-center  text-sm font-light">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-700" />
        <FaMapMarkerAlt className="text-gray-700" />
        <span className="text-gray-700">Client Care</span>
      </div>

      {/* Center Section */}
      <Image
        alt="logo"
        src={require("../../../public/homepage/logo.png")}
        className="w-36"
      />

      {/* Right Section */}
      <div className="flex items-center space-x-4 text-gray-700">
        <a href="#" className="hover:underline">
          LOGIN / REGISTER
        </a>
        <FaHeart className="text-gray-700" />
        <FaShoppingBag className="text-gray-700" />
        <span className="text-gray-700">₹0</span>
      </div>
    </div>
  );
}
