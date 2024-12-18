// components/WhatsNewSection.js

import Image from "next/image";
import { SectionTitle } from "../../SectionTitle/SectionTitle";

const sections = [
  {
    title: "Party collection",
    description:
      "Dedicated to creating exquisite jewellery that takes you from fine and delicate to timeless and elegant in no time. Check out the different collections that time and again, make us the pioneers in meeting all your jewellery needs.",
    imagePath: "/collection/party.jpg", // Replace with actual image path
    altText: "New Collection - Phulwari",
  },
  {
    title: "Wedding collection",
    description:
      "Jewellery making is an expression of love, no matter what the occasion. From designing jewellery for your big day to building your trousseau, from choosing the perfect ring to propose, to celebrating a landmark anniversary, we create jewellery for all occasions.",
    imagePath: "/collection/wed.jpg", // Replace with actual image path
    altText: "Shop by Occasion",
  },
  {
    title: "Office jewelry Collection",
    description:
      "Every week we bring you a surprise that sweetens the experience of jewellery shopping with us. Keep watching this space to know what you’re in for, every week!",
    imagePath: "/collection/office.png", // Replace with actual image path
    altText: "Black Friday Sale",
  },
];

const WhatsNewSection = () => {
  return (
    <div className="w-[90%] mx-auto   py-8">
      <div className="col-12 d-flex align-items-center justify-content-center">
        <SectionTitle title={"Shop by your favorite Collection"}>
          Sparkle and Shine: Discover Jewelry for Little Stars
        </SectionTitle>
      </div>

      <div className="grid md:grid-cols-3 gap-8 py-14">
        {sections.map((section, index) => (
          <div key={index} className="text-center">
            <Image
              src={section.imagePath}
              alt={section.altText}
              width={450}
              height={450}
              className="mx-auto rounded-lg h-72 hover:cursor-pointer"
            />
            <span className=" hover:cursor-pointer hover:underline  font-semibold mt-4    text-base text-2xl font-baskervville">
              <span className="text-2xl py-2 mt-1">{section.title}</span>
            </span>
            <p className="text-gray-600 mt-2 px-8">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsNewSection;
