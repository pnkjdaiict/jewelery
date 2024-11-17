"use client";
import React, { useState } from "react";

const ReviewSectionForm = () => {
  const [activeForm, setActiveForm] = useState(""); // Tracks which form to display

  return (
    <div className="w-full  mx-auto py-10 ">
      {/* Section Heading */}
      <h2 className="text-3xl font-semibold text-pink-700 text-center mb-4 font-baskervville">
        Reviews for Similar Products
      </h2>

      {/* Average Rating and Actions */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl text-yellow-400">★★★★★</span>
          <span className="text-lg font-medium text-gray-700">27 Reviews</span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setActiveForm("review")}
            className="px-4 py-2 text-sm font-semibold font-baskervville text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
          >
            Write A Review
          </button>
        </div>
      </div>

      {/* Display Forms */}
      {activeForm === "review" && (
        <div className="p-4 border border-gray-200 rounded-md mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Write A Review
          </h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700"
              >
                Rating
              </label>
              <select
                id="rating"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              >
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="review"
                className="block text-sm font-medium text-gray-700"
              >
                Your Review
              </label>
              <textarea
                id="review"
                rows={4}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Write your review here"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-700 text-white text-sm font-semibold rounded hover:bg-pink-600"
            >
              Submit Review
            </button>
          </form>
        </div>
      )}

      {activeForm === "question" && (
        <div className="p-4 border border-gray-200 rounded-md mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Ask A Question
          </h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="question"
                className="block text-sm font-medium text-gray-700"
              >
                Your Question
              </label>
              <textarea
                id="question"
                rows={4}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Write your question here"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-700 text-white text-sm font-semibold rounded hover:bg-pink-600"
            >
              Submit Question
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ReviewSectionForm;
