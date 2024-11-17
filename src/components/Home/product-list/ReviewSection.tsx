"use client";
import React from "react";
import ReviewSectionForm from "./ReviewForm";

const reviews = [
  {
    name: "Mathew M.",
    role: "Verified Buyer",
    rating: 5,
    title: "Tapered Shank oval opal ring w/ trio diamond",
    date: "08/27/24",
    content:
      "The shopping experience was great. UPS sent and I had to sign for it. Package was done well and we got it quickly. The box even smelled amazing with an illuminated ring box. My wife loved the ring so much. She loves opals but I wanted her to have more so I got the trio diamonds too. We both are in love with it.",
  },
  {
    name: "Jessica R.",
    role: "Verified Buyer",
    rating: 4,
    title: "Beautiful Diamond Ring",
    date: "07/15/24",
    content:
      "The ring is gorgeous and looks stunning on my finger! The delivery was fast, and the packaging was beautiful. Only reason I am giving 4 stars is because I had to resize it, but otherwise, it’s perfect.",
  },
  {
    name: "Daniel K.",
    role: "Verified Buyer",
    rating: 5,
    title: "Perfect Anniversary Gift",
    date: "06/20/24",
    content:
      "I bought this ring as an anniversary gift for my wife, and she absolutely loves it. The diamonds sparkle beautifully under any light. Great service and amazing quality!",
  },
  {
    name: "Sophia T.",
    role: "Verified Buyer",
    rating: 4.5,
    title: "Elegant Design",
    date: "05/10/24",
    content:
      "The design of the ring is so elegant and classy. I received so many compliments for it! I wish the delivery packaging was slightly better, but the product itself is flawless.",
  },
];

const ReviewSection = () => {
  return (
    <div className="w-full mx-auto py-10 px-6">
      {/* Section Heading */}
     
      {/* Average Rating and Actions */}
      <div className=" ">
        
      <ReviewSectionForm/>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b pb-2 mb-6">
        <button className="text-gray-900 font-semibold border-b-2 border-pink-700">
          Reviews
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-md shadow-sm"
          >
            <div className="flex justify-between items-center mb-3">
              {/* Reviewer Info */}
              <div>
                <p className="text-sm font-bold text-gray-800">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
              {/* Review Date */}
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
            {/* Review Content */}
            <div className="mb-3">
              <p className="font-semibold text-gray-900">{review.title}</p>
              <p className="text-sm text-gray-700 mt-1">{review.content}</p>
            </div>
            {/* Rating */}
            <div className="text-yellow-400 text-sm">
              {"★".repeat(review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
