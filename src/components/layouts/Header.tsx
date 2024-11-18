// Import necessary libraries
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosSearch, IoMdReturnRight } from "react-icons/io";
import { CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaHeart,
  FaShoppingBag,
  FaUser,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";
import {
  BiCross,
  BiMenu,
  BiRightArrow,
  BiRightArrowCircle,
} from "react-icons/bi";
import { FaRightLeft } from "react-icons/fa6";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const data = [
        {
          title: "OFFERS",
          subcategories: [
            {
              name: "Discounted Necklaces",
              items: [
                "Gold Choker",
                "Diamond Pendant",
                "Pearl Necklace",
                "Silver Chain",
                "Gemstone Necklace",
              ],
            },
            {
              name: "Earrings on Sale",
              items: [
                "Hoop Earrings",
                "Stud Earrings",
                "Drop Earrings",
                "Chandbali Earrings",
                "Crystal Danglers",
              ],
            },
            {
              name: "Bracelet Deals",
              items: [
                "Gold Bangle",
                "Silver Cuff",
                "Tennis Bracelet",
                "Charm Bracelet",
                "Beaded Bracelet",
              ],
            },
            {
              name: "Ring Offers",
              items: [
                "Diamond Ring",
                "Gold Band",
                "Engagement Ring",
                "Birthstone Ring",
                "Rose Gold Ring",
              ],
            },
            {
              name: "Gift Combos",
              items: [
                "Necklace and Earrings Set",
                "Bracelet and Ring Combo",
                "Pearl Jewelry Set",
                "Gold Gift Set",
                "Silver Jewelry Set",
              ],
            },
            {
              name: "Special Discounts",
              items: [
                "Temple Jewelry",
                "Kundan Earrings",
                "Meenakari Bangles",
                "Navratri Pendants",
                "Festive Necklaces",
              ],
            },
          ],
        },
        {
          title: "SALE",
          subcategories: [
            {
              name: "Wedding Jewelry Sale",
              items: [
                "Bridal Necklace Set",
                "Kundan Earrings",
                "Diamond Bracelet",
                "Gold Anklets",
                "Temple Bangles",
              ],
            },
            {
              name: "Luxury at Discounts",
              items: [
                "Emerald Necklace",
                "Ruby Pendant",
                "Sapphire Ring",
                "Gold Choker",
                "Silver Cuff",
              ],
            },
            {
              name: "Clearance Earrings",
              items: [
                "Crystal Studs",
                "Gold Hoops",
                "Silver Danglers",
                "Pearl Earrings",
                "Gemstone Chandeliers",
              ],
            },
            {
              name: "Necklaces Clearance",
              items: [
                "Gold Chain",
                "Silver Pendant Necklace",
                "Minimalist Choker",
                "Statement Necklace",
                "Layered Necklace",
              ],
            },
            {
              name: "Festive Specials",
              items: [
                "Navratri Bangles",
                "Diwali Earrings",
                "Christmas Pendants",
                "Eid Necklaces",
                "Raksha Bandhan Bracelets",
              ],
            },
            {
              name: "Exclusive Deals",
              items: [
                "Kundan Set",
                "Meenakari Jhumkas",
                "Crystal Rings",
                "Pearl Jewelry",
                "Diamond Pendant",
              ],
            },
          ],
        },
        {
          title: "FESTIVE COLLECTION",
          subcategories: [
            {
              name: "Diwali Collection",
              items: [
                "Gold Necklace",
                "Temple Earrings",
                "Diamond Bangles",
                "Meenakari Jhumkas",
                "Festive Anklets",
              ],
            },
            {
              name: "Navratri Collection",
              items: [
                "Oxidized Jewelry Set",
                "Ghungroo Earrings",
                "Dandiya Bracelets",
                "Silver Rings",
                "Beaded Anklets",
              ],
            },
            {
              name: "Christmas Jewelry",
              items: [
                "Crystal Studs",
                "Star Pendants",
                "Gold Bracelets",
                "Santa Earrings",
                "Snowflake Necklaces",
              ],
            },
            {
              name: "Eid Collection",
              items: [
                "Elegant Pendants",
                "Gold Chains",
                "Diamond Earrings",
                "Pearl Bracelets",
                "Silver Bangles",
              ],
            },
            {
              name: "Wedding Specials",
              items: [
                "Bridal Sets",
                "Gold Kadas",
                "Kundan Necklaces",
                "Chandbali Earrings",
                "Ruby Rings",
              ],
            },
            {
              name: "Raksha Bandhan Gifts",
              items: [
                "Gold Rakhis",
                "Silver Rakhis",
                "Bracelet Rakhis",
                "Gemstone Pendants",
                "Custom Jewelry Gifts",
              ],
            },
          ],
        },
        {
          title: "SHOP",
          subcategories: [
            {
              name: "Necklaces",
              items: [
                "Gold Necklace",
                "Diamond Pendant",
                "Pearl Choker",
                "Silver Chain",
                "Beaded Necklace",
              ],
            },
            {
              name: "Earrings",
              items: [
                "Stud Earrings",
                "Hoop Earrings",
                "Drop Earrings",
                "Chandeliers",
                "Crystal Danglers",
              ],
            },
            {
              name: "Bracelets",
              items: [
                "Tennis Bracelet",
                "Charm Bracelet",
                "Cuff Bracelet",
                "Gold Bangle",
                "Silver Anklet",
              ],
            },
            {
              name: "Rings",
              items: [
                "Solitaire Ring",
                "Gold Band",
                "Emerald Ring",
                "Birthstone Ring",
                "Stackable Rings",
              ],
            },
            {
              name: "Anklets",
              items: [
                "Gold Anklet",
                "Silver Anklet",
                "Beaded Anklet",
                "Crystal Anklet",
                "Charm Anklet",
              ],
            },
            {
              name: "Pendants",
              items: [
                "Heart Pendant",
                "Gemstone Pendant",
                "Gold Coin Pendant",
                "Pearl Pendant",
                "Initial Pendant",
              ],
            },
          ],
        },
        {
          title: "COLLECTIONS",
          subcategories: [
            {
              name: "Bridal Jewelry",
              items: [
                "Kundan Necklace",
                "Diamond Studs",
                "Gold Bangles",
                "Temple Earrings",
                "Chandbali Jewelry",
              ],
            },
            {
              name: "Everyday Wear",
              items: [
                "Minimalist Rings",
                "Silver Hoops",
                "Simple Chains",
                "Small Studs",
                "Pearl Bracelets",
              ],
            },
            {
              name: "Luxury Jewelry",
              items: [
                "Ruby Necklaces",
                "Sapphire Bracelets",
                "Emerald Earrings",
                "Topaz Pendants",
                "Diamond Rings",
              ],
            },
            {
              name: "Custom Jewelry",
              items: [
                "Name Necklaces",
                "Engraved Rings",
                "Birthstone Bracelets",
                "Custom Pendants",
                "Initial Anklets",
              ],
            },
            {
              name: "Party Wear",
              items: [
                "Statement Earrings",
                "Crystal Chokers",
                "Gold Cuffs",
                "Gemstone Bangles",
                "Silver Rings",
              ],
            },
            {
              name: "Kids' Jewelry",
              items: [
                "Cute Pendants",
                "Tiny Rings",
                "Charm Bracelets",
                "Cartoon Earrings",
                "Adjustable Anklets",
              ],
            },
          ],
        },
        {
          title: "SPECIALS",
          subcategories: [
            {
              name: "Temple Jewelry",
              items: [
                "Temple Necklaces",
                "Meenakari Earrings",
                "Gold Bangles",
                "Pearl Pendants",
                "Choker Sets",
              ],
            },
            {
              name: "Kundan Jewelry",
              items: [
                "Kundan Necklaces",
                "Kundan Earrings",
                "Kundan Bracelets",
                "Kundan Rings",
                "Kundan Anklets",
              ],
            },
            {
              name: "Meenakari Collection",
              items: [
                "Meenakari Pendants",
                "Meenakari Earrings",
                "Meenakari Bangles",
                "Meenakari Sets",
                "Meenakari Bracelets",
              ],
            },
            {
              name: "Gemstone Jewelry",
              items: [
                "Ruby Bracelets",
                "Emerald Rings",
                "Topaz Earrings",
                "Sapphire Necklaces",
                "Amethyst Pendants",
              ],
            },
            {
              name: "Pearl Jewelry",
              items: [
                "Pearl Chokers",
                "Pearl Studs",
                "Pearl Bracelets",
                "Pearl Anklets",
                "Pearl Sets",
              ],
            },
            {
              name: "Crystal Jewelry",
              items: [
                "Crystal Earrings",
                "Crystal Pendants",
                "Crystal Rings",
                "Crystal Bangles",
                "Crystal Necklaces",
              ],
            },
          ],
        },
        {
          title: "GIFT STORE",
          subcategories: [
            {
              name: "Gift Sets",
              items: [
                "Necklace and Earring Set",
                "Bracelet and Ring Combo",
                "Gold Gift Box",
                "Pearl Gift Set",
                "Silver Gift Set",
              ],
            },
            {
              name: "Custom Gifts",
              items: [
                "Engraved Pendants",
                "Name Necklaces",
                "Personalized Rings",
                "Monogram Bracelets",
                "Photo Pendants",
              ],
            },
            {
              name: "Festive Gifts",
              items: [
                "Diwali Combos",
                "Christmas Jewelry Gifts",
                "Eid Special Jewelry",
                "Raksha Bandhan Sets",
                "Wedding Gifts",
              ],
            },
            {
              name: "Luxury Gifts",
              items: [
                "Diamond Sets",
                "Emerald Bracelets",
                "Ruby Rings",
                "Gold Pendants",
                "Sapphire Necklaces",
              ],
            },
            {
              name: "Affordable Gifts",
              items: [
                "Silver Studs",
                "Minimalist Pendants",
                "Simple Rings",
                "Charm Bracelets",
                "Beaded Necklaces",
              ],
            },
            {
              name: "Kids' Gifts",
              items: [
                "Cartoon Pendants",
                "Cute Earrings",
                "Adjustable Rings",
                "Tiny Bracelets",
                "Playful Anklets",
              ],
            },
          ],
        },
        {
          title: "SIGNATURE AADYAA",
          subcategories: [
            {
              name: "Signature Necklaces",
              items: [
                "Gold Adorn Necklace",
                "Diamond Heritage Necklace",
                "Temple Choker",
                "Royal Pearl Set",
                "Emerald Pendant",
              ],
            },
            {
              name: "Signature Earrings",
              items: [
                "Crystal Danglers",
                "Stud Earrings",
                "Gold Hoop Earrings",
                "Temple Earrings",
                "Kundan Jhumkas",
              ],
            },
            {
              name: "Signature Bracelets",
              items: [
                "Charm Bracelet",
                "Gold Bangle",
                "Emerald Bracelet",
                "Silver Kada",
                "Ruby Bracelet",
              ],
            },
            {
              name: "Signature Rings",
              items: [
                "Heritage Gold Ring",
                "Emerald Solitaire Ring",
                "Diamond Cluster Ring",
                "Pearl Ring",
                "Kundan Ring",
              ],
            },
            {
              name: "Exclusive Sets",
              items: [
                "Temple Set",
                "Kundan Bridal Set",
                "Royal Heritage Set",
                "Diamond Party Set",
                "Meenakari Set",
              ],
            },
            {
              name: "Limited Edition",
              items: [
                "Chandbali Earrings",
                "Oxidized Silver Anklets",
                "Gold Cuffs",
                "Statement Chokers",
                "Crystal Pendants",
              ],
            },
          ],
        },
      ];
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Change state when user scrolls
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [index, setIndex] = useState<any>();
  const [show, setShow] = useState<any>(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);
  const [activeSubcategoryIndex, setActiveSubcategoryIndex] = useState(null);

  return (
    <div className=" fixed w-full z-10">
      <div className="w-full md:backdrop-blur-sm bg-white md:bg-white/70">
        {" "}
        <Image
          alt="logo"
          src={require("../../../public/homepage/logo2.png")}
          className="w-24 block md:hidden mx-auto  "
        />
      </div>
      <div
        onMouseEnter={() => setIsScrolled(true)}
        onMouseLeave={() => setIsScrolled(false)}
        className={`w-full px-4 md:px-[15%]  ${
          isScrolled
            ? "backdrop-blur-sm md:bg-white/70 bg-white"
            : "md:bg-white bg-white md:bg-white/70 "
        } transition-all ease-linear duration-300 backdrop-blur-sm bg-black/40 md:mt-0   md:shadow-sm py-2 md:border-b border-gray-300 flex justify-between items-center  text-sm font-light`}
      >
        {/* Left Section */}
        <div className={`flex items-center space-x-4   `}>
          <FaSearch className="" />
          <FaMapMarkerAlt className="" />
          <span className="text-gray-800 font-poppins">Client Care</span>
        </div>

        {/* Center Section */}
        <Image
          alt="logo"
          src={require("../../../public/homepage/logo2.png")}
          className="w-36 md:block hidden"
        />

        {/* Right Section */}
        <div className={`flex items-center space-x-4 text-gray-700  `}>
          {
            <a
              href="#"
              className={`hover:underline text-gray-800  font-poppins  md:block hidden `}
            >
              LOGIN / REGISTER
            </a>
          }
          <FaUser
            className={`hover:underline text-gray-800  font-poppins  block md:hidden `}
          />
          <FaHeart className="" />
          <FaShoppingBag className="" />
          <div className=" md:hidden  ">
            {show ? (
              <BiCross
                className="rotate-[45deg] my-1"
                onClick={() => setShow(false)}
              />
            ) : (
              <BiMenu onClick={() => setShow(true)} />
            )}
          </div>
        </div>
      </div>
      <header
        className={`  ${
          isScrolled
            ? "backdrop-blur-sm bg-white/70 "
            : "  md:bg-white md:bg-white/70 backdrop-blur-sm bg-white/70 "
        }  transition-all ease-linear duration-300 backdrop-blur-sm bg-black/40 shadow-md fixed w-full z-10 flex items-center px-6 py-2}`}
      >
        {/* Logo Section */}
        {/* Navigation Links */}
        <nav className="md:flex-grow md:flex md:justify-center hidden md:space-x-4 py-2 md:w-full    ">
          {categories.map((category, index) => (
            <Link
              onMouseEnter={() => setIndex(index)}
              key={index}
              href={`/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-sm font-medium text-gray-700  font-poppins
              }  hover:text-gray-900 transition duration-300 uppercase relative hover-animation hover:text-pink-700  hover:font-semibold`}
            >
              {category.title}
              <span className="absolute left-0 top-0 h-[3px] w-0 bg-gray-900 transition-all duration-300 transform scale-x-0 origin-center hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>
      </header>{" "}
      {/* mobile menu */}
      <nav
        className={`duration-200 transition-all ease-in ${
          show ? "translate-x-0" : "translate-x-[100%]"
        } pt-1 pb-2 flex flex-col overflow-y-auto md:hidden bg-white gap-y-2`}
      >
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {/* Category */}
            <div
              onClick={() =>
                setActiveCategoryIndex(
                  activeCategoryIndex === categoryIndex ? null : categoryIndex
                )
              }
              className={` font-semibold   border-b text-gray-500 font-poppins
                transition flex items-center justify-between text-xs py-3 px-2 duration-300 uppercase hover:text-pink-700 hover:font-semibold`}
            >
              {category.title}{" "}
              <FaChevronDown className="text-xs text-gray-400" />
            </div>

            {/* Subcategories */}
            {activeCategoryIndex === categoryIndex && (
              <div className="  flex flex-col bg-white overflow-auto shadow-lg max-h-[50vh] overflow-y-auto">
                {category.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex}>
                    <div
                      onClick={() =>
                        setActiveSubcategoryIndex(
                          activeSubcategoryIndex === subIndex ? null : subIndex
                        )
                      }
                      className="  text-gray-500  flex justify-between w-full  px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      {subcategory.name}{" "}
                      <FaChevronDown className="text-xs text-gray-400" />
                    </div>

                    {/* Items */}
                    {activeSubcategoryIndex === subIndex && (
                      <div className="ml-6 pl-2 border-l border-gray-300 flex flex-col">
                        {subcategory.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={`/${subcategory.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block text-gray-500 py-2 text-sm hover:text-primary"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      {
        <nav
          className={`duration-300 transition-all ease-in ${
            show ? "translate-x-0" : "translate-x-[100%]"
          }  pt-1 pb-2 flex flex-col md:hidden    bg-white   gap-y-2  `}
        >
          {categories.map((category, index) => (
            <div key={index}>
              <div
                onClick={() => setIndex(index)}
                // href={`/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-sm font-semibold px-2 border-b text-gray-500  font-poppins
              }  hover:text-gray-900 transition flex items-center justify-between text-xs py-3 px-2 duration-300 uppercase relative hover-animation hover:text-pink-700  hover:font-semibold`}
              >
                {category.title} <BiRightArrow />
                <span className="absolute left-0 top-0 h-[3px] w-0 bg-gray-900 transition-all duration-300 transform scale-x-0 origin-center hover:scale-x-100"></span>
              </div>
              {index == index && (
                <div
                  onMouseLeave={() => setIndex(null)}
                  className=" mt-4 flex  flex-col items-center justify-center  h-[60vh] top-0 left-0 w-[100vw] md:bg-white bg-white/70   shadow-lg  "
                >
                  {/* <div className=" w-[80%] mx-auto grid grid-cols-1  ">
                    {categories[index].subcategories.map(
                      (subcategory, subIndex) => (
                        <div
                          key={subIndex}
                          // href={`/${subcategory.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block text-gray-800 font-semibold hover:text-base font-poppins"
                        >
                          <span className="font-baskervville text-lg text-base">
                            {" "}
                            {subcategory.name}
                          </span>
                          {subcategory?.items.map((item, subIndex2) => (
                            <Link
                              key={subIndex2}
                              href={`/${subcategory.name
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="block text-gray-500 py-2  text-sm hover:text-primary font-poppins"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      )
                    )}
                  </div> */}
                </div>
              )}
            </div>
          ))}
        </nav>
      }
      {index != null && (
        <div
          onMouseLeave={() => setIndex(null)}
          className=" mt-4 hidden md:flex  md:items-center md:justify-center  h-[60vh] top-0 left-0 w-[100vw] md:bg-white bg-white/70   shadow-lg  "
        >
          <div className="   grid grid-cols-3  gap-x-80  ">
            {categories[index].subcategories.map((subcategory, subIndex) => (
              <div
                key={subIndex}
                // href={`/${subcategory.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-gray-800 font-semibold hover:text-base font-poppins"
              >
                <span className="font-baskervville text-lg text-base">
                  {" "}
                  {subcategory.name}
                </span>
                {subcategory?.items.map((item, subIndex2) => (
                  <Link
                    key={subIndex2}
                    href={`/${subcategory.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block text-gray-500 py-2  text-sm hover:text-primary font-poppins"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
