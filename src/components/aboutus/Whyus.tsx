"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function WhyUs() {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-5 md:gap-5">
      {/* Images */}
      <div className="flex md:order-2 justify-center md:w-[48%] gap-3 md:gap-5">
        <div className="rounded-md w-1/2 border overflow-hidden">
          <Image
            alt=""
            src={"/new/1.jpg"}
            objectFit="cover"
            width={600}
            height={600}
            className="hover:scale-110 ease-in-out w-full duration-500"
          />
        </div>
        <div className="rounded-md w-1/2 overflow-hidden">
          <Image
            alt=""
            src={"/new/3.jpg"}
            objectFit="cover"
            width={600}
            height={600}
            className="hover:scale-110 w-full  ease-in-out duration-500"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col md:px-16 2xl:px-24 justify-center items-center gap-5  ">
        <p className="font-medium text-base  md:text-xl lg:text-4xl font-baskervville">
          WHY OUR JEWELRY?
        </p>
        <div className="text-gray-600 font-poppins text-center flex flex-col gap-5 ">
          <p>
            Experience unmatched elegance with our handcrafted jewelry pieces.
            Each creation reflects a perfect blend of timeless artistry and
            modern design, made to leave a lasting impression.
          </p>

          <div className="w-full flex justify-center">
            <button
              className="bg-pink-800 text-white px-5 py-2 rounded hover:bg-gray-700"
              onClick={() => router.push("/about")}
            >
              About us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
