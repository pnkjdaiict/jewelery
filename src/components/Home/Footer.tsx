import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaRedditAlien,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto flex flex-col items-center md:items-start mb-10">
        <h3 className="text-base font-medium mb-4 text-[18px]">
          JOIN OUR COMMUNITY
        </h3>
        <p className="mb-4 text-center md:text-left">
          Stay updated with the latest collections, trends, and exclusive
          offers!
        </p>
        <div className="flex flex-col md:flex-row items-center w-full space-y-3 md:space-y-0 md:space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-700 text-white px-4 py-2 rounded-full w-full md:w-auto"
          />
          <button className="bg-white-500 text-white px-4 py-2 rounded-full hover:bg-white-600">
            Subscribe
          </button>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-base font-medium mb-4 text-[18px]">ABOUT US</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-white text-white">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline ">
                Craftsmanship
              </a>
            </li>
          </ul>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-base font-medium mb-4 text-[18px]">EXPLORE</h3>
          <ul>
            <li>
              <a href="#" className="text-white hover:underline ">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline ">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline ">
                Bridal Collection
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline ">
                Custom Jewelry
              </a>
            </li>
          </ul>
        </div>

        {/* Policies Section */}
        <div>
          <h3 className="text-base font-medium mb-4 text-[18px]">POLICIES</h3>
          <ul>
            <li>
              <a href="#" className="text-white hover:underline ">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline ">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Care Section */}
        <div>
          <h3 className="text-base font-medium mb-4 text-[18px]">
            CUSTOMER CARE
          </h3>
          <ul>
            <li>
              <a href="#" className="text-white hover:underline ">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline ">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline ">
                Jewelry Care Tips
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-base font-medium mb-4 text-[18px]">FOLLOW US</h3>
          <div className="flex space-x-4 mb-4">
            <Link href="#" className="text-white hover:text-white-500">
              <FaFacebookF />
            </Link>
            <a href="#" className="text-white hover:text-white-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-base">
              <FaPinterest />
            </a>
            <a href="#" className="text-white hover:text-white-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-white-500">
              <FaYoutube />
            </a>
            <a href="#" className="text-white hover:text-white-500">
              <FaLinkedinIn />
            </a>
          </div>
          <button className="bg-white-500 text-white px-4 py-2 rounded-full hover:bg-white-600">
            Sign Up
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto text-center mt-8 border-t border-gray-700 pt-4">
        <p>© 2024 JewelryHaven. All rights reserved.</p>
        <select className="mt-2 bg-black border border-gray-700 text-gray-400 py-2 px-3 rounded">
          <option>English</option>
          <option>French</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
