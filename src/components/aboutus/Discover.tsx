"use client";
import { useRouter } from "next/navigation";
import ReelPlayer from "./ReelPlayer";
import ButtonDark from "../comman/ButtonDark";

function Discover() {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex flex-col pb-16 md:flex-row items-center justify-between gap-5 pt-12">
        {/* Video */}
        <div className="rounded-md relative md:w-1/2 border overflow-hidden">
          <ReelPlayer playIcon src="/homepage/qqw.mp4" />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col md:px-10 gap-5">
          <p className="font-medium text-base text-xl text-center lg:text-5xl font-baskervville ">
            Discover timeless beauty in our exclusive jewelry collection.
          </p>

          <p className="text-gray-600 font-lato text-center ">
            From handcrafted designs to breathtaking gemstones, our pieces
            reflect passion, precision, and unparalleled artistry. Explore a
            world of sophistication and let our jewelry complement your unique
            style.
          </p>

          {/* <div className="flex gap-5 items-center justify-center">
            <ButtonDark
              buttonText={"Shop Jewelry"}
              handleClick={() => router.push("/products/")}
            />
            <ButtonDark
              buttonText={"Explore Collections"}
              className={"bg-gray-800"}
              handleClick={() => router.push("/collections/")}
            />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Discover;
